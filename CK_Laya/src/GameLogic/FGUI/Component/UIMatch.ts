import { BattleType, MatchType } from "../../Common/BattleType";
import { CK_EventCode } from "../../Common/CK_EventCode";
import { RequestCMD } from "../../Common/RequestCMD";
import { CK_RespCMD } from "../../Common/CK_RespCMD";
import { ChampionshipConfig } from "../../Generate/Config/Championship";
import { FGUIManager } from "../../Manager/FGUIManager";
import { SceneManager, SceneType } from "../../Manager/SceneManager";
import { SocketClient } from "../../Message/SocketClient";
import { BattleScene } from "../../Scene/BattleScene";
import { CK_UIType } from "../CK_FGUIConfig";
import { FGUI_MainPanel, MainPanelType } from "../Panel/FGUI_MainPanel";
import { EventProperty } from "../../Model/LoadProgressProperty";
import { FGUI_LoadingPanel } from "../Panel/FGUI_LoadingPanel";

export class UIMatch implements CompBase {

    constructor(content) {
        this.Content=content;
        this.Init();

    }
    Content: fgui.GComponent;

    private returnBtn:fgui.GButton;

    private freeModeBtn:fgui.GButton;
    private championModeBtn:fgui.GButton;

    private free_singleBattleBtn:fgui.GButton;
    private free_teamBattleBtn:fgui.GButton;
    private champ_singleBattleBtn:fgui.GButton;
    private champ_teamBattleBtn:fgui.GButton;

    private nextChampionText:fgui.GTextField;
    
    

    private currentMatchMode:MatchType=MatchType.Free;
    private currentBattleMode:BattleType;

    private isRequestMsg:boolean=false;

    private currentChampionMsg:ResponsePackage.RespChampionship;
   
    Init() {
       this.InitComp();
       this.BindEvent();
    }

    

    Show(args?: any) {
        
    }
    Hide() {
        
    }
    private InitComp(){
        this.returnBtn=this.Content.getChild("match_back_btn").asButton;
        this.freeModeBtn=this.Content.getChild("match_matchmode1_btn").asButton;
        this.championModeBtn=this.Content.getChild("match_matchmode2_btn").asButton;
        this.free_singleBattleBtn=this.Content.getChild("match_mode1_free_btn").asButton;
        this.free_teamBattleBtn=this.Content.getChild("match_mode2_free_btn").asButton;
        this.champ_singleBattleBtn=this.Content.getChild("match_mode1_championship_btn").asButton;
        this.champ_teamBattleBtn=this.Content.getChild("match_mode2_championship_btn").asButton;
        this.nextChampionText=this.Content.getChild("match_time_txt").asTextField;
    }
    private BindEvent()
    {
        this.returnBtn.onClick(this,this.ToLobbyPanel);
        this.freeModeBtn.onClick(this,this.ChangeMode_Free);
        this.championModeBtn.onClick(this,this.ChangeMode_Champion);

        this.free_singleBattleBtn.onClick(this,this.StartMatch,[BattleType.SingleBattle_6] );
        this.free_teamBattleBtn.onClick(this,this.ChangeMode_Champion,[BattleType.TeamBattle_3]);
        this.champ_singleBattleBtn.onClick(this,this.ChangeMode_Free,[BattleType.SingleBattle_6]);
        this.champ_teamBattleBtn.onClick(this,this.ChangeMode_Champion,[BattleType.TeamBattle_3]);
    }

    private ToLobbyPanel()
    {
        let mainPanel= FGUIManager.GetInstance().GetPanel(CK_UIType.MainPanel) as FGUI_MainPanel;
        if (mainPanel!=null || mainPanel!=undefined) {
            mainPanel.ChangePanel(MainPanelType.Lobby);
        }
    }

    private ChangeMode_Free(){

        this.currentMatchMode=MatchType.Free;
    }

    private ChangeMode_Champion(){
        this.currentMatchMode=MatchType.Championship;
        this.RqstChampionMsg();
        
    }

    private RqstChampionMsg()
    {
        if (this.isRequestMsg==false) {
            Laya.stage.once(RequestCMD.ChampionshipInfo.toString(),this,this.freshChampionshipInfo);
            SocketClient.GetInstance().SendBizMsg_Empty(RequestCMD.ChampionshipInfo);
            this.isRequestMsg=true;
        }
    }

