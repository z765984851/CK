



import { BallType } from "../Common/BallType";
import { CK_UIType } from "../FGUI/CK_FGUIConfig";
import { BallFactory } from "./BallFactory";
import { FGUIManager } from "./FGUIManager";
import { ResMananger } from "./ResMananger";
import { SceneManager, SceneType } from "./SceneManager";
export default class GameManager extends Laya.Script {

    constructor() {
        super();
    }

    public onAwake():void {

        this.Init();
        // SceneManager.GetInstance().LoadScene3D(SceneType.BattleScene,Laya.Handler.create(this,()=>{
        //     SceneManager.GetInstance().ChangeScene3D(SceneType.BattleScene);
           
        //     FGUIManager.GetInstance().OpenWindow(CK_UIType.WindowExample,()=>{},null)
        // }));
        

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
        SceneManager.GetInstance().Init();
        FGUIManager.GetInstance().Init();
       

        let onPreloadFinish=Laya.Handler.create(this,()=>{
            BallFactory.GetInstance().Init();

            SceneManager.GetInstance().LoadScene3D(SceneType.BattleScene,Laya.Handler.create(this,()=>{
                SceneManager.GetInstance().ChangeScene3D(SceneType.BattleScene);
                FGUIManager.GetInstance().OpenWindow(CK_UIType.WindowExample,()=>{},null)
            }));
        });
        let onPreload2DFinish=Laya.Handler.create(this,()=>{
            ResMananger.GetInstance().Preload3DRes(onPreloadFinish);
            
        })
        ResMananger.GetInstance().Preload2DRes(onPreload2DFinish);
    }

    


   
    
}

