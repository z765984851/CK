import BaseMsgHeadUtil from "./BaseMsgHeadUtil";
import { ExtType, MsgType } from "./BaseMsgType";
import { BitConvert } from "./BitConvert";
import { MessageCenter } from "./MessageCenter";
import { MiniDataUtil } from "./MiniDataUtil";

export class SocketClient
{
    public IP:string;
    public Port:number;
    public ServerId:string;

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
        this.socket.connect(this.IP,this.Port);
        // this.socket.connectByUrl("ws://192.168.10.26:8088")
    }

    private OpenHandler(event: any = null): void {
        //send shake hand
        // this.socket.send("hello");
        this.ShakeHand();
    

    }
    private ReceiveHandler(msg: any = null): void {
       
        let buffer:ArrayBuffer=msg;
        let byte=new Laya.Byte();
        byte.writeArrayBuffer(buffer);
        console.log(byte)

        let receiveData=new ReceiveData();
        //nessary !!! must to set pos =0 
        byte.pos=0;
        receiveData.Head=byte.getByte();
        receiveData.Length=byte.getInt32();
        receiveData.Body=byte.getUint8Array(byte.pos,byte.length)
        // console.log(receiveData)
        MessageCenter.GetInstance().HandleReceiveMsg(receiveData)
        
    }
    private CloseHandler(e: any = null): void {
        console.log("Socket Close");
    }
    private ErrorHandler(e: any = null): void {
        console.log("Socket Error",e)
        
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
        console.log(body,this.byte);
        this.socket.send(this.byte.buffer);

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
        this.byte.writeArrayBuffer(msg);
       
        // console.log(byte);
        
        this.socket.send(this.byte.buffer);


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