import { DataManager } from "../../Manager/DataManager";
import { FGUIManager } from "../../Manager/FGUIManager";
import { SceneManager } from "../../Manager/SceneManager";
import { LobbyScene } from "../../Scene/LobbyScene";
import { CK_UIType } from "../CK_FGUIConfig";
import { FGUI_MainPanel, MainPanelType } from "../Panel/FGUI_MainPanel";
import { PropertyGroup } from "./PropertyGroup";
import { UIBallLobbyMsg } from "./UIBallLobbyMsg";
import { UISpecialty } from "./UISpecialty";
import { SocketClient } from "../../Message/SocketClient";
import { RequestCMD } from "../../Common/RequestCMD";
import { CK_RespCMD } from "../../Common/CK_RespCMD";
import { Utils } from "../../Tools/Utils";
import { CkLevelUpConfig,CkLevelUp } from "../../Generate/Config/CkLevelUp";
import { CkSpecialtyConfig,CkSpecialty } from "../../Generate/Config/CkSpecialty";
import { TeamType } from "../../Common/TeamType";

export class UIBred implements CompBase {
    
    Content: fgui.GComponent;
    constructor(content) {
        this.Content=content;
        this.Init();
        this.BindEvent()
    }

    //
     private lastPanelType:CK_UIType = CK_UIType.MainPanel;
     private ckInfo:ResponsePackage.IRespCkInfo;
     private specialtyList:UISpecialty[] = new Array();
     private specialtyDataList:CkSpecialty[] = new Array();
     private dnaSpecialtyNum:number = 0;

     //-----------component---------------
     private ballMsg:fgui.GComponent;
     private statusMsg:fgui.GComponent;
     private backBtn:fgui.GButton;
     private bagBtn:fgui.GButton;
     private uiBtnBattle:fgui.GButton;
     private uiBtnUpLevel:fgui.GButton;
     private uiBarTodayLimit:fgui.GProgressBar;
     private uiBarTotle:fgui.GProgressBar;
     private uiTextCost:fgui.GTextField;
     private uiListSpecialty:fgui.GList;
 
     //-----------model---------------
     private currentBall:UIBallLobbyMsg=null;
     private currentProperty:PropertyGroup=null;

    Init()
    {
        this.ballMsg=this.Content.getChild("bred_ckmodel_comp").asCom;
        this.statusMsg=this.Content.getChild("bred_status_comp").asCom;
        this.backBtn=this.Content.getChild("bred_back_btn").asButton;
        this.bagBtn=this.Content.getChild("bred_bag_btn").asButton;
        this.uiBtnUpLevel=this.Content.getChild("bred_upgrade_btn").asButton;
        this.uiBtnBattle=this.Content.getChild("bred_battlestate_btn").asButton;
        this.uiBarTodayLimit=this.Content.getChild("bred_today_bar").asProgress;
        this.uiBarTotle=this.Content.getChild("bred_total_bar").asProgress;
        this.uiListSpecialty=this.Content.getChild("bred_specialty_list").asList;
        this.uiTextCost=this.Content.getChild("bred_spend_comp").asCom.getChild("bred_upgrademoney_txt").asTextField;
        this.uiListSpecialty=this.Content.getChild("bred_specialty_list").asList;

        if(this.uiListSpecialty != null)
            this.uiListSpecialty.itemRenderer = this.SetSpecialtyListRenderHandler();
    }

    private BindEvent()
    {
        this.backBtn.onClick(this,this.OnClickBackBtn);
        this.bagBtn.onClick(this,this.OnClickBagBtn);
        this.uiBtnUpLevel.onClick(this,this.OnClickUpLevelBtn);
        this.uiBtnBattle.onClick(this,this.OnClickBattleBtn);
    }
  
    

    public Show(args? : any)
    {  
        if(args != null && args[0] != null)
            this.ckInfo = args[0];
        if(args != null && args[1] != null)
            this.lastPanelType = args[1];
        this.AddEvent();
        this.SetData();
    }

