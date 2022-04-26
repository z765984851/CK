export class DayLimitProgress {
    private content:fgui.GComponent;
    private powerList:fgui.GList;
    private powerCount:fgui.GTextField;
    constructor(content) {
        this.content=content;
        this.InitComp()
    }
    private InitComp()
    {
        this.powerList=this.content.getChild("lobby_daylist_list").asList;
        this.powerCount=this.content.getChild("lobby_daylimit_txt").asTextField;
       
    }

    public Fresh()
    {
        

    }
}