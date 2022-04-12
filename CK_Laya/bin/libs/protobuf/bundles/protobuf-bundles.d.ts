type Long = protobuf.Long;

/** Namespace RespXY. */
declare namespace RespXY {

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
        constructor(properties?: RespXY.IRespXY);

        /** RespXY x. */
        public x: number;

        /** RespXY y. */
        public y: number;

        /**
         * Creates a new RespXY instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RespXY instance
         */
        public static create(properties?: RespXY.IRespXY): RespXY.RespXY;

        /**
         * Encodes the specified RespXY message. Does not implicitly {@link RespXY.RespXY.verify|verify} messages.
         * @param message RespXY message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: RespXY.IRespXY, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified RespXY message, length delimited. Does not implicitly {@link RespXY.RespXY.verify|verify} messages.
         * @param message RespXY message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: RespXY.IRespXY, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a RespXY message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RespXY
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): RespXY.RespXY;

        /**
         * Decodes a RespXY message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RespXY
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): RespXY.RespXY;

        /**
         * Verifies a RespXY message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: [ 'object' ].<string, any>): (string|null);
    }
}
