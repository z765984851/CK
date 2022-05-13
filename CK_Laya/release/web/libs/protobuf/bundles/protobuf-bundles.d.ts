type Long = protobuf.Long;

/** Namespace ResponsePackage. */
declare namespace ResponsePackage {

    /** Properties of a RespFully. */
    interface IRespFully {

        /** RespFully respRole */
        respRole?: (ResponsePackage.IRespRole|null);

        /** RespFully ping */
        ping?: (ResponsePackage.IRespLong|null);

        /** RespFully respCk */
        respCk?: (ResponsePackage.IRespCk|null);

        /** RespFully respChat */
        respChat?: (ResponsePackage.IRespChat|null);

        /** RespFully respMail */
        respMail?: (ResponsePackage.IRespMail|null);

        /** RespFully respFight */
        respFight?: (ResponsePackage.IRespFight|null);

        /** RespFully respTeam */
        respTeam?: (ResponsePackage.IRespTeam|null);

        /** RespFully respMatch */
        respMatch?: (ResponsePackage.IRespMatch|null);

        /** RespFully respDepot */
        respDepot?: (ResponsePackage.IRespDepot|null);
    }

    /** Represents a RespFully. */
    class RespFully implements IRespFully {

        /**
         * Constructs a new RespFully.
         * @param [properties] Properties to set
         */
        constructor(properties?: ResponsePackage.IRespFully);

        /** RespFully respRole. */
        public respRole?: (ResponsePackage.IRespRole|null);

        /** RespFully ping. */
        public ping?: (ResponsePackage.IRespLong|null);

        /** RespFully respCk. */
        public respCk?: (ResponsePackage.IRespCk|null);

        /** RespFully respChat. */
        public respChat?: (ResponsePackage.IRespChat|null);

        /** RespFully respMail. */
        public respMail?: (ResponsePackage.IRespMail|null);

        /** RespFully respFight. */
        public respFight?: (ResponsePackage.IRespFight|null);

        /** RespFully respTeam. */
        public respTeam?: (ResponsePackage.IRespTeam|null);

        /** RespFully respMatch. */
        public respMatch?: (ResponsePackage.IRespMatch|null);

        /** RespFully respDepot. */
        public respDepot?: (ResponsePackage.IRespDepot|null);

        /**
         * Creates a new RespFully instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RespFully instance
         */
        public static create(properties?: ResponsePackage.IRespFully): ResponsePackage.RespFully;

        /**
         * Encodes the specified RespFully message. Does not implicitly {@link ResponsePackage.RespFully.verify|verify} messages.
         * @param message RespFully message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ResponsePackage.IRespFully, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified RespFully message, length delimited. Does not implicitly {@link ResponsePackage.RespFully.verify|verify} messages.
         * @param message RespFully message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ResponsePackage.IRespFully, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a RespFully message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RespFully
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): ResponsePackage.RespFully;

        /**
         * Decodes a RespFully message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RespFully
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): ResponsePackage.RespFully;

        /**
         * Verifies a RespFully message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a RespFight. */
    interface IRespFight {

        /** RespFight fightResult */
        fightResult?: (ResponsePackage.IRespFightResult|null);
    }

    /** Represents a RespFight. */
    class RespFight implements IRespFight {

        /**
         * Constructs a new RespFight.
         * @param [properties] Properties to set
         */
        constructor(properties?: ResponsePackage.IRespFight);

        /** RespFight fightResult. */
        public fightResult?: (ResponsePackage.IRespFightResult|null);

        /**
         * Creates a new RespFight instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RespFight instance
         */
        public static create(properties?: ResponsePackage.IRespFight): ResponsePackage.RespFight;

        /**
         * Encodes the specified RespFight message. Does not implicitly {@link ResponsePackage.RespFight.verify|verify} messages.
         * @param message RespFight message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ResponsePackage.IRespFight, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified RespFight message, length delimited. Does not implicitly {@link ResponsePackage.RespFight.verify|verify} messages.
         * @param message RespFight message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ResponsePackage.IRespFight, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a RespFight message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RespFight
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): ResponsePackage.RespFight;

        /**
         * Decodes a RespFight message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RespFight
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): ResponsePackage.RespFight;

        /**
         * Verifies a RespFight message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a RespFightResult. */
    interface IRespFightResult {

        /** RespFightResult matchType */
        matchType?: (number|null);

        /** RespFightResult battleType */
        battleType?: (number|null);

        /** RespFightResult battlerList */
        battlerList?: (ResponsePackage.IRespBattler[]|null);

        /** RespFightResult frameList */
        frameList?: (ResponsePackage.IRespFrame[]|null);

        /** RespFightResult fightClearing */
        fightClearing?: (ResponsePackage.IRespFightClearing|null);
    }

    /** Represents a RespFightResult. */
    class RespFightResult implements IRespFightResult {

        /**
         * Constructs a new RespFightResult.
         * @param [properties] Properties to set
         */
        constructor(properties?: ResponsePackage.IRespFightResult);

        /** RespFightResult matchType. */
        public matchType: number;

        /** RespFightResult battleType. */
        public battleType: number;

        /** RespFightResult battlerList. */
        public battlerList: ResponsePackage.IRespBattler[];

        /** RespFightResult frameList. */
        public frameList: ResponsePackage.IRespFrame[];

        /** RespFightResult fightClearing. */
        public fightClearing?: (ResponsePackage.IRespFightClearing|null);

        /**
         * Creates a new RespFightResult instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RespFightResult instance
         */
        public static create(properties?: ResponsePackage.IRespFightResult): ResponsePackage.RespFightResult;

        /**
         * Encodes the specified RespFightResult message. Does not implicitly {@link ResponsePackage.RespFightResult.verify|verify} messages.
         * @param message RespFightResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ResponsePackage.IRespFightResult, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified RespFightResult message, length delimited. Does not implicitly {@link ResponsePackage.RespFightResult.verify|verify} messages.
         * @param message RespFightResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ResponsePackage.IRespFightResult, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a RespFightResult message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RespFightResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): ResponsePackage.RespFightResult;

        /**
         * Decodes a RespFightResult message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RespFightResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): ResponsePackage.RespFightResult;

        /**
         * Verifies a RespFightResult message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a RespFrame. */
    interface IRespFrame {

        /** RespFrame currFrame */
        currFrame?: (number|null);

        /** RespFrame otherEntityFrameList */
        otherEntityFrameList?: (ResponsePackage.IRespOtherEntityFrameInfo[]|null);

        /** RespFrame ckFrameInfoList */
        ckFrameInfoList?: (ResponsePackage.IRespCkFrameInfo[]|null);
    }

    /** Represents a RespFrame. */
    class RespFrame implements IRespFrame {

        /**
         * Constructs a new RespFrame.
         * @param [properties] Properties to set
         */
        constructor(properties?: ResponsePackage.IRespFrame);

        /** RespFrame currFrame. */
        public currFrame: number;

        /** RespFrame otherEntityFrameList. */
        public otherEntityFrameList: ResponsePackage.IRespOtherEntityFrameInfo[];

        /** RespFrame ckFrameInfoList. */
        public ckFrameInfoList: ResponsePackage.IRespCkFrameInfo[];

        /**
         * Creates a new RespFrame instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RespFrame instance
         */
        public static create(properties?: ResponsePackage.IRespFrame): ResponsePackage.RespFrame;

        /**
         * Encodes the specified RespFrame message. Does not implicitly {@link ResponsePackage.RespFrame.verify|verify} messages.
         * @param message RespFrame message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ResponsePackage.IRespFrame, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified RespFrame message, length delimited. Does not implicitly {@link ResponsePackage.RespFrame.verify|verify} messages.
         * @param message RespFrame message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ResponsePackage.IRespFrame, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a RespFrame message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RespFrame
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): ResponsePackage.RespFrame;

        /**
         * Decodes a RespFrame message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RespFrame
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): ResponsePackage.RespFrame;

        /**
         * Verifies a RespFrame message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a RespOtherEntityFrameInfo. */
    interface IRespOtherEntityFrameInfo {

        /** RespOtherEntityFrameInfo type */
        type?: (number|null);

        /** RespOtherEntityFrameInfo posXY */
        posXY?: (ResponsePackage.IRespXY|null);

        /** RespOtherEntityFrameInfo faceXY */
        faceXY?: (ResponsePackage.IRespXY|null);

        /** RespOtherEntityFrameInfo isCreate */
        isCreate?: (boolean|null);

        /** RespOtherEntityFrameInfo isDestroy */
        isDestroy?: (boolean|null);
    }

    /** Represents a RespOtherEntityFrameInfo. */
    class RespOtherEntityFrameInfo implements IRespOtherEntityFrameInfo {

        /**
         * Constructs a new RespOtherEntityFrameInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: ResponsePackage.IRespOtherEntityFrameInfo);

        /** RespOtherEntityFrameInfo type. */
        public type: number;

        /** RespOtherEntityFrameInfo posXY. */
        public posXY?: (ResponsePackage.IRespXY|null);

