



import { CK_EventCode } from "../Common/CK_EventCode";
import { RequestCMD } from "../Common/RequestCMD";
import { CK_UIType } from "../FGUI/CK_FGUIConfig";
import { MainPanelType } from "../FGUI/Panel/FGUI_MainPanel";
import { EventProperty } from "../Model/LoadProgressProperty";
import { BallFactory } from "../Battle/BallFactory";
import { DataManager } from "./DataManager";
import { FGUIManager } from "./FGUIManager";
import { LoginManager } from "./LoginManager";
import { ResMananger } from "./ResMananger";
import { SceneManager, SceneType } from "./SceneManager";
export default class GameManager extends Laya.Script {

    constructor() {
        super();
    }

    public onAwake():void {

        this.Init();
       
      
       
    }
    
    //1. init SceneManager , FGUIManager
    //2. load and add uipackage loading,font
    //3. show loading panel
    //4. rqst server resp
    //5. socket connect
    //   5.1 shank hand
    //   5.2 send regular
    //   5.3 send check msg 201 to get if has character 
    //      *5.3.1 if not has character send 202 
    //   5.4 send enter game 203
    //6. preload some res
    private Init()
    {

        

        this.InitManager();
        this.InitFGUI();
       

    }

    private InitManager(){
        SceneManager.GetInstance().Init();
        FGUIManager.GetInstance().Init();
    }

    private InitFGUI()
    {
        
        let preloadPackage=["common_font_package","loading_package"];
        let onLoadFinish=()=>
        {
            for (let index = 0; index < preloadPackage.length; index++) {
                const element = preloadPackage[index];
                FGUIManager.GetInstance().AddPackage(element);
            }
            this.ShowLoadingPanel();

        }
        let onProgress=(progress)=>
        {
            console.log("InitFGUI",progress);
            

        }
        FGUIManager.Instance.LoadUIPackages(preloadPackage,onLoadFinish,onProgress);


    }

    private ShowLoadingPanel()
    {
        FGUIManager.GetInstance().OpenPanel(CK_UIType.LoadingPanel,()=>{},null);
        this.ChangeLoadingProgress(0);
        this.GetServerResp();

    }

    private GetServerResp(){
        Laya.stage.once(CK_EventCode.GetServerResp,this,this.OnGetSuccess);
        LoginManager.GetInstance().GetServer();

    }

    private OnGetSuccess()
    {
       
        this.ChangeLoadingProgress(10);
        Laya.stage.once(CK_EventCode.RegularSuccess,this,this.OnRegularSuccess)
        LoginManager.GetInstance().SocketConnet();
       
    }

    private OnRegularSuccess()
    {
        this.ChangeLoadingProgress(20);

        Laya.stage.once(RequestCMD.Verify.toString(),this,this.OnVerifySuccess)
        LoginManager.GetInstance().SendVerify();


    }

    private OnVerifySuccess(data)
    {

        this.ChangeLoadingProgress(30);
        let respfully=ResponsePackage.RespFully.decode(data);
        let ifCreateRole=respfully.respRole.createRole.value;
        //need to create role 
        if (ifCreateRole) 
        {
            Laya.stage.once(RequestCMD.CreateRole.toString(),this,this.OnCreateRoleSuccess)
            LoginManager.GetInstance().SendCreateRole();
            
        }
        //request user info
        else{
            this.OnCreateRoleSuccess();
        }

    }

    private OnCreateRoleSuccess()
    {
        

        this.ChangeLoadingProgress(35);
        Laya.stage.once(RequestCMD.EnterGame.toString(),this,this.OnRqstRoleInfoSuccess)
        LoginManager.GetInstance().SendRqstRoleInfo();
    }

    private OnRqstRoleInfoSuccess(data)
    {
        this.ChangeLoadingProgress(40);
        let respfully=ResponsePackage.RespFully.decode(data);
        DataManager.GetInstance().SetPlayerData(respfully);
        this.Preload2DRes();
    }


    private Preload2DRes()
    {
        ResMananger.GetInstance().Preload2DRes(Laya.Handler.create(this,this.Preload3DRes))
    }

    private Preload3DRes()
    {
        this.ChangeLoadingProgress(50);
        ResMananger.GetInstance().Preload3DRes(Laya.Handler.create(this,this.PreloadLobbyScene));
       
    }

    private PreloadLobbyScene()
    {
       SceneManager.GetInstance().LoadScene3D(SceneType.LobbyScene,Laya.Handler.create(this,this.PreloadFGUIPackage));
    }

    private PreloadFGUIPackage()
    {
        this.ChangeLoadingProgress(60);
        let preloadPackage=[
            "main_package",
            "common_icon_package",
            "common_component_package",
            "common_battle_package",
            "common_button_package",
            "common_bar_package",
        ];
        let onLoadFinish=()=>
        {
            for (let index = 0; index < preloadPackage.length; index++) {
                const element = preloadPackage[index];
                FGUIManager.GetInstance().AddPackage(element);
            }
            this.ChangeLoadingProgress(90);

            this.InitFactory();
        }
        
        FGUIManager.Instance.LoadUIPackages(preloadPackage,onLoadFinish,()=>{});
    }

    private InitFactory()
    {
       
        BallFactory.GetInstance().Init();
        this.ChangeLoadingProgress(100);
        SceneManager.GetInstance().ChangeScene3D(SceneType.LobbyScene);
        FGUIManager.GetInstance().OpenPanel(CK_UIType.MainPanel,()=>{},true,MainPanelType.Lobby);
        FGUIManager.GetInstance().OpenPanel(CK_UIType.TopBarPanel,()=>{},false);
        
    }
    




    public ChangeLoadingProgress(value,isTween=false)
    {
        let data:EventProperty.LoadProgressProperty=new EventProperty.LoadProgressProperty(value,isTween);
        Laya.stage.event(CK_EventCode.LoadingProgressChange,data);
        
    }




   
    
}

