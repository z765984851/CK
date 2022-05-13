import { CK_EventCode } from "../../Common/CK_EventCode";
import { CK_FGUIConfig, CK_UIConfig, CK_UIType } from "../CK_FGUIConfig";
import { SocketClient } from "../../Message/SocketClient";
import { RequestCMD } from "../../Common/RequestCMD";

export class FGUI_UpgradeWindow extends fgui.Window implements FGUIBase {
    Config:CK_UIConfig;
    IsInitFinish: boolean=false;
    Content: fgui.GComponent;
    ID: number= 0;
    UIType: CK_UIType = CK_UIType.UpgradeWindow;

    private ckInfo:ResponsePackage.IRespCkInfo;

    //comp
    private uiTextLevel:fgui.GTextField;
    private uiTextStr:fgui.GTextField;
    private uiBtnStr:fgui.GButton;
    private uiLoaderStr:fgui.GLoader;
    private uiTextInt:fgui.GTextField;
    private uiBtnInt:fgui.GButton;
    private uiLoaderInt:fgui.GLoader;
    private uiTextDex:fgui.GTextField;
    private uiBtnDex:fgui.GButton;
    private uiLoaderDex:fgui.GLoader;
    private uiTextCon:fgui.GTextField;
    private uiBtnCon:fgui.GButton;
    private uiLoaderCon:fgui.GLoader;
    private uiTextSpi:fgui.GTextField;
    private uiBtnSpi:fgui.GButton;
    private uiLoaderSpi:fgui.GLoader;
    private uiTextLuk:fgui.GTextField;
    private uiBtnLuk:fgui.GButton;
    private uiLoaderLuk:fgui.GLoader;
    private uiTextRemain:fgui.GTextField;
    private uiBtnConfirm:fgui.GButton;
    private uiCompCloseArea:fgui.GComponent;

