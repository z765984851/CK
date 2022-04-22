import { CK_EventCode } from "../Common/CK_EventCode";
import { FGUIManager } from "../Manager/FGUIManager";
import { CK_FGUIConfig, CK_UIConfig, CK_UIType } from "./CK_FGUIConfig";
export class FGUI_LoadingPanel implements FGUIBase {

    constructor() {
    }
    Config: CK_UIConfig;
    UIType: CK_UIType = CK_UIType.LoadingPanel;
    IsInitFinish: boolean=false;
    Content: fgui.GComponent;
    ID: number=0;

    private animRotate:fgui.Transition;
    private animText:fgui.Transition;
    private progressText:fgui.GTextField;

    Init() {
        if (this.IsInitFinish==false) {

            this.Config=CK_FGUIConfig.GetInstance().Config.get(this.UIType);
            this.Content=fgui.UIPackage.createObject(this.Config.PackageName,this.Config.ComponentName).asCom;
            fgui.GRoot.inst.addChild(this.Content);
            this.Content.makeFullScreen();
            this.InitComp();
            this.SetVisible(false);
            this.IsInitFinish=true;               
            

         }
    }

    Show(args?: any) {
        this.SetVisible(true);
        this.animRotate.play(null,-1);
        this.animText.play(null,-1);
        Laya.stage.on(CK_EventCode.LoadingProgressChange,this,this.ChangeProgress)
    }



    Close() {
        this.SetVisible(false);
        this.ID=0;
        Laya.stage.off(CK_EventCode.LoadingProgressChange,this,this.ChangeProgress)
        Laya.stage.event(CK_EventCode.PanelDestroy,this.ID);
    }

    Destroy() {
        this.Content?.dispose()
        fgui.UIPackage.removePackage(this.Config.PackageName)
        this.IsInitFinish=false;
        this.ID=0;
        Laya.stage.event(CK_EventCode.PanelDestroy,this.UIType);
    }


    SetVisible(visible: boolean) {
        if (this.Content!=null) {
            this.Content.visible=visible;

         }   
    }

    private InitComp(){
        this.progressText=this.Content.getChild("openwindow_btn") as fgui.GTextField;
        this.animRotate=this.Content.getTransition("loading_logospinning _anim");
        this.animText=this.Content.getTransition("loading_titlechange_anim");
       
    }

    private ChangeProgress(value)
    {
        this.progressText.text=value+"%";
    }


     

}