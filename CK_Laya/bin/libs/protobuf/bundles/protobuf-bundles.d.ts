type Long = protobuf.Long;

/** Namespace clientResponsePackage. */
declare namespace clientResponsePackage {

    /** Properties of a RespFully. */
    interface IRespFully {

        /** RespFully respRole */
        respRole?: (clientResponsePackage.IRespRole|null);

        /** RespFully ping */
        ping?: (clientResponsePackage.IRespLong|null);

        /** RespFully respCk */
        respCk?: (clientResponsePackage.IRespCk|null);

        /** RespFully respChat */
        respChat?: (clientResponsePackage.IRespChat|null);

        /** RespFully respMail */
        respMail?: (clientResponsePackage.IRespMail|null);

        /** RespFully respFight */
        respFight?: (clientResponsePackage.IRespFight|null);

        /** RespFully respTeam */
        respTeam?: (clientResponsePackage.IRespTeam|null);

        /** RespFully respMatch */
        respMatch?: (clientResponsePackage.IRespMatch|null);
    }

    /** Represents a RespFully. */
    class RespFully implements IRespFully {

        /**
         * Constructs a new RespFully.
         * @param [properties] Properties to set
         */
        constructor(properties?: clientResponsePackage.IRespFully);

        /** RespFully respRole. */
        public respRole?: (clientResponsePackage.IRespRole|null);

        /** RespFully ping. */
        public ping?: (clientResponsePackage.IRespLong|null);

        /** RespFully respCk. */
        public respCk?: (clientResponsePackage.IRespCk|null);

        /** RespFully respChat. */
        public respChat?: (clientResponsePackage.IRespChat|null);

        /** RespFully respMail. */
        public respMail?: (clientResponsePackage.IRespMail|null);

        /** RespFully respFight. */
        public respFight?: (clientResponsePackage.IRespFight|null);

        /** RespFully respTeam. */
        public respTeam?: (clientResponsePackage.IRespTeam|null);

        /** RespFully respMatch. */
        public respMatch?: (clientResponsePackage.IRespMatch|null);

        /**
         * Creates a new RespFully instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RespFully instance
         */
        public static create(properties?: clientResponsePackage.IRespFully): clientResponsePackage.RespFully;

        /**
         * Encodes the specified RespFully message. Does not implicitly {@link clientResponsePackage.RespFully.verify|verify} messages.
         * @param message RespFully message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: clientResponsePackage.IRespFully, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified RespFully message, length delimited. Does not implicitly {@link clientResponsePackage.RespFully.verify|verify} messages.
         * @param message RespFully message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: clientResponsePackage.IRespFully, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a RespFully message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RespFully
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): clientResponsePackage.RespFully;

        /**
         * Decodes a RespFully message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RespFully
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): clientResponsePackage.RespFully;

        /**
         * Verifies a RespFully message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: [ 'object' ].<string, any>): (string|null);
    }

    /** Properties of a RespRole. */
    interface IRespRole {

        /** RespRole roleInfo */
        roleInfo?: (clientResponsePackage.IRespRoleInfo|null);

        /** RespRole roleBaseInfo */
        roleBaseInfo?: (clientResponsePackage.IRespRoleBaseInfo|null);

        /** RespRole roleOp */
        roleOp?: (clientResponsePackage.IRespRoleOp|null);

        /** RespRole createRole */
        createRole?: (clientResponsePackage.IRespInt|null);
    }

    /** Represents a RespRole. */
    class RespRole implements IRespRole {

        /**
         * Constructs a new RespRole.
         * @param [properties] Properties to set
         */
        constructor(properties?: clientResponsePackage.IRespRole);

        /** RespRole roleInfo. */
        public roleInfo?: (clientResponsePackage.IRespRoleInfo|null);

        /** RespRole roleBaseInfo. */
        public roleBaseInfo?: (clientResponsePackage.IRespRoleBaseInfo|null);

        /** RespRole roleOp. */
        public roleOp?: (clientResponsePackage.IRespRoleOp|null);

        /** RespRole createRole. */
        public createRole?: (clientResponsePackage.IRespInt|null);

        /**
         * Creates a new RespRole instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RespRole instance
         */
        public static create(properties?: clientResponsePackage.IRespRole): clientResponsePackage.RespRole;

        /**
         * Encodes the specified RespRole message. Does not implicitly {@link clientResponsePackage.RespRole.verify|verify} messages.
         * @param message RespRole message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: clientResponsePackage.IRespRole, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified RespRole message, length delimited. Does not implicitly {@link clientResponsePackage.RespRole.verify|verify} messages.
         * @param message RespRole message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: clientResponsePackage.IRespRole, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a RespRole message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RespRole
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): clientResponsePackage.RespRole;

        /**
         * Decodes a RespRole message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RespRole
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): clientResponsePackage.RespRole;

        /**
         * Verifies a RespRole message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: [ 'object' ].<string, any>): (string|null);
    }

    /** Properties of a RespRoleBaseInfo. */
    interface IRespRoleBaseInfo {

        /** RespRoleBaseInfo id */
        id?: (string|null);

        /** RespRoleBaseInfo sid */
        sid?: (string|null);

        /** RespRoleBaseInfo name */
        name?: (string|null);

        /** RespRoleBaseInfo img */
        img?: (number|null);

        /** RespRoleBaseInfo chain */
        chain?: (number|null);
    }

    /** Represents a RespRoleBaseInfo. */
    class RespRoleBaseInfo implements IRespRoleBaseInfo {

        /**
         * Constructs a new RespRoleBaseInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: clientResponsePackage.IRespRoleBaseInfo);

        /** RespRoleBaseInfo id. */
        public id: string;

        /** RespRoleBaseInfo sid. */
        public sid: string;

        /** RespRoleBaseInfo name. */
        public name: string;

        /** RespRoleBaseInfo img. */
        public img: number;

        /** RespRoleBaseInfo chain. */
        public chain: number;

        /**
         * Creates a new RespRoleBaseInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RespRoleBaseInfo instance
         */
        public static create(properties?: clientResponsePackage.IRespRoleBaseInfo): clientResponsePackage.RespRoleBaseInfo;

        /**
         * Encodes the specified RespRoleBaseInfo message. Does not implicitly {@link clientResponsePackage.RespRoleBaseInfo.verify|verify} messages.
         * @param message RespRoleBaseInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: clientResponsePackage.IRespRoleBaseInfo, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified RespRoleBaseInfo message, length delimited. Does not implicitly {@link clientResponsePackage.RespRoleBaseInfo.verify|verify} messages.
         * @param message RespRoleBaseInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: clientResponsePackage.IRespRoleBaseInfo, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a RespRoleBaseInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RespRoleBaseInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): clientResponsePackage.RespRoleBaseInfo;

        /**
         * Decodes a RespRoleBaseInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RespRoleBaseInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): clientResponsePackage.RespRoleBaseInfo;

        /**
         * Verifies a RespRoleBaseInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: [ 'object' ].<string, any>): (string|null);
    }

    /** Properties of a RespInt. */
    interface IRespInt {

        /** RespInt value */
        value?: (number|null);
    }

    /** Represents a RespInt. */
    class RespInt implements IRespInt {

        /**
         * Constructs a new RespInt.
         * @param [properties] Properties to set
         */
        constructor(properties?: clientResponsePackage.IRespInt);

        /** RespInt value. */
        public value: number;

        /**
         * Creates a new RespInt instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RespInt instance
         */
        public static create(properties?: clientResponsePackage.IRespInt): clientResponsePackage.RespInt;

        /**
         * Encodes the specified RespInt message. Does not implicitly {@link clientResponsePackage.RespInt.verify|verify} messages.
         * @param message RespInt message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: clientResponsePackage.IRespInt, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified RespInt message, length delimited. Does not implicitly {@link clientResponsePackage.RespInt.verify|verify} messages.
         * @param message RespInt message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: clientResponsePackage.IRespInt, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a RespInt message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RespInt
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): clientResponsePackage.RespInt;

        /**
         * Decodes a RespInt message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RespInt
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): clientResponsePackage.RespInt;

        /**
         * Verifies a RespInt message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: [ 'object' ].<string, any>): (string|null);
    }

    /** Properties of a RespRoleInfo. */
    interface IRespRoleInfo {