    //data
    private rqstPropertyMap:Map<string,number> = new Map();

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
        this.onShown();
        this.setScale(0.1, 0.1);
        fgui.GTween.to2(0.1, 0.1, 1, 1, 0.3)
            .setTarget(this, this.setScale)
            .setEase(fgui.EaseType.QuadOut);
    }
    protected doHideAnimation(): void {
        fgui.GTween.to2(1, 1, 0.1, 0.1, 0.3)
            .setTarget(this, this.setScale)
            .setEase(fgui.EaseType.QuadOut)
            .onComplete(this.hideImmediately, this);
    }

    protected onShown(): void {
        this.InitData();
        this.InitWindow();
    }

    protected onHide(): void {
        this.ID=0;
        Laya.stage.event(CK_EventCode.WindowClose);
    }


    protected onInit(): void {
        this.Init();
    }

    Show(args?: any) {
        this.ckInfo = args;
        this.SetVisible(true);
        this.show();
    }
   
    Close() {
        this.hide();
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
        this.uiTextLevel = this.Content.getChild("bred_level_txt").asTextField;

        let comptop = this.Content.getChild("bred_status3_upgrade_comp").asCom;

        this.uiTextStr = comptop.getChild("bred_status1_comp").asCom.getChild("n13").asTextField;
        this.uiBtnStr = comptop.getChild("bred_status1_comp").asCom.getChild("n14").asButton;
        this.uiLoaderStr = comptop.getChild("bred_status1_comp").asCom.getChild("n22").asLoader;

        this.uiTextInt = comptop.getChild("bred_status2_comp").asCom.getChild("n13").asTextField;
        this.uiBtnInt = comptop.getChild("bred_status2_comp").asCom.getChild("n14").asButton;
        this.uiLoaderInt = comptop.getChild("bred_status2_comp").asCom.getChild("n22").asLoader;

        this.uiTextDex = comptop.getChild("bred_status3_comp").asCom.getChild("n13").asTextField;
        this.uiBtnDex = comptop.getChild("bred_status3_comp").asCom.getChild("n14").asButton;
        this.uiLoaderDex = comptop.getChild("bred_status3_comp").asCom.getChild("n22").asLoader;

        let compdown = this.Content.getChild("bred_status6_upgrade_comp").asCom;

        this.uiTextCon = compdown.getChild("bred_status1_comp").asCom.getChild("n13").asTextField;
        this.uiBtnCon = compdown.getChild("bred_status1_comp").asCom.getChild("n14").asButton;
        this.uiLoaderCon = compdown.getChild("bred_status1_comp").asCom.getChild("n22").asLoader;

        this.uiTextSpi = compdown.getChild("bred_status2_comp").asCom.getChild("n13").asTextField;
        this.uiBtnSpi = compdown.getChild("bred_status2_comp").asCom.getChild("n14").asButton;
        this.uiLoaderSpi = compdown.getChild("bred_status2_comp").asCom.getChild("n22").asLoader;

        this.uiTextLuk = compdown.getChild("bred_status3_comp").asCom.getChild("n13").asTextField;
        this.uiBtnLuk = compdown.getChild("bred_status3_comp").asCom.getChild("n14").asButton;
        this.uiLoaderLuk = compdown.getChild("bred_status3_comp").asCom.getChild("n22").asLoader;

        this.uiTextRemain = this.Content.getChild("bred_pointnum_txt").asTextField;
        this.uiBtnConfirm = this.Content.getChild("bred_confirm_btn").asButton;

        this.uiCompCloseArea = this.Content.getChild("bred_mask_grp").asCom;
    }


 
    private BindEvent() 
    {
        if(this.uiBtnStr != null)
            this.uiBtnStr.onClick(this,this.OnClickStrBtn);
        if(this.uiBtnInt != null)
            this.uiBtnInt.onClick(this,this.OnClickIntBtn);
        if(this.uiBtnDex != null)
            this.uiBtnDex.onClick(this,this.OnClickDexBtn);
        if(this.uiBtnCon != null)
            this.uiBtnCon.onClick(this,this.OnClickConBtn);
        if(this.uiBtnSpi != null)
            this.uiBtnSpi.onClick(this,this.OnClickSpiBtn);
        if(this.uiBtnLuk != null)
            this.uiBtnLuk.onClick(this,this.OnClickLukBtn);
        if(this.uiBtnConfirm != null)
            this.uiBtnConfirm.onClick(this,this.OnClickConfirm);
        if(this.uiCompCloseArea != null)
            this.uiCompCloseArea.onClick(this,this.Close);
    }

    private InitData()
    {
        this.rqstPropertyMap.clear();
        for(let i = 1 ; i <= 6 ;i++ )
            this.rqstPropertyMap.set(i.toString(),0);
    }

    private InitWindow()
    {
        this.SetLevel();
        this.SetStr();
        this.SetInt();
        this.SetDex();
        this.SetCon();
        this.SetSpi();
        this.SetLuk();
        this.SetRemain();
    }

    private SetLevel()
    {
        if(this.uiTextLevel == null)
            return
        this.uiTextLevel.text = "Lv0";
        if(this.ckInfo == null)
            return
        this.uiTextLevel.text ="Lv" + this.ckInfo.level.toString();
    }

    private SetStr()
    {
        if(this.uiLoaderStr != null)
            this.uiLoaderStr.url = "ui://4kxumucabhs61";
        if(this.uiTextStr != null)
        {
            this.uiTextStr.text = "0"
            if(this.ckInfo != null)
                this.uiTextStr.text = this.ckInfo.strength.toString();
        }
    }

    private SetInt()
    {
        if(this.uiLoaderInt != null)
            this.uiLoaderInt.url = "ui://4kxumucabhs62";
        if(this.uiTextInt != null)
        {
            this.uiTextInt.text = "0"
            if(this.ckInfo != null)
                this.uiTextInt.text = this.ckInfo.wisdom.toString();
        }
    }

    private SetDex()
    {
        if(this.uiLoaderDex != null)
            this.uiLoaderDex.url = "ui://4kxumucabhs63";
        if(this.uiTextDex != null)
        {
            this.uiTextDex.text = "0"
            if(this.ckInfo != null)
                this.uiTextDex.text = this.ckInfo.agile.toString();
        }
    }

    private SetCon()
    {
        if(this.uiLoaderCon != null)
            this.uiLoaderCon.url = "ui://4kxumucax6u0ro";
        if(this.uiTextCon != null)
        {
            this.uiTextCon.text = "0"
            if(this.ckInfo != null)
                this.uiTextCon.text = this.ckInfo.health.toString();
        } 
    }

    private SetSpi()
    {
        if(this.uiLoaderSpi != null)
            this.uiLoaderSpi.url = "ui://4kxumucabhs65";
        if(this.uiTextSpi != null)
        {
            this.uiTextSpi.text = "0"
            if(this.ckInfo != null)
                this.uiTextSpi.text = this.ckInfo.spirit.toString();
        }
    }

    private SetLuk()
    {
        if(this.uiLoaderLuk != null)
            this.uiLoaderLuk.url = "ui://4kxumucabhs61";
        if(this.uiTextLuk != null)
        {
            this.uiTextLuk.text = "0"
            if(this.ckInfo != null)
                this.uiTextLuk.text = this.ckInfo.luck.toString();
        }
    }

    private SetRemain()
    {
        if(this.uiTextRemain != null)
        {
            this.uiTextRemain.text = "0";
            if(this.ckInfo != null)
            {
                this.uiTextRemain.text = this.ckInfo.propertyNum.toString();
            }
        }
    }

    private IsRemainEnough():boolean
    {
        let remain = 0;
        if(this.uiTextRemain != null)
            remain = parseInt(this.uiTextRemain.text);
        return remain > 0;
    }

    private ReduceRemain()
    {
        if(this.uiTextRemain == null)
            return
        let remain = parseInt(this.uiTextRemain.text);
        remain -= 1;
        this.uiTextRemain.text = remain.toString();
    }

    private UpValue(uiText:fgui.GTextField)
    {
        let value = parseInt(uiText.text);
        value++;
        uiText.text = value.toString();
    }

    //click
    private OnClickStrBtn()
    {
        if(!this.IsRemainEnough())
            return
        this.UpValue(this.uiTextStr);
        this.ReduceRemain();
        this.rqstPropertyMap.set("1",this.rqstPropertyMap.get("1") + 1);
    }

    private OnClickIntBtn()
    {
        if(!this.IsRemainEnough())
            return
        this.UpValue(this.uiTextInt);
        this.ReduceRemain();
        this.rqstPropertyMap.set("2",this.rqstPropertyMap.get("2") + 1);
    }

    private OnClickDexBtn()
    {
        if(!this.IsRemainEnough())
            return
        this.UpValue(this.uiTextDex);
        this.ReduceRemain();
        this.rqstPropertyMap.set("3",this.rqstPropertyMap.get("3") + 1);
    }

    private OnClickConBtn()
    {
        if(!this.IsRemainEnough())
            return
        this.UpValue(this.uiTextCon);
        this.ReduceRemain();
        this.rqstPropertyMap.set("4",this.rqstPropertyMap.get("4") + 1);
    }

    private OnClickSpiBtn()
    {
        if(!this.IsRemainEnough())
            return
        this.UpValue(this.uiTextSpi);
        this.ReduceRemain();
        this.rqstPropertyMap.set("5",this.rqstPropertyMap.get("5") + 1);
    }

    private OnClickLukBtn()
    {
        if(!this.IsRemainEnough())
            return
        this.UpValue(this.uiTextLuk);
        this.ReduceRemain();
        this.rqstPropertyMap.set("6",this.rqstPropertyMap.get("6") + 1);
    }

    private OnClickConfirm()
    {
        if(this.IsRemainEnough())
            return
        //sendrqst
        this.RqstSetProperty();
    }

    //rqst
    private RqstSetProperty()
    {
        let rqstData = RequestPackage.RqstAllotProperty.create();
        rqstData.ckId = this.ckInfo.id;
        rqstData.allotMap = {
            "1":this.rqstPropertyMap.get("1"),
            "2":this.rqstPropertyMap.get("2"),
            "3":this.rqstPropertyMap.get("3"),
            "4":this.rqstPropertyMap.get("4"),
            "5":this.rqstPropertyMap.get("5"),
            "6":this.rqstPropertyMap.get("6") 
        };
        let buf: Uint8Array = RequestPackage.RqstAllotProperty.encode(rqstData).finish();
        SocketClient.GetInstance().SendBizMsg(RequestCMD.AllotProperty, buf);
        this.Close();
    }
}