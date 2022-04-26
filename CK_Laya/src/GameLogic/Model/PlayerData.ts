import { TeamType } from "../Common/TeamType";

export class PlayerData {


    private data:ResponsePackage.RespFully;
    public BallInPackage:ResponsePackage.IRespCkInfo[];

    public CKE:number;
    public CKT:number;

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


    
}