        /** RespRoleInfo id */
        id?: (string|null);

        /** RespRoleInfo sid */
        sid?: (string|null);

        /** RespRoleInfo name */
        name?: (string|null);

        /** RespRoleInfo img */
        img?: (number|null);

        /** RespRoleInfo email */
        email?: (string|null);

        /** RespRoleInfo serverTime */
        serverTime?: (number|Long|null);
    }

    /** Represents a RespRoleInfo. */
    class RespRoleInfo implements IRespRoleInfo {

        /**
         * Constructs a new RespRoleInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: clientResponsePackage.IRespRoleInfo);

        /** RespRoleInfo id. */
        public id: string;

        /** RespRoleInfo sid. */
        public sid: string;

        /** RespRoleInfo name. */
        public name: string;

        /** RespRoleInfo img. */
        public img: number;

        /** RespRoleInfo email. */
        public email: string;

        /** RespRoleInfo serverTime. */
        public serverTime: (number|Long);

        /**
         * Creates a new RespRoleInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RespRoleInfo instance
         */
        public static create(properties?: clientResponsePackage.IRespRoleInfo): clientResponsePackage.RespRoleInfo;

        /**
         * Encodes the specified RespRoleInfo message. Does not implicitly {@link clientResponsePackage.RespRoleInfo.verify|verify} messages.
         * @param message RespRoleInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: clientResponsePackage.IRespRoleInfo, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified RespRoleInfo message, length delimited. Does not implicitly {@link clientResponsePackage.RespRoleInfo.verify|verify} messages.
         * @param message RespRoleInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: clientResponsePackage.IRespRoleInfo, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a RespRoleInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RespRoleInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): clientResponsePackage.RespRoleInfo;

        /**
         * Decodes a RespRoleInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RespRoleInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): clientResponsePackage.RespRoleInfo;

        /**
         * Verifies a RespRoleInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: [ 'object' ].<string, any>): (string|null);
    }

    /** Properties of a RespRoleOp. */
    interface IRespRoleOp {

        /** RespRoleOp stoneChg */
        stoneChg?: (clientResponsePackage.IRespDouble|null);

        /** RespRoleOp checkIn */
        checkIn?: (boolean|null);
    }

    /** Represents a RespRoleOp. */
    class RespRoleOp implements IRespRoleOp {

        /**
         * Constructs a new RespRoleOp.
         * @param [properties] Properties to set
         */
        constructor(properties?: clientResponsePackage.IRespRoleOp);

        /** RespRoleOp stoneChg. */
        public stoneChg?: (clientResponsePackage.IRespDouble|null);

        /** RespRoleOp checkIn. */
        public checkIn: boolean;

        /**
         * Creates a new RespRoleOp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RespRoleOp instance
         */
        public static create(properties?: clientResponsePackage.IRespRoleOp): clientResponsePackage.RespRoleOp;

        /**
         * Encodes the specified RespRoleOp message. Does not implicitly {@link clientResponsePackage.RespRoleOp.verify|verify} messages.
         * @param message RespRoleOp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: clientResponsePackage.IRespRoleOp, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified RespRoleOp message, length delimited. Does not implicitly {@link clientResponsePackage.RespRoleOp.verify|verify} messages.
         * @param message RespRoleOp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: clientResponsePackage.IRespRoleOp, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a RespRoleOp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RespRoleOp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): clientResponsePackage.RespRoleOp;

        /**
         * Decodes a RespRoleOp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RespRoleOp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): clientResponsePackage.RespRoleOp;

        /**
         * Verifies a RespRoleOp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: [ 'object' ].<string, any>): (string|null);
    }

    /** Properties of a RespDouble. */
    interface IRespDouble {

        /** RespDouble value */
        value?: (number|null);
    }

    /** Represents a RespDouble. */
    class RespDouble implements IRespDouble {

        /**
         * Constructs a new RespDouble.
         * @param [properties] Properties to set
         */
        constructor(properties?: clientResponsePackage.IRespDouble);

        /** RespDouble value. */
        public value: number;

        /**
         * Creates a new RespDouble instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RespDouble instance
         */
        public static create(properties?: clientResponsePackage.IRespDouble): clientResponsePackage.RespDouble;

        /**
         * Encodes the specified RespDouble message. Does not implicitly {@link clientResponsePackage.RespDouble.verify|verify} messages.
         * @param message RespDouble message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: clientResponsePackage.IRespDouble, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified RespDouble message, length delimited. Does not implicitly {@link clientResponsePackage.RespDouble.verify|verify} messages.
         * @param message RespDouble message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: clientResponsePackage.IRespDouble, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a RespDouble message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RespDouble
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): clientResponsePackage.RespDouble;

        /**
         * Decodes a RespDouble message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RespDouble
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): clientResponsePackage.RespDouble;

        /**
         * Verifies a RespDouble message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: [ 'object' ].<string, any>): (string|null);
    }

    /** Properties of a RespChat. */
    interface IRespChat {

        /** RespChat chatMsgs */
        chatMsgs?: (clientResponsePackage.IRespChatMsg[]|null);

        /** RespChat chatMsg */
        chatMsg?: (clientResponsePackage.IRespChatMsg|null);
    }

    /** Represents a RespChat. */
    class RespChat implements IRespChat {

        /**
         * Constructs a new RespChat.
         * @param [properties] Properties to set
         */
        constructor(properties?: clientResponsePackage.IRespChat);

        /** RespChat chatMsgs. */
        public chatMsgs: [ 'Array' ].<clientResponsePackage.IRespChatMsg>;

        /** RespChat chatMsg. */
        public chatMsg?: (clientResponsePackage.IRespChatMsg|null);

        /**
         * Creates a new RespChat instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RespChat instance
         */
        public static create(properties?: clientResponsePackage.IRespChat): clientResponsePackage.RespChat;

        /**
         * Encodes the specified RespChat message. Does not implicitly {@link clientResponsePackage.RespChat.verify|verify} messages.
         * @param message RespChat message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: clientResponsePackage.IRespChat, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified RespChat message, length delimited. Does not implicitly {@link clientResponsePackage.RespChat.verify|verify} messages.
         * @param message RespChat message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: clientResponsePackage.IRespChat, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a RespChat message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RespChat
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): clientResponsePackage.RespChat;

        /**
         * Decodes a RespChat message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RespChat
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): clientResponsePackage.RespChat;

        /**
         * Verifies a RespChat message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: [ 'object' ].<string, any>): (string|null);
    }

    /** Properties of a RespChatMsg. */
    interface IRespChatMsg {

        /** RespChatMsg chatType */
        chatType?: (number|null);

        /** RespChatMsg baseInfo */
        baseInfo?: (clientResponsePackage.IRespRoleBaseInfo|null);

        /** RespChatMsg msg */
        msg?: (string|null);

        /** RespChatMsg time */
        time?: (number|Long|null);

        /** RespChatMsg params */
        params?: (string[]|null);
    }

    /** Represents a RespChatMsg. */
    class RespChatMsg implements IRespChatMsg {

        /**
         * Constructs a new RespChatMsg.
         * @param [properties] Properties to set
         */
        constructor(properties?: clientResponsePackage.IRespChatMsg);

        /** RespChatMsg chatType. */
        public chatType: number;

        /** RespChatMsg baseInfo. */
        public baseInfo?: (clientResponsePackage.IRespRoleBaseInfo|null);

        /** RespChatMsg msg. */
        public msg: string;

        /** RespChatMsg time. */
        public time: (number|Long);

        /** RespChatMsg params. */
        public params: [ 'Array' ].<string>;

        /**
         * Creates a new RespChatMsg instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RespChatMsg instance
         */
        public static create(properties?: clientResponsePackage.IRespChatMsg): clientResponsePackage.RespChatMsg;

        /**
         * Encodes the specified RespChatMsg message. Does not implicitly {@link clientResponsePackage.RespChatMsg.verify|verify} messages.
         * @param message RespChatMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: clientResponsePackage.IRespChatMsg, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified RespChatMsg message, length delimited. Does not implicitly {@link clientResponsePackage.RespChatMsg.verify|verify} messages.
         * @param message RespChatMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: clientResponsePackage.IRespChatMsg, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a RespChatMsg message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RespChatMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): clientResponsePackage.RespChatMsg;

        /**
         * Decodes a RespChatMsg message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RespChatMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): clientResponsePackage.RespChatMsg;

        /**
         * Verifies a RespChatMsg message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: [ 'object' ].<string, any>): (string|null);
    }

    /** Properties of a RespTeam. */
    interface IRespTeam {

