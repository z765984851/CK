


import { BattleEntity, BattleEntityFactory, BattleEntityType } from "../Battle/BattleEntityFactory";
import { BattleTools } from "../Battle/BattleTools";
import { BattleType, MatchType } from "../Common/BattleType";
import { CK_UIType } from "../FGUI/CK_FGUIConfig";
import { FGUI_BattlePanel } from "../FGUI/Panel/FGUI_BattlePanel";
import { DataManager } from "../Manager/DataManager";
import { FGUIManager } from "../Manager/FGUIManager";
import {  SceneType } from "../Manager/SceneManager";
import { BattleBall } from "../Model/BattleBall";
import { CameraComponent } from "../Model/CameraComponent";
import { SceneBase } from "./SceneBase";

export class BattleScene implements SceneBase {

    Scene: Laya.Scene;
    Camera: Laya.Camera;
    Light: Laya.DirectionLight;
    SceneType: SceneType =SceneType.BattleScene;
    CameraFollow:BattleBall;

    private balls:BattleBall[]=new Array();
    public MainUser:BattleBall;
    
    private currentBattleData:ResponsePackage.RespFightResult;
    private currentFrameId=0;
    private cameraComp:CameraComponent;

    //--------------------------data------------------------------
    //roleid,ball
    private roleMap=new Map();
    //ckid,ball
    private ckMap=new Map();
  
    private battleFrames:ResponsePackage.IRespFrame[];
    private frameTime=10;
    private endFrameId=0;
    private matchType:MatchType;
    private battleType:BattleType;


    private battlePanel:FGUI_BattlePanel;
    

    public BallLayer:Laya.Sprite3D;
    public UILayer:Laya.Sprite3D;

    constructor(scene) {
        this.Scene =scene;
        this.Init();
    }
    
    
   

    Init()
    {

        this.Camera=this.Scene.getChildByName("Main Camera") as Laya.Camera;
        this.Light=this.Scene.getChildByName("Directional Light") as Laya.DirectionLight;
        this.BallLayer=this.Scene.getChildByName("BallLayer") as Laya.Sprite3D;
        this.UILayer=this.Scene.getChildByName("UILayer") as Laya.Sprite3D;

        this.OpenShadow();
        this.BindEvent();
        this.CameraInit();
        
        
        
    }

    private OpenShadow()
    {
        this.Light.shadowMode=1;

    }


    private CameraInit(){
        this.cameraComp=new CameraComponent(this.Camera);

    }

    GameInit(battleData)
    {
        this.currentBattleData=battleData;
        this.DataHandle();
    }

    private DataHandle()
    {
        this.battleFrames=this.currentBattleData.frameList;
        this.matchType=this.currentBattleData.matchType;
        this.battleType=this.currentBattleData.battleType;
        let battlerList=this.currentBattleData.battlerList;
        for (let index = 0; index < battlerList.length; index++) {
            const battler = battlerList[index];
            let roleInfo=battler.roleBaseInfo as ResponsePackage.RespRoleBaseInfo;
            let ckInfo=battler.battleCk as ResponsePackage.RespBattleCk;


            let battleBall=new BattleBall(battler,this);
            battleBall.Transport(ckInfo.posX/1000,ckInfo.posY/1000);
            this.balls.push(battleBall);
            this.roleMap.set(roleInfo.id,battleBall);
            this.ckMap.set(ckInfo.id,battleBall);
            if (roleInfo.id== DataManager.GetInstance().PlayerData.ID )
            {
               this.MainUser=battleBall;
               
            }
            
        }
        this.ChangeCameraFollow(this.MainUser.CkId);
        // this.cameraComp.StartFollow(battleBall.GetBallGameObject());
    }