        /** RespOtherEntityFrameInfo faceXY. */
        public faceXY?: (ResponsePackage.IRespXY|null);

        /** RespOtherEntityFrameInfo isCreate. */
        public isCreate: boolean;

        /** RespOtherEntityFrameInfo isDestroy. */
        public isDestroy: boolean;

        /**
         * Creates a new RespOtherEntityFrameInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RespOtherEntityFrameInfo instance
         */
        public static create(properties?: ResponsePackage.IRespOtherEntityFrameInfo): ResponsePackage.RespOtherEntityFrameInfo;

        /**
         * Encodes the specified RespOtherEntityFrameInfo message. Does not implicitly {@link ResponsePackage.RespOtherEntityFrameInfo.verify|verify} messages.
         * @param message RespOtherEntityFrameInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ResponsePackage.IRespOtherEntityFrameInfo, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified RespOtherEntityFrameInfo message, length delimited. Does not implicitly {@link ResponsePackage.RespOtherEntityFrameInfo.verify|verify} messages.
         * @param message RespOtherEntityFrameInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ResponsePackage.IRespOtherEntityFrameInfo, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a RespOtherEntityFrameInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RespOtherEntityFrameInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): ResponsePackage.RespOtherEntityFrameInfo;

        /**
         * Decodes a RespOtherEntityFrameInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RespOtherEntityFrameInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): ResponsePackage.RespOtherEntityFrameInfo;

        /**
         * Verifies a RespOtherEntityFrameInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
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
        constructor(properties?: ResponsePackage.IRespXY);

        /** RespXY x. */
        public x: number;

        /** RespXY y. */
        public y: number;

        /**
         * Creates a new RespXY instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RespXY instance
         */
        public static create(properties?: ResponsePackage.IRespXY): ResponsePackage.RespXY;

        /**
         * Encodes the specified RespXY message. Does not implicitly {@link ResponsePackage.RespXY.verify|verify} messages.
         * @param message RespXY message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ResponsePackage.IRespXY, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified RespXY message, length delimited. Does not implicitly {@link ResponsePackage.RespXY.verify|verify} messages.
         * @param message RespXY message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ResponsePackage.IRespXY, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a RespXY message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RespXY
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): ResponsePackage.RespXY;

        /**
         * Decodes a RespXY message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RespXY
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): ResponsePackage.RespXY;

        /**
         * Verifies a RespXY message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a RespCkFrameInfo. */
    interface IRespCkFrameInfo {

        /** RespCkFrameInfo id */
        id?: (number|null);

        /** RespCkFrameInfo hp */
        hp?: (number|null);

        /** RespCkFrameInfo posXY */
        posXY?: (ResponsePackage.IRespXY|null);

        /** RespCkFrameInfo faceXY */
        faceXY?: (ResponsePackage.IRespXY|null);

        /** RespCkFrameInfo isAtk */
        isAtk?: (boolean|null);

        /** RespCkFrameInfo hit */
        hit?: (ResponsePackage.IRespHit|null);

        /** RespCkFrameInfo isDead */
        isDead?: (boolean|null);
    }

    /** Represents a RespCkFrameInfo. */
    class RespCkFrameInfo implements IRespCkFrameInfo {

        /**
         * Constructs a new RespCkFrameInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: ResponsePackage.IRespCkFrameInfo);

        /** RespCkFrameInfo id. */
        public id: number;

        /** RespCkFrameInfo hp. */
        public hp: number;

        /** RespCkFrameInfo posXY. */
        public posXY?: (ResponsePackage.IRespXY|null);

        /** RespCkFrameInfo faceXY. */
        public faceXY?: (ResponsePackage.IRespXY|null);

        /** RespCkFrameInfo isAtk. */
        public isAtk: boolean;

        /** RespCkFrameInfo hit. */
        public hit?: (ResponsePackage.IRespHit|null);

        /** RespCkFrameInfo isDead. */
        public isDead: boolean;

        /**
         * Creates a new RespCkFrameInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RespCkFrameInfo instance
         */
        public static create(properties?: ResponsePackage.IRespCkFrameInfo): ResponsePackage.RespCkFrameInfo;

        /**
         * Encodes the specified RespCkFrameInfo message. Does not implicitly {@link ResponsePackage.RespCkFrameInfo.verify|verify} messages.
         * @param message RespCkFrameInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ResponsePackage.IRespCkFrameInfo, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified RespCkFrameInfo message, length delimited. Does not implicitly {@link ResponsePackage.RespCkFrameInfo.verify|verify} messages.
         * @param message RespCkFrameInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ResponsePackage.IRespCkFrameInfo, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a RespCkFrameInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RespCkFrameInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): ResponsePackage.RespCkFrameInfo;

        /**
         * Decodes a RespCkFrameInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RespCkFrameInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): ResponsePackage.RespCkFrameInfo;

        /**
         * Verifies a RespCkFrameInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a RespHit. */
    interface IRespHit {

        /** RespHit atkCk */
        atkCk?: (number|null);

        /** RespHit hitType */
        hitType?: (number|null);

        /** RespHit atkType */
        atkType?: (number|null);

        /** RespHit value */
        value?: (number|null);
    }

    /** Represents a RespHit. */
    class RespHit implements IRespHit {

        /**
         * Constructs a new RespHit.
         * @param [properties] Properties to set
         */
        constructor(properties?: ResponsePackage.IRespHit);

        /** RespHit atkCk. */
        public atkCk: number;

        /** RespHit hitType. */
        public hitType: number;

        /** RespHit atkType. */
        public atkType: number;

        /** RespHit value. */
        public value: number;

        /**
         * Creates a new RespHit instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RespHit instance
         */
        public static create(properties?: ResponsePackage.IRespHit): ResponsePackage.RespHit;

        /**
         * Encodes the specified RespHit message. Does not implicitly {@link ResponsePackage.RespHit.verify|verify} messages.
         * @param message RespHit message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ResponsePackage.IRespHit, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified RespHit message, length delimited. Does not implicitly {@link ResponsePackage.RespHit.verify|verify} messages.
         * @param message RespHit message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ResponsePackage.IRespHit, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a RespHit message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RespHit
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): ResponsePackage.RespHit;

        /**
         * Decodes a RespHit message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RespHit
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): ResponsePackage.RespHit;

        /**
         * Verifies a RespHit message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a RespFightClearing. */
    interface IRespFightClearing {

        /** RespFightClearing winCamp */
        winCamp?: (number|null);

        /** RespFightClearing clearingList */
        clearingList?: (ResponsePackage.IRespRoleClearing[]|null);
    }

    /** Represents a RespFightClearing. */
    class RespFightClearing implements IRespFightClearing {

        /**
         * Constructs a new RespFightClearing.
         * @param [properties] Properties to set
         */
        constructor(properties?: ResponsePackage.IRespFightClearing);

        /** RespFightClearing winCamp. */
        public winCamp: number;

        /** RespFightClearing clearingList. */
        public clearingList: ResponsePackage.IRespRoleClearing[];

        /**
         * Creates a new RespFightClearing instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RespFightClearing instance
         */
        public static create(properties?: ResponsePackage.IRespFightClearing): ResponsePackage.RespFightClearing;

        /**
         * Encodes the specified RespFightClearing message. Does not implicitly {@link ResponsePackage.RespFightClearing.verify|verify} messages.
         * @param message RespFightClearing message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ResponsePackage.IRespFightClearing, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified RespFightClearing message, length delimited. Does not implicitly {@link ResponsePackage.RespFightClearing.verify|verify} messages.
         * @param message RespFightClearing message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ResponsePackage.IRespFightClearing, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a RespFightClearing message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RespFightClearing
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): ResponsePackage.RespFightClearing;

        /**
         * Decodes a RespFightClearing message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RespFightClearing
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): ResponsePackage.RespFightClearing;

        /**
         * Verifies a RespFightClearing message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a RespRoleClearing. */
    interface IRespRoleClearing {

        /** RespRoleClearing rid */
        rid?: (string|null);

        /** RespRoleClearing camp */
        camp?: (number|null);

        /** RespRoleClearing gcke */
        gcke?: (number|null);

        /** RespRoleClearing integral */
        integral?: (number|null);

        /** RespRoleClearing rank */
        rank?: (number|null);
    }

    /** Represents a RespRoleClearing. */
    class RespRoleClearing implements IRespRoleClearing {

        /**
         * Constructs a new RespRoleClearing.
         * @param [properties] Properties to set
         */
        constructor(properties?: ResponsePackage.IRespRoleClearing);

        /** RespRoleClearing rid. */
        public rid: string;

        /** RespRoleClearing camp. */
        public camp: number;

        /** RespRoleClearing gcke. */
        public gcke: number;

        /** RespRoleClearing integral. */
        public integral: number;

        /** RespRoleClearing rank. */
        public rank: number;