        /** RespTeam teamList */
        teamList?: (clientResponsePackage.IRespTeamInfo[]|null);

        /** RespTeam teamOp */
        teamOp?: (clientResponsePackage.IRespTeamInfo[]|null);
    }

    /** Represents a RespTeam. */
    class RespTeam implements IRespTeam {

        /**
         * Constructs a new RespTeam.
         * @param [properties] Properties to set
         */
        constructor(properties?: clientResponsePackage.IRespTeam);

        /** RespTeam teamList. */
        public teamList: [ 'Array' ].<clientResponsePackage.IRespTeamInfo>;

        /** RespTeam teamOp. */
        public teamOp: [ 'Array' ].<clientResponsePackage.IRespTeamInfo>;

        /**
         * Creates a new RespTeam instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RespTeam instance
         */
        public static create(properties?: clientResponsePackage.IRespTeam): clientResponsePackage.RespTeam;

        /**
         * Encodes the specified RespTeam message. Does not implicitly {@link clientResponsePackage.RespTeam.verify|verify} messages.
         * @param message RespTeam message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: clientResponsePackage.IRespTeam, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified RespTeam message, length delimited. Does not implicitly {@link clientResponsePackage.RespTeam.verify|verify} messages.
         * @param message RespTeam message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: clientResponsePackage.IRespTeam, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a RespTeam message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RespTeam
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): clientResponsePackage.RespTeam;

        /**
         * Decodes a RespTeam message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RespTeam
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): clientResponsePackage.RespTeam;

        /**
         * Verifies a RespTeam message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: [ 'object' ].<string, any>): (string|null);
    }

    /** Properties of a RespTeamInfo. */
    interface IRespTeamInfo {

        /** RespTeamInfo id */
        id?: (number|null);

        /** RespTeamInfo type */
        type?: (number|null);

        /** RespTeamInfo ckId */
        ckId?: (number|null);
    }

    /** Represents a RespTeamInfo. */
    class RespTeamInfo implements IRespTeamInfo {

        /**
         * Constructs a new RespTeamInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: clientResponsePackage.IRespTeamInfo);

        /** RespTeamInfo id. */
        public id: number;

        /** RespTeamInfo type. */
        public type: number;

        /** RespTeamInfo ckId. */
        public ckId: number;

        /**
         * Creates a new RespTeamInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RespTeamInfo instance
         */
        public static create(properties?: clientResponsePackage.IRespTeamInfo): clientResponsePackage.RespTeamInfo;

        /**
         * Encodes the specified RespTeamInfo message. Does not implicitly {@link clientResponsePackage.RespTeamInfo.verify|verify} messages.
         * @param message RespTeamInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: clientResponsePackage.IRespTeamInfo, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified RespTeamInfo message, length delimited. Does not implicitly {@link clientResponsePackage.RespTeamInfo.verify|verify} messages.
         * @param message RespTeamInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: clientResponsePackage.IRespTeamInfo, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a RespTeamInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RespTeamInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): clientResponsePackage.RespTeamInfo;

        /**
         * Decodes a RespTeamInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RespTeamInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): clientResponsePackage.RespTeamInfo;

        /**
         * Verifies a RespTeamInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: [ 'object' ].<string, any>): (string|null);
    }

    /** Properties of a RespMatch. */
    interface IRespMatch {

        /** RespMatch roomRoles */
        roomRoles?: (clientResponsePackage.IRespRoomRole[]|null);

        /** RespMatch joinRole */
        joinRole?: (clientResponsePackage.IRespRoomRole|null);
    }

    /** Represents a RespMatch. */
    class RespMatch implements IRespMatch {

        /**
         * Constructs a new RespMatch.
         * @param [properties] Properties to set
         */
        constructor(properties?: clientResponsePackage.IRespMatch);

        /** RespMatch roomRoles. */
        public roomRoles: [ 'Array' ].<clientResponsePackage.IRespRoomRole>;

        /** RespMatch joinRole. */
        public joinRole?: (clientResponsePackage.IRespRoomRole|null);

        /**
         * Creates a new RespMatch instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RespMatch instance
         */
        public static create(properties?: clientResponsePackage.IRespMatch): clientResponsePackage.RespMatch;

        /**
         * Encodes the specified RespMatch message. Does not implicitly {@link clientResponsePackage.RespMatch.verify|verify} messages.
         * @param message RespMatch message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: clientResponsePackage.IRespMatch, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified RespMatch message, length delimited. Does not implicitly {@link clientResponsePackage.RespMatch.verify|verify} messages.
         * @param message RespMatch message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: clientResponsePackage.IRespMatch, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a RespMatch message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RespMatch
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): clientResponsePackage.RespMatch;

        /**
         * Decodes a RespMatch message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RespMatch
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): clientResponsePackage.RespMatch;

        /**
         * Verifies a RespMatch message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: [ 'object' ].<string, any>): (string|null);
    }

    /** Properties of a RespRoomRole. */
    interface IRespRoomRole {

        /** RespRoomRole index */
        index?: (number|null);

        /** RespRoomRole roleBaseInfo */
        roleBaseInfo?: (clientResponsePackage.IRespRoleBaseInfo|null);
    }

    /** Represents a RespRoomRole. */
    class RespRoomRole implements IRespRoomRole {

        /**
         * Constructs a new RespRoomRole.
         * @param [properties] Properties to set
         */
        constructor(properties?: clientResponsePackage.IRespRoomRole);

        /** RespRoomRole index. */
        public index: number;

        /** RespRoomRole roleBaseInfo. */
        public roleBaseInfo?: (clientResponsePackage.IRespRoleBaseInfo|null);

        /**
         * Creates a new RespRoomRole instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RespRoomRole instance
         */
        public static create(properties?: clientResponsePackage.IRespRoomRole): clientResponsePackage.RespRoomRole;

        /**
         * Encodes the specified RespRoomRole message. Does not implicitly {@link clientResponsePackage.RespRoomRole.verify|verify} messages.
         * @param message RespRoomRole message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: clientResponsePackage.IRespRoomRole, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified RespRoomRole message, length delimited. Does not implicitly {@link clientResponsePackage.RespRoomRole.verify|verify} messages.
         * @param message RespRoomRole message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: clientResponsePackage.IRespRoomRole, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a RespRoomRole message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RespRoomRole
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): clientResponsePackage.RespRoomRole;

        /**
         * Decodes a RespRoomRole message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RespRoomRole
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): clientResponsePackage.RespRoomRole;

        /**
         * Verifies a RespRoomRole message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: [ 'object' ].<string, any>): (string|null);
    }

    /** Properties of a RespMail. */
    interface IRespMail {

        /** RespMail mails */
        mails?: (clientResponsePackage.IRespMailInfo[]|null);

        /** RespMail mailOp */
        mailOp?: (clientResponsePackage.IRespMailOp|null);
    }

    /** Represents a RespMail. */
    class RespMail implements IRespMail {

        /**
         * Constructs a new RespMail.
         * @param [properties] Properties to set
         */
        constructor(properties?: clientResponsePackage.IRespMail);

        /** RespMail mails. */
        public mails: [ 'Array' ].<clientResponsePackage.IRespMailInfo>;

        /** RespMail mailOp. */
        public mailOp?: (clientResponsePackage.IRespMailOp|null);

        /**
         * Creates a new RespMail instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RespMail instance
         */
        public static create(properties?: clientResponsePackage.IRespMail): clientResponsePackage.RespMail;

        /**
         * Encodes the specified RespMail message. Does not implicitly {@link clientResponsePackage.RespMail.verify|verify} messages.
         * @param message RespMail message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: clientResponsePackage.IRespMail, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified RespMail message, length delimited. Does not implicitly {@link clientResponsePackage.RespMail.verify|verify} messages.
         * @param message RespMail message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: clientResponsePackage.IRespMail, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a RespMail message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RespMail
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): clientResponsePackage.RespMail;

        /**
         * Decodes a RespMail message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RespMail
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): clientResponsePackage.RespMail;

        /**
         * Verifies a RespMail message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: [ 'object' ].<string, any>): (string|null);
    }

    /** Properties of a RespMailOp. */
    interface IRespMailOp {

