
import { CK_EventCode } from "../Common/CK_EventCode";
import { CK_FGUIConfig, CK_UIConfig, CK_UIType } from "../FGUI/CK_FGUIConfig";
import { PanelExample } from "../FGUI/PanelExample";
import { WindowExample } from "../FGUI/WindowExample";
import { SceneManager } from "./SceneManager";

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
    // uitype,fguibase
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

    public LoadUIPackage(uiType:CK_UIType,onLoadFinish:Function){
    
        if (this.CurrentLoadedPackage.has(uiType)) {
            onLoadFinish()
        }
        else{
           let config=CK_FGUIConfig.GetInstance().Config.get(uiType);
           let packagePath=`res/fguipackage/${config.PackageName}/${config.PackageName}`
           fgui.UIPackage.loadPackage(packagePath,Laya.Handler.create(this,()=>{
                this.CurrentLoadedPackage.set(uiType,config)
                onLoadFinish();
            }));
        }

    }


    
    // can open mutiple
    public OpenWindow(uiType:CK_UIType,onLoadFinish,args?:any)
    {
        let openUI =()=>{
            let ui:FGUIBase=null;
            let config=CK_FGUIConfig.GetInstance().Config.get(uiType);
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
        
        
        this.LoadUIPackage(uiType,()=>{
            openUI();
            onLoadFinish();
        });

    }



    //can not open mutiple and is fullscreen
    public OpenPanel(uiType:CK_UIType,onLoadFinish,ifDestroyLast=true,args?:any)
    {
        let openUI =()=>{
            let ui:FGUIBase=null;
            let config=CK_FGUIConfig.GetInstance().Config.get(uiType);
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
                let lastPanel:FGUIBase=this.CurrentOpenPanel.pop();
                if (ifDestroyLast) {
                    
                    lastPanel.Destroy();
                }
                else{

                    lastPanel.SetVisible(false)
                }
            }
           
          
            let id=this.CurrentOpenPanel.length+1;
            ui.ID=id;
            ui.Show(args);
            this.CurrentOpenPanel.push(ui);
        } 
        
        
        this.LoadUIPackage(uiType,()=>{
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
       
        for (let index = 0; index < this.CurrentOpenPanel.length; index++) {
            let  element:FGUIBase = this.CurrentOpenPanel[index];
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


            default:
                break;
        }

        return ui;
    }





}

