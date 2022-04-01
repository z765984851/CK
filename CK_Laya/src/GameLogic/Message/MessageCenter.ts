import BaseMsgHeadUtil from "./BaseMsgHeadUtil";
import { MsgType,ExtType } from "./BaseMsgType";
import { BitConvert } from "./BitConvert";
import { MiniDataUtil } from "./MiniDataUtil";
import { ReceiveData, SocketClient } from "./SocketClient";

export class MessageCenter {

    private constructor() {
    }

    public static Instance : MessageCenter;
    public static GetInstance(): MessageCenter
    {
        if(this.Instance==null){
            this.Instance=new MessageCenter ();
        }
        return this.Instance;
    }


    public HandleReceiveMsg( data: ReceiveData){

       BaseMsgHeadUtil.GetCompressionType(data.Head);

       let baseType:MsgType = BaseMsgHeadUtil.GetMsgType(data.Head);
	   let extType:ExtType = BaseMsgHeadUtil.GetExtendType(data.Head);
	   extType = baseType * 10 + extType;

       console.log("BaseType:",baseType," ,ExtType:",extType);
      
    
       switch (baseType) { 
            case MsgType.BIZ_MSG:
                this.HandleBizMsg(extType,data)
                break;
            case MsgType.CTRL_HEART_BEAT:
            
                break;
            case MsgType.CTRL_CONNC_OPEN:
            
                break;
            case MsgType.CTRL_CONNC_CLOSE:
            
                break;
            case MsgType.CTRL_CUSTOM:
            
                break;
            case MsgType.ERR_MSG:
                this.HandleErrorMsg(extType,data)
                break;

           default:
               break;
       }
    
       

    }

    private HandleBizMsg(extType:ExtType,data:ReceiveData) {
        let body=data.Body;
       
        if (body!=null) {
            let byte = new Laya.Byte();
            byte.writeArrayBuffer(body);
            byte.pos=0;
            function bytesSupplier(bytes) {
                let tempBytes= byte.getUint8Array(byte.pos,bytes.length)
                bytes=BitConvert.GetInstance().ByteArrayToNumberArray(tempBytes)
            }
            let msgLength=MiniDataUtil.GetMiniData(byte.getByte(),bytesSupplier)
            let cmdId=MiniDataUtil.GetMiniData(byte.getByte(),bytesSupplier)
            let data=byte.getUint8Array(byte.pos,byte.length)

            console.log( msgLength,cmdId,data );
            

        }

    }

    private HandleErrorMsg(extType:ExtType,data:ReceiveData) {
        let body=data.Body;
        let errCode=0;
       
        if (body!=null) {
            let byte = new Laya.Byte();
            byte.writeArrayBuffer(body);
            byte.pos=0;
            function bytesSupplier(bytes) {
                let tempBytes= byte.getUint8Array(byte.pos,bytes.length)
                bytes=BitConvert.GetInstance().ByteArrayToNumberArray(tempBytes)
            }
            errCode=MiniDataUtil.GetMiniData(byte.getByte(),bytesSupplier)
            switch (extType) {
                case ExtType.ERR_MSG_EXT_TYPE_CODE:
                    console.log("ERR_MSG_EXT_TYPE_CODE",errCode);
                    
                    break;
                case ExtType.ERR_MSG_EXT_TYPE_CODE_WITH_CAUSE:
                    console.log("ERR_MSG_EXT_TYPE_CODE_WITH_CAUSE",errCode);
                    break;

                case ExtType.ERR_MSG_EXT_TYPE_CODE_WITH_AGENT_ID:
                    console.log("ERR_MSG_EXT_TYPE_CODE_WITH_AGENT_ID",errCode);
                    break;

                case ExtType.ERR_MSG_EXT_TYPE_CODE_WITH_AGENT_ID_AND_CAUSE:
                    console.log("ERR_MSG_EXT_TYPE_CODE_WITH_AGENT_ID_AND_CAUSE",errCode);
                    break;
                default:
                    break;
            }
            

        }

    }
    
    private HandleConnectClose(extType:ExtType,data:ReceiveData) {
        let body=data.Body;
      
        if (body!=null) {
            let byte = new Laya.Byte();
            byte.writeArrayBuffer(body);
            byte.pos=0;
            function bytesSupplier(bytes) {
                let tempBytes= byte.getUint8Array(byte.pos,bytes.length)
                bytes=BitConvert.GetInstance().ByteArrayToNumberArray(tempBytes)
            }
          
            switch (extType) {
                case ExtType.CTRL_CONNC_CLOSE_EXT_TYPE_NO_PARAM:
                    console.log("CTRL_CONNC_CLOSE_EXT_TYPE_NO_PARAM");
                    
                    break;
                case ExtType.CTRL_CONNC_CLOSE_EXT_TYPE_WITH_CAUSE_CODE:
                    let causeCode=MiniDataUtil.GetMiniData(byte.getByte(),bytesSupplier);
                    console.log("CTRL_CONNC_CLOSE_EXT_TYPE_WITH_CAUSE_CODE",causeCode);
                    break;
             
                default:
                    break;
            }
            
            SocketClient.GetInstance().SocketClose();

           
            
        }

    }



}