        /**
         * Creates a new RespRoleClearing instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RespRoleClearing instance
         */
        public static create(properties?: ResponsePackage.IRespRoleClearing): ResponsePackage.RespRoleClearing;

        /**
         * Encodes the specified RespRoleClearing message. Does not implicitly {@link ResponsePackage.RespRoleClearing.verify|verify} messages.
         * @param message RespRoleClearing message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ResponsePackage.IRespRoleClearing, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified RespRoleClearing message, length delimited. Does not implicitly {@link ResponsePackage.RespRoleClearing.verify|verify} messages.
         * @param message RespRoleClearing message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ResponsePackage.IRespRoleClearing, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a RespRoleClearing message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RespRoleClearing
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): ResponsePackage.RespRoleClearing;

        /**
         * Decodes a RespRoleClearing message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RespRoleClearing
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): ResponsePackage.RespRoleClearing;

        /**
         * Verifies a RespRoleClearing message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a RespBattler. */
    interface IRespBattler {

        /** RespBattler camp */
        camp?: (number|null);

        /** RespBattler roleBaseInfo */
        roleBaseInfo?: (ResponsePackage.IRespRoleBaseInfo|null);

        /** RespBattler battleCk */
        battleCk?: (ResponsePackage.IRespBattleCk|null);
    }

    /** Represents a RespBattler. */
    class RespBattler implements IRespBattler {

        /**
         * Constructs a new RespBattler.
         * @param [properties] Properties to set
         */
        constructor(properties?: ResponsePackage.IRespBattler);

        /** RespBattler camp. */
        public camp: number;

        /** RespBattler roleBaseInfo. */
        public roleBaseInfo?: (ResponsePackage.IRespRoleBaseInfo|null);

        /** RespBattler battleCk. */
        public battleCk?: (ResponsePackage.IRespBattleCk|null);

        /**
         * Creates a new RespBattler instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RespBattler instance
         */
        public static create(properties?: ResponsePackage.IRespBattler): ResponsePackage.RespBattler;

        /**
         * Encodes the specified RespBattler message. Does not implicitly {@link ResponsePackage.RespBattler.verify|verify} messages.
         * @param message RespBattler message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ResponsePackage.IRespBattler, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified RespBattler message, length delimited. Does not implicitly {@link ResponsePackage.RespBattler.verify|verify} messages.
         * @param message RespBattler message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ResponsePackage.IRespBattler, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a RespBattler message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RespBattler
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): ResponsePackage.RespBattler;

        /**
         * Decodes a RespBattler message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RespBattler
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): ResponsePackage.RespBattler;

        /**
         * Verifies a RespBattler message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
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

        /** RespBattleCk hp */
        hp?: (number|null);

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
        constructor(properties?: ResponsePackage.IRespBattleCk);

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
        public professionList: number[];

        /** RespBattleCk specialtyList. */
        public specialtyList: number[];

        /** RespBattleCk hp. */
        public hp: number;

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
        public static create(properties?: ResponsePackage.IRespBattleCk): ResponsePackage.RespBattleCk;

        /**
         * Encodes the specified RespBattleCk message. Does not implicitly {@link ResponsePackage.RespBattleCk.verify|verify} messages.
         * @param message RespBattleCk message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ResponsePackage.IRespBattleCk, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified RespBattleCk message, length delimited. Does not implicitly {@link ResponsePackage.RespBattleCk.verify|verify} messages.
         * @param message RespBattleCk message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ResponsePackage.IRespBattleCk, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a RespBattleCk message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RespBattleCk
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): ResponsePackage.RespBattleCk;

        /**
         * Decodes a RespBattleCk message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RespBattleCk
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): ResponsePackage.RespBattleCk;

        /**
         * Verifies a RespBattleCk message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a RespRoleBaseInfo. */
    interface IRespRoleBaseInfo {

        /** RespRoleBaseInfo id */
        id?: (string|null);

        /** RespRoleBaseInfo name */
        name?: (string|null);

        /** RespRoleBaseInfo chain */
        chain?: (number|null);

        /** RespRoleBaseInfo division */
        division?: (number|null);

        /** RespRoleBaseInfo ckCardInfo */
        ckCardInfo?: (ResponsePackage.IRespCkCardInfo|null);
    }

    /** Represents a RespRoleBaseInfo. */
    class RespRoleBaseInfo implements IRespRoleBaseInfo {

        /**
         * Constructs a new RespRoleBaseInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: ResponsePackage.IRespRoleBaseInfo);

        /** RespRoleBaseInfo id. */
        public id: string;

        /** RespRoleBaseInfo name. */
        public name: string;

        /** RespRoleBaseInfo chain. */
        public chain: number;

        /** RespRoleBaseInfo division. */
        public division: number;

        /** RespRoleBaseInfo ckCardInfo. */
        public ckCardInfo?: (ResponsePackage.IRespCkCardInfo|null);

        /**
         * Creates a new RespRoleBaseInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RespRoleBaseInfo instance
         */
        public static create(properties?: ResponsePackage.IRespRoleBaseInfo): ResponsePackage.RespRoleBaseInfo;

        /**
         * Encodes the specified RespRoleBaseInfo message. Does not implicitly {@link ResponsePackage.RespRoleBaseInfo.verify|verify} messages.
         * @param message RespRoleBaseInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ResponsePackage.IRespRoleBaseInfo, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified RespRoleBaseInfo message, length delimited. Does not implicitly {@link ResponsePackage.RespRoleBaseInfo.verify|verify} messages.
         * @param message RespRoleBaseInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ResponsePackage.IRespRoleBaseInfo, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a RespRoleBaseInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RespRoleBaseInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): ResponsePackage.RespRoleBaseInfo;

        /**
         * Decodes a RespRoleBaseInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RespRoleBaseInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): ResponsePackage.RespRoleBaseInfo;

        /**
         * Verifies a RespRoleBaseInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a RespCkCardInfo. */
    interface IRespCkCardInfo {

        /** RespCkCardInfo rid */
        rid?: (string|null);

        /** RespCkCardInfo seq */
        seq?: (number|null);

        /** RespCkCardInfo lv */
        lv?: (number|null);

        /** RespCkCardInfo quality */
        quality?: (number|null);

        /** RespCkCardInfo lineage */
        lineage?: (number|null);

        /** RespCkCardInfo professionList */
        professionList?: (number[]|null);
    }

    /** Represents a RespCkCardInfo. */
    class RespCkCardInfo implements IRespCkCardInfo {

        /**
         * Constructs a new RespCkCardInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: ResponsePackage.IRespCkCardInfo);

        /** RespCkCardInfo rid. */
        public rid: string;

        /** RespCkCardInfo seq. */
        public seq: number;

        /** RespCkCardInfo lv. */
        public lv: number;

        /** RespCkCardInfo quality. */
        public quality: number;

        /** RespCkCardInfo lineage. */
        public lineage: number;

        /** RespCkCardInfo professionList. */
        public professionList: number[];

        /**
         * Creates a new RespCkCardInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RespCkCardInfo instance
         */
        public static create(properties?: ResponsePackage.IRespCkCardInfo): ResponsePackage.RespCkCardInfo;

        /**
         * Encodes the specified RespCkCardInfo message. Does not implicitly {@link ResponsePackage.RespCkCardInfo.verify|verify} messages.
         * @param message RespCkCardInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ResponsePackage.IRespCkCardInfo, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified RespCkCardInfo message, length delimited. Does not implicitly {@link ResponsePackage.RespCkCardInfo.verify|verify} messages.
         * @param message RespCkCardInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ResponsePackage.IRespCkCardInfo, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a RespCkCardInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RespCkCardInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): ResponsePackage.RespCkCardInfo;

        /**
         * Decodes a RespCkCardInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RespCkCardInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): ResponsePackage.RespCkCardInfo;

        /**
         * Verifies a RespCkCardInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a RespTeam. */
    interface IRespTeam {

        /** RespTeam teamList */
        teamList?: (ResponsePackage.IRespTeamInfo[]|null);

        /** RespTeam teamOp */
        teamOp?: (ResponsePackage.IRespTeamInfo[]|null);
    }

    /** Represents a RespTeam. */
    class RespTeam implements IRespTeam {

        /**
         * Constructs a new RespTeam.
         * @param [properties] Properties to set
         */
        constructor(properties?: ResponsePackage.IRespTeam);

        /** RespTeam teamList. */
        public teamList: ResponsePackage.IRespTeamInfo[];

        /** RespTeam teamOp. */
        public teamOp: ResponsePackage.IRespTeamInfo[];

        /**
         * Creates a new RespTeam instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RespTeam instance
         */
        public static create(properties?: ResponsePackage.IRespTeam): ResponsePackage.RespTeam;

