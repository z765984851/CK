
import { UIBallBattleMsg } from "../FGUI/Component/UIBallBattleMsg";
import { BallFactory } from "../Manager/BallFactory";
import { BattleScene } from "../Scene/BattleScene";

export class BattleBall 
{

    private userData:ResponsePackage.RespBattler;
    private ball:Laya.Sprite3D;
    private ui:UIBallBattleMsg;
    private lastPos:Laya.Vector3;
    private scene:BattleScene;

    public RoleId;
    public CkId;
    public IsDied:boolean=false;
    public IsDestroy:boolean=false;

    constructor(userdata,scene) {
        this.userData=userdata;
        this.scene=scene;
        this.RoleId=this.userData.roleInfo.id;
        this.CkId=this.userData.battleCk.id;
        this.CreateBall();
        this.CreateUI();
    }

    private CreateBall()
    {
        let ckInfo=this.userData.battleCk;
        this.ball= BallFactory.GetInstance().GetBall(ckInfo.lineage);
        this.scene.Scene.addChild(this.ball);
        this.ball.active=true;
        this.ball.transform.localScale=new Laya.Vector3(1,1,1);

    }

    private CreateUI()
    {
        this.ui=new UIBallBattleMsg(this.ball,this.scene.Camera);
        this.ui.Show(this.userData);
        this.ui.StartFollow();

    }

    public GetBallGameObject(){
        return this.ball;
    }

 
    public Transport(x,y)
    {
        let newPos=new Laya.Vector3(x,0,y);
        this.ball.transform.position=newPos;
    }

    public Move(x,y)
    {
        if (this.IsDied) {
            return;
        }
        
        this.lastPos=this.ball.transform.position;
        let newPos=new Laya.Vector3(x,0,y);
        this.Rotate(newPos);
        this.ball.transform.position=newPos;
    }


    private r_ball=0.5;
    private PI=3.14;
    private Rotate(newPos)
    {

        let dis=Laya.Vector3.distance(newPos,this.lastPos);
        let angle=360 * (dis / (this.r_ball * this.PI));
        let forward:Laya.Vector3=new Laya.Vector3(0,0,0);
        Laya.Vector3.subtract(newPos,this.lastPos,forward);
        Laya.Vector3.cross(new Laya.Vector3(0,1,0),forward,forward);
        Laya.Vector3.scale(forward,angle*10,forward);
        this.ball.transform.rotate(forward,false,false);           
    }

    public ChangeHp(v){
        this.ui.ChangeHp(v);
    }

    public Died()
    {
        console.log("[BattleBall] Died",this.CkId);
        
        this.IsDied=true;
        this.Destroy();
        
    }
    

    public Destroy(){
        if (!this.IsDestroy) {
            this.IsDestroy=true;
            let ckInfo=this.userData.battleCk;
            this.ui.Destroy();
            BallFactory.GetInstance().ResycleBall(ckInfo.lineage,this.ball);
        }
        
        
    }

}