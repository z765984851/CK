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
        ]

    );
   
}

export  enum CK_UIType
{
    PanelExample=0,
    WindowExample=1,

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