        /**
         * Encodes the specified RespTeam message. Does not implicitly {@link ResponsePackage.RespTeam.verify|verify} messages.
         * @param message RespTeam message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ResponsePackage.IRespTeam, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified RespTeam message, length delimited. Does not implicitly {@link ResponsePackage.RespTeam.verify|verify} messages.
         * @param message RespTeam message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ResponsePackage.IRespTeam, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a RespTeam message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RespTeam
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): ResponsePackage.RespTeam;

        /**
         * Decodes a RespTeam message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RespTeam
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): ResponsePackage.RespTeam;

        /**
         * Verifies a RespTeam message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
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
        constructor(properties?: ResponsePackage.IRespTeamInfo);

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
        public static create(properties?: ResponsePackage.IRespTeamInfo): ResponsePackage.RespTeamInfo;

        /**
         * Encodes the specified RespTeamInfo message. Does not implicitly {@link ResponsePackage.RespTeamInfo.verify|verify} messages.
         * @param message RespTeamInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ResponsePackage.IRespTeamInfo, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified RespTeamInfo message, length delimited. Does not implicitly {@link ResponsePackage.RespTeamInfo.verify|verify} messages.
         * @param message RespTeamInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ResponsePackage.IRespTeamInfo, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a RespTeamInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RespTeamInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): ResponsePackage.RespTeamInfo;

        /**
         * Decodes a RespTeamInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RespTeamInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): ResponsePackage.RespTeamInfo;

        /**
         * Verifies a RespTeamInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a RespDepot. */
    interface IRespDepot {

        /** RespDepot currencyInfo */
        currencyInfo?: (ResponsePackage.IRespIntKeyLongVal[]|null);

        /** RespDepot countItemInfo */
        countItemInfo?: (ResponsePackage.IRespIntKeyIntVal[]|null);

        /** RespDepot currencyOp */
        currencyOp?: (ResponsePackage.IRespIntKeyLongVal[]|null);

        /** RespDepot countItemOp */
        countItemOp?: (ResponsePackage.IRespIntKeyIntVal[]|null);

        /** RespDepot respPrize */
        respPrize?: (ResponsePackage.IRespPrize|null);
    }

    /** Represents a RespDepot. */
    class RespDepot implements IRespDepot {

        /**
         * Constructs a new RespDepot.
         * @param [properties] Properties to set
         */
        constructor(properties?: ResponsePackage.IRespDepot);

        /** RespDepot currencyInfo. */
        public currencyInfo: ResponsePackage.IRespIntKeyLongVal[];

        /** RespDepot countItemInfo. */
        public countItemInfo: ResponsePackage.IRespIntKeyIntVal[];

        /** RespDepot currencyOp. */
        public currencyOp: ResponsePackage.IRespIntKeyLongVal[];

        /** RespDepot countItemOp. */
        public countItemOp: ResponsePackage.IRespIntKeyIntVal[];

        /** RespDepot respPrize. */
        public respPrize?: (ResponsePackage.IRespPrize|null);

        /**
         * Creates a new RespDepot instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RespDepot instance
         */
        public static create(properties?: ResponsePackage.IRespDepot): ResponsePackage.RespDepot;

        /**
         * Encodes the specified RespDepot message. Does not implicitly {@link ResponsePackage.RespDepot.verify|verify} messages.
         * @param message RespDepot message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ResponsePackage.IRespDepot, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified RespDepot message, length delimited. Does not implicitly {@link ResponsePackage.RespDepot.verify|verify} messages.
         * @param message RespDepot message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ResponsePackage.IRespDepot, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a RespDepot message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RespDepot
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): ResponsePackage.RespDepot;

        /**
         * Decodes a RespDepot message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RespDepot
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): ResponsePackage.RespDepot;

        /**
         * Verifies a RespDepot message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a RespIntKeyLongVal. */
    interface IRespIntKeyLongVal {

        /** RespIntKeyLongVal key */
        key?: (number|null);

        /** RespIntKeyLongVal value */
        value?: (number|Long|null);
    }

    /** Represents a RespIntKeyLongVal. */
    class RespIntKeyLongVal implements IRespIntKeyLongVal {

        /**
         * Constructs a new RespIntKeyLongVal.
         * @param [properties] Properties to set
         */
        constructor(properties?: ResponsePackage.IRespIntKeyLongVal);

        /** RespIntKeyLongVal key. */
        public key: number;

        /** RespIntKeyLongVal value. */
        public value: (number|Long);

        /**
         * Creates a new RespIntKeyLongVal instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RespIntKeyLongVal instance
         */
        public static create(properties?: ResponsePackage.IRespIntKeyLongVal): ResponsePackage.RespIntKeyLongVal;

        /**
         * Encodes the specified RespIntKeyLongVal message. Does not implicitly {@link ResponsePackage.RespIntKeyLongVal.verify|verify} messages.
         * @param message RespIntKeyLongVal message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ResponsePackage.IRespIntKeyLongVal, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified RespIntKeyLongVal message, length delimited. Does not implicitly {@link ResponsePackage.RespIntKeyLongVal.verify|verify} messages.
         * @param message RespIntKeyLongVal message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ResponsePackage.IRespIntKeyLongVal, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a RespIntKeyLongVal message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RespIntKeyLongVal
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): ResponsePackage.RespIntKeyLongVal;

        /**
         * Decodes a RespIntKeyLongVal message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RespIntKeyLongVal
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): ResponsePackage.RespIntKeyLongVal;

        /**
         * Verifies a RespIntKeyLongVal message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a RespIntKeyIntVal. */
    interface IRespIntKeyIntVal {

        /** RespIntKeyIntVal key */
        key?: (number|null);

        /** RespIntKeyIntVal value */
        value?: (number|null);
    }

    /** Represents a RespIntKeyIntVal. */
    class RespIntKeyIntVal implements IRespIntKeyIntVal {

        /**
         * Constructs a new RespIntKeyIntVal.
         * @param [properties] Properties to set
         */
        constructor(properties?: ResponsePackage.IRespIntKeyIntVal);

        /** RespIntKeyIntVal key. */
        public key: number;

        /** RespIntKeyIntVal value. */
        public value: number;

        /**
         * Creates a new RespIntKeyIntVal instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RespIntKeyIntVal instance
         */
        public static create(properties?: ResponsePackage.IRespIntKeyIntVal): ResponsePackage.RespIntKeyIntVal;

        /**
         * Encodes the specified RespIntKeyIntVal message. Does not implicitly {@link ResponsePackage.RespIntKeyIntVal.verify|verify} messages.
         * @param message RespIntKeyIntVal message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ResponsePackage.IRespIntKeyIntVal, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified RespIntKeyIntVal message, length delimited. Does not implicitly {@link ResponsePackage.RespIntKeyIntVal.verify|verify} messages.
         * @param message RespIntKeyIntVal message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ResponsePackage.IRespIntKeyIntVal, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a RespIntKeyIntVal message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RespIntKeyIntVal
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): ResponsePackage.RespIntKeyIntVal;

        /**
         * Decodes a RespIntKeyIntVal message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RespIntKeyIntVal
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): ResponsePackage.RespIntKeyIntVal;

        /**
         * Verifies a RespIntKeyIntVal message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a RespPrize. */
    interface IRespPrize {

        /** RespPrize currencyPrize */
        currencyPrize?: (ResponsePackage.IRespIntKeyLongVal[]|null);

        /** RespPrize countItemPrize */
        countItemPrize?: (ResponsePackage.IRespIntKeyIntVal[]|null);
    }

    /** Represents a RespPrize. */
    class RespPrize implements IRespPrize {

        /**
         * Constructs a new RespPrize.
         * @param [properties] Properties to set
         */
        constructor(properties?: ResponsePackage.IRespPrize);

        /** RespPrize currencyPrize. */
        public currencyPrize: ResponsePackage.IRespIntKeyLongVal[];

        /** RespPrize countItemPrize. */
        public countItemPrize: ResponsePackage.IRespIntKeyIntVal[];

        /**
         * Creates a new RespPrize instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RespPrize instance
         */
        public static create(properties?: ResponsePackage.IRespPrize): ResponsePackage.RespPrize;

        /**
         * Encodes the specified RespPrize message. Does not implicitly {@link ResponsePackage.RespPrize.verify|verify} messages.
         * @param message RespPrize message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ResponsePackage.IRespPrize, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified RespPrize message, length delimited. Does not implicitly {@link ResponsePackage.RespPrize.verify|verify} messages.
         * @param message RespPrize message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ResponsePackage.IRespPrize, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a RespPrize message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RespPrize
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): ResponsePackage.RespPrize;

        /**
         * Decodes a RespPrize message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RespPrize
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): ResponsePackage.RespPrize;

        /**
         * Verifies a RespPrize message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a RespCk. */
    interface IRespCk {

        /** RespCk roleCks */
        roleCks?: (ResponsePackage.IRespCkInfo[]|null);
    }

    /** Represents a RespCk. */
    class RespCk implements IRespCk {

        /**
         * Constructs a new RespCk.
         * @param [properties] Properties to set
         */
        constructor(properties?: ResponsePackage.IRespCk);

        /** RespCk roleCks. */
        public roleCks: ResponsePackage.IRespCkInfo[];