    GameStart()
    {
        FGUIManager.GetInstance().OpenPanel(CK_UIType.BattlePanel,()=>{
            this.battlePanel=FGUIManager.GetInstance().GetPanel(CK_UIType.BattlePanel) as FGUI_BattlePanel;
            this.endFrameId=this.battleFrames.length;
            for (let index = 0; index < this.balls.length; index++) {
                let ball:BattleBall = this.balls[index];
                ball.CreateUI();
            }
            this.FrameLogic();
        },true,this.currentBattleData);
       
        
       
    }

    
    private FrameLogic()
    {
        let frameData=this.battleFrames[this.currentFrameId];
        // handle other entity 
        let entityFrameInfos:ResponsePackage.IRespOtherEntityFrameInfo[]=frameData.otherEntityFrameList;
       
        // //entity create
        for (let index = 0; index < entityFrameInfos.length; index++) 
        {
            
            const frameInfo:ResponsePackage.IRespOtherEntityFrameInfo = entityFrameInfos[index];

            if (frameInfo.isCreate) {
               
               
                this.CreateFlyProp(frameInfo.id,frameInfo.type);

                let prop:BattleEntity=this.flyProps.get(frameInfo.id);
                let pos=new Laya.Vector3(frameInfo.posXY.x/1000,0,frameInfo.posXY.y/1000);
                let face=new Laya.Vector3(frameInfo.faceXY.x/1000,0,frameInfo.faceXY.y/1000);
                let dir=new Laya.Vector3();
                Laya.Vector3.subtract(face,pos,dir);
                let angle=BattleTools.CalculateRotateWithFace(dir,new Laya.Vector3(0,0,1));
                prop.SetRotate(angle);

            }
           
        }
        //entity move
        for (let index = 0; index < entityFrameInfos.length; index++) {
            const frameInfo:ResponsePackage.IRespOtherEntityFrameInfo = entityFrameInfos[index];
            let pos=new Laya.Vector3(frameInfo.posXY.x/1000,3,frameInfo.posXY.y/1000);
            
            let prop:BattleEntity=this.flyProps.get(frameInfo.id);
            prop.SetPos(pos);
            

        }

        //entity destroy
        for (let index = 0; index < entityFrameInfos.length; index++) {
            const frameInfo:ResponsePackage.IRespOtherEntityFrameInfo = entityFrameInfos[index];
            if (frameInfo.isDestroy) {
                
                let prop:BattleEntity=this.flyProps.get(frameInfo.id);
                BattleEntityFactory.GetInstance().Recover(prop.ID);
            }
        }



        //handle ck info
        let ckframeInfos:ResponsePackage.IRespCkFrameInfo[]=frameData.ckFrameInfoList;

        //handle ck hit display
        for (let index = 0; index < ckframeInfos.length; index++) {
            const frameInfo = ckframeInfos[index];
            //find ball by id
            let battleBall:BattleBall= this.ckMap.get(frameInfo.id);
            if (frameInfo.hit!=null) {
                battleBall.GetHurt(frameInfo.hit);
            }
        }

        //handle ck hpchange 
        for (let index = 0; index < ckframeInfos.length; index++) {
            const frameInfo = ckframeInfos[index];
            //find ball by id
            let battleBall:BattleBall= this.ckMap.get(frameInfo.id);
            //changeHp
            battleBall.ChangeHp(frameInfo.hp);
        }

        //handle ck died
        let isMainUserDied=false;
        for (let index = 0; index < ckframeInfos.length; index++) {
            const frameInfo = ckframeInfos[index];
            //find ball by id
            let battleBall:BattleBall= this.ckMap.get(frameInfo.id);
            //check if dead
            if (frameInfo.isDead==true) 
            {
                //TeamMode Change Camera Follow
                if (this.battleType==BattleType.TeamBattle_3) 
                {
                    let onDeadAnimFinish=()=>{
                        // console.log("ck died event");
                        let cameraTarget:BattleBall=null;
                        //find other user in team
                        for (let index = 0; index < this.balls.length; index++) {
                            let element:BattleBall = this.balls[index];
                            if (element.Camp==this.MainUser.Camp) {
                                
                                if (element.IsDied==false) {
                                    cameraTarget=element;
                                    break;
                                }
                              
                            }
                        }
                        if (cameraTarget!=null) 
                        {
                            this.ChangeCameraFollow(cameraTarget.CkId);
                                       
                        }
                        

                    }
                    if (this.CameraFollow!=null) {
                        if (battleBall.CkId==this.CameraFollow.CkId) {
                            
                            this.CameraFollow.SetOnDeadAnimFinish(onDeadAnimFinish);
                            this.CameraFollow=null;
                        }
                    }
                    
                }
                
                this.battlePanel.UserDied(battleBall.CkId);
                battleBall.Died();
                if (frameInfo.id==this.MainUser.CkId) {
                    isMainUserDied=true;
                }
            }
            
        }

        //handle mainUser Died 
        if (isMainUserDied) 
        {
             //if is survivo model game will end because of user die
             if (this.battleType== BattleType.SingleBattle_6) 
             {
                 this.GameOver();
                 return;
             }
        }

      
       
        //handle ck Move

        for (let index = 0; index < ckframeInfos.length; index++) {
            const frameInfo = ckframeInfos[index];
            //find ball by id
            let battleBall:BattleBall= this.ckMap.get(frameInfo.id);
            battleBall.Move(frameInfo.posXY.x/1000,frameInfo.posXY.y/1000);
            battleBall.FaceHandle(frameInfo.faceXY.x/1000,frameInfo.faceXY.y/1000);
        }

        //handle camera follow
        if (this.CameraFollow!=null) {
            this.cameraComp.Follow();
        }

        //handle ck attack
        for (let index = 0; index < ckframeInfos.length; index++) {
            const frameInfo = ckframeInfos[index];
            //find ball by id
            let battleBall:BattleBall= this.ckMap.get(frameInfo.id);
            if (frameInfo.isAtk) {
                battleBall.Atk();
            }
        }

        this.currentFrameId++;
        this.battlePanel.ChangeTime(this.currentFrameId*this.frameTime);
        if (this.currentFrameId!=this.endFrameId) {
            Laya.timer.once(this.frameTime,this,this.FrameLogic);
        }
        else
        {
            this.GameOver();

        }
        
    }

