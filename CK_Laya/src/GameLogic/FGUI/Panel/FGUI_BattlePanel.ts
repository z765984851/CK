import { CK_EventCode } from "../../Common/CK_EventCode";
import { CK_FGUIConfig, CK_UIConfig, CK_UIType } from "../CK_FGUIConfig";

export class FGUI_BattlePanel implements FGUIBase {

    
    constructor() {
    }
    Config: CK_UIConfig;
    UIType: CK_UIType = CK_UIType.BattlePanel;
    IsInitFinish: boolean=false;
    Content: fgui.GComponent;
    ID: number=0;
   
    private battleData:ResponsePackage.RespFightResult;

    private timeText:fgui.GTextField;
 

    Init() {
        if (this.IsInitFinish==false) {

            this.Config=CK_FGUIConfig.GetInstance().Config.get(this.UIType);
            this.Content=fgui.UIPackage.createObject(this.Config.PackageName,this.Config.ComponentName).asCom;
            fgui.GRoot.inst.addChild(this.Content);
            this.Content.makeFullScreen();
            this.InitComp();
            this.SetVisible(false);
            this.IsInitFinish=true;               
            

         }
    }
    Show(args?: any) {
        this.SetVisible(true);
        this.battleData=args;
        this.ChangeTime(0);
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
       
        this.timeText=this.Content.getChild("battle_time_comp").asCom.getChild("battle_timenumber_txt").asTextField;

    }

    ChangeTime(milSecond)
    {
        let s=milSecond/1000;
        let sec=Math.floor(s%60);
        let min=Math.floor(s/60);
        let secStr:string=sec.toString();
        let minStr:string=min.toString();
        if (sec<10) {
            secStr="0"+sec;
        }
        if (min<10) {
            minStr="0"+min;
        }
        this.timeText.text=minStr+":"+secStr;

    }

}