        /**
         * Creates a new RespCk instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RespCk instance
         */
        public static create(properties?: ResponsePackage.IRespCk): ResponsePackage.RespCk;

        /**
         * Encodes the specified RespCk message. Does not implicitly {@link ResponsePackage.RespCk.verify|verify} messages.
         * @param message RespCk message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ResponsePackage.IRespCk, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified RespCk message, length delimited. Does not implicitly {@link ResponsePackage.RespCk.verify|verify} messages.
         * @param message RespCk message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ResponsePackage.IRespCk, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a RespCk message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RespCk
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): ResponsePackage.RespCk;

        /**
         * Decodes a RespCk message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RespCk
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): ResponsePackage.RespCk;

        /**
         * Verifies a RespCk message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
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

        /** RespCkInfo level */
        level?: (number|null);

        /** RespCkInfo life */
        life?: (number|null);

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
        constructor(properties?: ResponsePackage.IRespCkInfo);

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

        /** RespCkInfo level. */
        public level: number;

        /** RespCkInfo life. */
        public life: number;

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
        public professionList: number[];

        /** RespCkInfo specialtyList. */
        public specialtyList: number[];

        /**
         * Creates a new RespCkInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RespCkInfo instance
         */
        public static create(properties?: ResponsePackage.IRespCkInfo): ResponsePackage.RespCkInfo;

        /**
         * Encodes the specified RespCkInfo message. Does not implicitly {@link ResponsePackage.RespCkInfo.verify|verify} messages.
         * @param message RespCkInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ResponsePackage.IRespCkInfo, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified RespCkInfo message, length delimited. Does not implicitly {@link ResponsePackage.RespCkInfo.verify|verify} messages.
         * @param message RespCkInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ResponsePackage.IRespCkInfo, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a RespCkInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RespCkInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): ResponsePackage.RespCkInfo;

        /**
         * Decodes a RespCkInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RespCkInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): ResponsePackage.RespCkInfo;

        /**
         * Verifies a RespCkInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
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
        constructor(properties?: ResponsePackage.IRespLong);

        /** RespLong value. */
        public value: (number|Long);

        /**
         * Creates a new RespLong instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RespLong instance
         */
        public static create(properties?: ResponsePackage.IRespLong): ResponsePackage.RespLong;

        /**
         * Encodes the specified RespLong message. Does not implicitly {@link ResponsePackage.RespLong.verify|verify} messages.
         * @param message RespLong message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ResponsePackage.IRespLong, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified RespLong message, length delimited. Does not implicitly {@link ResponsePackage.RespLong.verify|verify} messages.
         * @param message RespLong message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ResponsePackage.IRespLong, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a RespLong message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RespLong
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): ResponsePackage.RespLong;

        /**
         * Decodes a RespLong message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RespLong
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): ResponsePackage.RespLong;

        /**
         * Verifies a RespLong message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a RespMail. */
    interface IRespMail {

        /** RespMail mails */
        mails?: (ResponsePackage.IRespMailInfo[]|null);

        /** RespMail mailOp */
        mailOp?: (ResponsePackage.IRespMailOp|null);
    }

    /** Represents a RespMail. */
    class RespMail implements IRespMail {

        /**
         * Constructs a new RespMail.
         * @param [properties] Properties to set
         */
        constructor(properties?: ResponsePackage.IRespMail);

        /** RespMail mails. */
        public mails: ResponsePackage.IRespMailInfo[];

        /** RespMail mailOp. */
        public mailOp?: (ResponsePackage.IRespMailOp|null);

        /**
         * Creates a new RespMail instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RespMail instance
         */
        public static create(properties?: ResponsePackage.IRespMail): ResponsePackage.RespMail;

        /**
         * Encodes the specified RespMail message. Does not implicitly {@link ResponsePackage.RespMail.verify|verify} messages.
         * @param message RespMail message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ResponsePackage.IRespMail, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified RespMail message, length delimited. Does not implicitly {@link ResponsePackage.RespMail.verify|verify} messages.
         * @param message RespMail message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ResponsePackage.IRespMail, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a RespMail message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RespMail
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): ResponsePackage.RespMail;

        /**
         * Decodes a RespMail message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RespMail
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): ResponsePackage.RespMail;

        /**
         * Verifies a RespMail message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
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
        items?: (ResponsePackage.IRespFunc[]|null);
    }

    /** Represents a RespMailInfo. */
    class RespMailInfo implements IRespMailInfo {

        /**
         * Constructs a new RespMailInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: ResponsePackage.IRespMailInfo);

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
        public params: string[];

        /** RespMailInfo read. */
        public read: boolean;

        /** RespMailInfo items. */
        public items: ResponsePackage.IRespFunc[];

        /**
         * Creates a new RespMailInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RespMailInfo instance
         */
        public static create(properties?: ResponsePackage.IRespMailInfo): ResponsePackage.RespMailInfo;

        /**
         * Encodes the specified RespMailInfo message. Does not implicitly {@link ResponsePackage.RespMailInfo.verify|verify} messages.
         * @param message RespMailInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ResponsePackage.IRespMailInfo, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified RespMailInfo message, length delimited. Does not implicitly {@link ResponsePackage.RespMailInfo.verify|verify} messages.
         * @param message RespMailInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ResponsePackage.IRespMailInfo, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a RespMailInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RespMailInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): ResponsePackage.RespMailInfo;

        /**
         * Decodes a RespMailInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RespMailInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): ResponsePackage.RespMailInfo;

        /**
         * Verifies a RespMailInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
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
        constructor(properties?: ResponsePackage.IRespFunc);

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
        public static create(properties?: ResponsePackage.IRespFunc): ResponsePackage.RespFunc;

        /**
         * Encodes the specified RespFunc message. Does not implicitly {@link ResponsePackage.RespFunc.verify|verify} messages.
         * @param message RespFunc message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ResponsePackage.IRespFunc, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified RespFunc message, length delimited. Does not implicitly {@link ResponsePackage.RespFunc.verify|verify} messages.
         * @param message RespFunc message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ResponsePackage.IRespFunc, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a RespFunc message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RespFunc
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): ResponsePackage.RespFunc;

        /**
         * Decodes a RespFunc message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RespFunc
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): ResponsePackage.RespFunc;

        /**
         * Verifies a RespFunc message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
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
        constructor(properties?: ResponsePackage.IRespMailOp);

        /** RespMailOp id. */
        public id: number;

        /** RespMailOp read. */
        public read: boolean;

        /**
         * Creates a new RespMailOp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RespMailOp instance
         */
        public static create(properties?: ResponsePackage.IRespMailOp): ResponsePackage.RespMailOp;

        /**
         * Encodes the specified RespMailOp message. Does not implicitly {@link ResponsePackage.RespMailOp.verify|verify} messages.
         * @param message RespMailOp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ResponsePackage.IRespMailOp, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified RespMailOp message, length delimited. Does not implicitly {@link ResponsePackage.RespMailOp.verify|verify} messages.
         * @param message RespMailOp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ResponsePackage.IRespMailOp, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a RespMailOp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RespMailOp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): ResponsePackage.RespMailOp;

        /**
         * Decodes a RespMailOp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RespMailOp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): ResponsePackage.RespMailOp;

        /**
         * Verifies a RespMailOp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a RespRole. */
    interface IRespRole {

        /** RespRole roleInfo */
        roleInfo?: (ResponsePackage.IRespRoleInfo|null);

        /** RespRole roleBaseInfo */
        roleBaseInfo?: (ResponsePackage.IRespRoleBaseInfo|null);

        /** RespRole roleOp */
        roleOp?: (ResponsePackage.IRespRoleOp|null);

        /** RespRole createRole */
        createRole?: (ResponsePackage.IRespBoolean|null);
    }

    /** Represents a RespRole. */
    class RespRole implements IRespRole {

        /**
         * Constructs a new RespRole.
         * @param [properties] Properties to set
         */
        constructor(properties?: ResponsePackage.IRespRole);

        /** RespRole roleInfo. */
        public roleInfo?: (ResponsePackage.IRespRoleInfo|null);

        /** RespRole roleBaseInfo. */
        public roleBaseInfo?: (ResponsePackage.IRespRoleBaseInfo|null);

        /** RespRole roleOp. */
        public roleOp?: (ResponsePackage.IRespRoleOp|null);

        /** RespRole createRole. */
        public createRole?: (ResponsePackage.IRespBoolean|null);

        /**
         * Creates a new RespRole instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RespRole instance
         */
        public static create(properties?: ResponsePackage.IRespRole): ResponsePackage.RespRole;

        /**
         * Encodes the specified RespRole message. Does not implicitly {@link ResponsePackage.RespRole.verify|verify} messages.
         * @param message RespRole message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ResponsePackage.IRespRole, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified RespRole message, length delimited. Does not implicitly {@link ResponsePackage.RespRole.verify|verify} messages.
         * @param message RespRole message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ResponsePackage.IRespRole, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a RespRole message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RespRole
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): ResponsePackage.RespRole;

        /**
         * Decodes a RespRole message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RespRole
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): ResponsePackage.RespRole;

        /**
         * Verifies a RespRole message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a RespRoleOp. */
    interface IRespRoleOp {

