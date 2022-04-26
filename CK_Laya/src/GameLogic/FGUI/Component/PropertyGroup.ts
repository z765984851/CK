export class PropertyGroup {

    private content:fgui.GComponent;
    private levelText:fgui.GTextField;
    private strengthText:fgui.GTextField;
    private wisdomText:fgui.GTextField;
    private agileText:fgui.GTextField;
    private healthText:fgui.GTextField;
    private spiritText:fgui.GTextField;
    private luckText:fgui.GTextField;

    constructor(content) {
        this.content=content;
        this.InitComp();
    }
    private InitComp(){
        this.levelText=this.content.getChild("common_lvnumber_txt").asTextField;
        this.strengthText=this.content.getChild("common_str_txt").asTextField;
        this.wisdomText=this.content.getChild("common_int_txt").asTextField;
        this.agileText=this.content.getChild("common_dex_txt").asTextField;
        this.healthText=this.content.getChild("common_con_txt").asTextField;
        this.spiritText=this.content.getChild("common_spi_txt").asTextField;
        this.luckText=this.content.getChild("common_luk_txt").asTextField;
    }

    public SetData(ckInfo:ResponsePackage.RespCkInfo)
    {
        this.levelText.text=ckInfo.level.toString();
        this.strengthText.text=ckInfo.strength.toString();
        this.wisdomText.text=ckInfo.wisdom.toString();
        this.agileText.text=ckInfo.agile.toString();
        this.healthText.text=ckInfo.health.toString();
        this.spiritText.text=ckInfo.spirit.toString();
        this.luckText.text=ckInfo.luck.toString();
    }

}