    private freshChampionshipInfo(data)
    {
        let respfully=ResponsePackage.RespFully.decode(data)
        let championInfo=respfully.respMatch.respChampionship as ResponsePackage.RespChampionship;
        this.currentChampionMsg=championInfo;
        

        //fresh btn show
        this.champ_singleBattleBtn.grayed=!championInfo.survivalEnd;
        this.champ_teamBattleBtn.grayed=!championInfo.teamEnd;

        //fresh time 
        let champConfig=ChampionshipConfig.GetInstance().GetData(championInfo.cid);
        let nextChampConfig=ChampionshipConfig.GetInstance().GetData(champConfig.nextId)
        this.nextChampionText.text=`${nextChampConfig.startHour}:00:00`;       
        this.isRequestMsg=false;


    }



    public StartMatch(battleMode)
    {

        Laya.stage.once(CK_RespCMD.BattleStart.toString(),this,this.MatchSuccess);
        Laya.stage.once(CK_RespCMD.MatchFailed.toString(),this,this.MatchFailed);
        
        this.currentBattleMode=battleMode;
        switch (this.currentMatchMode) {
            case MatchType.Free:
                this.EnterFree();
                break;
            case MatchType.Championship:
                this.EnterChampion();
                break;
            default:
                break;
        }
    }

    private EnterFree()
    {
        console.log("[UIMatch]EnterFree ",this.currentBattleMode);
        let msg=RequestPackage.RqstInt.create();
        msg.value=this.currentBattleMode;
       
        let buf:Uint8Array=RequestPackage.RqstInt.encode(msg).finish();
        SocketClient.GetInstance().SendBizMsg(RequestCMD.FreeMatch,buf);
        
        
    }
    private EnterChampion()
    {
        console.log("[UIMatch]EnterChampion ",this.currentBattleMode);
        if (this.currentChampionMsg==undefined) {
            console.log("[UIMatch] Is wait champion msg");
            return;
        }
        switch (this.currentBattleMode) {
            case BattleType.SingleBattle_6:
                if (!this.currentChampionMsg.survivalEnd) {
                    return;
                }
                break;
            case BattleType.TeamBattle_3:
                if (!this.currentChampionMsg.teamEnd) {
                    return;
                }
                break;    
            default:
                break;
        }
        let msg=RequestPackage.RqstInt.create();
        msg.value=this.currentBattleMode;
        let buf:Uint8Array=RequestPackage.RqstInt.encode(msg).finish();
        SocketClient.GetInstance().SendBizMsg(RequestCMD.ChampionshipMatch,buf);
        
    }

   
    private MatchSuccess(data){
        //1.show loading panle
        //2.wait resp
        //3.load scene
        //4.enter scene
        //5.close all ui
        //6.show battle panel
        //7.game start
        let respfully=ResponsePackage.RespFully.decode(data);
        FGUIManager.GetInstance().OpenPanel(CK_UIType.LoadingPanel,()=>{});
        this.ChangeLoadingProgress(10);
        
        SceneManager.GetInstance().LoadScene3D(SceneType.BattleScene,Laya.Handler.create(this,this.LoadFGUIPackage,[respfully.respFight.fightResult]));

    }
    private LoadFGUIPackage(fightResult){
        FGUIManager.GetInstance().LoadUIPackage("battle_package",()=>{
            this.ChangeLoadingProgress(50);
            FGUIManager.GetInstance().AddPackage("battle_package") 
            this.EnterScene(fightResult);
        });
    }

    private MatchFailed(){
        
        console.log("[UIMatch] match failed");
    }

  
    private EnterScene(battleData)
    {
        this.ChangeLoadingProgress(100);
        Laya.timer.once(500,this,()=>{
            SceneManager.GetInstance().DestroyCurrentScene();
            SceneManager.GetInstance().ChangeScene3D(SceneType.BattleScene);
            let battleScene=SceneManager.GetInstance().CurrentActiveScene as BattleScene;
            battleScene.GameInit(battleData);
    
            FGUIManager.GetInstance().CloseAllPanel();
            FGUIManager.GetInstance().CloseAllWindow();
    
            battleScene.GameStart();
        })
      

    }


    private ChangeLoadingProgress(value,isTween=false)
    {
        let data:EventProperty.LoadProgressProperty=new EventProperty.LoadProgressProperty(value,isTween);
        Laya.stage.event(CK_EventCode.LoadingProgressChange,data);
        
    }

}