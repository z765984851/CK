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

    public CurrentActiveScene;

    private ScenePathMap=new Map(
        [
            [SceneType.GameScene,"res/unityscenes/LayaScene_LightTest/Conventional/LightTest.ls"]
        ]
    );

    
    public LoadScene3D(sceneType,complete?,progress?)
    {
       
        let url=this.ScenePathMap.get(sceneType);
        ResMananger.GetInstance().Load3DRes(url,complete,progress)
    }

    public ChangeScene3D(sceneType)
    {
        
        let url=this.ScenePathMap.get(sceneType);
        let scene=ResMananger.GetInstance().GetRes(url);
        Laya.stage.addChild(scene) ;
        this.CurrentActiveScene=scene;
    }


}

export enum SceneType
{
    GameScene=1,

}