        /** RespRoleOp ckeOp */
        ckeOp?: (ResponsePackage.IRespInt|null);

        /** RespRoleOp cktOp */
        cktOp?: (ResponsePackage.IRespInt|null);
    }

    /** Represents a RespRoleOp. */
    class RespRoleOp implements IRespRoleOp {

        /**
         * Constructs a new RespRoleOp.
         * @param [properties] Properties to set
         */
        constructor(properties?: ResponsePackage.IRespRoleOp);

        /** RespRoleOp ckeOp. */
        public ckeOp?: (ResponsePackage.IRespInt|null);

        /** RespRoleOp cktOp. */
        public cktOp?: (ResponsePackage.IRespInt|null);

        /**
         * Creates a new RespRoleOp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RespRoleOp instance
         */
        public static create(properties?: ResponsePackage.IRespRoleOp): ResponsePackage.RespRoleOp;

        /**
         * Encodes the specified RespRoleOp message. Does not implicitly {@link ResponsePackage.RespRoleOp.verify|verify} messages.
         * @param message RespRoleOp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ResponsePackage.IRespRoleOp, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified RespRoleOp message, length delimited. Does not implicitly {@link ResponsePackage.RespRoleOp.verify|verify} messages.
         * @param message RespRoleOp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ResponsePackage.IRespRoleOp, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a RespRoleOp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RespRoleOp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): ResponsePackage.RespRoleOp;

        /**
         * Decodes a RespRoleOp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RespRoleOp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): ResponsePackage.RespRoleOp;

        /**
         * Verifies a RespRoleOp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
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
        constructor(properties?: ResponsePackage.IRespInt);

        /** RespInt value. */
        public value: number;

        /**
         * Creates a new RespInt instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RespInt instance
         */
        public static create(properties?: ResponsePackage.IRespInt): ResponsePackage.RespInt;

        /**
         * Encodes the specified RespInt message. Does not implicitly {@link ResponsePackage.RespInt.verify|verify} messages.
         * @param message RespInt message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ResponsePackage.IRespInt, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified RespInt message, length delimited. Does not implicitly {@link ResponsePackage.RespInt.verify|verify} messages.
         * @param message RespInt message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ResponsePackage.IRespInt, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a RespInt message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RespInt
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): ResponsePackage.RespInt;

        /**
         * Decodes a RespInt message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RespInt
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): ResponsePackage.RespInt;

        /**
         * Verifies a RespInt message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
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

        /** RespRoleInfo division */
        division?: (number|null);

        /** RespRoleInfo integral */
        integral?: (number|null);

        /** RespRoleInfo serverTime */
        serverTime?: (number|Long|null);

        /** RespRoleInfo gcke */
        gcke?: (number|null);

        /** RespRoleInfo cke */
        cke?: (number|null);

        /** RespRoleInfo ckt */
        ckt?: (number|null);
    }

    /** Represents a RespRoleInfo. */
    class RespRoleInfo implements IRespRoleInfo {

        /**
         * Constructs a new RespRoleInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: ResponsePackage.IRespRoleInfo);

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

        /** RespRoleInfo division. */
        public division: number;

        /** RespRoleInfo integral. */
        public integral: number;

        /** RespRoleInfo serverTime. */
        public serverTime: (number|Long);

        /** RespRoleInfo gcke. */
        public gcke: number;

        /** RespRoleInfo cke. */
        public cke: number;

        /** RespRoleInfo ckt. */
        public ckt: number;

        /**
         * Creates a new RespRoleInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RespRoleInfo instance
         */
        public static create(properties?: ResponsePackage.IRespRoleInfo): ResponsePackage.RespRoleInfo;

        /**
         * Encodes the specified RespRoleInfo message. Does not implicitly {@link ResponsePackage.RespRoleInfo.verify|verify} messages.
         * @param message RespRoleInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ResponsePackage.IRespRoleInfo, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified RespRoleInfo message, length delimited. Does not implicitly {@link ResponsePackage.RespRoleInfo.verify|verify} messages.
         * @param message RespRoleInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ResponsePackage.IRespRoleInfo, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a RespRoleInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RespRoleInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): ResponsePackage.RespRoleInfo;

        /**
         * Decodes a RespRoleInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RespRoleInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): ResponsePackage.RespRoleInfo;

        /**
         * Verifies a RespRoleInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a RespBoolean. */
    interface IRespBoolean {

        /** RespBoolean value */
        value?: (boolean|null);
    }

    /** Represents a RespBoolean. */
    class RespBoolean implements IRespBoolean {

        /**
         * Constructs a new RespBoolean.
         * @param [properties] Properties to set
         */
        constructor(properties?: ResponsePackage.IRespBoolean);

        /** RespBoolean value. */
        public value: boolean;

        /**
         * Creates a new RespBoolean instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RespBoolean instance
         */
        public static create(properties?: ResponsePackage.IRespBoolean): ResponsePackage.RespBoolean;

        /**
         * Encodes the specified RespBoolean message. Does not implicitly {@link ResponsePackage.RespBoolean.verify|verify} messages.
         * @param message RespBoolean message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ResponsePackage.IRespBoolean, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified RespBoolean message, length delimited. Does not implicitly {@link ResponsePackage.RespBoolean.verify|verify} messages.
         * @param message RespBoolean message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ResponsePackage.IRespBoolean, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a RespBoolean message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RespBoolean
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): ResponsePackage.RespBoolean;

        /**
         * Decodes a RespBoolean message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RespBoolean
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): ResponsePackage.RespBoolean;

        /**
         * Verifies a RespBoolean message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a RespMatch. */
    interface IRespMatch {

        /** RespMatch roleMatchInfo */
        roleMatchInfo?: (ResponsePackage.IRespRoleMatchInfo|null);

        /** RespMatch roomRoles */
        roomRoles?: (ResponsePackage.IRespRoomRole[]|null);

        /** RespMatch joinRole */
        joinRole?: (ResponsePackage.IRespRoomRole|null);

        /** RespMatch respChampionship */
        respChampionship?: (ResponsePackage.IRespChampionship|null);
    }

    /** Represents a RespMatch. */
    class RespMatch implements IRespMatch {

        /**
         * Constructs a new RespMatch.
         * @param [properties] Properties to set
         */
        constructor(properties?: ResponsePackage.IRespMatch);

        /** RespMatch roleMatchInfo. */
        public roleMatchInfo?: (ResponsePackage.IRespRoleMatchInfo|null);

        /** RespMatch roomRoles. */
        public roomRoles: ResponsePackage.IRespRoomRole[];

        /** RespMatch joinRole. */
        public joinRole?: (ResponsePackage.IRespRoomRole|null);

        /** RespMatch respChampionship. */
        public respChampionship?: (ResponsePackage.IRespChampionship|null);

        /**
         * Creates a new RespMatch instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RespMatch instance
         */
        public static create(properties?: ResponsePackage.IRespMatch): ResponsePackage.RespMatch;

        /**
         * Encodes the specified RespMatch message. Does not implicitly {@link ResponsePackage.RespMatch.verify|verify} messages.
         * @param message RespMatch message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ResponsePackage.IRespMatch, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified RespMatch message, length delimited. Does not implicitly {@link ResponsePackage.RespMatch.verify|verify} messages.
         * @param message RespMatch message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ResponsePackage.IRespMatch, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a RespMatch message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RespMatch
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): ResponsePackage.RespMatch;

        /**
         * Decodes a RespMatch message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RespMatch
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): ResponsePackage.RespMatch;

        /**
         * Verifies a RespMatch message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a RespRoleMatchInfo. */
    interface IRespRoleMatchInfo {

        /** RespRoleMatchInfo fightCount */
        fightCount?: (number|null);

        /** RespRoleMatchInfo winCount */
        winCount?: (number|null);

        /** RespRoleMatchInfo ckFightCount */
        ckFightCount?: ({ [k: string]: number }|null);

        /** RespRoleMatchInfo winningStreak */
        winningStreak?: (number|null);

        /** RespRoleMatchInfo loseStreak */
        loseStreak?: (number|null);
    }

    /** Represents a RespRoleMatchInfo. */
    class RespRoleMatchInfo implements IRespRoleMatchInfo {

        /**
         * Constructs a new RespRoleMatchInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: ResponsePackage.IRespRoleMatchInfo);

        /** RespRoleMatchInfo fightCount. */
        public fightCount: number;

        /** RespRoleMatchInfo winCount. */
        public winCount: number;

        /** RespRoleMatchInfo ckFightCount. */
        public ckFightCount: { [k: string]: number };

        /** RespRoleMatchInfo winningStreak. */
        public winningStreak: number;

