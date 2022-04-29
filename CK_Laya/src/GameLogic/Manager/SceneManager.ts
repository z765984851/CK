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


    public ScenePathMap=new Map(

        [
           [SceneType.BattleScene,"res/unityscenes/LayaScene_BattleScene/Conventional/BattleScene.ls"],
           [SceneType.LobbyScene,"res/unityscenes/LayaScene_LobbyScene/Conventional/LobbyScene.ls"],
        ]

    );

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
       
        

        let url=this.ScenePathMap.get(sceneType);
        
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
            let url=this.ScenePathMap.get(sceneType);
            let scene=ResMananger.GetInstance().GetRes(url);
            this.GameScene.addChild(scene);
            switch (sceneType) {
                case SceneType.BattleScene:
                    this.CurrentActiveScene=new BattleScene(scene);
                    break;
                case SceneType.LobbyScene:
                    this.CurrentActiveScene=new LobbyScene(scene);
                    break;
            
                default:
                    break;
            }
            
        }
        
    }

    public DestroyCurrentScene()
    {
        this.CurrentActiveScene.Scene.destroy();
        let url=this.ScenePathMap.get(this.CurrentActiveScene.SceneType);
        ResMananger.GetInstance().ReleaseRes(url)
        this.CurrentActiveScene=null;
    }


}

export enum SceneType
{
    None="None",
    BattleScene="BattleScene.ls",
    LobbyScene="LobbyScene.ls"

}