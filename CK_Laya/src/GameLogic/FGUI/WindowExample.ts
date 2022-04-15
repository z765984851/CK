
import { CK_EventCode } from "../Common/CK_EventCode";
import { FGUIManager } from "../Manager/FGUIManager";
import { SceneManager } from "../Manager/SceneManager";
import { BattleScene } from "../Scene/BattleScene";
import { CK_FGUIConfig, CK_UIConfig, CK_UIType } from "./CK_FGUIConfig";

export class WindowExample extends fgui.Window implements FGUIBase {
    Config:CK_UIConfig;
    IsInitFinish: boolean=false;
    Content: fgui.GComponent;
    ID: number= 0;
    UIType: CK_UIType = CK_UIType.WindowExample;

    private packagePath;
    private title:fgui.GTextField;
    private openBtn;

    private ball_loader:fgui.GLoader3D;
    private ball_holder:fgui.GGraph;


    Init() {
        if (this.IsInitFinish==false) {

            this.Config=CK_FGUIConfig.GetInstance().Config.get(this.UIType);
            this.packagePath=`res/fguipackage/${this.Config.PackageName}/${this.Config.PackageName}`
            fgui.UIPackage.addPackage(this.packagePath);
            this.Content=fgui.UIPackage.createObject(this.Config.PackageName,this.Config.ComponentName).asCom;
            this.contentPane=this.Content;
            this.center();
            this.setPivot(0.5, 0.5);
            this.InitComp();
            // this.BindEvent();
           
            // console.log(this.Config.PackageName,"Init finish");
            this.IsInitFinish=true;               
            

         }
    }


    protected doShowAnimation(): void {
        this.setScale(0.1, 0.1);
        fgui.GTween.to2(0.1, 0.1, 1, 1, 0.3)
            .setTarget(this, this.setScale)
            .setEase(fgui.EaseType.QuadOut)
            .onComplete(this.onShown, this);
    }
    protected doHideAnimation(): void {
        fgui.GTween.to2(1, 1, 0.1, 0.1, 0.3)
            .setTarget(this, this.setScale)
            .setEase(fgui.EaseType.QuadOut)
            .onComplete(this.hideImmediately, this);
    }

    protected onShown(): void {
        

        let battleScene=SceneManager.GetInstance().CurrentActiveScene as BattleScene;
        let ball=battleScene.GetBall();

        let sceneRoot= this.ball_holder.displayObject; 

        let ballScene=new Laya.Scene3D();
        sceneRoot.addChild(ballScene)

        let uiCamera=new Laya.Camera();
        ballScene.addChild(uiCamera);
        let globalPoint= sceneRoot.localToGlobal(new Laya.Point(0,0));
        // uiCamera.viewport=new Laya.Viewport(globalPoint.x,globalPoint.y,ballScene.width,ballScene.height);
        // uiCamera.viewport=new Laya.Viewport(0,0,Laya.stage.width,Laya.stage.height);
       
        let ballUI= Laya.Sprite3D.instantiate(ball,ballScene,false);
        // ballUI.transform.position=new Laya.Vector3(0,0,0);
        // uiCamera.transform.lookAt(ballUI.transform.position,new Laya.Vector3(0,1,0));
        // uiCamera.transform.position=new Laya.Vector3(0,4,0);
        uiCamera.transform.translate(new Laya.Vector3(0, 0, 1.5));
        uiCamera.transform.rotate(new Laya.Vector3(0,90,0));
        
        
        

    }

    



    protected onHide(): void {
        this.ID=0;
        Laya.stage.event(CK_EventCode.WindowClose);
    }


    protected onInit(): void {
        this.Init();
    }

    Show(args?: any) {
        this.show();
        this.title.text=this.ID.toString();   


    }
   
    Close() {
        this.hide();
       
        
    }

    Destroy() {
        
        Laya.stage.event(CK_EventCode.WindowDestroy,this.ID);
        this.dispose();
        this.ID=0;
        this.IsInitFinish=false;
    }

    SetVisible(visible: boolean)
    {

        if (this.Content!=null) {
            this.Content.visible=visible;

        }   
    }
     

    private InitComp(){

        this.openBtn=this.Content.getChild("open_btn").asButton;
        this.title=this.Content.getChild("title").asTextField;
        this.ball_loader=this.Content.getChild("ball_loader") as fgui.GLoader3D;
        this.ball_holder=this.Content.getChild("ball_holder") as fgui.GGraph;
        console.log("ball loader",this.ball_loader,this.ball_holder);
        
     }
     
     private BindEvent()
     {
        this.openBtn.onClick(this,()=>{
          FGUIManager.GetInstance().OpenWindow(CK_UIType.WindowExample,()=>{});
            
        })

     }
}