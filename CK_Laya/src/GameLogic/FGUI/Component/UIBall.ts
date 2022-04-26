import { BallType } from "../../Common/BallType";
import { BallFactory } from "../../Manager/BallFactory";

export class UIBall {

    private root:Laya.Sprite;
    private scale:number;
    private ball:Laya.Sprite3D;
    private uiCamera:Laya.Camera;
    private ballScene:Laya.Scene3D;
    private directionLight:Laya.DirectionLight;

    public BallType:BallType;
    constructor(root:Laya.Sprite,ballType:BallType,scale:number=1) {

        this.root=root;
        this.BallType=ballType;
        this.scale=scale;

    }
    public Show(){
        this.ballScene=new Laya.Scene3D();
        this.root.addChild(this.ballScene)

        this.uiCamera=new Laya.Camera();
        this.ballScene.addChild(this.uiCamera);
        let globalPoint= this.root.localToGlobal(new Laya.Point(0,0));
        this.uiCamera.viewport=new Laya.Viewport(globalPoint.x,globalPoint.y,this.root.width,this.root.height);
        this.uiCamera.transform.position=new Laya.Vector3(0,1,0);
        this.uiCamera.transform.rotationEuler=new Laya.Vector3(-90,0,180);
        this.uiCamera.clearFlag=Laya.CameraClearFlags.DepthOnly;
        // this.uiCamera.clearColor=
        // this.uiCamera.clearColor=null;


        this.directionLight = this.ballScene.addChild(new Laya.DirectionLight()) as Laya.DirectionLight;
        var mat = this.directionLight.transform.worldMatrix;
		mat.setForward(new Laya.Vector3(-1, -1, 0));
		this.directionLight.transform.worldMatrix = mat;
        this.ball= BallFactory.GetInstance().GetBall(this.BallType);
        this.ballScene.addChild(this.ball);
        this.ball.transform.localPosition=new Laya.Vector3(0,0,0);
        this.ball.transform.localScale=new Laya.Vector3(1*this.scale,1*this.scale,1*this.scale);
        this.ball.active=true;
    }

    public Change(root:Laya.Sprite,ballType:BallType,scale:number=1)
    {

        this.root=root;
        this.BallType=ballType;
        this.scale=scale;

        this.root.addChild(this.ballScene)
        let globalPoint= this.root.localToGlobal(new Laya.Point(0,0));
        this.uiCamera.viewport=new Laya.Viewport(globalPoint.x,globalPoint.y,this.root.width,this.root.height);

        this.Resycle();
             
        this.ball= BallFactory.GetInstance().GetBall(this.BallType);
        this.ballScene.addChild(this.ball);
        this.ball.transform.localPosition=new Laya.Vector3(0,0,0);
        this.ball.transform.localScale=new Laya.Vector3(1*this.scale,1*this.scale,1*this.scale);
        this.ball.active=true;


    }


    public Destroy()
    {
        this.Resycle();
        this.ballScene.destroy();

    }

    public Resycle()
    {
        if (this.ball  ! = undefined) {
            BallFactory.GetInstance().ResycleBall(this.BallType,this.ball);
        }

        
    }

    public StartRotate(){
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
        this.ball.transform.rotate(this.rotateAngels,false)
    }

}