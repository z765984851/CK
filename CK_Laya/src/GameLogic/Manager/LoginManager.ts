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
    public Channel="trunk";
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
            console.log("get error");
            
        }
    }

    private onGetServerError(error)
    {
        console.log(error);
    }






}