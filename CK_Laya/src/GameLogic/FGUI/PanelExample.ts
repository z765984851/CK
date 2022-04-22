import { CK_EventCode } from "../Common/CK_EventCode";
import { FGUIManager } from "../Manager/FGUIManager";
import { CK_FGUIConfig, CK_UIConfig, CK_UIType } from "./CK_FGUIConfig";


export class PanelExample  implements FGUIBase 
{
     
    
     Config:CK_UIConfig;
     IsInitFinish: boolean=false;
     Content: fgui.GComponent;
     ID: number= 0;
     UIType: CK_UIType = CK_UIType.PanelExample;

     private testBtn:fgui.GButton;

    

     Init() {
         if (this.IsInitFinish==false) {

            this.Config=CK_FGUIConfig.GetInstance().Config.get(this.UIType);
            FGUIManager.GetInstance().AddPackage(this.Config.PackageName);
            this.Content=fgui.UIPackage.createObject(this.Config.PackageName,this.Config.ComponentName).asCom;
            fgui.GRoot.inst.addChild(this.Content);
            this.Content.makeFullScreen();
            this.InitComp();
            this.BindEvent();
            this.SetVisible(false);
            this.IsInitFinish=true;               
            

         }
         
     }


     Show(args? : any) {
        this.SetVisible(true);

     }

     Close() 
     {

        this.SetVisible(false);
        this.ID=0;
        Laya.stage.event(CK_EventCode.PanelDestroy,this.ID);
     }


     SetVisible(visible: boolean)
     {

         if (this.Content!=null) {
            this.Content.visible=visible;

         }   
     }
     
    

     Destroy() {

         this.Content?.dispose()
         fgui.UIPackage.removePackage(this.Config.PackageName)
         this.IsInitFinish=false;
         this.ID=0;
         Laya.stage.event(CK_EventCode.PanelDestroy,this.UIType);
     }

    
     private InitComp(){

        this.testBtn=this.Content.getChild("openwindow_btn").asButton;
     }
     
     private BindEvent()
     {
        this.testBtn.onClick(this,()=>{
            FGUIManager.GetInstance().OpenWindow(CK_UIType.WindowExample,()=>{});  
        })

     }

}



