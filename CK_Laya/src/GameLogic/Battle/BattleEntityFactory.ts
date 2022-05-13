import { ArrayHelper } from "../Common/ArrayHelper";
import { ResMananger } from "../Manager/ResMananger";

export class BattleEntityFactory {

    private constructor() {
    }

    public static Instance : BattleEntityFactory;
    public static GetInstance(): BattleEntityFactory
    {
        if(this.Instance==null){
            this.Instance=new BattleEntityFactory ();
        }
        return this.Instance
    }
    private ifInit=false;
    
    //key :BattleEntityType, value: anim component name
    private config=new Map
    (
        [
            
            [BattleEntityType.DeathEffect, "ck_death_effect.lh"],
            [BattleEntityType.AfterDeath, "ck_afterdeath.lh"],
            [BattleEntityType.Arrow, "ck_flyprop_arrow.lh"],
            [BattleEntityType.FireBall, "ck_flyprop_fireball.lh"],
        ]

    );

    private prefabMap=new Map();

    private activeEntity=new Array();

    private entityScene:Laya.Scene;

    private entityCount=0;

    public Init(onComplete?:Handler|null)
    {
        
        if (this.ifInit==false) 
        {
            this.entityScene=new Laya.Scene();

            let progress=0;
            let keys=this.config.keys();
            for (const key of keys) {
                
                const element = this.config.get(key);
                if (element!= undefined || element!=null) 
                {
                    this.LoadPrefab(element,Laya.Handler.create(this,(result)=>{
                       progress++;
                       this.prefabMap.set(key,result);
                       this.entityScene.addChild(result);
                       if (progress==this.config.size) {
                           this.ifInit=true;
                           onComplete?.run();
                       }
                    }));
                }
            }
           
        }
        else{
            onComplete?.run();
        }
    }

    private LoadPrefab(path,onComplete:Handler)
    {
        let wholePath=ResMananger.GetInstance().BasePrefabPath+path;
        ResMananger.GetInstance().Load3DRes(wholePath,onComplete);
    }

    public Create(entityType:BattleEntityType,parent)
    {

        this.entityCount++;
        const entityName=this.config.get(entityType);
        // let entityPath=ResMananger.GetInstance().BasePrefabPath+entityName;
        let entityPrefab=Laya.Pool.getItemByCreateFun(entityName,()=>{
            let model=this.prefabMap.get(entityType);
            let entity=Laya.Sprite3D.instantiate(model,parent);
            return entity;
        });
        let id=this.entityCount;
        let battleEntity=new BattleEntity(entityName,entityPrefab,id);
        this.activeEntity.push(battleEntity);
        return battleEntity;
    }

    public Recover(id)
    {
        let suitIndex;
        for (let index = 0; index < this.activeEntity.length; index++) {
            const element = this.activeEntity[index];
            if (element.ID ==id) {
                suitIndex=index;
                break;
            }
        }

        if (suitIndex!= undefined) {
            let entity:BattleEntity=this.activeEntity[suitIndex];
            entity.Recover();
            ArrayHelper.GetInstance().RemoveElementFromArray(this.activeEntity,entity);
        }
        

    }
    

    public Clear()
    {
        for (let index = 0; index < this.activeEntity.length; index++) 
        {
            let element:BattleEntity =  this.activeEntity[index];
            element.Entity.destroy();
            ArrayHelper.GetInstance().RemoveElementFromArray(this.activeEntity,element);
        }

        let keys=this.config.keys();
        for (const key of keys) {
            
            const element = this.config.get(key);
            if (element!= undefined || element!=null) 
            {
                Laya.Pool.clearBySign(element);
            }
        }
      
      
        this.activeEntity=new Array();

    }
}

export class BattleEntity {

    public Sign:string;
    public Entity:Laya.Sprite3D;
    public ID:number;

    constructor(sign,entity,id) 
    {
        this.Sign=sign;
        this.Entity=entity;
        this.ID=id;
    }

    public SetActive(active:boolean)
    {
        this.Entity.active=active;
    }

    public SetPos(pos:Laya.Vector3){
        this.Entity.transform.position=pos;
    }

    public Recover(){
        this.Entity.active=false;
        Laya.Pool.recover(this.Sign,this.Entity);
    }

    public SetRotate(angle){
        let rotation=new Laya.Vector3(0,angle,0);
        this.Entity.transform.rotationEuler=rotation;
    }

    public SetScale(scale)
    {
        this.Entity.transform.localScale=scale;
    }

}

export enum BattleEntityType 
{
    DeathEffect=1,
    Arrow=2,
    FireBall=3,
    AfterDeath=4,
    
}
