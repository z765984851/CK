import { FGUIManager } from "../Manager/FGUIManager";
import { CK_UIType } from "../FGUI/CK_FGUIConfig";
export class Utils
{
    private static instance:Utils;
    public static  get Instance():Utils
    {
        if(this.instance == undefined)
            this.instance = new Utils();
        return this.instance;
    }
    public ShowTipWindow(title?:string,context?:string,comfirm?,cancel?):void
    {
        FGUIManager.GetInstance().OpenWindow(CK_UIType.FGUITipWIndow,()=>{},
        [
            title,
            context,
            comfirm,
            cancel
        ]);
    }

    public ShowScrollTips(context:string)
    {
        let Content=fgui.UIPackage.createObject("common_component_package","common_tips_comp").asCom;
        let anim:fgui.Transition;
        let uiTextContex:fgui.GTextField;
        if(Content != null)
        {
            fgui.GRoot.inst.addChild(Content)
            Content.center();
            Content.setXY(Content.x,Content.y-165);
            Content.setPivot(0.5, 0.5);
            uiTextContex = Content.getChild("common_tips_txt").asTextField;
            anim = Content.getTransition("common_tipsdisappear_anim");
        }
        if(uiTextContex != null)
            uiTextContex.text = context;
        if(anim != null)
        {
            anim.play(Laya.Handler.create(this,()=>{
                Content.dispose();
            }));
        }
    }
}