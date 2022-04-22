export class HttpServerResp {

    public Data:any;
    public VersionStatus:number;
    public Channel:string;
    public ServerStatus:number;
    public Sid:string;
    public GatewayIp:string;
    public Port:number;
    public ClientIP:string;

    constructor(data) {
        this.Data=data;
        this.VersionStatus=this.Data.versionStatus;
        this.Channel=this.Data.channel;
        this.ServerStatus=this.Data.serverStatus;
        this.ClientIP=this.Data.clientIP;

        
        this.Sid=this.Data.server.sid;
        this.GatewayIp=this.Data.server.gatewayIp;
        this.Port=this.Data.server.port;
    }

}