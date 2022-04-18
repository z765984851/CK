import { BattleScene } from "../Scene/BattleScene";
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
    
    public LoadScene3D(sceneType,complete?,progress?)
    {
       
        let url=ResMananger.GetInstance().BaseScenePath+sceneType;
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
            let url=ResMananger.GetInstance().BaseScenePath+sceneType;
            let scene=ResMananger.GetInstance().GetRes(url);
            this.GameScene.addChild(scene);
            switch (sceneType) {
                case SceneType.BattleScene:
                    this.CurrentActiveScene=new BattleScene(scene);
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

}