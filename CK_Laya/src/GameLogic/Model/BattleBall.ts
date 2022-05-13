
import { UIBallBattleMsg } from "../FGUI/Component/UIBallBattleMsg";
import { BallFactory } from "../Battle/BallFactory";
import { BattleScene } from "../Scene/BattleScene";
import { BallMsgFactory } from "../Battle/BallMsgFactory";
import { BattleAnimFactory, BattleAnimType } from "../Battle/BattleAnimFactory";
import { HurtNumFactory } from "../Battle/HurtNumFactory";
import { BattleTools } from "../Battle/BattleTools";
import { BattleEntityFactory, BattleEntityType } from "../Battle/BattleEntityFactory";

export class BattleBall 
{

    private userData:ResponsePackage.RespBattler;
    private ball:Laya.Sprite3D;
    private ui:UIBallBattleMsg;
    private lastPos:Laya.Vector3;
    private scene:BattleScene;

    public RoleId;
    public CkId;
    public Camp;
    public IsDied:boolean=false;
    public IsDestroy:boolean=false;
    private onDeadAnimFinish:Laya.Handler=null;



    constructor(userdata,scene) {
        this.userData=userdata;
        this.scene=scene;
        this.RoleId=this.userData.roleBaseInfo.id;
        this.CkId=this.userData.battleCk.id;
        this.Camp=this.userData.camp;
        this.CreateBall();

    }

    private CreateBall()
    {
        let ckInfo=this.userData.battleCk;
        this.ball= BallFactory.GetInstance().GetBall(ckInfo.lineage);
        this.scene.BallLayer.addChild(this.ball);
        this.ball.active=true;
        this.ball.transform.localScale=new Laya.Vector3(1,1,1);

    }

    public CreateUI()
    {
        this.ui=BallMsgFactory.GetInstance().Create(this.userData);
        this.ui.StartFollow(this.ball);

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
        if(this.lastPos!=newPos){
            this.Rotate(newPos);
            // this.RotateWeapon(newPos);
            this.ball.transform.position=newPos;
        }
       
    }

    public FaceHandle(x,y)
    {
        if (this.IsDied) {
            return;
        }

        this.RotateWeapon(new Laya.Vector3(x,y));
    }


    private r_ball=0.5;
    private PI=3.14;
    private Rotate(newPos)
    {

        let dis=Laya.Vector3.distance(newPos,this.lastPos);
        let angle=360 * (dis / (this.r_ball * this.PI));
        let direction:Laya.Vector3=new Laya.Vector3(0,0,0);
        Laya.Vector3.subtract(newPos,this.lastPos,direction);
        Laya.Vector3.cross(new Laya.Vector3(0,1,0),direction,direction);
        Laya.Vector3.scale(direction,angle*15,direction);
        this.ball.transform.rotate(direction,false,false);           
    }

    private RotateWeapon(face:Laya.Vector3)
    {
        
        let direction=new Laya.Vector3();
        //move direction
        Laya.Vector3.subtract(face,this.lastPos,direction);
        let up=new Laya.Vector3(1,0);
        let angle=BattleTools.CalculateRotateWithFace(direction,up);
        this.ui.RotateWeapon(angle);


    }

    public ChangeHp(v){
        this.ui.ChangeHp(v);
    }

    public GetHurt(hitInfo:ResponsePackage.IRespHit)
    {
        // console.log("[BattleBall]GetHurt",this.CkId,this.RoleId);
        
        BattleAnimFactory.GetInstance().Create(this.userData.battleCk.lineage,this.ball);
        HurtNumFactory.GetInstance().Create(hitInfo,this.ball);
    }


    public Atk(){
        
        this.ui.PlayAtkAnim();
    }

    public Died()
    {
        // console.log("[BattleBall] died",this.userData.roleBaseInfo.name);
        this.IsDied=true;
        let currentPos=this.ball.transform.localPosition;
        this.scene.CreateDeathEffect(new Laya.Vector3(currentPos.x,3,currentPos.z),this.onDeadAnimFinish);
        this.Destroy();
        
        
    }
    
    public SetOnDeadAnimFinish(handle:Function)
    {
        this.onDeadAnimFinish = Laya.Handler.create(this,()=>{
            handle();
        })



    }

    public Destroy(){
        if (!this.IsDestroy) {
            this.IsDestroy=true;

            BallMsgFactory.GetInstance().Destroy(this.userData.roleBaseInfo.id);
            this.ball.destroy();
        }
        
        
    }

}