        /** RespMailOp id */
        id?: (number|null);

        /** RespMailOp read */
        read?: (boolean|null);
    }

    /** Represents a RespMailOp. */
    class RespMailOp implements IRespMailOp {

        /**
         * Constructs a new RespMailOp.
         * @param [properties] Properties to set
         */
        constructor(properties?: clientResponsePackage.IRespMailOp);

        /** RespMailOp id. */
        public id: number;

        /** RespMailOp read. */
        public read: boolean;

        /**
         * Creates a new RespMailOp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RespMailOp instance
         */
        public static create(properties?: clientResponsePackage.IRespMailOp): clientResponsePackage.RespMailOp;

        /**
         * Encodes the specified RespMailOp message. Does not implicitly {@link clientResponsePackage.RespMailOp.verify|verify} messages.
         * @param message RespMailOp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: clientResponsePackage.IRespMailOp, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified RespMailOp message, length delimited. Does not implicitly {@link clientResponsePackage.RespMailOp.verify|verify} messages.
         * @param message RespMailOp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: clientResponsePackage.IRespMailOp, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a RespMailOp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RespMailOp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): clientResponsePackage.RespMailOp;

        /**
         * Decodes a RespMailOp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RespMailOp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): clientResponsePackage.RespMailOp;

        /**
         * Verifies a RespMailOp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: [ 'object' ].<string, any>): (string|null);
    }

    /** Properties of a RespMailInfo. */
    interface IRespMailInfo {

        /** RespMailInfo id */
        id?: (number|null);

        /** RespMailInfo senderName */
        senderName?: (string|null);

        /** RespMailInfo sendIcon */
        sendIcon?: (number|null);

        /** RespMailInfo sendTime */
        sendTime?: (number|Long|null);

        /** RespMailInfo type */
        type?: (number|null);

        /** RespMailInfo title */
        title?: (string|null);

        /** RespMailInfo context */
        context?: (string|null);

        /** RespMailInfo params */
        params?: (string[]|null);

        /** RespMailInfo read */
        read?: (boolean|null);

        /** RespMailInfo items */
        items?: (clientResponsePackage.IRespFunc[]|null);
    }

    /** Represents a RespMailInfo. */
    class RespMailInfo implements IRespMailInfo {

        /**
         * Constructs a new RespMailInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: clientResponsePackage.IRespMailInfo);

        /** RespMailInfo id. */
        public id: number;

        /** RespMailInfo senderName. */
        public senderName: string;

        /** RespMailInfo sendIcon. */
        public sendIcon: number;

        /** RespMailInfo sendTime. */
        public sendTime: (number|Long);

        /** RespMailInfo type. */
        public type: number;

        /** RespMailInfo title. */
        public title: string;

        /** RespMailInfo context. */
        public context: string;

        /** RespMailInfo params. */
        public params: [ 'Array' ].<string>;

        /** RespMailInfo read. */
        public read: boolean;

        /** RespMailInfo items. */
        public items: [ 'Array' ].<clientResponsePackage.IRespFunc>;

        /**
         * Creates a new RespMailInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RespMailInfo instance
         */
        public static create(properties?: clientResponsePackage.IRespMailInfo): clientResponsePackage.RespMailInfo;

        /**
         * Encodes the specified RespMailInfo message. Does not implicitly {@link clientResponsePackage.RespMailInfo.verify|verify} messages.
         * @param message RespMailInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: clientResponsePackage.IRespMailInfo, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified RespMailInfo message, length delimited. Does not implicitly {@link clientResponsePackage.RespMailInfo.verify|verify} messages.
         * @param message RespMailInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: clientResponsePackage.IRespMailInfo, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a RespMailInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RespMailInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): clientResponsePackage.RespMailInfo;

        /**
         * Decodes a RespMailInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RespMailInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): clientResponsePackage.RespMailInfo;

        /**
         * Verifies a RespMailInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: [ 'object' ].<string, any>): (string|null);
    }

    /** Properties of a RespFunc. */
    interface IRespFunc {

        /** RespFunc param */
        param?: (number|null);

        /** RespFunc type */
        type?: (number|null);

        /** RespFunc value */
        value?: (number|Long|null);

        /** RespFunc param1 */
        param1?: (number|null);

        /** RespFunc param2 */
        param2?: (number|null);

        /** RespFunc param3 */
        param3?: (number|null);
    }

    /** Represents a RespFunc. */
    class RespFunc implements IRespFunc {

        /**
         * Constructs a new RespFunc.
         * @param [properties] Properties to set
         */
        constructor(properties?: clientResponsePackage.IRespFunc);

        /** RespFunc param. */
        public param: number;

        /** RespFunc type. */
        public type: number;

        /** RespFunc value. */
        public value: (number|Long);

        /** RespFunc param1. */
        public param1: number;

        /** RespFunc param2. */
        public param2: number;

        /** RespFunc param3. */
        public param3: number;

        /**
         * Creates a new RespFunc instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RespFunc instance
         */
        public static create(properties?: clientResponsePackage.IRespFunc): clientResponsePackage.RespFunc;

        /**
         * Encodes the specified RespFunc message. Does not implicitly {@link clientResponsePackage.RespFunc.verify|verify} messages.
         * @param message RespFunc message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: clientResponsePackage.IRespFunc, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified RespFunc message, length delimited. Does not implicitly {@link clientResponsePackage.RespFunc.verify|verify} messages.
         * @param message RespFunc message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: clientResponsePackage.IRespFunc, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a RespFunc message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RespFunc
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): clientResponsePackage.RespFunc;

        /**
         * Decodes a RespFunc message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RespFunc
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): clientResponsePackage.RespFunc;

        /**
         * Verifies a RespFunc message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: [ 'object' ].<string, any>): (string|null);
    }

    /** Properties of a RespLong. */
    interface IRespLong {

        /** RespLong value */
        value?: (number|Long|null);
    }

    /** Represents a RespLong. */
    class RespLong implements IRespLong {

        /**
         * Constructs a new RespLong.
         * @param [properties] Properties to set
         */
        constructor(properties?: clientResponsePackage.IRespLong);

        /** RespLong value. */
        public value: (number|Long);

        /**
         * Creates a new RespLong instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RespLong instance
         */
        public static create(properties?: clientResponsePackage.IRespLong): clientResponsePackage.RespLong;

        /**
         * Encodes the specified RespLong message. Does not implicitly {@link clientResponsePackage.RespLong.verify|verify} messages.
         * @param message RespLong message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: clientResponsePackage.IRespLong, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified RespLong message, length delimited. Does not implicitly {@link clientResponsePackage.RespLong.verify|verify} messages.
         * @param message RespLong message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: clientResponsePackage.IRespLong, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a RespLong message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RespLong
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): clientResponsePackage.RespLong;

        /**
         * Decodes a RespLong message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RespLong
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): clientResponsePackage.RespLong;

        /**
         * Verifies a RespLong message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: [ 'object' ].<string, any>): (string|null);
    }

    /** Properties of a RespFight. */
    interface IRespFight {

        /** RespFight fightResult */
        fightResult?: (clientResponsePackage.IRespFightResult|null);
    }

    /** Represents a RespFight. */
    class RespFight implements IRespFight {

        /**
         * Constructs a new RespFight.
         * @param [properties] Properties to set
         */
        constructor(properties?: clientResponsePackage.IRespFight);

        /** RespFight fightResult. */
        public fightResult?: (clientResponsePackage.IRespFightResult|null);

        /**
         * Creates a new RespFight instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RespFight instance
         */
        public static create(properties?: clientResponsePackage.IRespFight): clientResponsePackage.RespFight;

        /**
         * Encodes the specified RespFight message. Does not implicitly {@link clientResponsePackage.RespFight.verify|verify} messages.
         * @param message RespFight message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: clientResponsePackage.IRespFight, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified RespFight message, length delimited. Does not implicitly {@link clientResponsePackage.RespFight.verify|verify} messages.
         * @param message RespFight message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: clientResponsePackage.IRespFight, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a RespFight message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RespFight
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): clientResponsePackage.RespFight;

        /**
         * Decodes a RespFight message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RespFight
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): clientResponsePackage.RespFight;

        /**
         * Verifies a RespFight message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: [ 'object' ].<string, any>): (string|null);
    }

    /** Properties of a RespFightResult. */
    interface IRespFightResult {

