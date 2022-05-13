import { CkSpecialty } from "../../Generate/Config/CkSpecialty";
import { LangConfig } from "../../Generate/Config/Lang";
import { Utils } from "../../Tools/Utils";

export class UISpecialty implements CompBase {
    
    Content: fgui.GComponent;
    constructor(content) {
        this.Content=content;
        this.Init();
        this.BindEvent()
    }
    //
     private specialData:CkSpecialty;

     //-----------component---------------
     private uiBtnSpecialty:fgui.GButton;
     private uiComDialog:fgui.GComponent;
     private uiTextName:fgui.GTextField;
     private uiTextType:fgui.GTextField;
     private uiTextDes:fgui.GTextField;
     private uiLoaderSpecialty:fgui.GLoader;
     //-----------model---------------
   

    Init()
    {
       this.uiBtnSpecialty = this.Content.getChild("bred_specialty_btn").asButton;
       this.uiComDialog = this.Content.getChild("bred_specialtydialog_comp").asCom;
       if(this.uiComDialog != null)
       {
            this.uiComDialog.visible = false;
            this.uiTextName = this.uiComDialog.getChild("bred_spcname_txt").asTextField;
            this.uiTextType = this.uiComDialog.getChild("bred_spctype_txt").asTextField;
            this.uiTextDes = this.uiComDialog.getChild("bred_spcdesc_txt").asTextField;
       }
    }

    private BindEvent()
    {
        this.uiBtnSpecialty.onClick(this,this.OnClickBtn)
    }
  
    public Show(args?:any)
    {
        if(args != null)
            this.specialData = args;
        if(this.Content != null)
            this.Content.visible = true;
        Laya.stage.on(Laya.Event.MOUSE_UP,this,this.ClickEventCallBack);

        if(this.uiTextName != null && this.specialData != null)
        {
            let langData = LangConfig.GetInstance().GetData(this.specialData.specialtyLang.toString())
            this.uiTextName.text = langData?langData.text :"";
        }
        if(this.uiTextType != null && this.specialData != null)
        {
            let langData = LangConfig.GetInstance().GetData(this.specialData.specialtyTypeLang.toString())
            this.uiTextType.text = langData?langData.text :"";
        }
        if(this.uiTextDes != null && this.specialData != null)
        {
            let langData = LangConfig.GetInstance().GetData(this.specialData.specialtyDescLang.toString())
            this.uiTextDes.text = langData?langData.text :"";
        }
        if(this.uiBtnSpecialty != null && this.specialData != null)
        {
            this.uiBtnSpecialty.icon = this.specialData.icon;
        }
    }

    public Hide()
    {
        if(this.Content != null)
        {
            this.Content.visible = false;
            this.Content.dispose();
        }
        Laya.stage.off(Laya.Event.MOUSE_UP,this,this.ClickEventCallBack);
    }
    
    private OnClickBtn()
    {
        if(this.specialData == null)
            return
        console.log("log----------------------specialData",this.specialData);
        if(this.specialData.specialtyLang != 0&&
            this.specialData.specialtyTypeLang == 0&&
            this.specialData.specialtyDescLang==0)
            {
                let langData = LangConfig.GetInstance().GetData(this.specialData.specialtyLang.toString())
                console.log("log----------------------langData",langData);
                if(langData == null)
                    return
                Utils.Instance.ShowScrollTips(langData.text);
                return
            }
        if(this.uiComDialog != null)
            this.uiComDialog.visible = true;
    }

    private ClickEventCallBack()
    {
        if(this.specialData != null && 
            this.specialData.specialtyLang != 0&&
            this.specialData.specialtyTypeLang == 0&&
            this.specialData.specialtyDescLang==0)
            {
                return
            }
        if(this.uiComDialog != null)
            this.uiComDialog.visible = false;
        
    }
}