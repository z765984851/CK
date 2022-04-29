import { CareerType } from "../../Common/CareerType";
import { CkQuality, CkQualityConfig } from "../../Generate/Config/CkQuality";
import { CkWeapon, CkWeaponConfig } from "../../Generate/Config/CkWeapon";

export class UIBallBattleMsg {
    private root:Laya.Sprite3D;
    private camera:Laya.Camera;
    private component:fgui.GComponent;
    private currentPos:Laya.Vector4=new Laya.Vector4(0,0,0,0);

    private idText:fgui.GTextField;
    private hpSlider:fgui.GSlider;
    private hatLoader:fgui.GLoader;
    private weaponLoader:fgui.GLoader;
    private beltLoader:fgui.GLoader;

    private battlerData:ResponsePackage.RespBattler;

    constructor(root,camera) {
        this.root=root;
        this.camera=camera;
       
    }

    
    public Show(data){
        this.battlerData=data;
        this.component=fgui.UIPackage.createObject("battle_package","battle_ck3d_comp").asCom;
        fgui.GRoot.inst.addChild(this.component);
        this.InitComp();
        this.InitData();
    }
    

    private InitComp(){
        this.idText=this.component.getChild("battle_playerid_txt").asTextField;
        this.hpSlider=this.component.getChild("battle_ckhp_bar").asSlider;
        this.hatLoader=this.component.getChild("battle_class_comp").asCom.getChild("lobby_function_icon") as fgui.GLoader;
        this.weaponLoader=this.component.getChild("battle_ckweapon_comp").asCom.getChild("lobby_ckweapon_icon") as fgui.GLoader;
        this.beltLoader=this.component.getChild("battle_ckquality_comp").asCom.getChild("lobby_ckquality_icon") as fgui.GLoader;

    }


    private InitData()
    {
        this.idText.text=this.battlerData.roleInfo.id;
        this.hpSlider.max=this.battlerData.battleCk.maxHp;
        this.ChangeHp(this.battlerData.battleCk.maxHp);
        this.ChangeCareer(this.battlerData.battleCk.professionList[0]);
        this.ChangeBelt(this.battlerData.battleCk.quality);

    }

    public StartFollow()
    {
        Laya.timer.loop(20,this,this.Follow);

    }
    public StopFollow(){
        Laya.timer.clear(this,this.Follow);
    }
   
    private Follow(){

       this.camera.viewport.project(this.root.transform.position,this.camera.projectionViewMatrix,this.currentPos)
       this.component.displayObject.pos(this.currentPos.x,this.currentPos.y);
    }



    //change weapon and hat
    private ChangeCareer(career:CareerType)
    {

        let careerConfig:CkWeapon=CkWeaponConfig.GetInstance().GetData("1010000"+career);
        this.weaponLoader.url=careerConfig.weaponIcon;
        this.hatLoader.url=careerConfig.cap;
    }

    private ChangeBelt(quality:number){

        let beltConfig:CkQuality=CkQualityConfig.GetInstance().GetData("1030000"+quality);
        this.beltLoader.url=beltConfig.qualityIcon;
    }

    public ChangeHp(value)
    {
        // console.log("[UIBallBattleMsg]",this.battlerData.battleCk.id,this.battlerData.battleCk.maxHp,value);
        
        this.hpSlider.value=value;

    }


    public Destroy()
    {
        this.StopFollow();
        this.component.dispose();

    }
}