        /** RespFightResult battlerList */
        battlerList?: (clientResponsePackage.IRespBattler[]|null);

        /** RespFightResult frameList */
        frameList?: (clientResponsePackage.IRespFrame[]|null);
    }

    /** Represents a RespFightResult. */
    class RespFightResult implements IRespFightResult {

        /**
         * Constructs a new RespFightResult.
         * @param [properties] Properties to set
         */
        constructor(properties?: clientResponsePackage.IRespFightResult);

        /** RespFightResult battlerList. */
        public battlerList: [ 'Array' ].<clientResponsePackage.IRespBattler>;

        /** RespFightResult frameList. */
        public frameList: [ 'Array' ].<clientResponsePackage.IRespFrame>;

        /**
         * Creates a new RespFightResult instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RespFightResult instance
         */
        public static create(properties?: clientResponsePackage.IRespFightResult): clientResponsePackage.RespFightResult;

        /**
         * Encodes the specified RespFightResult message. Does not implicitly {@link clientResponsePackage.RespFightResult.verify|verify} messages.
         * @param message RespFightResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: clientResponsePackage.IRespFightResult, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified RespFightResult message, length delimited. Does not implicitly {@link clientResponsePackage.RespFightResult.verify|verify} messages.
         * @param message RespFightResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: clientResponsePackage.IRespFightResult, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a RespFightResult message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RespFightResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): clientResponsePackage.RespFightResult;

        /**
         * Decodes a RespFightResult message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RespFightResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): clientResponsePackage.RespFightResult;

        /**
         * Verifies a RespFightResult message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: [ 'object' ].<string, any>): (string|null);
    }

    /** Properties of a RespBattler. */
    interface IRespBattler {

        /** RespBattler camp */
        camp?: (number|null);

        /** RespBattler roleInfo */
        roleInfo?: (clientResponsePackage.IRespRoleBaseInfo|null);

        /** RespBattler battleCk */
        battleCk?: (clientResponsePackage.IRespBattleCk|null);
    }

    /** Represents a RespBattler. */
    class RespBattler implements IRespBattler {

        /**
         * Constructs a new RespBattler.
         * @param [properties] Properties to set
         */
        constructor(properties?: clientResponsePackage.IRespBattler);

        /** RespBattler camp. */
        public camp: number;

        /** RespBattler roleInfo. */
        public roleInfo?: (clientResponsePackage.IRespRoleBaseInfo|null);

        /** RespBattler battleCk. */
        public battleCk?: (clientResponsePackage.IRespBattleCk|null);

        /**
         * Creates a new RespBattler instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RespBattler instance
         */
        public static create(properties?: clientResponsePackage.IRespBattler): clientResponsePackage.RespBattler;

        /**
         * Encodes the specified RespBattler message. Does not implicitly {@link clientResponsePackage.RespBattler.verify|verify} messages.
         * @param message RespBattler message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: clientResponsePackage.IRespBattler, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified RespBattler message, length delimited. Does not implicitly {@link clientResponsePackage.RespBattler.verify|verify} messages.
         * @param message RespBattler message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: clientResponsePackage.IRespBattler, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a RespBattler message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RespBattler
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): clientResponsePackage.RespBattler;

        /**
         * Decodes a RespBattler message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RespBattler
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): clientResponsePackage.RespBattler;

        /**
         * Verifies a RespBattler message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: [ 'object' ].<string, any>): (string|null);
    }

    /** Properties of a RespBattleCk. */
    interface IRespBattleCk {

        /** RespBattleCk id */
        id?: (number|null);

        /** RespBattleCk level */
        level?: (number|null);

        /** RespBattleCk quality */
        quality?: (number|null);

        /** RespBattleCk lineage */
        lineage?: (number|null);

        /** RespBattleCk strength */
        strength?: (number|null);

        /** RespBattleCk wisdom */
        wisdom?: (number|null);

        /** RespBattleCk agile */
        agile?: (number|null);

        /** RespBattleCk health */
        health?: (number|null);

        /** RespBattleCk spirit */
        spirit?: (number|null);

        /** RespBattleCk luck */
        luck?: (number|null);

        /** RespBattleCk professionList */
        professionList?: (number[]|null);

        /** RespBattleCk specialtyList */
        specialtyList?: (number[]|null);

        /** RespBattleCk maxHp */
        maxHp?: (number|null);

        /** RespBattleCk camp */
        camp?: (number|null);

        /** RespBattleCk posX */
        posX?: (number|null);

        /** RespBattleCk posY */
        posY?: (number|null);
    }

    /** Represents a RespBattleCk. */
    class RespBattleCk implements IRespBattleCk {

        /**
         * Constructs a new RespBattleCk.
         * @param [properties] Properties to set
         */
        constructor(properties?: clientResponsePackage.IRespBattleCk);

        /** RespBattleCk id. */
        public id: number;

        /** RespBattleCk level. */
        public level: number;

        /** RespBattleCk quality. */
        public quality: number;

        /** RespBattleCk lineage. */
        public lineage: number;

        /** RespBattleCk strength. */
        public strength: number;

        /** RespBattleCk wisdom. */
        public wisdom: number;

        /** RespBattleCk agile. */
        public agile: number;

        /** RespBattleCk health. */
        public health: number;

        /** RespBattleCk spirit. */
        public spirit: number;

        /** RespBattleCk luck. */
        public luck: number;

        /** RespBattleCk professionList. */
        public professionList: [ 'Array' ].<number>;

        /** RespBattleCk specialtyList. */
        public specialtyList: [ 'Array' ].<number>;

        /** RespBattleCk maxHp. */
        public maxHp: number;

        /** RespBattleCk camp. */
        public camp: number;

        /** RespBattleCk posX. */
        public posX: number;

        /** RespBattleCk posY. */
        public posY: number;

        /**
         * Creates a new RespBattleCk instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RespBattleCk instance
         */
        public static create(properties?: clientResponsePackage.IRespBattleCk): clientResponsePackage.RespBattleCk;

        /**
         * Encodes the specified RespBattleCk message. Does not implicitly {@link clientResponsePackage.RespBattleCk.verify|verify} messages.
         * @param message RespBattleCk message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: clientResponsePackage.IRespBattleCk, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified RespBattleCk message, length delimited. Does not implicitly {@link clientResponsePackage.RespBattleCk.verify|verify} messages.
         * @param message RespBattleCk message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: clientResponsePackage.IRespBattleCk, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a RespBattleCk message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RespBattleCk
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): clientResponsePackage.RespBattleCk;

        /**
         * Decodes a RespBattleCk message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RespBattleCk
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): clientResponsePackage.RespBattleCk;

        /**
         * Verifies a RespBattleCk message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: [ 'object' ].<string, any>): (string|null);
    }

    /** Properties of a RespFrame. */
    interface IRespFrame {

        /** RespFrame currFrame */
        currFrame?: (number|null);

        /** RespFrame ckFrameInfoList */
        ckFrameInfoList?: (clientResponsePackage.IRespCkFrameInfo[]|null);
    }

    /** Represents a RespFrame. */
    class RespFrame implements IRespFrame {

        /**
         * Constructs a new RespFrame.
         * @param [properties] Properties to set
         */
        constructor(properties?: clientResponsePackage.IRespFrame);

        /** RespFrame currFrame. */
        public currFrame: number;

        /** RespFrame ckFrameInfoList. */
        public ckFrameInfoList: [ 'Array' ].<clientResponsePackage.IRespCkFrameInfo>;

        /**
         * Creates a new RespFrame instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RespFrame instance
         */
        public static create(properties?: clientResponsePackage.IRespFrame): clientResponsePackage.RespFrame;

        /**
         * Encodes the specified RespFrame message. Does not implicitly {@link clientResponsePackage.RespFrame.verify|verify} messages.
         * @param message RespFrame message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: clientResponsePackage.IRespFrame, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified RespFrame message, length delimited. Does not implicitly {@link clientResponsePackage.RespFrame.verify|verify} messages.
         * @param message RespFrame message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: clientResponsePackage.IRespFrame, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a RespFrame message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RespFrame
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): clientResponsePackage.RespFrame;

        /**
         * Decodes a RespFrame message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RespFrame
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): clientResponsePackage.RespFrame;

        /**
         * Verifies a RespFrame message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: [ 'object' ].<string, any>): (string|null);
    }

    /** Properties of a RespCkFrameInfo. */
    interface IRespCkFrameInfo {

