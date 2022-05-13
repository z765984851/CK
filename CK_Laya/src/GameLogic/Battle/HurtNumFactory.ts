import { ArrayHelper } from "../Common/ArrayHelper";

export class HurtNumFactory {

    private constructor() {
    }

    public static Instance : HurtNumFactory;
    public static GetInstance(): HurtNumFactory
    {
        if(this.Instance==null){
            this.Instance=new HurtNumFactory ();
        }
        return this.Instance
    }

    private content:fgui.GComponent;
    private camera:Laya.Camera;
    public Init(content,camera){
        this.content=content;
        this.camera=camera;
    }

    //key :hitType, value: num component name
    private config=new Map(
        [
           [HitType.PhyNormal,"battle_hurtnum_phy_comp"],
           [HitType.MagicNormal,"battle_hurtnum_critical_comp"],
           [HitType.Miss,"battle_hurtnum_miss_comp"],
           [HitType.Critical,"battle_hurtnum_critical_comp"],
           
        ]
    );

    private activeAnims:HurtText[]=new Array();
    public Create(hitMsg:ResponsePackage.IRespHit,target:Laya.Sprite3D)
    {
        let hitType=hitMsg.hitType;
        if (hitMsg.hitType==1) {
            hitType=hitMsg.atkType*10+hitMsg.hitType;
        }
       
        const componentName=this.config.get(hitType);
        // console.log("[HurtAnimFactory]Create ",hitMsg.atkType,hitMsg.hitType);
        let animComp:fgui.GComponent=Laya.Pool.getItemByCreateFun(componentName,()=>{
            let comp=fgui.UIPackage.createObject("battle_package",componentName);
            this.content.addChild(comp);
            return comp;
        });
       
        animComp.visible=true;
        let hurtAnim=new HurtText(componentName,animComp);
        this.activeAnims.push(hurtAnim);

        //set pos
        let tempPos=new Laya.Vector4();
        this.camera.viewport.project(target.transform.position,this.camera.projectionViewMatrix,tempPos)
        animComp.displayObject.pos(tempPos.x,tempPos.y);
        //miss is a image
        if (hitMsg.hitType!=3) 
        {
            let hitStr:string=hitMsg.value.toString();
            if (hitMsg.value>=0) {
                hitStr=`+${hitMsg.value}`;
            }
            hurtAnim.SetText(hitStr);
        }
       
        //play anim
        hurtAnim.Transition.play(Laya.Handler.create(this,()=>{
            hurtAnim.Recover();
            ArrayHelper.GetInstance().RemoveElementFromArray(this.activeAnims,hurtAnim);   
        }),1)


    }

   

   

    public Clear()
    {
        for (let index = 0; index < this.activeAnims.length; index++) 
        {
            let element:HurtText =  this.activeAnims[index];
            element.Transition.stop();
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



class HurtText {

    public Content:fgui.GComponent;
    public Sign:string;
    public Transition:fgui.Transition;

   
    constructor(sign,content){
        this.Content=content;
        
        this.Transition=this.Content.getTransition("anim");
        this.Sign=sign;
    }
    
    public Recover(){
        this.Content.visible=false;
        Laya.Pool.recover(this.Sign,this.Content);
    }

    public SetText(str)
    {
        let damageText=this.Content.getChild("damage_text").asTextField;
        damageText.text=str;
    }
}

//atkType*10+hitType
export enum HitType {

    Critical=2,
    Miss=3,
    PhyNormal=11,
    MagicNormal=21,
}
