import { DataManager } from "../../Manager/DataManager";
import { FGUIManager } from "../../Manager/FGUIManager";
import { SceneManager } from "../../Manager/SceneManager";
import { LobbyScene } from "../../Scene/LobbyScene";
import { CK_FGUIConfig, CK_UIType } from "../CK_FGUIConfig";
import { FGUI_MainPanel, MainPanelType } from "../Panel/FGUI_MainPanel";
import { PropertyGroup } from "./PropertyGroup";
import { UIBallLobbyMsg } from "./UIBallLobbyMsg";
import { UISpecialty } from "./UISpecialty";
import { CkSpecialtyConfig,CkSpecialty } from "../../Generate/Config/CkSpecialty";

export class UILobby implements CompBase {
    
    Content: fgui.GComponent;
    constructor(content) {
        this.Content=content;
        this.Init();
        this.BindEvent()
    }

     //data
     private specialtyList:UISpecialty[] = new Array();
     private specialtyDataList:CkSpecialty[] = new Array();

     //-----------component---------------
     private ballMsg:fgui.GComponent;
     private ballDayLimit:fgui.GComponent;
     private ballLimit:fgui.GComponent;
     private statusMsg:fgui.GComponent;
     private ballSpecialList:fgui.GList;
     private gachaBtn:fgui.GButton;
     private bagBtn:fgui.GButton;
     private formationBtn:fgui.GButton;
     private playBtn:fgui.GButton;
     private formationController:fgui.Controller;
 
     //-----------model---------------
     private currentBall:UIBallLobbyMsg=null;
     private currentProperty:PropertyGroup=null;



    Init(){
        this.ballMsg=this.Content.getChild("lobby_ckmodel_comp").asCom;
        this.ballDayLimit=this.Content.getChild("lobby_daylimit_comp").asCom;
        this.ballLimit=this.Content.getChild("lobby_careerlist_comp").asCom;
        this.statusMsg=this.Content.getChild("lobby_status_comp").asCom;
        this.ballSpecialList=this.Content.getChild("lobby_expertise_list").asList;
        this.gachaBtn=this.Content.getChild("lobby_gashaponmachines_btn").asButton;
        this.bagBtn=this.Content.getChild("lobby_bag_btn").asButton;
        this.formationBtn=this.Content.getChild("lobby_chooseck_btn").asButton;
        this.playBtn=this.Content.getChild("lobby_play_btn").asButton;
        this.formationController=this.Content.getController("lobby_ck_ctrl");
        
        if(this.ballSpecialList != null)
            this.ballSpecialList.itemRenderer = this.SetSpecialtyListRenderHandler();
    }

    private BindEvent(){
        this.playBtn.onClick(this,this.ToMatchPanel);
        this.bagBtn.onClick(this,this.OnClickBagBtn);
        this.ballMsg.onClick(this,this.ToBredPanel);
    }
  
    

    public Show()
    {

        let currentId=DataManager.GetInstance().PlayerData.NoramlaTeam.ckId;
        if (currentId != undefined) {
            this.formationController.selectedIndex=0;
            let ckInfo:ResponsePackage.RespCkInfo=DataManager.GetInstance().PlayerData.GetBallById(currentId);
            this.ChangeBall(ckInfo);
            this.ChangeProperty(ckInfo);
            this.SetSpecialtyList(ckInfo);
        }
        else{
            this.formationController.selectedIndex=1;
        }
        
        

    }

    public Hide()
    {
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

    private SetSpecialtyList(ckInfo:ResponsePackage.RespCkInfo)
    {
        if(this.ballSpecialList == null || ckInfo == null)
            return
        while(this.specialtyList.length > 0)
            this.specialtyList.pop().Hide();
        while(this.specialtyDataList.length > 0)
            this.specialtyDataList.pop();
        this.InitSpecailDataList(ckInfo);
        this.ballSpecialList.numItems = 0;
        this.ballSpecialList.numItems = this.specialtyDataList.length;
    }

    private InitSpecailDataList(ckInfo:ResponsePackage.RespCkInfo)
    {
        if(ckInfo == null)
            return
        ckInfo.dnaSpecialtyList.forEach(id => {
            let special = CkSpecialtyConfig.GetInstance().GetData((40200000+id).toString());
            if(special != null && ckInfo.quality >= special.quality )
                this.specialtyDataList.push(special);
        });
        ckInfo.specialtyList.forEach(id => {
            let special = CkSpecialtyConfig.GetInstance().GetData((40200000+id).toString());
            if(special != null)
                this.specialtyDataList.push(special);
        });
    }

    private SetSpecialtyListRenderHandler():Laya.Handler
    {
        return Laya.Handler.create(this,(idx:number,obj:fgui.GObject)=>{
            let specialty = new UISpecialty(obj);
            let data = this.specialtyDataList[idx];
            specialty.Show(data);
            this.specialtyList.push(specialty);
        },null,false);
    }

    private ToMatchPanel()
    {
         
        let mainPanel= FGUIManager.GetInstance().GetPanel(CK_UIType.MainPanel) as FGUI_MainPanel;
        if (mainPanel!=null || mainPanel!=undefined) {
            mainPanel.ChangePanel(MainPanelType.Match);
        }

    }

    private ToBredPanel()
    {
        let mainPanel= FGUIManager.GetInstance().GetPanel(CK_UIType.MainPanel) as FGUI_MainPanel;
        if (mainPanel!=null || mainPanel!=undefined) {
            let currentId=DataManager.GetInstance().PlayerData.NoramlaTeam.ckId;
            let ckInfo:ResponsePackage.RespCkInfo;
            if(currentId != undefined && currentId != null)
                ckInfo=DataManager.GetInstance().PlayerData.GetBallById(currentId);
            if(ckInfo != undefined && ckInfo!= null)
                mainPanel.ChangePanel(MainPanelType.Bred,[ckInfo,CK_UIType.MainPanel]);
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
        },false,MainPanelType.Lobby);
    }
}