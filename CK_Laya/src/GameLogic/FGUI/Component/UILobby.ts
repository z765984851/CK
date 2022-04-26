import { DataManager } from "../../Manager/DataManager";
import { FGUIManager } from "../../Manager/FGUIManager";
import { SceneManager } from "../../Manager/SceneManager";
import { LobbyScene } from "../../Scene/LobbyScene";
import { CK_UIType } from "../CK_FGUIConfig";
import { FGUI_MainPanel, MainPanelType } from "../Panel/FGUI_MainPanel";
import { PropertyGroup } from "./PropertyGroup";
import { UIBallMsg } from "./UIBallMsg";

export class UILobby implements CompBase {
    
    Content: fgui.GComponent;
    constructor(content) {
        this.Content=content;
        this.Init();
        this.BindEvent()
    }

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
     private currentBall:UIBallMsg=null;
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
        
    }

    private BindEvent(){
        this.playBtn.onClick(this,this.ToMatchPanel)
    }
  
    

    public Show()
    {

        let currentId=DataManager.GetInstance().PlayerData.NoramlaTeam.ckId;
        if (currentId != undefined) {
            this.formationController.selectedIndex=0;
            let ckInfo:ResponsePackage.RespCkInfo=DataManager.GetInstance().PlayerData.GetBallById(currentId);
            this.ChangeBall(ckInfo);
            this.ChangeProperty(ckInfo);

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
            this.currentBall=new UIBallMsg(this.ballMsg);
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

    private ToMatchPanel()
    {
         
        let mainPanel= FGUIManager.GetInstance().GetPanel(CK_UIType.MainPanel) as FGUI_MainPanel;
        if (mainPanel!=null || mainPanel!=undefined) {
            mainPanel.ChangePanel(MainPanelType.Match);
        }

    }
}