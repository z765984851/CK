import { CK_EventCode } from "../../Common/CK_EventCode";
import { UILobby } from "../Component/UILobby";
import { UIMatch } from "../Component/UIMatch";
import { CK_FGUIConfig, CK_UIConfig, CK_UIType } from "../CK_FGUIConfig";

export class FGUI_MainPanel implements FGUIBase{

    constructor() {
    }
    Config: CK_UIConfig;
    UIType: CK_UIType = CK_UIType.MainPanel;
    IsInitFinish: boolean=false;
    Content: fgui.GComponent;
    ID: number=0;
   
    private currentUI:CompBase;

    private lobbyPanel:UILobby=null;
    private matchPanel:UIMatch=null;
    private panelMap=new Map();

    private panelController:fgui.Controller;
    private matchComp:fgui.GComponent;
    private lobbyComp:fgui.GComponent;

    Init() {
        if (this.IsInitFinish==false) {

            this.Config=CK_FGUIConfig.GetInstance().Config.get(this.UIType);
            this.Content=fgui.UIPackage.createObject(this.Config.PackageName,this.Config.ComponentName).asCom;
            fgui.GRoot.inst.addChild(this.Content);
            this.Content.makeFullScreen();
            this.InitComp();
            this.InitMap();
            this.SetVisible(false);
            this.IsInitFinish=true;               
            

         }
    }
    Show(panelType:MainPanelType) {
        this.SetVisible(true);
        this.ChangePanel(panelType);
        // this.ChangeFormation();
    }
    Close() {
        this.SetVisible(false);
        this.ID=0;
        Laya.stage.event(CK_EventCode.PanelDestroy,this.ID);
    }
    Destroy() {
        this.Content?.dispose()
        
        this.IsInitFinish=false;
        this.ID=0;
        Laya.stage.event(CK_EventCode.PanelDestroy,this.UIType);
    }
    SetVisible(visible: boolean) {
        if (this.Content!=null) {
            this.Content.visible=visible;

         }   
    }

    private InitComp(){
       
        this.matchComp=this.Content.getChild("match_comp").asCom;
        this.lobbyComp=this.Content.getChild("lobby_comp").asCom;
        this.panelController=this.Content.getController("main_ctrl");

    }

    private InitMap()
    {
       this.lobbyPanel=new UILobby(this.lobbyComp)
       this.matchPanel=new UIMatch(this.matchComp)
       this.panelMap.set(MainPanelType.Lobby, this.lobbyPanel)
       this.panelMap.set(MainPanelType.Match,this.matchPanel)
    }

    public ChangePanel(panelType:MainPanelType,args?:any)
    {
        this.panelController.selectedIndex=panelType;
        if (this.currentUI!=undefined) {
            this.currentUI.Hide()
        }
        this.currentUI=this.panelMap.get(panelType);
        this.currentUI.Show(args);
    }

   

   
}

export enum MainPanelType {
    Lobby=0,
    Match=1,
}