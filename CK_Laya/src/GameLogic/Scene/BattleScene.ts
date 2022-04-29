
import { CK_UIType } from "../FGUI/CK_FGUIConfig";
import { FGUI_BattlePanel } from "../FGUI/Panel/FGUI_BattlePanel";
import { MainPanelType } from "../FGUI/Panel/FGUI_MainPanel";
import { DataManager } from "../Manager/DataManager";
import { FGUIManager } from "../Manager/FGUIManager";
import { SceneManager, SceneType } from "../Manager/SceneManager";
import { BattleBall } from "../Model/BattleBall";
import { CameraComponent } from "../Model/CameraComponent";
import { SceneBase } from "./SceneBase";

export class BattleScene implements SceneBase {

    Scene: Laya.Scene;
    Camera: Laya.Camera;
    Light: Laya.DirectionLight;
    SceneType: SceneType =SceneType.BattleScene;

    private balls:BattleBall[]=new Array();
    private mainUser:BattleBall;
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

    private battlePanel:FGUI_BattlePanel;


    constructor(scene) {
        this.Scene =scene;
        this.Init();
    }
    
    
   

    Init()
    {

        this.Camera=this.Scene.getChildByName("Main Camera") as Laya.Camera;
        this.Light=this.Scene.getChildByName("Directional Light") as Laya.DirectionLight;
       
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
        let battlerList=this.currentBattleData.battlerList;
        for (let index = 0; index < battlerList.length; index++) {
            const battler = battlerList[index];
            let roleInfo=battler.roleInfo as ResponsePackage.RespRoleBaseInfo;
            let ckInfo=battler.battleCk as ResponsePackage.RespBattleCk;


            let battleBall=new BattleBall(battler,this);
            battleBall.Transport(ckInfo.posX/1000,ckInfo.posY/1000);
            this.balls.push(battleBall);
            this.roleMap.set(roleInfo.id,battleBall);
            this.ckMap.set(ckInfo.id,battleBall);
            if (roleInfo.id== DataManager.GetInstance().PlayerData.ID )
            {
               this.mainUser=battleBall;
               this.cameraComp.StartFollow(battleBall.GetBallGameObject());
            }
            
        }
        
    }



    GameStart()
    {
        FGUIManager.GetInstance().OpenPanel(CK_UIType.BattlePanel,()=>{},true,this.currentBattleData);
        this.battlePanel=FGUIManager.GetInstance().GetPanel(CK_UIType.BattlePanel) as FGUI_BattlePanel;
        this.endFrameId=this.battleFrames.length;
        this.FrameLogic();
        
       
    }

    private FrameLogic()
    {
        let frameData=this.battleFrames[this.currentFrameId];

   
        //TODO handle other entity 

        //handle ck
        let ckframeInfos:ResponsePackage.IRespCkFrameInfo[]=frameData.ckFrameInfoList;
        for (let index = 0; index < ckframeInfos.length; index++) {
            const ckInfo = ckframeInfos[index];
            //find ball by id
            let battleBall:BattleBall= this.ckMap.get(ckInfo.id);
            // //changeHp
            battleBall.ChangeHp(ckInfo.hp);
            //check if dead
            if (ckInfo.isDead==true) 
            {
                
                battleBall.Died();
                if (ckInfo.id==this.mainUser.CkId) {
                    //game end because of user die
                    this.GameOver();
                    return;
                }
            }
            //move
            battleBall.Move(ckInfo.posXY.x/1000,ckInfo.posXY.y/1000);
            
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

    private GameOver(){
        console.log("[BattleScene] Game Over");

        //open result panel TODO
        
        this.EnterLobby();
        

    }

    private EnterLobby()
    {
        this.cameraComp.StopFollow();
        for (let index = 0; index < this.balls.length; index++) {
            const ball:BattleBall = this.balls[index];
            ball.Destroy();
        }
        FGUIManager.GetInstance().CloseAllPanel();
        FGUIManager.GetInstance().CloseAllWindow();
        SceneManager.GetInstance().DestroyCurrentScene();
        SceneManager.GetInstance().LoadScene3D(SceneType.LobbyScene,Laya.Handler.create(this,()=>{
             SceneManager.GetInstance().ChangeScene3D(SceneType.LobbyScene);
             FGUIManager.GetInstance().OpenPanel(CK_UIType.MainPanel,()=>{},true,MainPanelType.Lobby);
             FGUIManager.GetInstance().OpenPanel(CK_UIType.TopBarPanel,()=>{},false);
        }))
    }

    private BindEvent()
    {
        let focusBall=0;
        Laya.stage.on(Laya.Event.KEY_DOWN,this,(e)=>{
            let keyCode=e.keyCode
            console.log(keyCode);
            if (keyCode=65) 
            {
               
                let ball=this.balls[focusBall];
                this.cameraComp.StartFollow(ball.GetBallGameObject());
                focusBall++;
                if (focusBall==this.balls.length) {
                    focusBall=0;
                }
            }
            

        })
        // Laya.timer.frameLoop(1,this,()=>{
           
        //     this.Camera.transform.position=new Laya.Vector3(this.ball.transform.position.x,4,this.ball.transform.position.z);
        // })
        
    }

   
   
   

}