        /** RespRoleMatchInfo loseStreak. */
        public loseStreak: number;

        /**
         * Creates a new RespRoleMatchInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RespRoleMatchInfo instance
         */
        public static create(properties?: ResponsePackage.IRespRoleMatchInfo): ResponsePackage.RespRoleMatchInfo;

        /**
         * Encodes the specified RespRoleMatchInfo message. Does not implicitly {@link ResponsePackage.RespRoleMatchInfo.verify|verify} messages.
         * @param message RespRoleMatchInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ResponsePackage.IRespRoleMatchInfo, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified RespRoleMatchInfo message, length delimited. Does not implicitly {@link ResponsePackage.RespRoleMatchInfo.verify|verify} messages.
         * @param message RespRoleMatchInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ResponsePackage.IRespRoleMatchInfo, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a RespRoleMatchInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RespRoleMatchInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): ResponsePackage.RespRoleMatchInfo;

        /**
         * Decodes a RespRoleMatchInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RespRoleMatchInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): ResponsePackage.RespRoleMatchInfo;

        /**
         * Verifies a RespRoleMatchInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a RespRoomRole. */
    interface IRespRoomRole {

        /** RespRoomRole index */
        index?: (number|null);

        /** RespRoomRole roleBaseInfo */
        roleBaseInfo?: (ResponsePackage.IRespRoleBaseInfo|null);
    }

    /** Represents a RespRoomRole. */
    class RespRoomRole implements IRespRoomRole {

        /**
         * Constructs a new RespRoomRole.
         * @param [properties] Properties to set
         */
        constructor(properties?: ResponsePackage.IRespRoomRole);

        /** RespRoomRole index. */
        public index: number;

        /** RespRoomRole roleBaseInfo. */
        public roleBaseInfo?: (ResponsePackage.IRespRoleBaseInfo|null);

        /**
         * Creates a new RespRoomRole instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RespRoomRole instance
         */
        public static create(properties?: ResponsePackage.IRespRoomRole): ResponsePackage.RespRoomRole;

        /**
         * Encodes the specified RespRoomRole message. Does not implicitly {@link ResponsePackage.RespRoomRole.verify|verify} messages.
         * @param message RespRoomRole message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ResponsePackage.IRespRoomRole, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified RespRoomRole message, length delimited. Does not implicitly {@link ResponsePackage.RespRoomRole.verify|verify} messages.
         * @param message RespRoomRole message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ResponsePackage.IRespRoomRole, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a RespRoomRole message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RespRoomRole
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): ResponsePackage.RespRoomRole;

        /**
         * Decodes a RespRoomRole message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RespRoomRole
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): ResponsePackage.RespRoomRole;

        /**
         * Verifies a RespRoomRole message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a RespChampionship. */
    interface IRespChampionship {

        /** RespChampionship cid */
        cid?: (number|null);

        /** RespChampionship teamEnd */
        teamEnd?: (boolean|null);

        /** RespChampionship survivalEnd */
        survivalEnd?: (boolean|null);

        /** RespChampionship startTime */
        startTime?: (number|Long|null);
    }

    /** Represents a RespChampionship. */
    class RespChampionship implements IRespChampionship {

        /**
         * Constructs a new RespChampionship.
         * @param [properties] Properties to set
         */
        constructor(properties?: ResponsePackage.IRespChampionship);

        /** RespChampionship cid. */
        public cid: number;

        /** RespChampionship teamEnd. */
        public teamEnd: boolean;

        /** RespChampionship survivalEnd. */
        public survivalEnd: boolean;

        /** RespChampionship startTime. */
        public startTime: (number|Long);

        /**
         * Creates a new RespChampionship instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RespChampionship instance
         */
        public static create(properties?: ResponsePackage.IRespChampionship): ResponsePackage.RespChampionship;

        /**
         * Encodes the specified RespChampionship message. Does not implicitly {@link ResponsePackage.RespChampionship.verify|verify} messages.
         * @param message RespChampionship message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ResponsePackage.IRespChampionship, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified RespChampionship message, length delimited. Does not implicitly {@link ResponsePackage.RespChampionship.verify|verify} messages.
         * @param message RespChampionship message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ResponsePackage.IRespChampionship, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a RespChampionship message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RespChampionship
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): ResponsePackage.RespChampionship;

        /**
         * Decodes a RespChampionship message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RespChampionship
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): ResponsePackage.RespChampionship;

        /**
         * Verifies a RespChampionship message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a RespChat. */
    interface IRespChat {

        /** RespChat chatMsgs */
        chatMsgs?: (ResponsePackage.IRespChatMsg[]|null);

        /** RespChat chatMsg */
        chatMsg?: (ResponsePackage.IRespChatMsg|null);
    }

    /** Represents a RespChat. */
    class RespChat implements IRespChat {

        /**
         * Constructs a new RespChat.
         * @param [properties] Properties to set
         */
        constructor(properties?: ResponsePackage.IRespChat);

        /** RespChat chatMsgs. */
        public chatMsgs: ResponsePackage.IRespChatMsg[];

        /** RespChat chatMsg. */
        public chatMsg?: (ResponsePackage.IRespChatMsg|null);

        /**
         * Creates a new RespChat instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RespChat instance
         */
        public static create(properties?: ResponsePackage.IRespChat): ResponsePackage.RespChat;

        /**
         * Encodes the specified RespChat message. Does not implicitly {@link ResponsePackage.RespChat.verify|verify} messages.
         * @param message RespChat message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ResponsePackage.IRespChat, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified RespChat message, length delimited. Does not implicitly {@link ResponsePackage.RespChat.verify|verify} messages.
         * @param message RespChat message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ResponsePackage.IRespChat, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a RespChat message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RespChat
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): ResponsePackage.RespChat;

        /**
         * Decodes a RespChat message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RespChat
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): ResponsePackage.RespChat;

        /**
         * Verifies a RespChat message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a RespChatMsg. */
    interface IRespChatMsg {

        /** RespChatMsg chatType */
        chatType?: (number|null);

        /** RespChatMsg baseInfo */
        baseInfo?: (ResponsePackage.IRespRoleBaseInfo|null);

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
        constructor(properties?: ResponsePackage.IRespChatMsg);

        /** RespChatMsg chatType. */
        public chatType: number;

        /** RespChatMsg baseInfo. */
        public baseInfo?: (ResponsePackage.IRespRoleBaseInfo|null);

        /** RespChatMsg msg. */
        public msg: string;

        /** RespChatMsg time. */
        public time: (number|Long);

        /** RespChatMsg params. */
        public params: string[];

        /**
         * Creates a new RespChatMsg instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RespChatMsg instance
         */
        public static create(properties?: ResponsePackage.IRespChatMsg): ResponsePackage.RespChatMsg;

        /**
         * Encodes the specified RespChatMsg message. Does not implicitly {@link ResponsePackage.RespChatMsg.verify|verify} messages.
         * @param message RespChatMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ResponsePackage.IRespChatMsg, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified RespChatMsg message, length delimited. Does not implicitly {@link ResponsePackage.RespChatMsg.verify|verify} messages.
         * @param message RespChatMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ResponsePackage.IRespChatMsg, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a RespChatMsg message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RespChatMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): ResponsePackage.RespChatMsg;

        /**
         * Decodes a RespChatMsg message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RespChatMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): ResponsePackage.RespChatMsg;

        /**
         * Verifies a RespChatMsg message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }
}

/** Namespace RequestPackage. */
declare namespace RequestPackage {

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
        constructor(properties?: RequestPackage.IRqstInt);

        /** RqstInt value. */
        public value: number;

        /**
         * Creates a new RqstInt instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RqstInt instance
         */
        public static create(properties?: RequestPackage.IRqstInt): RequestPackage.RqstInt;

        /**
         * Encodes the specified RqstInt message. Does not implicitly {@link RequestPackage.RqstInt.verify|verify} messages.
         * @param message RqstInt message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: RequestPackage.IRqstInt, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified RqstInt message, length delimited. Does not implicitly {@link RequestPackage.RqstInt.verify|verify} messages.
         * @param message RqstInt message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: RequestPackage.IRqstInt, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a RqstInt message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RqstInt
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): RequestPackage.RqstInt;

        /**
         * Decodes a RqstInt message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RqstInt
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): RequestPackage.RqstInt;

        /**
         * Verifies a RqstInt message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
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
        constructor(properties?: RequestPackage.IRqstIntKeyIntValue);

        /** RqstIntKeyIntValue key. */
        public key: number;

        /** RqstIntKeyIntValue value. */
        public value: number;

        /**
         * Creates a new RqstIntKeyIntValue instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RqstIntKeyIntValue instance
         */
        public static create(properties?: RequestPackage.IRqstIntKeyIntValue): RequestPackage.RqstIntKeyIntValue;

