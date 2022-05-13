import { CkSpecialty } from "../../Generate/Config/CkSpecialty";
import { LangConfig } from "../../Generate/Config/Lang";

export class UISpecialtyItem implements CompBase {
    
    Content: fgui.GComponent;
    constructor(content) {
        this.Content=content;
        this.Init();
        this.BindEvent()
    }
    //
     private specialData:CkSpecialty;

     //-----------component---------------
     private uiLoaderSpecialty:fgui.GLoader;
     private uiImgSelection:fgui.GImage;
     private uiTextName:fgui.GTextField;
     private uiTextType:fgui.GTextField;
     private uiTextDes:fgui.GTextField;
     //-----------model---------------
   

    Init()
    {
        this.uiLoaderSpecialty = this.Content.getChild("bred_spcicon_loader").asLoader;
        this.uiTextName = this.Content.getChild("bred_spcname_txt").asTextField;
        this.uiTextType = this.Content.getChild("bred_spctype_txt").asTextField;
        this.uiTextDes = this.Content.getChild("bred_spcdesc_txt").asTextField;
        this.uiImgSelection = this.Content.getChild("n22").asImage;
    }

    private BindEvent()
    {
        
    }
  
    public Show(args?:any)
    {
        if(args != null)
            this.specialData = args;
        if(this.Content != null)
            this.Content.visible = true;

        if( this.uiLoaderSpecialty != null && this.specialData != null)
            this.uiLoaderSpecialty.url = this.specialData.icon;
        if(this.uiTextName != null && this.specialData != null)
            this.uiTextName.text = LangConfig.GetInstance().GetData(this.specialData.specialtyLang.toString()).text;
        if(this.uiTextType != null && this.specialData != null)
            this.uiTextType.text = LangConfig.GetInstance().GetData(this.specialData.specialtyTypeLang.toString()).text;
        if(this.uiTextDes != null && this.specialData != null)
            this.uiTextDes.text = LangConfig.GetInstance().GetData(this.specialData.specialtyDescLang.toString()).text;
        this.ActiveSelection(false);
    }

    public Hide()
    {
        if(this.Content != null)
        {
            this.Content.visible = false;
            this.Content.dispose();
        }
    }

    public ActiveSelection(active:boolean)
    {
        if(this.uiImgSelection != null)
            this.uiImgSelection.visible = active;
    }
}