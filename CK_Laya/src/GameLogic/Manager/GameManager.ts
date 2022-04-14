



import { CK_UIType } from "../FGUI/CK_FGUIConfig";
import { FGUIManager } from "./FGUIManager";
import { SceneManager, SceneType } from "./SceneManager";
export default class GameManager extends Laya.Script {

    constructor() {
        super();
    }

    public onAwake():void {

        this.Init();

        // SocketClient.GetInstance().ServerId="7001";
        // SocketClient.GetInstance().IP="192.168.10.26";
        // SocketClient.GetInstance().Port=8199;
        // SocketClient.GetInstance().Connect();


        SceneManager.GetInstance().LoadScene3D(SceneType.BattleScene,Laya.Handler.create(this,()=>{
            SceneManager.GetInstance().ChangeScene3D(SceneType.BattleScene);

        }));
        
        // Laya.stage.on(Laya.Event.KEY_DOWN,this,(e:Laya.Event)=>{
        //     let keyCode=e.keyCode;
        //     console.log(keyCode);
        //     // if (keyCode==65) {
        //     //     FGUIManager.GetInstance().CloseAllWindow();
        //     // }
            
        // });
        
        // FGUIManager.GetInstance().OpenPanel(CK_UIType.PanelExample,()=>{},null)
      
       
    }

    private Init()
    {
        FGUIManager.GetInstance().Init();
    }

    
   
    
}

