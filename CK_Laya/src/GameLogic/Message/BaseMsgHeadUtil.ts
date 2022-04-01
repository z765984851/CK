import {MsgType,ExtType} from "../Message/BaseMsgType"
export default class BaseMsgHeadUtil {
    public static  HEAD_MASK_LENGTH_FIELD:number = 0b1 << 7;
    public static  HEAD_MASK_LENGTH_FIELD_INVS:number = ~BaseMsgHeadUtil.HEAD_MASK_LENGTH_FIELD;
    public static  HEAD_MASK_MSG_TYPE:number = 0b111 << 2;// 支持8种基本消息类型
    public static  HEAD_MASK_MSG_TYPE_INVS:number = ~BaseMsgHeadUtil.HEAD_MASK_MSG_TYPE;
    public static  HEAD_MASK_COMPRESSION_TYPE:number = 0b11 << 5;// 支持4种压缩模式, 包括不压缩
    public static  HEAD_MASK_COMPRESSION_TYPE_INVS:number = ~BaseMsgHeadUtil.HEAD_MASK_COMPRESSION_TYPE;// 支持4种压缩模式, 包括不压缩
    public static  HEAD_MASK_EXTEND:number = 0b11;// 支持4种扩展模式
    public static  HEAD_MASK_EXTEND_RVS:number = ~BaseMsgHeadUtil.HEAD_MASK_EXTEND;// 支持4种扩展模式


    public static HaveLenField(headByte:number):boolean {
        return (headByte & BaseMsgHeadUtil.HEAD_MASK_LENGTH_FIELD) == BaseMsgHeadUtil.HEAD_MASK_LENGTH_FIELD;
    }

    public static GetCompressionType(headByte:number):number {
        return (headByte & BaseMsgHeadUtil.HEAD_MASK_COMPRESSION_TYPE) >>> 5;
    }

    public static GetMsgType(headByte:number):number {
        return (headByte & BaseMsgHeadUtil.HEAD_MASK_MSG_TYPE) >>> 2;
    }

    public static GetExtendType(headByte:number):number {
        return headByte & BaseMsgHeadUtil.HEAD_MASK_EXTEND;
    }

    public static BuildHeadByte( haveLenField:boolean,  msgType:MsgType, cmpType:number, extType:ExtType):number {
        let ret = haveLenField ? 1 : 0;
        ret = ret << 2 | cmpType & 0b11;
        ret = ret << 3 | msgType & 0b111;
        ret = ret << 2 | extType & 0b11;
        return ret;
    }


}
