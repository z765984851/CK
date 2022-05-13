import { CK_EventCode } from "../../Common/CK_EventCode";
import { CK_FGUIConfig, CK_UIConfig, CK_UIType } from "../CK_FGUIConfig";
import { CkSpecialtyConfig,CkSpecialty } from "../../Generate/Config/CkSpecialty";
import { UISpecialtyItem } from "../Component/UISpecialtyItem";
import { SocketClient } from "../../Message/SocketClient";
import { RequestCMD } from "../../Common/RequestCMD";

export class FGUI_SpecialtyWindow extends fgui.Window implements FGUIBase {
    Config:CK_UIConfig;
    IsInitFinish: boolean=false;
    Content: fgui.GComponent;
    ID: number= 0;
    UIType: CK_UIType = CK_UIType.SpecialtyWindow;

    private ckInfo:ResponsePackage.IRespCkInfo;
    private specialtyList:UISpecialtyItem[] = new Array();
    private specialtyDataList:CkSpecialty[] = new Array();
    private lastSelectIdx:number = null;

    //comp
    private uiListSpecialty:fgui.GList;
    private uiTextCost:fgui.GTextField;
    private uiBtnConfirm:fgui.GButton;
    private uiCompClose:fgui.GComponent;

    Init() 
    {
        if (this.IsInitFinish==false) 
        {
            this.Config=CK_FGUIConfig.GetInstance().Config.get(this.UIType);
            this.Content=fgui.UIPackage.createObject(this.Config.PackageName,this.Config.ComponentName).asCom;
            this.contentPane=this.Content;
            this.center();
            this.modal = true;
            this.setPivot(0.5, 0.5);
            this.InitComp();
            this.BindEvent();
            this.IsInitFinish=true;               
         }
    }


    protected doShowAnimation(): void {
        this.InitWindow();
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
        
    }

    protected onHide(): void {
        this.ID=0;
        Laya.stage.event(CK_EventCode.WindowClose);
    }


    protected onInit(): void {
        this.Init();
    }

    Show(args?: any) {
        if(args != null )
            this.ckInfo = args;
        this.SetVisible(true);
        this.show();
    }
   
    Close() {
        this.hide();
        Laya.stage.event(CK_EventCode.WindowClose);
    }

    Destroy() {
        this.dispose();
        this.ID=0;
        this.IsInitFinish=false;
        Laya.stage.event(CK_EventCode.WindowDestroy,this.ID);
    }

    SetVisible(visible: boolean)
    {
        if (this.contentPane!=null) 
            this.contentPane.visible=visible;
    }
     

    private InitComp()
    {
        this.uiListSpecialty = this.Content.getChild("bred_spc_list").asList;
        this.uiTextCost = this.Content.getChild("bred_cost_spc_comp").asCom.getChild("bred_upgrademoney_txt").asTextField;
        this.uiBtnConfirm = this.Content.getChild("bred_changespc_btn").asButton;
        this.uiCompClose = this.Content.getChild("bred_mask_grp").asCom;
    }

    private InitWindow()
    {
        this.SetUIChooseList();
    }

    private BindEvent()
    {
        if(this.uiCompClose != null)
            this.uiCompClose.onClick(this,this.Close);
        if(this.uiBtnConfirm != null)
            this.uiBtnConfirm.onClick(this,this.OnClickConfirmBtn)
        if(this.uiListSpecialty != null)
            this.uiListSpecialty.itemRenderer = this.SetSpecialtyListRenderFunc();
    }


    private SetSpecialtyListRenderFunc():Laya.Handler
    {
        return Laya.Handler.create(this,(idx:number,obj:fgui.GObject)=>{
            let item = new UISpecialtyItem(obj);
            item.Show(this.specialtyDataList[idx]);
            this.specialtyList.push(item);
            obj.onClick(this,this.OnClickItem,[idx]);
        },null,false)
    }

    private SetUIChooseList()
    {
        while (this.specialtyList.length>0) 
            this.specialtyList.pop().Hide();
        while(this.specialtyDataList.length>0)
            this.specialtyDataList.pop();
        this.uiListSpecialty.numItems = 0;
        this.InitChooseListData();
        this.uiListSpecialty.numItems = this.specialtyDataList.length;
    }

    private InitChooseListData()
    {
        if(this.ckInfo == null)
            return
        if(this.ckInfo.chooseSpecialtyList == null)
            return
        this.ckInfo.chooseSpecialtyList.forEach(id => {
            let specialty = CkSpecialtyConfig.GetInstance().GetData((40200000+id).toString());
            if(specialty != null)
                this.specialtyDataList.push(specialty);
        });
    }

    private OnClickItem(args?:any)
    {
        console.log("-----------------OnClickItem",args);
        if(args == null)
            return
        let idx = args;
        if(idx == null)
            return
        let item = this.specialtyList[idx];
        if(item == null)
            return
        item.ActiveSelection(true);
        if(this.lastSelectIdx == null)
            this.lastSelectIdx = idx;
        else
        {
            let item = this.specialtyList[this.lastSelectIdx];
            if(item != null)
                item.ActiveSelection(false);
            this.lastSelectIdx = idx;
        }
    }

    private OnClickConfirmBtn()
    {
        if(this.ckInfo == null)
            return
        if(this.lastSelectIdx == null)
            return
        let specialty = this.specialtyDataList[this.lastSelectIdx];
        if(specialty == null)
            return
        let rqstData = RequestPackage.RqstIntKeyIntValue.create();
        rqstData.key = this.ckInfo.id;
        rqstData.value = specialty.id - 40200000;
        let buf: Uint8Array = RequestPackage.RqstIntKeyIntValue.encode(rqstData).finish();
        SocketClient.GetInstance().SendBizMsg(RequestCMD.ChooseSpecialty, buf);
        this.Close();
    }

}