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

    private ScenePathMap=new Map(
        [
            [SceneType.BattleScene,"res/unityscenes/LayaScene_BattleScene/Conventional/BattleScene.ls"]
        ]
    );

    
    public LoadScene3D(sceneType,complete?,progress?)
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
            Laya.stage.addChild(scene) ;
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
    BattleScene="BattleScene",

}