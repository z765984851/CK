import { ArrayHelper } from "../Common/ArrayHelper";
import { BallType } from "../Common/BallType";


export class BattleAnimFactory {

    private constructor() {
    }

    public static Instance : BattleAnimFactory;
    public static GetInstance(): BattleAnimFactory
    {
        if(this.Instance==null){
            this.Instance=new BattleAnimFactory ();
        }
        return this.Instance
    }

     //key :balltype, value: anim component name
     private config=new Map(
        [
            [BattleAnimType.FeHurtAnim, "battle_fe_hurt_anim"],
            [BattleAnimType.DragonHurtAnim , "battle_dragon_hurt_anim"],
            [BattleAnimType.WoodHurtAnim , "battle_wood_hurt_anim"],
            [BattleAnimType.StoneHurtAnim , "battle_stone_hurt_anim"],
            [BattleAnimType.BallDeadAnim , "battle_death_anim"],
        ]

    );

    private content:fgui.GComponent;
    private camera:Laya.Camera;

    private activeAnims:HurtAnim[]=new Array();

    

    public Init(content,camera){
        this.content=content;
        this.camera=camera;
    }

    public Create(animType:BattleAnimType,target:Laya.Sprite3D,onAnimFinish?:Laya.Handler)
    {

        
        const componentName=this.config.get(animType);
        // console.log("[HurtAnimFactory]Create ",animType,componentName);
        let animComp:fgui.GComponent=Laya.Pool.getItemByCreateFun(componentName,()=>{
            let comp=fgui.UIPackage.createObject("battle_package",componentName);
            this.content.addChild(comp);
            
            return comp;
        });
       
        animComp.visible=true;
        let hurtAnim=new HurtAnim(componentName,animComp);
        this.activeAnims.push(hurtAnim);
        //set pos
        let tempPos=new Laya.Vector4();
        this.camera.viewport.project(target.transform.position,this.camera.projectionViewMatrix,tempPos)
        animComp.displayObject.pos(tempPos.x,tempPos.y);

        //play anim
        hurtAnim.MoveClip.setPlaySettings(0,null,1,null,Laya.Handler.create(this,()=>{
            // console.log("[HurtAnimFactory]Recover ",hurtAnim.Sign);
            onAnimFinish?.run()
            hurtAnim.Recover();
            ArrayHelper.GetInstance().RemoveElementFromArray(this.activeAnims,hurtAnim);
        }))
        hurtAnim.Play();

    }

   

   

    public Clear()
    {
        for (let index = 0; index < this.activeAnims.length; index++) 
        {
            let element:HurtAnim =  this.activeAnims[index];
            element.Stop();
            element.Recover();
            ArrayHelper.GetInstance().RemoveElementFromArray(this.activeAnims,element);
        }

        let keys=this.config.keys();
        for (const key of keys) {
            
            const element = this.config.get(key);
            if (element!= undefined || element!=null) 
            {
                Laya.Pool.clearBySign(element);
            }
        }
      
      
      
        this.activeAnims=new Array();
        this.content=null;
        this.camera=null;
    }



    

}

class HurtAnim {

    public Content:fgui.GComponent;
    public MoveClip:fgui.GMovieClip;
    public Sign:string;

   
    constructor(sign,content){
        this.Content=content;
        this.MoveClip=this.Content.getChild("anim").asMovieClip;
        this.Sign=sign;
    }



    public Play(){
        this.MoveClip.playing=true;
    }

    public Stop(){
        this.MoveClip.playing=false;
    }
    
    public Recover(){
        this.Content.visible=false;
        Laya.Pool.recover(this.Sign,this.Content);
    }

}

export enum BattleAnimType {
    
    FeHurtAnim=BallType.Fe,
    WoodHurtAnim=BallType.Wood,
    DragonHurtAnim=BallType.Dragon,
    StoneHurtAnim=BallType.Stone,
    BallDeadAnim=5,  

}