    public ChangeCameraFollow(ckId)
    {
        let battleBall:BattleBall= this.ckMap.get(ckId);
        this.CameraFollow=battleBall;
        this.cameraComp.SetFollowTarget(battleBall.GetBallGameObject());

    }

    

    private GameOver(){
        // console.log("[BattleScene] Game Over");
        
        this.ShowResultPanel();
        

    }

    private ShowResultPanel()
    {
        
        for (let index = 0; index < this.balls.length; index++) {
            const ball:BattleBall = this.balls[index];
            ball.Destroy();
        }
        
        FGUIManager.GetInstance().OpenPanel(CK_UIType.BattleResultPanel,()=>{},false,this.currentBattleData)
      
    }

    private BindEvent()
    {
        
       
        
    }

    public CreateDeathEffect(pos,onAnimFinish:Laya.Handler)
    {
        let effect=BattleEntityFactory.GetInstance().Create(BattleEntityType.DeathEffect,this.UILayer);
        effect.SetActive(true);
        effect.SetPos(pos);
        Laya.timer.once(490,this,()=>{
            BattleEntityFactory.GetInstance().Recover(effect.ID);
            this.CreateAfterDeathEffect(pos);
            onAnimFinish?.run();
        });

    }

    public CreateAfterDeathEffect(pos)
    {
        let effect=BattleEntityFactory.GetInstance().Create(BattleEntityType.AfterDeath,this.UILayer);
        effect.SetActive(true);
        let tempPos=new Laya.Vector3(pos.x,0,pos.z);
        effect.SetPos(tempPos);

    }

    private flyProps=new Map();
    public CreateFlyProp(id,propType)
    {

        let prop=BattleEntityFactory.GetInstance().Create(propType,this.UILayer);
        prop.SetActive(true);
        this.flyProps.set(id,prop);

    }
   
   

}