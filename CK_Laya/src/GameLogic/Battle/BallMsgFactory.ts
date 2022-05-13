import { UIBallBattleMsg } from "../FGUI/Component/UIBallBattleMsg";

export class BallMsgFactory {

    private constructor() {
    }

    public static Instance : BallMsgFactory;
    public static GetInstance(): BallMsgFactory
    {
        if(this.Instance==null){
            this.Instance=new BallMsgFactory ();
        }
        return this.Instance
    }


    private content:fgui.GComponent;
    private camera:Laya.Camera;
    //userid,uiballbattlemsg
    private msgMap=new Map();
    public Init(content,camera){
        this.content=content;
        this.camera=camera;
    }


    public Create(data:ResponsePackage.RespBattler):UIBallBattleMsg
    {

        let newMsg=new UIBallBattleMsg(this.content,this.camera);
        this.msgMap.set(data.roleBaseInfo.id,newMsg);
        newMsg.Show(data);
        return newMsg;

    }

    public Get(userId):UIBallBattleMsg
    {
       let msg= this.msgMap.get(userId);
       return msg;
    }

    public Destroy(userId)
    {
        let msg=this.Get(userId);
        msg.Destroy();
        this.msgMap.delete(userId);

    }

    public Clear()
    {
        this.content=null;
        for (const key in this.msgMap) {
            let msg:UIBallBattleMsg = this.msgMap[key];
            msg.Destroy();
        }
        this.msgMap.clear();

    }



}