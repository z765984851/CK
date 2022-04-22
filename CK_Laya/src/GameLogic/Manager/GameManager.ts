



import { BallType } from "../Common/BallType";
import { CK_UIType } from "../FGUI/CK_FGUIConfig";
import { BallFactory } from "./BallFactory";
import { FGUIManager } from "./FGUIManager";
import { HttpManager } from "./HttpManager";
import { ResMananger } from "./ResMananger";
import { SceneManager, SceneType } from "./SceneManager";
export default class GameManager extends Laya.Script {

    constructor() {
        super();
    }

    public onAwake():void {

        this.Init();
       
        

        // SocketClient.GetInstance().ServerId="7001";
        // SocketClient.GetInstance().IP="192.168.10.26";
        // SocketClient.GetInstance().Port=8199;
        // SocketClient.GetInstance().Connect();


   
        
        
      
       
    }

    private Init()
    {

        //1. init SceneManager , FGUIManager
        //2. load and add uipackage loading,font
        //3. show loading panel
        //4. rqst server resp
        //5. socket connect
        //   5.1 shank hand
        //   5.2 send regular
        //   5.3 get userdata
        //6. preload some res

        this.InitManager();
        this.InitFGUI();
       

        // let onPreloadFinish=Laya.Handler.create(this,()=>{
        //     BallFactory.GetInstance().Init();

        //     // FGUIManager.GetInstance().LoadUIPackage("ball_package",()=>{
        //     //     // SceneManager.GetInstance().ChangeScene3D(SceneType.BattleScene);
        //     //     FGUIManager.GetInstance().OpenWindow(CK_UIType.WindowExample,()=>{},null);

        //     // });
        //     // // SceneManager.GetInstance().LoadScene3D(SceneType.BattleScene,Laya.Handler.create(this,()=>{

               
        //     // }));
        // });
        // let onPreload2DFinish=Laya.Handler.create(this,()=>{
        //     ResMananger.GetInstance().Preload3DRes(onPreloadFinish);
            
        // })
        // ResMananger.GetInstance().Preload2DRes(onPreload2DFinish);
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
    }


    


   
    
}