        /** RespCkFrameInfo id */
        id?: (number|null);

        /** RespCkFrameInfo hp */
        hp?: (number|null);

        /** RespCkFrameInfo posXY */
        posXY?: (clientResponsePackage.IRespXY|null);

        /** RespCkFrameInfo faceXY */
        faceXY?: (clientResponsePackage.IRespXY|null);
    }

    /** Represents a RespCkFrameInfo. */
    class RespCkFrameInfo implements IRespCkFrameInfo {

        /**
         * Constructs a new RespCkFrameInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: clientResponsePackage.IRespCkFrameInfo);

        /** RespCkFrameInfo id. */
        public id: number;

        /** RespCkFrameInfo hp. */
        public hp: number;

        /** RespCkFrameInfo posXY. */
        public posXY?: (clientResponsePackage.IRespXY|null);

        /** RespCkFrameInfo faceXY. */
        public faceXY?: (clientResponsePackage.IRespXY|null);

        /**
         * Creates a new RespCkFrameInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RespCkFrameInfo instance
         */
        public static create(properties?: clientResponsePackage.IRespCkFrameInfo): clientResponsePackage.RespCkFrameInfo;

        /**
         * Encodes the specified RespCkFrameInfo message. Does not implicitly {@link clientResponsePackage.RespCkFrameInfo.verify|verify} messages.
         * @param message RespCkFrameInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: clientResponsePackage.IRespCkFrameInfo, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified RespCkFrameInfo message, length delimited. Does not implicitly {@link clientResponsePackage.RespCkFrameInfo.verify|verify} messages.
         * @param message RespCkFrameInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: clientResponsePackage.IRespCkFrameInfo, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a RespCkFrameInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RespCkFrameInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): clientResponsePackage.RespCkFrameInfo;

        /**
         * Decodes a RespCkFrameInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RespCkFrameInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): clientResponsePackage.RespCkFrameInfo;

        /**
         * Verifies a RespCkFrameInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: [ 'object' ].<string, any>): (string|null);
    }

    /** Properties of a RespXY. */
    interface IRespXY {

        /** RespXY x */
        x?: (number|null);

        /** RespXY y */
        y?: (number|null);
    }

    /** Represents a RespXY. */
    class RespXY implements IRespXY {

        /**
         * Constructs a new RespXY.
         * @param [properties] Properties to set
         */
        constructor(properties?: clientResponsePackage.IRespXY);

        /** RespXY x. */
        public x: number;

        /** RespXY y. */
        public y: number;

        /**
         * Creates a new RespXY instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RespXY instance
         */
        public static create(properties?: clientResponsePackage.IRespXY): clientResponsePackage.RespXY;

        /**
         * Encodes the specified RespXY message. Does not implicitly {@link clientResponsePackage.RespXY.verify|verify} messages.
         * @param message RespXY message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: clientResponsePackage.IRespXY, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified RespXY message, length delimited. Does not implicitly {@link clientResponsePackage.RespXY.verify|verify} messages.
         * @param message RespXY message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: clientResponsePackage.IRespXY, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a RespXY message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RespXY
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): clientResponsePackage.RespXY;

        /**
         * Decodes a RespXY message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RespXY
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): clientResponsePackage.RespXY;

        /**
         * Verifies a RespXY message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: [ 'object' ].<string, any>): (string|null);
    }

    /** Properties of a RespCk. */
    interface IRespCk {

        /** RespCk roleCks */
        roleCks?: (clientResponsePackage.IRespCkInfo[]|null);
    }

    /** Represents a RespCk. */
    class RespCk implements IRespCk {

        /**
         * Constructs a new RespCk.
         * @param [properties] Properties to set
         */
        constructor(properties?: clientResponsePackage.IRespCk);

        /** RespCk roleCks. */
        public roleCks: [ 'Array' ].<clientResponsePackage.IRespCkInfo>;

        /**
         * Creates a new RespCk instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RespCk instance
         */
        public static create(properties?: clientResponsePackage.IRespCk): clientResponsePackage.RespCk;

        /**
         * Encodes the specified RespCk message. Does not implicitly {@link clientResponsePackage.RespCk.verify|verify} messages.
         * @param message RespCk message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: clientResponsePackage.IRespCk, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified RespCk message, length delimited. Does not implicitly {@link clientResponsePackage.RespCk.verify|verify} messages.
         * @param message RespCk message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: clientResponsePackage.IRespCk, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a RespCk message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RespCk
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): clientResponsePackage.RespCk;

        /**
         * Decodes a RespCk message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RespCk
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): clientResponsePackage.RespCk;

        /**
         * Verifies a RespCk message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: [ 'object' ].<string, any>): (string|null);
    }

    /** Properties of a RespCkInfo. */
    interface IRespCkInfo {

        /** RespCkInfo id */
        id?: (number|null);

        /** RespCkInfo seq */
        seq?: (number|null);

        /** RespCkInfo name */
        name?: (string|null);

        /** RespCkInfo lock */
        lock?: (boolean|null);

        /** RespCkInfo birthTime */
        birthTime?: (number|Long|null);

        /** RespCkInfo launch */
        launch?: (string|null);

        /** RespCkInfo quality */
        quality?: (number|null);

        /** RespCkInfo lineage */
        lineage?: (number|null);

        /** RespCkInfo strength */
        strength?: (number|null);

        /** RespCkInfo wisdom */
        wisdom?: (number|null);

        /** RespCkInfo agile */
        agile?: (number|null);

        /** RespCkInfo health */
        health?: (number|null);

        /** RespCkInfo spirit */
        spirit?: (number|null);

        /** RespCkInfo luck */
        luck?: (number|null);

        /** RespCkInfo professionList */
        professionList?: (number[]|null);

        /** RespCkInfo specialtyList */
        specialtyList?: (number[]|null);
    }

    /** Represents a RespCkInfo. */
    class RespCkInfo implements IRespCkInfo {

        /**
         * Constructs a new RespCkInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: clientResponsePackage.IRespCkInfo);

        /** RespCkInfo id. */
        public id: number;

        /** RespCkInfo seq. */
        public seq: number;

        /** RespCkInfo name. */
        public name: string;

        /** RespCkInfo lock. */
        public lock: boolean;

        /** RespCkInfo birthTime. */
        public birthTime: (number|Long);

        /** RespCkInfo launch. */
        public launch: string;

        /** RespCkInfo quality. */
        public quality: number;

        /** RespCkInfo lineage. */
        public lineage: number;

        /** RespCkInfo strength. */
        public strength: number;

        /** RespCkInfo wisdom. */
        public wisdom: number;

        /** RespCkInfo agile. */
        public agile: number;

        /** RespCkInfo health. */
        public health: number;

        /** RespCkInfo spirit. */
        public spirit: number;

        /** RespCkInfo luck. */
        public luck: number;

        /** RespCkInfo professionList. */
        public professionList: [ 'Array' ].<number>;

        /** RespCkInfo specialtyList. */
        public specialtyList: [ 'Array' ].<number>;

        /**
         * Creates a new RespCkInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RespCkInfo instance
         */
        public static create(properties?: clientResponsePackage.IRespCkInfo): clientResponsePackage.RespCkInfo;

        /**
         * Encodes the specified RespCkInfo message. Does not implicitly {@link clientResponsePackage.RespCkInfo.verify|verify} messages.
         * @param message RespCkInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: clientResponsePackage.IRespCkInfo, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified RespCkInfo message, length delimited. Does not implicitly {@link clientResponsePackage.RespCkInfo.verify|verify} messages.
         * @param message RespCkInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: clientResponsePackage.IRespCkInfo, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a RespCkInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RespCkInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): clientResponsePackage.RespCkInfo;

        /**
         * Decodes a RespCkInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RespCkInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): clientResponsePackage.RespCkInfo;

        /**
         * Verifies a RespCkInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: [ 'object' ].<string, any>): (string|null);
    }
}

/** Namespace clientRequestPackage. */
declare namespace clientRequestPackage {

