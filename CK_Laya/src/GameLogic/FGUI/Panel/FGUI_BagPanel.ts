import { CK_EventCode } from "../../Common/CK_EventCode";
import { CK_FGUIConfig, CK_UIConfig, CK_UIType } from "../CK_FGUIConfig";
import { FGUIManager } from "../../Manager/FGUIManager";
import { FGUI_MainPanel,MainPanelType} from "../Panel/FGUI_MainPanel";
import { UIBallCard } from "../Component/UIBallCard";
import { DataManager } from "../../Manager/DataManager";

export class FGUI_BagPanel implements FGUIBase 
{
    Config: CK_UIConfig;
    UIType: CK_UIType = CK_UIType.BagPanel;
    IsInitFinish: boolean=false;
    Content: fgui.GComponent;
    ID: number=0;

    private itemCount:number = 18;
    private pageCount:number = 0;
    private curPage:number = 0;
    private inType:MainPanelType = MainPanelType.Lobby;

    private closeComp:fgui.GComponent;
    private itemList:fgui.GList;
    private leftBtn:fgui.GButton;
    private rightBtn:fgui.GButton;

    Init() 
    {
        if (this.IsInitFinish==false) 
        {
            this.Config=CK_FGUIConfig.GetInstance().Config.get(this.UIType);
            this.Content=fgui.UIPackage.createObject(this.Config.PackageName,this.Config.ComponentName).asCom;
            fgui.GRoot.inst.addChild(this.Content);
            this.Content.makeFullScreen();
            this.SetVisible(false);
            this.IsInitFinish=true;  
            this.InitComp();
            this.InitCompEvent();
        }
    }

    private InitComp():void 
    {
        this.closeComp = this.Content.getChild("match_back_btn").asCom;
        this.itemList = this.Content.getChild("bag_ckcard_list").asList;
        this.leftBtn = this.Content.getChild("bag_left_btn").asButton;
        this.rightBtn = this.Content.getChild("bag_right_btn").asButton;
    }

    private InitCompEvent():void 
    {
        this.closeComp.onClick(this,this.Close)
        this.leftBtn.onClick(this,this.OnClickLeftBtn);
        this.rightBtn.onClick(this,this.OnClickRightBtn);
        this.itemList.itemRenderer = this.SetBagItemListRenderFunc();
    }

    Show(args?: any) 
    {
        if(args != undefined && args != null)
            this.inType = args;
        this.SetVisible(true);
        this.AddEvent();
        this.SetData();
    }

    Close() 
    {
        this.SetVisible(false);
        this.RemoveEvent();
        let mainPanel= FGUIManager.GetInstance().GetPanel(CK_UIType.MainPanel) as FGUI_MainPanel;
        if (mainPanel!=null || mainPanel!=undefined) 
        {
            mainPanel.SetVisible(true);
            mainPanel.ChangePanel(this.inType);
        } 
    }

    
    SetVisible(visible: boolean) 
    {
        if (this.Content!=null) 
        {
            this.Content.visible=visible;
        } 
    }

    Destroy() 
    {
        this.Content?.dispose()
        this.IsInitFinish=false;
        this.ID=0;
        Laya.stage.event(CK_EventCode.PanelDestroy,this.UIType);
    }

    private SetData():void
    {
        this.SetUIItemList();
    }

    private SetUIItemList():void
    {
        this.itemList.numItems = 0;
        this.itemCount = DataManager.GetInstance().PlayerData.BallInPackage.length
        this.itemList.numItems = this.itemCount;
        this.pageCount = Math.ceil(this.itemCount / 8);
        for (let index = 0; index < this.pageCount; index++) 
        {
            this.itemList.addChildAt(fgui.UIPackage.createObject("common_component_package", "common_empty_comp"), index * 10);
            if (index * 8 + 7 < this.itemCount) 
            {
                this.itemList.addChildAt(fgui.UIPackage.createObject("common_component_package", "common_empty_comp"), index * 10 + 9);
            }
        }
    }

    private SetBagItemListRenderFunc():Laya.Handler
    {
        let ballList = DataManager.GetInstance().PlayerData.BallInPackage;
        return Laya.Handler.create(this,(idx:number,obj:fgui.GObject)=>
        {
            let card = new UIBallCard(obj,2);
            let tempData =  ballList[idx];
            let data:ResponsePackage.RespCkCardInfo = new ResponsePackage.RespCkCardInfo();
            let currentId=DataManager.GetInstance().PlayerData.NoramlaTeam.ckId;
            let state = 0;
            if(currentId == tempData.id)
                state = 1;
            data.lineage = tempData.lineage;
            data.lv = tempData.level;
            data.professionList = tempData.professionList;
            data.quality = tempData.quality;
            data.seq = tempData.seq;
            card.Show(data,state);

            obj.onClick(this,function():void{
                this.SetVisible(false);
                this.RemoveEvent();
                let mainPanel= FGUIManager.GetInstance().GetPanel(CK_UIType.MainPanel) as FGUI_MainPanel;
                if (mainPanel!=null || mainPanel!=undefined) 
                {
                    mainPanel.SetVisible(true);
                    mainPanel.ChangePanel(MainPanelType.Bred,[tempData,CK_UIType.BagPanel]);
                } 
            })
        },[],false);
    }

    private OnClickLeftBtn():void
    {
        this.curPage -= 1;
        if (this.curPage < 0)
            this.curPage = 0;
        this.itemList.scrollToView(this.curPage * 10, true);
    }

    private OnClickRightBtn():void
    {
        this.curPage += 1;
        if (this.curPage >= this.pageCount) 
            this.curPage--;
        this.itemList.scrollToView(this.curPage * 10 ,true);
    }
    private AddEvent():void
    {

    }
    
    private RemoveEvent():void
    {

    }
}