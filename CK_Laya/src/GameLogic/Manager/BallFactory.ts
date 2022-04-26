import { BallType } from "../Common/BallType";
import { CkLineage, CkLineageConfig } from "../Generate/Config/CkLineage";
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
   
    private ballMap : Map<BallType,Laya.Sprite3D>=new Map();

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

        if (!this.pool.has(ballType))
        {
            this.pool.set(ballType,new Array)
        }
        
        let array=this.pool.get(ballType);
        let ball:Laya.Sprite3D=null;
        if (!this.ballMap.has(ballType)) {
            let lnName:CkLineage=CkLineageConfig.GetInstance().GetData("1020000"+ballType)
            let path=ResMananger.GetInstance().BasePrefabPath+lnName.ballType;
            ball=ResMananger.GetInstance().GetRes(path);
            this.ballMap.set(ballType,ball);
           
        }
        let ballPrefab=this.ballMap.get(ballType);
        ball=Laya.Sprite3D.instantiate(ballPrefab,ball);
        this.poolParent.addChild(ball);
        array.push(ball)

    }

    public TestBall(){
        this.GetBall(BallType.Dragon);
        // this.GetBall(BallType.Dragon);
    }
}