    /** Properties of a RqstCreRole. */
    interface IRqstCreRole {

        /** RqstCreRole sid */
        sid?: (string|null);

        /** RqstCreRole name */
        name?: (string|null);

        /** RqstCreRole country */
        country?: (number|null);

        /** RqstCreRole camp */
        camp?: (number|null);
    }

    /** Represents a RqstCreRole. */
    class RqstCreRole implements IRqstCreRole {

        /**
         * Constructs a new RqstCreRole.
         * @param [properties] Properties to set
         */
        constructor(properties?: clientRequestPackage.IRqstCreRole);

        /** RqstCreRole sid. */
        public sid: string;

        /** RqstCreRole name. */
        public name: string;

        /** RqstCreRole country. */
        public country: number;

        /** RqstCreRole camp. */
        public camp: number;

        /**
         * Creates a new RqstCreRole instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RqstCreRole instance
         */
        public static create(properties?: clientRequestPackage.IRqstCreRole): clientRequestPackage.RqstCreRole;

        /**
         * Encodes the specified RqstCreRole message. Does not implicitly {@link clientRequestPackage.RqstCreRole.verify|verify} messages.
         * @param message RqstCreRole message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: clientRequestPackage.IRqstCreRole, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified RqstCreRole message, length delimited. Does not implicitly {@link clientRequestPackage.RqstCreRole.verify|verify} messages.
         * @param message RqstCreRole message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: clientRequestPackage.IRqstCreRole, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a RqstCreRole message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RqstCreRole
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): clientRequestPackage.RqstCreRole;

        /**
         * Decodes a RqstCreRole message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RqstCreRole
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): clientRequestPackage.RqstCreRole;

        /**
         * Verifies a RqstCreRole message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: [ 'object' ].<string, any>): (string|null);
    }

    /** Properties of a RqstInt. */
    interface IRqstInt {

        /** RqstInt value */
        value?: (number|null);
    }

    /** Represents a RqstInt. */
    class RqstInt implements IRqstInt {

        /**
         * Constructs a new RqstInt.
         * @param [properties] Properties to set
         */
        constructor(properties?: clientRequestPackage.IRqstInt);

        /** RqstInt value. */
        public value: number;

        /**
         * Creates a new RqstInt instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RqstInt instance
         */
        public static create(properties?: clientRequestPackage.IRqstInt): clientRequestPackage.RqstInt;

        /**
         * Encodes the specified RqstInt message. Does not implicitly {@link clientRequestPackage.RqstInt.verify|verify} messages.
         * @param message RqstInt message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: clientRequestPackage.IRqstInt, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified RqstInt message, length delimited. Does not implicitly {@link clientRequestPackage.RqstInt.verify|verify} messages.
         * @param message RqstInt message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: clientRequestPackage.IRqstInt, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a RqstInt message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RqstInt
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): clientRequestPackage.RqstInt;

        /**
         * Decodes a RqstInt message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RqstInt
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): clientRequestPackage.RqstInt;

        /**
         * Verifies a RqstInt message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: [ 'object' ].<string, any>): (string|null);
    }

    /** Properties of a RqstIntKeyIntValue. */
    interface IRqstIntKeyIntValue {

        /** RqstIntKeyIntValue key */
        key?: (number|null);

        /** RqstIntKeyIntValue value */
        value?: (number|null);
    }

    /** Represents a RqstIntKeyIntValue. */
    class RqstIntKeyIntValue implements IRqstIntKeyIntValue {

        /**
         * Constructs a new RqstIntKeyIntValue.
         * @param [properties] Properties to set
         */
        constructor(properties?: clientRequestPackage.IRqstIntKeyIntValue);

        /** RqstIntKeyIntValue key. */
        public key: number;

        /** RqstIntKeyIntValue value. */
        public value: number;

        /**
         * Creates a new RqstIntKeyIntValue instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RqstIntKeyIntValue instance
         */
        public static create(properties?: clientRequestPackage.IRqstIntKeyIntValue): clientRequestPackage.RqstIntKeyIntValue;

        /**
         * Encodes the specified RqstIntKeyIntValue message. Does not implicitly {@link clientRequestPackage.RqstIntKeyIntValue.verify|verify} messages.
         * @param message RqstIntKeyIntValue message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: clientRequestPackage.IRqstIntKeyIntValue, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified RqstIntKeyIntValue message, length delimited. Does not implicitly {@link clientRequestPackage.RqstIntKeyIntValue.verify|verify} messages.
         * @param message RqstIntKeyIntValue message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: clientRequestPackage.IRqstIntKeyIntValue, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a RqstIntKeyIntValue message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RqstIntKeyIntValue
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): clientRequestPackage.RqstIntKeyIntValue;

        /**
         * Decodes a RqstIntKeyIntValue message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RqstIntKeyIntValue
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): clientRequestPackage.RqstIntKeyIntValue;

        /**
         * Verifies a RqstIntKeyIntValue message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: [ 'object' ].<string, any>): (string|null);
    }

    /** Properties of a RqstIntKeyStrValue. */
    interface IRqstIntKeyStrValue {

        /** RqstIntKeyStrValue key */
        key?: (number|null);

        /** RqstIntKeyStrValue value */
        value?: (string|null);
    }

    /** Represents a RqstIntKeyStrValue. */
    class RqstIntKeyStrValue implements IRqstIntKeyStrValue {

        /**
         * Constructs a new RqstIntKeyStrValue.
         * @param [properties] Properties to set
         */
        constructor(properties?: clientRequestPackage.IRqstIntKeyStrValue);

        /** RqstIntKeyStrValue key. */
        public key: number;

        /** RqstIntKeyStrValue value. */
        public value: string;

        /**
         * Creates a new RqstIntKeyStrValue instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RqstIntKeyStrValue instance
         */
        public static create(properties?: clientRequestPackage.IRqstIntKeyStrValue): clientRequestPackage.RqstIntKeyStrValue;

        /**
         * Encodes the specified RqstIntKeyStrValue message. Does not implicitly {@link clientRequestPackage.RqstIntKeyStrValue.verify|verify} messages.
         * @param message RqstIntKeyStrValue message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: clientRequestPackage.IRqstIntKeyStrValue, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified RqstIntKeyStrValue message, length delimited. Does not implicitly {@link clientRequestPackage.RqstIntKeyStrValue.verify|verify} messages.
         * @param message RqstIntKeyStrValue message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: clientRequestPackage.IRqstIntKeyStrValue, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a RqstIntKeyStrValue message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RqstIntKeyStrValue
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): clientRequestPackage.RqstIntKeyStrValue;

        /**
         * Decodes a RqstIntKeyStrValue message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RqstIntKeyStrValue
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): clientRequestPackage.RqstIntKeyStrValue;

        /**
         * Verifies a RqstIntKeyStrValue message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: [ 'object' ].<string, any>): (string|null);
    }

    /** Properties of a RqstLoadRole. */
    interface IRqstLoadRole {

        /** RqstLoadRole sid */
        sid?: (string|null);

        /** RqstLoadRole ip */
        ip?: (string|null);
    }

    /** Represents a RqstLoadRole. */
    class RqstLoadRole implements IRqstLoadRole {

        /**
         * Constructs a new RqstLoadRole.
         * @param [properties] Properties to set
         */
        constructor(properties?: clientRequestPackage.IRqstLoadRole);

        /** RqstLoadRole sid. */
        public sid: string;

        /** RqstLoadRole ip. */
        public ip: string;

        /**
         * Creates a new RqstLoadRole instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RqstLoadRole instance
         */
        public static create(properties?: clientRequestPackage.IRqstLoadRole): clientRequestPackage.RqstLoadRole;

        /**
         * Encodes the specified RqstLoadRole message. Does not implicitly {@link clientRequestPackage.RqstLoadRole.verify|verify} messages.
         * @param message RqstLoadRole message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: clientRequestPackage.IRqstLoadRole, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified RqstLoadRole message, length delimited. Does not implicitly {@link clientRequestPackage.RqstLoadRole.verify|verify} messages.
         * @param message RqstLoadRole message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: clientRequestPackage.IRqstLoadRole, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a RqstLoadRole message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RqstLoadRole
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): clientRequestPackage.RqstLoadRole;

        /**
         * Decodes a RqstLoadRole message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RqstLoadRole
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): clientRequestPackage.RqstLoadRole;

        /**
         * Verifies a RqstLoadRole message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: [ 'object' ].<string, any>): (string|null);
    }

    /** Properties of a RqstLong. */
    interface IRqstLong {

