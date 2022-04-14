import { SceneType } from "../Manager/SceneManager";
import { SceneBase } from "./SceneBase";

export class BattleScene implements SceneBase {

    Scene: Laya.Scene;
    Camera: Laya.Camera;
    Light: Laya.DirectionLight;
    SceneType: SceneType =SceneType.BattleScene;
   

    private ball:Laya.Sprite3D;

    private r_ball=0.5;
    private PI=3.14;
   
    constructor(scene) {
        this.Scene =scene;
        this.Init();
    }
    
    
   

    Init()
    {

        this.Camera=this.Scene.getChildByName("Main Camera") as Laya.Camera;
        this.Light=this.Scene.getChildByName("Directional Light") as Laya.DirectionLight;
        this.ball=this.Scene.getChildByName("DragonBall") as Laya.Sprite3D;
        this.OpenShadow();
        this.BindEvent();
    }

    private OpenShadow()
    {
        this.Light.shadowMode=1;

    }

    private  tempX:number;
    private  tempY:number;
    private  tempZ:number;
    private currentPos:Laya.Vector3;
    private newPos:Laya.Vector3;
    private BindEvent(){
        
        Laya.stage.on(Laya.Event.KEY_PRESS,this,(e:Laya.Event)=>{
            let keyCode=e.keyCode;
            console.log(keyCode);
            //w87 a65 s83 d68


            this.currentPos = this.ball.transform.position;
            this.tempX = this.currentPos.x;
            this.tempY = this.currentPos.y;
            this.tempZ = this.currentPos.z;
            if (keyCode==115) {
                
               this.tempZ+=0.01; 
             
            }
            if (keyCode==119) {
                this.tempZ-=0.01; 
                
            }
            if (keyCode==100) {
                this.tempX+=0.01; 
            }
            if (keyCode==97) {
                this.tempX-=0.01; 
            }
            

           this.newPos= new Laya.Vector3(this.tempX, this.tempY, this.tempZ);

           if (this.newPos!=this.currentPos) {

               let dis=Laya.Vector3.distance(this.newPos,this.currentPos);
               let angle=360 * (dis / (this.r_ball * this.PI));
               
               let forward:Laya.Vector3=new Laya.Vector3(0,0,0);
               Laya.Vector3.subtract(this.newPos,this.currentPos,forward);
               Laya.Vector3.cross(new Laya.Vector3(0,1,0),forward,forward);
               Laya.Vector3.scale(forward,angle*100,forward);
               console.log(forward);
               this.ball.transform.rotate(forward,false,false);

               this.ball.transform.position=this.newPos;
           }




            
        });
      
        Laya.timer.frameLoop(1,this,()=>{
           
            this.Camera.transform.position=new Laya.Vector3(this.ball.transform.position.x,4,this.ball.transform.position.z);
        })
        
    }

   

}