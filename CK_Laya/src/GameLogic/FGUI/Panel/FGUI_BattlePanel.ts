import { BallMsgFactory } from "../../Battle/BallMsgFactory";
import { BattleAnimFactory } from "../../Battle/BattleAnimFactory";
import { HurtNumFactory } from "../../Battle/HurtNumFactory";
import { BattleType } from "../../Common/BattleType";
import { CK_EventCode } from "../../Common/CK_EventCode";
import { DataManager } from "../../Manager/DataManager";
import { SceneManager } from "../../Manager/SceneManager";
import { BattleScene } from "../../Scene/BattleScene";
import { CK_FGUIConfig, CK_UIConfig, CK_UIType } from "../CK_FGUIConfig";
import { UIBattleUserInfo } from "../Component/UIBattleUserInfo";

export class FGUI_BattlePanel implements FGUIBase {

    
    constructor() {
    }
    Config: CK_UIConfig;
    UIType: CK_UIType = CK_UIType.BattlePanel;
    IsInitFinish: boolean=false;
    Content: fgui.GComponent;
    ID: number=0;
   
    private battleData:ResponsePackage.RespFightResult;

    private timeText:fgui.GTextField;
    private msgLayer:fgui.GComponent;
    private hurtAnimLayer:fgui.GComponent;
    private hurtNumLayer:fgui.GComponent;
    private battleScene:BattleScene;
    private userInfos:UIBattleUserInfo[];
    private userInfoCtrl:fgui.Controller;
    private userInfoName="battle_team_comp";

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
        this.battleData=args;
        this.battleScene=SceneManager.GetInstance().CurrentActiveScene as BattleScene;
        this.ChangeTime(0);
        this.InitFactory();
        this.userInfoCtrl.selectedIndex=this.battleData.battleType-1;
        this.FreshUserInfo();
    }
    
    Close() {

        this.SetVisible(false);
        this.ID=0;
        Laya.stage.event(CK_EventCode.PanelDestroy,this.ID);
    }
    Destroy() {
        BallMsgFactory.GetInstance().Clear();
        BattleAnimFactory.GetInstance().Clear();
        HurtNumFactory.GetInstance().Clear();
        

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

    private InitComp(){
       
        this.timeText=this.Content.getChild("battle_time_comp").asCom.getChild("battle_timenumber_txt").asTextField;
        this.msgLayer=this.Content.getChild("msg_layer").asCom;
        this.hurtAnimLayer=this.Content.getChild("hurtanim_layer").asCom;
        this.hurtNumLayer=this.Content.getChild("hurtnum_layer").asCom;
        let userComp=this.Content.getChild("battle_playercard_team_comp").asCom;
        
        this.userInfos=new Array();
        for (let index = 0; index < 6; index++) {
            let name=this.userInfoName+(index+1);
            let infoComp:fgui.GComponent=userComp.getChild(name).asCom;
            let newUserInfo=new UIBattleUserInfo(infoComp);
            this.userInfos.push(newUserInfo);
        }
        this.userInfoCtrl=this.Content.getController("battle_battletype_comp");
    }


    private InitFactory()
    {
        
        BallMsgFactory.GetInstance().Init(this.msgLayer,this.battleScene.Camera);
        
        BattleAnimFactory.GetInstance().Init(this.hurtAnimLayer,this.battleScene.Camera);

        HurtNumFactory.GetInstance().Init(this.hurtNumLayer,this.battleScene.Camera);


    }


    private FreshUserInfo()
    {

        if (this.battleData.battleType==BattleType.SingleBattle_6 ) 
        {
            let tempArray=new Array();
            let battlerList=this.battleData.battlerList;
            for (let index = 0; index < battlerList.length; index++) 
            {
                const element:ResponsePackage.IRespBattler = battlerList[index];
                if (element.roleBaseInfo.id==DataManager.GetInstance().PlayerData.ID) 
                {
                    
                    tempArray.push(element);
                }
            }
            for (let index = 0; index < battlerList.length; index++) 
            {
                const element:ResponsePackage.IRespBattler = battlerList[index];
                if (element.roleBaseInfo.id!=DataManager.GetInstance().PlayerData.ID) 
                {
                    tempArray.push(element);
                }
            }
            
            for (let index = 0; index < tempArray.length; index++) 
            {
                const element:ResponsePackage.IRespBattler = tempArray[index];
                let comp=this.userInfos[index];
                comp.Show(element)
            }

        }
        else if(this.battleData.battleType==BattleType.TeamBattle_3 )
        {
            for (let index = 0; index < this.userInfos.length; index++) {
                const element:UIBattleUserInfo = this.userInfos[index];
                element.Show(this.battleData.battlerList[index]);
            }

        }

    }

    public UserDied(ckId)
    {
        for (let index = 0; index < this.userInfos.length; index++) {
            const element:UIBattleUserInfo = this.userInfos[index];
            if (element.CKId==ckId) {
                element.SetGray();
                return;
            }
        }

    }

    ChangeTime(milSecond)
    {
        let s=milSecond/1000;
        let sec=Math.floor(s%60);
        let min=Math.floor(s/60);
        let secStr:string=sec.toString();
        let minStr:string=min.toString();
        if (sec<10) {
            secStr="0"+sec;
        }
        if (min<10) {
            minStr="0"+min;
        }
        this.timeText.text=minStr+":"+secStr;

    }



}