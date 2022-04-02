(function () {
    'use strict';

    class BaseMsgHeadUtil {
        static HaveLenField(headByte) {
            return (headByte & BaseMsgHeadUtil.HEAD_MASK_LENGTH_FIELD) == BaseMsgHeadUtil.HEAD_MASK_LENGTH_FIELD;
        }
        static GetCompressionType(headByte) {
            return (headByte & BaseMsgHeadUtil.HEAD_MASK_COMPRESSION_TYPE) >>> 5;
        }
        static GetMsgType(headByte) {
            return (headByte & BaseMsgHeadUtil.HEAD_MASK_MSG_TYPE) >>> 2;
        }
        static GetExtendType(headByte) {
            return headByte & BaseMsgHeadUtil.HEAD_MASK_EXTEND;
        }
        static BuildHeadByte(haveLenField, msgType, cmpType, extType) {
            let ret = haveLenField ? 1 : 0;
            ret = ret << 2 | cmpType & 0b11;
            ret = ret << 3 | msgType & 0b111;
            ret = ret << 2 | extType & 0b11;
            return ret;
        }
    }
    BaseMsgHeadUtil.HEAD_MASK_LENGTH_FIELD = 0b1 << 7;
    BaseMsgHeadUtil.HEAD_MASK_LENGTH_FIELD_INVS = ~BaseMsgHeadUtil.HEAD_MASK_LENGTH_FIELD;
    BaseMsgHeadUtil.HEAD_MASK_MSG_TYPE = 0b111 << 2;
    BaseMsgHeadUtil.HEAD_MASK_MSG_TYPE_INVS = ~BaseMsgHeadUtil.HEAD_MASK_MSG_TYPE;
    BaseMsgHeadUtil.HEAD_MASK_COMPRESSION_TYPE = 0b11 << 5;
    BaseMsgHeadUtil.HEAD_MASK_COMPRESSION_TYPE_INVS = ~BaseMsgHeadUtil.HEAD_MASK_COMPRESSION_TYPE;
    BaseMsgHeadUtil.HEAD_MASK_EXTEND = 0b11;
    BaseMsgHeadUtil.HEAD_MASK_EXTEND_RVS = ~BaseMsgHeadUtil.HEAD_MASK_EXTEND;

    var MsgType;
    (function (MsgType) {
        MsgType[MsgType["BIZ_MSG"] = 0] = "BIZ_MSG";
        MsgType[MsgType["CTRL_HEART_BEAT"] = 1] = "CTRL_HEART_BEAT";
        MsgType[MsgType["CTRL_CONNC_OPEN"] = 2] = "CTRL_CONNC_OPEN";
        MsgType[MsgType["CTRL_CONNC_CLOSE"] = 3] = "CTRL_CONNC_CLOSE";
        MsgType[MsgType["CTRL_CUSTOM"] = 4] = "CTRL_CUSTOM";
        MsgType[MsgType["ERR_MSG"] = 7] = "ERR_MSG";
    })(MsgType || (MsgType = {}));
    var ExtType;
    (function (ExtType) {
        ExtType[ExtType["BIZ_MSG_EXT_TYPE_UNICAST"] = 0] = "BIZ_MSG_EXT_TYPE_UNICAST";
        ExtType[ExtType["BIZ_MSG_EXT_TYPE_BROADCAST"] = 1] = "BIZ_MSG_EXT_TYPE_BROADCAST";
        ExtType[ExtType["BIZ_MSG_EXT_TYPE_MULTICAST"] = 2] = "BIZ_MSG_EXT_TYPE_MULTICAST";
        ExtType[ExtType["CTRL_HEART_BEAT_EXT_TYPE_BASIC"] = 10] = "CTRL_HEART_BEAT_EXT_TYPE_BASIC";
        ExtType[ExtType["CTRL_CONNC_OPEN_EXT_TYPE_BASIC"] = 20] = "CTRL_CONNC_OPEN_EXT_TYPE_BASIC";
        ExtType[ExtType["CTRL_CONNC_CLOSE_EXT_TYPE_NO_PARAM"] = 30] = "CTRL_CONNC_CLOSE_EXT_TYPE_NO_PARAM";
        ExtType[ExtType["CTRL_CONNC_CLOSE_EXT_TYPE_WITH_CAUSE_CODE"] = 31] = "CTRL_CONNC_CLOSE_EXT_TYPE_WITH_CAUSE_CODE";
        ExtType[ExtType["CTRL_CUSTOM_EXT_TYPE_0"] = 40] = "CTRL_CUSTOM_EXT_TYPE_0";
        ExtType[ExtType["CTRL_CUSTOM_EXT_TYPE_1"] = 41] = "CTRL_CUSTOM_EXT_TYPE_1";
        ExtType[ExtType["CTRL_CUSTOM_EXT_TYPE_2"] = 42] = "CTRL_CUSTOM_EXT_TYPE_2";
        ExtType[ExtType["CTRL_CUSTOM_EXT_TYPE_3"] = 43] = "CTRL_CUSTOM_EXT_TYPE_3";
        ExtType[ExtType["ERR_MSG_EXT_TYPE_CODE"] = 70] = "ERR_MSG_EXT_TYPE_CODE";
        ExtType[ExtType["ERR_MSG_EXT_TYPE_CODE_WITH_CAUSE"] = 71] = "ERR_MSG_EXT_TYPE_CODE_WITH_CAUSE";
        ExtType[ExtType["ERR_MSG_EXT_TYPE_CODE_WITH_AGENT_ID"] = 72] = "ERR_MSG_EXT_TYPE_CODE_WITH_AGENT_ID";
        ExtType[ExtType["ERR_MSG_EXT_TYPE_CODE_WITH_AGENT_ID_AND_CAUSE"] = 73] = "ERR_MSG_EXT_TYPE_CODE_WITH_AGENT_ID_AND_CAUSE";
    })(ExtType || (ExtType = {}));

    class BitConvert {
        constructor() {
            this.byte = new Laya.Byte();
            this.byte = new Laya.Byte();
            this.byte.endian = Laya.Byte.LITTLE_ENDIAN;
        }
        static GetInstance() {
            if (this.Instance == null) {
                this.Instance = new BitConvert();
            }
            return this.Instance;
        }
        IntToByteArray(int) {
            this.byte.clear();
            this.byte.writeInt32(int);
            let array = this.byte.readUint8Array(0, this.byte.length);
            let result = new Array(this.byte.length);
            for (let index = 0; index < array.length; index++) {
                const element = array[index];
                result[index] = element;
            }
            return result;
        }
        StringToByteArray(str) {
            this.byte.clear();
            this.byte.writeUTFBytes(str);
            let array = this.byte.readUint8Array(0, this.byte.length);
            let result = new Array(this.byte.length);
            for (let index = 0; index < array.length; index++) {
                const element = array[index];
                result[index] = element;
            }
            return result;
        }
        ByteArrayToNumberArray(arr) {
            let numberArray = new Array(arr.length);
            for (let index = 0; index < arr.length; index++) {
                const element = arr[index];
                numberArray[index] = element;
            }
            return numberArray;
        }
        NumberArrayToByte(arr) {
            let byte = new Laya.Byte();
            for (let index = 0; index < arr.length; index++) {
                const element = arr[index];
                byte.writeByte(element);
            }
            byte.pos = 0;
            return byte;
        }
        NumberArrayToByteArray(arr) {
            let byte = this.NumberArrayToByte(arr);
            let bytes = byte.getUint8Array(0, byte.length);
            return bytes;
        }
    }

    class MiniDataUtil {
        static GetStringDataDscrpt(strBytes) {
            let ret = 0;
            ret |= MiniDataUtil.DATA_TYPE_STR;
            let len = -1;
            if (strBytes != null) {
                len = strBytes.length;
                if (len > MiniDataUtil.STR_MAX_LEN)
                    throw new console.error(("data is too long, only support len" + MiniDataUtil.STR_MAX_LEN + "s data"));
                ret |= len;
            }
            else {
                strBytes = MiniDataUtil.ZERO_LEN_BYTES;
            }
            return new MiniDataDecryptHead(ret, strBytes);
        }
        static GetIntDataDscrptHead(num) {
            if (num < 0)
                throw new console.error("only support positive data");
            let headByte = 0;
            let tailByteLen = 0;
            let tailBytes = MiniDataUtil.ZERO_LEN_BYTES;
            if (num <= MiniDataUtil._1BYTES_NUM_MAX_VAL) {
                headByte |= num;
            }
            else {
                tailByteLen = 1;
                headByte |= (num & 0b1111);
                num = (num >>> 4);
                let temp = num;
                while (true) {
                    if ((temp >>>= 8) == 0)
                        break;
                    tailByteLen++;
                }
                tailBytes = [tailByteLen];
                temp = 0;
                while (true) {
                    tailBytes[temp++] = (num & 0b11111111);
                    num >>>= 8;
                    if (num == 0)
                        break;
                }
            }
            headByte |= (tailByteLen << 4);
            return new MiniDataDecryptHead(headByte, tailBytes);
        }
        static GetLongDataDscrptHead(num) {
            if (num < 0)
                throw new console.error("only support positive data");
            let headByte = 0;
            let tailByteLen = 0;
            let tailBytes = MiniDataUtil.ZERO_LEN_BYTES;
            if (num <= MiniDataUtil._1BYTES_NUM_MAX_VAL) {
                headByte |= num;
            }
            else {
                if (num <= MiniDataUtil._7BYTES_NUM_MAX_VAL) {
                    tailByteLen = 1;
                    headByte |= (num & 0b1111);
                    num = (num >>> 4);
                    let temp = num;
                    while (true) {
                        if ((temp >>>= 8) == 0) {
                            break;
                        }
                        tailByteLen++;
                    }
                }
                else {
                    tailByteLen = 8;
                }
                tailBytes = [tailByteLen];
                let temp = 0;
                while (true) {
                    tailBytes[temp++] = (num & 0b11111111);
                    num >>>= 8;
                    if (num == 0)
                        break;
                }
            }
            headByte |= (tailByteLen << 4);
            return new MiniDataDecryptHead(headByte, tailBytes);
        }
        static GetMiniData(dscrptByte, bytesSupplier) {
            console.log("dscrptByte", dscrptByte);
            let type = (dscrptByte & MiniDataUtil.TYPE_MASK);
            console.log("type", type);
            let tailLen = -1;
            let bytes = new Array;
            switch (type) {
                case MiniDataUtil.DATA_TYPE_STR:
                    tailLen = dscrptByte & MiniDataUtil.STR_LEN_MASK;
                    if (tailLen > 0) {
                        bytes = new Array(tailLen);
                        bytes = bytesSupplier(bytes);
                        let uint8 = BitConvert.GetInstance().NumberArrayToByte(bytes);
                        uint8.pos = 0;
                        return uint8.getUTFBytes(tailLen);
                    }
                    break;
                case MiniDataUtil.DATA_TYPE_NUM: {
                    tailLen = (dscrptByte & MiniDataUtil.NUM_TYPE_MASK) >>> 4;
                    console.log("DATA_TYPE_NUM");
                    if (tailLen == 0)
                        return dscrptByte & MiniDataUtil.HEAD_NUM_MASK;
                    else {
                        bytes = new Array(tailLen);
                        bytes = bytesSupplier(bytes);
                        console.log("bytes", bytes);
                        if (tailLen <= 3) {
                            let data = dscrptByte & MiniDataUtil.HEAD_NUM_MASK;
                            for (let i = 0, shift = 4; i < tailLen; i++, shift += 8) {
                                data = data | ((bytes[i] & 0xFF) << shift);
                            }
                            return data;
                        }
                        else {
                            let lte7Bytes = tailLen <= 6;
                            let data = lte7Bytes ? dscrptByte & MiniDataUtil.HEAD_NUM_MASK : 0;
                            console.log("data", data);
                            for (let i = 0, shift = lte7Bytes ? 4 : 0; i < tailLen; i++, shift += 8) {
                                data = data | ((bytes[i] & 0xFF) << shift);
                            }
                            return data;
                        }
                    }
                }
                default:
                    break;
            }
            return null;
        }
    }
    MiniDataUtil.TYPE_MASK = 128;
    MiniDataUtil.DATA_TYPE_STR = 128;
    MiniDataUtil.STR_LEN_MASK = 127;
    MiniDataUtil.STR_MAX_LEN = 127;
    MiniDataUtil.DATA_TYPE_NUM = 0;
    MiniDataUtil._1BYTES_NUM_MAX_VAL = 15;
    MiniDataUtil._7BYTES_NUM_MAX_VAL = 4503599627370495;
    MiniDataUtil._1BYTES_NUM_TYPE = 0;
    MiniDataUtil._2BYTES_NUM_TYPE = 16;
    MiniDataUtil._3BYTES_NUM_TYPE = 32;
    MiniDataUtil._4BYTES_NUM_TYPE = 48;
    MiniDataUtil._5BYTES_NUM_TYPE = 64;
    MiniDataUtil._6BYTES_NUM_TYPE = 80;
    MiniDataUtil._7BYTES_NUM_TYPE = 96;
    MiniDataUtil._8BYTES_NUM_TYPE = 112;
    MiniDataUtil.NUM_TYPE_MASK = 112;
    MiniDataUtil.HEAD_NUM_MASK = 15;
    MiniDataUtil.ZERO_LEN_BYTES = [];
    class MiniDataDecryptHead {
        constructor(headByte, tailBytes) {
            this.SetHeadByte(headByte);
            this.SetTailBytes(tailBytes);
        }
        GetHeadByte() {
            return this.headByte;
        }
        SetHeadByte(headByte) {
            this.headByte = headByte;
        }
        GetTailBytes() {
            return this.tailBytes;
        }
        SetTailBytes(tailBytes) {
            this.tailBytes = tailBytes;
        }
    }

    class MessageCenter {
        constructor() {
        }
        static GetInstance() {
            if (this.Instance == null) {
                this.Instance = new MessageCenter();
            }
            return this.Instance;
        }
        HandleReceiveMsg(data) {
            BaseMsgHeadUtil.GetCompressionType(data.Head);
            let baseType = BaseMsgHeadUtil.GetMsgType(data.Head);
            let extType = BaseMsgHeadUtil.GetExtendType(data.Head);
            extType = baseType * 10 + extType;
            console.log("BaseType:", baseType, " ,ExtType:", extType);
            switch (baseType) {
                case MsgType.BIZ_MSG:
                    this.HandleBizMsg(extType, data);
                    break;
                case MsgType.CTRL_HEART_BEAT:
                    break;
                case MsgType.CTRL_CONNC_OPEN:
                    break;
                case MsgType.CTRL_CONNC_CLOSE:
                    this.HandleConnectClose(extType, data);
                    break;
                case MsgType.CTRL_CUSTOM:
                    break;
                case MsgType.ERR_MSG:
                    this.HandleErrorMsg(extType, data);
                    break;
                default:
                    break;
            }
        }
        HandleBizMsg(extType, data) {
            let body = data.Body;
            if (body != null) {
                let byte = new Laya.Byte();
                byte.writeArrayBuffer(body);
                byte.pos = 0;
                let bytesSupplier = (bytes) => {
                    let tempBytes = byte.getUint8Array(byte.pos, bytes.length);
                    return BitConvert.GetInstance().ByteArrayToNumberArray(tempBytes);
                };
                let msgLength = MiniDataUtil.GetMiniData(byte.getByte(), bytesSupplier);
                let cmdId = MiniDataUtil.GetMiniData(byte.getByte(), bytesSupplier);
                let data = byte.getUint8Array(byte.pos, byte.length);
                console.log(msgLength, cmdId, data);
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
        HandleErrorMsg(extType, data) {
            let body = data.Body;
            let errCode = 0;
            if (body != null) {
                let byte = new Laya.Byte();
                byte.writeArrayBuffer(body);
                byte.pos = 0;
                let bytesSupplier = (bytes) => {
                    let tempBytes = byte.getUint8Array(byte.pos, bytes.length);
                    return BitConvert.GetInstance().ByteArrayToNumberArray(tempBytes);
                };
                errCode = MiniDataUtil.GetMiniData(byte.getByte(), bytesSupplier);
                switch (extType) {
                    case ExtType.ERR_MSG_EXT_TYPE_CODE:
                        console.log("ERR_MSG_EXT_TYPE_CODE", errCode);
                        break;
                    case ExtType.ERR_MSG_EXT_TYPE_CODE_WITH_CAUSE:
                        let causeCode = MiniDataUtil.GetMiniData(byte.getByte(), bytesSupplier);
                        console.log("ERR_MSG_EXT_TYPE_CODE_WITH_CAUSE", errCode, causeCode);
                        break;
                    case ExtType.ERR_MSG_EXT_TYPE_CODE_WITH_AGENT_ID:
                        console.log("ERR_MSG_EXT_TYPE_CODE_WITH_AGENT_ID", errCode);
                        break;
                    case ExtType.ERR_MSG_EXT_TYPE_CODE_WITH_AGENT_ID_AND_CAUSE:
                        console.log("ERR_MSG_EXT_TYPE_CODE_WITH_AGENT_ID_AND_CAUSE", errCode);
                        break;
                    default:
                        break;
                }
            }
        }
        HandleConnectClose(extType, data) {
            let body = data.Body;
            if (body != null) {
                let byte = new Laya.Byte();
                byte.writeArrayBuffer(body);
                byte.pos = 0;
                let bytesSupplier = (bytes) => {
                    let tempBytes = byte.getUint8Array(byte.pos, bytes.length);
                    return BitConvert.GetInstance().ByteArrayToNumberArray(tempBytes);
                };
                switch (extType) {
                    case ExtType.CTRL_CONNC_CLOSE_EXT_TYPE_NO_PARAM:
                        console.log("CTRL_CONNC_CLOSE_EXT_TYPE_NO_PARAM");
                        break;
                    case ExtType.CTRL_CONNC_CLOSE_EXT_TYPE_WITH_CAUSE_CODE:
                        let causeCode = MiniDataUtil.GetMiniData(byte.getByte(), bytesSupplier);
                        console.log("CTRL_CONNC_CLOSE_EXT_TYPE_WITH_CAUSE_CODE", causeCode);
                        break;
                    default:
                        break;
                }
                SocketClient.GetInstance().SocketClose();
            }
        }
        HandleConnectOpen() {
            console.log("CTRL_CONNC_OPEN_EXT_TYPE_BASIC");
        }
        HandleCustom(extType, data) {
            let body = data.Body;
            if (body != null) {
                let byte = new Laya.Byte();
                byte.writeArrayBuffer(body);
                byte.pos = 0;
                let bytesSupplier = (bytes) => {
                    let tempBytes = byte.getUint8Array(byte.pos, bytes.length);
                    return BitConvert.GetInstance().ByteArrayToNumberArray(tempBytes);
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

    class SocketClient {
        constructor() {
            this.Endian = Laya.Byte.BIG_ENDIAN;
            this.socket = new Laya.Socket();
            this.socket.endian = this.Endian;
            this.byte = new Laya.Byte();
            this.byte.endian = this.Endian;
            this.socket.on(Laya.Event.OPEN, this, this.OpenHandler);
            this.socket.on(Laya.Event.MESSAGE, this, this.ReceiveHandler);
            this.socket.on(Laya.Event.CLOSE, this, this.CloseHandler);
            this.socket.on(Laya.Event.ERROR, this, this.ErrorHandler);
        }
        static GetInstance() {
            if (this.Instance == null) {
                this.Instance = new SocketClient();
            }
            return this.Instance;
        }
        Connect() {
            this.socket.connect(this.IP, this.Port);
        }
        OpenHandler(event = null) {
            this.ShakeHand();
        }
        ReceiveHandler(msg = null) {
            let buffer = msg;
            let byte = new Laya.Byte();
            byte.writeArrayBuffer(buffer);
            console.log(byte);
            let receiveData = new ReceiveData();
            byte.pos = 0;
            receiveData.Head = byte.getByte();
            receiveData.Length = byte.getInt32();
            receiveData.Body = byte.getUint8Array(byte.pos, byte.length);
            MessageCenter.GetInstance().HandleReceiveMsg(receiveData);
        }
        CloseHandler(e = null) {
            console.log("Socket Close");
        }
        ErrorHandler(e = null) {
            console.log("Socket Error", e);
        }
        ShakeHand() {
            this.byte.clear();
            let head = BaseMsgHeadUtil.BuildHeadByte(true, MsgType.CTRL_CONNC_OPEN, 0, ExtType.CTRL_CONNC_OPEN_EXT_TYPE_BASIC);
            this.byte.writeByte(head);
            var body = MiniDataUtil.GetStringDataDscrpt(BitConvert.GetInstance().StringToByteArray(this.ServerId));
            var bodyLength = 1 + body.GetTailBytes().length;
            this.byte.writeInt32(bodyLength);
            this.byte.writeByte(body.GetHeadByte());
            let tailArray = body.GetTailBytes();
            for (let index = 0; index < tailArray.length; index++) {
                const element = tailArray[index];
                this.byte.writeByte(element);
            }
            console.log(body, this.byte);
            this.socket.send(this.byte.buffer);
        }
        SendMsg(haveLenField, msgType, cmpType, extType, msg) {
            this.byte.clear();
            let head = BaseMsgHeadUtil.BuildHeadByte(haveLenField, msgType, cmpType, extType);
            this.byte.writeByte(head);
            this.byte.writeInt32(msg.length);
            this.byte.writeArrayBuffer(msg);
            this.socket.send(this.byte.buffer);
        }
        SocketClose() {
            this.socket.cleanSocket();
            this.socket.close();
        }
    }
    class ReceiveData {
    }

    class GameManager extends Laya.Script {
        constructor() {
            super();
        }
        onAwake() {
            SocketClient.GetInstance().ServerId = "5001";
            SocketClient.GetInstance().IP = "192.168.10.26";
            SocketClient.GetInstance().Port = 8088;
            SocketClient.GetInstance().Connect();
        }
    }

    class GameConfig {
        constructor() { }
        static init() {
            var reg = Laya.ClassUtils.regClass;
            reg("GameLogic/Manager/GameManager.ts", GameManager);
        }
    }
    GameConfig.width = 1600;
    GameConfig.height = 900;
    GameConfig.scaleMode = "fixedwidth";
    GameConfig.screenMode = "horizontal";
    GameConfig.alignV = "top";
    GameConfig.alignH = "left";
    GameConfig.startScene = "StartScene.scene";
    GameConfig.sceneRoot = "";
    GameConfig.debug = true;
    GameConfig.stat = true;
    GameConfig.physicsDebug = false;
    GameConfig.exportSceneToJson = true;
    GameConfig.init();

    class Main {
        constructor() {
            if (window["Laya3D"])
                Laya3D.init(GameConfig.width, GameConfig.height);
            else
                Laya.init(GameConfig.width, GameConfig.height, Laya["WebGL"]);
            Laya["Physics"] && Laya["Physics"].enable();
            Laya["DebugPanel"] && Laya["DebugPanel"].enable();
            Laya.stage.scaleMode = GameConfig.scaleMode;
            Laya.stage.screenMode = GameConfig.screenMode;
            Laya.stage.alignV = GameConfig.alignV;
            Laya.stage.alignH = GameConfig.alignH;
            Laya.URL.exportSceneToJson = GameConfig.exportSceneToJson;
            if (GameConfig.debug || Laya.Utils.getQueryString("debug") == "true")
                Laya.enableDebugPanel();
            if (GameConfig.physicsDebug && Laya["PhysicsDebugDraw"])
                Laya["PhysicsDebugDraw"].enable();
            if (GameConfig.stat)
                Laya.Stat.show();
            Laya.alertGlobalError(true);
            Laya.ResourceVersion.enable("version.json", Laya.Handler.create(this, this.onVersionLoaded), Laya.ResourceVersion.FILENAME_VERSION);
        }
        onVersionLoaded() {
            Laya.AtlasInfoManager.enable("fileconfig.json", Laya.Handler.create(this, this.onConfigLoaded));
        }
        onConfigLoaded() {
            GameConfig.startScene && Laya.Scene.open(GameConfig.startScene);
        }
    }
    new Main();

}());