    public Hide()
    {
        this.RemoveEvent();
        let lobbyScene=SceneManager.GetInstance().CurrentActiveScene as LobbyScene;
        lobbyScene.StopRotate();
        lobbyScene.HideCurrent();
    }

    private ChangeBall(ckInfo:ResponsePackage.RespCkInfo)
    {
        if (this.currentBall==null) {
            this.currentBall=new UIBallLobbyMsg(this.ballMsg);
        }
        this.currentBall.SetData(ckInfo)
    }

    private ChangeProperty(ckInfo:ResponsePackage.RespCkInfo)
    {
        if (this.currentProperty==null) {
            this.currentProperty=new PropertyGroup(this.statusMsg);
        }
        this.currentProperty.SetData(ckInfo)
    }

    //setdata

    private SetData()
    {
        if (this.ckInfo != undefined && this.ckInfo != null) {
            let ckData = ResponsePackage.RespCkInfo.create(this.ckInfo);
            this.ChangeBall(ckData);
            this.ChangeProperty(ckData);
        }
        this.SetDayLimitBar();
        this.SetTotleBar();
        this.SetUpLevelCost();
        this.SetUpLevelBtnState();
        this.SetSpecialtyList();
        this.SetBattleBtnState();
    }

    private SetDayLimitBar()
    {
        if(this.uiBarTodayLimit == null)
            return
    }

    private SetTotleBar()
    {
        if(this.uiBarTotle == null)
            return
        if(this.ckInfo == null)
            return
        this.uiBarTotle.value = this.ckInfo.life;
        this.uiBarTotle.max = this.ckInfo.maxLife;
    }

    private SetUpLevelCost()
    {
        if(this.uiTextCost == null)
            return
        this.uiTextCost.text = "x0";
        if(this.ckInfo == null)
            return
        let id = (40100000 + this.ckInfo.quality*1000+ this.ckInfo.level + 1).toString();
        let configData = CkLevelUpConfig.GetInstance().GetData(id);
        let cost = 0;
        if(configData != null)
            cost = configData.costGcke;
        this.uiTextCost.text = "x" + cost;
    }

    private SetUpLevelBtnState()
    {
        if(this.uiBtnUpLevel == null)
            return
        this.uiBtnUpLevel.title = "Upgrade";
        if(this.ckInfo == null)
            return
        if(this.ckInfo.propertyNum > 0)
            this.uiBtnUpLevel.title = "+++";
        else if(this.ckInfo.chooseSpecialtyList.length > 0)
            this.uiBtnUpLevel.title = "|||";
    }

    private SetSpecialtyList()
    {
        if(this.uiListSpecialty == null || this.ckInfo == null)
            return
        while(this.specialtyList.length > 0)
            this.specialtyList.pop().Hide();
        while(this.specialtyDataList.length > 0)
            this.specialtyDataList.pop();
        this.InitSpecailDataList();
        this.uiListSpecialty.numItems = 0;
        this.uiListSpecialty.numItems = this.specialtyDataList.length;
    }

    private SetBattleBtnState()
    {
        if(this.uiBtnBattle == null)
            return
        let ctrl = this.uiBtnBattle.getController("bred_battlestate_ctrl"); 
        if(ctrl == null)
            return
        ctrl.selectedIndex = 0;
        let currentId=DataManager.GetInstance().PlayerData.NoramlaTeam.ckId;
        if(currentId != null && this.ckInfo != null && this.ckInfo.id == currentId)
            ctrl.selectedIndex = 1;
    }

