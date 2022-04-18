import { BallType } from "../Common/BallType";
import { ResMananger } from "./ResMananger";


export class BallFactory {

    private constructor() {
    }

    public static Instance : BallFactory;
    public static GetInstance(): BallFactory
    {
        if(this.Instance==null){
            this.Instance=new BallFactory ();
        }
        return this.Instance
    }

 
    private pool : Map<BallType,Array<Laya.Sprite3D>>=new Map();
    private poolParent:Laya.Scene;
   

    public Init()
    {
        this.poolParent=new Laya.Scene();
        Laya.stage.addChild(this.poolParent);

    }
    

    public GetBall(ballType:BallType):Laya.Sprite3D
    {
      
        let ball=null;
        if (this.pool.has(ballType))
        {
            if (this.pool.get(ballType).length==0) {
                this.CreateBall(ballType);
            }
        }
        else
        {
            this.CreateBall(ballType);
        }
        let array=this.pool.get(ballType);
        ball=array.pop();
        return ball;
    }

    public ResycleBall(ballType:BallType,ball:Laya.Sprite3D)
    {
        ball.active=false;
        this.pool[ballType].push(ball);

    }

    private CreateBall(ballType:BallType)
    {
        console.log("CreateBall",ballType);
        
        if (!this.pool.has(ballType))
        {
            this.pool.set(ballType,new Array)
        }
        let array=this.pool.get(ballType);
        
        let path=ResMananger.GetInstance().BasePrefabPath+ballType;
        
        let ball=ResMananger.GetInstance().GetRes(path);
      
        this.poolParent.addChild(ball);
        array.push(ball)

    }
}