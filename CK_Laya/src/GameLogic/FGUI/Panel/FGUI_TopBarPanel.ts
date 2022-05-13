import { CK_EventCode } from "../../Common/CK_EventCode";
import { IntegralLevelConfig } from "../../Generate/Config/IntegralLevel";
import { LangConfig } from "../../Generate/Config/Lang";
import { DataManager } from "../../Manager/DataManager";
import { CK_FGUIConfig, CK_UIConfig, CK_UIType } from "../CK_FGUIConfig";
export class FGUI_TopBarPanel implements FGUIBase{

    constructor() {
    }
    Config: CK_UIConfig;
    UIType: CK_UIType = CK_UIType.TopBarPanel;
    IsInitFinish: boolean=false;
    Content: fgui.GComponent;
    ID: number=0;

    private ckeText:fgui.GTextField;
    private cktText:fgui.GTextField;
    private divisionImgLoader:fgui.GLoader;
    private divisionName:fgui.GTextField;
    private idText:fgui.GTextField;
    private rankInfoBtn:fgui.GButton;
    private addCKEBtn:fgui.GButton;
    private addCKTBtn:fgui.GButton;
    private divisionProgressBar:fgui.GProgressBar;
    

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
        this.AddEvent();
        this.SetCKE();
        this.SetCKT();
        this.SetID();
        this.SetRankInfo();
    }
    
    Close() {
        this.SetVisible(false);
        this.RemoveEvent();
        this.ID=0;
        Laya.stage.event(CK_EventCode.PanelDestroy,this.ID);
    }

    Destroy() {
        this.Content?.dispose()
        this.IsInitFinish=false;
        this.ID=0;
        Laya.stage.event(CK_EventCode.PanelDestroy,this.UIType);
    }
    
    SetVisible(visible: boolean) {
        if (this.Content!=null) {
            this.Content.visible=visible;

         }   
    }

    private InitComp()
    {
       this.ckeText=this.Content.getChild("common_ckenumber_txt") as fgui.GTextField;
       this.cktText=this.Content.getChild("common_cktnumber_txt") as fgui.GTextField;
       this.divisionImgLoader=this.Content.getChild("common_rankingbadge_icon") as fgui.GLoader;
       this.divisionName=this.Content.getChild("common_rank_txt") as fgui.GTextField;
       this.rankInfoBtn=this.Content.getChild("common_info_btn") as fgui.GButton;
       this.addCKEBtn=this.Content.getChild("common_ckeplus_btn") as fgui.GButton;
       this.addCKTBtn=this.Content.getChild("common_cktplus_btn") as fgui.GButton;
       this.divisionProgressBar=this.Content.getChild("common_rank_bar") as fgui.GProgressBar;
       this.idText=this.Content.getChild("common_idnumber_txt").asTextField;
    }

    BringToFront()
    {

        fgui.GRoot.inst.setChildIndex(this.Content,fgui.GRoot.inst.numChildren);
    }

    SetCKE()
    {
        this.ckeText.text=DataManager.GetInstance().PlayerData.GCKE.toLocaleString();

    }

    SetCKT()
    {
        this.cktText.text=DataManager.GetInstance().PlayerData.CKT.toLocaleString();

    }

    SetID(){
        this.idText.text=DataManager.GetInstance().PlayerData.ID;
    }
    
    SetRankInfo()
    {
        let rankLevel=DataManager.GetInstance().PlayerData.RankLevel;
        let rankScore=DataManager.GetInstance().PlayerData.RankScore;
        let rankConfig=IntegralLevelConfig.GetInstance().GetData("3010000"+rankLevel);
        
        this.divisionImgLoader.url=rankConfig.rankIcon;
        this.divisionProgressBar.max=rankConfig.integral[1];
        this.divisionProgressBar.value= rankScore-rankConfig.integral[0];
        this.divisionName.text= LangConfig.GetInstance().GetData(rankConfig.rankLang).text; 
        
    }

    //event
    private AddEvent()
    {
        Laya.stage.on(CK_EventCode.UpdateRoleInfo,this,this.RefreshMoney);
    }
    private RemoveEvent()
    {
        Laya.stage.off(CK_EventCode.UpdateRoleInfo,this,this.RefreshMoney);
    }
    //eventCallback
    private RefreshMoney()
    {
        this.SetCKT();
        this.SetCKE();
    }
}