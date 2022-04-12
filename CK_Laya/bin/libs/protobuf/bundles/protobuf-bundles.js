var $protobuf = window.protobuf;
$protobuf.roots.default=window;
// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.RespXY = (function() {

    /**
     * Namespace RespXY.
     * @exports RespXY
     * @namespace
     */
    var RespXY = {};

    RespXY.RespXY = (function() {

        /**
         * Properties of a RespXY.
         * @memberof RespXY
         * @interface IRespXY
         * @property {number|null} [x] RespXY x
         * @property {number|null} [y] RespXY y
         */

        /**
         * Constructs a new RespXY.
         * @memberof RespXY
         * @classdesc Represents a RespXY.
         * @implements IRespXY
         * @constructor
         * @param {RespXY.IRespXY=} [properties] Properties to set
         */
        function RespXY(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * RespXY x.
         * @member {number} x
         * @memberof RespXY.RespXY
         * @instance
         */
        RespXY.prototype.x = 0;

        /**
         * RespXY y.
         * @member {number} y
         * @memberof RespXY.RespXY
         * @instance
         */
        RespXY.prototype.y = 0;

        /**
         * Creates a new RespXY instance using the specified properties.
         * @function create
         * @memberof RespXY.RespXY
         * @static
         * @param {RespXY.IRespXY=} [properties] Properties to set
         * @returns {RespXY.RespXY} RespXY instance
         */
        RespXY.create = function create(properties) {
            return new RespXY(properties);
        };

        /**
         * Encodes the specified RespXY message. Does not implicitly {@link RespXY.RespXY.verify|verify} messages.
         * @function encode
         * @memberof RespXY.RespXY
         * @static
         * @param {RespXY.IRespXY} message RespXY message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RespXY.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.x != null && message.hasOwnProperty("x"))
                writer.uint32(/* id 1, wireType 0 =*/8).sint32(message.x);
            if (message.y != null && message.hasOwnProperty("y"))
                writer.uint32(/* id 2, wireType 0 =*/16).sint32(message.y);
            return writer;
        };

        /**
         * Encodes the specified RespXY message, length delimited. Does not implicitly {@link RespXY.RespXY.verify|verify} messages.
         * @function encodeDelimited
         * @memberof RespXY.RespXY
         * @static
         * @param {RespXY.IRespXY} message RespXY message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RespXY.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RespXY message from the specified reader or buffer.
         * @function decode
         * @memberof RespXY.RespXY
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {RespXY.RespXY} RespXY
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RespXY.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.RespXY.RespXY();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.x = reader.sint32();
                    break;
                case 2:
                    message.y = reader.sint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a RespXY message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof RespXY.RespXY
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {RespXY.RespXY} RespXY
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RespXY.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a RespXY message.
         * @function verify
         * @memberof RespXY.RespXY
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        RespXY.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.x != null && message.hasOwnProperty("x"))
                if (!$util.isInteger(message.x))
                    return "x: integer expected";
            if (message.y != null && message.hasOwnProperty("y"))
                if (!$util.isInteger(message.y))
                    return "y: integer expected";
            return null;
        };

        return RespXY;
    })();

    return RespXY;
})();