



import { CK_UIType } from "../FGUI/CK_FGUIConfig";
import { FGUIManager } from "./FGUIManager";
import { SceneManager, SceneType } from "./SceneManager";
export default class GameManager extends Laya.Script {

    constructor() {
        super();
    }

    public onAwake():void {

        SceneManager.GetInstance().LoadScene3D(SceneType.BattleScene,Laya.Handler.create(this,()=>{
            SceneManager.GetInstance().ChangeScene3D(SceneType.BattleScene);
            this.Init();
            FGUIManager.GetInstance().OpenWindow(CK_UIType.WindowExample,()=>{},null)
        }));
        

        // SocketClient.GetInstance().ServerId="7001";
        // SocketClient.GetInstance().IP="192.168.10.26";
        // SocketClient.GetInstance().Port=8199;
        // SocketClient.GetInstance().Connect();


      
        
        // Laya.stage.on(Laya.Event.KEY_DOWN,this,(e:Laya.Event)=>{
        //     let keyCode=e.keyCode;
        //     console.log(keyCode);
        //     // if (keyCode==65) {
        //     //     FGUIManager.GetInstance().CloseAllWindow();
        //     // }
            
        // });
        
        
      
       
    }

    private Init()
    {
        FGUIManager.GetInstance().Init();
    }

    
   
    
}

