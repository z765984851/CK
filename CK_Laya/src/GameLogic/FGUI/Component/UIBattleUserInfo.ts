import { BallType } from "../../Common/BallType";
import { CareerType } from "../../Common/CareerType";
import { CkLineage, CkLineageConfig } from "../../Generate/Config/CkLineage";
import { CkQuality, CkQualityConfig } from "../../Generate/Config/CkQuality";
import { CkWeapon, CkWeaponConfig } from "../../Generate/Config/CkWeapon";

export class UIBattleUserInfo {

    private content:fgui.GComponent;
    private userData:ResponsePackage.RespBattler;
    public UserID;
    public CKId;

    private ballLoader:fgui.GLoader;
    private beltLoader:fgui.GLoader;
    private hatLoader:fgui.GLoader;
    private weaponLoader:fgui.GLoader;
    private nameText:fgui.GTextField;
    
    constructor(content) {
        this.content=content;
        this.InitComp();
    }

    

    private InitComp()
    {
        let loadComp:fgui.GComponent=this.content.getChild("battle_playerck_comp").asCom;
        this.ballLoader=loadComp.getChild("battle_ckball_loader").asLoader;
        this.beltLoader=loadComp.getChild("battle_ckbelt_loader").asLoader;
        this.hatLoader=loadComp.getChild("battle_ckclass_loader").asLoader;
        this.weaponLoader=loadComp.getChild("battle_ckweapon_loader").asLoader;
        this.nameText=this.content.getChild("battle_playerid_txt").asTextField;


    }

    public Show(data)
    {
        this.userData=data;
        this.UserID=this.userData.roleBaseInfo.id;
        this.CKId=this.userData.battleCk.id;
        this.ChangeCareer(this.userData.battleCk.professionList[0]);
        this.ChangeBlood(this.userData.battleCk.lineage);
        this.ChangeQuality(this.userData.battleCk.quality);
        this.SetID(this.userData.roleBaseInfo.name);

    }

     //change weapon and hat
     public ChangeCareer(career:CareerType)
     {
         let careerConfig:CkWeapon=CkWeaponConfig.GetInstance().GetData("1010000"+career);
         this.weaponLoader.url=careerConfig.weaponIcon;
         this.hatLoader.url=careerConfig.cap;
 
     }
 
     public ChangeBlood(blood:BallType)
     {
         let bloodConfig:CkLineage=CkLineageConfig.GetInstance().GetData("1020000"+blood);
         this.ballLoader.url=bloodConfig.lineageIcon;
         
     }
 
     public ChangeQuality(quality:number){
         let qualityConfig:CkQuality=CkQualityConfig.GetInstance().GetData("1030000"+quality);
         this.beltLoader.url=qualityConfig.qualityIcon;
         
     }


 
     public SetID(name:string){
         this.nameText.text=name;
     }
 
     public SetGray(){
         this.content.grayed=true;
     }

}