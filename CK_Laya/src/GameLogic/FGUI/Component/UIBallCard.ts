import { BallType } from "../../Common/BallType";
import { CareerType } from "../../Common/CareerType";
import { MathHelper } from "../../Common/MathHelper";
import { CkLineage, CkLineageConfig } from "../../Generate/Config/CkLineage";
import { CkQuality, CkQualityConfig } from "../../Generate/Config/CkQuality";
import { CkWeapon, CkWeaponConfig } from "../../Generate/Config/CkWeapon";
import { LangConfig } from "../../Generate/Config/Lang";


export class UIBallCard {
    private content:fgui.GComponent;
    //1=in waiting 2=in bag
    private cardType;

    private ballLoader:fgui.GLoader;
    private professionLoader:fgui.GLoader;
    private anotherWeaponLoader:fgui.GLoader;
    private beltLoader:fgui.GLoader;
    private ckIdText:fgui.GTextField;
    private professionText:fgui.GTextField;
    private levelText:fgui.GTextField;
    private typeCtrl:fgui.Controller;
    private stateCtrl:fgui.Controller;
    private weaponTrans:fgui.Transition;


    private ballData:ResponsePackage.RespCkCardInfo;

    constructor(content,cardType) {
        this.content=content;
        this.cardType=cardType;
        this.InitComp()
    }

    private InitComp()
    {
        this.ballLoader=this.content.getChild("common_ball_loader").asLoader;
        this.beltLoader=this.content.getChild("common_belt_loader").asLoader;
        this.professionLoader=this.content.getChild("common_class_loader").asLoader;
        this.anotherWeaponLoader=this.content.getChild("common_class_sway_loader").asLoader;
        this.ckIdText=this.content.getChild("common_balldnanumber_txt").asTextField;
        this.professionText=this.content.getChild("common_classname_comp").asCom.getChild("common_classname_txt").asTextField;
        this.levelText=this.content.getChild("common_balllvl_comp").asCom.getChild("common_lvlnumber_txt").asTextField;
        this.typeCtrl=this.content.getController("common_cardlevel_ctrl");
        this.stateCtrl=this.content.getController("bag_state_ctrl");
        this.weaponTrans=this.content.getTransition("common_weaponsway_anim");
        this.weaponTrans.stop();
    }


    public Show(data,state = 0)
    {
        if (this.cardType==1) {
            this.typeCtrl.selectedIndex=1;
        }
        else if(this.cardType==2)
        {
            this.typeCtrl.selectedIndex=0;
        }
        this.ballData=data;
        this.ChangeCareer(this.ballData.professionList[0]);
        this.ChangeBlood(this.ballData.lineage);
        this.ChangeBelt(this.ballData.quality);
        this.SetID(this.ballData.seq);
        this.SetLevel(this.ballData.lv);
        this.SetState(state);
    }

    
  

    //change weapon and hat
    public ChangeCareer(career:CareerType)
    {
        let careerConfig:CkWeapon=CkWeaponConfig.GetInstance().GetData("1010000"+career);
        this.professionLoader.url=careerConfig.weaponIcon;
        this.professionText.text=LangConfig.GetInstance().GetData(careerConfig.classLang).text;

    }

    public ChangeBlood(blood:BallType)
    {
        let bloodConfig:CkLineage=CkLineageConfig.GetInstance().GetData("1020000"+blood);
        this.ballLoader.url=bloodConfig.ballIcon;
        
    }

    public ChangeBelt(quality:number){
        let beltConfig:CkQuality=CkQualityConfig.GetInstance().GetData("1030000"+quality);
        this.beltLoader.url=beltConfig.beltIcon;
    }

    public SetID(id:number){
        this.ckIdText.text="ID:" + MathHelper.GetInstance().PrefixInteger(id,10);
    }

    public SetLevel(level:number)
    {
        this.levelText.text=level.toString();
    }

    private SetState(state):void
    {
        this.stateCtrl.selectedIndex = state;
        if(state == 1)
        {
            if(this.anotherWeaponLoader != undefined && this.anotherWeaponLoader.scaleX > 0)
            {
                this.anotherWeaponLoader.url = this.professionLoader.url;
                this.anotherWeaponLoader.setScale(-this.anotherWeaponLoader.scaleX,this.anotherWeaponLoader.scaleY);
            }
            if(!this.weaponTrans.playing)
                this.weaponTrans.play();
        }
        else
        {
            if(this.weaponTrans.playing)
                this.weaponTrans.stop();
        }
    }
}