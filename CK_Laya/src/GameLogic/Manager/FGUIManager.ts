
import { CK_FGUIConfig, CK_UIConfig, CK_UIType } from "../FGUI/CK_FGUIConfig";
import { PanelExample } from "../FGUI/PanelExample";

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


    private CurrentOpenUI=new Array();
    private CurrentCreatedUI=new Map();
    private CurrentLoadedPackage=new Map();



    public Init(){
        Laya.stage.addChild(fgui.GRoot.inst.displayObject);
    
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


    public OpenUI(uiType:CK_UIType,onLoadFinish,args?:any)
    {
        let openUI =()=>{
            let ui=null;
            if (this.CurrentCreatedUI.has(uiType)) {
                ui=this.CurrentCreatedUI.get(uiType);
                if(ui.IsMutiple==true){
                    ui= this.CreateNewUI(uiType);
                    ui.Init();
                }
            }
            else{
                ui= this.CreateNewUI(uiType);
                ui.Init();
                this.CurrentCreatedUI.set(uiType,ui);
            }

           
            //close last one
            if (this.CurrentOpenUI.length!=0) 
            {
                let lastUI= this.CurrentOpenUI[this.CurrentOpenUI.length-1];
                lastUI.Hide();
            }
            let id=this.CurrentOpenUI.length+1;
            ui.ID=id;
            ui.Show(args);
            this.CurrentOpenUI.push(ui);
        } 
        
        
        this.LoadUIPackage(uiType,()=>{
            openUI();
            onLoadFinish();
        });

    }


    public GetUIById(id):FGUIBase
    {
        let ui=null;
        if (id <= this.CurrentOpenUI.length) {
            ui=this.CurrentOpenUI[id-1];
        }

        return ui;
    }



    public CloseUI(id)
    {
        let ui=this.GetUIById(id);
        this.CurrentOpenUI.splice(id-1,1)
        ui.Close();
        

    }

    private CreateNewUI(uiType:CK_UIType):FGUIBase
    {
        let ui:FGUIBase=null
        switch (uiType) {
            case CK_UIType.PanelExample:
                ui=new PanelExample();
                break;
            
            case CK_UIType.WindowExample:
                
                break;    


            default:
                break;
        }

        return ui;
    }




}

