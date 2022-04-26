import { BattleScene } from "../Scene/BattleScene";
import { LobbyScene } from "../Scene/LobbyScene";
import { SceneBase } from "../Scene/SceneBase";
import { ResMananger } from "./ResMananger";

export class SceneManager {

    private constructor() {
    }

    public static Instance : SceneManager;
    public static GetInstance(): SceneManager
    {
        if(this.Instance==null){
            this.Instance=new SceneManager ();
        }
        return this.Instance
    }

    public CurrentActiveScene:SceneBase;



    public UIScene;
    public GameScene;

    public Init(){

        this.GameScene=new Laya.Scene();
        Laya.stage.addChild(this.GameScene);
        this.UIScene=new Laya.Scene();
        Laya.stage.addChild(this.UIScene);
       
    }
    
    public LoadScene3D(sceneType,complete?:Handler|null,progress?:Handler|null)
    {
       
        // let url=ResMananger.GetInstance().BattleScenePath+sceneType;
        let url="";
        switch (sceneType) {
            case SceneType.BattleScene:
                url=ResMananger.GetInstance().BattleScenePath+sceneType;
                break;
            case SceneType.LobbyScene:
                url=ResMananger.GetInstance().LobbyScenePath+sceneType;
                break;
        
            default:
                break;
        }
        ResMananger.GetInstance().Load3DRes(url,complete,progress)
    }

    public ChangeScene3D(sceneType)
    {
        if (sceneType==SceneType.None) {
            if (this.CurrentActiveScene!=null) {
                Laya.stage.removeChild(this.CurrentActiveScene.Scene)
                this.CurrentActiveScene=null;
            }
        }
        else{
            let url;
            let scene;
            switch (sceneType) {
                case SceneType.BattleScene:
                    url=ResMananger.GetInstance().BattleScenePath+sceneType;
                    scene=ResMananger.GetInstance().GetRes(url);
                    this.GameScene.addChild(scene);
                    this.CurrentActiveScene=new BattleScene(scene);
                    break;
                case SceneType.LobbyScene:
                    url=ResMananger.GetInstance().LobbyScenePath+sceneType;
                    scene=ResMananger.GetInstance().GetRes(url);
                    this.GameScene.addChild(scene);
                    this.CurrentActiveScene=new LobbyScene(scene);
                    break;
            
                default:
                    break;
            }
            
        }
        
    }


}

export enum SceneType
{
    None="None",
    BattleScene="BattleScene.ls",
    LobbyScene="LobbyScene.ls"

}