    private InitSpecailDataList()
    {
        if(this.ckInfo == null)
            return
        this.dnaSpecialtyNum = 0;
        this.ckInfo.dnaSpecialtyList.forEach(id => {
            let special = CkSpecialtyConfig.GetInstance().GetData((40200000+id).toString());
            if(special != null )
            {
                if(this.ckInfo.quality >= special.quality)
                    this.specialtyDataList.push(special);
                else
                    this.specialtyDataList.push(new CkSpecialty(0, 10001, 0, 0, "ui://4kxumucaljvzrq", 1));
                this.dnaSpecialtyNum++;
            }
        });
        this.ckInfo.specialtyList.forEach(id => {
            let special = CkSpecialtyConfig.GetInstance().GetData((40200000+id).toString());
            if(special != null)
                this.specialtyDataList.push(special);
        });
        let diff = this.specialtyDataList.length - this.dnaSpecialtyNum;
        switch (diff) 
        {
            case 0:
                {
                    if (this.ckInfo.level < 11)
                        this.specialtyDataList.push(new CkSpecialty(0, 10003, 0, 0, "ui://4kxumucaljvzrr", 1));
                    else
                        this.specialtyDataList.push(new CkSpecialty(0, 0, 0, 0, "ui://4kxumucaljvzrs", 1));
                    if (this.ckInfo.level < 20)
                        this.specialtyDataList.push(new CkSpecialty(0, 10004, 0, 0, "ui://4kxumucaljvzrr", 1));
                    else
                        this.specialtyDataList.push(new CkSpecialty(0, 0, 0, 0, "ui://4kxumucaljvzrs", 1));
                }
                break;
            case 1:
                {
                    if (this.ckInfo.level < 20)
                        this.specialtyDataList.push(new CkSpecialty(0, 10004, 0, 0, "ui://4kxumucaljvzrr", 1));
                    else
                        this.specialtyDataList.push(new CkSpecialty(0, 0, 0, 0, "ui://4kxumucaljvzrs", 1));
                }
                break;
            default:
                break;
        }
    }

    private SetSpecialtyListRenderHandler():Laya.Handler
    {
        return Laya.Handler.create(this,(idx:number,obj:fgui.GObject)=>{
            let specialty = new UISpecialty(obj);
            let data = this.specialtyDataList[idx];
            specialty.Show(data);
            this.specialtyList.push(specialty);
            if(data.specialtyLang == 0)
            {
                obj.onClick(this,()=>{
                    FGUIManager.GetInstance().OpenWindow(CK_UIType.SpecialtyWindow,function(){},this.ckInfo);
                });
            }
        },null,false);
    }

    private ToLobby()
    {   
        let mainPanel= FGUIManager.GetInstance().GetPanel(CK_UIType.MainPanel) as FGUI_MainPanel;
        if (mainPanel!=null || mainPanel!=undefined) {
            mainPanel.SetVisible(true);
            mainPanel.ChangePanel(MainPanelType.Lobby);
        }
    }

    private ToBag()
    {
        let mainPanel= FGUIManager.GetInstance().GetPanel(CK_UIType.MainPanel) as FGUI_MainPanel;
        if (mainPanel!=null || mainPanel!=undefined) 
        {
            mainPanel.SetVisible(false);
        }
        let curScene = SceneManager.GetInstance().CurrentActiveScene as LobbyScene;
        curScene.HideCurrent();
        FGUIManager.GetInstance().OpenPanel(CK_UIType.BagPanel,()=>
        {
            FGUIManager.GetInstance().OpenPanel(CK_UIType.TopBarPanel,()=>{},false);
        },false,MainPanelType.Lobby);
    }

    public OnClickBackBtn()
    {
        switch(this.lastPanelType)
        {
            case CK_UIType.MainPanel:this.ToLobby();break;
            case CK_UIType.BagPanel:this.ToBag();break;
            default:break;
        }
    }

    private OnClickBagBtn()
    { 
        let mainPanel= FGUIManager.GetInstance().GetPanel(CK_UIType.MainPanel) as FGUI_MainPanel;
        if (mainPanel!=null || mainPanel!=undefined) 
        {
            mainPanel.SetVisible(false);
        }
        let curScene = SceneManager.GetInstance().CurrentActiveScene as LobbyScene;
        curScene.HideCurrent();
        FGUIManager.GetInstance().OpenPanel(CK_UIType.BagPanel,()=>
        {
            FGUIManager.GetInstance().OpenPanel(CK_UIType.TopBarPanel,()=>{},false);
        },false,MainPanelType.Bred);
    }

