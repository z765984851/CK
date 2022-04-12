


import { SceneManager, SceneType } from "./SceneManager";
export default class GameManager extends Laya.Script {

    constructor() {
        super();
    }

    public onAwake():void {

        
        // SocketClient.GetInstance().ServerId="7001";
        // SocketClient.GetInstance().IP="192.168.10.26";
        // SocketClient.GetInstance().Port=8199;
        // SocketClient.GetInstance().Connect();


        SceneManager.GetInstance().LoadScene3D(SceneType.GameScene,Laya.Handler.create(this,()=>{
            SceneManager.GetInstance().ChangeScene3D(SceneType.GameScene);
        }));
        
        

       
    }

    
}

