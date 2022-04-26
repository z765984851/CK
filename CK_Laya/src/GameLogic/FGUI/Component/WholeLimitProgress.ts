export class WholeLimitProgress {
    private content:fgui.GComponent;
    private powerList:fgui.GList;
    private powerCount:fgui.GTextField;
    constructor(content) {
        this.content=content;
        this.InitComp()
    }
    private InitComp()
    {
        this.powerList=this.content.getChild("lobby_careerlist_list").asList;
        this.powerCount=this.content.getChild("lobby_careerlimit_txt").asTextField;
       
    }

    public Fresh()
    {
        

    }
}