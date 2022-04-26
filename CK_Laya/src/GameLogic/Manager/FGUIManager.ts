
import { CK_EventCode } from "../Common/CK_EventCode";
import { CK_FGUIConfig, CK_UIConfig, CK_UIType } from "../FGUI/CK_FGUIConfig";
import { FGUI_LoadingPanel } from "../FGUI/Panel/FGUI_LoadingPanel";
import { FGUI_MainPanel } from "../FGUI/Panel/FGUI_MainPanel";
import { PanelExample } from "../FGUI/PanelExample";
import { WindowExample } from "../FGUI/WindowExample";
import { SceneManager } from "./SceneManager";
import { FGUI_TopBarPanel } from "../FGUI/Panel/FGUI_TopBarPanel";

export class FGUIManager {

    private constructor() {
    }


    public static Instance : FGUIManager;
    public static GetInstance(): FGUIManager
    {
        if(this.Instance==null){
            this.Instance=new FGUIManager ();
        }
        return this.Instance
    }


    //fguibase
    private CurrentOpenWindow=new Map();
    //fguibase
    private CurrentOpenPanel=new Array();
    //uitype,fguibase
    private CurrentCreatedUI=new Map();
    // packagename,packageName
    private CurrentLoadedPackage=new Map();



    public Init(){
        SceneManager.GetInstance().UIScene.addChild(fgui.GRoot.inst.displayObject);
    
        Laya.stage.on(CK_EventCode.WindowClose,this,()=>{
              this.OnCloseWindow();
        });
        Laya.stage.on(CK_EventCode.WindowDestroy,this,(arg)=>{
            
            this.OnDestroyWindow(arg);
        });
        Laya.stage.on(CK_EventCode.PanelDestroy,this,(arg)=>{
            this.OnDestroyPanel(arg);
        });
    }

   

    public LoadUIPackage(packageName:string,onLoadFinish:Function){
    
        if (this.CurrentLoadedPackage.has(packageName)) {
            onLoadFinish()
        }
        else{        
           let packagePath=`res/fguipackage/${packageName}/${packageName}`
           fgui.UIPackage.loadPackage(packagePath,Laya.Handler.create(this,()=>{
                this.CurrentLoadedPackage.set(packageName,packageName)
                onLoadFinish();
            }));
        }

    }

    public LoadUIPackages(packageNames:string[],onLoadFinish:Function,onLoadProgress:Function)
    {
    
        let progress=0;
        let wholeValue=packageNames.length;
        let progressFloat=0;
        for (let index = 0; index < wholeValue; index++) {
            const packageName = packageNames[index];
            this.LoadUIPackage(packageName,()=>{
                progress++;
                progressFloat=progress/wholeValue;
                onLoadProgress(progressFloat);
                if (progress==wholeValue) {
                    onLoadFinish();
                }
               
            });
        }

    }

    public AddPackage(packageName:string)
    {
        let packagePath=`res/fguipackage/${packageName}/${packageName}`
        fgui.UIPackage.addPackage(packagePath);

    }


    
    // can open mutiple
    public OpenWindow(uiType:CK_UIType,onLoadFinish,args?:any)
    {
        let config=CK_FGUIConfig.GetInstance().Config.get(uiType);
        let openUI =()=>{
            let ui:FGUIBase=null;
          
            if (config.IsMutiple || this.CurrentCreatedUI.has(uiType)==false) {
                ui= this.CreateNewUI(uiType);
                this.CurrentCreatedUI.set(uiType,ui);
            }
            else
            {
                // ui=this.CurrentCreatedUI.get(uiType);
                console.log("window",uiType,"can not mutiple open");
                return;
            }

           

             
            //close last one
            if (this.CurrentOpenWindow.size!=0) 
            {
                let lastUI= this.CurrentOpenWindow.get(this.CurrentOpenWindow.size);
                lastUI.SetVisible(false);
                
            }

           
            let id=this.CurrentOpenWindow.size+1;
            ui.ID=id;
            ui.Show(args);
            this.CurrentOpenWindow.set(id,ui);
        } 
        
        
        this.LoadUIPackage(config.PackageName,()=>{
            openUI();
            onLoadFinish();
        });

    }



