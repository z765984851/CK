import { FGUIManager } from "../../Manager/FGUIManager";
import { CK_UIType } from "../CK_FGUIConfig";
import { FGUI_MainPanel, MainPanelType } from "../Panel/FGUI_MainPanel";

export class UIMatch implements CompBase {

    constructor(content) {
        this.Content=content;
        this.Init();
        this.BindEvent();
    }
    Content: fgui.GComponent;

    private returnBtn:fgui.GButton;

   
    Init() {
        this.returnBtn=this.Content.getChild("match_back_btn").asButton;
    }
    Show(args?: any) {
        
    }
    Hide() {
        
    }

    private BindEvent()
    {
        this.returnBtn.onClick(this,this.ToLobbyPanel);
    }

    private ToLobbyPanel()
    {
        let mainPanel= FGUIManager.GetInstance().GetPanel(CK_UIType.MainPanel) as FGUI_MainPanel;
        if (mainPanel!=null || mainPanel!=undefined) {
            mainPanel.ChangePanel(MainPanelType.Lobby);
        }

    }
    
}