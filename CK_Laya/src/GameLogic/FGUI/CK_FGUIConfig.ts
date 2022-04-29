import { PanelExample } from "./PanelExample";


export class CK_FGUIConfig {

    private constructor() {
    }

    public static Instance : CK_FGUIConfig;
    public static GetInstance(): CK_FGUIConfig
    {
        if(this.Instance==null){
            this.Instance=new CK_FGUIConfig ();
        }
        return this.Instance
    }


    public Config=new Map(

        [
            [CK_UIType.PanelExample , new CK_UIConfig("ball_package","panel_comp",false,false)],
            [CK_UIType.WindowExample , new CK_UIConfig("ball_package","window_comp",true,false)],
            [CK_UIType.LoadingPanel , new CK_UIConfig("loading_package","loading_comp",false,false)],
            [CK_UIType.MainPanel , new CK_UIConfig("main_package","main_comp",false,false)],
            [CK_UIType.BattlePanel , new CK_UIConfig("battle_package","battle_comp",false,false)],
            [CK_UIType.TopBarPanel, new CK_UIConfig("common_component_package","common_playerinfo_comp",false,false)],
        ]

    );
   
}

export  enum CK_UIType
{
    PanelExample=0,
    WindowExample=1,
    LoadingPanel=2,
    MainPanel=3,
    TopBarPanel=4,
    BattlePanel=5,
}

export class CK_UIConfig{
    PackageName: string;
    ComponentName: string;
    IsMutiple: boolean;
    IsWindow: boolean;
    /**
     *
     */
    constructor(packageName,componentName,isMutiple,isWindow) {
        this.PackageName=packageName;
        this.ComponentName=componentName;
        this.IsMutiple=isMutiple;
        this.IsWindow=isWindow;

    }
}