    //can not open mutiple and is fullscreen
    public OpenPanel(uiType:CK_UIType,onLoadFinish,ifDestroyLast=true,args?:any)
    {
        let config=CK_FGUIConfig.GetInstance().Config.get(uiType);
        let openUI =()=>{
            let ui:FGUIBase=null;
            
            if ( this.CurrentCreatedUI.has(uiType)==false) {
                ui= this.CreateNewUI(uiType);
                ui.Init();
                this.CurrentCreatedUI.set(uiType,ui);
            }
            else
            {
                ui=this.CurrentCreatedUI.get(uiType);
            }
           
            if (this.CurrentOpenPanel.length!=0) {
                
                if (ifDestroyLast) {
                    let lastPanel:FGUIBase=this.CurrentOpenPanel.pop();
                    lastPanel.Destroy();
                }
                
            }
           
          
            let id=this.CurrentOpenPanel.length+1;
            ui.ID=id;
            ui.Show(args);
            this.CurrentOpenPanel.push(ui);
        } 
        
        
        this.LoadUIPackage(config.PackageName,()=>{
            openUI();
            onLoadFinish();
        });

    }


    //id=index in Array.length
    public GetWindow(id)
    {

        let ui=null;
        if (id<=this.CurrentOpenWindow.size) {
            ui=this.CurrentOpenWindow.get(id);
        }
        else{
            console.log("GetWindow",id,"is out of bounds");
            
        }
        return ui;
    }

    public GetPanel(uiType)
    {
         console.log("[FGUIManager]",this.CurrentOpenPanel);
       
        for (let index = 0; index < this.CurrentOpenPanel.length; index++) {
            let element:FGUIBase = this.CurrentOpenPanel[index];
            if (element.UIType==uiType) {
                return element;
            }
        }
        return null;
    }



    public OnCloseWindow()
    {
        this.CurrentOpenWindow.delete(this.CurrentOpenWindow.size);
        if (this.CurrentOpenWindow.size!=0) {
            let lastUI:FGUIBase=this.CurrentOpenWindow.get(this.CurrentOpenWindow.size);
            lastUI.SetVisible(true);
        }
    }

    
    public OnDestroyWindow(id)
    {
        
        
        let ui:FGUIBase=this.GetWindow(id);
        
        if (!this.IfOpenThisWindow(ui.UIType)) {
            if (this.CurrentCreatedUI.has(ui.UIType)) {
                this.CurrentCreatedUI.delete(ui.UIType);
            }
        }
        
    }


    public OnDestroyPanel(uiType)
    {
        let ui=this.GetPanel(uiType);
        if (this.CurrentCreatedUI.has(uiType)) {
            this.CurrentCreatedUI.delete(uiType);
        }
        
    }

    public CloseAllWindow(){
       
        let windowCount=this.CurrentOpenWindow.size;
        //when the window destroy ,the system will change the list,so we have to change this from tail 
        for (let index = windowCount; index > 0; index--) {
            let ui:FGUIBase=this.CurrentOpenWindow.get(index);
            ui.Destroy();
            
        }

        
        this.CurrentOpenWindow.clear();
    }


    private IfOpenThisWindow(uiType):boolean
    {
        for (let index = 0; index < this.CurrentOpenWindow.size; index++) {
            let element:FGUIBase = this.CurrentOpenWindow.get(index+1);
            if (element.UIType==uiType) {
                return true;
            }
        }

        return false;
    }

    

    private CreateNewUI(uiType:CK_UIType):FGUIBase
    {
        let ui:FGUIBase=null
        switch (uiType) {
            case CK_UIType.PanelExample:
                ui=new PanelExample();
                break;
            
            case CK_UIType.WindowExample:
                ui=new WindowExample();
                break;    
            case CK_UIType.LoadingPanel:
                ui=new FGUI_LoadingPanel();
                break;   

            case CK_UIType.MainPanel:
                ui=new FGUI_MainPanel();
                break;  
            
            case CK_UIType.TopBarPanel:
                ui=new FGUI_TopBarPanel();
                break;  
            default:
                break;
        }

        return ui;
    }





}

