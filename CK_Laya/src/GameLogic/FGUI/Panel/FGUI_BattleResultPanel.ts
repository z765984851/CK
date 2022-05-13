import { BattleEntityFactory } from "../../Battle/BattleEntityFactory";
import { BattleType } from "../../Common/BattleType";
import { CK_EventCode } from "../../Common/CK_EventCode";
import { DataManager } from "../../Manager/DataManager";
import { FGUIManager } from "../../Manager/FGUIManager";
import { SceneManager, SceneType } from "../../Manager/SceneManager";
import { CK_FGUIConfig, CK_UIConfig, CK_UIType } from "../CK_FGUIConfig";
import { UIBattleResultItem } from "../Component/UIBattleResultItem";
import { MainPanelType } from "./FGUI_MainPanel";

export class FGUI_BattleResultPanel implements FGUIBase {

    
    constructor() {
    }
    Config: CK_UIConfig;
    UIType: CK_UIType = CK_UIType.BattleResultPanel;
    IsInitFinish: boolean=false;
    Content: fgui.GComponent;
    ID: number=0;
    //----------------------comp-----------------------
    private returnBtn:fgui.GButton;
    private panelModeCtrl:fgui.Controller;
    private resultItems:UIBattleResultItem[]=new Array();
    
    //----------------------data-----------------------
    private battleData:ResponsePackage.RespFightResult;
    //rid,respbattler
    private userDataMap=new Map();


 

    Init() {
        if (this.IsInitFinish==false) {

            this.Config=CK_FGUIConfig.GetInstance().Config.get(this.UIType);
            this.Content=fgui.UIPackage.createObject(this.Config.PackageName,this.Config.ComponentName).asCom;
            fgui.GRoot.inst.addChild(this.Content);
            this.Content.makeFullScreen();
            this.InitComp();
            this.BindEvent();
            this.SetVisible(false);
            this.IsInitFinish=true;               
            

         }
    }

    Show(args?: any) {
        this.SetVisible(true);
        this.battleData=args;
        this.HandleData();
        this.SetResult();
        
        
    }
    Close() {
        this.SetVisible(false);
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

    private InitComp(){
        this.returnBtn=this.Content.getChild("battle_home_btn").asButton;
        this.panelModeCtrl=this.Content.getController("battle_settletypecomp");
        for (let index = 0; index < 6; index++) {
            let compName=`battle_playercard${index+1}_team_settle_comp`;
            let comp=this.Content.getChild(compName).asCom;
            let newItem=new UIBattleResultItem(comp);
            this.resultItems.push(newItem);
        }

    }

    private BindEvent(){
        this.returnBtn.onClick(this,this.ReturnLobby);
    }

    

    private HandleData()
    {
        let battlers=this.battleData.battlerList;
        for (let index = 0; index < battlers.length; index++) {
            let battler = battlers[index];
            this.userDataMap.set(battler.roleBaseInfo.id,battler);
            
        }

    }

    private SetResult()
    {
      

        if (this.battleData.battleType==BattleType.SingleBattle_6) {
            this.panelModeCtrl.selectedIndex=BattleResultType.Survivo;
            this.SurvivoDataHandle();
        }
        else{
            //blue win
            let winCamp=this.battleData.fightClearing.winCamp;
            if (winCamp==1) {
                this.panelModeCtrl.selectedIndex=BattleResultType.BlueWin;
            }
             //red win
            else if(winCamp==2){
                this.panelModeCtrl.selectedIndex=BattleResultType.RedWin;
            }
             //nowin
            else{
                this.panelModeCtrl.selectedIndex=BattleResultType.NoWin;
            }
            this.TeamDataHandle();
           
        }

        


    }

    private TeamDataHandle()
    {
        let clearingList=this.battleData.fightClearing.clearingList;
        for (let index = 0; index < clearingList.length; index++) {
            const element = clearingList[index];
            let UIBattleResultItem=this.resultItems[index];
            let userData=this.userDataMap.get(element.rid);
            UIBattleResultItem.SetData(userData,element);
        }
    }

    private survivoRankItemMap=new Map
    (
        [
            
            [1, 3],
            [2, 4],
            [3, 2],
            [4, 5],
            [5, 1],
            [6, 6],
            
        ]

    );

    private SurvivoDataHandle()
    {

        let clearingList=this.battleData.fightClearing.clearingList;
        let userRank=0;
        let currentUserId=DataManager.GetInstance().PlayerData.ID;
        for (let index = 0; index < clearingList.length; index++) 
        {
            const element = clearingList[index];
            if (element.rid==currentUserId) {
                userRank=element.rank;
            }
        }
  
        
        for (let index = 0; index < clearingList.length; index++) 
        {
            
            const element = clearingList[index];
            let itemIndex=this.survivoRankItemMap.get(index+1)-1;
            let UIBattleResultItem=this.resultItems[itemIndex];
            if (index+1<userRank) 
            {
                UIBattleResultItem.SetEmpty()
            }
            else{
                let userData=this.userDataMap.get(element.rid);
                UIBattleResultItem.SetData(userData,element);
            }
            
        }

    }



    private ReturnLobby(){
        FGUIManager.GetInstance().CloseAllPanel();
        FGUIManager.GetInstance().CloseAllWindow();
        SceneManager.GetInstance().DestroyCurrentScene();
        BattleEntityFactory.GetInstance().Clear();
        SceneManager.GetInstance().LoadScene3D(SceneType.LobbyScene,Laya.Handler.create(this,()=>{
             SceneManager.GetInstance().ChangeScene3D(SceneType.LobbyScene);
             FGUIManager.GetInstance().OpenPanel(CK_UIType.MainPanel,()=>{},true,MainPanelType.Lobby);
             FGUIManager.GetInstance().OpenPanel(CK_UIType.TopBarPanel,()=>{},false);
        }))
    }

}

export enum BattleResultType {

    BlueWin=0,
    RedWin=1,
    NoWin=2,
    Survivo=3

}