    private OnClickUpLevelBtn()
    {
        if(this.ckInfo == null)
            return
        if(this.ckInfo.propertyNum != null && this.ckInfo.propertyNum > 0)
            FGUIManager.GetInstance().OpenWindow(CK_UIType.UpgradeWindow,function(){},this.ckInfo);
        else if(this.ckInfo.chooseSpecialtyList != null && this.ckInfo.chooseSpecialtyList.length > 0)
            FGUIManager.GetInstance().OpenWindow(CK_UIType.SpecialtyWindow,function(){},this.ckInfo);
        else if(this.ckInfo.level < this.ckInfo.levelLimit)
            Utils.Instance.ShowTipWindow("","uplevel?",()=>{this.RqstLevelUp()},function(){});
    }

    private OnClickBattleBtn()
    {
        this.RqstBattle();
    }

    //rqst
    private RqstLevelUp() 
    {
        if(this.ckInfo == null || this.ckInfo == undefined)
            return
        let rqstData = RequestPackage.RqstInt.create();
        rqstData.value = this.ckInfo.id;
        let buf: Uint8Array = RequestPackage.RqstInt.encode(rqstData).finish();
        SocketClient.GetInstance().SendBizMsg(RequestCMD.LevelUp, buf);
    }
    private RqstBattle() 
    {
        if(this.ckInfo == null || this.ckInfo == undefined )
            return
        let currentTeam =DataManager.GetInstance().PlayerData.NoramlaTeam; 
        if(currentTeam == null)
            return
        let rqstData = RequestPackage.RqstIntKeyIntValue.create();
        rqstData.key = TeamType.NormalTeam;
        rqstData.value = this.ckInfo.id;
        let buf: Uint8Array = RequestPackage.RqstIntKeyIntValue.encode(rqstData).finish();
        SocketClient.GetInstance().SendBizMsg(RequestCMD.UpdateTeam, buf);
    }

    private AddEvent()
    {
        //levelup recvData
        Laya.stage.on(RequestCMD.LevelUp.toString(),this,this.RespLevelUp);
        Laya.stage.on(RequestCMD.AllotProperty.toString(),this,this.RespPropertySet);
        Laya.stage.on(RequestCMD.ChooseSpecialty.toString(),this,this.RespPropertySet);
        Laya.stage.on(RequestCMD.UpdateTeam.toString(),this,this.RespPropertySet);
    }

    private RemoveEvent()
    {
        Laya.stage.off(RequestCMD.LevelUp.toString(),this,this.RespLevelUp);
        Laya.stage.off(RequestCMD.AllotProperty.toString(),this,this.RespPropertySet);
        Laya.stage.off(RequestCMD.ChooseSpecialty.toString(),this,this.RespPropertySet);
        Laya.stage.off(RequestCMD.UpdateTeam.toString(),this,this.RespPropertySet);
    }

    //evetCallBack
    private RespLevelUp(data)
    {
        let respfully=ResponsePackage.RespFully.decode(data);
        DataManager.GetInstance().PlayerData.UpdatePlayerData(respfully);
        this.ckInfo =  DataManager.GetInstance().PlayerData.GetBallById(this.ckInfo.id);
        if(this.ckInfo != null && this.ckInfo.propertyNum > 0)
            FGUIManager.GetInstance().OpenWindow(CK_UIType.UpgradeWindow,function(){},this.ckInfo);
        else if(this.ckInfo != null && this.ckInfo.chooseSpecialtyList.length > 0)
            FGUIManager.GetInstance().OpenWindow(CK_UIType.SpecialtyWindow,function(){},this.ckInfo);
        this.SetData();
    }

    private RespPropertySet(data)
    {
        let respfully=ResponsePackage.RespFully.decode(data);
        DataManager.GetInstance().PlayerData.UpdatePlayerData(respfully);
        this.ckInfo =  DataManager.GetInstance().PlayerData.GetBallById(this.ckInfo.id);
        this.SetData();
    }

}