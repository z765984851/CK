import { BattleEntityFactory } from "../../Battle/BattleEntityFactory";
import { BattleType, MatchType } from "../../Common/BattleType";
import { CK_EventCode } from "../../Common/CK_EventCode";
import { CK_RespCMD } from "../../Common/CK_RespCMD";
import { RequestCMD } from "../../Common/RequestCMD";
import { FGUIManager } from "../../Manager/FGUIManager";
import { SceneManager, SceneType } from "../../Manager/SceneManager";
import { EventProperty } from "../../Model/LoadProgressProperty";
import { BattleScene } from "../../Scene/BattleScene";
import { CK_FGUIConfig, CK_UIConfig, CK_UIType } from "../CK_FGUIConfig";
import { UIMatchWaitingItem } from "../Component/UIMatchWaitingItem";
export class FGUI_MatchWaitingPanel implements FGUIBase {

    constructor() {
    }
    Config: CK_UIConfig;
    UIType: CK_UIType = CK_UIType.MatchWaitingPanel;
    IsInitFinish: boolean=false;
    Content: fgui.GComponent;
    ID: number=0;
    
    private matchModeCtrl:fgui.Controller;
    private battleModeCtrl:fgui.Controller;
    private waitStateCtrl:fgui.Controller;
    private countDownAnim:fgui.Transition;
    private matchTimeText:fgui.GTextField;

    private matchType:MatchType;
    private battleType:BattleType;
    private waitingComps:UIMatchWaitingItem[]=new Array();
    private matchTime:number=0;

    
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
        
        this.matchType=args[0];
        this.battleType=args[1];
        // console.log("[FGUI_MatchWatingPanel]Show",this.matchType);
        this.SetVisible(true);
        this.BindEvent();
        //Init ctrl state
        this.matchModeCtrl.selectedIndex=this.matchType-1;
        this.battleModeCtrl.selectedIndex=this.battleType-1;
        this.waitStateCtrl.selectedIndex=0;
        //start match count
        this.matchTime=0;
        Laya.timer.loop(1000,this,this.MatchTimer);
    }



    Close() {
        
        this.ID=0;
        Laya.stage.off(CK_RespCMD.UserJoin.toString(),this,this.OnGetUserJoin);
        Laya.timer.clear(this,this.MatchTimer);

        this.SetVisible(false);
        Laya.stage.event(CK_EventCode.PanelDestroy,this.ID);
    }

    Destroy() {
        Laya.stage.off(CK_RespCMD.UserJoin.toString(),this,this.OnGetUserJoin);
        Laya.timer.clear(this,this.MatchTimer);
        
        this.IsInitFinish=false;
        this.ID=0;
        this.Content?.dispose()
        Laya.stage.event(CK_EventCode.PanelDestroy,this.UIType);
       
    }


    SetVisible(visible: boolean) {
        if (this.Content!=null) {
            this.Content.visible=visible;

         }   
    }

    private InitComp(){
    
        this.matchModeCtrl=this.Content.getController("match_matchtype_ctrl");
        this.battleModeCtrl=this.Content.getController("match_gametype_ctrl");
        this.waitStateCtrl=this.Content.getController("match_readychange_ctrl");
        this.countDownAnim=this.Content.getTransition("match_countdown_anim");
        this.matchTimeText=this.Content.getChild("match_matching_comp").asCom.getChild("match_countdown_txt").asTextField;
        for (let index = 0; index < 6; index++) {
            let childName=`match_player${index+1}card_comp`;
            let comp=this.Content.getChild(childName).asCom;
            this.waitingComps[index]=new UIMatchWaitingItem(comp);
        }

    }

    private BindEvent(){
        Laya.stage.on(CK_RespCMD.UserJoin.toString(),this,this.OnGetUserJoin);
        Laya.stage.once(CK_RespCMD.BattleStart.toString(),this,this.OnGetGameStart);
        Laya.stage.once(CK_RespCMD.MatchFailed.toString(),this,this.OnMatchFailed);
        if(this.matchType==MatchType.Free){
            Laya.stage.once(RequestCMD.FreeMatch.toString(),this,this.OnGetRoomData)
        }
        else if(this.matchType==MatchType.Championship){
            Laya.stage.once(RequestCMD.ChampionshipMatch.toString(),this,this.OnGetRoomData)
        }
    }

    private OnGetRoomData(data)
    {
        let respfully=ResponsePackage.RespFully.decode(data);
        
        let users=respfully.respMatch.roomRoles;
        // console.log("[FGUI_MatchWatingPanel]OnGetRoomData",respfully);
        for (let i = 0; i < users.length; i++) {
            let userJoinData:ResponsePackage.IRespRoomRole = users[i];
            let index=userJoinData.index;
            let waitingComp=this.waitingComps[index-1];
            waitingComp.SetData(userJoinData);
        }
    }

    //1403
    private OnGetUserJoin(data)
    {
        let respfully=ResponsePackage.RespFully.decode(data);

        let userJoinData:ResponsePackage.IRespRoomRole=respfully.respMatch.joinRole;
        let index=userJoinData.index;
        let waitingComp=this.waitingComps[index-1];
        waitingComp.SetData(userJoinData);

        // console.log("[FGUI_MatchWatingPanel]",index,userJoinData,"Join");

    }


    private OnGetGameStart(data)
    {
        
        //1.change title to match success
        //2.play count down anim
        //3.show loading panle
        //4.wait resp
        //5.load scene
        //6.enter scene
        //7.close all ui
        //8.show battle panel
        //9.game start
        let respfully=ResponsePackage.RespFully.decode(data);
        this.waitStateCtrl.selectedIndex=1;
        this.countDownAnim.play(Laya.Handler.create(this,()=>{
            FGUIManager.GetInstance().OpenPanel(CK_UIType.LoadingPanel,()=>{});
            this.ChangeLoadingProgress(10);
            SceneManager.GetInstance().LoadScene3D(SceneType.BattleScene,Laya.Handler.create(this,this.LoadFGUIPackage,[respfully.respFight.fightResult]));
        }),1)

       
      
    } 


    private LoadFGUIPackage(fightResult){
        FGUIManager.GetInstance().LoadUIPackage("battle_package",()=>{
            this.ChangeLoadingProgress(50);
            this.LoadBattleEntity(fightResult);
        });
    }

    private LoadBattleEntity(fightResult)
    {
        BattleEntityFactory.GetInstance().Init(Laya.Handler.create(this,()=>{
            this.ChangeLoadingProgress(60);
            FGUIManager.GetInstance().AddPackage("battle_package");
            this.EnterScene(fightResult);
        }));

    }


    private OnMatchFailed(){
        
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

    private MatchTimer()
    {
        this.matchTime++;
        let sec=Math.floor(this.matchTime%60);
        let min=Math.floor(this.matchTime/60);
        let secStr:string=sec.toString();
        let minStr:string=min.toString();
        if (sec<10) {
            secStr="0"+sec;
        }
        if (min<10) {
            minStr="0"+min;
        }
        this.matchTimeText.text=minStr+":"+secStr;

    }


}