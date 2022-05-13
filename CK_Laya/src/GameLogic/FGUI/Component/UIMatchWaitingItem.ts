import { DataManager } from "../../Manager/DataManager";
import { UIBallCard } from "./UIBallCard";

export class UIMatchWaitingItem {

    private content:fgui.GComponent;

    private playerIdText:fgui.GTextField;
    private ckInfoComp:fgui.GComponent;
    private selfCtrl:fgui.Controller;
    private emptyCtrl:fgui.Controller;

    private uiBallCard:UIBallCard=null;

    private roomRoleInfo:ResponsePackage.RespRoomRole;


    constructor(content) {
        this.content=content;
        this.InitComp();
    }

    private InitComp()
    {
        
        this.playerIdText=this.content.getChild("match_playerid_txt").asTextField;
        this.ckInfoComp=this.content.getChild("match_playercard_comp").asCom;

        this.selfCtrl=this.content.getController("match_seatyoursefl_ctrl");
        this.emptyCtrl=this.content.getController("match_seatstatus_ctrl");
        this.ChangeEmptyDisplay(true);
        this.ChangeSelfDisplay(false);
        
    }

    public SetData(data)
    {

        this.roomRoleInfo=data;
        this.ChangeEmptyDisplay(false);
        if (this.roomRoleInfo.roleBaseInfo.id== DataManager.GetInstance().PlayerData.ID) {
            this.ChangeSelfDisplay(true);
        }
        this.SetID(this.roomRoleInfo.roleBaseInfo.name)
        this.ChangeCk();

    }

    public ChangeEmptyDisplay(isEmpty:boolean)
    {
        this.emptyCtrl.selectedIndex=isEmpty?1:0;
    }

    public ChangeSelfDisplay(isSelf:boolean)
    {
        this.selfCtrl.selectedIndex=isSelf?1:0;
    }

    public SetID(id){
        this.playerIdText.text=id;
    }

    public ChangeCk(){

        if (this.uiBallCard==null) {
            this.uiBallCard=new UIBallCard(this.ckInfoComp,1);
            this.uiBallCard.Show(this.roomRoleInfo.roleBaseInfo.ckCardInfo);
        }

    }

}