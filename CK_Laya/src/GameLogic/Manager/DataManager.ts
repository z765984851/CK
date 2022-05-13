import { CK_EventCode } from "../Common/CK_EventCode";
import { PlayerData } from "../Model/PlayerData";
import { HttpServerResp } from "../Model/HttpServerResp";

export class DataManager {

    private constructor() {
    }

    public static Instance : DataManager;
    public static GetInstance(): DataManager
    {
        if(this.Instance==null){
            this.Instance=new DataManager ();
        }
        return this.Instance
    }

    public HttpServerResp:HttpServerResp;
    public PlayerData:PlayerData;
    public ServerTime;

    public SetHttpServerResp(data)
    {
        this.HttpServerResp=new HttpServerResp(data);
        Laya.stage.event(CK_EventCode.GetServerResp);
    }


    public SetPlayerData(respfully:ResponsePackage.RespFully)
    {
        this.PlayerData=new PlayerData(respfully);
        this.ServerTime=respfully.respRole.roleInfo.serverTime;
        Laya.timer.loop(1000,this,this.ServerTimeUpdate)
        // console.log("DataManager SetPlayerData",this.PlayerData);
        console.log("[DataManager]SetPlayerData",this.PlayerData);
        
    }

    

    private ServerTimeUpdate()
    {
        this.ServerTime+=1000;

    }
    



}