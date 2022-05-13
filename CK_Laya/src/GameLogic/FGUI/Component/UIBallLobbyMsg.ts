
import { BallType } from "../../Common/BallType";
import { CareerType } from "../../Common/CareerType";
import { CkQuality, CkQualityConfig } from "../../Generate/Config/CkQuality";
import { CkWeapon, CkWeaponConfig } from "../../Generate/Config/CkWeapon";
import { SceneManager } from "../../Manager/SceneManager";
import { LobbyScene } from "../../Scene/LobbyScene";


export class UIBallLobbyMsg {

    private content:fgui.GComponent;

    private hatLoader:fgui.GLoader;
    private weaponLoader:fgui.GLoader;
    private beltLoader:fgui.GLoader;
    private ballData:ResponsePackage.RespCkInfo;


    constructor(content) {
        this.content=content;
        this.InitComp()
    }

    public InitComp()
    {
        
        this.hatLoader=this.content.getChild("lobby_class_comp").asCom.getChild("lobby_function_icon") as fgui.GLoader;
        this.weaponLoader=this.content.getChild("lobby_ckweapon_comp").asCom.getChild("lobby_ckweapon_icon") as fgui.GLoader;
        this.beltLoader=this.content.getChild("lobby_ckquality_comp").asCom.getChild("lobby_ckquality_icon") as fgui.GLoader;
       
    }


    public SetData(data)
    {
        this.ballData=data;
        this.ChangeCareer(this.ballData.professionList[0]);
        this.ChangeBlood(this.ballData.lineage);
        this.ChangeBelt(this.ballData.quality);
    }

    //change weapon and hat
    public ChangeCareer(career:CareerType)
    {
        // console.log("[UIBallMsg]ChangeCareer",career);
        let careerConfig:CkWeapon=CkWeaponConfig.GetInstance().GetData("1010000"+career);
        
        this.weaponLoader.url=careerConfig.weaponIcon;
        this.hatLoader.url=careerConfig.cap;
    }

    public ChangeBlood(blood:BallType)
    {
       
        let lobbyScene=SceneManager.GetInstance().CurrentActiveScene as LobbyScene;
        lobbyScene.ChangeBall(blood);
        lobbyScene.StartRotate();
    }

    public ChangeBelt(quality:number){
        // console.log("[UIBallMsg]ChangeBelt",quality);
        let beltConfig:CkQuality=CkQualityConfig.GetInstance().GetData("1030000"+quality);
        this.beltLoader.url=beltConfig.qualityIcon;
    }

}