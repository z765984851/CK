import { CK_EventCode } from "../Common/CK_EventCode";
import { TeamType } from "../Common/TeamType";

export class PlayerData {


    private data:ResponsePackage.RespFully;
    public BallInPackage:ResponsePackage.IRespCkInfo[];

    public CKE:number;
    public CKT:number;
    public GCKE:number;

    public ID:string;
    public NoramlaTeam:ResponsePackage.RespTeamInfo;
    public RankLevel:number;
    public RankScore:number;



    private teamList:Array<ResponsePackage.IRespTeamInfo>;

    constructor(respfully:ResponsePackage.RespFully) {
        this.data=respfully;
        this.HandleData();
    }

    public HandleData()
    {
        this.BallInPackage = this.data.respCk.roleCks;
        this.CKE = this.data.respRole.roleInfo.cke;
        this.CKT = this.data.respRole.roleInfo.ckt;
        this.GCKE = this.data.respRole.roleInfo.gcke;
        this.ID = this.data.respRole.roleInfo.id;
        this.teamList=this.data.respTeam.teamList;
        this.UpdateNormalTeam(this.GetTeam(TeamType.NormalTeam));
        this.UpdateRank(this.data.respRole.roleInfo.division,this.data.respRole.roleInfo.integral)
    }

    
    

    public UpdateNormalTeam(teamInfo:ResponsePackage.RespTeamInfo)
    {
        this.NoramlaTeam=teamInfo;

    }

    public UpdateRank(ranklevel,rankScore)
    {
        this.RankLevel=ranklevel;
        this.RankScore=rankScore

    }


    public GetTeam(teamTpye:TeamType):ResponsePackage.RespTeamInfo{
        for (let index = 0; index < this.teamList.length; index++) {
            const element = this.teamList[index];
            if (element.type==teamTpye) {
                return element as ResponsePackage.RespTeamInfo;
            }
        }
        return null;
    }



    public GetBallById(id)
    {
        for (let index = 0; index < this.BallInPackage.length; index++) {
           let element = this.BallInPackage[index] as ResponsePackage.RespCkInfo;
           if (element.id==id) {
               return element;
           }
        }

        return null;

    }

    public UpdatePlayerData(recvData:ResponsePackage.RespFully)
    {
        this.UpdateBallData(recvData);
        this.UpdateRoleInfo(recvData);
        this.UpdateTeamInfo(recvData);
    }

    private UpdateBallData(recvData:ResponsePackage.RespFully)
    {
        if(recvData.respCk == null)
            return
        if(recvData.respCk.opList == null)
            return
        recvData.respCk.opList.forEach(element => 
        {
            let isHave = false
            this.BallInPackage.forEach( (ball,idx) =>
            {
                if(element.id == ball.id)
                {
                    isHave = true;
                    this.BallInPackage[idx] = element;
                }
            });
            if(!isHave)
                this.BallInPackage.push(element);
        });
    }

    private UpdateRoleInfo(recvData:ResponsePackage.RespFully)
    {
        if(recvData.respRole == null)
            return
        if(recvData.respRole.roleOp == null)
            return
        if(recvData.respRole.roleOp.gckeOp != null && recvData.respRole.roleOp.gckeOp.value != null)
            this.GCKE = recvData.respRole.roleOp.gckeOp.value;
        Laya.stage.event(CK_EventCode.UpdateRoleInfo);
    }

    private UpdateTeamInfo(recvData:ResponsePackage.RespFully)
    {
        if(recvData.respTeam == null)
            return
        if(recvData.respTeam.teamOp == null)
            return
        recvData.respTeam.teamOp.forEach(teamNew => {
            this.teamList.forEach(teamOld => {
                if(teamOld.id == teamNew.id)
                {
                    teamOld.ckId = teamNew.ckId;
                    teamOld.type = teamNew.type;
                }
            });
        });
        this.UpdateNormalTeam(this.GetTeam(TeamType.NormalTeam));
    }
}