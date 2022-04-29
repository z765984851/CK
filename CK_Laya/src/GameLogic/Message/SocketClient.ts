import BaseMsgHeadUtil from "./BaseMsgHeadUtil";
import { ExtType, MsgType } from "./BaseMsgType";
import { BitConvert } from "./BitConvert";
import { MessageCenter } from "./MessageCenter";
import { MiniDataDecryptHead, MiniDataUtil } from "./MiniDataUtil";

export class SocketClient
{
    public IP:string;
    public Port:number;
    public ServerId:string;
    public UID:number=111111111;

    private socket:Laya.Socket;
    private static Instance:SocketClient;
    
    private Endian:string=Laya.Byte.BIG_ENDIAN;
    
    private byte:Laya.Byte;

    public static GetInstance():SocketClient
    {
        if (this.Instance==null) {
            this.Instance=new SocketClient();
        }
        return this.Instance;

    }


    private constructor() 
    {

        this.socket = new Laya.Socket();
        this.socket.endian = this.Endian;

        this.byte=new Laya.Byte();
        this.byte.endian=this.Endian;

        this.socket.on(Laya.Event.OPEN, this, this.OpenHandler);
        this.socket.on(Laya.Event.MESSAGE, this, this.ReceiveHandler);
        this.socket.on(Laya.Event.CLOSE, this, this.CloseHandler);
        this.socket.on(Laya.Event.ERROR, this, this.ErrorHandler);
    }


    public Connect()
    {
        console.log("Socket Connet",this.IP,this.Port);
        
        this.socket.connect(this.IP,this.Port);
    }

    private OpenHandler(event: any = null): void {
        //send shake hand
        this.ShakeHand();
    

    }
    
    private ReceiveHandler(msg: any = null): void {
       
        let buffer:ArrayBuffer=msg;
        let byte=new Laya.Byte();
        byte.writeArrayBuffer(buffer);

        let receiveData=new ReceiveData();
        //nessary !!! must to set pos =0 
        byte.pos=0;
        // console.log("ReceiveHandler",byte)
        receiveData.Head=byte.getByte();
        if (BaseMsgHeadUtil.HaveLenField(receiveData.Head)) {
            receiveData.Length=byte.getInt32();
        }
        receiveData.Body=byte.getUint8Array(byte.pos,byte.length) 
        MessageCenter.GetInstance().HandleReceiveMsg(receiveData)
        
    }

    private CloseHandler(e: any = null): void {
        console.log("Socket Close");
    }

    private ErrorHandler(e: any = null): void {
        console.log("Socket Error",e)
        
    }


    public SendMsg(haveLenField:boolean, msgType:MsgType, cmpType:number, extType:ExtType,  msg:number[])
    {

        
        this.byte.clear()
        //write head
        let head=BaseMsgHeadUtil.BuildHeadByte(haveLenField, msgType, cmpType, extType)
        this.byte.writeByte(head);
        //write msg length
        this.byte.writeInt32(msg.length);
        //?
        for (let index = 0; index < msg.length; index++) {
            const element = msg[index];
            this.byte.writeByte(element);
        }
       
        // console.log("Send Msg",this.byte);
        
        this.socket.send(this.byte.buffer);


    }

    public ShakeHand():void{

        this.byte.clear();
        // write head
        let head=BaseMsgHeadUtil.BuildHeadByte(true, MsgType.CTRL_CONNC_OPEN, 0, ExtType.CTRL_CONNC_OPEN_EXT_TYPE_BASIC)
        this.byte.writeByte(head);
        

		var body = MiniDataUtil.GetStringDataDscrpt(BitConvert.GetInstance().StringToByteArray(this.ServerId));
		var bodyLength = 1 + body.GetTailBytes().length;

        this.byte.writeInt32(bodyLength)
        
        this.byte.writeByte(body.GetHeadByte())
        let tailArray=body.GetTailBytes()
        for (let index = 0; index < tailArray.length; index++) {
            const element = tailArray[index];
            this.byte.writeByte(element)
        }  
        // console.log("Send ShakeHand",this.byte);
        
        this.socket.send(this.byte.buffer);

    }

    public Regular():void{

        this.byte.clear();
        this.byte.pos=0;
        // write head
        let msg = this.UID + "#" + this.ServerId + "#" + "accessToken" + "#" + "refreshToken";

        let msgByteArray=BitConvert.GetInstance().StringToByteArray(msg);
        let msgHead=MiniDataUtil.GetStringDataDscrpt(msgByteArray);
    

        this.byte.writeByte(msgHead.GetHeadByte());
        let tailBytes=msgHead.GetTailBytes();
        for (let index = 0; index < tailBytes.length; index++) {
            const element = tailBytes[index];
            this.byte.writeByte(element)
        }
       
        let msgArray=BitConvert.GetInstance().ByteArrayToNumberArray(this.byte.getUint8Array(0,this.byte.length));
        // console.log("Send Regular",msgArray);
        this.SendMsg(true,MsgType.CTRL_CUSTOM,0,ExtType.CTRL_CUSTOM_EXT_TYPE_0,msgArray);
        

    }

    public SendBizMsg(cmd:number,msg:Uint8Array)
    {
        console.log("[SocketClient]Send Biz Msg ",cmd);
        let proxtoHead:MiniDataDecryptHead  = MiniDataUtil.GetIntDataDscrptHead(3);
        let cmdHead:MiniDataDecryptHead  = MiniDataUtil.GetIntDataDscrptHead(cmd);
        this.byte.clear();
        this.byte.pos=0;
        //write head
        this.byte.writeByte(proxtoHead.GetHeadByte());
        let tailArray=proxtoHead.GetTailBytes()
        for (let index = 0; index < tailArray.length; index++) {
            const element = tailArray[index];
            this.byte.writeByte(element)
        }  

        //write cmd
        this.byte.writeByte(cmdHead.GetHeadByte());
        tailArray=cmdHead.GetTailBytes()
        for (let index = 0; index < tailArray.length; index++) {
            const element = tailArray[index];
            this.byte.writeByte(element)
        }


        
        //write msg
        for (let index = 0; index < msg.length; index++) {
            const element = msg[index];
            this.byte.writeUint8(element)
        }

        let msgArray=BitConvert.GetInstance().ByteArrayToNumberArray(this.byte.getUint8Array(0,this.byte.length));
        // console.log("Send Biz",cmd);
        this.SendMsg(true,MsgType.BIZ_MSG,0,ExtType.BIZ_MSG_EXT_TYPE_UNICAST,msgArray);


    }

    public SendBizMsg_Empty(cmd:number)
    {
        let rqst=RequestPackage.RqstInt.create();
        rqst.value=0;
        let buf:Uint8Array=RequestPackage.RqstInt.encode(rqst).finish();

        SocketClient.GetInstance().SendBizMsg(cmd,buf);

    }


   

    public SocketClose(){
        this.socket.cleanSocket();
        this.socket.close();
    }
    
}

export class ReceiveData {
    public Head:number;
	public Length:number;
	public Body:Uint8Array;
}