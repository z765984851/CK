
import { RequestCMD } from "../Common/RequestCMD";
import { SocketClient } from "../Message/SocketClient";
import { DataManager } from "./DataManager";
import { HttpManager } from "./HttpManager";

export class LoginManager {

    private constructor() {
    }

    public static Instance : LoginManager;
    public static GetInstance(): LoginManager
    {
        if(this.Instance==null){
            this.Instance=new LoginManager ();
        }
        return this.Instance
    }

    //"http://192.168.10.26:8001/api/version/config?channel=trunk&version=1.0.1"
    public LoginURL="http://192.168.10.26:8001/api/version/config";
    // public LoginURL="http://8.134.111.121:8001/api/version/config";
    public Channel="trunk";

    // public LoginURL="http://18.166.33.232:8001/api/version/config";
    // public Channel="test";  

    public Version="1.0.1";
    


    //GetServerResp
    public GetServer(){
        let url=`${this.LoginURL}?channel=${this.Channel}&version=${this.Version}`;
        HttpManager.GetInstance().Get(url,null,this.onGetServerSuccess,this.onGetServerError);
        console.log("GetServer",url);
        
    }

    private onGetServerSuccess(data)
    {
        //get success
        if (data.code==0) {
            let body=data.body;
            DataManager.GetInstance().SetHttpServerResp(body);
            
        }
        //get error , code=10
        else
        {
            console.log("[LoginManager]","onGetServerSuccess","Get Error");
            
        }
    }

    private onGetServerError(error)
    {
        console.log(error);
    }

    public SocketConnet()
    {
        SocketClient.GetInstance().IP=DataManager.GetInstance().HttpServerResp.GatewayIp;
        SocketClient.GetInstance().Port=DataManager.GetInstance().HttpServerResp.Port;
        SocketClient.GetInstance().ServerId=DataManager.GetInstance().HttpServerResp.Sid;
        SocketClient.GetInstance().Connect();

    }

    public SendVerify()
    {
        let rqstVerify=RequestPackage.RqstVerify.create();
        rqstVerify.ip=DataManager.GetInstance().HttpServerResp.ClientIP;
        rqstVerify.access="111123132";
        rqstVerify.sid=DataManager.GetInstance().HttpServerResp.Sid;
        rqstVerify.uid=SocketClient.GetInstance().UID.toString();
        let buf:Uint8Array=RequestPackage.RqstVerify.encode(rqstVerify).finish();
        
        SocketClient.GetInstance().SendBizMsg(RequestCMD.Verify,buf);

    }

    public SendCreateRole()
    {
        SocketClient.GetInstance().SendBizMsg_Empty(RequestCMD.CreateRole);
    }

    public SendRqstRoleInfo()
    {
        let rqst=RequestPackage.RqstLoadRole.create();
        rqst.ip = DataManager.GetInstance().HttpServerResp.ClientIP;
        rqst.sid = DataManager.GetInstance().HttpServerResp.Sid;
        let buf:Uint8Array=RequestPackage.RqstLoadRole.encode(rqst).finish();
        SocketClient.GetInstance().SendBizMsg(RequestCMD.EnterGame,buf);

    }


    public StartHeartBeat()
    {

        

    }








}