        /**
         * Encodes the specified RqstIntKeyIntValue message. Does not implicitly {@link RequestPackage.RqstIntKeyIntValue.verify|verify} messages.
         * @param message RqstIntKeyIntValue message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: RequestPackage.IRqstIntKeyIntValue, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified RqstIntKeyIntValue message, length delimited. Does not implicitly {@link RequestPackage.RqstIntKeyIntValue.verify|verify} messages.
         * @param message RqstIntKeyIntValue message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: RequestPackage.IRqstIntKeyIntValue, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a RqstIntKeyIntValue message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RqstIntKeyIntValue
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): RequestPackage.RqstIntKeyIntValue;

        /**
         * Decodes a RqstIntKeyIntValue message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RqstIntKeyIntValue
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): RequestPackage.RqstIntKeyIntValue;

        /**
         * Verifies a RqstIntKeyIntValue message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
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
        constructor(properties?: RequestPackage.IRqstIntKeyStrValue);

        /** RqstIntKeyStrValue key. */
        public key: number;

        /** RqstIntKeyStrValue value. */
        public value: string;

        /**
         * Creates a new RqstIntKeyStrValue instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RqstIntKeyStrValue instance
         */
        public static create(properties?: RequestPackage.IRqstIntKeyStrValue): RequestPackage.RqstIntKeyStrValue;

        /**
         * Encodes the specified RqstIntKeyStrValue message. Does not implicitly {@link RequestPackage.RqstIntKeyStrValue.verify|verify} messages.
         * @param message RqstIntKeyStrValue message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: RequestPackage.IRqstIntKeyStrValue, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified RqstIntKeyStrValue message, length delimited. Does not implicitly {@link RequestPackage.RqstIntKeyStrValue.verify|verify} messages.
         * @param message RqstIntKeyStrValue message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: RequestPackage.IRqstIntKeyStrValue, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a RqstIntKeyStrValue message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RqstIntKeyStrValue
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): RequestPackage.RqstIntKeyStrValue;

        /**
         * Decodes a RqstIntKeyStrValue message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RqstIntKeyStrValue
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): RequestPackage.RqstIntKeyStrValue;

        /**
         * Verifies a RqstIntKeyStrValue message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
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
        constructor(properties?: RequestPackage.IRqstLoadRole);

        /** RqstLoadRole sid. */
        public sid: string;

        /** RqstLoadRole ip. */
        public ip: string;

        /**
         * Creates a new RqstLoadRole instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RqstLoadRole instance
         */
        public static create(properties?: RequestPackage.IRqstLoadRole): RequestPackage.RqstLoadRole;

        /**
         * Encodes the specified RqstLoadRole message. Does not implicitly {@link RequestPackage.RqstLoadRole.verify|verify} messages.
         * @param message RqstLoadRole message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: RequestPackage.IRqstLoadRole, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified RqstLoadRole message, length delimited. Does not implicitly {@link RequestPackage.RqstLoadRole.verify|verify} messages.
         * @param message RqstLoadRole message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: RequestPackage.IRqstLoadRole, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a RqstLoadRole message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RqstLoadRole
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): RequestPackage.RqstLoadRole;

        /**
         * Decodes a RqstLoadRole message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RqstLoadRole
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): RequestPackage.RqstLoadRole;

        /**
         * Verifies a RqstLoadRole message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
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
        constructor(properties?: RequestPackage.IRqstLong);

        /** RqstLong value. */
        public value: (number|Long);

        /**
         * Creates a new RqstLong instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RqstLong instance
         */
        public static create(properties?: RequestPackage.IRqstLong): RequestPackage.RqstLong;

        /**
         * Encodes the specified RqstLong message. Does not implicitly {@link RequestPackage.RqstLong.verify|verify} messages.
         * @param message RqstLong message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: RequestPackage.IRqstLong, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified RqstLong message, length delimited. Does not implicitly {@link RequestPackage.RqstLong.verify|verify} messages.
         * @param message RqstLong message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: RequestPackage.IRqstLong, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a RqstLong message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RqstLong
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): RequestPackage.RqstLong;

        /**
         * Decodes a RqstLong message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RqstLong
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): RequestPackage.RqstLong;

        /**
         * Verifies a RqstLong message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
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
        constructor(properties?: RequestPackage.IRqstStr);

        /** RqstStr value. */
        public value: string;

        /**
         * Creates a new RqstStr instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RqstStr instance
         */
        public static create(properties?: RequestPackage.IRqstStr): RequestPackage.RqstStr;

        /**
         * Encodes the specified RqstStr message. Does not implicitly {@link RequestPackage.RqstStr.verify|verify} messages.
         * @param message RqstStr message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: RequestPackage.IRqstStr, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified RqstStr message, length delimited. Does not implicitly {@link RequestPackage.RqstStr.verify|verify} messages.
         * @param message RqstStr message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: RequestPackage.IRqstStr, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a RqstStr message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RqstStr
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): RequestPackage.RqstStr;

        /**
         * Decodes a RqstStr message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RqstStr
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): RequestPackage.RqstStr;

        /**
         * Verifies a RqstStr message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
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
        constructor(properties?: RequestPackage.IRqstStrKeyStrValue);

        /** RqstStrKeyStrValue key. */
        public key: string;

        /** RqstStrKeyStrValue value. */
        public value: string;

        /**
         * Creates a new RqstStrKeyStrValue instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RqstStrKeyStrValue instance
         */
        public static create(properties?: RequestPackage.IRqstStrKeyStrValue): RequestPackage.RqstStrKeyStrValue;

        /**
         * Encodes the specified RqstStrKeyStrValue message. Does not implicitly {@link RequestPackage.RqstStrKeyStrValue.verify|verify} messages.
         * @param message RqstStrKeyStrValue message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: RequestPackage.IRqstStrKeyStrValue, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified RqstStrKeyStrValue message, length delimited. Does not implicitly {@link RequestPackage.RqstStrKeyStrValue.verify|verify} messages.
         * @param message RqstStrKeyStrValue message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: RequestPackage.IRqstStrKeyStrValue, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a RqstStrKeyStrValue message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RqstStrKeyStrValue
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): RequestPackage.RqstStrKeyStrValue;

        /**
         * Decodes a RqstStrKeyStrValue message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RqstStrKeyStrValue
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): RequestPackage.RqstStrKeyStrValue;

        /**
         * Verifies a RqstStrKeyStrValue message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
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
        constructor(properties?: RequestPackage.IRqstUpdateTeam);

        /** RqstUpdateTeam type. */
        public type: number;

        /** RqstUpdateTeam posHid. */
        public posHid: number[];

        /**
         * Creates a new RqstUpdateTeam instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RqstUpdateTeam instance
         */
        public static create(properties?: RequestPackage.IRqstUpdateTeam): RequestPackage.RqstUpdateTeam;

        /**
         * Encodes the specified RqstUpdateTeam message. Does not implicitly {@link RequestPackage.RqstUpdateTeam.verify|verify} messages.
         * @param message RqstUpdateTeam message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: RequestPackage.IRqstUpdateTeam, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified RqstUpdateTeam message, length delimited. Does not implicitly {@link RequestPackage.RqstUpdateTeam.verify|verify} messages.
         * @param message RqstUpdateTeam message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: RequestPackage.IRqstUpdateTeam, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a RqstUpdateTeam message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RqstUpdateTeam
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): RequestPackage.RqstUpdateTeam;

        /**
         * Decodes a RqstUpdateTeam message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RqstUpdateTeam
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): RequestPackage.RqstUpdateTeam;

        /**
         * Verifies a RqstUpdateTeam message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a RqstVerify. */
    interface IRqstVerify {

        /** RqstVerify uid */
        uid?: (string|null);

        /** RqstVerify sid */
        sid?: (string|null);

        /** RqstVerify access */
        access?: (string|null);

        /** RqstVerify ip */
        ip?: (string|null);
    }

    /** Represents a RqstVerify. */
    class RqstVerify implements IRqstVerify {

        /**
         * Constructs a new RqstVerify.
         * @param [properties] Properties to set
         */
        constructor(properties?: RequestPackage.IRqstVerify);

        /** RqstVerify uid. */
        public uid: string;

        /** RqstVerify sid. */
        public sid: string;

        /** RqstVerify access. */
        public access: string;

        /** RqstVerify ip. */
        public ip: string;

        /**
         * Creates a new RqstVerify instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RqstVerify instance
         */
        public static create(properties?: RequestPackage.IRqstVerify): RequestPackage.RqstVerify;

        /**
         * Encodes the specified RqstVerify message. Does not implicitly {@link RequestPackage.RqstVerify.verify|verify} messages.
         * @param message RqstVerify message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: RequestPackage.IRqstVerify, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified RqstVerify message, length delimited. Does not implicitly {@link RequestPackage.RqstVerify.verify|verify} messages.
         * @param message RqstVerify message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: RequestPackage.IRqstVerify, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a RqstVerify message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RqstVerify
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): RequestPackage.RqstVerify;

        /**
         * Decodes a RqstVerify message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RqstVerify
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): RequestPackage.RqstVerify;

        /**
         * Verifies a RqstVerify message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }
}
