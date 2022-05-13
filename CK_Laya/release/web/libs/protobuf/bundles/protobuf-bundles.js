var $protobuf = window.protobuf;
$protobuf.roots.default=window;
// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.ResponsePackage = (function() {

    /**
     * Namespace ResponsePackage.
     * @exports ResponsePackage
     * @namespace
     */
    var ResponsePackage = {};

    ResponsePackage.RespFully = (function() {

        /**
         * Properties of a RespFully.
         * @memberof ResponsePackage
         * @interface IRespFully
         * @property {ResponsePackage.IRespRole|null} [respRole] RespFully respRole
         * @property {ResponsePackage.IRespLong|null} [ping] RespFully ping
         * @property {ResponsePackage.IRespCk|null} [respCk] RespFully respCk
         * @property {ResponsePackage.IRespChat|null} [respChat] RespFully respChat
         * @property {ResponsePackage.IRespMail|null} [respMail] RespFully respMail
         * @property {ResponsePackage.IRespFight|null} [respFight] RespFully respFight
         * @property {ResponsePackage.IRespTeam|null} [respTeam] RespFully respTeam
         * @property {ResponsePackage.IRespMatch|null} [respMatch] RespFully respMatch
         * @property {ResponsePackage.IRespDepot|null} [respDepot] RespFully respDepot
         */

        /**
         * Constructs a new RespFully.
         * @memberof ResponsePackage
         * @classdesc Represents a RespFully.
         * @implements IRespFully
         * @constructor
         * @param {ResponsePackage.IRespFully=} [properties] Properties to set
         */
        function RespFully(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * RespFully respRole.
         * @member {ResponsePackage.IRespRole|null|undefined} respRole
         * @memberof ResponsePackage.RespFully
         * @instance
         */
        RespFully.prototype.respRole = null;

        /**
         * RespFully ping.
         * @member {ResponsePackage.IRespLong|null|undefined} ping
         * @memberof ResponsePackage.RespFully
         * @instance
         */
        RespFully.prototype.ping = null;

        /**
         * RespFully respCk.
         * @member {ResponsePackage.IRespCk|null|undefined} respCk
         * @memberof ResponsePackage.RespFully
         * @instance
         */
        RespFully.prototype.respCk = null;

        /**
         * RespFully respChat.
         * @member {ResponsePackage.IRespChat|null|undefined} respChat
         * @memberof ResponsePackage.RespFully
         * @instance
         */
        RespFully.prototype.respChat = null;

        /**
         * RespFully respMail.
         * @member {ResponsePackage.IRespMail|null|undefined} respMail
         * @memberof ResponsePackage.RespFully
         * @instance
         */
        RespFully.prototype.respMail = null;

        /**
         * RespFully respFight.
         * @member {ResponsePackage.IRespFight|null|undefined} respFight
         * @memberof ResponsePackage.RespFully
         * @instance
         */
        RespFully.prototype.respFight = null;

        /**
         * RespFully respTeam.
         * @member {ResponsePackage.IRespTeam|null|undefined} respTeam
         * @memberof ResponsePackage.RespFully
         * @instance
         */
        RespFully.prototype.respTeam = null;

        /**
         * RespFully respMatch.
         * @member {ResponsePackage.IRespMatch|null|undefined} respMatch
         * @memberof ResponsePackage.RespFully
         * @instance
         */
        RespFully.prototype.respMatch = null;

        /**
         * RespFully respDepot.
         * @member {ResponsePackage.IRespDepot|null|undefined} respDepot
         * @memberof ResponsePackage.RespFully
         * @instance
         */
        RespFully.prototype.respDepot = null;

        /**
         * Creates a new RespFully instance using the specified properties.
         * @function create
         * @memberof ResponsePackage.RespFully
         * @static
         * @param {ResponsePackage.IRespFully=} [properties] Properties to set
         * @returns {ResponsePackage.RespFully} RespFully instance
         */
        RespFully.create = function create(properties) {
            return new RespFully(properties);
        };

        /**
         * Encodes the specified RespFully message. Does not implicitly {@link ResponsePackage.RespFully.verify|verify} messages.
         * @function encode
         * @memberof ResponsePackage.RespFully
         * @static
         * @param {ResponsePackage.IRespFully} message RespFully message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RespFully.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.respRole != null && message.hasOwnProperty("respRole"))
                $root.ResponsePackage.RespRole.encode(message.respRole, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.ping != null && message.hasOwnProperty("ping"))
                $root.ResponsePackage.RespLong.encode(message.ping, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.respCk != null && message.hasOwnProperty("respCk"))
                $root.ResponsePackage.RespCk.encode(message.respCk, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.respChat != null && message.hasOwnProperty("respChat"))
                $root.ResponsePackage.RespChat.encode(message.respChat, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            if (message.respMail != null && message.hasOwnProperty("respMail"))
                $root.ResponsePackage.RespMail.encode(message.respMail, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
            if (message.respFight != null && message.hasOwnProperty("respFight"))
                $root.ResponsePackage.RespFight.encode(message.respFight, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
            if (message.respTeam != null && message.hasOwnProperty("respTeam"))
                $root.ResponsePackage.RespTeam.encode(message.respTeam, writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
            if (message.respMatch != null && message.hasOwnProperty("respMatch"))
                $root.ResponsePackage.RespMatch.encode(message.respMatch, writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
            if (message.respDepot != null && message.hasOwnProperty("respDepot"))
                $root.ResponsePackage.RespDepot.encode(message.respDepot, writer.uint32(/* id 9, wireType 2 =*/74).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified RespFully message, length delimited. Does not implicitly {@link ResponsePackage.RespFully.verify|verify} messages.
         * @function encodeDelimited
         * @memberof ResponsePackage.RespFully
         * @static
         * @param {ResponsePackage.IRespFully} message RespFully message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RespFully.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RespFully message from the specified reader or buffer.
         * @function decode
         * @memberof ResponsePackage.RespFully
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {ResponsePackage.RespFully} RespFully
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RespFully.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ResponsePackage.RespFully();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.respRole = $root.ResponsePackage.RespRole.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.ping = $root.ResponsePackage.RespLong.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.respCk = $root.ResponsePackage.RespCk.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.respChat = $root.ResponsePackage.RespChat.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.respMail = $root.ResponsePackage.RespMail.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.respFight = $root.ResponsePackage.RespFight.decode(reader, reader.uint32());
                    break;
                case 7:
                    message.respTeam = $root.ResponsePackage.RespTeam.decode(reader, reader.uint32());
                    break;
                case 8:
                    message.respMatch = $root.ResponsePackage.RespMatch.decode(reader, reader.uint32());
                    break;
                case 9:
                    message.respDepot = $root.ResponsePackage.RespDepot.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a RespFully message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof ResponsePackage.RespFully
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {ResponsePackage.RespFully} RespFully
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RespFully.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a RespFully message.
         * @function verify
         * @memberof ResponsePackage.RespFully
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        RespFully.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.respRole != null && message.hasOwnProperty("respRole")) {
                var error = $root.ResponsePackage.RespRole.verify(message.respRole);
                if (error)
                    return "respRole." + error;
            }
            if (message.ping != null && message.hasOwnProperty("ping")) {
                var error = $root.ResponsePackage.RespLong.verify(message.ping);
                if (error)
                    return "ping." + error;
            }
            if (message.respCk != null && message.hasOwnProperty("respCk")) {
                var error = $root.ResponsePackage.RespCk.verify(message.respCk);
                if (error)
                    return "respCk." + error;
            }
            if (message.respChat != null && message.hasOwnProperty("respChat")) {
                var error = $root.ResponsePackage.RespChat.verify(message.respChat);
                if (error)
                    return "respChat." + error;
            }
            if (message.respMail != null && message.hasOwnProperty("respMail")) {
                var error = $root.ResponsePackage.RespMail.verify(message.respMail);
                if (error)
                    return "respMail." + error;
            }
            if (message.respFight != null && message.hasOwnProperty("respFight")) {
                var error = $root.ResponsePackage.RespFight.verify(message.respFight);
                if (error)
                    return "respFight." + error;
            }
            if (message.respTeam != null && message.hasOwnProperty("respTeam")) {
                var error = $root.ResponsePackage.RespTeam.verify(message.respTeam);
                if (error)
                    return "respTeam." + error;
            }
            if (message.respMatch != null && message.hasOwnProperty("respMatch")) {
                var error = $root.ResponsePackage.RespMatch.verify(message.respMatch);
                if (error)
                    return "respMatch." + error;
            }
            if (message.respDepot != null && message.hasOwnProperty("respDepot")) {
                var error = $root.ResponsePackage.RespDepot.verify(message.respDepot);
                if (error)
                    return "respDepot." + error;
            }
            return null;
        };

        return RespFully;
    })();

    ResponsePackage.RespFight = (function() {

        /**
         * Properties of a RespFight.
         * @memberof ResponsePackage
         * @interface IRespFight
         * @property {ResponsePackage.IRespFightResult|null} [fightResult] RespFight fightResult
         */

        /**
         * Constructs a new RespFight.
         * @memberof ResponsePackage
         * @classdesc Represents a RespFight.
         * @implements IRespFight
         * @constructor
         * @param {ResponsePackage.IRespFight=} [properties] Properties to set
         */
        function RespFight(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * RespFight fightResult.
         * @member {ResponsePackage.IRespFightResult|null|undefined} fightResult
         * @memberof ResponsePackage.RespFight
         * @instance
         */
        RespFight.prototype.fightResult = null;

        /**
         * Creates a new RespFight instance using the specified properties.
         * @function create
         * @memberof ResponsePackage.RespFight
         * @static
         * @param {ResponsePackage.IRespFight=} [properties] Properties to set
         * @returns {ResponsePackage.RespFight} RespFight instance
         */
        RespFight.create = function create(properties) {
            return new RespFight(properties);
        };

        /**
         * Encodes the specified RespFight message. Does not implicitly {@link ResponsePackage.RespFight.verify|verify} messages.
         * @function encode
         * @memberof ResponsePackage.RespFight
         * @static
         * @param {ResponsePackage.IRespFight} message RespFight message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RespFight.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.fightResult != null && message.hasOwnProperty("fightResult"))
                $root.ResponsePackage.RespFightResult.encode(message.fightResult, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified RespFight message, length delimited. Does not implicitly {@link ResponsePackage.RespFight.verify|verify} messages.
         * @function encodeDelimited
         * @memberof ResponsePackage.RespFight
         * @static
         * @param {ResponsePackage.IRespFight} message RespFight message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RespFight.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RespFight message from the specified reader or buffer.
         * @function decode
         * @memberof ResponsePackage.RespFight
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {ResponsePackage.RespFight} RespFight
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RespFight.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ResponsePackage.RespFight();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.fightResult = $root.ResponsePackage.RespFightResult.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a RespFight message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof ResponsePackage.RespFight
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {ResponsePackage.RespFight} RespFight
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RespFight.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a RespFight message.
         * @function verify
         * @memberof ResponsePackage.RespFight
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        RespFight.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.fightResult != null && message.hasOwnProperty("fightResult")) {
                var error = $root.ResponsePackage.RespFightResult.verify(message.fightResult);
                if (error)
                    return "fightResult." + error;
            }
            return null;
        };

        return RespFight;
    })();

    ResponsePackage.RespFightResult = (function() {

        /**
         * Properties of a RespFightResult.
         * @memberof ResponsePackage
         * @interface IRespFightResult
         * @property {number|null} [matchType] RespFightResult matchType
         * @property {number|null} [battleType] RespFightResult battleType
         * @property {Array.<ResponsePackage.IRespBattler>|null} [battlerList] RespFightResult battlerList
         * @property {Array.<ResponsePackage.IRespFrame>|null} [frameList] RespFightResult frameList
         * @property {ResponsePackage.IRespFightClearing|null} [fightClearing] RespFightResult fightClearing
         */

        /**
         * Constructs a new RespFightResult.
         * @memberof ResponsePackage
         * @classdesc Represents a RespFightResult.
         * @implements IRespFightResult
         * @constructor
         * @param {ResponsePackage.IRespFightResult=} [properties] Properties to set
         */
        function RespFightResult(properties) {
            this.battlerList = [];
            this.frameList = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * RespFightResult matchType.
         * @member {number} matchType
         * @memberof ResponsePackage.RespFightResult
         * @instance
         */
        RespFightResult.prototype.matchType = 0;

        /**
         * RespFightResult battleType.
         * @member {number} battleType
         * @memberof ResponsePackage.RespFightResult
         * @instance
         */
        RespFightResult.prototype.battleType = 0;

        /**
         * RespFightResult battlerList.
         * @member {Array.<ResponsePackage.IRespBattler>} battlerList
         * @memberof ResponsePackage.RespFightResult
         * @instance
         */
        RespFightResult.prototype.battlerList = $util.emptyArray;

        /**
         * RespFightResult frameList.
         * @member {Array.<ResponsePackage.IRespFrame>} frameList
         * @memberof ResponsePackage.RespFightResult
         * @instance
         */
        RespFightResult.prototype.frameList = $util.emptyArray;

        /**
         * RespFightResult fightClearing.
         * @member {ResponsePackage.IRespFightClearing|null|undefined} fightClearing
         * @memberof ResponsePackage.RespFightResult
         * @instance
         */
        RespFightResult.prototype.fightClearing = null;

        /**
         * Creates a new RespFightResult instance using the specified properties.
         * @function create
         * @memberof ResponsePackage.RespFightResult
         * @static
         * @param {ResponsePackage.IRespFightResult=} [properties] Properties to set
         * @returns {ResponsePackage.RespFightResult} RespFightResult instance
         */
        RespFightResult.create = function create(properties) {
            return new RespFightResult(properties);
        };

        /**
         * Encodes the specified RespFightResult message. Does not implicitly {@link ResponsePackage.RespFightResult.verify|verify} messages.
         * @function encode
         * @memberof ResponsePackage.RespFightResult
         * @static
         * @param {ResponsePackage.IRespFightResult} message RespFightResult message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RespFightResult.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.matchType != null && message.hasOwnProperty("matchType"))
                writer.uint32(/* id 1, wireType 0 =*/8).sint32(message.matchType);
            if (message.battleType != null && message.hasOwnProperty("battleType"))
                writer.uint32(/* id 2, wireType 0 =*/16).sint32(message.battleType);
            if (message.battlerList != null && message.battlerList.length)
                for (var i = 0; i < message.battlerList.length; ++i)
                    $root.ResponsePackage.RespBattler.encode(message.battlerList[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.frameList != null && message.frameList.length)
                for (var i = 0; i < message.frameList.length; ++i)
                    $root.ResponsePackage.RespFrame.encode(message.frameList[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            if (message.fightClearing != null && message.hasOwnProperty("fightClearing"))
                $root.ResponsePackage.RespFightClearing.encode(message.fightClearing, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified RespFightResult message, length delimited. Does not implicitly {@link ResponsePackage.RespFightResult.verify|verify} messages.
         * @function encodeDelimited
         * @memberof ResponsePackage.RespFightResult
         * @static
         * @param {ResponsePackage.IRespFightResult} message RespFightResult message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RespFightResult.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RespFightResult message from the specified reader or buffer.
         * @function decode
         * @memberof ResponsePackage.RespFightResult
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {ResponsePackage.RespFightResult} RespFightResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RespFightResult.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ResponsePackage.RespFightResult();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.matchType = reader.sint32();
                    break;
                case 2:
                    message.battleType = reader.sint32();
                    break;
                case 3:
                    if (!(message.battlerList && message.battlerList.length))
                        message.battlerList = [];
                    message.battlerList.push($root.ResponsePackage.RespBattler.decode(reader, reader.uint32()));
                    break;
                case 4:
                    if (!(message.frameList && message.frameList.length))
                        message.frameList = [];
                    message.frameList.push($root.ResponsePackage.RespFrame.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.fightClearing = $root.ResponsePackage.RespFightClearing.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a RespFightResult message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof ResponsePackage.RespFightResult
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {ResponsePackage.RespFightResult} RespFightResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RespFightResult.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a RespFightResult message.
         * @function verify
         * @memberof ResponsePackage.RespFightResult
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        RespFightResult.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.matchType != null && message.hasOwnProperty("matchType"))
                if (!$util.isInteger(message.matchType))
                    return "matchType: integer expected";
            if (message.battleType != null && message.hasOwnProperty("battleType"))
                if (!$util.isInteger(message.battleType))
                    return "battleType: integer expected";
            if (message.battlerList != null && message.hasOwnProperty("battlerList")) {
                if (!Array.isArray(message.battlerList))
                    return "battlerList: array expected";
                for (var i = 0; i < message.battlerList.length; ++i) {
                    var error = $root.ResponsePackage.RespBattler.verify(message.battlerList[i]);
                    if (error)
                        return "battlerList." + error;
                }
            }
            if (message.frameList != null && message.hasOwnProperty("frameList")) {
                if (!Array.isArray(message.frameList))
                    return "frameList: array expected";
                for (var i = 0; i < message.frameList.length; ++i) {
                    var error = $root.ResponsePackage.RespFrame.verify(message.frameList[i]);
                    if (error)
                        return "frameList." + error;
                }
            }
            if (message.fightClearing != null && message.hasOwnProperty("fightClearing")) {
                var error = $root.ResponsePackage.RespFightClearing.verify(message.fightClearing);
                if (error)
                    return "fightClearing." + error;
            }
            return null;
        };

        return RespFightResult;
    })();

    ResponsePackage.RespFrame = (function() {

        /**
         * Properties of a RespFrame.
         * @memberof ResponsePackage
         * @interface IRespFrame
         * @property {number|null} [currFrame] RespFrame currFrame
         * @property {Array.<ResponsePackage.IRespOtherEntityFrameInfo>|null} [otherEntityFrameList] RespFrame otherEntityFrameList
         * @property {Array.<ResponsePackage.IRespCkFrameInfo>|null} [ckFrameInfoList] RespFrame ckFrameInfoList
         */

        /**
         * Constructs a new RespFrame.
         * @memberof ResponsePackage
         * @classdesc Represents a RespFrame.
         * @implements IRespFrame
         * @constructor
         * @param {ResponsePackage.IRespFrame=} [properties] Properties to set
         */
        function RespFrame(properties) {
            this.otherEntityFrameList = [];
            this.ckFrameInfoList = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * RespFrame currFrame.
         * @member {number} currFrame
         * @memberof ResponsePackage.RespFrame
         * @instance
         */
        RespFrame.prototype.currFrame = 0;

        /**
         * RespFrame otherEntityFrameList.
         * @member {Array.<ResponsePackage.IRespOtherEntityFrameInfo>} otherEntityFrameList
         * @memberof ResponsePackage.RespFrame
         * @instance
         */
        RespFrame.prototype.otherEntityFrameList = $util.emptyArray;

        /**
         * RespFrame ckFrameInfoList.
         * @member {Array.<ResponsePackage.IRespCkFrameInfo>} ckFrameInfoList
         * @memberof ResponsePackage.RespFrame
         * @instance
         */
        RespFrame.prototype.ckFrameInfoList = $util.emptyArray;

        /**
         * Creates a new RespFrame instance using the specified properties.
         * @function create
         * @memberof ResponsePackage.RespFrame
         * @static
         * @param {ResponsePackage.IRespFrame=} [properties] Properties to set
         * @returns {ResponsePackage.RespFrame} RespFrame instance
         */
        RespFrame.create = function create(properties) {
            return new RespFrame(properties);
        };

        /**
         * Encodes the specified RespFrame message. Does not implicitly {@link ResponsePackage.RespFrame.verify|verify} messages.
         * @function encode
         * @memberof ResponsePackage.RespFrame
         * @static
         * @param {ResponsePackage.IRespFrame} message RespFrame message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RespFrame.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.currFrame != null && message.hasOwnProperty("currFrame"))
                writer.uint32(/* id 1, wireType 0 =*/8).sint32(message.currFrame);
            if (message.otherEntityFrameList != null && message.otherEntityFrameList.length)
                for (var i = 0; i < message.otherEntityFrameList.length; ++i)
                    $root.ResponsePackage.RespOtherEntityFrameInfo.encode(message.otherEntityFrameList[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.ckFrameInfoList != null && message.ckFrameInfoList.length)
                for (var i = 0; i < message.ckFrameInfoList.length; ++i)
                    $root.ResponsePackage.RespCkFrameInfo.encode(message.ckFrameInfoList[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified RespFrame message, length delimited. Does not implicitly {@link ResponsePackage.RespFrame.verify|verify} messages.
         * @function encodeDelimited
         * @memberof ResponsePackage.RespFrame
         * @static
         * @param {ResponsePackage.IRespFrame} message RespFrame message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RespFrame.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RespFrame message from the specified reader or buffer.
         * @function decode
         * @memberof ResponsePackage.RespFrame
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {ResponsePackage.RespFrame} RespFrame
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RespFrame.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ResponsePackage.RespFrame();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.currFrame = reader.sint32();
                    break;
                case 2:
                    if (!(message.otherEntityFrameList && message.otherEntityFrameList.length))
                        message.otherEntityFrameList = [];
                    message.otherEntityFrameList.push($root.ResponsePackage.RespOtherEntityFrameInfo.decode(reader, reader.uint32()));
                    break;
                case 3:
                    if (!(message.ckFrameInfoList && message.ckFrameInfoList.length))
                        message.ckFrameInfoList = [];
                    message.ckFrameInfoList.push($root.ResponsePackage.RespCkFrameInfo.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a RespFrame message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof ResponsePackage.RespFrame
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {ResponsePackage.RespFrame} RespFrame
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RespFrame.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a RespFrame message.
         * @function verify
         * @memberof ResponsePackage.RespFrame
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        RespFrame.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.currFrame != null && message.hasOwnProperty("currFrame"))
                if (!$util.isInteger(message.currFrame))
                    return "currFrame: integer expected";
            if (message.otherEntityFrameList != null && message.hasOwnProperty("otherEntityFrameList")) {
                if (!Array.isArray(message.otherEntityFrameList))
                    return "otherEntityFrameList: array expected";
                for (var i = 0; i < message.otherEntityFrameList.length; ++i) {
                    var error = $root.ResponsePackage.RespOtherEntityFrameInfo.verify(message.otherEntityFrameList[i]);
                    if (error)
                        return "otherEntityFrameList." + error;
                }
            }
            if (message.ckFrameInfoList != null && message.hasOwnProperty("ckFrameInfoList")) {
                if (!Array.isArray(message.ckFrameInfoList))
                    return "ckFrameInfoList: array expected";
                for (var i = 0; i < message.ckFrameInfoList.length; ++i) {
                    var error = $root.ResponsePackage.RespCkFrameInfo.verify(message.ckFrameInfoList[i]);
                    if (error)
                        return "ckFrameInfoList." + error;
                }
            }
            return null;
        };

        return RespFrame;
    })();

    ResponsePackage.RespOtherEntityFrameInfo = (function() {

        /**
         * Properties of a RespOtherEntityFrameInfo.
         * @memberof ResponsePackage
         * @interface IRespOtherEntityFrameInfo
         * @property {number|null} [type] RespOtherEntityFrameInfo type
         * @property {ResponsePackage.IRespXY|null} [posXY] RespOtherEntityFrameInfo posXY
         * @property {ResponsePackage.IRespXY|null} [faceXY] RespOtherEntityFrameInfo faceXY
         * @property {boolean|null} [isCreate] RespOtherEntityFrameInfo isCreate
         * @property {boolean|null} [isDestroy] RespOtherEntityFrameInfo isDestroy
         */

        /**
         * Constructs a new RespOtherEntityFrameInfo.
         * @memberof ResponsePackage
         * @classdesc Represents a RespOtherEntityFrameInfo.
         * @implements IRespOtherEntityFrameInfo
         * @constructor
         * @param {ResponsePackage.IRespOtherEntityFrameInfo=} [properties] Properties to set
         */
        function RespOtherEntityFrameInfo(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * RespOtherEntityFrameInfo type.
         * @member {number} type
         * @memberof ResponsePackage.RespOtherEntityFrameInfo
         * @instance
         */
        RespOtherEntityFrameInfo.prototype.type = 0;

        /**
         * RespOtherEntityFrameInfo posXY.
         * @member {ResponsePackage.IRespXY|null|undefined} posXY
         * @memberof ResponsePackage.RespOtherEntityFrameInfo
         * @instance
         */
        RespOtherEntityFrameInfo.prototype.posXY = null;

        /**
         * RespOtherEntityFrameInfo faceXY.
         * @member {ResponsePackage.IRespXY|null|undefined} faceXY
         * @memberof ResponsePackage.RespOtherEntityFrameInfo
         * @instance
         */
        RespOtherEntityFrameInfo.prototype.faceXY = null;

        /**
         * RespOtherEntityFrameInfo isCreate.
         * @member {boolean} isCreate
         * @memberof ResponsePackage.RespOtherEntityFrameInfo
         * @instance
         */
        RespOtherEntityFrameInfo.prototype.isCreate = false;

        /**
         * RespOtherEntityFrameInfo isDestroy.
         * @member {boolean} isDestroy
         * @memberof ResponsePackage.RespOtherEntityFrameInfo
         * @instance
         */
        RespOtherEntityFrameInfo.prototype.isDestroy = false;

        /**
         * Creates a new RespOtherEntityFrameInfo instance using the specified properties.
         * @function create
         * @memberof ResponsePackage.RespOtherEntityFrameInfo
         * @static
         * @param {ResponsePackage.IRespOtherEntityFrameInfo=} [properties] Properties to set
         * @returns {ResponsePackage.RespOtherEntityFrameInfo} RespOtherEntityFrameInfo instance
         */
        RespOtherEntityFrameInfo.create = function create(properties) {
            return new RespOtherEntityFrameInfo(properties);
        };

        /**
         * Encodes the specified RespOtherEntityFrameInfo message. Does not implicitly {@link ResponsePackage.RespOtherEntityFrameInfo.verify|verify} messages.
         * @function encode
         * @memberof ResponsePackage.RespOtherEntityFrameInfo
         * @static
         * @param {ResponsePackage.IRespOtherEntityFrameInfo} message RespOtherEntityFrameInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RespOtherEntityFrameInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.type != null && message.hasOwnProperty("type"))
                writer.uint32(/* id 1, wireType 0 =*/8).sint32(message.type);
            if (message.posXY != null && message.hasOwnProperty("posXY"))
                $root.ResponsePackage.RespXY.encode(message.posXY, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.faceXY != null && message.hasOwnProperty("faceXY"))
                $root.ResponsePackage.RespXY.encode(message.faceXY, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.isCreate != null && message.hasOwnProperty("isCreate"))
                writer.uint32(/* id 4, wireType 0 =*/32).bool(message.isCreate);
            if (message.isDestroy != null && message.hasOwnProperty("isDestroy"))
                writer.uint32(/* id 5, wireType 0 =*/40).bool(message.isDestroy);
            return writer;
        };

        /**
         * Encodes the specified RespOtherEntityFrameInfo message, length delimited. Does not implicitly {@link ResponsePackage.RespOtherEntityFrameInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof ResponsePackage.RespOtherEntityFrameInfo
         * @static
         * @param {ResponsePackage.IRespOtherEntityFrameInfo} message RespOtherEntityFrameInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RespOtherEntityFrameInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RespOtherEntityFrameInfo message from the specified reader or buffer.
         * @function decode
         * @memberof ResponsePackage.RespOtherEntityFrameInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {ResponsePackage.RespOtherEntityFrameInfo} RespOtherEntityFrameInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RespOtherEntityFrameInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ResponsePackage.RespOtherEntityFrameInfo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.type = reader.sint32();
                    break;
                case 2:
                    message.posXY = $root.ResponsePackage.RespXY.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.faceXY = $root.ResponsePackage.RespXY.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.isCreate = reader.bool();
                    break;
                case 5:
                    message.isDestroy = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a RespOtherEntityFrameInfo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof ResponsePackage.RespOtherEntityFrameInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {ResponsePackage.RespOtherEntityFrameInfo} RespOtherEntityFrameInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RespOtherEntityFrameInfo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a RespOtherEntityFrameInfo message.
         * @function verify
         * @memberof ResponsePackage.RespOtherEntityFrameInfo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        RespOtherEntityFrameInfo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.type != null && message.hasOwnProperty("type"))
                if (!$util.isInteger(message.type))
                    return "type: integer expected";
            if (message.posXY != null && message.hasOwnProperty("posXY")) {
                var error = $root.ResponsePackage.RespXY.verify(message.posXY);
                if (error)
                    return "posXY." + error;
            }
            if (message.faceXY != null && message.hasOwnProperty("faceXY")) {
                var error = $root.ResponsePackage.RespXY.verify(message.faceXY);
                if (error)
                    return "faceXY." + error;
            }
            if (message.isCreate != null && message.hasOwnProperty("isCreate"))
                if (typeof message.isCreate !== "boolean")
                    return "isCreate: boolean expected";
            if (message.isDestroy != null && message.hasOwnProperty("isDestroy"))
                if (typeof message.isDestroy !== "boolean")
                    return "isDestroy: boolean expected";
            return null;
        };

        return RespOtherEntityFrameInfo;
    })();

    ResponsePackage.RespXY = (function() {

        /**
         * Properties of a RespXY.
         * @memberof ResponsePackage
         * @interface IRespXY
         * @property {number|null} [x] RespXY x
         * @property {number|null} [y] RespXY y
         */

        /**
         * Constructs a new RespXY.
         * @memberof ResponsePackage
         * @classdesc Represents a RespXY.
         * @implements IRespXY
         * @constructor
         * @param {ResponsePackage.IRespXY=} [properties] Properties to set
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
         * @memberof ResponsePackage.RespXY
         * @instance
         */
        RespXY.prototype.x = 0;

        /**
         * RespXY y.
         * @member {number} y
         * @memberof ResponsePackage.RespXY
         * @instance
         */
        RespXY.prototype.y = 0;

        /**
         * Creates a new RespXY instance using the specified properties.
         * @function create
         * @memberof ResponsePackage.RespXY
         * @static
         * @param {ResponsePackage.IRespXY=} [properties] Properties to set
         * @returns {ResponsePackage.RespXY} RespXY instance
         */
        RespXY.create = function create(properties) {
            return new RespXY(properties);
        };

        /**
         * Encodes the specified RespXY message. Does not implicitly {@link ResponsePackage.RespXY.verify|verify} messages.
         * @function encode
         * @memberof ResponsePackage.RespXY
         * @static
         * @param {ResponsePackage.IRespXY} message RespXY message or plain object to encode
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
         * Encodes the specified RespXY message, length delimited. Does not implicitly {@link ResponsePackage.RespXY.verify|verify} messages.
         * @function encodeDelimited
         * @memberof ResponsePackage.RespXY
         * @static
         * @param {ResponsePackage.IRespXY} message RespXY message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RespXY.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RespXY message from the specified reader or buffer.
         * @function decode
         * @memberof ResponsePackage.RespXY
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {ResponsePackage.RespXY} RespXY
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RespXY.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ResponsePackage.RespXY();
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
         * @memberof ResponsePackage.RespXY
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {ResponsePackage.RespXY} RespXY
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
         * @memberof ResponsePackage.RespXY
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

    ResponsePackage.RespCkFrameInfo = (function() {

        /**
         * Properties of a RespCkFrameInfo.
         * @memberof ResponsePackage
         * @interface IRespCkFrameInfo
         * @property {number|null} [id] RespCkFrameInfo id
         * @property {number|null} [hp] RespCkFrameInfo hp
         * @property {ResponsePackage.IRespXY|null} [posXY] RespCkFrameInfo posXY
         * @property {ResponsePackage.IRespXY|null} [faceXY] RespCkFrameInfo faceXY
         * @property {boolean|null} [isAtk] RespCkFrameInfo isAtk
         * @property {ResponsePackage.IRespHit|null} [hit] RespCkFrameInfo hit
         * @property {boolean|null} [isDead] RespCkFrameInfo isDead
         */

        /**
         * Constructs a new RespCkFrameInfo.
         * @memberof ResponsePackage
         * @classdesc Represents a RespCkFrameInfo.
         * @implements IRespCkFrameInfo
         * @constructor
         * @param {ResponsePackage.IRespCkFrameInfo=} [properties] Properties to set
         */
        function RespCkFrameInfo(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * RespCkFrameInfo id.
         * @member {number} id
         * @memberof ResponsePackage.RespCkFrameInfo
         * @instance
         */
        RespCkFrameInfo.prototype.id = 0;

        /**
         * RespCkFrameInfo hp.
         * @member {number} hp
         * @memberof ResponsePackage.RespCkFrameInfo
         * @instance
         */
        RespCkFrameInfo.prototype.hp = 0;

        /**
         * RespCkFrameInfo posXY.
         * @member {ResponsePackage.IRespXY|null|undefined} posXY
         * @memberof ResponsePackage.RespCkFrameInfo
         * @instance
         */
        RespCkFrameInfo.prototype.posXY = null;

        /**
         * RespCkFrameInfo faceXY.
         * @member {ResponsePackage.IRespXY|null|undefined} faceXY
         * @memberof ResponsePackage.RespCkFrameInfo
         * @instance
         */
        RespCkFrameInfo.prototype.faceXY = null;

        /**
         * RespCkFrameInfo isAtk.
         * @member {boolean} isAtk
         * @memberof ResponsePackage.RespCkFrameInfo
         * @instance
         */
        RespCkFrameInfo.prototype.isAtk = false;

        /**
         * RespCkFrameInfo hit.
         * @member {ResponsePackage.IRespHit|null|undefined} hit
         * @memberof ResponsePackage.RespCkFrameInfo
         * @instance
         */
        RespCkFrameInfo.prototype.hit = null;

        /**
         * RespCkFrameInfo isDead.
         * @member {boolean} isDead
         * @memberof ResponsePackage.RespCkFrameInfo
         * @instance
         */
        RespCkFrameInfo.prototype.isDead = false;

        /**
         * Creates a new RespCkFrameInfo instance using the specified properties.
         * @function create
         * @memberof ResponsePackage.RespCkFrameInfo
         * @static
         * @param {ResponsePackage.IRespCkFrameInfo=} [properties] Properties to set
         * @returns {ResponsePackage.RespCkFrameInfo} RespCkFrameInfo instance
         */
        RespCkFrameInfo.create = function create(properties) {
            return new RespCkFrameInfo(properties);
        };

        /**
         * Encodes the specified RespCkFrameInfo message. Does not implicitly {@link ResponsePackage.RespCkFrameInfo.verify|verify} messages.
         * @function encode
         * @memberof ResponsePackage.RespCkFrameInfo
         * @static
         * @param {ResponsePackage.IRespCkFrameInfo} message RespCkFrameInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RespCkFrameInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && message.hasOwnProperty("id"))
                writer.uint32(/* id 1, wireType 0 =*/8).sint32(message.id);
            if (message.hp != null && message.hasOwnProperty("hp"))
                writer.uint32(/* id 2, wireType 0 =*/16).sint32(message.hp);
            if (message.posXY != null && message.hasOwnProperty("posXY"))
                $root.ResponsePackage.RespXY.encode(message.posXY, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.faceXY != null && message.hasOwnProperty("faceXY"))
                $root.ResponsePackage.RespXY.encode(message.faceXY, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            if (message.isAtk != null && message.hasOwnProperty("isAtk"))
                writer.uint32(/* id 5, wireType 0 =*/40).bool(message.isAtk);
            if (message.hit != null && message.hasOwnProperty("hit"))
                $root.ResponsePackage.RespHit.encode(message.hit, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
            if (message.isDead != null && message.hasOwnProperty("isDead"))
                writer.uint32(/* id 7, wireType 0 =*/56).bool(message.isDead);
            return writer;
        };

        /**
         * Encodes the specified RespCkFrameInfo message, length delimited. Does not implicitly {@link ResponsePackage.RespCkFrameInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof ResponsePackage.RespCkFrameInfo
         * @static
         * @param {ResponsePackage.IRespCkFrameInfo} message RespCkFrameInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RespCkFrameInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RespCkFrameInfo message from the specified reader or buffer.
         * @function decode
         * @memberof ResponsePackage.RespCkFrameInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {ResponsePackage.RespCkFrameInfo} RespCkFrameInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RespCkFrameInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ResponsePackage.RespCkFrameInfo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.id = reader.sint32();
                    break;
                case 2:
                    message.hp = reader.sint32();
                    break;
                case 3:
                    message.posXY = $root.ResponsePackage.RespXY.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.faceXY = $root.ResponsePackage.RespXY.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.isAtk = reader.bool();
                    break;
                case 6:
                    message.hit = $root.ResponsePackage.RespHit.decode(reader, reader.uint32());
                    break;
                case 7:
                    message.isDead = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a RespCkFrameInfo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof ResponsePackage.RespCkFrameInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {ResponsePackage.RespCkFrameInfo} RespCkFrameInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RespCkFrameInfo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a RespCkFrameInfo message.
         * @function verify
         * @memberof ResponsePackage.RespCkFrameInfo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        RespCkFrameInfo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isInteger(message.id))
                    return "id: integer expected";
            if (message.hp != null && message.hasOwnProperty("hp"))
                if (!$util.isInteger(message.hp))
                    return "hp: integer expected";
            if (message.posXY != null && message.hasOwnProperty("posXY")) {
                var error = $root.ResponsePackage.RespXY.verify(message.posXY);
                if (error)
                    return "posXY." + error;
            }
            if (message.faceXY != null && message.hasOwnProperty("faceXY")) {
                var error = $root.ResponsePackage.RespXY.verify(message.faceXY);
                if (error)
                    return "faceXY." + error;
            }
            if (message.isAtk != null && message.hasOwnProperty("isAtk"))
                if (typeof message.isAtk !== "boolean")
                    return "isAtk: boolean expected";
            if (message.hit != null && message.hasOwnProperty("hit")) {
                var error = $root.ResponsePackage.RespHit.verify(message.hit);
                if (error)
                    return "hit." + error;
            }
            if (message.isDead != null && message.hasOwnProperty("isDead"))
                if (typeof message.isDead !== "boolean")
                    return "isDead: boolean expected";
            return null;
        };

        return RespCkFrameInfo;
    })();

    ResponsePackage.RespHit = (function() {

        /**
         * Properties of a RespHit.
         * @memberof ResponsePackage
         * @interface IRespHit
         * @property {number|null} [atkCk] RespHit atkCk
         * @property {number|null} [hitType] RespHit hitType
         * @property {number|null} [atkType] RespHit atkType
         * @property {number|null} [value] RespHit value
         */

        /**
         * Constructs a new RespHit.
         * @memberof ResponsePackage
         * @classdesc Represents a RespHit.
         * @implements IRespHit
         * @constructor
         * @param {ResponsePackage.IRespHit=} [properties] Properties to set
         */
        function RespHit(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * RespHit atkCk.
         * @member {number} atkCk
         * @memberof ResponsePackage.RespHit
         * @instance
         */
        RespHit.prototype.atkCk = 0;

        /**
         * RespHit hitType.
         * @member {number} hitType
         * @memberof ResponsePackage.RespHit
         * @instance
         */
        RespHit.prototype.hitType = 0;

        /**
         * RespHit atkType.
         * @member {number} atkType
         * @memberof ResponsePackage.RespHit
         * @instance
         */
        RespHit.prototype.atkType = 0;

        /**
         * RespHit value.
         * @member {number} value
         * @memberof ResponsePackage.RespHit
         * @instance
         */
        RespHit.prototype.value = 0;

        /**
         * Creates a new RespHit instance using the specified properties.
         * @function create
         * @memberof ResponsePackage.RespHit
         * @static
         * @param {ResponsePackage.IRespHit=} [properties] Properties to set
         * @returns {ResponsePackage.RespHit} RespHit instance
         */
        RespHit.create = function create(properties) {
            return new RespHit(properties);
        };

        /**
         * Encodes the specified RespHit message. Does not implicitly {@link ResponsePackage.RespHit.verify|verify} messages.
         * @function encode
         * @memberof ResponsePackage.RespHit
         * @static
         * @param {ResponsePackage.IRespHit} message RespHit message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RespHit.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.atkCk != null && message.hasOwnProperty("atkCk"))
                writer.uint32(/* id 1, wireType 0 =*/8).sint32(message.atkCk);
            if (message.hitType != null && message.hasOwnProperty("hitType"))
                writer.uint32(/* id 2, wireType 0 =*/16).sint32(message.hitType);
            if (message.atkType != null && message.hasOwnProperty("atkType"))
                writer.uint32(/* id 3, wireType 0 =*/24).sint32(message.atkType);
            if (message.value != null && message.hasOwnProperty("value"))
                writer.uint32(/* id 4, wireType 0 =*/32).sint32(message.value);
            return writer;
        };

        /**
         * Encodes the specified RespHit message, length delimited. Does not implicitly {@link ResponsePackage.RespHit.verify|verify} messages.
         * @function encodeDelimited
         * @memberof ResponsePackage.RespHit
         * @static
         * @param {ResponsePackage.IRespHit} message RespHit message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RespHit.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RespHit message from the specified reader or buffer.
         * @function decode
         * @memberof ResponsePackage.RespHit
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {ResponsePackage.RespHit} RespHit
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RespHit.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ResponsePackage.RespHit();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.atkCk = reader.sint32();
                    break;
                case 2:
                    message.hitType = reader.sint32();
                    break;
                case 3:
                    message.atkType = reader.sint32();
                    break;
                case 4:
                    message.value = reader.sint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a RespHit message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof ResponsePackage.RespHit
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {ResponsePackage.RespHit} RespHit
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RespHit.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a RespHit message.
         * @function verify
         * @memberof ResponsePackage.RespHit
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        RespHit.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.atkCk != null && message.hasOwnProperty("atkCk"))
                if (!$util.isInteger(message.atkCk))
                    return "atkCk: integer expected";
            if (message.hitType != null && message.hasOwnProperty("hitType"))
                if (!$util.isInteger(message.hitType))
                    return "hitType: integer expected";
            if (message.atkType != null && message.hasOwnProperty("atkType"))
                if (!$util.isInteger(message.atkType))
                    return "atkType: integer expected";
            if (message.value != null && message.hasOwnProperty("value"))
                if (!$util.isInteger(message.value))
                    return "value: integer expected";
            return null;
        };

        return RespHit;
    })();

    ResponsePackage.RespFightClearing = (function() {

        /**
         * Properties of a RespFightClearing.
         * @memberof ResponsePackage
         * @interface IRespFightClearing
         * @property {number|null} [winCamp] RespFightClearing winCamp
         * @property {Array.<ResponsePackage.IRespRoleClearing>|null} [clearingList] RespFightClearing clearingList
         */

        /**
         * Constructs a new RespFightClearing.
         * @memberof ResponsePackage
         * @classdesc Represents a RespFightClearing.
         * @implements IRespFightClearing
         * @constructor
         * @param {ResponsePackage.IRespFightClearing=} [properties] Properties to set
         */
        function RespFightClearing(properties) {
            this.clearingList = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * RespFightClearing winCamp.
         * @member {number} winCamp
         * @memberof ResponsePackage.RespFightClearing
         * @instance
         */
        RespFightClearing.prototype.winCamp = 0;

        /**
         * RespFightClearing clearingList.
         * @member {Array.<ResponsePackage.IRespRoleClearing>} clearingList
         * @memberof ResponsePackage.RespFightClearing
         * @instance
         */
        RespFightClearing.prototype.clearingList = $util.emptyArray;

        /**
         * Creates a new RespFightClearing instance using the specified properties.
         * @function create
         * @memberof ResponsePackage.RespFightClearing
         * @static
         * @param {ResponsePackage.IRespFightClearing=} [properties] Properties to set
         * @returns {ResponsePackage.RespFightClearing} RespFightClearing instance
         */
        RespFightClearing.create = function create(properties) {
            return new RespFightClearing(properties);
        };

        /**
         * Encodes the specified RespFightClearing message. Does not implicitly {@link ResponsePackage.RespFightClearing.verify|verify} messages.
         * @function encode
         * @memberof ResponsePackage.RespFightClearing
         * @static
         * @param {ResponsePackage.IRespFightClearing} message RespFightClearing message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RespFightClearing.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.winCamp != null && message.hasOwnProperty("winCamp"))
                writer.uint32(/* id 1, wireType 0 =*/8).sint32(message.winCamp);
            if (message.clearingList != null && message.clearingList.length)
                for (var i = 0; i < message.clearingList.length; ++i)
                    $root.ResponsePackage.RespRoleClearing.encode(message.clearingList[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified RespFightClearing message, length delimited. Does not implicitly {@link ResponsePackage.RespFightClearing.verify|verify} messages.
         * @function encodeDelimited
         * @memberof ResponsePackage.RespFightClearing
         * @static
         * @param {ResponsePackage.IRespFightClearing} message RespFightClearing message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RespFightClearing.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RespFightClearing message from the specified reader or buffer.
         * @function decode
         * @memberof ResponsePackage.RespFightClearing
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {ResponsePackage.RespFightClearing} RespFightClearing
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RespFightClearing.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ResponsePackage.RespFightClearing();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.winCamp = reader.sint32();
                    break;
                case 2:
                    if (!(message.clearingList && message.clearingList.length))
                        message.clearingList = [];
                    message.clearingList.push($root.ResponsePackage.RespRoleClearing.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a RespFightClearing message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof ResponsePackage.RespFightClearing
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {ResponsePackage.RespFightClearing} RespFightClearing
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RespFightClearing.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a RespFightClearing message.
         * @function verify
         * @memberof ResponsePackage.RespFightClearing
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        RespFightClearing.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.winCamp != null && message.hasOwnProperty("winCamp"))
                if (!$util.isInteger(message.winCamp))
                    return "winCamp: integer expected";
            if (message.clearingList != null && message.hasOwnProperty("clearingList")) {
                if (!Array.isArray(message.clearingList))
                    return "clearingList: array expected";
                for (var i = 0; i < message.clearingList.length; ++i) {
                    var error = $root.ResponsePackage.RespRoleClearing.verify(message.clearingList[i]);
                    if (error)
                        return "clearingList." + error;
                }
            }
            return null;
        };

        return RespFightClearing;
    })();

    ResponsePackage.RespRoleClearing = (function() {

        /**
         * Properties of a RespRoleClearing.
         * @memberof ResponsePackage
         * @interface IRespRoleClearing
         * @property {string|null} [rid] RespRoleClearing rid
         * @property {number|null} [camp] RespRoleClearing camp
         * @property {number|null} [gcke] RespRoleClearing gcke
         * @property {number|null} [integral] RespRoleClearing integral
         * @property {number|null} [rank] RespRoleClearing rank
         */

        /**
         * Constructs a new RespRoleClearing.
         * @memberof ResponsePackage
         * @classdesc Represents a RespRoleClearing.
         * @implements IRespRoleClearing
         * @constructor
         * @param {ResponsePackage.IRespRoleClearing=} [properties] Properties to set
         */
        function RespRoleClearing(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * RespRoleClearing rid.
         * @member {string} rid
         * @memberof ResponsePackage.RespRoleClearing
         * @instance
         */
        RespRoleClearing.prototype.rid = "";

        /**
         * RespRoleClearing camp.
         * @member {number} camp
         * @memberof ResponsePackage.RespRoleClearing
         * @instance
         */
        RespRoleClearing.prototype.camp = 0;

        /**
         * RespRoleClearing gcke.
         * @member {number} gcke
         * @memberof ResponsePackage.RespRoleClearing
         * @instance
         */
        RespRoleClearing.prototype.gcke = 0;

        /**
         * RespRoleClearing integral.
         * @member {number} integral
         * @memberof ResponsePackage.RespRoleClearing
         * @instance
         */
        RespRoleClearing.prototype.integral = 0;

        /**
         * RespRoleClearing rank.
         * @member {number} rank
         * @memberof ResponsePackage.RespRoleClearing
         * @instance
         */
        RespRoleClearing.prototype.rank = 0;

        /**
         * Creates a new RespRoleClearing instance using the specified properties.
         * @function create
         * @memberof ResponsePackage.RespRoleClearing
         * @static
         * @param {ResponsePackage.IRespRoleClearing=} [properties] Properties to set
         * @returns {ResponsePackage.RespRoleClearing} RespRoleClearing instance
         */
        RespRoleClearing.create = function create(properties) {
            return new RespRoleClearing(properties);
        };

        /**
         * Encodes the specified RespRoleClearing message. Does not implicitly {@link ResponsePackage.RespRoleClearing.verify|verify} messages.
         * @function encode
         * @memberof ResponsePackage.RespRoleClearing
         * @static
         * @param {ResponsePackage.IRespRoleClearing} message RespRoleClearing message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RespRoleClearing.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.rid != null && message.hasOwnProperty("rid"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.rid);
            if (message.camp != null && message.hasOwnProperty("camp"))
                writer.uint32(/* id 2, wireType 0 =*/16).sint32(message.camp);
            if (message.gcke != null && message.hasOwnProperty("gcke"))
                writer.uint32(/* id 3, wireType 0 =*/24).sint32(message.gcke);
            if (message.integral != null && message.hasOwnProperty("integral"))
                writer.uint32(/* id 4, wireType 0 =*/32).sint32(message.integral);
            if (message.rank != null && message.hasOwnProperty("rank"))
                writer.uint32(/* id 5, wireType 0 =*/40).sint32(message.rank);
            return writer;
        };

        /**
         * Encodes the specified RespRoleClearing message, length delimited. Does not implicitly {@link ResponsePackage.RespRoleClearing.verify|verify} messages.
         * @function encodeDelimited
         * @memberof ResponsePackage.RespRoleClearing
         * @static
         * @param {ResponsePackage.IRespRoleClearing} message RespRoleClearing message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RespRoleClearing.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RespRoleClearing message from the specified reader or buffer.
         * @function decode
         * @memberof ResponsePackage.RespRoleClearing
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {ResponsePackage.RespRoleClearing} RespRoleClearing
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RespRoleClearing.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ResponsePackage.RespRoleClearing();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.rid = reader.string();
                    break;
                case 2:
                    message.camp = reader.sint32();
                    break;
                case 3:
                    message.gcke = reader.sint32();
                    break;
                case 4:
                    message.integral = reader.sint32();
                    break;
                case 5:
                    message.rank = reader.sint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a RespRoleClearing message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof ResponsePackage.RespRoleClearing
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {ResponsePackage.RespRoleClearing} RespRoleClearing
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RespRoleClearing.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a RespRoleClearing message.
         * @function verify
         * @memberof ResponsePackage.RespRoleClearing
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        RespRoleClearing.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.rid != null && message.hasOwnProperty("rid"))
                if (!$util.isString(message.rid))
                    return "rid: string expected";
            if (message.camp != null && message.hasOwnProperty("camp"))
                if (!$util.isInteger(message.camp))
                    return "camp: integer expected";
            if (message.gcke != null && message.hasOwnProperty("gcke"))
                if (!$util.isInteger(message.gcke))
                    return "gcke: integer expected";
            if (message.integral != null && message.hasOwnProperty("integral"))
                if (!$util.isInteger(message.integral))
                    return "integral: integer expected";
            if (message.rank != null && message.hasOwnProperty("rank"))
                if (!$util.isInteger(message.rank))
                    return "rank: integer expected";
            return null;
        };

        return RespRoleClearing;
    })();

    ResponsePackage.RespBattler = (function() {

        /**
         * Properties of a RespBattler.
         * @memberof ResponsePackage
         * @interface IRespBattler
         * @property {number|null} [camp] RespBattler camp
         * @property {ResponsePackage.IRespRoleBaseInfo|null} [roleBaseInfo] RespBattler roleBaseInfo
         * @property {ResponsePackage.IRespBattleCk|null} [battleCk] RespBattler battleCk
         */

        /**
         * Constructs a new RespBattler.
         * @memberof ResponsePackage
         * @classdesc Represents a RespBattler.
         * @implements IRespBattler
         * @constructor
         * @param {ResponsePackage.IRespBattler=} [properties] Properties to set
         */
        function RespBattler(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * RespBattler camp.
         * @member {number} camp
         * @memberof ResponsePackage.RespBattler
         * @instance
         */
        RespBattler.prototype.camp = 0;

        /**
         * RespBattler roleBaseInfo.
         * @member {ResponsePackage.IRespRoleBaseInfo|null|undefined} roleBaseInfo
         * @memberof ResponsePackage.RespBattler
         * @instance
         */
        RespBattler.prototype.roleBaseInfo = null;

        /**
         * RespBattler battleCk.
         * @member {ResponsePackage.IRespBattleCk|null|undefined} battleCk
         * @memberof ResponsePackage.RespBattler
         * @instance
         */
        RespBattler.prototype.battleCk = null;

        /**
         * Creates a new RespBattler instance using the specified properties.
         * @function create
         * @memberof ResponsePackage.RespBattler
         * @static
         * @param {ResponsePackage.IRespBattler=} [properties] Properties to set
         * @returns {ResponsePackage.RespBattler} RespBattler instance
         */
        RespBattler.create = function create(properties) {
            return new RespBattler(properties);
        };

        /**
         * Encodes the specified RespBattler message. Does not implicitly {@link ResponsePackage.RespBattler.verify|verify} messages.
         * @function encode
         * @memberof ResponsePackage.RespBattler
         * @static
         * @param {ResponsePackage.IRespBattler} message RespBattler message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RespBattler.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.camp != null && message.hasOwnProperty("camp"))
                writer.uint32(/* id 1, wireType 0 =*/8).sint32(message.camp);
            if (message.roleBaseInfo != null && message.hasOwnProperty("roleBaseInfo"))
                $root.ResponsePackage.RespRoleBaseInfo.encode(message.roleBaseInfo, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.battleCk != null && message.hasOwnProperty("battleCk"))
                $root.ResponsePackage.RespBattleCk.encode(message.battleCk, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified RespBattler message, length delimited. Does not implicitly {@link ResponsePackage.RespBattler.verify|verify} messages.
         * @function encodeDelimited
         * @memberof ResponsePackage.RespBattler
         * @static
         * @param {ResponsePackage.IRespBattler} message RespBattler message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RespBattler.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RespBattler message from the specified reader or buffer.
         * @function decode
         * @memberof ResponsePackage.RespBattler
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {ResponsePackage.RespBattler} RespBattler
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RespBattler.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ResponsePackage.RespBattler();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.camp = reader.sint32();
                    break;
                case 2:
                    message.roleBaseInfo = $root.ResponsePackage.RespRoleBaseInfo.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.battleCk = $root.ResponsePackage.RespBattleCk.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a RespBattler message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof ResponsePackage.RespBattler
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {ResponsePackage.RespBattler} RespBattler
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RespBattler.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a RespBattler message.
         * @function verify
         * @memberof ResponsePackage.RespBattler
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        RespBattler.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.camp != null && message.hasOwnProperty("camp"))
                if (!$util.isInteger(message.camp))
                    return "camp: integer expected";
            if (message.roleBaseInfo != null && message.hasOwnProperty("roleBaseInfo")) {
                var error = $root.ResponsePackage.RespRoleBaseInfo.verify(message.roleBaseInfo);
                if (error)
                    return "roleBaseInfo." + error;
            }
            if (message.battleCk != null && message.hasOwnProperty("battleCk")) {
                var error = $root.ResponsePackage.RespBattleCk.verify(message.battleCk);
                if (error)
                    return "battleCk." + error;
            }
            return null;
        };

        return RespBattler;
    })();

    ResponsePackage.RespBattleCk = (function() {

        /**
         * Properties of a RespBattleCk.
         * @memberof ResponsePackage
         * @interface IRespBattleCk
         * @property {number|null} [id] RespBattleCk id
         * @property {number|null} [level] RespBattleCk level
         * @property {number|null} [quality] RespBattleCk quality
         * @property {number|null} [lineage] RespBattleCk lineage
         * @property {number|null} [strength] RespBattleCk strength
         * @property {number|null} [wisdom] RespBattleCk wisdom
         * @property {number|null} [agile] RespBattleCk agile
         * @property {number|null} [health] RespBattleCk health
         * @property {number|null} [spirit] RespBattleCk spirit
         * @property {number|null} [luck] RespBattleCk luck
         * @property {Array.<number>|null} [professionList] RespBattleCk professionList
         * @property {Array.<number>|null} [specialtyList] RespBattleCk specialtyList
         * @property {number|null} [hp] RespBattleCk hp
         * @property {number|null} [maxHp] RespBattleCk maxHp
         * @property {number|null} [camp] RespBattleCk camp
         * @property {number|null} [posX] RespBattleCk posX
         * @property {number|null} [posY] RespBattleCk posY
         */

        /**
         * Constructs a new RespBattleCk.
         * @memberof ResponsePackage
         * @classdesc Represents a RespBattleCk.
         * @implements IRespBattleCk
         * @constructor
         * @param {ResponsePackage.IRespBattleCk=} [properties] Properties to set
         */
        function RespBattleCk(properties) {
            this.professionList = [];
            this.specialtyList = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * RespBattleCk id.
         * @member {number} id
         * @memberof ResponsePackage.RespBattleCk
         * @instance
         */
        RespBattleCk.prototype.id = 0;

        /**
         * RespBattleCk level.
         * @member {number} level
         * @memberof ResponsePackage.RespBattleCk
         * @instance
         */
        RespBattleCk.prototype.level = 0;

        /**
         * RespBattleCk quality.
         * @member {number} quality
         * @memberof ResponsePackage.RespBattleCk
         * @instance
         */
        RespBattleCk.prototype.quality = 0;

        /**
         * RespBattleCk lineage.
         * @member {number} lineage
         * @memberof ResponsePackage.RespBattleCk
         * @instance
         */
        RespBattleCk.prototype.lineage = 0;

        /**
         * RespBattleCk strength.
         * @member {number} strength
         * @memberof ResponsePackage.RespBattleCk
         * @instance
         */
        RespBattleCk.prototype.strength = 0;

        /**
         * RespBattleCk wisdom.
         * @member {number} wisdom
         * @memberof ResponsePackage.RespBattleCk
         * @instance
         */
        RespBattleCk.prototype.wisdom = 0;

        /**
         * RespBattleCk agile.
         * @member {number} agile
         * @memberof ResponsePackage.RespBattleCk
         * @instance
         */
        RespBattleCk.prototype.agile = 0;

        /**
         * RespBattleCk health.
         * @member {number} health
         * @memberof ResponsePackage.RespBattleCk
         * @instance
         */
        RespBattleCk.prototype.health = 0;

        /**
         * RespBattleCk spirit.
         * @member {number} spirit
         * @memberof ResponsePackage.RespBattleCk
         * @instance
         */
        RespBattleCk.prototype.spirit = 0;

        /**
         * RespBattleCk luck.
         * @member {number} luck
         * @memberof ResponsePackage.RespBattleCk
         * @instance
         */
        RespBattleCk.prototype.luck = 0;

        /**
         * RespBattleCk professionList.
         * @member {Array.<number>} professionList
         * @memberof ResponsePackage.RespBattleCk
         * @instance
         */
        RespBattleCk.prototype.professionList = $util.emptyArray;

        /**
         * RespBattleCk specialtyList.
         * @member {Array.<number>} specialtyList
         * @memberof ResponsePackage.RespBattleCk
         * @instance
         */
        RespBattleCk.prototype.specialtyList = $util.emptyArray;

        /**
         * RespBattleCk hp.
         * @member {number} hp
         * @memberof ResponsePackage.RespBattleCk
         * @instance
         */
        RespBattleCk.prototype.hp = 0;

        /**
         * RespBattleCk maxHp.
         * @member {number} maxHp
         * @memberof ResponsePackage.RespBattleCk
         * @instance
         */
        RespBattleCk.prototype.maxHp = 0;

        /**
         * RespBattleCk camp.
         * @member {number} camp
         * @memberof ResponsePackage.RespBattleCk
         * @instance
         */
        RespBattleCk.prototype.camp = 0;

        /**
         * RespBattleCk posX.
         * @member {number} posX
         * @memberof ResponsePackage.RespBattleCk
         * @instance
         */
        RespBattleCk.prototype.posX = 0;

        /**
         * RespBattleCk posY.
         * @member {number} posY
         * @memberof ResponsePackage.RespBattleCk
         * @instance
         */
        RespBattleCk.prototype.posY = 0;

        /**
         * Creates a new RespBattleCk instance using the specified properties.
         * @function create
         * @memberof ResponsePackage.RespBattleCk
         * @static
         * @param {ResponsePackage.IRespBattleCk=} [properties] Properties to set
         * @returns {ResponsePackage.RespBattleCk} RespBattleCk instance
         */
        RespBattleCk.create = function create(properties) {
            return new RespBattleCk(properties);
        };

        /**
         * Encodes the specified RespBattleCk message. Does not implicitly {@link ResponsePackage.RespBattleCk.verify|verify} messages.
         * @function encode
         * @memberof ResponsePackage.RespBattleCk
         * @static
         * @param {ResponsePackage.IRespBattleCk} message RespBattleCk message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RespBattleCk.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && message.hasOwnProperty("id"))
                writer.uint32(/* id 1, wireType 0 =*/8).sint32(message.id);
            if (message.level != null && message.hasOwnProperty("level"))
                writer.uint32(/* id 2, wireType 0 =*/16).sint32(message.level);
            if (message.quality != null && message.hasOwnProperty("quality"))
                writer.uint32(/* id 3, wireType 0 =*/24).sint32(message.quality);
            if (message.lineage != null && message.hasOwnProperty("lineage"))
                writer.uint32(/* id 4, wireType 0 =*/32).sint32(message.lineage);
            if (message.strength != null && message.hasOwnProperty("strength"))
                writer.uint32(/* id 5, wireType 0 =*/40).sint32(message.strength);
            if (message.wisdom != null && message.hasOwnProperty("wisdom"))
                writer.uint32(/* id 6, wireType 0 =*/48).sint32(message.wisdom);
            if (message.agile != null && message.hasOwnProperty("agile"))
                writer.uint32(/* id 7, wireType 0 =*/56).sint32(message.agile);
            if (message.health != null && message.hasOwnProperty("health"))
                writer.uint32(/* id 8, wireType 0 =*/64).sint32(message.health);
            if (message.spirit != null && message.hasOwnProperty("spirit"))
                writer.uint32(/* id 9, wireType 0 =*/72).sint32(message.spirit);
            if (message.luck != null && message.hasOwnProperty("luck"))
                writer.uint32(/* id 10, wireType 0 =*/80).sint32(message.luck);
            if (message.professionList != null && message.professionList.length) {
                writer.uint32(/* id 11, wireType 2 =*/90).fork();
                for (var i = 0; i < message.professionList.length; ++i)
                    writer.sint32(message.professionList[i]);
                writer.ldelim();
            }
            if (message.specialtyList != null && message.specialtyList.length) {
                writer.uint32(/* id 12, wireType 2 =*/98).fork();
                for (var i = 0; i < message.specialtyList.length; ++i)
                    writer.sint32(message.specialtyList[i]);
                writer.ldelim();
            }
            if (message.hp != null && message.hasOwnProperty("hp"))
                writer.uint32(/* id 13, wireType 0 =*/104).sint32(message.hp);
            if (message.maxHp != null && message.hasOwnProperty("maxHp"))
                writer.uint32(/* id 14, wireType 0 =*/112).sint32(message.maxHp);
            if (message.camp != null && message.hasOwnProperty("camp"))
                writer.uint32(/* id 15, wireType 0 =*/120).sint32(message.camp);
            if (message.posX != null && message.hasOwnProperty("posX"))
                writer.uint32(/* id 16, wireType 0 =*/128).sint32(message.posX);
            if (message.posY != null && message.hasOwnProperty("posY"))
                writer.uint32(/* id 17, wireType 0 =*/136).sint32(message.posY);
            return writer;
        };

        /**
         * Encodes the specified RespBattleCk message, length delimited. Does not implicitly {@link ResponsePackage.RespBattleCk.verify|verify} messages.
         * @function encodeDelimited
         * @memberof ResponsePackage.RespBattleCk
         * @static
         * @param {ResponsePackage.IRespBattleCk} message RespBattleCk message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RespBattleCk.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RespBattleCk message from the specified reader or buffer.
         * @function decode
         * @memberof ResponsePackage.RespBattleCk
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {ResponsePackage.RespBattleCk} RespBattleCk
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RespBattleCk.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ResponsePackage.RespBattleCk();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.id = reader.sint32();
                    break;
                case 2:
                    message.level = reader.sint32();
                    break;
                case 3:
                    message.quality = reader.sint32();
                    break;
                case 4:
                    message.lineage = reader.sint32();
                    break;
                case 5:
                    message.strength = reader.sint32();
                    break;
                case 6:
                    message.wisdom = reader.sint32();
                    break;
                case 7:
                    message.agile = reader.sint32();
                    break;
                case 8:
                    message.health = reader.sint32();
                    break;
                case 9:
                    message.spirit = reader.sint32();
                    break;
                case 10:
                    message.luck = reader.sint32();
                    break;
                case 11:
                    if (!(message.professionList && message.professionList.length))
                        message.professionList = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.professionList.push(reader.sint32());
                    } else
                        message.professionList.push(reader.sint32());
                    break;
                case 12:
                    if (!(message.specialtyList && message.specialtyList.length))
                        message.specialtyList = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.specialtyList.push(reader.sint32());
                    } else
                        message.specialtyList.push(reader.sint32());
                    break;
                case 13:
                    message.hp = reader.sint32();
                    break;
                case 14:
                    message.maxHp = reader.sint32();
                    break;
                case 15:
                    message.camp = reader.sint32();
                    break;
                case 16:
                    message.posX = reader.sint32();
                    break;
                case 17:
                    message.posY = reader.sint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a RespBattleCk message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof ResponsePackage.RespBattleCk
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {ResponsePackage.RespBattleCk} RespBattleCk
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RespBattleCk.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a RespBattleCk message.
         * @function verify
         * @memberof ResponsePackage.RespBattleCk
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        RespBattleCk.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isInteger(message.id))
                    return "id: integer expected";
            if (message.level != null && message.hasOwnProperty("level"))
                if (!$util.isInteger(message.level))
                    return "level: integer expected";
            if (message.quality != null && message.hasOwnProperty("quality"))
                if (!$util.isInteger(message.quality))
                    return "quality: integer expected";
            if (message.lineage != null && message.hasOwnProperty("lineage"))
                if (!$util.isInteger(message.lineage))
                    return "lineage: integer expected";
            if (message.strength != null && message.hasOwnProperty("strength"))
                if (!$util.isInteger(message.strength))
                    return "strength: integer expected";
            if (message.wisdom != null && message.hasOwnProperty("wisdom"))
                if (!$util.isInteger(message.wisdom))
                    return "wisdom: integer expected";
            if (message.agile != null && message.hasOwnProperty("agile"))
                if (!$util.isInteger(message.agile))
                    return "agile: integer expected";
            if (message.health != null && message.hasOwnProperty("health"))
                if (!$util.isInteger(message.health))
                    return "health: integer expected";
            if (message.spirit != null && message.hasOwnProperty("spirit"))
                if (!$util.isInteger(message.spirit))
                    return "spirit: integer expected";
            if (message.luck != null && message.hasOwnProperty("luck"))
                if (!$util.isInteger(message.luck))
                    return "luck: integer expected";
            if (message.professionList != null && message.hasOwnProperty("professionList")) {
                if (!Array.isArray(message.professionList))
                    return "professionList: array expected";
                for (var i = 0; i < message.professionList.length; ++i)
                    if (!$util.isInteger(message.professionList[i]))
                        return "professionList: integer[] expected";
            }
            if (message.specialtyList != null && message.hasOwnProperty("specialtyList")) {
                if (!Array.isArray(message.specialtyList))
                    return "specialtyList: array expected";
                for (var i = 0; i < message.specialtyList.length; ++i)
                    if (!$util.isInteger(message.specialtyList[i]))
                        return "specialtyList: integer[] expected";
            }
            if (message.hp != null && message.hasOwnProperty("hp"))
                if (!$util.isInteger(message.hp))
                    return "hp: integer expected";
            if (message.maxHp != null && message.hasOwnProperty("maxHp"))
                if (!$util.isInteger(message.maxHp))
                    return "maxHp: integer expected";
            if (message.camp != null && message.hasOwnProperty("camp"))
                if (!$util.isInteger(message.camp))
                    return "camp: integer expected";
            if (message.posX != null && message.hasOwnProperty("posX"))
                if (!$util.isInteger(message.posX))
                    return "posX: integer expected";
            if (message.posY != null && message.hasOwnProperty("posY"))
                if (!$util.isInteger(message.posY))
                    return "posY: integer expected";
            return null;
        };

        return RespBattleCk;
    })();

    ResponsePackage.RespRoleBaseInfo = (function() {

        /**
         * Properties of a RespRoleBaseInfo.
         * @memberof ResponsePackage
         * @interface IRespRoleBaseInfo
         * @property {string|null} [id] RespRoleBaseInfo id
         * @property {string|null} [name] RespRoleBaseInfo name
         * @property {number|null} [chain] RespRoleBaseInfo chain
         * @property {number|null} [division] RespRoleBaseInfo division
         * @property {ResponsePackage.IRespCkCardInfo|null} [ckCardInfo] RespRoleBaseInfo ckCardInfo
         */

        /**
         * Constructs a new RespRoleBaseInfo.
         * @memberof ResponsePackage
         * @classdesc Represents a RespRoleBaseInfo.
         * @implements IRespRoleBaseInfo
         * @constructor
         * @param {ResponsePackage.IRespRoleBaseInfo=} [properties] Properties to set
         */
        function RespRoleBaseInfo(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * RespRoleBaseInfo id.
         * @member {string} id
         * @memberof ResponsePackage.RespRoleBaseInfo
         * @instance
         */
        RespRoleBaseInfo.prototype.id = "";

        /**
         * RespRoleBaseInfo name.
         * @member {string} name
         * @memberof ResponsePackage.RespRoleBaseInfo
         * @instance
         */
        RespRoleBaseInfo.prototype.name = "";

        /**
         * RespRoleBaseInfo chain.
         * @member {number} chain
         * @memberof ResponsePackage.RespRoleBaseInfo
         * @instance
         */
        RespRoleBaseInfo.prototype.chain = 0;

        /**
         * RespRoleBaseInfo division.
         * @member {number} division
         * @memberof ResponsePackage.RespRoleBaseInfo
         * @instance
         */
        RespRoleBaseInfo.prototype.division = 0;

        /**
         * RespRoleBaseInfo ckCardInfo.
         * @member {ResponsePackage.IRespCkCardInfo|null|undefined} ckCardInfo
         * @memberof ResponsePackage.RespRoleBaseInfo
         * @instance
         */
        RespRoleBaseInfo.prototype.ckCardInfo = null;

        /**
         * Creates a new RespRoleBaseInfo instance using the specified properties.
         * @function create
         * @memberof ResponsePackage.RespRoleBaseInfo
         * @static
         * @param {ResponsePackage.IRespRoleBaseInfo=} [properties] Properties to set
         * @returns {ResponsePackage.RespRoleBaseInfo} RespRoleBaseInfo instance
         */
        RespRoleBaseInfo.create = function create(properties) {
            return new RespRoleBaseInfo(properties);
        };

        /**
         * Encodes the specified RespRoleBaseInfo message. Does not implicitly {@link ResponsePackage.RespRoleBaseInfo.verify|verify} messages.
         * @function encode
         * @memberof ResponsePackage.RespRoleBaseInfo
         * @static
         * @param {ResponsePackage.IRespRoleBaseInfo} message RespRoleBaseInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RespRoleBaseInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && message.hasOwnProperty("id"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
            if (message.name != null && message.hasOwnProperty("name"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
            if (message.chain != null && message.hasOwnProperty("chain"))
                writer.uint32(/* id 3, wireType 0 =*/24).sint32(message.chain);
            if (message.division != null && message.hasOwnProperty("division"))
                writer.uint32(/* id 4, wireType 0 =*/32).sint32(message.division);
            if (message.ckCardInfo != null && message.hasOwnProperty("ckCardInfo"))
                $root.ResponsePackage.RespCkCardInfo.encode(message.ckCardInfo, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified RespRoleBaseInfo message, length delimited. Does not implicitly {@link ResponsePackage.RespRoleBaseInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof ResponsePackage.RespRoleBaseInfo
         * @static
         * @param {ResponsePackage.IRespRoleBaseInfo} message RespRoleBaseInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RespRoleBaseInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RespRoleBaseInfo message from the specified reader or buffer.
         * @function decode
         * @memberof ResponsePackage.RespRoleBaseInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {ResponsePackage.RespRoleBaseInfo} RespRoleBaseInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RespRoleBaseInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ResponsePackage.RespRoleBaseInfo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.name = reader.string();
                    break;
                case 3:
                    message.chain = reader.sint32();
                    break;
                case 4:
                    message.division = reader.sint32();
                    break;
                case 5:
                    message.ckCardInfo = $root.ResponsePackage.RespCkCardInfo.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a RespRoleBaseInfo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof ResponsePackage.RespRoleBaseInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {ResponsePackage.RespRoleBaseInfo} RespRoleBaseInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RespRoleBaseInfo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a RespRoleBaseInfo message.
         * @function verify
         * @memberof ResponsePackage.RespRoleBaseInfo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        RespRoleBaseInfo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isString(message.id))
                    return "id: string expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            if (message.chain != null && message.hasOwnProperty("chain"))
                if (!$util.isInteger(message.chain))
                    return "chain: integer expected";
            if (message.division != null && message.hasOwnProperty("division"))
                if (!$util.isInteger(message.division))
                    return "division: integer expected";
            if (message.ckCardInfo != null && message.hasOwnProperty("ckCardInfo")) {
                var error = $root.ResponsePackage.RespCkCardInfo.verify(message.ckCardInfo);
                if (error)
                    return "ckCardInfo." + error;
            }
            return null;
        };

        return RespRoleBaseInfo;
    })();

    ResponsePackage.RespCkCardInfo = (function() {

        /**
         * Properties of a RespCkCardInfo.
         * @memberof ResponsePackage
         * @interface IRespCkCardInfo
         * @property {string|null} [rid] RespCkCardInfo rid
         * @property {number|null} [seq] RespCkCardInfo seq
         * @property {number|null} [lv] RespCkCardInfo lv
         * @property {number|null} [quality] RespCkCardInfo quality
         * @property {number|null} [lineage] RespCkCardInfo lineage
         * @property {Array.<number>|null} [professionList] RespCkCardInfo professionList
         */

        /**
         * Constructs a new RespCkCardInfo.
         * @memberof ResponsePackage
         * @classdesc Represents a RespCkCardInfo.
         * @implements IRespCkCardInfo
         * @constructor
         * @param {ResponsePackage.IRespCkCardInfo=} [properties] Properties to set
         */
        function RespCkCardInfo(properties) {
            this.professionList = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * RespCkCardInfo rid.
         * @member {string} rid
         * @memberof ResponsePackage.RespCkCardInfo
         * @instance
         */
        RespCkCardInfo.prototype.rid = "";

        /**
         * RespCkCardInfo seq.
         * @member {number} seq
         * @memberof ResponsePackage.RespCkCardInfo
         * @instance
         */
        RespCkCardInfo.prototype.seq = 0;

        /**
         * RespCkCardInfo lv.
         * @member {number} lv
         * @memberof ResponsePackage.RespCkCardInfo
         * @instance
         */
        RespCkCardInfo.prototype.lv = 0;

        /**
         * RespCkCardInfo quality.
         * @member {number} quality
         * @memberof ResponsePackage.RespCkCardInfo
         * @instance
         */
        RespCkCardInfo.prototype.quality = 0;

        /**
         * RespCkCardInfo lineage.
         * @member {number} lineage
         * @memberof ResponsePackage.RespCkCardInfo
         * @instance
         */
        RespCkCardInfo.prototype.lineage = 0;

        /**
         * RespCkCardInfo professionList.
         * @member {Array.<number>} professionList
         * @memberof ResponsePackage.RespCkCardInfo
         * @instance
         */
        RespCkCardInfo.prototype.professionList = $util.emptyArray;

        /**
         * Creates a new RespCkCardInfo instance using the specified properties.
         * @function create
         * @memberof ResponsePackage.RespCkCardInfo
         * @static
         * @param {ResponsePackage.IRespCkCardInfo=} [properties] Properties to set
         * @returns {ResponsePackage.RespCkCardInfo} RespCkCardInfo instance
         */
        RespCkCardInfo.create = function create(properties) {
            return new RespCkCardInfo(properties);
        };

        /**
         * Encodes the specified RespCkCardInfo message. Does not implicitly {@link ResponsePackage.RespCkCardInfo.verify|verify} messages.
         * @function encode
         * @memberof ResponsePackage.RespCkCardInfo
         * @static
         * @param {ResponsePackage.IRespCkCardInfo} message RespCkCardInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RespCkCardInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.rid != null && message.hasOwnProperty("rid"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.rid);
            if (message.seq != null && message.hasOwnProperty("seq"))
                writer.uint32(/* id 2, wireType 0 =*/16).sint32(message.seq);
            if (message.lv != null && message.hasOwnProperty("lv"))
                writer.uint32(/* id 3, wireType 0 =*/24).sint32(message.lv);
            if (message.quality != null && message.hasOwnProperty("quality"))
                writer.uint32(/* id 4, wireType 0 =*/32).sint32(message.quality);
            if (message.lineage != null && message.hasOwnProperty("lineage"))
                writer.uint32(/* id 5, wireType 0 =*/40).sint32(message.lineage);
            if (message.professionList != null && message.professionList.length) {
                writer.uint32(/* id 6, wireType 2 =*/50).fork();
                for (var i = 0; i < message.professionList.length; ++i)
                    writer.sint32(message.professionList[i]);
                writer.ldelim();
            }
            return writer;
        };

        /**
         * Encodes the specified RespCkCardInfo message, length delimited. Does not implicitly {@link ResponsePackage.RespCkCardInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof ResponsePackage.RespCkCardInfo
         * @static
         * @param {ResponsePackage.IRespCkCardInfo} message RespCkCardInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RespCkCardInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RespCkCardInfo message from the specified reader or buffer.
         * @function decode
         * @memberof ResponsePackage.RespCkCardInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {ResponsePackage.RespCkCardInfo} RespCkCardInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RespCkCardInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ResponsePackage.RespCkCardInfo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.rid = reader.string();
                    break;
                case 2:
                    message.seq = reader.sint32();
                    break;
                case 3:
                    message.lv = reader.sint32();
                    break;
                case 4:
                    message.quality = reader.sint32();
                    break;
                case 5:
                    message.lineage = reader.sint32();
                    break;
                case 6:
                    if (!(message.professionList && message.professionList.length))
                        message.professionList = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.professionList.push(reader.sint32());
                    } else
                        message.professionList.push(reader.sint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a RespCkCardInfo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof ResponsePackage.RespCkCardInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {ResponsePackage.RespCkCardInfo} RespCkCardInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RespCkCardInfo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a RespCkCardInfo message.
         * @function verify
         * @memberof ResponsePackage.RespCkCardInfo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        RespCkCardInfo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.rid != null && message.hasOwnProperty("rid"))
                if (!$util.isString(message.rid))
                    return "rid: string expected";
            if (message.seq != null && message.hasOwnProperty("seq"))
                if (!$util.isInteger(message.seq))
                    return "seq: integer expected";
            if (message.lv != null && message.hasOwnProperty("lv"))
                if (!$util.isInteger(message.lv))
                    return "lv: integer expected";
            if (message.quality != null && message.hasOwnProperty("quality"))
                if (!$util.isInteger(message.quality))
                    return "quality: integer expected";
            if (message.lineage != null && message.hasOwnProperty("lineage"))
                if (!$util.isInteger(message.lineage))
                    return "lineage: integer expected";
            if (message.professionList != null && message.hasOwnProperty("professionList")) {
                if (!Array.isArray(message.professionList))
                    return "professionList: array expected";
                for (var i = 0; i < message.professionList.length; ++i)
                    if (!$util.isInteger(message.professionList[i]))
                        return "professionList: integer[] expected";
            }
            return null;
        };

        return RespCkCardInfo;
    })();

    ResponsePackage.RespTeam = (function() {

        /**
         * Properties of a RespTeam.
         * @memberof ResponsePackage
         * @interface IRespTeam
         * @property {Array.<ResponsePackage.IRespTeamInfo>|null} [teamList] RespTeam teamList
         * @property {Array.<ResponsePackage.IRespTeamInfo>|null} [teamOp] RespTeam teamOp
         */

        /**
         * Constructs a new RespTeam.
         * @memberof ResponsePackage
         * @classdesc Represents a RespTeam.
         * @implements IRespTeam
         * @constructor
         * @param {ResponsePackage.IRespTeam=} [properties] Properties to set
         */
        function RespTeam(properties) {
            this.teamList = [];
            this.teamOp = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * RespTeam teamList.
         * @member {Array.<ResponsePackage.IRespTeamInfo>} teamList
         * @memberof ResponsePackage.RespTeam
         * @instance
         */
        RespTeam.prototype.teamList = $util.emptyArray;

        /**
         * RespTeam teamOp.
         * @member {Array.<ResponsePackage.IRespTeamInfo>} teamOp
         * @memberof ResponsePackage.RespTeam
         * @instance
         */
        RespTeam.prototype.teamOp = $util.emptyArray;

        /**
         * Creates a new RespTeam instance using the specified properties.
         * @function create
         * @memberof ResponsePackage.RespTeam
         * @static
         * @param {ResponsePackage.IRespTeam=} [properties] Properties to set
         * @returns {ResponsePackage.RespTeam} RespTeam instance
         */
        RespTeam.create = function create(properties) {
            return new RespTeam(properties);
        };

        /**
         * Encodes the specified RespTeam message. Does not implicitly {@link ResponsePackage.RespTeam.verify|verify} messages.
         * @function encode
         * @memberof ResponsePackage.RespTeam
         * @static
         * @param {ResponsePackage.IRespTeam} message RespTeam message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RespTeam.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.teamList != null && message.teamList.length)
                for (var i = 0; i < message.teamList.length; ++i)
                    $root.ResponsePackage.RespTeamInfo.encode(message.teamList[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.teamOp != null && message.teamOp.length)
                for (var i = 0; i < message.teamOp.length; ++i)
                    $root.ResponsePackage.RespTeamInfo.encode(message.teamOp[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified RespTeam message, length delimited. Does not implicitly {@link ResponsePackage.RespTeam.verify|verify} messages.
         * @function encodeDelimited
         * @memberof ResponsePackage.RespTeam
         * @static
         * @param {ResponsePackage.IRespTeam} message RespTeam message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RespTeam.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RespTeam message from the specified reader or buffer.
         * @function decode
         * @memberof ResponsePackage.RespTeam
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {ResponsePackage.RespTeam} RespTeam
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RespTeam.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ResponsePackage.RespTeam();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.teamList && message.teamList.length))
                        message.teamList = [];
                    message.teamList.push($root.ResponsePackage.RespTeamInfo.decode(reader, reader.uint32()));
                    break;
                case 2:
                    if (!(message.teamOp && message.teamOp.length))
                        message.teamOp = [];
                    message.teamOp.push($root.ResponsePackage.RespTeamInfo.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a RespTeam message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof ResponsePackage.RespTeam
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {ResponsePackage.RespTeam} RespTeam
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RespTeam.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a RespTeam message.
         * @function verify
         * @memberof ResponsePackage.RespTeam
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        RespTeam.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.teamList != null && message.hasOwnProperty("teamList")) {
                if (!Array.isArray(message.teamList))
                    return "teamList: array expected";
                for (var i = 0; i < message.teamList.length; ++i) {
                    var error = $root.ResponsePackage.RespTeamInfo.verify(message.teamList[i]);
                    if (error)
                        return "teamList." + error;
                }
            }
            if (message.teamOp != null && message.hasOwnProperty("teamOp")) {
                if (!Array.isArray(message.teamOp))
                    return "teamOp: array expected";
                for (var i = 0; i < message.teamOp.length; ++i) {
                    var error = $root.ResponsePackage.RespTeamInfo.verify(message.teamOp[i]);
                    if (error)
                        return "teamOp." + error;
                }
            }
            return null;
        };

        return RespTeam;
    })();

    ResponsePackage.RespTeamInfo = (function() {

        /**
         * Properties of a RespTeamInfo.
         * @memberof ResponsePackage
         * @interface IRespTeamInfo
         * @property {number|null} [id] RespTeamInfo id
         * @property {number|null} [type] RespTeamInfo type
         * @property {number|null} [ckId] RespTeamInfo ckId
         */

        /**
         * Constructs a new RespTeamInfo.
         * @memberof ResponsePackage
         * @classdesc Represents a RespTeamInfo.
         * @implements IRespTeamInfo
         * @constructor
         * @param {ResponsePackage.IRespTeamInfo=} [properties] Properties to set
         */
        function RespTeamInfo(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * RespTeamInfo id.
         * @member {number} id
         * @memberof ResponsePackage.RespTeamInfo
         * @instance
         */
        RespTeamInfo.prototype.id = 0;

        /**
         * RespTeamInfo type.
         * @member {number} type
         * @memberof ResponsePackage.RespTeamInfo
         * @instance
         */
        RespTeamInfo.prototype.type = 0;

        /**
         * RespTeamInfo ckId.
         * @member {number} ckId
         * @memberof ResponsePackage.RespTeamInfo
         * @instance
         */
        RespTeamInfo.prototype.ckId = 0;

        /**
         * Creates a new RespTeamInfo instance using the specified properties.
         * @function create
         * @memberof ResponsePackage.RespTeamInfo
         * @static
         * @param {ResponsePackage.IRespTeamInfo=} [properties] Properties to set
         * @returns {ResponsePackage.RespTeamInfo} RespTeamInfo instance
         */
        RespTeamInfo.create = function create(properties) {
            return new RespTeamInfo(properties);
        };

        /**
         * Encodes the specified RespTeamInfo message. Does not implicitly {@link ResponsePackage.RespTeamInfo.verify|verify} messages.
         * @function encode
         * @memberof ResponsePackage.RespTeamInfo
         * @static
         * @param {ResponsePackage.IRespTeamInfo} message RespTeamInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RespTeamInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && message.hasOwnProperty("id"))
                writer.uint32(/* id 1, wireType 0 =*/8).sint32(message.id);
            if (message.type != null && message.hasOwnProperty("type"))
                writer.uint32(/* id 2, wireType 0 =*/16).sint32(message.type);
            if (message.ckId != null && message.hasOwnProperty("ckId"))
                writer.uint32(/* id 3, wireType 0 =*/24).sint32(message.ckId);
            return writer;
        };

        /**
         * Encodes the specified RespTeamInfo message, length delimited. Does not implicitly {@link ResponsePackage.RespTeamInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof ResponsePackage.RespTeamInfo
         * @static
         * @param {ResponsePackage.IRespTeamInfo} message RespTeamInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RespTeamInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RespTeamInfo message from the specified reader or buffer.
         * @function decode
         * @memberof ResponsePackage.RespTeamInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {ResponsePackage.RespTeamInfo} RespTeamInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RespTeamInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ResponsePackage.RespTeamInfo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.id = reader.sint32();
                    break;
                case 2:
                    message.type = reader.sint32();
                    break;
                case 3:
                    message.ckId = reader.sint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a RespTeamInfo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof ResponsePackage.RespTeamInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {ResponsePackage.RespTeamInfo} RespTeamInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RespTeamInfo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a RespTeamInfo message.
         * @function verify
         * @memberof ResponsePackage.RespTeamInfo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        RespTeamInfo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isInteger(message.id))
                    return "id: integer expected";
            if (message.type != null && message.hasOwnProperty("type"))
                if (!$util.isInteger(message.type))
                    return "type: integer expected";
            if (message.ckId != null && message.hasOwnProperty("ckId"))
                if (!$util.isInteger(message.ckId))
                    return "ckId: integer expected";
            return null;
        };

        return RespTeamInfo;
    })();

    ResponsePackage.RespDepot = (function() {

        /**
         * Properties of a RespDepot.
         * @memberof ResponsePackage
         * @interface IRespDepot
         * @property {Array.<ResponsePackage.IRespIntKeyLongVal>|null} [currencyInfo] RespDepot currencyInfo
         * @property {Array.<ResponsePackage.IRespIntKeyIntVal>|null} [countItemInfo] RespDepot countItemInfo
         * @property {Array.<ResponsePackage.IRespIntKeyLongVal>|null} [currencyOp] RespDepot currencyOp
         * @property {Array.<ResponsePackage.IRespIntKeyIntVal>|null} [countItemOp] RespDepot countItemOp
         * @property {ResponsePackage.IRespPrize|null} [respPrize] RespDepot respPrize
         */

        /**
         * Constructs a new RespDepot.
         * @memberof ResponsePackage
         * @classdesc Represents a RespDepot.
         * @implements IRespDepot
         * @constructor
         * @param {ResponsePackage.IRespDepot=} [properties] Properties to set
         */
        function RespDepot(properties) {
            this.currencyInfo = [];
            this.countItemInfo = [];
            this.currencyOp = [];
            this.countItemOp = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * RespDepot currencyInfo.
         * @member {Array.<ResponsePackage.IRespIntKeyLongVal>} currencyInfo
         * @memberof ResponsePackage.RespDepot
         * @instance
         */
        RespDepot.prototype.currencyInfo = $util.emptyArray;

        /**
         * RespDepot countItemInfo.
         * @member {Array.<ResponsePackage.IRespIntKeyIntVal>} countItemInfo
         * @memberof ResponsePackage.RespDepot
         * @instance
         */
        RespDepot.prototype.countItemInfo = $util.emptyArray;

        /**
         * RespDepot currencyOp.
         * @member {Array.<ResponsePackage.IRespIntKeyLongVal>} currencyOp
         * @memberof ResponsePackage.RespDepot
         * @instance
         */
        RespDepot.prototype.currencyOp = $util.emptyArray;

        /**
         * RespDepot countItemOp.
         * @member {Array.<ResponsePackage.IRespIntKeyIntVal>} countItemOp
         * @memberof ResponsePackage.RespDepot
         * @instance
         */
        RespDepot.prototype.countItemOp = $util.emptyArray;

        /**
         * RespDepot respPrize.
         * @member {ResponsePackage.IRespPrize|null|undefined} respPrize
         * @memberof ResponsePackage.RespDepot
         * @instance
         */
        RespDepot.prototype.respPrize = null;

        /**
         * Creates a new RespDepot instance using the specified properties.
         * @function create
         * @memberof ResponsePackage.RespDepot
         * @static
         * @param {ResponsePackage.IRespDepot=} [properties] Properties to set
         * @returns {ResponsePackage.RespDepot} RespDepot instance
         */
        RespDepot.create = function create(properties) {
            return new RespDepot(properties);
        };

        /**
         * Encodes the specified RespDepot message. Does not implicitly {@link ResponsePackage.RespDepot.verify|verify} messages.
         * @function encode
         * @memberof ResponsePackage.RespDepot
         * @static
         * @param {ResponsePackage.IRespDepot} message RespDepot message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RespDepot.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.currencyInfo != null && message.currencyInfo.length)
                for (var i = 0; i < message.currencyInfo.length; ++i)
                    $root.ResponsePackage.RespIntKeyLongVal.encode(message.currencyInfo[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.countItemInfo != null && message.countItemInfo.length)
                for (var i = 0; i < message.countItemInfo.length; ++i)
                    $root.ResponsePackage.RespIntKeyIntVal.encode(message.countItemInfo[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.currencyOp != null && message.currencyOp.length)
                for (var i = 0; i < message.currencyOp.length; ++i)
                    $root.ResponsePackage.RespIntKeyLongVal.encode(message.currencyOp[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.countItemOp != null && message.countItemOp.length)
                for (var i = 0; i < message.countItemOp.length; ++i)
                    $root.ResponsePackage.RespIntKeyIntVal.encode(message.countItemOp[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            if (message.respPrize != null && message.hasOwnProperty("respPrize"))
                $root.ResponsePackage.RespPrize.encode(message.respPrize, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified RespDepot message, length delimited. Does not implicitly {@link ResponsePackage.RespDepot.verify|verify} messages.
         * @function encodeDelimited
         * @memberof ResponsePackage.RespDepot
         * @static
         * @param {ResponsePackage.IRespDepot} message RespDepot message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RespDepot.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RespDepot message from the specified reader or buffer.
         * @function decode
         * @memberof ResponsePackage.RespDepot
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {ResponsePackage.RespDepot} RespDepot
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RespDepot.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ResponsePackage.RespDepot();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.currencyInfo && message.currencyInfo.length))
                        message.currencyInfo = [];
                    message.currencyInfo.push($root.ResponsePackage.RespIntKeyLongVal.decode(reader, reader.uint32()));
                    break;
                case 2:
                    if (!(message.countItemInfo && message.countItemInfo.length))
                        message.countItemInfo = [];
                    message.countItemInfo.push($root.ResponsePackage.RespIntKeyIntVal.decode(reader, reader.uint32()));
                    break;
                case 3:
                    if (!(message.currencyOp && message.currencyOp.length))
                        message.currencyOp = [];
                    message.currencyOp.push($root.ResponsePackage.RespIntKeyLongVal.decode(reader, reader.uint32()));
                    break;
                case 4:
                    if (!(message.countItemOp && message.countItemOp.length))
                        message.countItemOp = [];
                    message.countItemOp.push($root.ResponsePackage.RespIntKeyIntVal.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.respPrize = $root.ResponsePackage.RespPrize.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a RespDepot message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof ResponsePackage.RespDepot
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {ResponsePackage.RespDepot} RespDepot
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RespDepot.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a RespDepot message.
         * @function verify
         * @memberof ResponsePackage.RespDepot
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        RespDepot.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.currencyInfo != null && message.hasOwnProperty("currencyInfo")) {
                if (!Array.isArray(message.currencyInfo))
                    return "currencyInfo: array expected";
                for (var i = 0; i < message.currencyInfo.length; ++i) {
                    var error = $root.ResponsePackage.RespIntKeyLongVal.verify(message.currencyInfo[i]);
                    if (error)
                        return "currencyInfo." + error;
                }
            }
            if (message.countItemInfo != null && message.hasOwnProperty("countItemInfo")) {
                if (!Array.isArray(message.countItemInfo))
                    return "countItemInfo: array expected";
                for (var i = 0; i < message.countItemInfo.length; ++i) {
                    var error = $root.ResponsePackage.RespIntKeyIntVal.verify(message.countItemInfo[i]);
                    if (error)
                        return "countItemInfo." + error;
                }
            }
            if (message.currencyOp != null && message.hasOwnProperty("currencyOp")) {
                if (!Array.isArray(message.currencyOp))
                    return "currencyOp: array expected";
                for (var i = 0; i < message.currencyOp.length; ++i) {
                    var error = $root.ResponsePackage.RespIntKeyLongVal.verify(message.currencyOp[i]);
                    if (error)
                        return "currencyOp." + error;
                }
            }
            if (message.countItemOp != null && message.hasOwnProperty("countItemOp")) {
                if (!Array.isArray(message.countItemOp))
                    return "countItemOp: array expected";
                for (var i = 0; i < message.countItemOp.length; ++i) {
                    var error = $root.ResponsePackage.RespIntKeyIntVal.verify(message.countItemOp[i]);
                    if (error)
                        return "countItemOp." + error;
                }
            }
            if (message.respPrize != null && message.hasOwnProperty("respPrize")) {
                var error = $root.ResponsePackage.RespPrize.verify(message.respPrize);
                if (error)
                    return "respPrize." + error;
            }
            return null;
        };

        return RespDepot;
    })();

    ResponsePackage.RespIntKeyLongVal = (function() {

        /**
         * Properties of a RespIntKeyLongVal.
         * @memberof ResponsePackage
         * @interface IRespIntKeyLongVal
         * @property {number|null} [key] RespIntKeyLongVal key
         * @property {number|Long|null} [value] RespIntKeyLongVal value
         */

        /**
         * Constructs a new RespIntKeyLongVal.
         * @memberof ResponsePackage
         * @classdesc Represents a RespIntKeyLongVal.
         * @implements IRespIntKeyLongVal
         * @constructor
         * @param {ResponsePackage.IRespIntKeyLongVal=} [properties] Properties to set
         */
        function RespIntKeyLongVal(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * RespIntKeyLongVal key.
         * @member {number} key
         * @memberof ResponsePackage.RespIntKeyLongVal
         * @instance
         */
        RespIntKeyLongVal.prototype.key = 0;

        /**
         * RespIntKeyLongVal value.
         * @member {number|Long} value
         * @memberof ResponsePackage.RespIntKeyLongVal
         * @instance
         */
        RespIntKeyLongVal.prototype.value = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new RespIntKeyLongVal instance using the specified properties.
         * @function create
         * @memberof ResponsePackage.RespIntKeyLongVal
         * @static
         * @param {ResponsePackage.IRespIntKeyLongVal=} [properties] Properties to set
         * @returns {ResponsePackage.RespIntKeyLongVal} RespIntKeyLongVal instance
         */
        RespIntKeyLongVal.create = function create(properties) {
            return new RespIntKeyLongVal(properties);
        };

        /**
         * Encodes the specified RespIntKeyLongVal message. Does not implicitly {@link ResponsePackage.RespIntKeyLongVal.verify|verify} messages.
         * @function encode
         * @memberof ResponsePackage.RespIntKeyLongVal
         * @static
         * @param {ResponsePackage.IRespIntKeyLongVal} message RespIntKeyLongVal message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RespIntKeyLongVal.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.key != null && message.hasOwnProperty("key"))
                writer.uint32(/* id 1, wireType 0 =*/8).sint32(message.key);
            if (message.value != null && message.hasOwnProperty("value"))
                writer.uint32(/* id 2, wireType 0 =*/16).sint64(message.value);
            return writer;
        };

        /**
         * Encodes the specified RespIntKeyLongVal message, length delimited. Does not implicitly {@link ResponsePackage.RespIntKeyLongVal.verify|verify} messages.
         * @function encodeDelimited
         * @memberof ResponsePackage.RespIntKeyLongVal
         * @static
         * @param {ResponsePackage.IRespIntKeyLongVal} message RespIntKeyLongVal message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RespIntKeyLongVal.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RespIntKeyLongVal message from the specified reader or buffer.
         * @function decode
         * @memberof ResponsePackage.RespIntKeyLongVal
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {ResponsePackage.RespIntKeyLongVal} RespIntKeyLongVal
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RespIntKeyLongVal.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ResponsePackage.RespIntKeyLongVal();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.key = reader.sint32();
                    break;
                case 2:
                    message.value = reader.sint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a RespIntKeyLongVal message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof ResponsePackage.RespIntKeyLongVal
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {ResponsePackage.RespIntKeyLongVal} RespIntKeyLongVal
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RespIntKeyLongVal.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a RespIntKeyLongVal message.
         * @function verify
         * @memberof ResponsePackage.RespIntKeyLongVal
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        RespIntKeyLongVal.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.key != null && message.hasOwnProperty("key"))
                if (!$util.isInteger(message.key))
                    return "key: integer expected";
            if (message.value != null && message.hasOwnProperty("value"))
                if (!$util.isInteger(message.value) && !(message.value && $util.isInteger(message.value.low) && $util.isInteger(message.value.high)))
                    return "value: integer|Long expected";
            return null;
        };

        return RespIntKeyLongVal;
    })();

    ResponsePackage.RespIntKeyIntVal = (function() {

        /**
         * Properties of a RespIntKeyIntVal.
         * @memberof ResponsePackage
         * @interface IRespIntKeyIntVal
         * @property {number|null} [key] RespIntKeyIntVal key
         * @property {number|null} [value] RespIntKeyIntVal value
         */

        /**
         * Constructs a new RespIntKeyIntVal.
         * @memberof ResponsePackage
         * @classdesc Represents a RespIntKeyIntVal.
         * @implements IRespIntKeyIntVal
         * @constructor
         * @param {ResponsePackage.IRespIntKeyIntVal=} [properties] Properties to set
         */
        function RespIntKeyIntVal(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * RespIntKeyIntVal key.
         * @member {number} key
         * @memberof ResponsePackage.RespIntKeyIntVal
         * @instance
         */
        RespIntKeyIntVal.prototype.key = 0;

        /**
         * RespIntKeyIntVal value.
         * @member {number} value
         * @memberof ResponsePackage.RespIntKeyIntVal
         * @instance
         */
        RespIntKeyIntVal.prototype.value = 0;

        /**
         * Creates a new RespIntKeyIntVal instance using the specified properties.
         * @function create
         * @memberof ResponsePackage.RespIntKeyIntVal
         * @static
         * @param {ResponsePackage.IRespIntKeyIntVal=} [properties] Properties to set
         * @returns {ResponsePackage.RespIntKeyIntVal} RespIntKeyIntVal instance
         */
        RespIntKeyIntVal.create = function create(properties) {
            return new RespIntKeyIntVal(properties);
        };

        /**
         * Encodes the specified RespIntKeyIntVal message. Does not implicitly {@link ResponsePackage.RespIntKeyIntVal.verify|verify} messages.
         * @function encode
         * @memberof ResponsePackage.RespIntKeyIntVal
         * @static
         * @param {ResponsePackage.IRespIntKeyIntVal} message RespIntKeyIntVal message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RespIntKeyIntVal.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.key != null && message.hasOwnProperty("key"))
                writer.uint32(/* id 1, wireType 0 =*/8).sint32(message.key);
            if (message.value != null && message.hasOwnProperty("value"))
                writer.uint32(/* id 2, wireType 0 =*/16).sint32(message.value);
            return writer;
        };

        /**
         * Encodes the specified RespIntKeyIntVal message, length delimited. Does not implicitly {@link ResponsePackage.RespIntKeyIntVal.verify|verify} messages.
         * @function encodeDelimited
         * @memberof ResponsePackage.RespIntKeyIntVal
         * @static
         * @param {ResponsePackage.IRespIntKeyIntVal} message RespIntKeyIntVal message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RespIntKeyIntVal.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RespIntKeyIntVal message from the specified reader or buffer.
         * @function decode
         * @memberof ResponsePackage.RespIntKeyIntVal
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {ResponsePackage.RespIntKeyIntVal} RespIntKeyIntVal
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RespIntKeyIntVal.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ResponsePackage.RespIntKeyIntVal();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.key = reader.sint32();
                    break;
                case 2:
                    message.value = reader.sint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a RespIntKeyIntVal message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof ResponsePackage.RespIntKeyIntVal
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {ResponsePackage.RespIntKeyIntVal} RespIntKeyIntVal
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RespIntKeyIntVal.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a RespIntKeyIntVal message.
         * @function verify
         * @memberof ResponsePackage.RespIntKeyIntVal
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        RespIntKeyIntVal.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.key != null && message.hasOwnProperty("key"))
                if (!$util.isInteger(message.key))
                    return "key: integer expected";
            if (message.value != null && message.hasOwnProperty("value"))
                if (!$util.isInteger(message.value))
                    return "value: integer expected";
            return null;
        };

        return RespIntKeyIntVal;
    })();

    ResponsePackage.RespPrize = (function() {

        /**
         * Properties of a RespPrize.
         * @memberof ResponsePackage
         * @interface IRespPrize
         * @property {Array.<ResponsePackage.IRespIntKeyLongVal>|null} [currencyPrize] RespPrize currencyPrize
         * @property {Array.<ResponsePackage.IRespIntKeyIntVal>|null} [countItemPrize] RespPrize countItemPrize
         */

        /**
         * Constructs a new RespPrize.
         * @memberof ResponsePackage
         * @classdesc Represents a RespPrize.
         * @implements IRespPrize
         * @constructor
         * @param {ResponsePackage.IRespPrize=} [properties] Properties to set
         */
        function RespPrize(properties) {
            this.currencyPrize = [];
            this.countItemPrize = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * RespPrize currencyPrize.
         * @member {Array.<ResponsePackage.IRespIntKeyLongVal>} currencyPrize
         * @memberof ResponsePackage.RespPrize
         * @instance
         */
        RespPrize.prototype.currencyPrize = $util.emptyArray;

        /**
         * RespPrize countItemPrize.
         * @member {Array.<ResponsePackage.IRespIntKeyIntVal>} countItemPrize
         * @memberof ResponsePackage.RespPrize
         * @instance
         */
        RespPrize.prototype.countItemPrize = $util.emptyArray;

        /**
         * Creates a new RespPrize instance using the specified properties.
         * @function create
         * @memberof ResponsePackage.RespPrize
         * @static
         * @param {ResponsePackage.IRespPrize=} [properties] Properties to set
         * @returns {ResponsePackage.RespPrize} RespPrize instance
         */
        RespPrize.create = function create(properties) {
            return new RespPrize(properties);
        };

        /**
         * Encodes the specified RespPrize message. Does not implicitly {@link ResponsePackage.RespPrize.verify|verify} messages.
         * @function encode
         * @memberof ResponsePackage.RespPrize
         * @static
         * @param {ResponsePackage.IRespPrize} message RespPrize message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RespPrize.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.currencyPrize != null && message.currencyPrize.length)
                for (var i = 0; i < message.currencyPrize.length; ++i)
                    $root.ResponsePackage.RespIntKeyLongVal.encode(message.currencyPrize[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.countItemPrize != null && message.countItemPrize.length)
                for (var i = 0; i < message.countItemPrize.length; ++i)
                    $root.ResponsePackage.RespIntKeyIntVal.encode(message.countItemPrize[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified RespPrize message, length delimited. Does not implicitly {@link ResponsePackage.RespPrize.verify|verify} messages.
         * @function encodeDelimited
         * @memberof ResponsePackage.RespPrize
         * @static
         * @param {ResponsePackage.IRespPrize} message RespPrize message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RespPrize.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RespPrize message from the specified reader or buffer.
         * @function decode
         * @memberof ResponsePackage.RespPrize
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {ResponsePackage.RespPrize} RespPrize
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RespPrize.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ResponsePackage.RespPrize();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.currencyPrize && message.currencyPrize.length))
                        message.currencyPrize = [];
                    message.currencyPrize.push($root.ResponsePackage.RespIntKeyLongVal.decode(reader, reader.uint32()));
                    break;
                case 2:
                    if (!(message.countItemPrize && message.countItemPrize.length))
                        message.countItemPrize = [];
                    message.countItemPrize.push($root.ResponsePackage.RespIntKeyIntVal.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a RespPrize message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof ResponsePackage.RespPrize
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {ResponsePackage.RespPrize} RespPrize
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RespPrize.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a RespPrize message.
         * @function verify
         * @memberof ResponsePackage.RespPrize
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        RespPrize.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.currencyPrize != null && message.hasOwnProperty("currencyPrize")) {
                if (!Array.isArray(message.currencyPrize))
                    return "currencyPrize: array expected";
                for (var i = 0; i < message.currencyPrize.length; ++i) {
                    var error = $root.ResponsePackage.RespIntKeyLongVal.verify(message.currencyPrize[i]);
                    if (error)
                        return "currencyPrize." + error;
                }
            }
            if (message.countItemPrize != null && message.hasOwnProperty("countItemPrize")) {
                if (!Array.isArray(message.countItemPrize))
                    return "countItemPrize: array expected";
                for (var i = 0; i < message.countItemPrize.length; ++i) {
                    var error = $root.ResponsePackage.RespIntKeyIntVal.verify(message.countItemPrize[i]);
                    if (error)
                        return "countItemPrize." + error;
                }
            }
            return null;
        };

        return RespPrize;
    })();

    ResponsePackage.RespCk = (function() {

        /**
         * Properties of a RespCk.
         * @memberof ResponsePackage
         * @interface IRespCk
         * @property {Array.<ResponsePackage.IRespCkInfo>|null} [roleCks] RespCk roleCks
         */

        /**
         * Constructs a new RespCk.
         * @memberof ResponsePackage
         * @classdesc Represents a RespCk.
         * @implements IRespCk
         * @constructor
         * @param {ResponsePackage.IRespCk=} [properties] Properties to set
         */
        function RespCk(properties) {
            this.roleCks = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * RespCk roleCks.
         * @member {Array.<ResponsePackage.IRespCkInfo>} roleCks
         * @memberof ResponsePackage.RespCk
         * @instance
         */
        RespCk.prototype.roleCks = $util.emptyArray;

        /**
         * Creates a new RespCk instance using the specified properties.
         * @function create
         * @memberof ResponsePackage.RespCk
         * @static
         * @param {ResponsePackage.IRespCk=} [properties] Properties to set
         * @returns {ResponsePackage.RespCk} RespCk instance
         */
        RespCk.create = function create(properties) {
            return new RespCk(properties);
        };

        /**
         * Encodes the specified RespCk message. Does not implicitly {@link ResponsePackage.RespCk.verify|verify} messages.
         * @function encode
         * @memberof ResponsePackage.RespCk
         * @static
         * @param {ResponsePackage.IRespCk} message RespCk message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RespCk.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.roleCks != null && message.roleCks.length)
                for (var i = 0; i < message.roleCks.length; ++i)
                    $root.ResponsePackage.RespCkInfo.encode(message.roleCks[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified RespCk message, length delimited. Does not implicitly {@link ResponsePackage.RespCk.verify|verify} messages.
         * @function encodeDelimited
         * @memberof ResponsePackage.RespCk
         * @static
         * @param {ResponsePackage.IRespCk} message RespCk message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RespCk.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RespCk message from the specified reader or buffer.
         * @function decode
         * @memberof ResponsePackage.RespCk
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {ResponsePackage.RespCk} RespCk
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RespCk.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ResponsePackage.RespCk();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.roleCks && message.roleCks.length))
                        message.roleCks = [];
                    message.roleCks.push($root.ResponsePackage.RespCkInfo.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a RespCk message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof ResponsePackage.RespCk
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {ResponsePackage.RespCk} RespCk
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RespCk.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a RespCk message.
         * @function verify
         * @memberof ResponsePackage.RespCk
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        RespCk.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.roleCks != null && message.hasOwnProperty("roleCks")) {
                if (!Array.isArray(message.roleCks))
                    return "roleCks: array expected";
                for (var i = 0; i < message.roleCks.length; ++i) {
                    var error = $root.ResponsePackage.RespCkInfo.verify(message.roleCks[i]);
                    if (error)
                        return "roleCks." + error;
                }
            }
            return null;
        };

        return RespCk;
    })();

    ResponsePackage.RespCkInfo = (function() {

        /**
         * Properties of a RespCkInfo.
         * @memberof ResponsePackage
         * @interface IRespCkInfo
         * @property {number|null} [id] RespCkInfo id
         * @property {number|null} [seq] RespCkInfo seq
         * @property {string|null} [name] RespCkInfo name
         * @property {boolean|null} [lock] RespCkInfo lock
         * @property {number|Long|null} [birthTime] RespCkInfo birthTime
         * @property {string|null} [launch] RespCkInfo launch
         * @property {number|null} [level] RespCkInfo level
         * @property {number|null} [life] RespCkInfo life
         * @property {number|null} [quality] RespCkInfo quality
         * @property {number|null} [lineage] RespCkInfo lineage
         * @property {number|null} [strength] RespCkInfo strength
         * @property {number|null} [wisdom] RespCkInfo wisdom
         * @property {number|null} [agile] RespCkInfo agile
         * @property {number|null} [health] RespCkInfo health
         * @property {number|null} [spirit] RespCkInfo spirit
         * @property {number|null} [luck] RespCkInfo luck
         * @property {Array.<number>|null} [professionList] RespCkInfo professionList
         * @property {Array.<number>|null} [specialtyList] RespCkInfo specialtyList
         */

        /**
         * Constructs a new RespCkInfo.
         * @memberof ResponsePackage
         * @classdesc Represents a RespCkInfo.
         * @implements IRespCkInfo
         * @constructor
         * @param {ResponsePackage.IRespCkInfo=} [properties] Properties to set
         */
        function RespCkInfo(properties) {
            this.professionList = [];
            this.specialtyList = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * RespCkInfo id.
         * @member {number} id
         * @memberof ResponsePackage.RespCkInfo
         * @instance
         */
        RespCkInfo.prototype.id = 0;

        /**
         * RespCkInfo seq.
         * @member {number} seq
         * @memberof ResponsePackage.RespCkInfo
         * @instance
         */
        RespCkInfo.prototype.seq = 0;

        /**
         * RespCkInfo name.
         * @member {string} name
         * @memberof ResponsePackage.RespCkInfo
         * @instance
         */
        RespCkInfo.prototype.name = "";

        /**
         * RespCkInfo lock.
         * @member {boolean} lock
         * @memberof ResponsePackage.RespCkInfo
         * @instance
         */
        RespCkInfo.prototype.lock = false;

        /**
         * RespCkInfo birthTime.
         * @member {number|Long} birthTime
         * @memberof ResponsePackage.RespCkInfo
         * @instance
         */
        RespCkInfo.prototype.birthTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * RespCkInfo launch.
         * @member {string} launch
         * @memberof ResponsePackage.RespCkInfo
         * @instance
         */
        RespCkInfo.prototype.launch = "";

        /**
         * RespCkInfo level.
         * @member {number} level
         * @memberof ResponsePackage.RespCkInfo
         * @instance
         */
        RespCkInfo.prototype.level = 0;

        /**
         * RespCkInfo life.
         * @member {number} life
         * @memberof ResponsePackage.RespCkInfo
         * @instance
         */
        RespCkInfo.prototype.life = 0;

        /**
         * RespCkInfo quality.
         * @member {number} quality
         * @memberof ResponsePackage.RespCkInfo
         * @instance
         */
        RespCkInfo.prototype.quality = 0;

        /**
         * RespCkInfo lineage.
         * @member {number} lineage
         * @memberof ResponsePackage.RespCkInfo
         * @instance
         */
        RespCkInfo.prototype.lineage = 0;

        /**
         * RespCkInfo strength.
         * @member {number} strength
         * @memberof ResponsePackage.RespCkInfo
         * @instance
         */
        RespCkInfo.prototype.strength = 0;

        /**
         * RespCkInfo wisdom.
         * @member {number} wisdom
         * @memberof ResponsePackage.RespCkInfo
         * @instance
         */
        RespCkInfo.prototype.wisdom = 0;

        /**
         * RespCkInfo agile.
         * @member {number} agile
         * @memberof ResponsePackage.RespCkInfo
         * @instance
         */
        RespCkInfo.prototype.agile = 0;

        /**
         * RespCkInfo health.
         * @member {number} health
         * @memberof ResponsePackage.RespCkInfo
         * @instance
         */
        RespCkInfo.prototype.health = 0;

        /**
         * RespCkInfo spirit.
         * @member {number} spirit
         * @memberof ResponsePackage.RespCkInfo
         * @instance
         */
        RespCkInfo.prototype.spirit = 0;

        /**
         * RespCkInfo luck.
         * @member {number} luck
         * @memberof ResponsePackage.RespCkInfo
         * @instance
         */
        RespCkInfo.prototype.luck = 0;

        /**
         * RespCkInfo professionList.
         * @member {Array.<number>} professionList
         * @memberof ResponsePackage.RespCkInfo
         * @instance
         */
        RespCkInfo.prototype.professionList = $util.emptyArray;

        /**
         * RespCkInfo specialtyList.
         * @member {Array.<number>} specialtyList
         * @memberof ResponsePackage.RespCkInfo
         * @instance
         */
        RespCkInfo.prototype.specialtyList = $util.emptyArray;

        /**
         * Creates a new RespCkInfo instance using the specified properties.
         * @function create
         * @memberof ResponsePackage.RespCkInfo
         * @static
         * @param {ResponsePackage.IRespCkInfo=} [properties] Properties to set
         * @returns {ResponsePackage.RespCkInfo} RespCkInfo instance
         */
        RespCkInfo.create = function create(properties) {
            return new RespCkInfo(properties);
        };

        /**
         * Encodes the specified RespCkInfo message. Does not implicitly {@link ResponsePackage.RespCkInfo.verify|verify} messages.
         * @function encode
         * @memberof ResponsePackage.RespCkInfo
         * @static
         * @param {ResponsePackage.IRespCkInfo} message RespCkInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RespCkInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && message.hasOwnProperty("id"))
                writer.uint32(/* id 1, wireType 0 =*/8).sint32(message.id);
            if (message.seq != null && message.hasOwnProperty("seq"))
                writer.uint32(/* id 2, wireType 0 =*/16).sint32(message.seq);
            if (message.name != null && message.hasOwnProperty("name"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.name);
            if (message.lock != null && message.hasOwnProperty("lock"))
                writer.uint32(/* id 4, wireType 0 =*/32).bool(message.lock);
            if (message.birthTime != null && message.hasOwnProperty("birthTime"))
                writer.uint32(/* id 5, wireType 0 =*/40).sint64(message.birthTime);
            if (message.launch != null && message.hasOwnProperty("launch"))
                writer.uint32(/* id 6, wireType 2 =*/50).string(message.launch);
            if (message.level != null && message.hasOwnProperty("level"))
                writer.uint32(/* id 7, wireType 0 =*/56).sint32(message.level);
            if (message.life != null && message.hasOwnProperty("life"))
                writer.uint32(/* id 8, wireType 0 =*/64).sint32(message.life);
            if (message.quality != null && message.hasOwnProperty("quality"))
                writer.uint32(/* id 9, wireType 0 =*/72).sint32(message.quality);
            if (message.lineage != null && message.hasOwnProperty("lineage"))
                writer.uint32(/* id 10, wireType 0 =*/80).sint32(message.lineage);
            if (message.strength != null && message.hasOwnProperty("strength"))
                writer.uint32(/* id 11, wireType 0 =*/88).sint32(message.strength);
            if (message.wisdom != null && message.hasOwnProperty("wisdom"))
                writer.uint32(/* id 12, wireType 0 =*/96).sint32(message.wisdom);
            if (message.agile != null && message.hasOwnProperty("agile"))
                writer.uint32(/* id 13, wireType 0 =*/104).sint32(message.agile);
            if (message.health != null && message.hasOwnProperty("health"))
                writer.uint32(/* id 14, wireType 0 =*/112).sint32(message.health);
            if (message.spirit != null && message.hasOwnProperty("spirit"))
                writer.uint32(/* id 15, wireType 0 =*/120).sint32(message.spirit);
            if (message.luck != null && message.hasOwnProperty("luck"))
                writer.uint32(/* id 16, wireType 0 =*/128).sint32(message.luck);
            if (message.professionList != null && message.professionList.length) {
                writer.uint32(/* id 17, wireType 2 =*/138).fork();
                for (var i = 0; i < message.professionList.length; ++i)
                    writer.sint32(message.professionList[i]);
                writer.ldelim();
            }
            if (message.specialtyList != null && message.specialtyList.length) {
                writer.uint32(/* id 18, wireType 2 =*/146).fork();
                for (var i = 0; i < message.specialtyList.length; ++i)
                    writer.sint32(message.specialtyList[i]);
                writer.ldelim();
            }
            return writer;
        };

        /**
         * Encodes the specified RespCkInfo message, length delimited. Does not implicitly {@link ResponsePackage.RespCkInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof ResponsePackage.RespCkInfo
         * @static
         * @param {ResponsePackage.IRespCkInfo} message RespCkInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RespCkInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RespCkInfo message from the specified reader or buffer.
         * @function decode
         * @memberof ResponsePackage.RespCkInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {ResponsePackage.RespCkInfo} RespCkInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RespCkInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ResponsePackage.RespCkInfo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.id = reader.sint32();
                    break;
                case 2:
                    message.seq = reader.sint32();
                    break;
                case 3:
                    message.name = reader.string();
                    break;
                case 4:
                    message.lock = reader.bool();
                    break;
                case 5:
                    message.birthTime = reader.sint64();
                    break;
                case 6:
                    message.launch = reader.string();
                    break;
                case 7:
                    message.level = reader.sint32();
                    break;
                case 8:
                    message.life = reader.sint32();
                    break;
                case 9:
                    message.quality = reader.sint32();
                    break;
                case 10:
                    message.lineage = reader.sint32();
                    break;
                case 11:
                    message.strength = reader.sint32();
                    break;
                case 12:
                    message.wisdom = reader.sint32();
                    break;
                case 13:
                    message.agile = reader.sint32();
                    break;
                case 14:
                    message.health = reader.sint32();
                    break;
                case 15:
                    message.spirit = reader.sint32();
                    break;
                case 16:
                    message.luck = reader.sint32();
                    break;
                case 17:
                    if (!(message.professionList && message.professionList.length))
                        message.professionList = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.professionList.push(reader.sint32());
                    } else
                        message.professionList.push(reader.sint32());
                    break;
                case 18:
                    if (!(message.specialtyList && message.specialtyList.length))
                        message.specialtyList = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.specialtyList.push(reader.sint32());
                    } else
                        message.specialtyList.push(reader.sint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a RespCkInfo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof ResponsePackage.RespCkInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {ResponsePackage.RespCkInfo} RespCkInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RespCkInfo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a RespCkInfo message.
         * @function verify
         * @memberof ResponsePackage.RespCkInfo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        RespCkInfo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isInteger(message.id))
                    return "id: integer expected";
            if (message.seq != null && message.hasOwnProperty("seq"))
                if (!$util.isInteger(message.seq))
                    return "seq: integer expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            if (message.lock != null && message.hasOwnProperty("lock"))
                if (typeof message.lock !== "boolean")
                    return "lock: boolean expected";
            if (message.birthTime != null && message.hasOwnProperty("birthTime"))
                if (!$util.isInteger(message.birthTime) && !(message.birthTime && $util.isInteger(message.birthTime.low) && $util.isInteger(message.birthTime.high)))
                    return "birthTime: integer|Long expected";
            if (message.launch != null && message.hasOwnProperty("launch"))
                if (!$util.isString(message.launch))
                    return "launch: string expected";
            if (message.level != null && message.hasOwnProperty("level"))
                if (!$util.isInteger(message.level))
                    return "level: integer expected";
            if (message.life != null && message.hasOwnProperty("life"))
                if (!$util.isInteger(message.life))
                    return "life: integer expected";
            if (message.quality != null && message.hasOwnProperty("quality"))
                if (!$util.isInteger(message.quality))
                    return "quality: integer expected";
            if (message.lineage != null && message.hasOwnProperty("lineage"))
                if (!$util.isInteger(message.lineage))
                    return "lineage: integer expected";
            if (message.strength != null && message.hasOwnProperty("strength"))
                if (!$util.isInteger(message.strength))
                    return "strength: integer expected";
            if (message.wisdom != null && message.hasOwnProperty("wisdom"))
                if (!$util.isInteger(message.wisdom))
                    return "wisdom: integer expected";
            if (message.agile != null && message.hasOwnProperty("agile"))
                if (!$util.isInteger(message.agile))
                    return "agile: integer expected";
            if (message.health != null && message.hasOwnProperty("health"))
                if (!$util.isInteger(message.health))
                    return "health: integer expected";
            if (message.spirit != null && message.hasOwnProperty("spirit"))
                if (!$util.isInteger(message.spirit))
                    return "spirit: integer expected";
            if (message.luck != null && message.hasOwnProperty("luck"))
                if (!$util.isInteger(message.luck))
                    return "luck: integer expected";
            if (message.professionList != null && message.hasOwnProperty("professionList")) {
                if (!Array.isArray(message.professionList))
                    return "professionList: array expected";
                for (var i = 0; i < message.professionList.length; ++i)
                    if (!$util.isInteger(message.professionList[i]))
                        return "professionList: integer[] expected";
            }
            if (message.specialtyList != null && message.hasOwnProperty("specialtyList")) {
                if (!Array.isArray(message.specialtyList))
                    return "specialtyList: array expected";
                for (var i = 0; i < message.specialtyList.length; ++i)
                    if (!$util.isInteger(message.specialtyList[i]))
                        return "specialtyList: integer[] expected";
            }
            return null;
        };

        return RespCkInfo;
    })();

    ResponsePackage.RespLong = (function() {

        /**
         * Properties of a RespLong.
         * @memberof ResponsePackage
         * @interface IRespLong
         * @property {number|Long|null} [value] RespLong value
         */

        /**
         * Constructs a new RespLong.
         * @memberof ResponsePackage
         * @classdesc Represents a RespLong.
         * @implements IRespLong
         * @constructor
         * @param {ResponsePackage.IRespLong=} [properties] Properties to set
         */
        function RespLong(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * RespLong value.
         * @member {number|Long} value
         * @memberof ResponsePackage.RespLong
         * @instance
         */
        RespLong.prototype.value = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new RespLong instance using the specified properties.
         * @function create
         * @memberof ResponsePackage.RespLong
         * @static
         * @param {ResponsePackage.IRespLong=} [properties] Properties to set
         * @returns {ResponsePackage.RespLong} RespLong instance
         */
        RespLong.create = function create(properties) {
            return new RespLong(properties);
        };

        /**
         * Encodes the specified RespLong message. Does not implicitly {@link ResponsePackage.RespLong.verify|verify} messages.
         * @function encode
         * @memberof ResponsePackage.RespLong
         * @static
         * @param {ResponsePackage.IRespLong} message RespLong message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RespLong.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.value != null && message.hasOwnProperty("value"))
                writer.uint32(/* id 1, wireType 0 =*/8).sint64(message.value);
            return writer;
        };

        /**
         * Encodes the specified RespLong message, length delimited. Does not implicitly {@link ResponsePackage.RespLong.verify|verify} messages.
         * @function encodeDelimited
         * @memberof ResponsePackage.RespLong
         * @static
         * @param {ResponsePackage.IRespLong} message RespLong message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RespLong.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RespLong message from the specified reader or buffer.
         * @function decode
         * @memberof ResponsePackage.RespLong
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {ResponsePackage.RespLong} RespLong
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RespLong.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ResponsePackage.RespLong();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.value = reader.sint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a RespLong message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof ResponsePackage.RespLong
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {ResponsePackage.RespLong} RespLong
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RespLong.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a RespLong message.
         * @function verify
         * @memberof ResponsePackage.RespLong
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        RespLong.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.value != null && message.hasOwnProperty("value"))
                if (!$util.isInteger(message.value) && !(message.value && $util.isInteger(message.value.low) && $util.isInteger(message.value.high)))
                    return "value: integer|Long expected";
            return null;
        };

        return RespLong;
    })();

    ResponsePackage.RespMail = (function() {

        /**
         * Properties of a RespMail.
         * @memberof ResponsePackage
         * @interface IRespMail
         * @property {Array.<ResponsePackage.IRespMailInfo>|null} [mails] RespMail mails
         * @property {ResponsePackage.IRespMailOp|null} [mailOp] RespMail mailOp
         */

        /**
         * Constructs a new RespMail.
         * @memberof ResponsePackage
         * @classdesc Represents a RespMail.
         * @implements IRespMail
         * @constructor
         * @param {ResponsePackage.IRespMail=} [properties] Properties to set
         */
        function RespMail(properties) {
            this.mails = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * RespMail mails.
         * @member {Array.<ResponsePackage.IRespMailInfo>} mails
         * @memberof ResponsePackage.RespMail
         * @instance
         */
        RespMail.prototype.mails = $util.emptyArray;

        /**
         * RespMail mailOp.
         * @member {ResponsePackage.IRespMailOp|null|undefined} mailOp
         * @memberof ResponsePackage.RespMail
         * @instance
         */
        RespMail.prototype.mailOp = null;

        /**
         * Creates a new RespMail instance using the specified properties.
         * @function create
         * @memberof ResponsePackage.RespMail
         * @static
         * @param {ResponsePackage.IRespMail=} [properties] Properties to set
         * @returns {ResponsePackage.RespMail} RespMail instance
         */
        RespMail.create = function create(properties) {
            return new RespMail(properties);
        };

        /**
         * Encodes the specified RespMail message. Does not implicitly {@link ResponsePackage.RespMail.verify|verify} messages.
         * @function encode
         * @memberof ResponsePackage.RespMail
         * @static
         * @param {ResponsePackage.IRespMail} message RespMail message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RespMail.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.mails != null && message.mails.length)
                for (var i = 0; i < message.mails.length; ++i)
                    $root.ResponsePackage.RespMailInfo.encode(message.mails[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.mailOp != null && message.hasOwnProperty("mailOp"))
                $root.ResponsePackage.RespMailOp.encode(message.mailOp, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified RespMail message, length delimited. Does not implicitly {@link ResponsePackage.RespMail.verify|verify} messages.
         * @function encodeDelimited
         * @memberof ResponsePackage.RespMail
         * @static
         * @param {ResponsePackage.IRespMail} message RespMail message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RespMail.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RespMail message from the specified reader or buffer.
         * @function decode
         * @memberof ResponsePackage.RespMail
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {ResponsePackage.RespMail} RespMail
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RespMail.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ResponsePackage.RespMail();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.mails && message.mails.length))
                        message.mails = [];
                    message.mails.push($root.ResponsePackage.RespMailInfo.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.mailOp = $root.ResponsePackage.RespMailOp.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a RespMail message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof ResponsePackage.RespMail
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {ResponsePackage.RespMail} RespMail
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RespMail.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a RespMail message.
         * @function verify
         * @memberof ResponsePackage.RespMail
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        RespMail.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.mails != null && message.hasOwnProperty("mails")) {
                if (!Array.isArray(message.mails))
                    return "mails: array expected";
                for (var i = 0; i < message.mails.length; ++i) {
                    var error = $root.ResponsePackage.RespMailInfo.verify(message.mails[i]);
                    if (error)
                        return "mails." + error;
                }
            }
            if (message.mailOp != null && message.hasOwnProperty("mailOp")) {
                var error = $root.ResponsePackage.RespMailOp.verify(message.mailOp);
                if (error)
                    return "mailOp." + error;
            }
            return null;
        };

        return RespMail;
    })();

    ResponsePackage.RespMailInfo = (function() {

        /**
         * Properties of a RespMailInfo.
         * @memberof ResponsePackage
         * @interface IRespMailInfo
         * @property {number|null} [id] RespMailInfo id
         * @property {string|null} [senderName] RespMailInfo senderName
         * @property {number|null} [sendIcon] RespMailInfo sendIcon
         * @property {number|Long|null} [sendTime] RespMailInfo sendTime
         * @property {number|null} [type] RespMailInfo type
         * @property {string|null} [title] RespMailInfo title
         * @property {string|null} [context] RespMailInfo context
         * @property {Array.<string>|null} [params] RespMailInfo params
         * @property {boolean|null} [read] RespMailInfo read
         * @property {Array.<ResponsePackage.IRespFunc>|null} [items] RespMailInfo items
         */

        /**
         * Constructs a new RespMailInfo.
         * @memberof ResponsePackage
         * @classdesc Represents a RespMailInfo.
         * @implements IRespMailInfo
         * @constructor
         * @param {ResponsePackage.IRespMailInfo=} [properties] Properties to set
         */
        function RespMailInfo(properties) {
            this.params = [];
            this.items = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * RespMailInfo id.
         * @member {number} id
         * @memberof ResponsePackage.RespMailInfo
         * @instance
         */
        RespMailInfo.prototype.id = 0;

        /**
         * RespMailInfo senderName.
         * @member {string} senderName
         * @memberof ResponsePackage.RespMailInfo
         * @instance
         */
        RespMailInfo.prototype.senderName = "";

        /**
         * RespMailInfo sendIcon.
         * @member {number} sendIcon
         * @memberof ResponsePackage.RespMailInfo
         * @instance
         */
        RespMailInfo.prototype.sendIcon = 0;

        /**
         * RespMailInfo sendTime.
         * @member {number|Long} sendTime
         * @memberof ResponsePackage.RespMailInfo
         * @instance
         */
        RespMailInfo.prototype.sendTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * RespMailInfo type.
         * @member {number} type
         * @memberof ResponsePackage.RespMailInfo
         * @instance
         */
        RespMailInfo.prototype.type = 0;

        /**
         * RespMailInfo title.
         * @member {string} title
         * @memberof ResponsePackage.RespMailInfo
         * @instance
         */
        RespMailInfo.prototype.title = "";

        /**
         * RespMailInfo context.
         * @member {string} context
         * @memberof ResponsePackage.RespMailInfo
         * @instance
         */
        RespMailInfo.prototype.context = "";

        /**
         * RespMailInfo params.
         * @member {Array.<string>} params
         * @memberof ResponsePackage.RespMailInfo
         * @instance
         */
        RespMailInfo.prototype.params = $util.emptyArray;

        /**
         * RespMailInfo read.
         * @member {boolean} read
         * @memberof ResponsePackage.RespMailInfo
         * @instance
         */
        RespMailInfo.prototype.read = false;

        /**
         * RespMailInfo items.
         * @member {Array.<ResponsePackage.IRespFunc>} items
         * @memberof ResponsePackage.RespMailInfo
         * @instance
         */
        RespMailInfo.prototype.items = $util.emptyArray;

        /**
         * Creates a new RespMailInfo instance using the specified properties.
         * @function create
         * @memberof ResponsePackage.RespMailInfo
         * @static
         * @param {ResponsePackage.IRespMailInfo=} [properties] Properties to set
         * @returns {ResponsePackage.RespMailInfo} RespMailInfo instance
         */
        RespMailInfo.create = function create(properties) {
            return new RespMailInfo(properties);
        };

        /**
         * Encodes the specified RespMailInfo message. Does not implicitly {@link ResponsePackage.RespMailInfo.verify|verify} messages.
         * @function encode
         * @memberof ResponsePackage.RespMailInfo
         * @static
         * @param {ResponsePackage.IRespMailInfo} message RespMailInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RespMailInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && message.hasOwnProperty("id"))
                writer.uint32(/* id 1, wireType 0 =*/8).sint32(message.id);
            if (message.senderName != null && message.hasOwnProperty("senderName"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.senderName);
            if (message.sendIcon != null && message.hasOwnProperty("sendIcon"))
                writer.uint32(/* id 3, wireType 0 =*/24).sint32(message.sendIcon);
            if (message.sendTime != null && message.hasOwnProperty("sendTime"))
                writer.uint32(/* id 4, wireType 0 =*/32).sint64(message.sendTime);
            if (message.type != null && message.hasOwnProperty("type"))
                writer.uint32(/* id 5, wireType 0 =*/40).sint32(message.type);
            if (message.title != null && message.hasOwnProperty("title"))
                writer.uint32(/* id 6, wireType 2 =*/50).string(message.title);
            if (message.context != null && message.hasOwnProperty("context"))
                writer.uint32(/* id 7, wireType 2 =*/58).string(message.context);
            if (message.params != null && message.params.length)
                for (var i = 0; i < message.params.length; ++i)
                    writer.uint32(/* id 8, wireType 2 =*/66).string(message.params[i]);
            if (message.read != null && message.hasOwnProperty("read"))
                writer.uint32(/* id 9, wireType 0 =*/72).bool(message.read);
            if (message.items != null && message.items.length)
                for (var i = 0; i < message.items.length; ++i)
                    $root.ResponsePackage.RespFunc.encode(message.items[i], writer.uint32(/* id 10, wireType 2 =*/82).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified RespMailInfo message, length delimited. Does not implicitly {@link ResponsePackage.RespMailInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof ResponsePackage.RespMailInfo
         * @static
         * @param {ResponsePackage.IRespMailInfo} message RespMailInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RespMailInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RespMailInfo message from the specified reader or buffer.
         * @function decode
         * @memberof ResponsePackage.RespMailInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {ResponsePackage.RespMailInfo} RespMailInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RespMailInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ResponsePackage.RespMailInfo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.id = reader.sint32();
                    break;
                case 2:
                    message.senderName = reader.string();
                    break;
                case 3:
                    message.sendIcon = reader.sint32();
                    break;
                case 4:
                    message.sendTime = reader.sint64();
                    break;
                case 5:
                    message.type = reader.sint32();
                    break;
                case 6:
                    message.title = reader.string();
                    break;
                case 7:
                    message.context = reader.string();
                    break;
                case 8:
                    if (!(message.params && message.params.length))
                        message.params = [];
                    message.params.push(reader.string());
                    break;
                case 9:
                    message.read = reader.bool();
                    break;
                case 10:
                    if (!(message.items && message.items.length))
                        message.items = [];
                    message.items.push($root.ResponsePackage.RespFunc.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a RespMailInfo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof ResponsePackage.RespMailInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {ResponsePackage.RespMailInfo} RespMailInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RespMailInfo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a RespMailInfo message.
         * @function verify
         * @memberof ResponsePackage.RespMailInfo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        RespMailInfo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isInteger(message.id))
                    return "id: integer expected";
            if (message.senderName != null && message.hasOwnProperty("senderName"))
                if (!$util.isString(message.senderName))
                    return "senderName: string expected";
            if (message.sendIcon != null && message.hasOwnProperty("sendIcon"))
                if (!$util.isInteger(message.sendIcon))
                    return "sendIcon: integer expected";
            if (message.sendTime != null && message.hasOwnProperty("sendTime"))
                if (!$util.isInteger(message.sendTime) && !(message.sendTime && $util.isInteger(message.sendTime.low) && $util.isInteger(message.sendTime.high)))
                    return "sendTime: integer|Long expected";
            if (message.type != null && message.hasOwnProperty("type"))
                if (!$util.isInteger(message.type))
                    return "type: integer expected";
            if (message.title != null && message.hasOwnProperty("title"))
                if (!$util.isString(message.title))
                    return "title: string expected";
            if (message.context != null && message.hasOwnProperty("context"))
                if (!$util.isString(message.context))
                    return "context: string expected";
            if (message.params != null && message.hasOwnProperty("params")) {
                if (!Array.isArray(message.params))
                    return "params: array expected";
                for (var i = 0; i < message.params.length; ++i)
                    if (!$util.isString(message.params[i]))
                        return "params: string[] expected";
            }
            if (message.read != null && message.hasOwnProperty("read"))
                if (typeof message.read !== "boolean")
                    return "read: boolean expected";
            if (message.items != null && message.hasOwnProperty("items")) {
                if (!Array.isArray(message.items))
                    return "items: array expected";
                for (var i = 0; i < message.items.length; ++i) {
                    var error = $root.ResponsePackage.RespFunc.verify(message.items[i]);
                    if (error)
                        return "items." + error;
                }
            }
            return null;
        };

        return RespMailInfo;
    })();

    ResponsePackage.RespFunc = (function() {

        /**
         * Properties of a RespFunc.
         * @memberof ResponsePackage
         * @interface IRespFunc
         * @property {number|null} [param] RespFunc param
         * @property {number|null} [type] RespFunc type
         * @property {number|Long|null} [value] RespFunc value
         * @property {number|null} [param1] RespFunc param1
         * @property {number|null} [param2] RespFunc param2
         * @property {number|null} [param3] RespFunc param3
         */

        /**
         * Constructs a new RespFunc.
         * @memberof ResponsePackage
         * @classdesc Represents a RespFunc.
         * @implements IRespFunc
         * @constructor
         * @param {ResponsePackage.IRespFunc=} [properties] Properties to set
         */
        function RespFunc(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * RespFunc param.
         * @member {number} param
         * @memberof ResponsePackage.RespFunc
         * @instance
         */
        RespFunc.prototype.param = 0;

        /**
         * RespFunc type.
         * @member {number} type
         * @memberof ResponsePackage.RespFunc
         * @instance
         */
        RespFunc.prototype.type = 0;

        /**
         * RespFunc value.
         * @member {number|Long} value
         * @memberof ResponsePackage.RespFunc
         * @instance
         */
        RespFunc.prototype.value = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * RespFunc param1.
         * @member {number} param1
         * @memberof ResponsePackage.RespFunc
         * @instance
         */
        RespFunc.prototype.param1 = 0;

        /**
         * RespFunc param2.
         * @member {number} param2
         * @memberof ResponsePackage.RespFunc
         * @instance
         */
        RespFunc.prototype.param2 = 0;

        /**
         * RespFunc param3.
         * @member {number} param3
         * @memberof ResponsePackage.RespFunc
         * @instance
         */
        RespFunc.prototype.param3 = 0;

        /**
         * Creates a new RespFunc instance using the specified properties.
         * @function create
         * @memberof ResponsePackage.RespFunc
         * @static
         * @param {ResponsePackage.IRespFunc=} [properties] Properties to set
         * @returns {ResponsePackage.RespFunc} RespFunc instance
         */
        RespFunc.create = function create(properties) {
            return new RespFunc(properties);
        };

        /**
         * Encodes the specified RespFunc message. Does not implicitly {@link ResponsePackage.RespFunc.verify|verify} messages.
         * @function encode
         * @memberof ResponsePackage.RespFunc
         * @static
         * @param {ResponsePackage.IRespFunc} message RespFunc message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RespFunc.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.param != null && message.hasOwnProperty("param"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.param);
            if (message.type != null && message.hasOwnProperty("type"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.type);
            if (message.value != null && message.hasOwnProperty("value"))
                writer.uint32(/* id 3, wireType 0 =*/24).int64(message.value);
            if (message.param1 != null && message.hasOwnProperty("param1"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.param1);
            if (message.param2 != null && message.hasOwnProperty("param2"))
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.param2);
            if (message.param3 != null && message.hasOwnProperty("param3"))
                writer.uint32(/* id 6, wireType 0 =*/48).int32(message.param3);
            return writer;
        };

        /**
         * Encodes the specified RespFunc message, length delimited. Does not implicitly {@link ResponsePackage.RespFunc.verify|verify} messages.
         * @function encodeDelimited
         * @memberof ResponsePackage.RespFunc
         * @static
         * @param {ResponsePackage.IRespFunc} message RespFunc message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RespFunc.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RespFunc message from the specified reader or buffer.
         * @function decode
         * @memberof ResponsePackage.RespFunc
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {ResponsePackage.RespFunc} RespFunc
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RespFunc.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ResponsePackage.RespFunc();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.param = reader.int32();
                    break;
                case 2:
                    message.type = reader.int32();
                    break;
                case 3:
                    message.value = reader.int64();
                    break;
                case 4:
                    message.param1 = reader.int32();
                    break;
                case 5:
                    message.param2 = reader.int32();
                    break;
                case 6:
                    message.param3 = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a RespFunc message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof ResponsePackage.RespFunc
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {ResponsePackage.RespFunc} RespFunc
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RespFunc.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a RespFunc message.
         * @function verify
         * @memberof ResponsePackage.RespFunc
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        RespFunc.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.param != null && message.hasOwnProperty("param"))
                if (!$util.isInteger(message.param))
                    return "param: integer expected";
            if (message.type != null && message.hasOwnProperty("type"))
                if (!$util.isInteger(message.type))
                    return "type: integer expected";
            if (message.value != null && message.hasOwnProperty("value"))
                if (!$util.isInteger(message.value) && !(message.value && $util.isInteger(message.value.low) && $util.isInteger(message.value.high)))
                    return "value: integer|Long expected";
            if (message.param1 != null && message.hasOwnProperty("param1"))
                if (!$util.isInteger(message.param1))
                    return "param1: integer expected";
            if (message.param2 != null && message.hasOwnProperty("param2"))
                if (!$util.isInteger(message.param2))
                    return "param2: integer expected";
            if (message.param3 != null && message.hasOwnProperty("param3"))
                if (!$util.isInteger(message.param3))
                    return "param3: integer expected";
            return null;
        };

        return RespFunc;
    })();

    ResponsePackage.RespMailOp = (function() {

        /**
         * Properties of a RespMailOp.
         * @memberof ResponsePackage
         * @interface IRespMailOp
         * @property {number|null} [id] RespMailOp id
         * @property {boolean|null} [read] RespMailOp read
         */

        /**
         * Constructs a new RespMailOp.
         * @memberof ResponsePackage
         * @classdesc Represents a RespMailOp.
         * @implements IRespMailOp
         * @constructor
         * @param {ResponsePackage.IRespMailOp=} [properties] Properties to set
         */
        function RespMailOp(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * RespMailOp id.
         * @member {number} id
         * @memberof ResponsePackage.RespMailOp
         * @instance
         */
        RespMailOp.prototype.id = 0;

        /**
         * RespMailOp read.
         * @member {boolean} read
         * @memberof ResponsePackage.RespMailOp
         * @instance
         */
        RespMailOp.prototype.read = false;

        /**
         * Creates a new RespMailOp instance using the specified properties.
         * @function create
         * @memberof ResponsePackage.RespMailOp
         * @static
         * @param {ResponsePackage.IRespMailOp=} [properties] Properties to set
         * @returns {ResponsePackage.RespMailOp} RespMailOp instance
         */
        RespMailOp.create = function create(properties) {
            return new RespMailOp(properties);
        };

        /**
         * Encodes the specified RespMailOp message. Does not implicitly {@link ResponsePackage.RespMailOp.verify|verify} messages.
         * @function encode
         * @memberof ResponsePackage.RespMailOp
         * @static
         * @param {ResponsePackage.IRespMailOp} message RespMailOp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RespMailOp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && message.hasOwnProperty("id"))
                writer.uint32(/* id 1, wireType 0 =*/8).sint32(message.id);
            if (message.read != null && message.hasOwnProperty("read"))
                writer.uint32(/* id 2, wireType 0 =*/16).bool(message.read);
            return writer;
        };

        /**
         * Encodes the specified RespMailOp message, length delimited. Does not implicitly {@link ResponsePackage.RespMailOp.verify|verify} messages.
         * @function encodeDelimited
         * @memberof ResponsePackage.RespMailOp
         * @static
         * @param {ResponsePackage.IRespMailOp} message RespMailOp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RespMailOp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RespMailOp message from the specified reader or buffer.
         * @function decode
         * @memberof ResponsePackage.RespMailOp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {ResponsePackage.RespMailOp} RespMailOp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RespMailOp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ResponsePackage.RespMailOp();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.id = reader.sint32();
                    break;
                case 2:
                    message.read = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a RespMailOp message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof ResponsePackage.RespMailOp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {ResponsePackage.RespMailOp} RespMailOp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RespMailOp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a RespMailOp message.
         * @function verify
         * @memberof ResponsePackage.RespMailOp
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        RespMailOp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isInteger(message.id))
                    return "id: integer expected";
            if (message.read != null && message.hasOwnProperty("read"))
                if (typeof message.read !== "boolean")
                    return "read: boolean expected";
            return null;
        };

        return RespMailOp;
    })();

    ResponsePackage.RespRole = (function() {

        /**
         * Properties of a RespRole.
         * @memberof ResponsePackage
         * @interface IRespRole
         * @property {ResponsePackage.IRespRoleInfo|null} [roleInfo] RespRole roleInfo
         * @property {ResponsePackage.IRespRoleBaseInfo|null} [roleBaseInfo] RespRole roleBaseInfo
         * @property {ResponsePackage.IRespRoleOp|null} [roleOp] RespRole roleOp
         * @property {ResponsePackage.IRespBoolean|null} [createRole] RespRole createRole
         */

        /**
         * Constructs a new RespRole.
         * @memberof ResponsePackage
         * @classdesc Represents a RespRole.
         * @implements IRespRole
         * @constructor
         * @param {ResponsePackage.IRespRole=} [properties] Properties to set
         */
        function RespRole(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * RespRole roleInfo.
         * @member {ResponsePackage.IRespRoleInfo|null|undefined} roleInfo
         * @memberof ResponsePackage.RespRole
         * @instance
         */
        RespRole.prototype.roleInfo = null;

        /**
         * RespRole roleBaseInfo.
         * @member {ResponsePackage.IRespRoleBaseInfo|null|undefined} roleBaseInfo
         * @memberof ResponsePackage.RespRole
         * @instance
         */
        RespRole.prototype.roleBaseInfo = null;

        /**
         * RespRole roleOp.
         * @member {ResponsePackage.IRespRoleOp|null|undefined} roleOp
         * @memberof ResponsePackage.RespRole
         * @instance
         */
        RespRole.prototype.roleOp = null;

        /**
         * RespRole createRole.
         * @member {ResponsePackage.IRespBoolean|null|undefined} createRole
         * @memberof ResponsePackage.RespRole
         * @instance
         */
        RespRole.prototype.createRole = null;

        /**
         * Creates a new RespRole instance using the specified properties.
         * @function create
         * @memberof ResponsePackage.RespRole
         * @static
         * @param {ResponsePackage.IRespRole=} [properties] Properties to set
         * @returns {ResponsePackage.RespRole} RespRole instance
         */
        RespRole.create = function create(properties) {
            return new RespRole(properties);
        };

        /**
         * Encodes the specified RespRole message. Does not implicitly {@link ResponsePackage.RespRole.verify|verify} messages.
         * @function encode
         * @memberof ResponsePackage.RespRole
         * @static
         * @param {ResponsePackage.IRespRole} message RespRole message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RespRole.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.roleInfo != null && message.hasOwnProperty("roleInfo"))
                $root.ResponsePackage.RespRoleInfo.encode(message.roleInfo, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.roleBaseInfo != null && message.hasOwnProperty("roleBaseInfo"))
                $root.ResponsePackage.RespRoleBaseInfo.encode(message.roleBaseInfo, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.roleOp != null && message.hasOwnProperty("roleOp"))
                $root.ResponsePackage.RespRoleOp.encode(message.roleOp, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.createRole != null && message.hasOwnProperty("createRole"))
                $root.ResponsePackage.RespBoolean.encode(message.createRole, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified RespRole message, length delimited. Does not implicitly {@link ResponsePackage.RespRole.verify|verify} messages.
         * @function encodeDelimited
         * @memberof ResponsePackage.RespRole
         * @static
         * @param {ResponsePackage.IRespRole} message RespRole message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RespRole.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RespRole message from the specified reader or buffer.
         * @function decode
         * @memberof ResponsePackage.RespRole
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {ResponsePackage.RespRole} RespRole
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RespRole.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ResponsePackage.RespRole();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.roleInfo = $root.ResponsePackage.RespRoleInfo.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.roleBaseInfo = $root.ResponsePackage.RespRoleBaseInfo.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.roleOp = $root.ResponsePackage.RespRoleOp.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.createRole = $root.ResponsePackage.RespBoolean.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a RespRole message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof ResponsePackage.RespRole
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {ResponsePackage.RespRole} RespRole
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RespRole.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a RespRole message.
         * @function verify
         * @memberof ResponsePackage.RespRole
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        RespRole.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.roleInfo != null && message.hasOwnProperty("roleInfo")) {
                var error = $root.ResponsePackage.RespRoleInfo.verify(message.roleInfo);
                if (error)
                    return "roleInfo." + error;
            }
            if (message.roleBaseInfo != null && message.hasOwnProperty("roleBaseInfo")) {
                var error = $root.ResponsePackage.RespRoleBaseInfo.verify(message.roleBaseInfo);
                if (error)
                    return "roleBaseInfo." + error;
            }
            if (message.roleOp != null && message.hasOwnProperty("roleOp")) {
                var error = $root.ResponsePackage.RespRoleOp.verify(message.roleOp);
                if (error)
                    return "roleOp." + error;
            }
            if (message.createRole != null && message.hasOwnProperty("createRole")) {
                var error = $root.ResponsePackage.RespBoolean.verify(message.createRole);
                if (error)
                    return "createRole." + error;
            }
            return null;
        };

        return RespRole;
    })();

    ResponsePackage.RespRoleOp = (function() {

        /**
         * Properties of a RespRoleOp.
         * @memberof ResponsePackage
         * @interface IRespRoleOp
         * @property {ResponsePackage.IRespInt|null} [ckeOp] RespRoleOp ckeOp
         * @property {ResponsePackage.IRespInt|null} [cktOp] RespRoleOp cktOp
         */

        /**
         * Constructs a new RespRoleOp.
         * @memberof ResponsePackage
         * @classdesc Represents a RespRoleOp.
         * @implements IRespRoleOp
         * @constructor
         * @param {ResponsePackage.IRespRoleOp=} [properties] Properties to set
         */
        function RespRoleOp(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * RespRoleOp ckeOp.
         * @member {ResponsePackage.IRespInt|null|undefined} ckeOp
         * @memberof ResponsePackage.RespRoleOp
         * @instance
         */
        RespRoleOp.prototype.ckeOp = null;

        /**
         * RespRoleOp cktOp.
         * @member {ResponsePackage.IRespInt|null|undefined} cktOp
         * @memberof ResponsePackage.RespRoleOp
         * @instance
         */
        RespRoleOp.prototype.cktOp = null;

        /**
         * Creates a new RespRoleOp instance using the specified properties.
         * @function create
         * @memberof ResponsePackage.RespRoleOp
         * @static
         * @param {ResponsePackage.IRespRoleOp=} [properties] Properties to set
         * @returns {ResponsePackage.RespRoleOp} RespRoleOp instance
         */
        RespRoleOp.create = function create(properties) {
            return new RespRoleOp(properties);
        };

        /**
         * Encodes the specified RespRoleOp message. Does not implicitly {@link ResponsePackage.RespRoleOp.verify|verify} messages.
         * @function encode
         * @memberof ResponsePackage.RespRoleOp
         * @static
         * @param {ResponsePackage.IRespRoleOp} message RespRoleOp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RespRoleOp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.ckeOp != null && message.hasOwnProperty("ckeOp"))
                $root.ResponsePackage.RespInt.encode(message.ckeOp, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.cktOp != null && message.hasOwnProperty("cktOp"))
                $root.ResponsePackage.RespInt.encode(message.cktOp, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified RespRoleOp message, length delimited. Does not implicitly {@link ResponsePackage.RespRoleOp.verify|verify} messages.
         * @function encodeDelimited
         * @memberof ResponsePackage.RespRoleOp
         * @static
         * @param {ResponsePackage.IRespRoleOp} message RespRoleOp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RespRoleOp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RespRoleOp message from the specified reader or buffer.
         * @function decode
         * @memberof ResponsePackage.RespRoleOp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {ResponsePackage.RespRoleOp} RespRoleOp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RespRoleOp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ResponsePackage.RespRoleOp();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.ckeOp = $root.ResponsePackage.RespInt.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.cktOp = $root.ResponsePackage.RespInt.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a RespRoleOp message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof ResponsePackage.RespRoleOp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {ResponsePackage.RespRoleOp} RespRoleOp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RespRoleOp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a RespRoleOp message.
         * @function verify
         * @memberof ResponsePackage.RespRoleOp
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        RespRoleOp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.ckeOp != null && message.hasOwnProperty("ckeOp")) {
                var error = $root.ResponsePackage.RespInt.verify(message.ckeOp);
                if (error)
                    return "ckeOp." + error;
            }
            if (message.cktOp != null && message.hasOwnProperty("cktOp")) {
                var error = $root.ResponsePackage.RespInt.verify(message.cktOp);
                if (error)
                    return "cktOp." + error;
            }
            return null;
        };

        return RespRoleOp;
    })();

    ResponsePackage.RespInt = (function() {

        /**
         * Properties of a RespInt.
         * @memberof ResponsePackage
         * @interface IRespInt
         * @property {number|null} [value] RespInt value
         */

        /**
         * Constructs a new RespInt.
         * @memberof ResponsePackage
         * @classdesc Represents a RespInt.
         * @implements IRespInt
         * @constructor
         * @param {ResponsePackage.IRespInt=} [properties] Properties to set
         */
        function RespInt(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * RespInt value.
         * @member {number} value
         * @memberof ResponsePackage.RespInt
         * @instance
         */
        RespInt.prototype.value = 0;

        /**
         * Creates a new RespInt instance using the specified properties.
         * @function create
         * @memberof ResponsePackage.RespInt
         * @static
         * @param {ResponsePackage.IRespInt=} [properties] Properties to set
         * @returns {ResponsePackage.RespInt} RespInt instance
         */
        RespInt.create = function create(properties) {
            return new RespInt(properties);
        };

        /**
         * Encodes the specified RespInt message. Does not implicitly {@link ResponsePackage.RespInt.verify|verify} messages.
         * @function encode
         * @memberof ResponsePackage.RespInt
         * @static
         * @param {ResponsePackage.IRespInt} message RespInt message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RespInt.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.value != null && message.hasOwnProperty("value"))
                writer.uint32(/* id 1, wireType 0 =*/8).sint32(message.value);
            return writer;
        };

        /**
         * Encodes the specified RespInt message, length delimited. Does not implicitly {@link ResponsePackage.RespInt.verify|verify} messages.
         * @function encodeDelimited
         * @memberof ResponsePackage.RespInt
         * @static
         * @param {ResponsePackage.IRespInt} message RespInt message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RespInt.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RespInt message from the specified reader or buffer.
         * @function decode
         * @memberof ResponsePackage.RespInt
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {ResponsePackage.RespInt} RespInt
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RespInt.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ResponsePackage.RespInt();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.value = reader.sint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a RespInt message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof ResponsePackage.RespInt
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {ResponsePackage.RespInt} RespInt
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RespInt.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a RespInt message.
         * @function verify
         * @memberof ResponsePackage.RespInt
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        RespInt.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.value != null && message.hasOwnProperty("value"))
                if (!$util.isInteger(message.value))
                    return "value: integer expected";
            return null;
        };

        return RespInt;
    })();

    ResponsePackage.RespRoleInfo = (function() {

        /**
         * Properties of a RespRoleInfo.
         * @memberof ResponsePackage
         * @interface IRespRoleInfo
         * @property {string|null} [id] RespRoleInfo id
         * @property {string|null} [sid] RespRoleInfo sid
         * @property {string|null} [name] RespRoleInfo name
         * @property {number|null} [img] RespRoleInfo img
         * @property {string|null} [email] RespRoleInfo email
         * @property {number|null} [division] RespRoleInfo division
         * @property {number|null} [integral] RespRoleInfo integral
         * @property {number|Long|null} [serverTime] RespRoleInfo serverTime
         * @property {number|null} [gcke] RespRoleInfo gcke
         * @property {number|null} [cke] RespRoleInfo cke
         * @property {number|null} [ckt] RespRoleInfo ckt
         */

        /**
         * Constructs a new RespRoleInfo.
         * @memberof ResponsePackage
         * @classdesc Represents a RespRoleInfo.
         * @implements IRespRoleInfo
         * @constructor
         * @param {ResponsePackage.IRespRoleInfo=} [properties] Properties to set
         */
        function RespRoleInfo(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * RespRoleInfo id.
         * @member {string} id
         * @memberof ResponsePackage.RespRoleInfo
         * @instance
         */
        RespRoleInfo.prototype.id = "";

        /**
         * RespRoleInfo sid.
         * @member {string} sid
         * @memberof ResponsePackage.RespRoleInfo
         * @instance
         */
        RespRoleInfo.prototype.sid = "";

        /**
         * RespRoleInfo name.
         * @member {string} name
         * @memberof ResponsePackage.RespRoleInfo
         * @instance
         */
        RespRoleInfo.prototype.name = "";

        /**
         * RespRoleInfo img.
         * @member {number} img
         * @memberof ResponsePackage.RespRoleInfo
         * @instance
         */
        RespRoleInfo.prototype.img = 0;

        /**
         * RespRoleInfo email.
         * @member {string} email
         * @memberof ResponsePackage.RespRoleInfo
         * @instance
         */
        RespRoleInfo.prototype.email = "";

        /**
         * RespRoleInfo division.
         * @member {number} division
         * @memberof ResponsePackage.RespRoleInfo
         * @instance
         */
        RespRoleInfo.prototype.division = 0;

        /**
         * RespRoleInfo integral.
         * @member {number} integral
         * @memberof ResponsePackage.RespRoleInfo
         * @instance
         */
        RespRoleInfo.prototype.integral = 0;

        /**
         * RespRoleInfo serverTime.
         * @member {number|Long} serverTime
         * @memberof ResponsePackage.RespRoleInfo
         * @instance
         */
        RespRoleInfo.prototype.serverTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * RespRoleInfo gcke.
         * @member {number} gcke
         * @memberof ResponsePackage.RespRoleInfo
         * @instance
         */
        RespRoleInfo.prototype.gcke = 0;

        /**
         * RespRoleInfo cke.
         * @member {number} cke
         * @memberof ResponsePackage.RespRoleInfo
         * @instance
         */
        RespRoleInfo.prototype.cke = 0;

        /**
         * RespRoleInfo ckt.
         * @member {number} ckt
         * @memberof ResponsePackage.RespRoleInfo
         * @instance
         */
        RespRoleInfo.prototype.ckt = 0;

        /**
         * Creates a new RespRoleInfo instance using the specified properties.
         * @function create
         * @memberof ResponsePackage.RespRoleInfo
         * @static
         * @param {ResponsePackage.IRespRoleInfo=} [properties] Properties to set
         * @returns {ResponsePackage.RespRoleInfo} RespRoleInfo instance
         */
        RespRoleInfo.create = function create(properties) {
            return new RespRoleInfo(properties);
        };

        /**
         * Encodes the specified RespRoleInfo message. Does not implicitly {@link ResponsePackage.RespRoleInfo.verify|verify} messages.
         * @function encode
         * @memberof ResponsePackage.RespRoleInfo
         * @static
         * @param {ResponsePackage.IRespRoleInfo} message RespRoleInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RespRoleInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && message.hasOwnProperty("id"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
            if (message.sid != null && message.hasOwnProperty("sid"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.sid);
            if (message.name != null && message.hasOwnProperty("name"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.name);
            if (message.img != null && message.hasOwnProperty("img"))
                writer.uint32(/* id 4, wireType 0 =*/32).sint32(message.img);
            if (message.email != null && message.hasOwnProperty("email"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.email);
            if (message.division != null && message.hasOwnProperty("division"))
                writer.uint32(/* id 6, wireType 0 =*/48).sint32(message.division);
            if (message.integral != null && message.hasOwnProperty("integral"))
                writer.uint32(/* id 7, wireType 0 =*/56).sint32(message.integral);
            if (message.serverTime != null && message.hasOwnProperty("serverTime"))
                writer.uint32(/* id 8, wireType 0 =*/64).sint64(message.serverTime);
            if (message.gcke != null && message.hasOwnProperty("gcke"))
                writer.uint32(/* id 9, wireType 0 =*/72).sint32(message.gcke);
            if (message.cke != null && message.hasOwnProperty("cke"))
                writer.uint32(/* id 10, wireType 0 =*/80).sint32(message.cke);
            if (message.ckt != null && message.hasOwnProperty("ckt"))
                writer.uint32(/* id 11, wireType 0 =*/88).sint32(message.ckt);
            return writer;
        };

        /**
         * Encodes the specified RespRoleInfo message, length delimited. Does not implicitly {@link ResponsePackage.RespRoleInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof ResponsePackage.RespRoleInfo
         * @static
         * @param {ResponsePackage.IRespRoleInfo} message RespRoleInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RespRoleInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RespRoleInfo message from the specified reader or buffer.
         * @function decode
         * @memberof ResponsePackage.RespRoleInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {ResponsePackage.RespRoleInfo} RespRoleInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RespRoleInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ResponsePackage.RespRoleInfo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.sid = reader.string();
                    break;
                case 3:
                    message.name = reader.string();
                    break;
                case 4:
                    message.img = reader.sint32();
                    break;
                case 5:
                    message.email = reader.string();
                    break;
                case 6:
                    message.division = reader.sint32();
                    break;
                case 7:
                    message.integral = reader.sint32();
                    break;
                case 8:
                    message.serverTime = reader.sint64();
                    break;
                case 9:
                    message.gcke = reader.sint32();
                    break;
                case 10:
                    message.cke = reader.sint32();
                    break;
                case 11:
                    message.ckt = reader.sint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a RespRoleInfo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof ResponsePackage.RespRoleInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {ResponsePackage.RespRoleInfo} RespRoleInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RespRoleInfo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a RespRoleInfo message.
         * @function verify
         * @memberof ResponsePackage.RespRoleInfo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        RespRoleInfo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isString(message.id))
                    return "id: string expected";
            if (message.sid != null && message.hasOwnProperty("sid"))
                if (!$util.isString(message.sid))
                    return "sid: string expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            if (message.img != null && message.hasOwnProperty("img"))
                if (!$util.isInteger(message.img))
                    return "img: integer expected";
            if (message.email != null && message.hasOwnProperty("email"))
                if (!$util.isString(message.email))
                    return "email: string expected";
            if (message.division != null && message.hasOwnProperty("division"))
                if (!$util.isInteger(message.division))
                    return "division: integer expected";
            if (message.integral != null && message.hasOwnProperty("integral"))
                if (!$util.isInteger(message.integral))
                    return "integral: integer expected";
            if (message.serverTime != null && message.hasOwnProperty("serverTime"))
                if (!$util.isInteger(message.serverTime) && !(message.serverTime && $util.isInteger(message.serverTime.low) && $util.isInteger(message.serverTime.high)))
                    return "serverTime: integer|Long expected";
            if (message.gcke != null && message.hasOwnProperty("gcke"))
                if (!$util.isInteger(message.gcke))
                    return "gcke: integer expected";
            if (message.cke != null && message.hasOwnProperty("cke"))
                if (!$util.isInteger(message.cke))
                    return "cke: integer expected";
            if (message.ckt != null && message.hasOwnProperty("ckt"))
                if (!$util.isInteger(message.ckt))
                    return "ckt: integer expected";
            return null;
        };

        return RespRoleInfo;
    })();

    ResponsePackage.RespBoolean = (function() {

        /**
         * Properties of a RespBoolean.
         * @memberof ResponsePackage
         * @interface IRespBoolean
         * @property {boolean|null} [value] RespBoolean value
         */

        /**
         * Constructs a new RespBoolean.
         * @memberof ResponsePackage
         * @classdesc Represents a RespBoolean.
         * @implements IRespBoolean
         * @constructor
         * @param {ResponsePackage.IRespBoolean=} [properties] Properties to set
         */
        function RespBoolean(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * RespBoolean value.
         * @member {boolean} value
         * @memberof ResponsePackage.RespBoolean
         * @instance
         */
        RespBoolean.prototype.value = false;

        /**
         * Creates a new RespBoolean instance using the specified properties.
         * @function create
         * @memberof ResponsePackage.RespBoolean
         * @static
         * @param {ResponsePackage.IRespBoolean=} [properties] Properties to set
         * @returns {ResponsePackage.RespBoolean} RespBoolean instance
         */
        RespBoolean.create = function create(properties) {
            return new RespBoolean(properties);
        };

        /**
         * Encodes the specified RespBoolean message. Does not implicitly {@link ResponsePackage.RespBoolean.verify|verify} messages.
         * @function encode
         * @memberof ResponsePackage.RespBoolean
         * @static
         * @param {ResponsePackage.IRespBoolean} message RespBoolean message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RespBoolean.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.value != null && message.hasOwnProperty("value"))
                writer.uint32(/* id 1, wireType 0 =*/8).bool(message.value);
            return writer;
        };

        /**
         * Encodes the specified RespBoolean message, length delimited. Does not implicitly {@link ResponsePackage.RespBoolean.verify|verify} messages.
         * @function encodeDelimited
         * @memberof ResponsePackage.RespBoolean
         * @static
         * @param {ResponsePackage.IRespBoolean} message RespBoolean message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RespBoolean.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RespBoolean message from the specified reader or buffer.
         * @function decode
         * @memberof ResponsePackage.RespBoolean
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {ResponsePackage.RespBoolean} RespBoolean
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RespBoolean.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ResponsePackage.RespBoolean();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.value = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a RespBoolean message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof ResponsePackage.RespBoolean
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {ResponsePackage.RespBoolean} RespBoolean
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RespBoolean.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a RespBoolean message.
         * @function verify
         * @memberof ResponsePackage.RespBoolean
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        RespBoolean.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.value != null && message.hasOwnProperty("value"))
                if (typeof message.value !== "boolean")
                    return "value: boolean expected";
            return null;
        };

        return RespBoolean;
    })();

    ResponsePackage.RespMatch = (function() {

        /**
         * Properties of a RespMatch.
         * @memberof ResponsePackage
         * @interface IRespMatch
         * @property {ResponsePackage.IRespRoleMatchInfo|null} [roleMatchInfo] RespMatch roleMatchInfo
         * @property {Array.<ResponsePackage.IRespRoomRole>|null} [roomRoles] RespMatch roomRoles
         * @property {ResponsePackage.IRespRoomRole|null} [joinRole] RespMatch joinRole
         * @property {ResponsePackage.IRespChampionship|null} [respChampionship] RespMatch respChampionship
         */

        /**
         * Constructs a new RespMatch.
         * @memberof ResponsePackage
         * @classdesc Represents a RespMatch.
         * @implements IRespMatch
         * @constructor
         * @param {ResponsePackage.IRespMatch=} [properties] Properties to set
         */
        function RespMatch(properties) {
            this.roomRoles = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * RespMatch roleMatchInfo.
         * @member {ResponsePackage.IRespRoleMatchInfo|null|undefined} roleMatchInfo
         * @memberof ResponsePackage.RespMatch
         * @instance
         */
        RespMatch.prototype.roleMatchInfo = null;

        /**
         * RespMatch roomRoles.
         * @member {Array.<ResponsePackage.IRespRoomRole>} roomRoles
         * @memberof ResponsePackage.RespMatch
         * @instance
         */
        RespMatch.prototype.roomRoles = $util.emptyArray;

        /**
         * RespMatch joinRole.
         * @member {ResponsePackage.IRespRoomRole|null|undefined} joinRole
         * @memberof ResponsePackage.RespMatch
         * @instance
         */
        RespMatch.prototype.joinRole = null;

        /**
         * RespMatch respChampionship.
         * @member {ResponsePackage.IRespChampionship|null|undefined} respChampionship
         * @memberof ResponsePackage.RespMatch
         * @instance
         */
        RespMatch.prototype.respChampionship = null;

        /**
         * Creates a new RespMatch instance using the specified properties.
         * @function create
         * @memberof ResponsePackage.RespMatch
         * @static
         * @param {ResponsePackage.IRespMatch=} [properties] Properties to set
         * @returns {ResponsePackage.RespMatch} RespMatch instance
         */
        RespMatch.create = function create(properties) {
            return new RespMatch(properties);
        };

        /**
         * Encodes the specified RespMatch message. Does not implicitly {@link ResponsePackage.RespMatch.verify|verify} messages.
         * @function encode
         * @memberof ResponsePackage.RespMatch
         * @static
         * @param {ResponsePackage.IRespMatch} message RespMatch message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RespMatch.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.roleMatchInfo != null && message.hasOwnProperty("roleMatchInfo"))
                $root.ResponsePackage.RespRoleMatchInfo.encode(message.roleMatchInfo, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.roomRoles != null && message.roomRoles.length)
                for (var i = 0; i < message.roomRoles.length; ++i)
                    $root.ResponsePackage.RespRoomRole.encode(message.roomRoles[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.joinRole != null && message.hasOwnProperty("joinRole"))
                $root.ResponsePackage.RespRoomRole.encode(message.joinRole, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.respChampionship != null && message.hasOwnProperty("respChampionship"))
                $root.ResponsePackage.RespChampionship.encode(message.respChampionship, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified RespMatch message, length delimited. Does not implicitly {@link ResponsePackage.RespMatch.verify|verify} messages.
         * @function encodeDelimited
         * @memberof ResponsePackage.RespMatch
         * @static
         * @param {ResponsePackage.IRespMatch} message RespMatch message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RespMatch.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RespMatch message from the specified reader or buffer.
         * @function decode
         * @memberof ResponsePackage.RespMatch
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {ResponsePackage.RespMatch} RespMatch
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RespMatch.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ResponsePackage.RespMatch();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.roleMatchInfo = $root.ResponsePackage.RespRoleMatchInfo.decode(reader, reader.uint32());
                    break;
                case 2:
                    if (!(message.roomRoles && message.roomRoles.length))
                        message.roomRoles = [];
                    message.roomRoles.push($root.ResponsePackage.RespRoomRole.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.joinRole = $root.ResponsePackage.RespRoomRole.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.respChampionship = $root.ResponsePackage.RespChampionship.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a RespMatch message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof ResponsePackage.RespMatch
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {ResponsePackage.RespMatch} RespMatch
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RespMatch.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a RespMatch message.
         * @function verify
         * @memberof ResponsePackage.RespMatch
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        RespMatch.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.roleMatchInfo != null && message.hasOwnProperty("roleMatchInfo")) {
                var error = $root.ResponsePackage.RespRoleMatchInfo.verify(message.roleMatchInfo);
                if (error)
                    return "roleMatchInfo." + error;
            }
            if (message.roomRoles != null && message.hasOwnProperty("roomRoles")) {
                if (!Array.isArray(message.roomRoles))
                    return "roomRoles: array expected";
                for (var i = 0; i < message.roomRoles.length; ++i) {
                    var error = $root.ResponsePackage.RespRoomRole.verify(message.roomRoles[i]);
                    if (error)
                        return "roomRoles." + error;
                }
            }
            if (message.joinRole != null && message.hasOwnProperty("joinRole")) {
                var error = $root.ResponsePackage.RespRoomRole.verify(message.joinRole);
                if (error)
                    return "joinRole." + error;
            }
            if (message.respChampionship != null && message.hasOwnProperty("respChampionship")) {
                var error = $root.ResponsePackage.RespChampionship.verify(message.respChampionship);
                if (error)
                    return "respChampionship." + error;
            }
            return null;
        };

        return RespMatch;
    })();

    ResponsePackage.RespRoleMatchInfo = (function() {

        /**
         * Properties of a RespRoleMatchInfo.
         * @memberof ResponsePackage
         * @interface IRespRoleMatchInfo
         * @property {number|null} [fightCount] RespRoleMatchInfo fightCount
         * @property {number|null} [winCount] RespRoleMatchInfo winCount
         * @property {Object.<string,number>|null} [ckFightCount] RespRoleMatchInfo ckFightCount
         * @property {number|null} [winningStreak] RespRoleMatchInfo winningStreak
         * @property {number|null} [loseStreak] RespRoleMatchInfo loseStreak
         */

        /**
         * Constructs a new RespRoleMatchInfo.
         * @memberof ResponsePackage
         * @classdesc Represents a RespRoleMatchInfo.
         * @implements IRespRoleMatchInfo
         * @constructor
         * @param {ResponsePackage.IRespRoleMatchInfo=} [properties] Properties to set
         */
        function RespRoleMatchInfo(properties) {
            this.ckFightCount = {};
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * RespRoleMatchInfo fightCount.
         * @member {number} fightCount
         * @memberof ResponsePackage.RespRoleMatchInfo
         * @instance
         */
        RespRoleMatchInfo.prototype.fightCount = 0;

        /**
         * RespRoleMatchInfo winCount.
         * @member {number} winCount
         * @memberof ResponsePackage.RespRoleMatchInfo
         * @instance
         */
        RespRoleMatchInfo.prototype.winCount = 0;

        /**
         * RespRoleMatchInfo ckFightCount.
         * @member {Object.<string,number>} ckFightCount
         * @memberof ResponsePackage.RespRoleMatchInfo
         * @instance
         */
        RespRoleMatchInfo.prototype.ckFightCount = $util.emptyObject;

        /**
         * RespRoleMatchInfo winningStreak.
         * @member {number} winningStreak
         * @memberof ResponsePackage.RespRoleMatchInfo
         * @instance
         */
        RespRoleMatchInfo.prototype.winningStreak = 0;

        /**
         * RespRoleMatchInfo loseStreak.
         * @member {number} loseStreak
         * @memberof ResponsePackage.RespRoleMatchInfo
         * @instance
         */
        RespRoleMatchInfo.prototype.loseStreak = 0;

        /**
         * Creates a new RespRoleMatchInfo instance using the specified properties.
         * @function create
         * @memberof ResponsePackage.RespRoleMatchInfo
         * @static
         * @param {ResponsePackage.IRespRoleMatchInfo=} [properties] Properties to set
         * @returns {ResponsePackage.RespRoleMatchInfo} RespRoleMatchInfo instance
         */
        RespRoleMatchInfo.create = function create(properties) {
            return new RespRoleMatchInfo(properties);
        };

        /**
         * Encodes the specified RespRoleMatchInfo message. Does not implicitly {@link ResponsePackage.RespRoleMatchInfo.verify|verify} messages.
         * @function encode
         * @memberof ResponsePackage.RespRoleMatchInfo
         * @static
         * @param {ResponsePackage.IRespRoleMatchInfo} message RespRoleMatchInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RespRoleMatchInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.fightCount != null && message.hasOwnProperty("fightCount"))
                writer.uint32(/* id 1, wireType 0 =*/8).sint32(message.fightCount);
            if (message.winCount != null && message.hasOwnProperty("winCount"))
                writer.uint32(/* id 2, wireType 0 =*/16).sint32(message.winCount);
            if (message.ckFightCount != null && message.hasOwnProperty("ckFightCount"))
                for (var keys = Object.keys(message.ckFightCount), i = 0; i < keys.length; ++i)
                    writer.uint32(/* id 3, wireType 2 =*/26).fork().uint32(/* id 1, wireType 0 =*/8).int32(keys[i]).uint32(/* id 2, wireType 0 =*/16).int32(message.ckFightCount[keys[i]]).ldelim();
            if (message.winningStreak != null && message.hasOwnProperty("winningStreak"))
                writer.uint32(/* id 4, wireType 0 =*/32).sint32(message.winningStreak);
            if (message.loseStreak != null && message.hasOwnProperty("loseStreak"))
                writer.uint32(/* id 5, wireType 0 =*/40).sint32(message.loseStreak);
            return writer;
        };

        /**
         * Encodes the specified RespRoleMatchInfo message, length delimited. Does not implicitly {@link ResponsePackage.RespRoleMatchInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof ResponsePackage.RespRoleMatchInfo
         * @static
         * @param {ResponsePackage.IRespRoleMatchInfo} message RespRoleMatchInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RespRoleMatchInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RespRoleMatchInfo message from the specified reader or buffer.
         * @function decode
         * @memberof ResponsePackage.RespRoleMatchInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {ResponsePackage.RespRoleMatchInfo} RespRoleMatchInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RespRoleMatchInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ResponsePackage.RespRoleMatchInfo(), key;
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.fightCount = reader.sint32();
                    break;
                case 2:
                    message.winCount = reader.sint32();
                    break;
                case 3:
                    reader.skip().pos++;
                    if (message.ckFightCount === $util.emptyObject)
                        message.ckFightCount = {};
                    key = reader.int32();
                    reader.pos++;
                    message.ckFightCount[key] = reader.int32();
                    break;
                case 4:
                    message.winningStreak = reader.sint32();
                    break;
                case 5:
                    message.loseStreak = reader.sint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a RespRoleMatchInfo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof ResponsePackage.RespRoleMatchInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {ResponsePackage.RespRoleMatchInfo} RespRoleMatchInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RespRoleMatchInfo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a RespRoleMatchInfo message.
         * @function verify
         * @memberof ResponsePackage.RespRoleMatchInfo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        RespRoleMatchInfo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.fightCount != null && message.hasOwnProperty("fightCount"))
                if (!$util.isInteger(message.fightCount))
                    return "fightCount: integer expected";
            if (message.winCount != null && message.hasOwnProperty("winCount"))
                if (!$util.isInteger(message.winCount))
                    return "winCount: integer expected";
            if (message.ckFightCount != null && message.hasOwnProperty("ckFightCount")) {
                if (!$util.isObject(message.ckFightCount))
                    return "ckFightCount: object expected";
                var key = Object.keys(message.ckFightCount);
                for (var i = 0; i < key.length; ++i) {
                    if (!$util.key32Re.test(key[i]))
                        return "ckFightCount: integer key{k:int32} expected";
                    if (!$util.isInteger(message.ckFightCount[key[i]]))
                        return "ckFightCount: integer{k:int32} expected";
                }
            }
            if (message.winningStreak != null && message.hasOwnProperty("winningStreak"))
                if (!$util.isInteger(message.winningStreak))
                    return "winningStreak: integer expected";
            if (message.loseStreak != null && message.hasOwnProperty("loseStreak"))
                if (!$util.isInteger(message.loseStreak))
                    return "loseStreak: integer expected";
            return null;
        };

        return RespRoleMatchInfo;
    })();

    ResponsePackage.RespRoomRole = (function() {

        /**
         * Properties of a RespRoomRole.
         * @memberof ResponsePackage
         * @interface IRespRoomRole
         * @property {number|null} [index] RespRoomRole index
         * @property {ResponsePackage.IRespRoleBaseInfo|null} [roleBaseInfo] RespRoomRole roleBaseInfo
         */

        /**
         * Constructs a new RespRoomRole.
         * @memberof ResponsePackage
         * @classdesc Represents a RespRoomRole.
         * @implements IRespRoomRole
         * @constructor
         * @param {ResponsePackage.IRespRoomRole=} [properties] Properties to set
         */
        function RespRoomRole(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * RespRoomRole index.
         * @member {number} index
         * @memberof ResponsePackage.RespRoomRole
         * @instance
         */
        RespRoomRole.prototype.index = 0;

        /**
         * RespRoomRole roleBaseInfo.
         * @member {ResponsePackage.IRespRoleBaseInfo|null|undefined} roleBaseInfo
         * @memberof ResponsePackage.RespRoomRole
         * @instance
         */
        RespRoomRole.prototype.roleBaseInfo = null;

        /**
         * Creates a new RespRoomRole instance using the specified properties.
         * @function create
         * @memberof ResponsePackage.RespRoomRole
         * @static
         * @param {ResponsePackage.IRespRoomRole=} [properties] Properties to set
         * @returns {ResponsePackage.RespRoomRole} RespRoomRole instance
         */
        RespRoomRole.create = function create(properties) {
            return new RespRoomRole(properties);
        };

        /**
         * Encodes the specified RespRoomRole message. Does not implicitly {@link ResponsePackage.RespRoomRole.verify|verify} messages.
         * @function encode
         * @memberof ResponsePackage.RespRoomRole
         * @static
         * @param {ResponsePackage.IRespRoomRole} message RespRoomRole message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RespRoomRole.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.index != null && message.hasOwnProperty("index"))
                writer.uint32(/* id 1, wireType 0 =*/8).sint32(message.index);
            if (message.roleBaseInfo != null && message.hasOwnProperty("roleBaseInfo"))
                $root.ResponsePackage.RespRoleBaseInfo.encode(message.roleBaseInfo, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified RespRoomRole message, length delimited. Does not implicitly {@link ResponsePackage.RespRoomRole.verify|verify} messages.
         * @function encodeDelimited
         * @memberof ResponsePackage.RespRoomRole
         * @static
         * @param {ResponsePackage.IRespRoomRole} message RespRoomRole message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RespRoomRole.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RespRoomRole message from the specified reader or buffer.
         * @function decode
         * @memberof ResponsePackage.RespRoomRole
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {ResponsePackage.RespRoomRole} RespRoomRole
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RespRoomRole.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ResponsePackage.RespRoomRole();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.index = reader.sint32();
                    break;
                case 2:
                    message.roleBaseInfo = $root.ResponsePackage.RespRoleBaseInfo.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a RespRoomRole message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof ResponsePackage.RespRoomRole
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {ResponsePackage.RespRoomRole} RespRoomRole
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RespRoomRole.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a RespRoomRole message.
         * @function verify
         * @memberof ResponsePackage.RespRoomRole
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        RespRoomRole.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.index != null && message.hasOwnProperty("index"))
                if (!$util.isInteger(message.index))
                    return "index: integer expected";
            if (message.roleBaseInfo != null && message.hasOwnProperty("roleBaseInfo")) {
                var error = $root.ResponsePackage.RespRoleBaseInfo.verify(message.roleBaseInfo);
                if (error)
                    return "roleBaseInfo." + error;
            }
            return null;
        };

        return RespRoomRole;
    })();

    ResponsePackage.RespChampionship = (function() {

        /**
         * Properties of a RespChampionship.
         * @memberof ResponsePackage
         * @interface IRespChampionship
         * @property {number|null} [cid] RespChampionship cid
         * @property {boolean|null} [teamEnd] RespChampionship teamEnd
         * @property {boolean|null} [survivalEnd] RespChampionship survivalEnd
         * @property {number|Long|null} [startTime] RespChampionship startTime
         */

        /**
         * Constructs a new RespChampionship.
         * @memberof ResponsePackage
         * @classdesc Represents a RespChampionship.
         * @implements IRespChampionship
         * @constructor
         * @param {ResponsePackage.IRespChampionship=} [properties] Properties to set
         */
        function RespChampionship(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * RespChampionship cid.
         * @member {number} cid
         * @memberof ResponsePackage.RespChampionship
         * @instance
         */
        RespChampionship.prototype.cid = 0;

        /**
         * RespChampionship teamEnd.
         * @member {boolean} teamEnd
         * @memberof ResponsePackage.RespChampionship
         * @instance
         */
        RespChampionship.prototype.teamEnd = false;

        /**
         * RespChampionship survivalEnd.
         * @member {boolean} survivalEnd
         * @memberof ResponsePackage.RespChampionship
         * @instance
         */
        RespChampionship.prototype.survivalEnd = false;

        /**
         * RespChampionship startTime.
         * @member {number|Long} startTime
         * @memberof ResponsePackage.RespChampionship
         * @instance
         */
        RespChampionship.prototype.startTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new RespChampionship instance using the specified properties.
         * @function create
         * @memberof ResponsePackage.RespChampionship
         * @static
         * @param {ResponsePackage.IRespChampionship=} [properties] Properties to set
         * @returns {ResponsePackage.RespChampionship} RespChampionship instance
         */
        RespChampionship.create = function create(properties) {
            return new RespChampionship(properties);
        };

        /**
         * Encodes the specified RespChampionship message. Does not implicitly {@link ResponsePackage.RespChampionship.verify|verify} messages.
         * @function encode
         * @memberof ResponsePackage.RespChampionship
         * @static
         * @param {ResponsePackage.IRespChampionship} message RespChampionship message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RespChampionship.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.cid != null && message.hasOwnProperty("cid"))
                writer.uint32(/* id 1, wireType 0 =*/8).sint32(message.cid);
            if (message.teamEnd != null && message.hasOwnProperty("teamEnd"))
                writer.uint32(/* id 2, wireType 0 =*/16).bool(message.teamEnd);
            if (message.survivalEnd != null && message.hasOwnProperty("survivalEnd"))
                writer.uint32(/* id 3, wireType 0 =*/24).bool(message.survivalEnd);
            if (message.startTime != null && message.hasOwnProperty("startTime"))
                writer.uint32(/* id 4, wireType 0 =*/32).sint64(message.startTime);
            return writer;
        };

        /**
         * Encodes the specified RespChampionship message, length delimited. Does not implicitly {@link ResponsePackage.RespChampionship.verify|verify} messages.
         * @function encodeDelimited
         * @memberof ResponsePackage.RespChampionship
         * @static
         * @param {ResponsePackage.IRespChampionship} message RespChampionship message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RespChampionship.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RespChampionship message from the specified reader or buffer.
         * @function decode
         * @memberof ResponsePackage.RespChampionship
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {ResponsePackage.RespChampionship} RespChampionship
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RespChampionship.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ResponsePackage.RespChampionship();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.cid = reader.sint32();
                    break;
                case 2:
                    message.teamEnd = reader.bool();
                    break;
                case 3:
                    message.survivalEnd = reader.bool();
                    break;
                case 4:
                    message.startTime = reader.sint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a RespChampionship message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof ResponsePackage.RespChampionship
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {ResponsePackage.RespChampionship} RespChampionship
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RespChampionship.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a RespChampionship message.
         * @function verify
         * @memberof ResponsePackage.RespChampionship
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        RespChampionship.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.cid != null && message.hasOwnProperty("cid"))
                if (!$util.isInteger(message.cid))
                    return "cid: integer expected";
            if (message.teamEnd != null && message.hasOwnProperty("teamEnd"))
                if (typeof message.teamEnd !== "boolean")
                    return "teamEnd: boolean expected";
            if (message.survivalEnd != null && message.hasOwnProperty("survivalEnd"))
                if (typeof message.survivalEnd !== "boolean")
                    return "survivalEnd: boolean expected";
            if (message.startTime != null && message.hasOwnProperty("startTime"))
                if (!$util.isInteger(message.startTime) && !(message.startTime && $util.isInteger(message.startTime.low) && $util.isInteger(message.startTime.high)))
                    return "startTime: integer|Long expected";
            return null;
        };

        return RespChampionship;
    })();

    ResponsePackage.RespChat = (function() {

        /**
         * Properties of a RespChat.
         * @memberof ResponsePackage
         * @interface IRespChat
         * @property {Array.<ResponsePackage.IRespChatMsg>|null} [chatMsgs] RespChat chatMsgs
         * @property {ResponsePackage.IRespChatMsg|null} [chatMsg] RespChat chatMsg
         */

        /**
         * Constructs a new RespChat.
         * @memberof ResponsePackage
         * @classdesc Represents a RespChat.
         * @implements IRespChat
         * @constructor
         * @param {ResponsePackage.IRespChat=} [properties] Properties to set
         */
        function RespChat(properties) {
            this.chatMsgs = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * RespChat chatMsgs.
         * @member {Array.<ResponsePackage.IRespChatMsg>} chatMsgs
         * @memberof ResponsePackage.RespChat
         * @instance
         */
        RespChat.prototype.chatMsgs = $util.emptyArray;

        /**
         * RespChat chatMsg.
         * @member {ResponsePackage.IRespChatMsg|null|undefined} chatMsg
         * @memberof ResponsePackage.RespChat
         * @instance
         */
        RespChat.prototype.chatMsg = null;

        /**
         * Creates a new RespChat instance using the specified properties.
         * @function create
         * @memberof ResponsePackage.RespChat
         * @static
         * @param {ResponsePackage.IRespChat=} [properties] Properties to set
         * @returns {ResponsePackage.RespChat} RespChat instance
         */
        RespChat.create = function create(properties) {
            return new RespChat(properties);
        };

        /**
         * Encodes the specified RespChat message. Does not implicitly {@link ResponsePackage.RespChat.verify|verify} messages.
         * @function encode
         * @memberof ResponsePackage.RespChat
         * @static
         * @param {ResponsePackage.IRespChat} message RespChat message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RespChat.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.chatMsgs != null && message.chatMsgs.length)
                for (var i = 0; i < message.chatMsgs.length; ++i)
                    $root.ResponsePackage.RespChatMsg.encode(message.chatMsgs[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.chatMsg != null && message.hasOwnProperty("chatMsg"))
                $root.ResponsePackage.RespChatMsg.encode(message.chatMsg, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified RespChat message, length delimited. Does not implicitly {@link ResponsePackage.RespChat.verify|verify} messages.
         * @function encodeDelimited
         * @memberof ResponsePackage.RespChat
         * @static
         * @param {ResponsePackage.IRespChat} message RespChat message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RespChat.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RespChat message from the specified reader or buffer.
         * @function decode
         * @memberof ResponsePackage.RespChat
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {ResponsePackage.RespChat} RespChat
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RespChat.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ResponsePackage.RespChat();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.chatMsgs && message.chatMsgs.length))
                        message.chatMsgs = [];
                    message.chatMsgs.push($root.ResponsePackage.RespChatMsg.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.chatMsg = $root.ResponsePackage.RespChatMsg.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a RespChat message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof ResponsePackage.RespChat
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {ResponsePackage.RespChat} RespChat
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RespChat.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a RespChat message.
         * @function verify
         * @memberof ResponsePackage.RespChat
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        RespChat.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.chatMsgs != null && message.hasOwnProperty("chatMsgs")) {
                if (!Array.isArray(message.chatMsgs))
                    return "chatMsgs: array expected";
                for (var i = 0; i < message.chatMsgs.length; ++i) {
                    var error = $root.ResponsePackage.RespChatMsg.verify(message.chatMsgs[i]);
                    if (error)
                        return "chatMsgs." + error;
                }
            }
            if (message.chatMsg != null && message.hasOwnProperty("chatMsg")) {
                var error = $root.ResponsePackage.RespChatMsg.verify(message.chatMsg);
                if (error)
                    return "chatMsg." + error;
            }
            return null;
        };

        return RespChat;
    })();

    ResponsePackage.RespChatMsg = (function() {

        /**
         * Properties of a RespChatMsg.
         * @memberof ResponsePackage
         * @interface IRespChatMsg
         * @property {number|null} [chatType] RespChatMsg chatType
         * @property {ResponsePackage.IRespRoleBaseInfo|null} [baseInfo] RespChatMsg baseInfo
         * @property {string|null} [msg] RespChatMsg msg
         * @property {number|Long|null} [time] RespChatMsg time
         * @property {Array.<string>|null} [params] RespChatMsg params
         */

        /**
         * Constructs a new RespChatMsg.
         * @memberof ResponsePackage
         * @classdesc Represents a RespChatMsg.
         * @implements IRespChatMsg
         * @constructor
         * @param {ResponsePackage.IRespChatMsg=} [properties] Properties to set
         */
        function RespChatMsg(properties) {
            this.params = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * RespChatMsg chatType.
         * @member {number} chatType
         * @memberof ResponsePackage.RespChatMsg
         * @instance
         */
        RespChatMsg.prototype.chatType = 0;

        /**
         * RespChatMsg baseInfo.
         * @member {ResponsePackage.IRespRoleBaseInfo|null|undefined} baseInfo
         * @memberof ResponsePackage.RespChatMsg
         * @instance
         */
        RespChatMsg.prototype.baseInfo = null;

        /**
         * RespChatMsg msg.
         * @member {string} msg
         * @memberof ResponsePackage.RespChatMsg
         * @instance
         */
        RespChatMsg.prototype.msg = "";

        /**
         * RespChatMsg time.
         * @member {number|Long} time
         * @memberof ResponsePackage.RespChatMsg
         * @instance
         */
        RespChatMsg.prototype.time = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * RespChatMsg params.
         * @member {Array.<string>} params
         * @memberof ResponsePackage.RespChatMsg
         * @instance
         */
        RespChatMsg.prototype.params = $util.emptyArray;

        /**
         * Creates a new RespChatMsg instance using the specified properties.
         * @function create
         * @memberof ResponsePackage.RespChatMsg
         * @static
         * @param {ResponsePackage.IRespChatMsg=} [properties] Properties to set
         * @returns {ResponsePackage.RespChatMsg} RespChatMsg instance
         */
        RespChatMsg.create = function create(properties) {
            return new RespChatMsg(properties);
        };

        /**
         * Encodes the specified RespChatMsg message. Does not implicitly {@link ResponsePackage.RespChatMsg.verify|verify} messages.
         * @function encode
         * @memberof ResponsePackage.RespChatMsg
         * @static
         * @param {ResponsePackage.IRespChatMsg} message RespChatMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RespChatMsg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.chatType != null && message.hasOwnProperty("chatType"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.chatType);
            if (message.baseInfo != null && message.hasOwnProperty("baseInfo"))
                $root.ResponsePackage.RespRoleBaseInfo.encode(message.baseInfo, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.msg != null && message.hasOwnProperty("msg"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.msg);
            if (message.time != null && message.hasOwnProperty("time"))
                writer.uint32(/* id 4, wireType 0 =*/32).int64(message.time);
            if (message.params != null && message.params.length)
                for (var i = 0; i < message.params.length; ++i)
                    writer.uint32(/* id 5, wireType 2 =*/42).string(message.params[i]);
            return writer;
        };

        /**
         * Encodes the specified RespChatMsg message, length delimited. Does not implicitly {@link ResponsePackage.RespChatMsg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof ResponsePackage.RespChatMsg
         * @static
         * @param {ResponsePackage.IRespChatMsg} message RespChatMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RespChatMsg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RespChatMsg message from the specified reader or buffer.
         * @function decode
         * @memberof ResponsePackage.RespChatMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {ResponsePackage.RespChatMsg} RespChatMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RespChatMsg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ResponsePackage.RespChatMsg();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.chatType = reader.int32();
                    break;
                case 2:
                    message.baseInfo = $root.ResponsePackage.RespRoleBaseInfo.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.msg = reader.string();
                    break;
                case 4:
                    message.time = reader.int64();
                    break;
                case 5:
                    if (!(message.params && message.params.length))
                        message.params = [];
                    message.params.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a RespChatMsg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof ResponsePackage.RespChatMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {ResponsePackage.RespChatMsg} RespChatMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RespChatMsg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a RespChatMsg message.
         * @function verify
         * @memberof ResponsePackage.RespChatMsg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        RespChatMsg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.chatType != null && message.hasOwnProperty("chatType"))
                if (!$util.isInteger(message.chatType))
                    return "chatType: integer expected";
            if (message.baseInfo != null && message.hasOwnProperty("baseInfo")) {
                var error = $root.ResponsePackage.RespRoleBaseInfo.verify(message.baseInfo);
                if (error)
                    return "baseInfo." + error;
            }
            if (message.msg != null && message.hasOwnProperty("msg"))
                if (!$util.isString(message.msg))
                    return "msg: string expected";
            if (message.time != null && message.hasOwnProperty("time"))
                if (!$util.isInteger(message.time) && !(message.time && $util.isInteger(message.time.low) && $util.isInteger(message.time.high)))
                    return "time: integer|Long expected";
            if (message.params != null && message.hasOwnProperty("params")) {
                if (!Array.isArray(message.params))
                    return "params: array expected";
                for (var i = 0; i < message.params.length; ++i)
                    if (!$util.isString(message.params[i]))
                        return "params: string[] expected";
            }
            return null;
        };

        return RespChatMsg;
    })();

    return ResponsePackage;
})();

$root.RequestPackage = (function() {

    /**
     * Namespace RequestPackage.
     * @exports RequestPackage
     * @namespace
     */
    var RequestPackage = {};

    RequestPackage.RqstInt = (function() {

        /**
         * Properties of a RqstInt.
         * @memberof RequestPackage
         * @interface IRqstInt
         * @property {number|null} [value] RqstInt value
         */

        /**
         * Constructs a new RqstInt.
         * @memberof RequestPackage
         * @classdesc Represents a RqstInt.
         * @implements IRqstInt
         * @constructor
         * @param {RequestPackage.IRqstInt=} [properties] Properties to set
         */
        function RqstInt(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * RqstInt value.
         * @member {number} value
         * @memberof RequestPackage.RqstInt
         * @instance
         */
        RqstInt.prototype.value = 0;

        /**
         * Creates a new RqstInt instance using the specified properties.
         * @function create
         * @memberof RequestPackage.RqstInt
         * @static
         * @param {RequestPackage.IRqstInt=} [properties] Properties to set
         * @returns {RequestPackage.RqstInt} RqstInt instance
         */
        RqstInt.create = function create(properties) {
            return new RqstInt(properties);
        };

        /**
         * Encodes the specified RqstInt message. Does not implicitly {@link RequestPackage.RqstInt.verify|verify} messages.
         * @function encode
         * @memberof RequestPackage.RqstInt
         * @static
         * @param {RequestPackage.IRqstInt} message RqstInt message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RqstInt.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.value != null && message.hasOwnProperty("value"))
                writer.uint32(/* id 1, wireType 0 =*/8).sint32(message.value);
            return writer;
        };

        /**
         * Encodes the specified RqstInt message, length delimited. Does not implicitly {@link RequestPackage.RqstInt.verify|verify} messages.
         * @function encodeDelimited
         * @memberof RequestPackage.RqstInt
         * @static
         * @param {RequestPackage.IRqstInt} message RqstInt message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RqstInt.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RqstInt message from the specified reader or buffer.
         * @function decode
         * @memberof RequestPackage.RqstInt
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {RequestPackage.RqstInt} RqstInt
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RqstInt.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.RequestPackage.RqstInt();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.value = reader.sint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a RqstInt message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof RequestPackage.RqstInt
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {RequestPackage.RqstInt} RqstInt
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RqstInt.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a RqstInt message.
         * @function verify
         * @memberof RequestPackage.RqstInt
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        RqstInt.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.value != null && message.hasOwnProperty("value"))
                if (!$util.isInteger(message.value))
                    return "value: integer expected";
            return null;
        };

        return RqstInt;
    })();

    RequestPackage.RqstIntKeyIntValue = (function() {

        /**
         * Properties of a RqstIntKeyIntValue.
         * @memberof RequestPackage
         * @interface IRqstIntKeyIntValue
         * @property {number|null} [key] RqstIntKeyIntValue key
         * @property {number|null} [value] RqstIntKeyIntValue value
         */

        /**
         * Constructs a new RqstIntKeyIntValue.
         * @memberof RequestPackage
         * @classdesc Represents a RqstIntKeyIntValue.
         * @implements IRqstIntKeyIntValue
         * @constructor
         * @param {RequestPackage.IRqstIntKeyIntValue=} [properties] Properties to set
         */
        function RqstIntKeyIntValue(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * RqstIntKeyIntValue key.
         * @member {number} key
         * @memberof RequestPackage.RqstIntKeyIntValue
         * @instance
         */
        RqstIntKeyIntValue.prototype.key = 0;

        /**
         * RqstIntKeyIntValue value.
         * @member {number} value
         * @memberof RequestPackage.RqstIntKeyIntValue
         * @instance
         */
        RqstIntKeyIntValue.prototype.value = 0;

        /**
         * Creates a new RqstIntKeyIntValue instance using the specified properties.
         * @function create
         * @memberof RequestPackage.RqstIntKeyIntValue
         * @static
         * @param {RequestPackage.IRqstIntKeyIntValue=} [properties] Properties to set
         * @returns {RequestPackage.RqstIntKeyIntValue} RqstIntKeyIntValue instance
         */
        RqstIntKeyIntValue.create = function create(properties) {
            return new RqstIntKeyIntValue(properties);
        };

        /**
         * Encodes the specified RqstIntKeyIntValue message. Does not implicitly {@link RequestPackage.RqstIntKeyIntValue.verify|verify} messages.
         * @function encode
         * @memberof RequestPackage.RqstIntKeyIntValue
         * @static
         * @param {RequestPackage.IRqstIntKeyIntValue} message RqstIntKeyIntValue message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RqstIntKeyIntValue.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.key != null && message.hasOwnProperty("key"))
                writer.uint32(/* id 1, wireType 0 =*/8).sint32(message.key);
            if (message.value != null && message.hasOwnProperty("value"))
                writer.uint32(/* id 2, wireType 0 =*/16).sint32(message.value);
            return writer;
        };

        /**
         * Encodes the specified RqstIntKeyIntValue message, length delimited. Does not implicitly {@link RequestPackage.RqstIntKeyIntValue.verify|verify} messages.
         * @function encodeDelimited
         * @memberof RequestPackage.RqstIntKeyIntValue
         * @static
         * @param {RequestPackage.IRqstIntKeyIntValue} message RqstIntKeyIntValue message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RqstIntKeyIntValue.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RqstIntKeyIntValue message from the specified reader or buffer.
         * @function decode
         * @memberof RequestPackage.RqstIntKeyIntValue
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {RequestPackage.RqstIntKeyIntValue} RqstIntKeyIntValue
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RqstIntKeyIntValue.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.RequestPackage.RqstIntKeyIntValue();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.key = reader.sint32();
                    break;
                case 2:
                    message.value = reader.sint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a RqstIntKeyIntValue message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof RequestPackage.RqstIntKeyIntValue
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {RequestPackage.RqstIntKeyIntValue} RqstIntKeyIntValue
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RqstIntKeyIntValue.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a RqstIntKeyIntValue message.
         * @function verify
         * @memberof RequestPackage.RqstIntKeyIntValue
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        RqstIntKeyIntValue.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.key != null && message.hasOwnProperty("key"))
                if (!$util.isInteger(message.key))
                    return "key: integer expected";
            if (message.value != null && message.hasOwnProperty("value"))
                if (!$util.isInteger(message.value))
                    return "value: integer expected";
            return null;
        };

        return RqstIntKeyIntValue;
    })();

    RequestPackage.RqstIntKeyStrValue = (function() {

        /**
         * Properties of a RqstIntKeyStrValue.
         * @memberof RequestPackage
         * @interface IRqstIntKeyStrValue
         * @property {number|null} [key] RqstIntKeyStrValue key
         * @property {string|null} [value] RqstIntKeyStrValue value
         */

        /**
         * Constructs a new RqstIntKeyStrValue.
         * @memberof RequestPackage
         * @classdesc Represents a RqstIntKeyStrValue.
         * @implements IRqstIntKeyStrValue
         * @constructor
         * @param {RequestPackage.IRqstIntKeyStrValue=} [properties] Properties to set
         */
        function RqstIntKeyStrValue(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * RqstIntKeyStrValue key.
         * @member {number} key
         * @memberof RequestPackage.RqstIntKeyStrValue
         * @instance
         */
        RqstIntKeyStrValue.prototype.key = 0;

        /**
         * RqstIntKeyStrValue value.
         * @member {string} value
         * @memberof RequestPackage.RqstIntKeyStrValue
         * @instance
         */
        RqstIntKeyStrValue.prototype.value = "";

        /**
         * Creates a new RqstIntKeyStrValue instance using the specified properties.
         * @function create
         * @memberof RequestPackage.RqstIntKeyStrValue
         * @static
         * @param {RequestPackage.IRqstIntKeyStrValue=} [properties] Properties to set
         * @returns {RequestPackage.RqstIntKeyStrValue} RqstIntKeyStrValue instance
         */
        RqstIntKeyStrValue.create = function create(properties) {
            return new RqstIntKeyStrValue(properties);
        };

        /**
         * Encodes the specified RqstIntKeyStrValue message. Does not implicitly {@link RequestPackage.RqstIntKeyStrValue.verify|verify} messages.
         * @function encode
         * @memberof RequestPackage.RqstIntKeyStrValue
         * @static
         * @param {RequestPackage.IRqstIntKeyStrValue} message RqstIntKeyStrValue message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RqstIntKeyStrValue.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.key != null && message.hasOwnProperty("key"))
                writer.uint32(/* id 1, wireType 0 =*/8).sint32(message.key);
            if (message.value != null && message.hasOwnProperty("value"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.value);
            return writer;
        };

        /**
         * Encodes the specified RqstIntKeyStrValue message, length delimited. Does not implicitly {@link RequestPackage.RqstIntKeyStrValue.verify|verify} messages.
         * @function encodeDelimited
         * @memberof RequestPackage.RqstIntKeyStrValue
         * @static
         * @param {RequestPackage.IRqstIntKeyStrValue} message RqstIntKeyStrValue message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RqstIntKeyStrValue.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RqstIntKeyStrValue message from the specified reader or buffer.
         * @function decode
         * @memberof RequestPackage.RqstIntKeyStrValue
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {RequestPackage.RqstIntKeyStrValue} RqstIntKeyStrValue
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RqstIntKeyStrValue.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.RequestPackage.RqstIntKeyStrValue();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.key = reader.sint32();
                    break;
                case 2:
                    message.value = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a RqstIntKeyStrValue message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof RequestPackage.RqstIntKeyStrValue
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {RequestPackage.RqstIntKeyStrValue} RqstIntKeyStrValue
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RqstIntKeyStrValue.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a RqstIntKeyStrValue message.
         * @function verify
         * @memberof RequestPackage.RqstIntKeyStrValue
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        RqstIntKeyStrValue.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.key != null && message.hasOwnProperty("key"))
                if (!$util.isInteger(message.key))
                    return "key: integer expected";
            if (message.value != null && message.hasOwnProperty("value"))
                if (!$util.isString(message.value))
                    return "value: string expected";
            return null;
        };

        return RqstIntKeyStrValue;
    })();

    RequestPackage.RqstLoadRole = (function() {

        /**
         * Properties of a RqstLoadRole.
         * @memberof RequestPackage
         * @interface IRqstLoadRole
         * @property {string|null} [sid] RqstLoadRole sid
         * @property {string|null} [ip] RqstLoadRole ip
         */

        /**
         * Constructs a new RqstLoadRole.
         * @memberof RequestPackage
         * @classdesc Represents a RqstLoadRole.
         * @implements IRqstLoadRole
         * @constructor
         * @param {RequestPackage.IRqstLoadRole=} [properties] Properties to set
         */
        function RqstLoadRole(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * RqstLoadRole sid.
         * @member {string} sid
         * @memberof RequestPackage.RqstLoadRole
         * @instance
         */
        RqstLoadRole.prototype.sid = "";

        /**
         * RqstLoadRole ip.
         * @member {string} ip
         * @memberof RequestPackage.RqstLoadRole
         * @instance
         */
        RqstLoadRole.prototype.ip = "";

        /**
         * Creates a new RqstLoadRole instance using the specified properties.
         * @function create
         * @memberof RequestPackage.RqstLoadRole
         * @static
         * @param {RequestPackage.IRqstLoadRole=} [properties] Properties to set
         * @returns {RequestPackage.RqstLoadRole} RqstLoadRole instance
         */
        RqstLoadRole.create = function create(properties) {
            return new RqstLoadRole(properties);
        };

        /**
         * Encodes the specified RqstLoadRole message. Does not implicitly {@link RequestPackage.RqstLoadRole.verify|verify} messages.
         * @function encode
         * @memberof RequestPackage.RqstLoadRole
         * @static
         * @param {RequestPackage.IRqstLoadRole} message RqstLoadRole message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RqstLoadRole.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.sid != null && message.hasOwnProperty("sid"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.sid);
            if (message.ip != null && message.hasOwnProperty("ip"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.ip);
            return writer;
        };

        /**
         * Encodes the specified RqstLoadRole message, length delimited. Does not implicitly {@link RequestPackage.RqstLoadRole.verify|verify} messages.
         * @function encodeDelimited
         * @memberof RequestPackage.RqstLoadRole
         * @static
         * @param {RequestPackage.IRqstLoadRole} message RqstLoadRole message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RqstLoadRole.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RqstLoadRole message from the specified reader or buffer.
         * @function decode
         * @memberof RequestPackage.RqstLoadRole
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {RequestPackage.RqstLoadRole} RqstLoadRole
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RqstLoadRole.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.RequestPackage.RqstLoadRole();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.sid = reader.string();
                    break;
                case 2:
                    message.ip = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a RqstLoadRole message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof RequestPackage.RqstLoadRole
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {RequestPackage.RqstLoadRole} RqstLoadRole
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RqstLoadRole.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a RqstLoadRole message.
         * @function verify
         * @memberof RequestPackage.RqstLoadRole
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        RqstLoadRole.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.sid != null && message.hasOwnProperty("sid"))
                if (!$util.isString(message.sid))
                    return "sid: string expected";
            if (message.ip != null && message.hasOwnProperty("ip"))
                if (!$util.isString(message.ip))
                    return "ip: string expected";
            return null;
        };

        return RqstLoadRole;
    })();

    RequestPackage.RqstLong = (function() {

        /**
         * Properties of a RqstLong.
         * @memberof RequestPackage
         * @interface IRqstLong
         * @property {number|Long|null} [value] RqstLong value
         */

        /**
         * Constructs a new RqstLong.
         * @memberof RequestPackage
         * @classdesc Represents a RqstLong.
         * @implements IRqstLong
         * @constructor
         * @param {RequestPackage.IRqstLong=} [properties] Properties to set
         */
        function RqstLong(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * RqstLong value.
         * @member {number|Long} value
         * @memberof RequestPackage.RqstLong
         * @instance
         */
        RqstLong.prototype.value = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new RqstLong instance using the specified properties.
         * @function create
         * @memberof RequestPackage.RqstLong
         * @static
         * @param {RequestPackage.IRqstLong=} [properties] Properties to set
         * @returns {RequestPackage.RqstLong} RqstLong instance
         */
        RqstLong.create = function create(properties) {
            return new RqstLong(properties);
        };

        /**
         * Encodes the specified RqstLong message. Does not implicitly {@link RequestPackage.RqstLong.verify|verify} messages.
         * @function encode
         * @memberof RequestPackage.RqstLong
         * @static
         * @param {RequestPackage.IRqstLong} message RqstLong message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RqstLong.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.value != null && message.hasOwnProperty("value"))
                writer.uint32(/* id 1, wireType 0 =*/8).sint64(message.value);
            return writer;
        };

        /**
         * Encodes the specified RqstLong message, length delimited. Does not implicitly {@link RequestPackage.RqstLong.verify|verify} messages.
         * @function encodeDelimited
         * @memberof RequestPackage.RqstLong
         * @static
         * @param {RequestPackage.IRqstLong} message RqstLong message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RqstLong.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RqstLong message from the specified reader or buffer.
         * @function decode
         * @memberof RequestPackage.RqstLong
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {RequestPackage.RqstLong} RqstLong
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RqstLong.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.RequestPackage.RqstLong();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.value = reader.sint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a RqstLong message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof RequestPackage.RqstLong
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {RequestPackage.RqstLong} RqstLong
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RqstLong.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a RqstLong message.
         * @function verify
         * @memberof RequestPackage.RqstLong
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        RqstLong.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.value != null && message.hasOwnProperty("value"))
                if (!$util.isInteger(message.value) && !(message.value && $util.isInteger(message.value.low) && $util.isInteger(message.value.high)))
                    return "value: integer|Long expected";
            return null;
        };

        return RqstLong;
    })();

    RequestPackage.RqstStr = (function() {

        /**
         * Properties of a RqstStr.
         * @memberof RequestPackage
         * @interface IRqstStr
         * @property {string|null} [value] RqstStr value
         */

        /**
         * Constructs a new RqstStr.
         * @memberof RequestPackage
         * @classdesc Represents a RqstStr.
         * @implements IRqstStr
         * @constructor
         * @param {RequestPackage.IRqstStr=} [properties] Properties to set
         */
        function RqstStr(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * RqstStr value.
         * @member {string} value
         * @memberof RequestPackage.RqstStr
         * @instance
         */
        RqstStr.prototype.value = "";

        /**
         * Creates a new RqstStr instance using the specified properties.
         * @function create
         * @memberof RequestPackage.RqstStr
         * @static
         * @param {RequestPackage.IRqstStr=} [properties] Properties to set
         * @returns {RequestPackage.RqstStr} RqstStr instance
         */
        RqstStr.create = function create(properties) {
            return new RqstStr(properties);
        };

        /**
         * Encodes the specified RqstStr message. Does not implicitly {@link RequestPackage.RqstStr.verify|verify} messages.
         * @function encode
         * @memberof RequestPackage.RqstStr
         * @static
         * @param {RequestPackage.IRqstStr} message RqstStr message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RqstStr.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.value != null && message.hasOwnProperty("value"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.value);
            return writer;
        };

        /**
         * Encodes the specified RqstStr message, length delimited. Does not implicitly {@link RequestPackage.RqstStr.verify|verify} messages.
         * @function encodeDelimited
         * @memberof RequestPackage.RqstStr
         * @static
         * @param {RequestPackage.IRqstStr} message RqstStr message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RqstStr.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RqstStr message from the specified reader or buffer.
         * @function decode
         * @memberof RequestPackage.RqstStr
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {RequestPackage.RqstStr} RqstStr
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RqstStr.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.RequestPackage.RqstStr();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.value = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a RqstStr message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof RequestPackage.RqstStr
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {RequestPackage.RqstStr} RqstStr
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RqstStr.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a RqstStr message.
         * @function verify
         * @memberof RequestPackage.RqstStr
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        RqstStr.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.value != null && message.hasOwnProperty("value"))
                if (!$util.isString(message.value))
                    return "value: string expected";
            return null;
        };

        return RqstStr;
    })();

    RequestPackage.RqstStrKeyStrValue = (function() {

        /**
         * Properties of a RqstStrKeyStrValue.
         * @memberof RequestPackage
         * @interface IRqstStrKeyStrValue
         * @property {string|null} [key] RqstStrKeyStrValue key
         * @property {string|null} [value] RqstStrKeyStrValue value
         */

        /**
         * Constructs a new RqstStrKeyStrValue.
         * @memberof RequestPackage
         * @classdesc Represents a RqstStrKeyStrValue.
         * @implements IRqstStrKeyStrValue
         * @constructor
         * @param {RequestPackage.IRqstStrKeyStrValue=} [properties] Properties to set
         */
        function RqstStrKeyStrValue(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * RqstStrKeyStrValue key.
         * @member {string} key
         * @memberof RequestPackage.RqstStrKeyStrValue
         * @instance
         */
        RqstStrKeyStrValue.prototype.key = "";

        /**
         * RqstStrKeyStrValue value.
         * @member {string} value
         * @memberof RequestPackage.RqstStrKeyStrValue
         * @instance
         */
        RqstStrKeyStrValue.prototype.value = "";

        /**
         * Creates a new RqstStrKeyStrValue instance using the specified properties.
         * @function create
         * @memberof RequestPackage.RqstStrKeyStrValue
         * @static
         * @param {RequestPackage.IRqstStrKeyStrValue=} [properties] Properties to set
         * @returns {RequestPackage.RqstStrKeyStrValue} RqstStrKeyStrValue instance
         */
        RqstStrKeyStrValue.create = function create(properties) {
            return new RqstStrKeyStrValue(properties);
        };

        /**
         * Encodes the specified RqstStrKeyStrValue message. Does not implicitly {@link RequestPackage.RqstStrKeyStrValue.verify|verify} messages.
         * @function encode
         * @memberof RequestPackage.RqstStrKeyStrValue
         * @static
         * @param {RequestPackage.IRqstStrKeyStrValue} message RqstStrKeyStrValue message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RqstStrKeyStrValue.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.key != null && message.hasOwnProperty("key"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.key);
            if (message.value != null && message.hasOwnProperty("value"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.value);
            return writer;
        };

        /**
         * Encodes the specified RqstStrKeyStrValue message, length delimited. Does not implicitly {@link RequestPackage.RqstStrKeyStrValue.verify|verify} messages.
         * @function encodeDelimited
         * @memberof RequestPackage.RqstStrKeyStrValue
         * @static
         * @param {RequestPackage.IRqstStrKeyStrValue} message RqstStrKeyStrValue message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RqstStrKeyStrValue.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RqstStrKeyStrValue message from the specified reader or buffer.
         * @function decode
         * @memberof RequestPackage.RqstStrKeyStrValue
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {RequestPackage.RqstStrKeyStrValue} RqstStrKeyStrValue
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RqstStrKeyStrValue.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.RequestPackage.RqstStrKeyStrValue();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.key = reader.string();
                    break;
                case 2:
                    message.value = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a RqstStrKeyStrValue message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof RequestPackage.RqstStrKeyStrValue
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {RequestPackage.RqstStrKeyStrValue} RqstStrKeyStrValue
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RqstStrKeyStrValue.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a RqstStrKeyStrValue message.
         * @function verify
         * @memberof RequestPackage.RqstStrKeyStrValue
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        RqstStrKeyStrValue.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.key != null && message.hasOwnProperty("key"))
                if (!$util.isString(message.key))
                    return "key: string expected";
            if (message.value != null && message.hasOwnProperty("value"))
                if (!$util.isString(message.value))
                    return "value: string expected";
            return null;
        };

        return RqstStrKeyStrValue;
    })();

    RequestPackage.RqstUpdateTeam = (function() {

        /**
         * Properties of a RqstUpdateTeam.
         * @memberof RequestPackage
         * @interface IRqstUpdateTeam
         * @property {number|null} [type] RqstUpdateTeam type
         * @property {Array.<number>|null} [posHid] RqstUpdateTeam posHid
         */

        /**
         * Constructs a new RqstUpdateTeam.
         * @memberof RequestPackage
         * @classdesc Represents a RqstUpdateTeam.
         * @implements IRqstUpdateTeam
         * @constructor
         * @param {RequestPackage.IRqstUpdateTeam=} [properties] Properties to set
         */
        function RqstUpdateTeam(properties) {
            this.posHid = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * RqstUpdateTeam type.
         * @member {number} type
         * @memberof RequestPackage.RqstUpdateTeam
         * @instance
         */
        RqstUpdateTeam.prototype.type = 0;

        /**
         * RqstUpdateTeam posHid.
         * @member {Array.<number>} posHid
         * @memberof RequestPackage.RqstUpdateTeam
         * @instance
         */
        RqstUpdateTeam.prototype.posHid = $util.emptyArray;

        /**
         * Creates a new RqstUpdateTeam instance using the specified properties.
         * @function create
         * @memberof RequestPackage.RqstUpdateTeam
         * @static
         * @param {RequestPackage.IRqstUpdateTeam=} [properties] Properties to set
         * @returns {RequestPackage.RqstUpdateTeam} RqstUpdateTeam instance
         */
        RqstUpdateTeam.create = function create(properties) {
            return new RqstUpdateTeam(properties);
        };

        /**
         * Encodes the specified RqstUpdateTeam message. Does not implicitly {@link RequestPackage.RqstUpdateTeam.verify|verify} messages.
         * @function encode
         * @memberof RequestPackage.RqstUpdateTeam
         * @static
         * @param {RequestPackage.IRqstUpdateTeam} message RqstUpdateTeam message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RqstUpdateTeam.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.type != null && message.hasOwnProperty("type"))
                writer.uint32(/* id 1, wireType 0 =*/8).sint32(message.type);
            if (message.posHid != null && message.posHid.length) {
                writer.uint32(/* id 2, wireType 2 =*/18).fork();
                for (var i = 0; i < message.posHid.length; ++i)
                    writer.sint32(message.posHid[i]);
                writer.ldelim();
            }
            return writer;
        };

        /**
         * Encodes the specified RqstUpdateTeam message, length delimited. Does not implicitly {@link RequestPackage.RqstUpdateTeam.verify|verify} messages.
         * @function encodeDelimited
         * @memberof RequestPackage.RqstUpdateTeam
         * @static
         * @param {RequestPackage.IRqstUpdateTeam} message RqstUpdateTeam message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RqstUpdateTeam.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RqstUpdateTeam message from the specified reader or buffer.
         * @function decode
         * @memberof RequestPackage.RqstUpdateTeam
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {RequestPackage.RqstUpdateTeam} RqstUpdateTeam
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RqstUpdateTeam.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.RequestPackage.RqstUpdateTeam();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.type = reader.sint32();
                    break;
                case 2:
                    if (!(message.posHid && message.posHid.length))
                        message.posHid = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.posHid.push(reader.sint32());
                    } else
                        message.posHid.push(reader.sint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a RqstUpdateTeam message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof RequestPackage.RqstUpdateTeam
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {RequestPackage.RqstUpdateTeam} RqstUpdateTeam
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RqstUpdateTeam.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a RqstUpdateTeam message.
         * @function verify
         * @memberof RequestPackage.RqstUpdateTeam
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        RqstUpdateTeam.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.type != null && message.hasOwnProperty("type"))
                if (!$util.isInteger(message.type))
                    return "type: integer expected";
            if (message.posHid != null && message.hasOwnProperty("posHid")) {
                if (!Array.isArray(message.posHid))
                    return "posHid: array expected";
                for (var i = 0; i < message.posHid.length; ++i)
                    if (!$util.isInteger(message.posHid[i]))
                        return "posHid: integer[] expected";
            }
            return null;
        };

        return RqstUpdateTeam;
    })();

    RequestPackage.RqstVerify = (function() {

        /**
         * Properties of a RqstVerify.
         * @memberof RequestPackage
         * @interface IRqstVerify
         * @property {string|null} [uid] RqstVerify uid
         * @property {string|null} [sid] RqstVerify sid
         * @property {string|null} [access] RqstVerify access
         * @property {string|null} [ip] RqstVerify ip
         */

        /**
         * Constructs a new RqstVerify.
         * @memberof RequestPackage
         * @classdesc Represents a RqstVerify.
         * @implements IRqstVerify
         * @constructor
         * @param {RequestPackage.IRqstVerify=} [properties] Properties to set
         */
        function RqstVerify(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * RqstVerify uid.
         * @member {string} uid
         * @memberof RequestPackage.RqstVerify
         * @instance
         */
        RqstVerify.prototype.uid = "";

        /**
         * RqstVerify sid.
         * @member {string} sid
         * @memberof RequestPackage.RqstVerify
         * @instance
         */
        RqstVerify.prototype.sid = "";

        /**
         * RqstVerify access.
         * @member {string} access
         * @memberof RequestPackage.RqstVerify
         * @instance
         */
        RqstVerify.prototype.access = "";

        /**
         * RqstVerify ip.
         * @member {string} ip
         * @memberof RequestPackage.RqstVerify
         * @instance
         */
        RqstVerify.prototype.ip = "";

        /**
         * Creates a new RqstVerify instance using the specified properties.
         * @function create
         * @memberof RequestPackage.RqstVerify
         * @static
         * @param {RequestPackage.IRqstVerify=} [properties] Properties to set
         * @returns {RequestPackage.RqstVerify} RqstVerify instance
         */
        RqstVerify.create = function create(properties) {
            return new RqstVerify(properties);
        };

        /**
         * Encodes the specified RqstVerify message. Does not implicitly {@link RequestPackage.RqstVerify.verify|verify} messages.
         * @function encode
         * @memberof RequestPackage.RqstVerify
         * @static
         * @param {RequestPackage.IRqstVerify} message RqstVerify message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RqstVerify.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.uid != null && message.hasOwnProperty("uid"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.uid);
            if (message.sid != null && message.hasOwnProperty("sid"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.sid);
            if (message.access != null && message.hasOwnProperty("access"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.access);
            if (message.ip != null && message.hasOwnProperty("ip"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.ip);
            return writer;
        };

        /**
         * Encodes the specified RqstVerify message, length delimited. Does not implicitly {@link RequestPackage.RqstVerify.verify|verify} messages.
         * @function encodeDelimited
         * @memberof RequestPackage.RqstVerify
         * @static
         * @param {RequestPackage.IRqstVerify} message RqstVerify message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RqstVerify.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RqstVerify message from the specified reader or buffer.
         * @function decode
         * @memberof RequestPackage.RqstVerify
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {RequestPackage.RqstVerify} RqstVerify
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RqstVerify.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.RequestPackage.RqstVerify();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.uid = reader.string();
                    break;
                case 2:
                    message.sid = reader.string();
                    break;
                case 3:
                    message.access = reader.string();
                    break;
                case 4:
                    message.ip = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a RqstVerify message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof RequestPackage.RqstVerify
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {RequestPackage.RqstVerify} RqstVerify
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RqstVerify.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a RqstVerify message.
         * @function verify
         * @memberof RequestPackage.RqstVerify
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        RqstVerify.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.uid != null && message.hasOwnProperty("uid"))
                if (!$util.isString(message.uid))
                    return "uid: string expected";
            if (message.sid != null && message.hasOwnProperty("sid"))
                if (!$util.isString(message.sid))
                    return "sid: string expected";
            if (message.access != null && message.hasOwnProperty("access"))
                if (!$util.isString(message.access))
                    return "access: string expected";
            if (message.ip != null && message.hasOwnProperty("ip"))
                if (!$util.isString(message.ip))
                    return "ip: string expected";
            return null;
        };

        return RqstVerify;
    })();

    return RequestPackage;
})();