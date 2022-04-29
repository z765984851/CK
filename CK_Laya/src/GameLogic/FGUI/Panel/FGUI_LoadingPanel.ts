import { CK_EventCode } from "../../Common/CK_EventCode";
import { EventProperty } from "../../Model/LoadProgressProperty";
import { CK_FGUIConfig, CK_UIConfig, CK_UIType } from "../CK_FGUIConfig";
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
    private currentProgress=0;

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
        this.progressText.text="0%";
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
        this.IsInitFinish=false;
        this.ID=0;
        Laya.stage.off(CK_EventCode.LoadingProgressChange,this,this.ChangeProgress)
        Laya.stage.event(CK_EventCode.PanelDestroy,this.UIType);
       
    }


    SetVisible(visible: boolean) {
        if (this.Content!=null) {
            this.Content.visible=visible;

         }   
    }

    private InitComp(){
        this.progressText=this.Content.getChild("loading_progress_txt") as fgui.GTextField;
        this.animRotate=this.Content.getTransition("loading_logospinning _anim");
        this.animText=this.Content.getTransition("loading_titlechange_anim");
       
    }

    public ChangeProgress(data:EventProperty.LoadProgressProperty)
    {

        let value:number=data.Value;
        let ifTween:boolean=false;
        
        if (ifTween) {
           
           //TODO
        }
        else{
            this.currentProgress=value;
            this.progressText.text=this.currentProgress+"%";
        }
       
        
    }

 

     

}