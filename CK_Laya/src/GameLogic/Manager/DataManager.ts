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

    public HttpServerResp;
    public PlayerData;

    public SetHttpServerResp(data)
    {
        this.HttpServerResp=new HttpServerResp(data);
        Laya.stage.event(CK_EventCode.GetServerResp);
    }


    public SetPlayerData()
    {
        this.PlayerData=new PlayerData();
    }

}