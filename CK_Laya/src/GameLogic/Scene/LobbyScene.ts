import { BallType } from "../Common/BallType";
import { SceneType } from "../Manager/SceneManager";
import { SceneBase } from "./SceneBase";

export class LobbyScene implements SceneBase{

   
    Scene: Laya.Scene;
    Camera: Laya.Camera;
    Light: Laya.DirectionLight;
    SceneType: SceneType =SceneType.LobbyScene;
    private ballParent:Laya.Sprite3D;
    private currentBall:Laya.Sprite3D=null;
    private ballMap=new Map();

    constructor(scene) {
        this.Scene =scene;
        this.Init()
    }

    private Init()
    {
        
        this.ballParent=this.Scene.getChildByName("BallParent") as Laya.Sprite3D;
        let ballCount=this.ballParent.numChildren;
        for (let index = 0; index < ballCount; index++) {
            let child=this.ballParent.getChildAt(index);
            this.ballMap.set(index,child);
        }
        
    }

    public ChangeBall(type:BallType)
    {
       this.HideCurrent();
       this.currentBall=this.ballMap.get(type-1) as Laya.Sprite3D;
       this.currentBall.active=true;
       this.StartRotate();
    }

    public HideCurrent()
    {
        if (this.currentBall!=null) {
            
           this.currentBall.active=false;
            
        }
       
    }

    public StartRotate(){
        this.StopRotate()
        Laya.stage.timer.frameLoop(1,this,this.Rotate)
        // console.log("[UIBall]",this.ball);
    }

    public StopRotate()
    {
        Laya.stage.timer.clear(this,this.Rotate)
    }

    private rotateAngels:Laya.Vector3=new Laya.Vector3(0,0.01,0.01);
    private Rotate()
    {
        this.currentBall.transform.rotate(this.rotateAngels,false)
    }
}