        /** RqstLong value */
        value?: (number|Long|null);
    }

    /** Represents a RqstLong. */
    class RqstLong implements IRqstLong {

        /**
         * Constructs a new RqstLong.
         * @param [properties] Properties to set
         */
        constructor(properties?: clientRequestPackage.IRqstLong);

        /** RqstLong value. */
        public value: (number|Long);

        /**
         * Creates a new RqstLong instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RqstLong instance
         */
        public static create(properties?: clientRequestPackage.IRqstLong): clientRequestPackage.RqstLong;

        /**
         * Encodes the specified RqstLong message. Does not implicitly {@link clientRequestPackage.RqstLong.verify|verify} messages.
         * @param message RqstLong message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: clientRequestPackage.IRqstLong, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified RqstLong message, length delimited. Does not implicitly {@link clientRequestPackage.RqstLong.verify|verify} messages.
         * @param message RqstLong message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: clientRequestPackage.IRqstLong, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a RqstLong message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RqstLong
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): clientRequestPackage.RqstLong;

        /**
         * Decodes a RqstLong message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RqstLong
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): clientRequestPackage.RqstLong;

        /**
         * Verifies a RqstLong message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: [ 'object' ].<string, any>): (string|null);
    }

    /** Properties of a RqstStr. */
    interface IRqstStr {

        /** RqstStr value */
        value?: (string|null);
    }

    /** Represents a RqstStr. */
    class RqstStr implements IRqstStr {

        /**
         * Constructs a new RqstStr.
         * @param [properties] Properties to set
         */
        constructor(properties?: clientRequestPackage.IRqstStr);

        /** RqstStr value. */
        public value: string;

        /**
         * Creates a new RqstStr instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RqstStr instance
         */
        public static create(properties?: clientRequestPackage.IRqstStr): clientRequestPackage.RqstStr;

        /**
         * Encodes the specified RqstStr message. Does not implicitly {@link clientRequestPackage.RqstStr.verify|verify} messages.
         * @param message RqstStr message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: clientRequestPackage.IRqstStr, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified RqstStr message, length delimited. Does not implicitly {@link clientRequestPackage.RqstStr.verify|verify} messages.
         * @param message RqstStr message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: clientRequestPackage.IRqstStr, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a RqstStr message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RqstStr
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): clientRequestPackage.RqstStr;

        /**
         * Decodes a RqstStr message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RqstStr
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): clientRequestPackage.RqstStr;

        /**
         * Verifies a RqstStr message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: [ 'object' ].<string, any>): (string|null);
    }

    /** Properties of a RqstStrKeyStrValue. */
    interface IRqstStrKeyStrValue {

        /** RqstStrKeyStrValue key */
        key?: (string|null);

        /** RqstStrKeyStrValue value */
        value?: (string|null);
    }

    /** Represents a RqstStrKeyStrValue. */
    class RqstStrKeyStrValue implements IRqstStrKeyStrValue {

        /**
         * Constructs a new RqstStrKeyStrValue.
         * @param [properties] Properties to set
         */
        constructor(properties?: clientRequestPackage.IRqstStrKeyStrValue);

        /** RqstStrKeyStrValue key. */
        public key: string;

        /** RqstStrKeyStrValue value. */
        public value: string;

        /**
         * Creates a new RqstStrKeyStrValue instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RqstStrKeyStrValue instance
         */
        public static create(properties?: clientRequestPackage.IRqstStrKeyStrValue): clientRequestPackage.RqstStrKeyStrValue;

        /**
         * Encodes the specified RqstStrKeyStrValue message. Does not implicitly {@link clientRequestPackage.RqstStrKeyStrValue.verify|verify} messages.
         * @param message RqstStrKeyStrValue message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: clientRequestPackage.IRqstStrKeyStrValue, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified RqstStrKeyStrValue message, length delimited. Does not implicitly {@link clientRequestPackage.RqstStrKeyStrValue.verify|verify} messages.
         * @param message RqstStrKeyStrValue message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: clientRequestPackage.IRqstStrKeyStrValue, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a RqstStrKeyStrValue message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RqstStrKeyStrValue
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): clientRequestPackage.RqstStrKeyStrValue;

        /**
         * Decodes a RqstStrKeyStrValue message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RqstStrKeyStrValue
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): clientRequestPackage.RqstStrKeyStrValue;

        /**
         * Verifies a RqstStrKeyStrValue message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: [ 'object' ].<string, any>): (string|null);
    }

    /** Properties of a RqstUpdateTeam. */
    interface IRqstUpdateTeam {

        /** RqstUpdateTeam type */
        type?: (number|null);

        /** RqstUpdateTeam posHid */
        posHid?: (number[]|null);
    }

    /** Represents a RqstUpdateTeam. */
    class RqstUpdateTeam implements IRqstUpdateTeam {

        /**
         * Constructs a new RqstUpdateTeam.
         * @param [properties] Properties to set
         */
        constructor(properties?: clientRequestPackage.IRqstUpdateTeam);

        /** RqstUpdateTeam type. */
        public type: number;

        /** RqstUpdateTeam posHid. */
        public posHid: [ 'Array' ].<number>;

        /**
         * Creates a new RqstUpdateTeam instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RqstUpdateTeam instance
         */
        public static create(properties?: clientRequestPackage.IRqstUpdateTeam): clientRequestPackage.RqstUpdateTeam;

        /**
         * Encodes the specified RqstUpdateTeam message. Does not implicitly {@link clientRequestPackage.RqstUpdateTeam.verify|verify} messages.
         * @param message RqstUpdateTeam message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: clientRequestPackage.IRqstUpdateTeam, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified RqstUpdateTeam message, length delimited. Does not implicitly {@link clientRequestPackage.RqstUpdateTeam.verify|verify} messages.
         * @param message RqstUpdateTeam message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: clientRequestPackage.IRqstUpdateTeam, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a RqstUpdateTeam message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RqstUpdateTeam
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): clientRequestPackage.RqstUpdateTeam;

        /**
         * Decodes a RqstUpdateTeam message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RqstUpdateTeam
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): clientRequestPackage.RqstUpdateTeam;

        /**
         * Verifies a RqstUpdateTeam message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: [ 'object' ].<string, any>): (string|null);
    }

    /** Properties of a RqstVerify. */
    interface IRqstVerify {

        /** RqstVerify uid */
        uid?: (string|null);

        /** RqstVerify sid */
        sid?: (string|null);

        /** RqstVerify access */
        access?: (string|null);

        /** RqstVerify refresh */
        refresh?: (string|null);

        /** RqstVerify ip */
        ip?: (string|null);
    }

    /** Represents a RqstVerify. */
    class RqstVerify implements IRqstVerify {

        /**
         * Constructs a new RqstVerify.
         * @param [properties] Properties to set
         */
        constructor(properties?: clientRequestPackage.IRqstVerify);

        /** RqstVerify uid. */
        public uid: string;

        /** RqstVerify sid. */
        public sid: string;

        /** RqstVerify access. */
        public access: string;

        /** RqstVerify refresh. */
        public refresh: string;

        /** RqstVerify ip. */
        public ip: string;

        /**
         * Creates a new RqstVerify instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RqstVerify instance
         */
        public static create(properties?: clientRequestPackage.IRqstVerify): clientRequestPackage.RqstVerify;

        /**
         * Encodes the specified RqstVerify message. Does not implicitly {@link clientRequestPackage.RqstVerify.verify|verify} messages.
         * @param message RqstVerify message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: clientRequestPackage.IRqstVerify, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified RqstVerify message, length delimited. Does not implicitly {@link clientRequestPackage.RqstVerify.verify|verify} messages.
         * @param message RqstVerify message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: clientRequestPackage.IRqstVerify, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a RqstVerify message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RqstVerify
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): clientRequestPackage.RqstVerify;

        /**
         * Decodes a RqstVerify message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RqstVerify
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): clientRequestPackage.RqstVerify;

        /**
         * Verifies a RqstVerify message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: [ 'object' ].<string, any>): (string|null);
    }
}
