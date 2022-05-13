import { CK_EventCode } from "../../Common/CK_EventCode";
import { CK_FGUIConfig, CK_UIConfig, CK_UIType } from "../CK_FGUIConfig";

export class FGUI_TipWIndow extends fgui.Window implements FGUIBase {
    Config:CK_UIConfig;
    IsInitFinish: boolean=false;
    Content: fgui.GComponent;
    ID: number= 0;
    UIType: CK_UIType = CK_UIType.FGUITipWIndow;

    private args:any;
    private funcConfirm:Function = null;
    private funcCancel:Function = null;

    //comp
    private title:fgui.GTextField;
    private context:fgui.GTextField;
    private confirmBtn:fgui.GButton;
    private cancelBtn:fgui.GButton;

    Init() 
    {
        if (this.IsInitFinish==false) 
        {
            this.Config=CK_FGUIConfig.GetInstance().Config.get(this.UIType);
            this.Content=fgui.UIPackage.createObject(this.Config.PackageName,this.Config.ComponentName).asCom;
            this.contentPane=this.Content;
            this.center();
            this.modal = true;
            this.setPivot(0.5, 0.5);
            this.InitComp();
            this.BindEvent();
            this.HideBtns();
            this.IsInitFinish=true;               
         }
    }


    protected doShowAnimation(): void {
        this.setScale(0.1, 0.1);
        this.onShown()
        fgui.GTween.to2(0.1, 0.1, 1, 1, 0.3)
            .setTarget(this, this.setScale)
            .setEase(fgui.EaseType.QuadOut);
    }
    protected doHideAnimation(): void {
        fgui.GTween.to2(1, 1, 0.1, 0.1, 0.3)
            .setTarget(this, this.setScale)
            .setEase(fgui.EaseType.QuadOut)
            .onComplete(this.hideImmediately, this);
    }

    protected onShown(): void {
        this.SetTitle();
        this.SetContext();
        this.SetFunction();
    }

    



    protected onHide(): void {
        this.ID=0;
        Laya.stage.event(CK_EventCode.WindowClose);
    }


    protected onInit(): void {
        this.Init();
    }

    Show(args?: any) {
        this.args = args;
        this.SetVisible(true);
        this.HideBtns();
        this.show();
    }
   
    Close() {
        this.hide();
    }

    Destroy() {
        this.dispose();
        this.ID=0;
        this.IsInitFinish=false;
        Laya.stage.event(CK_EventCode.WindowDestroy,this.ID);
    }

    SetVisible(visible: boolean)
    {
        if (this.contentPane!=null) 
            this.contentPane.visible=visible;
    }
     

    private InitComp()
    {
        this.title = this.contentPane.getChild("common_title_txt").asTextField;
        this.context = this.contentPane.getChild("common_text_txt").asTextField;
        this.confirmBtn = this.contentPane.getChild("common_confirm_btn").asButton;
        this.cancelBtn = this.contentPane.getChild("common_cancel_btn").asButton;
    }

    private HideBtns()
    {
        if(this.confirmBtn != undefined)
            this.confirmBtn.visible = false;
        if(this.cancelBtn != undefined)
            this.cancelBtn.visible = false;
    }

    private SetTitle()
    {
        if(this.title == undefined)
            return
        let str = this.args[0];
        if(str == undefined)
            this.title.text = "...";
        else
            this.title.text = str;
    }
     
    private SetContext()
    {
        if(this.context == undefined)
        return
        let str = this.args[1];
        if(str == undefined)
            this.context.text = "...";
        else
            this.context.text = str;
    }

    private SetFunction()
    {
        this.funcConfirm = this.args[2];
        this.funcCancel = this.args[3];
        this.confirmBtn.visible = this.funcConfirm != null;
        this.cancelBtn.visible = this.funcCancel != null;
    }
 
    private BindEvent() 
    {
        if(this.confirmBtn != null)
            this.confirmBtn.onClick(this, () => {
                if(this.funcConfirm != null)
                    this.funcConfirm();
                this.Close();
            })
        if(this.cancelBtn != null)
            this.cancelBtn.onClick(this, () => {
                if(this.funcCancel != null)
                    this.funcCancel();
                this.Close();
            })
    }
}