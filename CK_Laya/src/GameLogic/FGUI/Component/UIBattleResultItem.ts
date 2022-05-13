import { IntegralLevelConfig } from "../../Generate/Config/IntegralLevel";
import { LangConfig } from "../../Generate/Config/Lang";
import { DataManager } from "../../Manager/DataManager";
import { UIBallCard } from "./UIBallCard";

export class UIBattleResultItem {

    private content:fgui.GComponent;
    private userIDText:fgui.GTextField;
    private divisionIcon:fgui.GLoader;
    private divisionName:fgui.GTextField;
    private scoreText:fgui.GTextField;
    private changeScoreText:fgui.GTextField;
    private itemList:fgui.GList;
    private ballCard:fgui.GComponent;
    private scoreColorCtrl:fgui.Controller;
    private isUserCtrl:fgui.Controller;
    private isEmptyCtrl:fgui.Controller;
    

    private battleData:ResponsePackage.IRespRoleClearing;
    private userData:ResponsePackage.IRespBattler;


    constructor(content) {
        this.content=content;
        this.InitComp();
    }
    private InitComp(){
        this.userIDText=this.content.getChild("battle_playerid_team_settle_txt").asTextField;
        this.divisionIcon=this.content.getChild("battle_rank_team_settle_loader").asLoader;
        this.divisionName=this.content.getChild("battle_rank_settle_txt").asTextField;
        this.ballCard=this.content.getChild("battle_playercard_team_settle_loader").asCom;
        this.scoreText=this.content.getChild("battle_playerranknumber_txt").asTextField;
        this.changeScoreText=this.content.getChild("battle_playerrankchangenumber_settle_txt").asTextField;
        this.scoreColorCtrl=this.content.getController("battle_rankchangetxtcolor_ctrl");
        this.isUserCtrl=this.content.getController("battle_isplayer_ctrl");
        this.isEmptyCtrl=this.content.getController("battle_showplayer_survive_ctrl");

    }
    public SetData(userData,battleData)
    {
        if (battleData==null) {
            this.isEmptyCtrl.selectedIndex=1;
            return;
        }
        this.battleData=battleData;
        this.userData=userData;
        this.isEmptyCtrl.selectedIndex=0;
        this.SetID(this.userData.roleBaseInfo.name);
        this.SetRankInfo();
        this.SetCurrentScore();
        this.SetCardInfo();
        


    }

    public SetID(id)
    {
        this.userIDText.text=id;
    }

    public SetRankInfo()
    {
        
        let rankLevel=this.userData.roleBaseInfo.division;
        let rankConfig=IntegralLevelConfig.GetInstance().GetData("3010000"+rankLevel);
    
        this.divisionIcon.url=rankConfig.rankIcon;
        this.divisionName.text= LangConfig.GetInstance().GetData(rankConfig.rankLang).text; 
        
    }

    public SetCurrentScore()
    {
        let rankLevel=DataManager.GetInstance().PlayerData.RankLevel;
        let rankScore=DataManager.GetInstance().PlayerData.RankScore;
        let rankConfig=IntegralLevelConfig.GetInstance().GetData("3010000"+rankLevel);
        let currentScoreStr="";
        if (DataManager.GetInstance().PlayerData.ID==this.battleData.rid) 
        {
            this.isUserCtrl.selectedIndex=0;
            currentScoreStr=`${rankScore}/${rankConfig.integral[1]}`;
        }
        else{
            this.isUserCtrl.selectedIndex=1;
        }
        this.scoreText.text=currentScoreStr;
        let score=this.battleData.integral;
        let scoreText=score.toString();
        if (score>=0) {
            scoreText="+"+scoreText;
            this.scoreColorCtrl.selectedIndex=0;
        }
        else{
            this.scoreColorCtrl.selectedIndex=1;
        }
        this.changeScoreText.text=scoreText;


    }

    private SetCardInfo(){
        let card=new UIBallCard(this.ballCard,1);
        card.Show(this.userData.roleBaseInfo.ckCardInfo);

    }

    public SetEmpty(){
        this.isEmptyCtrl.selectedIndex=1;
    }


}