import { BallType } from "../../Common/BallType";
import { CareerType } from "../../Common/CareerType";
import { CkQuality, CkQualityConfig } from "../../Generate/Config/CkQuality";
import { CkWeapon, CkWeaponConfig } from "../../Generate/Config/CkWeapon";

export class UIBallBattleMsg {
    private content:fgui.GComponent;
    private camera:Laya.Camera;
    private component:fgui.GComponent;
    private currentPos:Laya.Vector4=new Laya.Vector4(0,0,0,0);

    private idText:fgui.GTextField;
    private hpSlider:fgui.GSlider;
    private hatLoader:fgui.GLoader;
    private weaponLoader:fgui.GLoader;
    private beltLoader:fgui.GLoader;
    private weaponRotateComp:fgui.GComponent;
    private meleeAnim:fgui.Transition;
    private arrowAnim:fgui.Transition;

    private battlerData:ResponsePackage.RespBattler;
    private followTarget:Laya.Sprite3D;

    private careerType:CareerType;
    private ballType:BallType;

    constructor(content,camera) {
        this.content=content;
        this.camera=camera;
       
    }

    
    public Show(data){
        this.battlerData=data;
        this.component=fgui.UIPackage.createObject("battle_package","battle_ck3d_comp").asCom;
        this.content.addChild(this.component);
        this.InitComp();
        this.InitData();
        
    }
    

    private InitComp(){
        this.idText=this.component.getChild("battle_playerid_txt").asTextField;
        this.hpSlider=this.component.getChild("battle_ckhp_bar").asSlider;
        this.hatLoader=this.component.getChild("battle_class_comp").asCom.getChild("lobby_function_icon") as fgui.GLoader;
        
        this.weaponRotateComp=this.component.getChild("battle_ckweapon_comp").asCom;
        this.weaponLoader=this.weaponRotateComp.getChild("weapon_comp").asCom.getChild("lobby_ckweapon_icon") as fgui.GLoader;
        this.beltLoader=this.component.getChild("battle_ckquality_comp").asCom.getChild("lobby_ckquality_icon") as fgui.GLoader;

        this.meleeAnim=this.weaponRotateComp.getTransition("weapon_melee_atk_anim");
        this.arrowAnim=this.weaponRotateComp.getTransition("weapon_arrow_atk_anim");
    }


    private InitData()
    {
        this.careerType=this.battlerData.battleCk.professionList[0];
        this.ballType=this.battlerData.battleCk.lineage;
        this.idText.text=this.battlerData.roleBaseInfo.name;
        this.hpSlider.max=this.battlerData.battleCk.maxHp;
        this.ChangeHp(this.battlerData.battleCk.maxHp);
        this.ChangeCareer(this.careerType);
        this.ChangeBelt(this.battlerData.battleCk.quality);

    }

    public StartFollow(followTarget)
    {
        this.followTarget=followTarget;
        Laya.timer.loop(20,this,this.Follow);

    }
    public StopFollow(){
        Laya.timer.clear(this,this.Follow);
    }
   
    private Follow(){

       this.camera.viewport.project(this.followTarget.transform.position,this.camera.projectionViewMatrix,this.currentPos)
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
        this.hpSlider.value=value;

    }

    public RotateWeapon(angle:number){
        // this.weaponRotateComp.displayObject.rotation=angle;
        this.weaponRotateComp.rotation=angle;

    }


    public PlayAtkAnim()
    {
        switch (this.careerType) {
            case CareerType.Axe:
                this.meleeAnim.play();
                break;
            case CareerType.Bow:
                this.arrowAnim.play();
                break;
            case CareerType.Staff:
                this.meleeAnim.play();
                break;
            case CareerType.Sword:
                this.meleeAnim.play();
                break;
        
            default:
                break;
        }
    }

    public HurtAnim()
    {

    }



    public Destroy()
    {
        this.StopFollow();
        this.component.dispose();

    }
}