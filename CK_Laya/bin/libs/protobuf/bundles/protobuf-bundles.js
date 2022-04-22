var $protobuf = window.protobuf;
$protobuf.roots.default=window;
// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.clientResponsePackage = (function() {

    /**
     * Namespace clientResponsePackage.
     * @exports clientResponsePackage
     * @namespace
     */
    var clientResponsePackage = {};

    clientResponsePackage.RespFully = (function() {

        /**
         * Properties of a RespFully.
         * @memberof clientResponsePackage
         * @interface IRespFully
         * @property {clientResponsePackage.IRespRole|null} [respRole] RespFully respRole
         * @property {clientResponsePackage.IRespLong|null} [ping] RespFully ping
         * @property {clientResponsePackage.IRespCk|null} [respCk] RespFully respCk
         * @property {clientResponsePackage.IRespChat|null} [respChat] RespFully respChat
         * @property {clientResponsePackage.IRespMail|null} [respMail] RespFully respMail
         * @property {clientResponsePackage.IRespFight|null} [respFight] RespFully respFight
         * @property {clientResponsePackage.IRespTeam|null} [respTeam] RespFully respTeam
         * @property {clientResponsePackage.IRespMatch|null} [respMatch] RespFully respMatch
         */

        /**
         * Constructs a new RespFully.
         * @memberof clientResponsePackage
         * @classdesc Represents a RespFully.
         * @implements IRespFully
         * @constructor
         * @param {clientResponsePackage.IRespFully=} [properties] Properties to set
         */
        function RespFully(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * RespFully respRole.
         * @member {clientResponsePackage.IRespRole|null|undefined} respRole
         * @memberof clientResponsePackage.RespFully
         * @instance
         */
        RespFully.prototype.respRole = null;

        /**
         * RespFully ping.
         * @member {clientResponsePackage.IRespLong|null|undefined} ping
         * @memberof clientResponsePackage.RespFully
         * @instance
         */
        RespFully.prototype.ping = null;

        /**
         * RespFully respCk.
         * @member {clientResponsePackage.IRespCk|null|undefined} respCk
         * @memberof clientResponsePackage.RespFully
         * @instance
         */
        RespFully.prototype.respCk = null;

        /**
         * RespFully respChat.
         * @member {clientResponsePackage.IRespChat|null|undefined} respChat
         * @memberof clientResponsePackage.RespFully
         * @instance
         */
        RespFully.prototype.respChat = null;

        /**
         * RespFully respMail.
         * @member {clientResponsePackage.IRespMail|null|undefined} respMail
         * @memberof clientResponsePackage.RespFully
         * @instance
         */
        RespFully.prototype.respMail = null;

        /**
         * RespFully respFight.
         * @member {clientResponsePackage.IRespFight|null|undefined} respFight
         * @memberof clientResponsePackage.RespFully
         * @instance
         */
        RespFully.prototype.respFight = null;

        /**
         * RespFully respTeam.
         * @member {clientResponsePackage.IRespTeam|null|undefined} respTeam
         * @memberof clientResponsePackage.RespFully
         * @instance
         */
        RespFully.prototype.respTeam = null;

        /**
         * RespFully respMatch.
         * @member {clientResponsePackage.IRespMatch|null|undefined} respMatch
         * @memberof clientResponsePackage.RespFully
         * @instance
         */
        RespFully.prototype.respMatch = null;

        /**
         * Creates a new RespFully instance using the specified properties.
         * @function create
         * @memberof clientResponsePackage.RespFully
         * @static
         * @param {clientResponsePackage.IRespFully=} [properties] Properties to set
         * @returns {clientResponsePackage.RespFully} RespFully instance
         */
        RespFully.create = function create(properties) {
            return new RespFully(properties);
        };

        /**
         * Encodes the specified RespFully message. Does not implicitly {@link clientResponsePackage.RespFully.verify|verify} messages.
         * @function encode
         * @memberof clientResponsePackage.RespFully
         * @static
         * @param {clientResponsePackage.IRespFully} message RespFully message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RespFully.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.respRole != null && message.hasOwnProperty("respRole"))
                $root.clientResponsePackage.RespRole.encode(message.respRole, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.ping != null && message.hasOwnProperty("ping"))
                $root.clientResponsePackage.RespLong.encode(message.ping, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.respCk != null && message.hasOwnProperty("respCk"))
                $root.clientResponsePackage.RespCk.encode(message.respCk, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.respChat != null && message.hasOwnProperty("respChat"))
                $root.clientResponsePackage.RespChat.encode(message.respChat, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            if (message.respMail != null && message.hasOwnProperty("respMail"))
                $root.clientResponsePackage.RespMail.encode(message.respMail, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
            if (message.respFight != null && message.hasOwnProperty("respFight"))
                $root.clientResponsePackage.RespFight.encode(message.respFight, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
            if (message.respTeam != null && message.hasOwnProperty("respTeam"))
                $root.clientResponsePackage.RespTeam.encode(message.respTeam, writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
            if (message.respMatch != null && message.hasOwnProperty("respMatch"))
                $root.clientResponsePackage.RespMatch.encode(message.respMatch, writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified RespFully message, length delimited. Does not implicitly {@link clientResponsePackage.RespFully.verify|verify} messages.
         * @function encodeDelimited
         * @memberof clientResponsePackage.RespFully
         * @static
         * @param {clientResponsePackage.IRespFully} message RespFully message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RespFully.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RespFully message from the specified reader or buffer.
         * @function decode
         * @memberof clientResponsePackage.RespFully
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {clientResponsePackage.RespFully} RespFully
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RespFully.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.clientResponsePackage.RespFully();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.respRole = $root.clientResponsePackage.RespRole.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.ping = $root.clientResponsePackage.RespLong.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.respCk = $root.clientResponsePackage.RespCk.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.respChat = $root.clientResponsePackage.RespChat.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.respMail = $root.clientResponsePackage.RespMail.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.respFight = $root.clientResponsePackage.RespFight.decode(reader, reader.uint32());
                    break;
                case 7:
                    message.respTeam = $root.clientResponsePackage.RespTeam.decode(reader, reader.uint32());
                    break;
                case 8:
                    message.respMatch = $root.clientResponsePackage.RespMatch.decode(reader, reader.uint32());
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
         * @memberof clientResponsePackage.RespFully
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {clientResponsePackage.RespFully} RespFully
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
         * @memberof clientResponsePackage.RespFully
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        RespFully.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.respRole != null && message.hasOwnProperty("respRole")) {
                var error = $root.clientResponsePackage.RespRole.verify(message.respRole);
                if (error)
                    return "respRole." + error;
            }
            if (message.ping != null && message.hasOwnProperty("ping")) {
                var error = $root.clientResponsePackage.RespLong.verify(message.ping);
                if (error)
                    return "ping." + error;
            }
            if (message.respCk != null && message.hasOwnProperty("respCk")) {
                var error = $root.clientResponsePackage.RespCk.verify(message.respCk);
                if (error)
                    return "respCk." + error;
            }
            if (message.respChat != null && message.hasOwnProperty("respChat")) {
                var error = $root.clientResponsePackage.RespChat.verify(message.respChat);
                if (error)
                    return "respChat." + error;
            }
            if (message.respMail != null && message.hasOwnProperty("respMail")) {
                var error = $root.clientResponsePackage.RespMail.verify(message.respMail);
                if (error)
                    return "respMail." + error;
            }
            if (message.respFight != null && message.hasOwnProperty("respFight")) {
                var error = $root.clientResponsePackage.RespFight.verify(message.respFight);
                if (error)
                    return "respFight." + error;
            }
            if (message.respTeam != null && message.hasOwnProperty("respTeam")) {
                var error = $root.clientResponsePackage.RespTeam.verify(message.respTeam);
                if (error)
                    return "respTeam." + error;
            }
            if (message.respMatch != null && message.hasOwnProperty("respMatch")) {
                var error = $root.clientResponsePackage.RespMatch.verify(message.respMatch);
                if (error)
                    return "respMatch." + error;
            }
            return null;
        };

        return RespFully;
    })();

    clientResponsePackage.RespRole = (function() {

        /**
         * Properties of a RespRole.
         * @memberof clientResponsePackage
         * @interface IRespRole
         * @property {clientResponsePackage.IRespRoleInfo|null} [roleInfo] RespRole roleInfo
         * @property {clientResponsePackage.IRespRoleBaseInfo|null} [roleBaseInfo] RespRole roleBaseInfo
         * @property {clientResponsePackage.IRespRoleOp|null} [roleOp] RespRole roleOp
         * @property {clientResponsePackage.IRespInt|null} [createRole] RespRole createRole
         */

        /**
         * Constructs a new RespRole.
         * @memberof clientResponsePackage
         * @classdesc Represents a RespRole.
         * @implements IRespRole
         * @constructor
         * @param {clientResponsePackage.IRespRole=} [properties] Properties to set
         */
        function RespRole(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * RespRole roleInfo.
         * @member {clientResponsePackage.IRespRoleInfo|null|undefined} roleInfo
         * @memberof clientResponsePackage.RespRole
         * @instance
         */
        RespRole.prototype.roleInfo = null;

        /**
         * RespRole roleBaseInfo.
         * @member {clientResponsePackage.IRespRoleBaseInfo|null|undefined} roleBaseInfo
         * @memberof clientResponsePackage.RespRole
         * @instance
         */
        RespRole.prototype.roleBaseInfo = null;

        /**
         * RespRole roleOp.
         * @member {clientResponsePackage.IRespRoleOp|null|undefined} roleOp
         * @memberof clientResponsePackage.RespRole
         * @instance
         */
        RespRole.prototype.roleOp = null;

        /**
         * RespRole createRole.
         * @member {clientResponsePackage.IRespInt|null|undefined} createRole
         * @memberof clientResponsePackage.RespRole
         * @instance
         */
        RespRole.prototype.createRole = null;

        /**
         * Creates a new RespRole instance using the specified properties.
         * @function create
         * @memberof clientResponsePackage.RespRole
         * @static
         * @param {clientResponsePackage.IRespRole=} [properties] Properties to set
         * @returns {clientResponsePackage.RespRole} RespRole instance
         */
        RespRole.create = function create(properties) {
            return new RespRole(properties);
        };

        /**
         * Encodes the specified RespRole message. Does not implicitly {@link clientResponsePackage.RespRole.verify|verify} messages.
         * @function encode
         * @memberof clientResponsePackage.RespRole
         * @static
         * @param {clientResponsePackage.IRespRole} message RespRole message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RespRole.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.roleInfo != null && message.hasOwnProperty("roleInfo"))
                $root.clientResponsePackage.RespRoleInfo.encode(message.roleInfo, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.roleBaseInfo != null && message.hasOwnProperty("roleBaseInfo"))
                $root.clientResponsePackage.RespRoleBaseInfo.encode(message.roleBaseInfo, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.roleOp != null && message.hasOwnProperty("roleOp"))
                $root.clientResponsePackage.RespRoleOp.encode(message.roleOp, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.createRole != null && message.hasOwnProperty("createRole"))
                $root.clientResponsePackage.RespInt.encode(message.createRole, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified RespRole message, length delimited. Does not implicitly {@link clientResponsePackage.RespRole.verify|verify} messages.
         * @function encodeDelimited
         * @memberof clientResponsePackage.RespRole
         * @static
         * @param {clientResponsePackage.IRespRole} message RespRole message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RespRole.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RespRole message from the specified reader or buffer.
         * @function decode
         * @memberof clientResponsePackage.RespRole
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {clientResponsePackage.RespRole} RespRole
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RespRole.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.clientResponsePackage.RespRole();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.roleInfo = $root.clientResponsePackage.RespRoleInfo.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.roleBaseInfo = $root.clientResponsePackage.RespRoleBaseInfo.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.roleOp = $root.clientResponsePackage.RespRoleOp.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.createRole = $root.clientResponsePackage.RespInt.decode(reader, reader.uint32());
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
         * @memberof clientResponsePackage.RespRole
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {clientResponsePackage.RespRole} RespRole
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
         * @memberof clientResponsePackage.RespRole
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        RespRole.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.roleInfo != null && message.hasOwnProperty("roleInfo")) {
                var error = $root.clientResponsePackage.RespRoleInfo.verify(message.roleInfo);
                if (error)
                    return "roleInfo." + error;
            }
            if (message.roleBaseInfo != null && message.hasOwnProperty("roleBaseInfo")) {
                var error = $root.clientResponsePackage.RespRoleBaseInfo.verify(message.roleBaseInfo);
                if (error)
                    return "roleBaseInfo." + error;
            }
            if (message.roleOp != null && message.hasOwnProperty("roleOp")) {
                var error = $root.clientResponsePackage.RespRoleOp.verify(message.roleOp);
                if (error)
                    return "roleOp." + error;
            }
            if (message.createRole != null && message.hasOwnProperty("createRole")) {
                var error = $root.clientResponsePackage.RespInt.verify(message.createRole);
                if (error)
                    return "createRole." + error;
            }
            return null;
        };

        return RespRole;
    })();

    clientResponsePackage.RespRoleBaseInfo = (function() {

        /**
         * Properties of a RespRoleBaseInfo.
         * @memberof clientResponsePackage
         * @interface IRespRoleBaseInfo
         * @property {string|null} [id] RespRoleBaseInfo id
         * @property {string|null} [sid] RespRoleBaseInfo sid
         * @property {string|null} [name] RespRoleBaseInfo name
         * @property {number|null} [img] RespRoleBaseInfo img
         * @property {number|null} [chain] RespRoleBaseInfo chain
         */

        /**
         * Constructs a new RespRoleBaseInfo.
         * @memberof clientResponsePackage
         * @classdesc Represents a RespRoleBaseInfo.
         * @implements IRespRoleBaseInfo
         * @constructor
         * @param {clientResponsePackage.IRespRoleBaseInfo=} [properties] Properties to set
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
         * @memberof clientResponsePackage.RespRoleBaseInfo
         * @instance
         */
        RespRoleBaseInfo.prototype.id = "";

        /**
         * RespRoleBaseInfo sid.
         * @member {string} sid
         * @memberof clientResponsePackage.RespRoleBaseInfo
         * @instance
         */
        RespRoleBaseInfo.prototype.sid = "";

        /**
         * RespRoleBaseInfo name.
         * @member {string} name
         * @memberof clientResponsePackage.RespRoleBaseInfo
         * @instance
         */
        RespRoleBaseInfo.prototype.name = "";

        /**
         * RespRoleBaseInfo img.
         * @member {number} img
         * @memberof clientResponsePackage.RespRoleBaseInfo
         * @instance
         */
        RespRoleBaseInfo.prototype.img = 0;

        /**
         * RespRoleBaseInfo chain.
         * @member {number} chain
         * @memberof clientResponsePackage.RespRoleBaseInfo
         * @instance
         */
        RespRoleBaseInfo.prototype.chain = 0;

        /**
         * Creates a new RespRoleBaseInfo instance using the specified properties.
         * @function create
         * @memberof clientResponsePackage.RespRoleBaseInfo
         * @static
         * @param {clientResponsePackage.IRespRoleBaseInfo=} [properties] Properties to set
         * @returns {clientResponsePackage.RespRoleBaseInfo} RespRoleBaseInfo instance
         */
        RespRoleBaseInfo.create = function create(properties) {
            return new RespRoleBaseInfo(properties);
        };

        /**
         * Encodes the specified RespRoleBaseInfo message. Does not implicitly {@link clientResponsePackage.RespRoleBaseInfo.verify|verify} messages.
         * @function encode
         * @memberof clientResponsePackage.RespRoleBaseInfo
         * @static
         * @param {clientResponsePackage.IRespRoleBaseInfo} message RespRoleBaseInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RespRoleBaseInfo.encode = function encode(message, writer) {
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
            if (message.chain != null && message.hasOwnProperty("chain"))
                writer.uint32(/* id 5, wireType 0 =*/40).sint32(message.chain);
            return writer;
        };

        /**
         * Encodes the specified RespRoleBaseInfo message, length delimited. Does not implicitly {@link clientResponsePackage.RespRoleBaseInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof clientResponsePackage.RespRoleBaseInfo
         * @static
         * @param {clientResponsePackage.IRespRoleBaseInfo} message RespRoleBaseInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RespRoleBaseInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RespRoleBaseInfo message from the specified reader or buffer.
         * @function decode
         * @memberof clientResponsePackage.RespRoleBaseInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {clientResponsePackage.RespRoleBaseInfo} RespRoleBaseInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RespRoleBaseInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.clientResponsePackage.RespRoleBaseInfo();
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
                    message.chain = reader.sint32();
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
         * @memberof clientResponsePackage.RespRoleBaseInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {clientResponsePackage.RespRoleBaseInfo} RespRoleBaseInfo
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
         * @memberof clientResponsePackage.RespRoleBaseInfo
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
            if (message.sid != null && message.hasOwnProperty("sid"))
                if (!$util.isString(message.sid))
                    return "sid: string expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            if (message.img != null && message.hasOwnProperty("img"))
                if (!$util.isInteger(message.img))
                    return "img: integer expected";
            if (message.chain != null && message.hasOwnProperty("chain"))
                if (!$util.isInteger(message.chain))
                    return "chain: integer expected";
            return null;
        };

        return RespRoleBaseInfo;
    })();

    clientResponsePackage.RespInt = (function() {

        /**
         * Properties of a RespInt.
         * @memberof clientResponsePackage
         * @interface IRespInt
         * @property {number|null} [value] RespInt value
         */

        /**
         * Constructs a new RespInt.
         * @memberof clientResponsePackage
         * @classdesc Represents a RespInt.
         * @implements IRespInt
         * @constructor
         * @param {clientResponsePackage.IRespInt=} [properties] Properties to set
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
         * @memberof clientResponsePackage.RespInt
         * @instance
         */
        RespInt.prototype.value = 0;

        /**
         * Creates a new RespInt instance using the specified properties.
         * @function create
         * @memberof clientResponsePackage.RespInt
         * @static
         * @param {clientResponsePackage.IRespInt=} [properties] Properties to set
         * @returns {clientResponsePackage.RespInt} RespInt instance
         */
        RespInt.create = function create(properties) {
            return new RespInt(properties);
        };

        /**
         * Encodes the specified RespInt message. Does not implicitly {@link clientResponsePackage.RespInt.verify|verify} messages.
         * @function encode
         * @memberof clientResponsePackage.RespInt
         * @static
         * @param {clientResponsePackage.IRespInt} message RespInt message or plain object to encode
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
         * Encodes the specified RespInt message, length delimited. Does not implicitly {@link clientResponsePackage.RespInt.verify|verify} messages.
         * @function encodeDelimited
         * @memberof clientResponsePackage.RespInt
         * @static
         * @param {clientResponsePackage.IRespInt} message RespInt message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RespInt.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RespInt message from the specified reader or buffer.
         * @function decode
         * @memberof clientResponsePackage.RespInt
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {clientResponsePackage.RespInt} RespInt
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RespInt.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.clientResponsePackage.RespInt();
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
         * @memberof clientResponsePackage.RespInt
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {clientResponsePackage.RespInt} RespInt
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
         * @memberof clientResponsePackage.RespInt
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

    clientResponsePackage.RespRoleInfo = (function() {

        /**
         * Properties of a RespRoleInfo.
         * @memberof clientResponsePackage
         * @interface IRespRoleInfo
         * @property {string|null} [id] RespRoleInfo id
         * @property {string|null} [sid] RespRoleInfo sid
         * @property {string|null} [name] RespRoleInfo name
         * @property {number|null} [img] RespRoleInfo img
         * @property {string|null} [email] RespRoleInfo email
         * @property {number|Long|null} [serverTime] RespRoleInfo serverTime
         */

        /**
         * Constructs a new RespRoleInfo.
         * @memberof clientResponsePackage
         * @classdesc Represents a RespRoleInfo.
         * @implements IRespRoleInfo
         * @constructor
         * @param {clientResponsePackage.IRespRoleInfo=} [properties] Properties to set
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
         * @memberof clientResponsePackage.RespRoleInfo
         * @instance
         */
        RespRoleInfo.prototype.id = "";

        /**
         * RespRoleInfo sid.
         * @member {string} sid
         * @memberof clientResponsePackage.RespRoleInfo
         * @instance
         */
        RespRoleInfo.prototype.sid = "";

        /**
         * RespRoleInfo name.
         * @member {string} name
         * @memberof clientResponsePackage.RespRoleInfo
         * @instance
         */
        RespRoleInfo.prototype.name = "";

        /**
         * RespRoleInfo img.
         * @member {number} img
         * @memberof clientResponsePackage.RespRoleInfo
         * @instance
         */
        RespRoleInfo.prototype.img = 0;

        /**
         * RespRoleInfo email.
         * @member {string} email
         * @memberof clientResponsePackage.RespRoleInfo
         * @instance
         */
        RespRoleInfo.prototype.email = "";

        /**
         * RespRoleInfo serverTime.
         * @member {number|Long} serverTime
         * @memberof clientResponsePackage.RespRoleInfo
         * @instance
         */
        RespRoleInfo.prototype.serverTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new RespRoleInfo instance using the specified properties.
         * @function create
         * @memberof clientResponsePackage.RespRoleInfo
         * @static
         * @param {clientResponsePackage.IRespRoleInfo=} [properties] Properties to set
         * @returns {clientResponsePackage.RespRoleInfo} RespRoleInfo instance
         */
        RespRoleInfo.create = function create(properties) {
            return new RespRoleInfo(properties);
        };

        /**
         * Encodes the specified RespRoleInfo message. Does not implicitly {@link clientResponsePackage.RespRoleInfo.verify|verify} messages.
         * @function encode
         * @memberof clientResponsePackage.RespRoleInfo
         * @static
         * @param {clientResponsePackage.IRespRoleInfo} message RespRoleInfo message or plain object to encode
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
            if (message.serverTime != null && message.hasOwnProperty("serverTime"))
                writer.uint32(/* id 6, wireType 0 =*/48).sint64(message.serverTime);
            return writer;
        };

        /**
         * Encodes the specified RespRoleInfo message, length delimited. Does not implicitly {@link clientResponsePackage.RespRoleInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof clientResponsePackage.RespRoleInfo
         * @static
         * @param {clientResponsePackage.IRespRoleInfo} message RespRoleInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RespRoleInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RespRoleInfo message from the specified reader or buffer.
         * @function decode
         * @memberof clientResponsePackage.RespRoleInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {clientResponsePackage.RespRoleInfo} RespRoleInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RespRoleInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.clientResponsePackage.RespRoleInfo();
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
                    message.serverTime = reader.sint64();
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
         * @memberof clientResponsePackage.RespRoleInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {clientResponsePackage.RespRoleInfo} RespRoleInfo
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
         * @memberof clientResponsePackage.RespRoleInfo
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
            if (message.serverTime != null && message.hasOwnProperty("serverTime"))
                if (!$util.isInteger(message.serverTime) && !(message.serverTime && $util.isInteger(message.serverTime.low) && $util.isInteger(message.serverTime.high)))
                    return "serverTime: integer|Long expected";
            return null;
        };

        return RespRoleInfo;
    })();

    clientResponsePackage.RespRoleOp = (function() {

        /**
         * Properties of a RespRoleOp.
         * @memberof clientResponsePackage
         * @interface IRespRoleOp
         * @property {clientResponsePackage.IRespDouble|null} [stoneChg] RespRoleOp stoneChg
         * @property {boolean|null} [checkIn] RespRoleOp checkIn
         */

        /**
         * Constructs a new RespRoleOp.
         * @memberof clientResponsePackage
         * @classdesc Represents a RespRoleOp.
         * @implements IRespRoleOp
         * @constructor
         * @param {clientResponsePackage.IRespRoleOp=} [properties] Properties to set
         */
        function RespRoleOp(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * RespRoleOp stoneChg.
         * @member {clientResponsePackage.IRespDouble|null|undefined} stoneChg
         * @memberof clientResponsePackage.RespRoleOp
         * @instance
         */
        RespRoleOp.prototype.stoneChg = null;

        /**
         * RespRoleOp checkIn.
         * @member {boolean} checkIn
         * @memberof clientResponsePackage.RespRoleOp
         * @instance
         */
        RespRoleOp.prototype.checkIn = false;

        /**
         * Creates a new RespRoleOp instance using the specified properties.
         * @function create
         * @memberof clientResponsePackage.RespRoleOp
         * @static
         * @param {clientResponsePackage.IRespRoleOp=} [properties] Properties to set
         * @returns {clientResponsePackage.RespRoleOp} RespRoleOp instance
         */
        RespRoleOp.create = function create(properties) {
            return new RespRoleOp(properties);
        };

        /**
         * Encodes the specified RespRoleOp message. Does not implicitly {@link clientResponsePackage.RespRoleOp.verify|verify} messages.
         * @function encode
         * @memberof clientResponsePackage.RespRoleOp
         * @static
         * @param {clientResponsePackage.IRespRoleOp} message RespRoleOp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RespRoleOp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.stoneChg != null && message.hasOwnProperty("stoneChg"))
                $root.clientResponsePackage.RespDouble.encode(message.stoneChg, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.checkIn != null && message.hasOwnProperty("checkIn"))
                writer.uint32(/* id 2, wireType 0 =*/16).bool(message.checkIn);
            return writer;
        };

        /**
         * Encodes the specified RespRoleOp message, length delimited. Does not implicitly {@link clientResponsePackage.RespRoleOp.verify|verify} messages.
         * @function encodeDelimited
         * @memberof clientResponsePackage.RespRoleOp
         * @static
         * @param {clientResponsePackage.IRespRoleOp} message RespRoleOp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RespRoleOp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RespRoleOp message from the specified reader or buffer.
         * @function decode
         * @memberof clientResponsePackage.RespRoleOp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {clientResponsePackage.RespRoleOp} RespRoleOp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RespRoleOp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.clientResponsePackage.RespRoleOp();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.stoneChg = $root.clientResponsePackage.RespDouble.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.checkIn = reader.bool();
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
         * @memberof clientResponsePackage.RespRoleOp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {clientResponsePackage.RespRoleOp} RespRoleOp
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
         * @memberof clientResponsePackage.RespRoleOp
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        RespRoleOp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.stoneChg != null && message.hasOwnProperty("stoneChg")) {
                var error = $root.clientResponsePackage.RespDouble.verify(message.stoneChg);
                if (error)
                    return "stoneChg." + error;
            }
            if (message.checkIn != null && message.hasOwnProperty("checkIn"))
                if (typeof message.checkIn !== "boolean")
                    return "checkIn: boolean expected";
            return null;
        };

        return RespRoleOp;
    })();

    clientResponsePackage.RespDouble = (function() {

        /**
         * Properties of a RespDouble.
         * @memberof clientResponsePackage
         * @interface IRespDouble
         * @property {number|null} [value] RespDouble value
         */

        /**
         * Constructs a new RespDouble.
         * @memberof clientResponsePackage
         * @classdesc Represents a RespDouble.
         * @implements IRespDouble
         * @constructor
         * @param {clientResponsePackage.IRespDouble=} [properties] Properties to set
         */
        function RespDouble(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * RespDouble value.
         * @member {number} value
         * @memberof clientResponsePackage.RespDouble
         * @instance
         */
        RespDouble.prototype.value = 0;

        /**
         * Creates a new RespDouble instance using the specified properties.
         * @function create
         * @memberof clientResponsePackage.RespDouble
         * @static
         * @param {clientResponsePackage.IRespDouble=} [properties] Properties to set
         * @returns {clientResponsePackage.RespDouble} RespDouble instance
         */
        RespDouble.create = function create(properties) {
            return new RespDouble(properties);
        };

        /**
         * Encodes the specified RespDouble message. Does not implicitly {@link clientResponsePackage.RespDouble.verify|verify} messages.
         * @function encode
         * @memberof clientResponsePackage.RespDouble
         * @static
         * @param {clientResponsePackage.IRespDouble} message RespDouble message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RespDouble.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.value != null && message.hasOwnProperty("value"))
                writer.uint32(/* id 1, wireType 1 =*/9).double(message.value);
            return writer;
        };

        /**
         * Encodes the specified RespDouble message, length delimited. Does not implicitly {@link clientResponsePackage.RespDouble.verify|verify} messages.
         * @function encodeDelimited
         * @memberof clientResponsePackage.RespDouble
         * @static
         * @param {clientResponsePackage.IRespDouble} message RespDouble message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RespDouble.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RespDouble message from the specified reader or buffer.
         * @function decode
         * @memberof clientResponsePackage.RespDouble
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {clientResponsePackage.RespDouble} RespDouble
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RespDouble.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.clientResponsePackage.RespDouble();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.value = reader.double();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a RespDouble message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof clientResponsePackage.RespDouble
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {clientResponsePackage.RespDouble} RespDouble
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RespDouble.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a RespDouble message.
         * @function verify
         * @memberof clientResponsePackage.RespDouble
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        RespDouble.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.value != null && message.hasOwnProperty("value"))
                if (typeof message.value !== "number")
                    return "value: number expected";
            return null;
        };

        return RespDouble;
    })();

    clientResponsePackage.RespChat = (function() {

        /**
         * Properties of a RespChat.
         * @memberof clientResponsePackage
         * @interface IRespChat
         * @property {Array.<clientResponsePackage.IRespChatMsg>|null} [chatMsgs] RespChat chatMsgs
         * @property {clientResponsePackage.IRespChatMsg|null} [chatMsg] RespChat chatMsg
         */

        /**
         * Constructs a new RespChat.
         * @memberof clientResponsePackage
         * @classdesc Represents a RespChat.
         * @implements IRespChat
         * @constructor
         * @param {clientResponsePackage.IRespChat=} [properties] Properties to set
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
         * @member {Array.<clientResponsePackage.IRespChatMsg>} chatMsgs
         * @memberof clientResponsePackage.RespChat
         * @instance
         */
        RespChat.prototype.chatMsgs = $util.emptyArray;

        /**
         * RespChat chatMsg.
         * @member {clientResponsePackage.IRespChatMsg|null|undefined} chatMsg
         * @memberof clientResponsePackage.RespChat
         * @instance
         */
        RespChat.prototype.chatMsg = null;

        /**
         * Creates a new RespChat instance using the specified properties.
         * @function create
         * @memberof clientResponsePackage.RespChat
         * @static
         * @param {clientResponsePackage.IRespChat=} [properties] Properties to set
         * @returns {clientResponsePackage.RespChat} RespChat instance
         */
        RespChat.create = function create(properties) {
            return new RespChat(properties);
        };

        /**
         * Encodes the specified RespChat message. Does not implicitly {@link clientResponsePackage.RespChat.verify|verify} messages.
         * @function encode
         * @memberof clientResponsePackage.RespChat
         * @static
         * @param {clientResponsePackage.IRespChat} message RespChat message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RespChat.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.chatMsgs != null && message.chatMsgs.length)
                for (var i = 0; i < message.chatMsgs.length; ++i)
                    $root.clientResponsePackage.RespChatMsg.encode(message.chatMsgs[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.chatMsg != null && message.hasOwnProperty("chatMsg"))
                $root.clientResponsePackage.RespChatMsg.encode(message.chatMsg, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified RespChat message, length delimited. Does not implicitly {@link clientResponsePackage.RespChat.verify|verify} messages.
         * @function encodeDelimited
         * @memberof clientResponsePackage.RespChat
         * @static
         * @param {clientResponsePackage.IRespChat} message RespChat message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RespChat.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RespChat message from the specified reader or buffer.
         * @function decode
         * @memberof clientResponsePackage.RespChat
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {clientResponsePackage.RespChat} RespChat
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RespChat.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.clientResponsePackage.RespChat();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.chatMsgs && message.chatMsgs.length))
                        message.chatMsgs = [];
                    message.chatMsgs.push($root.clientResponsePackage.RespChatMsg.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.chatMsg = $root.clientResponsePackage.RespChatMsg.decode(reader, reader.uint32());
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
         * @memberof clientResponsePackage.RespChat
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {clientResponsePackage.RespChat} RespChat
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
         * @memberof clientResponsePackage.RespChat
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
                    var error = $root.clientResponsePackage.RespChatMsg.verify(message.chatMsgs[i]);
                    if (error)
                        return "chatMsgs." + error;
                }
            }
            if (message.chatMsg != null && message.hasOwnProperty("chatMsg")) {
                var error = $root.clientResponsePackage.RespChatMsg.verify(message.chatMsg);
                if (error)
                    return "chatMsg." + error;
            }
            return null;
        };

        return RespChat;
    })();

    clientResponsePackage.RespChatMsg = (function() {

        /**
         * Properties of a RespChatMsg.
         * @memberof clientResponsePackage
         * @interface IRespChatMsg
         * @property {number|null} [chatType] RespChatMsg chatType
         * @property {clientResponsePackage.IRespRoleBaseInfo|null} [baseInfo] RespChatMsg baseInfo
         * @property {string|null} [msg] RespChatMsg msg
         * @property {number|Long|null} [time] RespChatMsg time
         * @property {Array.<string>|null} [params] RespChatMsg params
         */

        /**
         * Constructs a new RespChatMsg.
         * @memberof clientResponsePackage
         * @classdesc Represents a RespChatMsg.
         * @implements IRespChatMsg
         * @constructor
         * @param {clientResponsePackage.IRespChatMsg=} [properties] Properties to set
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
         * @memberof clientResponsePackage.RespChatMsg
         * @instance
         */
        RespChatMsg.prototype.chatType = 0;

        /**
         * RespChatMsg baseInfo.
         * @member {clientResponsePackage.IRespRoleBaseInfo|null|undefined} baseInfo
         * @memberof clientResponsePackage.RespChatMsg
         * @instance
         */
        RespChatMsg.prototype.baseInfo = null;

        /**
         * RespChatMsg msg.
         * @member {string} msg
         * @memberof clientResponsePackage.RespChatMsg
         * @instance
         */
        RespChatMsg.prototype.msg = "";

        /**
         * RespChatMsg time.
         * @member {number|Long} time
         * @memberof clientResponsePackage.RespChatMsg
         * @instance
         */
        RespChatMsg.prototype.time = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * RespChatMsg params.
         * @member {Array.<string>} params
         * @memberof clientResponsePackage.RespChatMsg
         * @instance
         */
        RespChatMsg.prototype.params = $util.emptyArray;

        /**
         * Creates a new RespChatMsg instance using the specified properties.
         * @function create
         * @memberof clientResponsePackage.RespChatMsg
         * @static
         * @param {clientResponsePackage.IRespChatMsg=} [properties] Properties to set
         * @returns {clientResponsePackage.RespChatMsg} RespChatMsg instance
         */
        RespChatMsg.create = function create(properties) {
            return new RespChatMsg(properties);
        };

        /**
         * Encodes the specified RespChatMsg message. Does not implicitly {@link clientResponsePackage.RespChatMsg.verify|verify} messages.
         * @function encode
         * @memberof clientResponsePackage.RespChatMsg
         * @static
         * @param {clientResponsePackage.IRespChatMsg} message RespChatMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RespChatMsg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.chatType != null && message.hasOwnProperty("chatType"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.chatType);
            if (message.baseInfo != null && message.hasOwnProperty("baseInfo"))
                $root.clientResponsePackage.RespRoleBaseInfo.encode(message.baseInfo, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
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
         * Encodes the specified RespChatMsg message, length delimited. Does not implicitly {@link clientResponsePackage.RespChatMsg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof clientResponsePackage.RespChatMsg
         * @static
         * @param {clientResponsePackage.IRespChatMsg} message RespChatMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RespChatMsg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RespChatMsg message from the specified reader or buffer.
         * @function decode
         * @memberof clientResponsePackage.RespChatMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {clientResponsePackage.RespChatMsg} RespChatMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RespChatMsg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.clientResponsePackage.RespChatMsg();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.chatType = reader.int32();
                    break;
                case 2:
                    message.baseInfo = $root.clientResponsePackage.RespRoleBaseInfo.decode(reader, reader.uint32());
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
         * @memberof clientResponsePackage.RespChatMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {clientResponsePackage.RespChatMsg} RespChatMsg
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
         * @memberof clientResponsePackage.RespChatMsg
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
                var error = $root.clientResponsePackage.RespRoleBaseInfo.verify(message.baseInfo);
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

    clientResponsePackage.RespTeam = (function() {

        /**
         * Properties of a RespTeam.
         * @memberof clientResponsePackage
         * @interface IRespTeam
         * @property {Array.<clientResponsePackage.IRespTeamInfo>|null} [teamList] RespTeam teamList
         * @property {Array.<clientResponsePackage.IRespTeamInfo>|null} [teamOp] RespTeam teamOp
         */

        /**
         * Constructs a new RespTeam.
         * @memberof clientResponsePackage
         * @classdesc Represents a RespTeam.
         * @implements IRespTeam
         * @constructor
         * @param {clientResponsePackage.IRespTeam=} [properties] Properties to set
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
         * @member {Array.<clientResponsePackage.IRespTeamInfo>} teamList
         * @memberof clientResponsePackage.RespTeam
         * @instance
         */
        RespTeam.prototype.teamList = $util.emptyArray;

        /**
         * RespTeam teamOp.
         * @member {Array.<clientResponsePackage.IRespTeamInfo>} teamOp
         * @memberof clientResponsePackage.RespTeam
         * @instance
         */
        RespTeam.prototype.teamOp = $util.emptyArray;

        /**
         * Creates a new RespTeam instance using the specified properties.
         * @function create
         * @memberof clientResponsePackage.RespTeam
         * @static
         * @param {clientResponsePackage.IRespTeam=} [properties] Properties to set
         * @returns {clientResponsePackage.RespTeam} RespTeam instance
         */
        RespTeam.create = function create(properties) {
            return new RespTeam(properties);
        };

        /**
         * Encodes the specified RespTeam message. Does not implicitly {@link clientResponsePackage.RespTeam.verify|verify} messages.
         * @function encode
         * @memberof clientResponsePackage.RespTeam
         * @static
         * @param {clientResponsePackage.IRespTeam} message RespTeam message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RespTeam.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.teamList != null && message.teamList.length)
                for (var i = 0; i < message.teamList.length; ++i)
                    $root.clientResponsePackage.RespTeamInfo.encode(message.teamList[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.teamOp != null && message.teamOp.length)
                for (var i = 0; i < message.teamOp.length; ++i)
                    $root.clientResponsePackage.RespTeamInfo.encode(message.teamOp[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified RespTeam message, length delimited. Does not implicitly {@link clientResponsePackage.RespTeam.verify|verify} messages.
         * @function encodeDelimited
         * @memberof clientResponsePackage.RespTeam
         * @static
         * @param {clientResponsePackage.IRespTeam} message RespTeam message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RespTeam.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RespTeam message from the specified reader or buffer.
         * @function decode
         * @memberof clientResponsePackage.RespTeam
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {clientResponsePackage.RespTeam} RespTeam
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RespTeam.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.clientResponsePackage.RespTeam();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.teamList && message.teamList.length))
                        message.teamList = [];
                    message.teamList.push($root.clientResponsePackage.RespTeamInfo.decode(reader, reader.uint32()));
                    break;
                case 2:
                    if (!(message.teamOp && message.teamOp.length))
                        message.teamOp = [];
                    message.teamOp.push($root.clientResponsePackage.RespTeamInfo.decode(reader, reader.uint32()));
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
         * @memberof clientResponsePackage.RespTeam
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {clientResponsePackage.RespTeam} RespTeam
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
         * @memberof clientResponsePackage.RespTeam
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
                    var error = $root.clientResponsePackage.RespTeamInfo.verify(message.teamList[i]);
                    if (error)
                        return "teamList." + error;
                }
            }
            if (message.teamOp != null && message.hasOwnProperty("teamOp")) {
                if (!Array.isArray(message.teamOp))
                    return "teamOp: array expected";
                for (var i = 0; i < message.teamOp.length; ++i) {
                    var error = $root.clientResponsePackage.RespTeamInfo.verify(message.teamOp[i]);
                    if (error)
                        return "teamOp." + error;
                }
            }
            return null;
        };

        return RespTeam;
    })();

    clientResponsePackage.RespTeamInfo = (function() {

        /**
         * Properties of a RespTeamInfo.
         * @memberof clientResponsePackage
         * @interface IRespTeamInfo
         * @property {number|null} [id] RespTeamInfo id
         * @property {number|null} [type] RespTeamInfo type
         * @property {number|null} [ckId] RespTeamInfo ckId
         */

        /**
         * Constructs a new RespTeamInfo.
         * @memberof clientResponsePackage
         * @classdesc Represents a RespTeamInfo.
         * @implements IRespTeamInfo
         * @constructor
         * @param {clientResponsePackage.IRespTeamInfo=} [properties] Properties to set
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
         * @memberof clientResponsePackage.RespTeamInfo
         * @instance
         */
        RespTeamInfo.prototype.id = 0;

        /**
         * RespTeamInfo type.
         * @member {number} type
         * @memberof clientResponsePackage.RespTeamInfo
         * @instance
         */
        RespTeamInfo.prototype.type = 0;

        /**
         * RespTeamInfo ckId.
         * @member {number} ckId
         * @memberof clientResponsePackage.RespTeamInfo
         * @instance
         */
        RespTeamInfo.prototype.ckId = 0;

        /**
         * Creates a new RespTeamInfo instance using the specified properties.
         * @function create
         * @memberof clientResponsePackage.RespTeamInfo
         * @static
         * @param {clientResponsePackage.IRespTeamInfo=} [properties] Properties to set
         * @returns {clientResponsePackage.RespTeamInfo} RespTeamInfo instance
         */
        RespTeamInfo.create = function create(properties) {
            return new RespTeamInfo(properties);
        };

        /**
         * Encodes the specified RespTeamInfo message. Does not implicitly {@link clientResponsePackage.RespTeamInfo.verify|verify} messages.
         * @function encode
         * @memberof clientResponsePackage.RespTeamInfo
         * @static
         * @param {clientResponsePackage.IRespTeamInfo} message RespTeamInfo message or plain object to encode
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
         * Encodes the specified RespTeamInfo message, length delimited. Does not implicitly {@link clientResponsePackage.RespTeamInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof clientResponsePackage.RespTeamInfo
         * @static
         * @param {clientResponsePackage.IRespTeamInfo} message RespTeamInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RespTeamInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RespTeamInfo message from the specified reader or buffer.
         * @function decode
         * @memberof clientResponsePackage.RespTeamInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {clientResponsePackage.RespTeamInfo} RespTeamInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RespTeamInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.clientResponsePackage.RespTeamInfo();
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
         * @memberof clientResponsePackage.RespTeamInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {clientResponsePackage.RespTeamInfo} RespTeamInfo
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
         * @memberof clientResponsePackage.RespTeamInfo
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

    clientResponsePackage.RespMatch = (function() {

        /**
         * Properties of a RespMatch.
         * @memberof clientResponsePackage
         * @interface IRespMatch
         * @property {Array.<clientResponsePackage.IRespRoomRole>|null} [roomRoles] RespMatch roomRoles
         * @property {clientResponsePackage.IRespRoomRole|null} [joinRole] RespMatch joinRole
         */

        /**
         * Constructs a new RespMatch.
         * @memberof clientResponsePackage
         * @classdesc Represents a RespMatch.
         * @implements IRespMatch
         * @constructor
         * @param {clientResponsePackage.IRespMatch=} [properties] Properties to set
         */
        function RespMatch(properties) {
            this.roomRoles = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * RespMatch roomRoles.
         * @member {Array.<clientResponsePackage.IRespRoomRole>} roomRoles
         * @memberof clientResponsePackage.RespMatch
         * @instance
         */
        RespMatch.prototype.roomRoles = $util.emptyArray;

        /**
         * RespMatch joinRole.
         * @member {clientResponsePackage.IRespRoomRole|null|undefined} joinRole
         * @memberof clientResponsePackage.RespMatch
         * @instance
         */
        RespMatch.prototype.joinRole = null;

        /**
         * Creates a new RespMatch instance using the specified properties.
         * @function create
         * @memberof clientResponsePackage.RespMatch
         * @static
         * @param {clientResponsePackage.IRespMatch=} [properties] Properties to set
         * @returns {clientResponsePackage.RespMatch} RespMatch instance
         */
        RespMatch.create = function create(properties) {
            return new RespMatch(properties);
        };

        /**
         * Encodes the specified RespMatch message. Does not implicitly {@link clientResponsePackage.RespMatch.verify|verify} messages.
         * @function encode
         * @memberof clientResponsePackage.RespMatch
         * @static
         * @param {clientResponsePackage.IRespMatch} message RespMatch message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RespMatch.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.roomRoles != null && message.roomRoles.length)
                for (var i = 0; i < message.roomRoles.length; ++i)
                    $root.clientResponsePackage.RespRoomRole.encode(message.roomRoles[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.joinRole != null && message.hasOwnProperty("joinRole"))
                $root.clientResponsePackage.RespRoomRole.encode(message.joinRole, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified RespMatch message, length delimited. Does not implicitly {@link clientResponsePackage.RespMatch.verify|verify} messages.
         * @function encodeDelimited
         * @memberof clientResponsePackage.RespMatch
         * @static
         * @param {clientResponsePackage.IRespMatch} message RespMatch message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RespMatch.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RespMatch message from the specified reader or buffer.
         * @function decode
         * @memberof clientResponsePackage.RespMatch
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {clientResponsePackage.RespMatch} RespMatch
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RespMatch.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.clientResponsePackage.RespMatch();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.roomRoles && message.roomRoles.length))
                        message.roomRoles = [];
                    message.roomRoles.push($root.clientResponsePackage.RespRoomRole.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.joinRole = $root.clientResponsePackage.RespRoomRole.decode(reader, reader.uint32());
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
         * @memberof clientResponsePackage.RespMatch
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {clientResponsePackage.RespMatch} RespMatch
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
         * @memberof clientResponsePackage.RespMatch
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        RespMatch.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.roomRoles != null && message.hasOwnProperty("roomRoles")) {
                if (!Array.isArray(message.roomRoles))
                    return "roomRoles: array expected";
                for (var i = 0; i < message.roomRoles.length; ++i) {
                    var error = $root.clientResponsePackage.RespRoomRole.verify(message.roomRoles[i]);
                    if (error)
                        return "roomRoles." + error;
                }
            }
            if (message.joinRole != null && message.hasOwnProperty("joinRole")) {
                var error = $root.clientResponsePackage.RespRoomRole.verify(message.joinRole);
                if (error)
                    return "joinRole." + error;
            }
            return null;
        };

        return RespMatch;
    })();

    clientResponsePackage.RespRoomRole = (function() {

        /**
         * Properties of a RespRoomRole.
         * @memberof clientResponsePackage
         * @interface IRespRoomRole
         * @property {number|null} [index] RespRoomRole index
         * @property {clientResponsePackage.IRespRoleBaseInfo|null} [roleBaseInfo] RespRoomRole roleBaseInfo
         */

        /**
         * Constructs a new RespRoomRole.
         * @memberof clientResponsePackage
         * @classdesc Represents a RespRoomRole.
         * @implements IRespRoomRole
         * @constructor
         * @param {clientResponsePackage.IRespRoomRole=} [properties] Properties to set
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
         * @memberof clientResponsePackage.RespRoomRole
         * @instance
         */
        RespRoomRole.prototype.index = 0;

        /**
         * RespRoomRole roleBaseInfo.
         * @member {clientResponsePackage.IRespRoleBaseInfo|null|undefined} roleBaseInfo
         * @memberof clientResponsePackage.RespRoomRole
         * @instance
         */
        RespRoomRole.prototype.roleBaseInfo = null;

        /**
         * Creates a new RespRoomRole instance using the specified properties.
         * @function create
         * @memberof clientResponsePackage.RespRoomRole
         * @static
         * @param {clientResponsePackage.IRespRoomRole=} [properties] Properties to set
         * @returns {clientResponsePackage.RespRoomRole} RespRoomRole instance
         */
        RespRoomRole.create = function create(properties) {
            return new RespRoomRole(properties);
        };

        /**
         * Encodes the specified RespRoomRole message. Does not implicitly {@link clientResponsePackage.RespRoomRole.verify|verify} messages.
         * @function encode
         * @memberof clientResponsePackage.RespRoomRole
         * @static
         * @param {clientResponsePackage.IRespRoomRole} message RespRoomRole message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RespRoomRole.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.index != null && message.hasOwnProperty("index"))
                writer.uint32(/* id 1, wireType 0 =*/8).sint32(message.index);
            if (message.roleBaseInfo != null && message.hasOwnProperty("roleBaseInfo"))
                $root.clientResponsePackage.RespRoleBaseInfo.encode(message.roleBaseInfo, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified RespRoomRole message, length delimited. Does not implicitly {@link clientResponsePackage.RespRoomRole.verify|verify} messages.
         * @function encodeDelimited
         * @memberof clientResponsePackage.RespRoomRole
         * @static
         * @param {clientResponsePackage.IRespRoomRole} message RespRoomRole message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RespRoomRole.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RespRoomRole message from the specified reader or buffer.
         * @function decode
         * @memberof clientResponsePackage.RespRoomRole
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {clientResponsePackage.RespRoomRole} RespRoomRole
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RespRoomRole.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.clientResponsePackage.RespRoomRole();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.index = reader.sint32();
                    break;
                case 2:
                    message.roleBaseInfo = $root.clientResponsePackage.RespRoleBaseInfo.decode(reader, reader.uint32());
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
         * @memberof clientResponsePackage.RespRoomRole
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {clientResponsePackage.RespRoomRole} RespRoomRole
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
         * @memberof clientResponsePackage.RespRoomRole
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
                var error = $root.clientResponsePackage.RespRoleBaseInfo.verify(message.roleBaseInfo);
                if (error)
                    return "roleBaseInfo." + error;
            }
            return null;
        };

        return RespRoomRole;
    })();

    clientResponsePackage.RespMail = (function() {

        /**
         * Properties of a RespMail.
         * @memberof clientResponsePackage
         * @interface IRespMail
         * @property {Array.<clientResponsePackage.IRespMailInfo>|null} [mails] RespMail mails
         * @property {clientResponsePackage.IRespMailOp|null} [mailOp] RespMail mailOp
         */

        /**
         * Constructs a new RespMail.
         * @memberof clientResponsePackage
         * @classdesc Represents a RespMail.
         * @implements IRespMail
         * @constructor
         * @param {clientResponsePackage.IRespMail=} [properties] Properties to set
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
         * @member {Array.<clientResponsePackage.IRespMailInfo>} mails
         * @memberof clientResponsePackage.RespMail
         * @instance
         */
        RespMail.prototype.mails = $util.emptyArray;

        /**
         * RespMail mailOp.
         * @member {clientResponsePackage.IRespMailOp|null|undefined} mailOp
         * @memberof clientResponsePackage.RespMail
         * @instance
         */
        RespMail.prototype.mailOp = null;

        /**
         * Creates a new RespMail instance using the specified properties.
         * @function create
         * @memberof clientResponsePackage.RespMail
         * @static
         * @param {clientResponsePackage.IRespMail=} [properties] Properties to set
         * @returns {clientResponsePackage.RespMail} RespMail instance
         */
        RespMail.create = function create(properties) {
            return new RespMail(properties);
        };

        /**
         * Encodes the specified RespMail message. Does not implicitly {@link clientResponsePackage.RespMail.verify|verify} messages.
         * @function encode
         * @memberof clientResponsePackage.RespMail
         * @static
         * @param {clientResponsePackage.IRespMail} message RespMail message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RespMail.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.mails != null && message.mails.length)
                for (var i = 0; i < message.mails.length; ++i)
                    $root.clientResponsePackage.RespMailInfo.encode(message.mails[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.mailOp != null && message.hasOwnProperty("mailOp"))
                $root.clientResponsePackage.RespMailOp.encode(message.mailOp, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified RespMail message, length delimited. Does not implicitly {@link clientResponsePackage.RespMail.verify|verify} messages.
         * @function encodeDelimited
         * @memberof clientResponsePackage.RespMail
         * @static
         * @param {clientResponsePackage.IRespMail} message RespMail message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RespMail.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RespMail message from the specified reader or buffer.
         * @function decode
         * @memberof clientResponsePackage.RespMail
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {clientResponsePackage.RespMail} RespMail
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RespMail.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.clientResponsePackage.RespMail();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.mails && message.mails.length))
                        message.mails = [];
                    message.mails.push($root.clientResponsePackage.RespMailInfo.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.mailOp = $root.clientResponsePackage.RespMailOp.decode(reader, reader.uint32());
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
         * @memberof clientResponsePackage.RespMail
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {clientResponsePackage.RespMail} RespMail
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
         * @memberof clientResponsePackage.RespMail
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
                    var error = $root.clientResponsePackage.RespMailInfo.verify(message.mails[i]);
                    if (error)
                        return "mails." + error;
                }
            }
            if (message.mailOp != null && message.hasOwnProperty("mailOp")) {
                var error = $root.clientResponsePackage.RespMailOp.verify(message.mailOp);
                if (error)
                    return "mailOp." + error;
            }
            return null;
        };

        return RespMail;
    })();

    clientResponsePackage.RespMailOp = (function() {

        /**
         * Properties of a RespMailOp.
         * @memberof clientResponsePackage
         * @interface IRespMailOp
         * @property {number|null} [id] RespMailOp id
         * @property {boolean|null} [read] RespMailOp read
         */

        /**
         * Constructs a new RespMailOp.
         * @memberof clientResponsePackage
         * @classdesc Represents a RespMailOp.
         * @implements IRespMailOp
         * @constructor
         * @param {clientResponsePackage.IRespMailOp=} [properties] Properties to set
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
         * @memberof clientResponsePackage.RespMailOp
         * @instance
         */
        RespMailOp.prototype.id = 0;

        /**
         * RespMailOp read.
         * @member {boolean} read
         * @memberof clientResponsePackage.RespMailOp
         * @instance
         */
        RespMailOp.prototype.read = false;

        /**
         * Creates a new RespMailOp instance using the specified properties.
         * @function create
         * @memberof clientResponsePackage.RespMailOp
         * @static
         * @param {clientResponsePackage.IRespMailOp=} [properties] Properties to set
         * @returns {clientResponsePackage.RespMailOp} RespMailOp instance
         */
        RespMailOp.create = function create(properties) {
            return new RespMailOp(properties);
        };

        /**
         * Encodes the specified RespMailOp message. Does not implicitly {@link clientResponsePackage.RespMailOp.verify|verify} messages.
         * @function encode
         * @memberof clientResponsePackage.RespMailOp
         * @static
         * @param {clientResponsePackage.IRespMailOp} message RespMailOp message or plain object to encode
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
         * Encodes the specified RespMailOp message, length delimited. Does not implicitly {@link clientResponsePackage.RespMailOp.verify|verify} messages.
         * @function encodeDelimited
         * @memberof clientResponsePackage.RespMailOp
         * @static
         * @param {clientResponsePackage.IRespMailOp} message RespMailOp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RespMailOp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RespMailOp message from the specified reader or buffer.
         * @function decode
         * @memberof clientResponsePackage.RespMailOp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {clientResponsePackage.RespMailOp} RespMailOp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RespMailOp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.clientResponsePackage.RespMailOp();
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
         * @memberof clientResponsePackage.RespMailOp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {clientResponsePackage.RespMailOp} RespMailOp
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
         * @memberof clientResponsePackage.RespMailOp
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

    clientResponsePackage.RespMailInfo = (function() {

        /**
         * Properties of a RespMailInfo.
         * @memberof clientResponsePackage
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
         * @property {Array.<clientResponsePackage.IRespFunc>|null} [items] RespMailInfo items
         */

        /**
         * Constructs a new RespMailInfo.
         * @memberof clientResponsePackage
         * @classdesc Represents a RespMailInfo.
         * @implements IRespMailInfo
         * @constructor
         * @param {clientResponsePackage.IRespMailInfo=} [properties] Properties to set
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
         * @memberof clientResponsePackage.RespMailInfo
         * @instance
         */
        RespMailInfo.prototype.id = 0;

        /**
         * RespMailInfo senderName.
         * @member {string} senderName
         * @memberof clientResponsePackage.RespMailInfo
         * @instance
         */
        RespMailInfo.prototype.senderName = "";

        /**
         * RespMailInfo sendIcon.
         * @member {number} sendIcon
         * @memberof clientResponsePackage.RespMailInfo
         * @instance
         */
        RespMailInfo.prototype.sendIcon = 0;

        /**
         * RespMailInfo sendTime.
         * @member {number|Long} sendTime
         * @memberof clientResponsePackage.RespMailInfo
         * @instance
         */
        RespMailInfo.prototype.sendTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * RespMailInfo type.
         * @member {number} type
         * @memberof clientResponsePackage.RespMailInfo
         * @instance
         */
        RespMailInfo.prototype.type = 0;

        /**
         * RespMailInfo title.
         * @member {string} title
         * @memberof clientResponsePackage.RespMailInfo
         * @instance
         */
        RespMailInfo.prototype.title = "";

        /**
         * RespMailInfo context.
         * @member {string} context
         * @memberof clientResponsePackage.RespMailInfo
         * @instance
         */
        RespMailInfo.prototype.context = "";

        /**
         * RespMailInfo params.
         * @member {Array.<string>} params
         * @memberof clientResponsePackage.RespMailInfo
         * @instance
         */
        RespMailInfo.prototype.params = $util.emptyArray;

        /**
         * RespMailInfo read.
         * @member {boolean} read
         * @memberof clientResponsePackage.RespMailInfo
         * @instance
         */
        RespMailInfo.prototype.read = false;

        /**
         * RespMailInfo items.
         * @member {Array.<clientResponsePackage.IRespFunc>} items
         * @memberof clientResponsePackage.RespMailInfo
         * @instance
         */
        RespMailInfo.prototype.items = $util.emptyArray;

        /**
         * Creates a new RespMailInfo instance using the specified properties.
         * @function create
         * @memberof clientResponsePackage.RespMailInfo
         * @static
         * @param {clientResponsePackage.IRespMailInfo=} [properties] Properties to set
         * @returns {clientResponsePackage.RespMailInfo} RespMailInfo instance
         */
        RespMailInfo.create = function create(properties) {
            return new RespMailInfo(properties);
        };

        /**
         * Encodes the specified RespMailInfo message. Does not implicitly {@link clientResponsePackage.RespMailInfo.verify|verify} messages.
         * @function encode
         * @memberof clientResponsePackage.RespMailInfo
         * @static
         * @param {clientResponsePackage.IRespMailInfo} message RespMailInfo message or plain object to encode
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
                    $root.clientResponsePackage.RespFunc.encode(message.items[i], writer.uint32(/* id 10, wireType 2 =*/82).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified RespMailInfo message, length delimited. Does not implicitly {@link clientResponsePackage.RespMailInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof clientResponsePackage.RespMailInfo
         * @static
         * @param {clientResponsePackage.IRespMailInfo} message RespMailInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RespMailInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RespMailInfo message from the specified reader or buffer.
         * @function decode
         * @memberof clientResponsePackage.RespMailInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {clientResponsePackage.RespMailInfo} RespMailInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RespMailInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.clientResponsePackage.RespMailInfo();
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
                    message.items.push($root.clientResponsePackage.RespFunc.decode(reader, reader.uint32()));
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
         * @memberof clientResponsePackage.RespMailInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {clientResponsePackage.RespMailInfo} RespMailInfo
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
         * @memberof clientResponsePackage.RespMailInfo
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
                    var error = $root.clientResponsePackage.RespFunc.verify(message.items[i]);
                    if (error)
                        return "items." + error;
                }
            }
            return null;
        };

        return RespMailInfo;
    })();

    clientResponsePackage.RespFunc = (function() {

        /**
         * Properties of a RespFunc.
         * @memberof clientResponsePackage
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
         * @memberof clientResponsePackage
         * @classdesc Represents a RespFunc.
         * @implements IRespFunc
         * @constructor
         * @param {clientResponsePackage.IRespFunc=} [properties] Properties to set
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
         * @memberof clientResponsePackage.RespFunc
         * @instance
         */
        RespFunc.prototype.param = 0;

        /**
         * RespFunc type.
         * @member {number} type
         * @memberof clientResponsePackage.RespFunc
         * @instance
         */
        RespFunc.prototype.type = 0;

        /**
         * RespFunc value.
         * @member {number|Long} value
         * @memberof clientResponsePackage.RespFunc
         * @instance
         */
        RespFunc.prototype.value = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * RespFunc param1.
         * @member {number} param1
         * @memberof clientResponsePackage.RespFunc
         * @instance
         */
        RespFunc.prototype.param1 = 0;

        /**
         * RespFunc param2.
         * @member {number} param2
         * @memberof clientResponsePackage.RespFunc
         * @instance
         */
        RespFunc.prototype.param2 = 0;

        /**
         * RespFunc param3.
         * @member {number} param3
         * @memberof clientResponsePackage.RespFunc
         * @instance
         */
        RespFunc.prototype.param3 = 0;

        /**
         * Creates a new RespFunc instance using the specified properties.
         * @function create
         * @memberof clientResponsePackage.RespFunc
         * @static
         * @param {clientResponsePackage.IRespFunc=} [properties] Properties to set
         * @returns {clientResponsePackage.RespFunc} RespFunc instance
         */
        RespFunc.create = function create(properties) {
            return new RespFunc(properties);
        };

        /**
         * Encodes the specified RespFunc message. Does not implicitly {@link clientResponsePackage.RespFunc.verify|verify} messages.
         * @function encode
         * @memberof clientResponsePackage.RespFunc
         * @static
         * @param {clientResponsePackage.IRespFunc} message RespFunc message or plain object to encode
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
         * Encodes the specified RespFunc message, length delimited. Does not implicitly {@link clientResponsePackage.RespFunc.verify|verify} messages.
         * @function encodeDelimited
         * @memberof clientResponsePackage.RespFunc
         * @static
         * @param {clientResponsePackage.IRespFunc} message RespFunc message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RespFunc.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RespFunc message from the specified reader or buffer.
         * @function decode
         * @memberof clientResponsePackage.RespFunc
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {clientResponsePackage.RespFunc} RespFunc
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RespFunc.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.clientResponsePackage.RespFunc();
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
         * @memberof clientResponsePackage.RespFunc
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {clientResponsePackage.RespFunc} RespFunc
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
         * @memberof clientResponsePackage.RespFunc
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

    clientResponsePackage.RespLong = (function() {

        /**
         * Properties of a RespLong.
         * @memberof clientResponsePackage
         * @interface IRespLong
         * @property {number|Long|null} [value] RespLong value
         */

        /**
         * Constructs a new RespLong.
         * @memberof clientResponsePackage
         * @classdesc Represents a RespLong.
         * @implements IRespLong
         * @constructor
         * @param {clientResponsePackage.IRespLong=} [properties] Properties to set
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
         * @memberof clientResponsePackage.RespLong
         * @instance
         */
        RespLong.prototype.value = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new RespLong instance using the specified properties.
         * @function create
         * @memberof clientResponsePackage.RespLong
         * @static
         * @param {clientResponsePackage.IRespLong=} [properties] Properties to set
         * @returns {clientResponsePackage.RespLong} RespLong instance
         */
        RespLong.create = function create(properties) {
            return new RespLong(properties);
        };

        /**
         * Encodes the specified RespLong message. Does not implicitly {@link clientResponsePackage.RespLong.verify|verify} messages.
         * @function encode
         * @memberof clientResponsePackage.RespLong
         * @static
         * @param {clientResponsePackage.IRespLong} message RespLong message or plain object to encode
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
         * Encodes the specified RespLong message, length delimited. Does not implicitly {@link clientResponsePackage.RespLong.verify|verify} messages.
         * @function encodeDelimited
         * @memberof clientResponsePackage.RespLong
         * @static
         * @param {clientResponsePackage.IRespLong} message RespLong message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RespLong.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RespLong message from the specified reader or buffer.
         * @function decode
         * @memberof clientResponsePackage.RespLong
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {clientResponsePackage.RespLong} RespLong
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RespLong.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.clientResponsePackage.RespLong();
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
         * @memberof clientResponsePackage.RespLong
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {clientResponsePackage.RespLong} RespLong
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
         * @memberof clientResponsePackage.RespLong
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

    clientResponsePackage.RespFight = (function() {

        /**
         * Properties of a RespFight.
         * @memberof clientResponsePackage
         * @interface IRespFight
         * @property {clientResponsePackage.IRespFightResult|null} [fightResult] RespFight fightResult
         */

        /**
         * Constructs a new RespFight.
         * @memberof clientResponsePackage
         * @classdesc Represents a RespFight.
         * @implements IRespFight
         * @constructor
         * @param {clientResponsePackage.IRespFight=} [properties] Properties to set
         */
        function RespFight(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * RespFight fightResult.
         * @member {clientResponsePackage.IRespFightResult|null|undefined} fightResult
         * @memberof clientResponsePackage.RespFight
         * @instance
         */
        RespFight.prototype.fightResult = null;

        /**
         * Creates a new RespFight instance using the specified properties.
         * @function create
         * @memberof clientResponsePackage.RespFight
         * @static
         * @param {clientResponsePackage.IRespFight=} [properties] Properties to set
         * @returns {clientResponsePackage.RespFight} RespFight instance
         */
        RespFight.create = function create(properties) {
            return new RespFight(properties);
        };

        /**
         * Encodes the specified RespFight message. Does not implicitly {@link clientResponsePackage.RespFight.verify|verify} messages.
         * @function encode
         * @memberof clientResponsePackage.RespFight
         * @static
         * @param {clientResponsePackage.IRespFight} message RespFight message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RespFight.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.fightResult != null && message.hasOwnProperty("fightResult"))
                $root.clientResponsePackage.RespFightResult.encode(message.fightResult, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified RespFight message, length delimited. Does not implicitly {@link clientResponsePackage.RespFight.verify|verify} messages.
         * @function encodeDelimited
         * @memberof clientResponsePackage.RespFight
         * @static
         * @param {clientResponsePackage.IRespFight} message RespFight message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RespFight.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RespFight message from the specified reader or buffer.
         * @function decode
         * @memberof clientResponsePackage.RespFight
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {clientResponsePackage.RespFight} RespFight
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RespFight.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.clientResponsePackage.RespFight();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.fightResult = $root.clientResponsePackage.RespFightResult.decode(reader, reader.uint32());
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
         * @memberof clientResponsePackage.RespFight
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {clientResponsePackage.RespFight} RespFight
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
         * @memberof clientResponsePackage.RespFight
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        RespFight.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.fightResult != null && message.hasOwnProperty("fightResult")) {
                var error = $root.clientResponsePackage.RespFightResult.verify(message.fightResult);
                if (error)
                    return "fightResult." + error;
            }
            return null;
        };

        return RespFight;
    })();

    clientResponsePackage.RespFightResult = (function() {

        /**
         * Properties of a RespFightResult.
         * @memberof clientResponsePackage
         * @interface IRespFightResult
         * @property {Array.<clientResponsePackage.IRespBattler>|null} [battlerList] RespFightResult battlerList
         * @property {Array.<clientResponsePackage.IRespFrame>|null} [frameList] RespFightResult frameList
         */

        /**
         * Constructs a new RespFightResult.
         * @memberof clientResponsePackage
         * @classdesc Represents a RespFightResult.
         * @implements IRespFightResult
         * @constructor
         * @param {clientResponsePackage.IRespFightResult=} [properties] Properties to set
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
         * RespFightResult battlerList.
         * @member {Array.<clientResponsePackage.IRespBattler>} battlerList
         * @memberof clientResponsePackage.RespFightResult
         * @instance
         */
        RespFightResult.prototype.battlerList = $util.emptyArray;

        /**
         * RespFightResult frameList.
         * @member {Array.<clientResponsePackage.IRespFrame>} frameList
         * @memberof clientResponsePackage.RespFightResult
         * @instance
         */
        RespFightResult.prototype.frameList = $util.emptyArray;

        /**
         * Creates a new RespFightResult instance using the specified properties.
         * @function create
         * @memberof clientResponsePackage.RespFightResult
         * @static
         * @param {clientResponsePackage.IRespFightResult=} [properties] Properties to set
         * @returns {clientResponsePackage.RespFightResult} RespFightResult instance
         */
        RespFightResult.create = function create(properties) {
            return new RespFightResult(properties);
        };

        /**
         * Encodes the specified RespFightResult message. Does not implicitly {@link clientResponsePackage.RespFightResult.verify|verify} messages.
         * @function encode
         * @memberof clientResponsePackage.RespFightResult
         * @static
         * @param {clientResponsePackage.IRespFightResult} message RespFightResult message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RespFightResult.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.battlerList != null && message.battlerList.length)
                for (var i = 0; i < message.battlerList.length; ++i)
                    $root.clientResponsePackage.RespBattler.encode(message.battlerList[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.frameList != null && message.frameList.length)
                for (var i = 0; i < message.frameList.length; ++i)
                    $root.clientResponsePackage.RespFrame.encode(message.frameList[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified RespFightResult message, length delimited. Does not implicitly {@link clientResponsePackage.RespFightResult.verify|verify} messages.
         * @function encodeDelimited
         * @memberof clientResponsePackage.RespFightResult
         * @static
         * @param {clientResponsePackage.IRespFightResult} message RespFightResult message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RespFightResult.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RespFightResult message from the specified reader or buffer.
         * @function decode
         * @memberof clientResponsePackage.RespFightResult
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {clientResponsePackage.RespFightResult} RespFightResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RespFightResult.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.clientResponsePackage.RespFightResult();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.battlerList && message.battlerList.length))
                        message.battlerList = [];
                    message.battlerList.push($root.clientResponsePackage.RespBattler.decode(reader, reader.uint32()));
                    break;
                case 2:
                    if (!(message.frameList && message.frameList.length))
                        message.frameList = [];
                    message.frameList.push($root.clientResponsePackage.RespFrame.decode(reader, reader.uint32()));
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
         * @memberof clientResponsePackage.RespFightResult
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {clientResponsePackage.RespFightResult} RespFightResult
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
         * @memberof clientResponsePackage.RespFightResult
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        RespFightResult.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.battlerList != null && message.hasOwnProperty("battlerList")) {
                if (!Array.isArray(message.battlerList))
                    return "battlerList: array expected";
                for (var i = 0; i < message.battlerList.length; ++i) {
                    var error = $root.clientResponsePackage.RespBattler.verify(message.battlerList[i]);
                    if (error)
                        return "battlerList." + error;
                }
            }
            if (message.frameList != null && message.hasOwnProperty("frameList")) {
                if (!Array.isArray(message.frameList))
                    return "frameList: array expected";
                for (var i = 0; i < message.frameList.length; ++i) {
                    var error = $root.clientResponsePackage.RespFrame.verify(message.frameList[i]);
                    if (error)
                        return "frameList." + error;
                }
            }
            return null;
        };

        return RespFightResult;
    })();

    clientResponsePackage.RespBattler = (function() {

        /**
         * Properties of a RespBattler.
         * @memberof clientResponsePackage
         * @interface IRespBattler
         * @property {number|null} [camp] RespBattler camp
         * @property {clientResponsePackage.IRespRoleBaseInfo|null} [roleInfo] RespBattler roleInfo
         * @property {clientResponsePackage.IRespBattleCk|null} [battleCk] RespBattler battleCk
         */

        /**
         * Constructs a new RespBattler.
         * @memberof clientResponsePackage
         * @classdesc Represents a RespBattler.
         * @implements IRespBattler
         * @constructor
         * @param {clientResponsePackage.IRespBattler=} [properties] Properties to set
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
         * @memberof clientResponsePackage.RespBattler
         * @instance
         */
        RespBattler.prototype.camp = 0;

        /**
         * RespBattler roleInfo.
         * @member {clientResponsePackage.IRespRoleBaseInfo|null|undefined} roleInfo
         * @memberof clientResponsePackage.RespBattler
         * @instance
         */
        RespBattler.prototype.roleInfo = null;

        /**
         * RespBattler battleCk.
         * @member {clientResponsePackage.IRespBattleCk|null|undefined} battleCk
         * @memberof clientResponsePackage.RespBattler
         * @instance
         */
        RespBattler.prototype.battleCk = null;

        /**
         * Creates a new RespBattler instance using the specified properties.
         * @function create
         * @memberof clientResponsePackage.RespBattler
         * @static
         * @param {clientResponsePackage.IRespBattler=} [properties] Properties to set
         * @returns {clientResponsePackage.RespBattler} RespBattler instance
         */
        RespBattler.create = function create(properties) {
            return new RespBattler(properties);
        };

        /**
         * Encodes the specified RespBattler message. Does not implicitly {@link clientResponsePackage.RespBattler.verify|verify} messages.
         * @function encode
         * @memberof clientResponsePackage.RespBattler
         * @static
         * @param {clientResponsePackage.IRespBattler} message RespBattler message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RespBattler.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.camp != null && message.hasOwnProperty("camp"))
                writer.uint32(/* id 1, wireType 0 =*/8).sint32(message.camp);
            if (message.roleInfo != null && message.hasOwnProperty("roleInfo"))
                $root.clientResponsePackage.RespRoleBaseInfo.encode(message.roleInfo, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.battleCk != null && message.hasOwnProperty("battleCk"))
                $root.clientResponsePackage.RespBattleCk.encode(message.battleCk, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified RespBattler message, length delimited. Does not implicitly {@link clientResponsePackage.RespBattler.verify|verify} messages.
         * @function encodeDelimited
         * @memberof clientResponsePackage.RespBattler
         * @static
         * @param {clientResponsePackage.IRespBattler} message RespBattler message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RespBattler.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RespBattler message from the specified reader or buffer.
         * @function decode
         * @memberof clientResponsePackage.RespBattler
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {clientResponsePackage.RespBattler} RespBattler
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RespBattler.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.clientResponsePackage.RespBattler();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.camp = reader.sint32();
                    break;
                case 2:
                    message.roleInfo = $root.clientResponsePackage.RespRoleBaseInfo.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.battleCk = $root.clientResponsePackage.RespBattleCk.decode(reader, reader.uint32());
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
         * @memberof clientResponsePackage.RespBattler
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {clientResponsePackage.RespBattler} RespBattler
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
         * @memberof clientResponsePackage.RespBattler
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
            if (message.roleInfo != null && message.hasOwnProperty("roleInfo")) {
                var error = $root.clientResponsePackage.RespRoleBaseInfo.verify(message.roleInfo);
                if (error)
                    return "roleInfo." + error;
            }
            if (message.battleCk != null && message.hasOwnProperty("battleCk")) {
                var error = $root.clientResponsePackage.RespBattleCk.verify(message.battleCk);
                if (error)
                    return "battleCk." + error;
            }
            return null;
        };

        return RespBattler;
    })();

    clientResponsePackage.RespBattleCk = (function() {

        /**
         * Properties of a RespBattleCk.
         * @memberof clientResponsePackage
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
         * @property {number|null} [maxHp] RespBattleCk maxHp
         * @property {number|null} [camp] RespBattleCk camp
         * @property {number|null} [posX] RespBattleCk posX
         * @property {number|null} [posY] RespBattleCk posY
         */

        /**
         * Constructs a new RespBattleCk.
         * @memberof clientResponsePackage
         * @classdesc Represents a RespBattleCk.
         * @implements IRespBattleCk
         * @constructor
         * @param {clientResponsePackage.IRespBattleCk=} [properties] Properties to set
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
         * @memberof clientResponsePackage.RespBattleCk
         * @instance
         */
        RespBattleCk.prototype.id = 0;

        /**
         * RespBattleCk level.
         * @member {number} level
         * @memberof clientResponsePackage.RespBattleCk
         * @instance
         */
        RespBattleCk.prototype.level = 0;

        /**
         * RespBattleCk quality.
         * @member {number} quality
         * @memberof clientResponsePackage.RespBattleCk
         * @instance
         */
        RespBattleCk.prototype.quality = 0;

        /**
         * RespBattleCk lineage.
         * @member {number} lineage
         * @memberof clientResponsePackage.RespBattleCk
         * @instance
         */
        RespBattleCk.prototype.lineage = 0;

        /**
         * RespBattleCk strength.
         * @member {number} strength
         * @memberof clientResponsePackage.RespBattleCk
         * @instance
         */
        RespBattleCk.prototype.strength = 0;

        /**
         * RespBattleCk wisdom.
         * @member {number} wisdom
         * @memberof clientResponsePackage.RespBattleCk
         * @instance
         */
        RespBattleCk.prototype.wisdom = 0;

        /**
         * RespBattleCk agile.
         * @member {number} agile
         * @memberof clientResponsePackage.RespBattleCk
         * @instance
         */
        RespBattleCk.prototype.agile = 0;

        /**
         * RespBattleCk health.
         * @member {number} health
         * @memberof clientResponsePackage.RespBattleCk
         * @instance
         */
        RespBattleCk.prototype.health = 0;

        /**
         * RespBattleCk spirit.
         * @member {number} spirit
         * @memberof clientResponsePackage.RespBattleCk
         * @instance
         */
        RespBattleCk.prototype.spirit = 0;

        /**
         * RespBattleCk luck.
         * @member {number} luck
         * @memberof clientResponsePackage.RespBattleCk
         * @instance
         */
        RespBattleCk.prototype.luck = 0;

        /**
         * RespBattleCk professionList.
         * @member {Array.<number>} professionList
         * @memberof clientResponsePackage.RespBattleCk
         * @instance
         */
        RespBattleCk.prototype.professionList = $util.emptyArray;

        /**
         * RespBattleCk specialtyList.
         * @member {Array.<number>} specialtyList
         * @memberof clientResponsePackage.RespBattleCk
         * @instance
         */
        RespBattleCk.prototype.specialtyList = $util.emptyArray;

        /**
         * RespBattleCk maxHp.
         * @member {number} maxHp
         * @memberof clientResponsePackage.RespBattleCk
         * @instance
         */
        RespBattleCk.prototype.maxHp = 0;

        /**
         * RespBattleCk camp.
         * @member {number} camp
         * @memberof clientResponsePackage.RespBattleCk
         * @instance
         */
        RespBattleCk.prototype.camp = 0;

        /**
         * RespBattleCk posX.
         * @member {number} posX
         * @memberof clientResponsePackage.RespBattleCk
         * @instance
         */
        RespBattleCk.prototype.posX = 0;

        /**
         * RespBattleCk posY.
         * @member {number} posY
         * @memberof clientResponsePackage.RespBattleCk
         * @instance
         */
        RespBattleCk.prototype.posY = 0;

        /**
         * Creates a new RespBattleCk instance using the specified properties.
         * @function create
         * @memberof clientResponsePackage.RespBattleCk
         * @static
         * @param {clientResponsePackage.IRespBattleCk=} [properties] Properties to set
         * @returns {clientResponsePackage.RespBattleCk} RespBattleCk instance
         */
        RespBattleCk.create = function create(properties) {
            return new RespBattleCk(properties);
        };

        /**
         * Encodes the specified RespBattleCk message. Does not implicitly {@link clientResponsePackage.RespBattleCk.verify|verify} messages.
         * @function encode
         * @memberof clientResponsePackage.RespBattleCk
         * @static
         * @param {clientResponsePackage.IRespBattleCk} message RespBattleCk message or plain object to encode
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
            if (message.maxHp != null && message.hasOwnProperty("maxHp"))
                writer.uint32(/* id 13, wireType 0 =*/104).sint32(message.maxHp);
            if (message.camp != null && message.hasOwnProperty("camp"))
                writer.uint32(/* id 14, wireType 0 =*/112).sint32(message.camp);
            if (message.posX != null && message.hasOwnProperty("posX"))
                writer.uint32(/* id 15, wireType 1 =*/121).double(message.posX);
            if (message.posY != null && message.hasOwnProperty("posY"))
                writer.uint32(/* id 16, wireType 1 =*/129).double(message.posY);
            return writer;
        };

        /**
         * Encodes the specified RespBattleCk message, length delimited. Does not implicitly {@link clientResponsePackage.RespBattleCk.verify|verify} messages.
         * @function encodeDelimited
         * @memberof clientResponsePackage.RespBattleCk
         * @static
         * @param {clientResponsePackage.IRespBattleCk} message RespBattleCk message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RespBattleCk.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RespBattleCk message from the specified reader or buffer.
         * @function decode
         * @memberof clientResponsePackage.RespBattleCk
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {clientResponsePackage.RespBattleCk} RespBattleCk
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RespBattleCk.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.clientResponsePackage.RespBattleCk();
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
                    message.maxHp = reader.sint32();
                    break;
                case 14:
                    message.camp = reader.sint32();
                    break;
                case 15:
                    message.posX = reader.double();
                    break;
                case 16:
                    message.posY = reader.double();
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
         * @memberof clientResponsePackage.RespBattleCk
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {clientResponsePackage.RespBattleCk} RespBattleCk
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
         * @memberof clientResponsePackage.RespBattleCk
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
            if (message.maxHp != null && message.hasOwnProperty("maxHp"))
                if (!$util.isInteger(message.maxHp))
                    return "maxHp: integer expected";
            if (message.camp != null && message.hasOwnProperty("camp"))
                if (!$util.isInteger(message.camp))
                    return "camp: integer expected";
            if (message.posX != null && message.hasOwnProperty("posX"))
                if (typeof message.posX !== "number")
                    return "posX: number expected";
            if (message.posY != null && message.hasOwnProperty("posY"))
                if (typeof message.posY !== "number")
                    return "posY: number expected";
            return null;
        };

        return RespBattleCk;
    })();

    clientResponsePackage.RespFrame = (function() {

        /**
         * Properties of a RespFrame.
         * @memberof clientResponsePackage
         * @interface IRespFrame
         * @property {number|null} [currFrame] RespFrame currFrame
         * @property {Array.<clientResponsePackage.IRespCkFrameInfo>|null} [ckFrameInfoList] RespFrame ckFrameInfoList
         */

        /**
         * Constructs a new RespFrame.
         * @memberof clientResponsePackage
         * @classdesc Represents a RespFrame.
         * @implements IRespFrame
         * @constructor
         * @param {clientResponsePackage.IRespFrame=} [properties] Properties to set
         */
        function RespFrame(properties) {
            this.ckFrameInfoList = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * RespFrame currFrame.
         * @member {number} currFrame
         * @memberof clientResponsePackage.RespFrame
         * @instance
         */
        RespFrame.prototype.currFrame = 0;

        /**
         * RespFrame ckFrameInfoList.
         * @member {Array.<clientResponsePackage.IRespCkFrameInfo>} ckFrameInfoList
         * @memberof clientResponsePackage.RespFrame
         * @instance
         */
        RespFrame.prototype.ckFrameInfoList = $util.emptyArray;

        /**
         * Creates a new RespFrame instance using the specified properties.
         * @function create
         * @memberof clientResponsePackage.RespFrame
         * @static
         * @param {clientResponsePackage.IRespFrame=} [properties] Properties to set
         * @returns {clientResponsePackage.RespFrame} RespFrame instance
         */
        RespFrame.create = function create(properties) {
            return new RespFrame(properties);
        };

        /**
         * Encodes the specified RespFrame message. Does not implicitly {@link clientResponsePackage.RespFrame.verify|verify} messages.
         * @function encode
         * @memberof clientResponsePackage.RespFrame
         * @static
         * @param {clientResponsePackage.IRespFrame} message RespFrame message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RespFrame.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.currFrame != null && message.hasOwnProperty("currFrame"))
                writer.uint32(/* id 1, wireType 0 =*/8).sint32(message.currFrame);
            if (message.ckFrameInfoList != null && message.ckFrameInfoList.length)
                for (var i = 0; i < message.ckFrameInfoList.length; ++i)
                    $root.clientResponsePackage.RespCkFrameInfo.encode(message.ckFrameInfoList[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified RespFrame message, length delimited. Does not implicitly {@link clientResponsePackage.RespFrame.verify|verify} messages.
         * @function encodeDelimited
         * @memberof clientResponsePackage.RespFrame
         * @static
         * @param {clientResponsePackage.IRespFrame} message RespFrame message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RespFrame.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RespFrame message from the specified reader or buffer.
         * @function decode
         * @memberof clientResponsePackage.RespFrame
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {clientResponsePackage.RespFrame} RespFrame
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RespFrame.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.clientResponsePackage.RespFrame();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.currFrame = reader.sint32();
                    break;
                case 2:
                    if (!(message.ckFrameInfoList && message.ckFrameInfoList.length))
                        message.ckFrameInfoList = [];
                    message.ckFrameInfoList.push($root.clientResponsePackage.RespCkFrameInfo.decode(reader, reader.uint32()));
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
         * @memberof clientResponsePackage.RespFrame
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {clientResponsePackage.RespFrame} RespFrame
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
         * @memberof clientResponsePackage.RespFrame
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
            if (message.ckFrameInfoList != null && message.hasOwnProperty("ckFrameInfoList")) {
                if (!Array.isArray(message.ckFrameInfoList))
                    return "ckFrameInfoList: array expected";
                for (var i = 0; i < message.ckFrameInfoList.length; ++i) {
                    var error = $root.clientResponsePackage.RespCkFrameInfo.verify(message.ckFrameInfoList[i]);
                    if (error)
                        return "ckFrameInfoList." + error;
                }
            }
            return null;
        };

        return RespFrame;
    })();

    clientResponsePackage.RespCkFrameInfo = (function() {

        /**
         * Properties of a RespCkFrameInfo.
         * @memberof clientResponsePackage
         * @interface IRespCkFrameInfo
         * @property {number|null} [id] RespCkFrameInfo id
         * @property {number|null} [hp] RespCkFrameInfo hp
         * @property {clientResponsePackage.IRespXY|null} [posXY] RespCkFrameInfo posXY
         * @property {clientResponsePackage.IRespXY|null} [faceXY] RespCkFrameInfo faceXY
         */

        /**
         * Constructs a new RespCkFrameInfo.
         * @memberof clientResponsePackage
         * @classdesc Represents a RespCkFrameInfo.
         * @implements IRespCkFrameInfo
         * @constructor
         * @param {clientResponsePackage.IRespCkFrameInfo=} [properties] Properties to set
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
         * @memberof clientResponsePackage.RespCkFrameInfo
         * @instance
         */
        RespCkFrameInfo.prototype.id = 0;

        /**
         * RespCkFrameInfo hp.
         * @member {number} hp
         * @memberof clientResponsePackage.RespCkFrameInfo
         * @instance
         */
        RespCkFrameInfo.prototype.hp = 0;

        /**
         * RespCkFrameInfo posXY.
         * @member {clientResponsePackage.IRespXY|null|undefined} posXY
         * @memberof clientResponsePackage.RespCkFrameInfo
         * @instance
         */
        RespCkFrameInfo.prototype.posXY = null;

        /**
         * RespCkFrameInfo faceXY.
         * @member {clientResponsePackage.IRespXY|null|undefined} faceXY
         * @memberof clientResponsePackage.RespCkFrameInfo
         * @instance
         */
        RespCkFrameInfo.prototype.faceXY = null;

        /**
         * Creates a new RespCkFrameInfo instance using the specified properties.
         * @function create
         * @memberof clientResponsePackage.RespCkFrameInfo
         * @static
         * @param {clientResponsePackage.IRespCkFrameInfo=} [properties] Properties to set
         * @returns {clientResponsePackage.RespCkFrameInfo} RespCkFrameInfo instance
         */
        RespCkFrameInfo.create = function create(properties) {
            return new RespCkFrameInfo(properties);
        };

        /**
         * Encodes the specified RespCkFrameInfo message. Does not implicitly {@link clientResponsePackage.RespCkFrameInfo.verify|verify} messages.
         * @function encode
         * @memberof clientResponsePackage.RespCkFrameInfo
         * @static
         * @param {clientResponsePackage.IRespCkFrameInfo} message RespCkFrameInfo message or plain object to encode
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
                $root.clientResponsePackage.RespXY.encode(message.posXY, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.faceXY != null && message.hasOwnProperty("faceXY"))
                $root.clientResponsePackage.RespXY.encode(message.faceXY, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified RespCkFrameInfo message, length delimited. Does not implicitly {@link clientResponsePackage.RespCkFrameInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof clientResponsePackage.RespCkFrameInfo
         * @static
         * @param {clientResponsePackage.IRespCkFrameInfo} message RespCkFrameInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RespCkFrameInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RespCkFrameInfo message from the specified reader or buffer.
         * @function decode
         * @memberof clientResponsePackage.RespCkFrameInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {clientResponsePackage.RespCkFrameInfo} RespCkFrameInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RespCkFrameInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.clientResponsePackage.RespCkFrameInfo();
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
                    message.posXY = $root.clientResponsePackage.RespXY.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.faceXY = $root.clientResponsePackage.RespXY.decode(reader, reader.uint32());
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
         * @memberof clientResponsePackage.RespCkFrameInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {clientResponsePackage.RespCkFrameInfo} RespCkFrameInfo
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
         * @memberof clientResponsePackage.RespCkFrameInfo
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
                var error = $root.clientResponsePackage.RespXY.verify(message.posXY);
                if (error)
                    return "posXY." + error;
            }
            if (message.faceXY != null && message.hasOwnProperty("faceXY")) {
                var error = $root.clientResponsePackage.RespXY.verify(message.faceXY);
                if (error)
                    return "faceXY." + error;
            }
            return null;
        };

        return RespCkFrameInfo;
    })();

    clientResponsePackage.RespXY = (function() {

        /**
         * Properties of a RespXY.
         * @memberof clientResponsePackage
         * @interface IRespXY
         * @property {number|null} [x] RespXY x
         * @property {number|null} [y] RespXY y
         */

        /**
         * Constructs a new RespXY.
         * @memberof clientResponsePackage
         * @classdesc Represents a RespXY.
         * @implements IRespXY
         * @constructor
         * @param {clientResponsePackage.IRespXY=} [properties] Properties to set
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
         * @memberof clientResponsePackage.RespXY
         * @instance
         */
        RespXY.prototype.x = 0;

        /**
         * RespXY y.
         * @member {number} y
         * @memberof clientResponsePackage.RespXY
         * @instance
         */
        RespXY.prototype.y = 0;

        /**
         * Creates a new RespXY instance using the specified properties.
         * @function create
         * @memberof clientResponsePackage.RespXY
         * @static
         * @param {clientResponsePackage.IRespXY=} [properties] Properties to set
         * @returns {clientResponsePackage.RespXY} RespXY instance
         */
        RespXY.create = function create(properties) {
            return new RespXY(properties);
        };

        /**
         * Encodes the specified RespXY message. Does not implicitly {@link clientResponsePackage.RespXY.verify|verify} messages.
         * @function encode
         * @memberof clientResponsePackage.RespXY
         * @static
         * @param {clientResponsePackage.IRespXY} message RespXY message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RespXY.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.x != null && message.hasOwnProperty("x"))
                writer.uint32(/* id 1, wireType 1 =*/9).double(message.x);
            if (message.y != null && message.hasOwnProperty("y"))
                writer.uint32(/* id 2, wireType 1 =*/17).double(message.y);
            return writer;
        };

        /**
         * Encodes the specified RespXY message, length delimited. Does not implicitly {@link clientResponsePackage.RespXY.verify|verify} messages.
         * @function encodeDelimited
         * @memberof clientResponsePackage.RespXY
         * @static
         * @param {clientResponsePackage.IRespXY} message RespXY message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RespXY.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RespXY message from the specified reader or buffer.
         * @function decode
         * @memberof clientResponsePackage.RespXY
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {clientResponsePackage.RespXY} RespXY
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RespXY.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.clientResponsePackage.RespXY();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.x = reader.double();
                    break;
                case 2:
                    message.y = reader.double();
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
         * @memberof clientResponsePackage.RespXY
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {clientResponsePackage.RespXY} RespXY
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
         * @memberof clientResponsePackage.RespXY
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        RespXY.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.x != null && message.hasOwnProperty("x"))
                if (typeof message.x !== "number")
                    return "x: number expected";
            if (message.y != null && message.hasOwnProperty("y"))
                if (typeof message.y !== "number")
                    return "y: number expected";
            return null;
        };

        return RespXY;
    })();

    clientResponsePackage.RespCk = (function() {

        /**
         * Properties of a RespCk.
         * @memberof clientResponsePackage
         * @interface IRespCk
         * @property {Array.<clientResponsePackage.IRespCkInfo>|null} [roleCks] RespCk roleCks
         */

        /**
         * Constructs a new RespCk.
         * @memberof clientResponsePackage
         * @classdesc Represents a RespCk.
         * @implements IRespCk
         * @constructor
         * @param {clientResponsePackage.IRespCk=} [properties] Properties to set
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
         * @member {Array.<clientResponsePackage.IRespCkInfo>} roleCks
         * @memberof clientResponsePackage.RespCk
         * @instance
         */
        RespCk.prototype.roleCks = $util.emptyArray;

        /**
         * Creates a new RespCk instance using the specified properties.
         * @function create
         * @memberof clientResponsePackage.RespCk
         * @static
         * @param {clientResponsePackage.IRespCk=} [properties] Properties to set
         * @returns {clientResponsePackage.RespCk} RespCk instance
         */
        RespCk.create = function create(properties) {
            return new RespCk(properties);
        };

        /**
         * Encodes the specified RespCk message. Does not implicitly {@link clientResponsePackage.RespCk.verify|verify} messages.
         * @function encode
         * @memberof clientResponsePackage.RespCk
         * @static
         * @param {clientResponsePackage.IRespCk} message RespCk message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RespCk.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.roleCks != null && message.roleCks.length)
                for (var i = 0; i < message.roleCks.length; ++i)
                    $root.clientResponsePackage.RespCkInfo.encode(message.roleCks[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified RespCk message, length delimited. Does not implicitly {@link clientResponsePackage.RespCk.verify|verify} messages.
         * @function encodeDelimited
         * @memberof clientResponsePackage.RespCk
         * @static
         * @param {clientResponsePackage.IRespCk} message RespCk message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RespCk.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RespCk message from the specified reader or buffer.
         * @function decode
         * @memberof clientResponsePackage.RespCk
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {clientResponsePackage.RespCk} RespCk
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RespCk.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.clientResponsePackage.RespCk();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.roleCks && message.roleCks.length))
                        message.roleCks = [];
                    message.roleCks.push($root.clientResponsePackage.RespCkInfo.decode(reader, reader.uint32()));
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
         * @memberof clientResponsePackage.RespCk
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {clientResponsePackage.RespCk} RespCk
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
         * @memberof clientResponsePackage.RespCk
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
                    var error = $root.clientResponsePackage.RespCkInfo.verify(message.roleCks[i]);
                    if (error)
                        return "roleCks." + error;
                }
            }
            return null;
        };

        return RespCk;
    })();

    clientResponsePackage.RespCkInfo = (function() {

        /**
         * Properties of a RespCkInfo.
         * @memberof clientResponsePackage
         * @interface IRespCkInfo
         * @property {number|null} [id] RespCkInfo id
         * @property {number|null} [seq] RespCkInfo seq
         * @property {string|null} [name] RespCkInfo name
         * @property {boolean|null} [lock] RespCkInfo lock
         * @property {number|Long|null} [birthTime] RespCkInfo birthTime
         * @property {string|null} [launch] RespCkInfo launch
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
         * @memberof clientResponsePackage
         * @classdesc Represents a RespCkInfo.
         * @implements IRespCkInfo
         * @constructor
         * @param {clientResponsePackage.IRespCkInfo=} [properties] Properties to set
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
         * @memberof clientResponsePackage.RespCkInfo
         * @instance
         */
        RespCkInfo.prototype.id = 0;

        /**
         * RespCkInfo seq.
         * @member {number} seq
         * @memberof clientResponsePackage.RespCkInfo
         * @instance
         */
        RespCkInfo.prototype.seq = 0;

        /**
         * RespCkInfo name.
         * @member {string} name
         * @memberof clientResponsePackage.RespCkInfo
         * @instance
         */
        RespCkInfo.prototype.name = "";

        /**
         * RespCkInfo lock.
         * @member {boolean} lock
         * @memberof clientResponsePackage.RespCkInfo
         * @instance
         */
        RespCkInfo.prototype.lock = false;

        /**
         * RespCkInfo birthTime.
         * @member {number|Long} birthTime
         * @memberof clientResponsePackage.RespCkInfo
         * @instance
         */
        RespCkInfo.prototype.birthTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * RespCkInfo launch.
         * @member {string} launch
         * @memberof clientResponsePackage.RespCkInfo
         * @instance
         */
        RespCkInfo.prototype.launch = "";

        /**
         * RespCkInfo quality.
         * @member {number} quality
         * @memberof clientResponsePackage.RespCkInfo
         * @instance
         */
        RespCkInfo.prototype.quality = 0;

        /**
         * RespCkInfo lineage.
         * @member {number} lineage
         * @memberof clientResponsePackage.RespCkInfo
         * @instance
         */
        RespCkInfo.prototype.lineage = 0;

        /**
         * RespCkInfo strength.
         * @member {number} strength
         * @memberof clientResponsePackage.RespCkInfo
         * @instance
         */
        RespCkInfo.prototype.strength = 0;

        /**
         * RespCkInfo wisdom.
         * @member {number} wisdom
         * @memberof clientResponsePackage.RespCkInfo
         * @instance
         */
        RespCkInfo.prototype.wisdom = 0;

        /**
         * RespCkInfo agile.
         * @member {number} agile
         * @memberof clientResponsePackage.RespCkInfo
         * @instance
         */
        RespCkInfo.prototype.agile = 0;

        /**
         * RespCkInfo health.
         * @member {number} health
         * @memberof clientResponsePackage.RespCkInfo
         * @instance
         */
        RespCkInfo.prototype.health = 0;

        /**
         * RespCkInfo spirit.
         * @member {number} spirit
         * @memberof clientResponsePackage.RespCkInfo
         * @instance
         */
        RespCkInfo.prototype.spirit = 0;

        /**
         * RespCkInfo luck.
         * @member {number} luck
         * @memberof clientResponsePackage.RespCkInfo
         * @instance
         */
        RespCkInfo.prototype.luck = 0;

        /**
         * RespCkInfo professionList.
         * @member {Array.<number>} professionList
         * @memberof clientResponsePackage.RespCkInfo
         * @instance
         */
        RespCkInfo.prototype.professionList = $util.emptyArray;

        /**
         * RespCkInfo specialtyList.
         * @member {Array.<number>} specialtyList
         * @memberof clientResponsePackage.RespCkInfo
         * @instance
         */
        RespCkInfo.prototype.specialtyList = $util.emptyArray;

        /**
         * Creates a new RespCkInfo instance using the specified properties.
         * @function create
         * @memberof clientResponsePackage.RespCkInfo
         * @static
         * @param {clientResponsePackage.IRespCkInfo=} [properties] Properties to set
         * @returns {clientResponsePackage.RespCkInfo} RespCkInfo instance
         */
        RespCkInfo.create = function create(properties) {
            return new RespCkInfo(properties);
        };

        /**
         * Encodes the specified RespCkInfo message. Does not implicitly {@link clientResponsePackage.RespCkInfo.verify|verify} messages.
         * @function encode
         * @memberof clientResponsePackage.RespCkInfo
         * @static
         * @param {clientResponsePackage.IRespCkInfo} message RespCkInfo message or plain object to encode
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
            if (message.quality != null && message.hasOwnProperty("quality"))
                writer.uint32(/* id 7, wireType 0 =*/56).sint32(message.quality);
            if (message.lineage != null && message.hasOwnProperty("lineage"))
                writer.uint32(/* id 8, wireType 0 =*/64).sint32(message.lineage);
            if (message.strength != null && message.hasOwnProperty("strength"))
                writer.uint32(/* id 9, wireType 0 =*/72).sint32(message.strength);
            if (message.wisdom != null && message.hasOwnProperty("wisdom"))
                writer.uint32(/* id 10, wireType 0 =*/80).sint32(message.wisdom);
            if (message.agile != null && message.hasOwnProperty("agile"))
                writer.uint32(/* id 11, wireType 0 =*/88).sint32(message.agile);
            if (message.health != null && message.hasOwnProperty("health"))
                writer.uint32(/* id 12, wireType 0 =*/96).sint32(message.health);
            if (message.spirit != null && message.hasOwnProperty("spirit"))
                writer.uint32(/* id 13, wireType 0 =*/104).sint32(message.spirit);
            if (message.luck != null && message.hasOwnProperty("luck"))
                writer.uint32(/* id 14, wireType 0 =*/112).sint32(message.luck);
            if (message.professionList != null && message.professionList.length) {
                writer.uint32(/* id 15, wireType 2 =*/122).fork();
                for (var i = 0; i < message.professionList.length; ++i)
                    writer.sint32(message.professionList[i]);
                writer.ldelim();
            }
            if (message.specialtyList != null && message.specialtyList.length) {
                writer.uint32(/* id 16, wireType 2 =*/130).fork();
                for (var i = 0; i < message.specialtyList.length; ++i)
                    writer.sint32(message.specialtyList[i]);
                writer.ldelim();
            }
            return writer;
        };

        /**
         * Encodes the specified RespCkInfo message, length delimited. Does not implicitly {@link clientResponsePackage.RespCkInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof clientResponsePackage.RespCkInfo
         * @static
         * @param {clientResponsePackage.IRespCkInfo} message RespCkInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RespCkInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RespCkInfo message from the specified reader or buffer.
         * @function decode
         * @memberof clientResponsePackage.RespCkInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {clientResponsePackage.RespCkInfo} RespCkInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RespCkInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.clientResponsePackage.RespCkInfo();
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
                    message.quality = reader.sint32();
                    break;
                case 8:
                    message.lineage = reader.sint32();
                    break;
                case 9:
                    message.strength = reader.sint32();
                    break;
                case 10:
                    message.wisdom = reader.sint32();
                    break;
                case 11:
                    message.agile = reader.sint32();
                    break;
                case 12:
                    message.health = reader.sint32();
                    break;
                case 13:
                    message.spirit = reader.sint32();
                    break;
                case 14:
                    message.luck = reader.sint32();
                    break;
                case 15:
                    if (!(message.professionList && message.professionList.length))
                        message.professionList = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.professionList.push(reader.sint32());
                    } else
                        message.professionList.push(reader.sint32());
                    break;
                case 16:
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
         * @memberof clientResponsePackage.RespCkInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {clientResponsePackage.RespCkInfo} RespCkInfo
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
         * @memberof clientResponsePackage.RespCkInfo
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

    return clientResponsePackage;
})();

$root.clientRequestPackage = (function() {

    /**
     * Namespace clientRequestPackage.
     * @exports clientRequestPackage
     * @namespace
     */
    var clientRequestPackage = {};

    clientRequestPackage.RqstCreRole = (function() {

        /**
         * Properties of a RqstCreRole.
         * @memberof clientRequestPackage
         * @interface IRqstCreRole
         * @property {string|null} [sid] RqstCreRole sid
         * @property {string|null} [name] RqstCreRole name
         * @property {number|null} [country] RqstCreRole country
         * @property {number|null} [camp] RqstCreRole camp
         */

        /**
         * Constructs a new RqstCreRole.
         * @memberof clientRequestPackage
         * @classdesc Represents a RqstCreRole.
         * @implements IRqstCreRole
         * @constructor
         * @param {clientRequestPackage.IRqstCreRole=} [properties] Properties to set
         */
        function RqstCreRole(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * RqstCreRole sid.
         * @member {string} sid
         * @memberof clientRequestPackage.RqstCreRole
         * @instance
         */
        RqstCreRole.prototype.sid = "";

        /**
         * RqstCreRole name.
         * @member {string} name
         * @memberof clientRequestPackage.RqstCreRole
         * @instance
         */
        RqstCreRole.prototype.name = "";

        /**
         * RqstCreRole country.
         * @member {number} country
         * @memberof clientRequestPackage.RqstCreRole
         * @instance
         */
        RqstCreRole.prototype.country = 0;

        /**
         * RqstCreRole camp.
         * @member {number} camp
         * @memberof clientRequestPackage.RqstCreRole
         * @instance
         */
        RqstCreRole.prototype.camp = 0;

        /**
         * Creates a new RqstCreRole instance using the specified properties.
         * @function create
         * @memberof clientRequestPackage.RqstCreRole
         * @static
         * @param {clientRequestPackage.IRqstCreRole=} [properties] Properties to set
         * @returns {clientRequestPackage.RqstCreRole} RqstCreRole instance
         */
        RqstCreRole.create = function create(properties) {
            return new RqstCreRole(properties);
        };

        /**
         * Encodes the specified RqstCreRole message. Does not implicitly {@link clientRequestPackage.RqstCreRole.verify|verify} messages.
         * @function encode
         * @memberof clientRequestPackage.RqstCreRole
         * @static
         * @param {clientRequestPackage.IRqstCreRole} message RqstCreRole message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RqstCreRole.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.sid != null && message.hasOwnProperty("sid"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.sid);
            if (message.name != null && message.hasOwnProperty("name"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
            if (message.country != null && message.hasOwnProperty("country"))
                writer.uint32(/* id 3, wireType 0 =*/24).sint32(message.country);
            if (message.camp != null && message.hasOwnProperty("camp"))
                writer.uint32(/* id 4, wireType 0 =*/32).sint32(message.camp);
            return writer;
        };

        /**
         * Encodes the specified RqstCreRole message, length delimited. Does not implicitly {@link clientRequestPackage.RqstCreRole.verify|verify} messages.
         * @function encodeDelimited
         * @memberof clientRequestPackage.RqstCreRole
         * @static
         * @param {clientRequestPackage.IRqstCreRole} message RqstCreRole message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RqstCreRole.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RqstCreRole message from the specified reader or buffer.
         * @function decode
         * @memberof clientRequestPackage.RqstCreRole
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {clientRequestPackage.RqstCreRole} RqstCreRole
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RqstCreRole.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.clientRequestPackage.RqstCreRole();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.sid = reader.string();
                    break;
                case 2:
                    message.name = reader.string();
                    break;
                case 3:
                    message.country = reader.sint32();
                    break;
                case 4:
                    message.camp = reader.sint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a RqstCreRole message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof clientRequestPackage.RqstCreRole
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {clientRequestPackage.RqstCreRole} RqstCreRole
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RqstCreRole.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a RqstCreRole message.
         * @function verify
         * @memberof clientRequestPackage.RqstCreRole
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        RqstCreRole.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.sid != null && message.hasOwnProperty("sid"))
                if (!$util.isString(message.sid))
                    return "sid: string expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            if (message.country != null && message.hasOwnProperty("country"))
                if (!$util.isInteger(message.country))
                    return "country: integer expected";
            if (message.camp != null && message.hasOwnProperty("camp"))
                if (!$util.isInteger(message.camp))
                    return "camp: integer expected";
            return null;
        };

        return RqstCreRole;
    })();

    clientRequestPackage.RqstInt = (function() {

        /**
         * Properties of a RqstInt.
         * @memberof clientRequestPackage
         * @interface IRqstInt
         * @property {number|null} [value] RqstInt value
         */

        /**
         * Constructs a new RqstInt.
         * @memberof clientRequestPackage
         * @classdesc Represents a RqstInt.
         * @implements IRqstInt
         * @constructor
         * @param {clientRequestPackage.IRqstInt=} [properties] Properties to set
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
         * @memberof clientRequestPackage.RqstInt
         * @instance
         */
        RqstInt.prototype.value = 0;

        /**
         * Creates a new RqstInt instance using the specified properties.
         * @function create
         * @memberof clientRequestPackage.RqstInt
         * @static
         * @param {clientRequestPackage.IRqstInt=} [properties] Properties to set
         * @returns {clientRequestPackage.RqstInt} RqstInt instance
         */
        RqstInt.create = function create(properties) {
            return new RqstInt(properties);
        };

        /**
         * Encodes the specified RqstInt message. Does not implicitly {@link clientRequestPackage.RqstInt.verify|verify} messages.
         * @function encode
         * @memberof clientRequestPackage.RqstInt
         * @static
         * @param {clientRequestPackage.IRqstInt} message RqstInt message or plain object to encode
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
         * Encodes the specified RqstInt message, length delimited. Does not implicitly {@link clientRequestPackage.RqstInt.verify|verify} messages.
         * @function encodeDelimited
         * @memberof clientRequestPackage.RqstInt
         * @static
         * @param {clientRequestPackage.IRqstInt} message RqstInt message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RqstInt.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RqstInt message from the specified reader or buffer.
         * @function decode
         * @memberof clientRequestPackage.RqstInt
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {clientRequestPackage.RqstInt} RqstInt
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RqstInt.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.clientRequestPackage.RqstInt();
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
         * @memberof clientRequestPackage.RqstInt
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {clientRequestPackage.RqstInt} RqstInt
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
         * @memberof clientRequestPackage.RqstInt
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

    clientRequestPackage.RqstIntKeyIntValue = (function() {

        /**
         * Properties of a RqstIntKeyIntValue.
         * @memberof clientRequestPackage
         * @interface IRqstIntKeyIntValue
         * @property {number|null} [key] RqstIntKeyIntValue key
         * @property {number|null} [value] RqstIntKeyIntValue value
         */

        /**
         * Constructs a new RqstIntKeyIntValue.
         * @memberof clientRequestPackage
         * @classdesc Represents a RqstIntKeyIntValue.
         * @implements IRqstIntKeyIntValue
         * @constructor
         * @param {clientRequestPackage.IRqstIntKeyIntValue=} [properties] Properties to set
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
         * @memberof clientRequestPackage.RqstIntKeyIntValue
         * @instance
         */
        RqstIntKeyIntValue.prototype.key = 0;

        /**
         * RqstIntKeyIntValue value.
         * @member {number} value
         * @memberof clientRequestPackage.RqstIntKeyIntValue
         * @instance
         */
        RqstIntKeyIntValue.prototype.value = 0;

        /**
         * Creates a new RqstIntKeyIntValue instance using the specified properties.
         * @function create
         * @memberof clientRequestPackage.RqstIntKeyIntValue
         * @static
         * @param {clientRequestPackage.IRqstIntKeyIntValue=} [properties] Properties to set
         * @returns {clientRequestPackage.RqstIntKeyIntValue} RqstIntKeyIntValue instance
         */
        RqstIntKeyIntValue.create = function create(properties) {
            return new RqstIntKeyIntValue(properties);
        };

        /**
         * Encodes the specified RqstIntKeyIntValue message. Does not implicitly {@link clientRequestPackage.RqstIntKeyIntValue.verify|verify} messages.
         * @function encode
         * @memberof clientRequestPackage.RqstIntKeyIntValue
         * @static
         * @param {clientRequestPackage.IRqstIntKeyIntValue} message RqstIntKeyIntValue message or plain object to encode
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
         * Encodes the specified RqstIntKeyIntValue message, length delimited. Does not implicitly {@link clientRequestPackage.RqstIntKeyIntValue.verify|verify} messages.
         * @function encodeDelimited
         * @memberof clientRequestPackage.RqstIntKeyIntValue
         * @static
         * @param {clientRequestPackage.IRqstIntKeyIntValue} message RqstIntKeyIntValue message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RqstIntKeyIntValue.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RqstIntKeyIntValue message from the specified reader or buffer.
         * @function decode
         * @memberof clientRequestPackage.RqstIntKeyIntValue
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {clientRequestPackage.RqstIntKeyIntValue} RqstIntKeyIntValue
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RqstIntKeyIntValue.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.clientRequestPackage.RqstIntKeyIntValue();
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
         * @memberof clientRequestPackage.RqstIntKeyIntValue
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {clientRequestPackage.RqstIntKeyIntValue} RqstIntKeyIntValue
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
         * @memberof clientRequestPackage.RqstIntKeyIntValue
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

    clientRequestPackage.RqstIntKeyStrValue = (function() {

        /**
         * Properties of a RqstIntKeyStrValue.
         * @memberof clientRequestPackage
         * @interface IRqstIntKeyStrValue
         * @property {number|null} [key] RqstIntKeyStrValue key
         * @property {string|null} [value] RqstIntKeyStrValue value
         */

        /**
         * Constructs a new RqstIntKeyStrValue.
         * @memberof clientRequestPackage
         * @classdesc Represents a RqstIntKeyStrValue.
         * @implements IRqstIntKeyStrValue
         * @constructor
         * @param {clientRequestPackage.IRqstIntKeyStrValue=} [properties] Properties to set
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
         * @memberof clientRequestPackage.RqstIntKeyStrValue
         * @instance
         */
        RqstIntKeyStrValue.prototype.key = 0;

        /**
         * RqstIntKeyStrValue value.
         * @member {string} value
         * @memberof clientRequestPackage.RqstIntKeyStrValue
         * @instance
         */
        RqstIntKeyStrValue.prototype.value = "";

        /**
         * Creates a new RqstIntKeyStrValue instance using the specified properties.
         * @function create
         * @memberof clientRequestPackage.RqstIntKeyStrValue
         * @static
         * @param {clientRequestPackage.IRqstIntKeyStrValue=} [properties] Properties to set
         * @returns {clientRequestPackage.RqstIntKeyStrValue} RqstIntKeyStrValue instance
         */
        RqstIntKeyStrValue.create = function create(properties) {
            return new RqstIntKeyStrValue(properties);
        };

        /**
         * Encodes the specified RqstIntKeyStrValue message. Does not implicitly {@link clientRequestPackage.RqstIntKeyStrValue.verify|verify} messages.
         * @function encode
         * @memberof clientRequestPackage.RqstIntKeyStrValue
         * @static
         * @param {clientRequestPackage.IRqstIntKeyStrValue} message RqstIntKeyStrValue message or plain object to encode
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
         * Encodes the specified RqstIntKeyStrValue message, length delimited. Does not implicitly {@link clientRequestPackage.RqstIntKeyStrValue.verify|verify} messages.
         * @function encodeDelimited
         * @memberof clientRequestPackage.RqstIntKeyStrValue
         * @static
         * @param {clientRequestPackage.IRqstIntKeyStrValue} message RqstIntKeyStrValue message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RqstIntKeyStrValue.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RqstIntKeyStrValue message from the specified reader or buffer.
         * @function decode
         * @memberof clientRequestPackage.RqstIntKeyStrValue
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {clientRequestPackage.RqstIntKeyStrValue} RqstIntKeyStrValue
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RqstIntKeyStrValue.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.clientRequestPackage.RqstIntKeyStrValue();
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
         * @memberof clientRequestPackage.RqstIntKeyStrValue
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {clientRequestPackage.RqstIntKeyStrValue} RqstIntKeyStrValue
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
         * @memberof clientRequestPackage.RqstIntKeyStrValue
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

    clientRequestPackage.RqstLoadRole = (function() {

        /**
         * Properties of a RqstLoadRole.
         * @memberof clientRequestPackage
         * @interface IRqstLoadRole
         * @property {string|null} [sid] RqstLoadRole sid
         * @property {string|null} [ip] RqstLoadRole ip
         */

        /**
         * Constructs a new RqstLoadRole.
         * @memberof clientRequestPackage
         * @classdesc Represents a RqstLoadRole.
         * @implements IRqstLoadRole
         * @constructor
         * @param {clientRequestPackage.IRqstLoadRole=} [properties] Properties to set
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
         * @memberof clientRequestPackage.RqstLoadRole
         * @instance
         */
        RqstLoadRole.prototype.sid = "";

        /**
         * RqstLoadRole ip.
         * @member {string} ip
         * @memberof clientRequestPackage.RqstLoadRole
         * @instance
         */
        RqstLoadRole.prototype.ip = "";

        /**
         * Creates a new RqstLoadRole instance using the specified properties.
         * @function create
         * @memberof clientRequestPackage.RqstLoadRole
         * @static
         * @param {clientRequestPackage.IRqstLoadRole=} [properties] Properties to set
         * @returns {clientRequestPackage.RqstLoadRole} RqstLoadRole instance
         */
        RqstLoadRole.create = function create(properties) {
            return new RqstLoadRole(properties);
        };

        /**
         * Encodes the specified RqstLoadRole message. Does not implicitly {@link clientRequestPackage.RqstLoadRole.verify|verify} messages.
         * @function encode
         * @memberof clientRequestPackage.RqstLoadRole
         * @static
         * @param {clientRequestPackage.IRqstLoadRole} message RqstLoadRole message or plain object to encode
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
         * Encodes the specified RqstLoadRole message, length delimited. Does not implicitly {@link clientRequestPackage.RqstLoadRole.verify|verify} messages.
         * @function encodeDelimited
         * @memberof clientRequestPackage.RqstLoadRole
         * @static
         * @param {clientRequestPackage.IRqstLoadRole} message RqstLoadRole message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RqstLoadRole.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RqstLoadRole message from the specified reader or buffer.
         * @function decode
         * @memberof clientRequestPackage.RqstLoadRole
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {clientRequestPackage.RqstLoadRole} RqstLoadRole
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RqstLoadRole.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.clientRequestPackage.RqstLoadRole();
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
         * @memberof clientRequestPackage.RqstLoadRole
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {clientRequestPackage.RqstLoadRole} RqstLoadRole
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
         * @memberof clientRequestPackage.RqstLoadRole
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

    clientRequestPackage.RqstLong = (function() {

        /**
         * Properties of a RqstLong.
         * @memberof clientRequestPackage
         * @interface IRqstLong
         * @property {number|Long|null} [value] RqstLong value
         */

        /**
         * Constructs a new RqstLong.
         * @memberof clientRequestPackage
         * @classdesc Represents a RqstLong.
         * @implements IRqstLong
         * @constructor
         * @param {clientRequestPackage.IRqstLong=} [properties] Properties to set
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
         * @memberof clientRequestPackage.RqstLong
         * @instance
         */
        RqstLong.prototype.value = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new RqstLong instance using the specified properties.
         * @function create
         * @memberof clientRequestPackage.RqstLong
         * @static
         * @param {clientRequestPackage.IRqstLong=} [properties] Properties to set
         * @returns {clientRequestPackage.RqstLong} RqstLong instance
         */
        RqstLong.create = function create(properties) {
            return new RqstLong(properties);
        };

        /**
         * Encodes the specified RqstLong message. Does not implicitly {@link clientRequestPackage.RqstLong.verify|verify} messages.
         * @function encode
         * @memberof clientRequestPackage.RqstLong
         * @static
         * @param {clientRequestPackage.IRqstLong} message RqstLong message or plain object to encode
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
         * Encodes the specified RqstLong message, length delimited. Does not implicitly {@link clientRequestPackage.RqstLong.verify|verify} messages.
         * @function encodeDelimited
         * @memberof clientRequestPackage.RqstLong
         * @static
         * @param {clientRequestPackage.IRqstLong} message RqstLong message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RqstLong.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RqstLong message from the specified reader or buffer.
         * @function decode
         * @memberof clientRequestPackage.RqstLong
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {clientRequestPackage.RqstLong} RqstLong
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RqstLong.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.clientRequestPackage.RqstLong();
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
         * @memberof clientRequestPackage.RqstLong
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {clientRequestPackage.RqstLong} RqstLong
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
         * @memberof clientRequestPackage.RqstLong
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

    clientRequestPackage.RqstStr = (function() {

        /**
         * Properties of a RqstStr.
         * @memberof clientRequestPackage
         * @interface IRqstStr
         * @property {string|null} [value] RqstStr value
         */

        /**
         * Constructs a new RqstStr.
         * @memberof clientRequestPackage
         * @classdesc Represents a RqstStr.
         * @implements IRqstStr
         * @constructor
         * @param {clientRequestPackage.IRqstStr=} [properties] Properties to set
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
         * @memberof clientRequestPackage.RqstStr
         * @instance
         */
        RqstStr.prototype.value = "";

        /**
         * Creates a new RqstStr instance using the specified properties.
         * @function create
         * @memberof clientRequestPackage.RqstStr
         * @static
         * @param {clientRequestPackage.IRqstStr=} [properties] Properties to set
         * @returns {clientRequestPackage.RqstStr} RqstStr instance
         */
        RqstStr.create = function create(properties) {
            return new RqstStr(properties);
        };

        /**
         * Encodes the specified RqstStr message. Does not implicitly {@link clientRequestPackage.RqstStr.verify|verify} messages.
         * @function encode
         * @memberof clientRequestPackage.RqstStr
         * @static
         * @param {clientRequestPackage.IRqstStr} message RqstStr message or plain object to encode
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
         * Encodes the specified RqstStr message, length delimited. Does not implicitly {@link clientRequestPackage.RqstStr.verify|verify} messages.
         * @function encodeDelimited
         * @memberof clientRequestPackage.RqstStr
         * @static
         * @param {clientRequestPackage.IRqstStr} message RqstStr message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RqstStr.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RqstStr message from the specified reader or buffer.
         * @function decode
         * @memberof clientRequestPackage.RqstStr
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {clientRequestPackage.RqstStr} RqstStr
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RqstStr.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.clientRequestPackage.RqstStr();
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
         * @memberof clientRequestPackage.RqstStr
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {clientRequestPackage.RqstStr} RqstStr
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
         * @memberof clientRequestPackage.RqstStr
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

    clientRequestPackage.RqstStrKeyStrValue = (function() {

        /**
         * Properties of a RqstStrKeyStrValue.
         * @memberof clientRequestPackage
         * @interface IRqstStrKeyStrValue
         * @property {string|null} [key] RqstStrKeyStrValue key
         * @property {string|null} [value] RqstStrKeyStrValue value
         */

        /**
         * Constructs a new RqstStrKeyStrValue.
         * @memberof clientRequestPackage
         * @classdesc Represents a RqstStrKeyStrValue.
         * @implements IRqstStrKeyStrValue
         * @constructor
         * @param {clientRequestPackage.IRqstStrKeyStrValue=} [properties] Properties to set
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
         * @memberof clientRequestPackage.RqstStrKeyStrValue
         * @instance
         */
        RqstStrKeyStrValue.prototype.key = "";

        /**
         * RqstStrKeyStrValue value.
         * @member {string} value
         * @memberof clientRequestPackage.RqstStrKeyStrValue
         * @instance
         */
        RqstStrKeyStrValue.prototype.value = "";

        /**
         * Creates a new RqstStrKeyStrValue instance using the specified properties.
         * @function create
         * @memberof clientRequestPackage.RqstStrKeyStrValue
         * @static
         * @param {clientRequestPackage.IRqstStrKeyStrValue=} [properties] Properties to set
         * @returns {clientRequestPackage.RqstStrKeyStrValue} RqstStrKeyStrValue instance
         */
        RqstStrKeyStrValue.create = function create(properties) {
            return new RqstStrKeyStrValue(properties);
        };

        /**
         * Encodes the specified RqstStrKeyStrValue message. Does not implicitly {@link clientRequestPackage.RqstStrKeyStrValue.verify|verify} messages.
         * @function encode
         * @memberof clientRequestPackage.RqstStrKeyStrValue
         * @static
         * @param {clientRequestPackage.IRqstStrKeyStrValue} message RqstStrKeyStrValue message or plain object to encode
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
         * Encodes the specified RqstStrKeyStrValue message, length delimited. Does not implicitly {@link clientRequestPackage.RqstStrKeyStrValue.verify|verify} messages.
         * @function encodeDelimited
         * @memberof clientRequestPackage.RqstStrKeyStrValue
         * @static
         * @param {clientRequestPackage.IRqstStrKeyStrValue} message RqstStrKeyStrValue message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RqstStrKeyStrValue.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RqstStrKeyStrValue message from the specified reader or buffer.
         * @function decode
         * @memberof clientRequestPackage.RqstStrKeyStrValue
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {clientRequestPackage.RqstStrKeyStrValue} RqstStrKeyStrValue
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RqstStrKeyStrValue.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.clientRequestPackage.RqstStrKeyStrValue();
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
         * @memberof clientRequestPackage.RqstStrKeyStrValue
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {clientRequestPackage.RqstStrKeyStrValue} RqstStrKeyStrValue
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
         * @memberof clientRequestPackage.RqstStrKeyStrValue
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

    clientRequestPackage.RqstUpdateTeam = (function() {

        /**
         * Properties of a RqstUpdateTeam.
         * @memberof clientRequestPackage
         * @interface IRqstUpdateTeam
         * @property {number|null} [type] RqstUpdateTeam type
         * @property {Array.<number>|null} [posHid] RqstUpdateTeam posHid
         */

        /**
         * Constructs a new RqstUpdateTeam.
         * @memberof clientRequestPackage
         * @classdesc Represents a RqstUpdateTeam.
         * @implements IRqstUpdateTeam
         * @constructor
         * @param {clientRequestPackage.IRqstUpdateTeam=} [properties] Properties to set
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
         * @memberof clientRequestPackage.RqstUpdateTeam
         * @instance
         */
        RqstUpdateTeam.prototype.type = 0;

        /**
         * RqstUpdateTeam posHid.
         * @member {Array.<number>} posHid
         * @memberof clientRequestPackage.RqstUpdateTeam
         * @instance
         */
        RqstUpdateTeam.prototype.posHid = $util.emptyArray;

        /**
         * Creates a new RqstUpdateTeam instance using the specified properties.
         * @function create
         * @memberof clientRequestPackage.RqstUpdateTeam
         * @static
         * @param {clientRequestPackage.IRqstUpdateTeam=} [properties] Properties to set
         * @returns {clientRequestPackage.RqstUpdateTeam} RqstUpdateTeam instance
         */
        RqstUpdateTeam.create = function create(properties) {
            return new RqstUpdateTeam(properties);
        };

        /**
         * Encodes the specified RqstUpdateTeam message. Does not implicitly {@link clientRequestPackage.RqstUpdateTeam.verify|verify} messages.
         * @function encode
         * @memberof clientRequestPackage.RqstUpdateTeam
         * @static
         * @param {clientRequestPackage.IRqstUpdateTeam} message RqstUpdateTeam message or plain object to encode
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
         * Encodes the specified RqstUpdateTeam message, length delimited. Does not implicitly {@link clientRequestPackage.RqstUpdateTeam.verify|verify} messages.
         * @function encodeDelimited
         * @memberof clientRequestPackage.RqstUpdateTeam
         * @static
         * @param {clientRequestPackage.IRqstUpdateTeam} message RqstUpdateTeam message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RqstUpdateTeam.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RqstUpdateTeam message from the specified reader or buffer.
         * @function decode
         * @memberof clientRequestPackage.RqstUpdateTeam
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {clientRequestPackage.RqstUpdateTeam} RqstUpdateTeam
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RqstUpdateTeam.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.clientRequestPackage.RqstUpdateTeam();
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
         * @memberof clientRequestPackage.RqstUpdateTeam
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {clientRequestPackage.RqstUpdateTeam} RqstUpdateTeam
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
         * @memberof clientRequestPackage.RqstUpdateTeam
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

    clientRequestPackage.RqstVerify = (function() {

        /**
         * Properties of a RqstVerify.
         * @memberof clientRequestPackage
         * @interface IRqstVerify
         * @property {string|null} [uid] RqstVerify uid
         * @property {string|null} [sid] RqstVerify sid
         * @property {string|null} [access] RqstVerify access
         * @property {string|null} [refresh] RqstVerify refresh
         * @property {string|null} [ip] RqstVerify ip
         */

        /**
         * Constructs a new RqstVerify.
         * @memberof clientRequestPackage
         * @classdesc Represents a RqstVerify.
         * @implements IRqstVerify
         * @constructor
         * @param {clientRequestPackage.IRqstVerify=} [properties] Properties to set
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
         * @memberof clientRequestPackage.RqstVerify
         * @instance
         */
        RqstVerify.prototype.uid = "";

        /**
         * RqstVerify sid.
         * @member {string} sid
         * @memberof clientRequestPackage.RqstVerify
         * @instance
         */
        RqstVerify.prototype.sid = "";

        /**
         * RqstVerify access.
         * @member {string} access
         * @memberof clientRequestPackage.RqstVerify
         * @instance
         */
        RqstVerify.prototype.access = "";

        /**
         * RqstVerify refresh.
         * @member {string} refresh
         * @memberof clientRequestPackage.RqstVerify
         * @instance
         */
        RqstVerify.prototype.refresh = "";

        /**
         * RqstVerify ip.
         * @member {string} ip
         * @memberof clientRequestPackage.RqstVerify
         * @instance
         */
        RqstVerify.prototype.ip = "";

        /**
         * Creates a new RqstVerify instance using the specified properties.
         * @function create
         * @memberof clientRequestPackage.RqstVerify
         * @static
         * @param {clientRequestPackage.IRqstVerify=} [properties] Properties to set
         * @returns {clientRequestPackage.RqstVerify} RqstVerify instance
         */
        RqstVerify.create = function create(properties) {
            return new RqstVerify(properties);
        };

        /**
         * Encodes the specified RqstVerify message. Does not implicitly {@link clientRequestPackage.RqstVerify.verify|verify} messages.
         * @function encode
         * @memberof clientRequestPackage.RqstVerify
         * @static
         * @param {clientRequestPackage.IRqstVerify} message RqstVerify message or plain object to encode
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
            if (message.refresh != null && message.hasOwnProperty("refresh"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.refresh);
            if (message.ip != null && message.hasOwnProperty("ip"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.ip);
            return writer;
        };

        /**
         * Encodes the specified RqstVerify message, length delimited. Does not implicitly {@link clientRequestPackage.RqstVerify.verify|verify} messages.
         * @function encodeDelimited
         * @memberof clientRequestPackage.RqstVerify
         * @static
         * @param {clientRequestPackage.IRqstVerify} message RqstVerify message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RqstVerify.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RqstVerify message from the specified reader or buffer.
         * @function decode
         * @memberof clientRequestPackage.RqstVerify
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {clientRequestPackage.RqstVerify} RqstVerify
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RqstVerify.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.clientRequestPackage.RqstVerify();
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
                    message.refresh = reader.string();
                    break;
                case 5:
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
         * @memberof clientRequestPackage.RqstVerify
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {clientRequestPackage.RqstVerify} RqstVerify
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
         * @memberof clientRequestPackage.RqstVerify
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
            if (message.refresh != null && message.hasOwnProperty("refresh"))
                if (!$util.isString(message.refresh))
                    return "refresh: string expected";
            if (message.ip != null && message.hasOwnProperty("ip"))
                if (!$util.isString(message.ip))
                    return "ip: string expected";
            return null;
        };

        return RqstVerify;
    })();

    return clientRequestPackage;
})();