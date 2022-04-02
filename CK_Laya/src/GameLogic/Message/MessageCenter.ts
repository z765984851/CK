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
            
                this.HandleConnectClose(extType,data)
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
            let bytesSupplier=(bytes)=>{
                let tempBytes= byte.getUint8Array(byte.pos,bytes.length)
                return BitConvert.GetInstance().ByteArrayToNumberArray(tempBytes)
            };
            let msgLength=MiniDataUtil.GetMiniData(byte.getByte(),bytesSupplier)
            let cmdId=MiniDataUtil.GetMiniData(byte.getByte(),bytesSupplier)
            let data=byte.getUint8Array(byte.pos,byte.length)

            console.log( msgLength,cmdId,data );
            switch (extType) {
                case ExtType.BIZ_MSG_EXT_TYPE_UNICAST:
                    console.log("BIZ_MSG_EXT_TYPE_UNICAST");
                    
                    break;
                case ExtType.BIZ_MSG_EXT_TYPE_BROADCAST:
                    console.log("BIZ_MSG_EXT_TYPE_BROADCAST");
                    break;

                case ExtType.BIZ_MSG_EXT_TYPE_MULTICAST:
                    console.log("BIZ_MSG_EXT_TYPE_MULTICAST");
                    break;

               
                default:
                    break;
            }

        }

    }

    private HandleErrorMsg(extType:ExtType,data:ReceiveData) {
        let body=data.Body;
        let errCode=0;
        
       
        
        if (body!=null) {
            let byte = new Laya.Byte();
            byte.writeArrayBuffer(body);
            byte.pos=0;
            let bytesSupplier=(bytes)=>{
                let tempBytes= byte.getUint8Array(byte.pos,bytes.length)
                return BitConvert.GetInstance().ByteArrayToNumberArray(tempBytes)
            };
            errCode=MiniDataUtil.GetMiniData(byte.getByte(),bytesSupplier)
            switch (extType) {
                case ExtType.ERR_MSG_EXT_TYPE_CODE:
                    console.log("ERR_MSG_EXT_TYPE_CODE",errCode);
                    
                    break;
                case ExtType.ERR_MSG_EXT_TYPE_CODE_WITH_CAUSE:
                    let causeCode=MiniDataUtil.GetMiniData(byte.getByte(),bytesSupplier)
                    console.log("ERR_MSG_EXT_TYPE_CODE_WITH_CAUSE",errCode,causeCode);
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
            let bytesSupplier=(bytes)=>{
                let tempBytes= byte.getUint8Array(byte.pos,bytes.length)
                return BitConvert.GetInstance().ByteArrayToNumberArray(tempBytes)
            };
          
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


    private HandleConnectOpen() {
        //trigger -103 event

        console.log("CTRL_CONNC_OPEN_EXT_TYPE_BASIC");
        
    }

    private HandleCustom(extType:ExtType,data:ReceiveData) {
        let body=data.Body;
      
        if (body!=null) {
            let byte = new Laya.Byte();
            byte.writeArrayBuffer(body);
            byte.pos=0;
            let bytesSupplier=(bytes)=>{
                let tempBytes= byte.getUint8Array(byte.pos,bytes.length)
                return BitConvert.GetInstance().ByteArrayToNumberArray(tempBytes)
            };
          
            switch (extType) {
                case ExtType.CTRL_CUSTOM_EXT_TYPE_0:
                    console.log("CTRL_CUSTOM_EXT_TYPE_0");
                    
                    break;
                case ExtType.CTRL_CUSTOM_EXT_TYPE_1:
                   
                    console.log("CTRL_CUSTOM_EXT_TYPE_1");
                    break;
                case ExtType.CTRL_CUSTOM_EXT_TYPE_2:
                    
                    console.log("CTRL_CUSTOM_EXT_TYPE_2");
                   
                    break;
                case ExtType.CTRL_CUSTOM_EXT_TYPE_3:
                    
                    console.log("CTRL_CUSTOM_EXT_TYPE_3");
                    
                    break;    
             
                default:
                    break;
            }
            
            SocketClient.GetInstance().SocketClose();

           
            
        }

    }



}