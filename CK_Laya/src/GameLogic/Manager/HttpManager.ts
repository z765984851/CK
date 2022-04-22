export class HttpManager {

    private constructor() {
    }

    public static Instance : HttpManager;
    public static GetInstance(): HttpManager
    {
        if(this.Instance==null){
            this.Instance=new HttpManager ();
        }
        return this.Instance
    }

    public Get(url:string,data:any,onComplete:Function,onError:Function)
    {

        let rqst=new Laya.HttpRequest();
        rqst.http.timeout = 10000;
        rqst.once(Laya.Event.COMPLETE, this, onComplete);
        rqst.once(Laya.Event.ERROR, this, onError);
        rqst.send(url,data,"get","json")
    }

    public Post(url:string,data:any,onComplete:Function,onError:Function)
    {

        let rqst=new Laya.HttpRequest();
        rqst.http.timeout = 10000;
        rqst.once(Laya.Event.COMPLETE, this, onComplete);
        rqst.once(Laya.Event.ERROR, this, onError);
        rqst.send(url,data,"post","json")
    }


    
}