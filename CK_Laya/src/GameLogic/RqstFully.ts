export interface RqstAddFacility {
  x?: number;
  y?: number;
  pos?: number;
  fId?: number;
}

export function encodeRqstAddFacility(message: RqstAddFacility): Uint8Array {
  let bb = popByteBuffer();
  _encodeRqstAddFacility(message, bb);
  return toUint8Array(bb);
}

function _encodeRqstAddFacility(message: RqstAddFacility, bb: ByteBuffer): void {
  // optional sint32 x = 1;
  let $x = message.x;
  if ($x !== undefined) {
    writeVarint32(bb, 8);
    writeVarint32ZigZag(bb, $x);
  }

  // optional sint32 y = 2;
  let $y = message.y;
  if ($y !== undefined) {
    writeVarint32(bb, 16);
    writeVarint32ZigZag(bb, $y);
  }

  // optional sint32 pos = 3;
  let $pos = message.pos;
  if ($pos !== undefined) {
    writeVarint32(bb, 24);
    writeVarint32ZigZag(bb, $pos);
  }

  // optional sint32 fId = 4;
  let $fId = message.fId;
  if ($fId !== undefined) {
    writeVarint32(bb, 32);
    writeVarint32ZigZag(bb, $fId);
  }
}

export function decodeRqstAddFacility(binary: Uint8Array): RqstAddFacility {
  return _decodeRqstAddFacility(wrapByteBuffer(binary));
}

function _decodeRqstAddFacility(bb: ByteBuffer): RqstAddFacility {
  let message: RqstAddFacility = {} as any;

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // optional sint32 x = 1;
      case 1: {
        message.x = readVarint32ZigZag(bb);
        break;
      }

      // optional sint32 y = 2;
      case 2: {
        message.y = readVarint32ZigZag(bb);
        break;
      }

      // optional sint32 pos = 3;
      case 3: {
        message.pos = readVarint32ZigZag(bb);
        break;
      }

      // optional sint32 fId = 4;
      case 4: {
        message.fId = readVarint32ZigZag(bb);
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

export interface RqstCreRole {
  sid?: string;
  name?: string;
  country?: number;
  camp?: number;
}

export function encodeRqstCreRole(message: RqstCreRole): Uint8Array {
  let bb = popByteBuffer();
  _encodeRqstCreRole(message, bb);
  return toUint8Array(bb);
}

function _encodeRqstCreRole(message: RqstCreRole, bb: ByteBuffer): void {
  // optional string sid = 1;
  let $sid = message.sid;
  if ($sid !== undefined) {
    writeVarint32(bb, 10);
    writeString(bb, $sid);
  }

  // optional string name = 2;
  let $name = message.name;
  if ($name !== undefined) {
    writeVarint32(bb, 18);
    writeString(bb, $name);
  }

  // optional sint32 country = 3;
  let $country = message.country;
  if ($country !== undefined) {
    writeVarint32(bb, 24);
    writeVarint32ZigZag(bb, $country);
  }

  // optional sint32 camp = 4;
  let $camp = message.camp;
  if ($camp !== undefined) {
    writeVarint32(bb, 32);
    writeVarint32ZigZag(bb, $camp);
  }
}

export function decodeRqstCreRole(binary: Uint8Array): RqstCreRole {
  return _decodeRqstCreRole(wrapByteBuffer(binary));
}

function _decodeRqstCreRole(bb: ByteBuffer): RqstCreRole {
  let message: RqstCreRole = {} as any;

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // optional string sid = 1;
      case 1: {
        message.sid = readString(bb, readVarint32(bb));
        break;
      }

      // optional string name = 2;
      case 2: {
        message.name = readString(bb, readVarint32(bb));
        break;
      }

      // optional sint32 country = 3;
      case 3: {
        message.country = readVarint32ZigZag(bb);
        break;
      }

      // optional sint32 camp = 4;
      case 4: {
        message.camp = readVarint32ZigZag(bb);
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

export interface RqstFillPower {
  x?: number;
  y?: number;
  cubeId?: number;
  campValue11?: { [key: number]: number };
  campValue12?: { [key: number]: number };
  campValue13?: { [key: number]: number };
  campValue14?: { [key: number]: number };
  campValue15?: { [key: number]: number };
  campValue16?: { [key: number]: number };
}

export function encodeRqstFillPower(message: RqstFillPower): Uint8Array {
  let bb = popByteBuffer();
  _encodeRqstFillPower(message, bb);
  return toUint8Array(bb);
}

function _encodeRqstFillPower(message: RqstFillPower, bb: ByteBuffer): void {
  // optional int32 x = 1;
  let $x = message.x;
  if ($x !== undefined) {
    writeVarint32(bb, 8);
    writeVarint64(bb, intToLong($x));
  }

  // optional int32 y = 2;
  let $y = message.y;
  if ($y !== undefined) {
    writeVarint32(bb, 16);
    writeVarint64(bb, intToLong($y));
  }

  // optional int32 cubeId = 3;
  let $cubeId = message.cubeId;
  if ($cubeId !== undefined) {
    writeVarint32(bb, 24);
    writeVarint64(bb, intToLong($cubeId));
  }

  // optional map<int32, int32> campValue11 = 4;
  let map$campValue11 = message.campValue11;
  if (map$campValue11 !== undefined) {
    for (let key in map$campValue11) {
      let nested = popByteBuffer();
      let value = map$campValue11[key];
      writeVarint32(nested, 8);
      writeVarint64(nested, intToLong(+key));
      writeVarint32(nested, 16);
      writeVarint64(nested, intToLong(value));
      writeVarint32(bb, 34);
      writeVarint32(bb, nested.offset);
      writeByteBuffer(bb, nested);
      pushByteBuffer(nested);
    }
  }

  // optional map<int32, int32> campValue12 = 5;
  let map$campValue12 = message.campValue12;
  if (map$campValue12 !== undefined) {
    for (let key in map$campValue12) {
      let nested = popByteBuffer();
      let value = map$campValue12[key];
      writeVarint32(nested, 8);
      writeVarint64(nested, intToLong(+key));
      writeVarint32(nested, 16);
      writeVarint64(nested, intToLong(value));
      writeVarint32(bb, 42);
      writeVarint32(bb, nested.offset);
      writeByteBuffer(bb, nested);
      pushByteBuffer(nested);
    }
  }

  // optional map<int32, int32> campValue13 = 6;
  let map$campValue13 = message.campValue13;
  if (map$campValue13 !== undefined) {
    for (let key in map$campValue13) {
      let nested = popByteBuffer();
      let value = map$campValue13[key];
      writeVarint32(nested, 8);
      writeVarint64(nested, intToLong(+key));
      writeVarint32(nested, 16);
      writeVarint64(nested, intToLong(value));
      writeVarint32(bb, 50);
      writeVarint32(bb, nested.offset);
      writeByteBuffer(bb, nested);
      pushByteBuffer(nested);
    }
  }

  // optional map<int32, int32> campValue14 = 7;
  let map$campValue14 = message.campValue14;
  if (map$campValue14 !== undefined) {
    for (let key in map$campValue14) {
      let nested = popByteBuffer();
      let value = map$campValue14[key];
      writeVarint32(nested, 8);
      writeVarint64(nested, intToLong(+key));
      writeVarint32(nested, 16);
      writeVarint64(nested, intToLong(value));
      writeVarint32(bb, 58);
      writeVarint32(bb, nested.offset);
      writeByteBuffer(bb, nested);
      pushByteBuffer(nested);
    }
  }

  // optional map<int32, int32> campValue15 = 8;
  let map$campValue15 = message.campValue15;
  if (map$campValue15 !== undefined) {
    for (let key in map$campValue15) {
      let nested = popByteBuffer();
      let value = map$campValue15[key];
      writeVarint32(nested, 8);
      writeVarint64(nested, intToLong(+key));
      writeVarint32(nested, 16);
      writeVarint64(nested, intToLong(value));
      writeVarint32(bb, 66);
      writeVarint32(bb, nested.offset);
      writeByteBuffer(bb, nested);
      pushByteBuffer(nested);
    }
  }

  // optional map<int32, int32> campValue16 = 9;
  let map$campValue16 = message.campValue16;
  if (map$campValue16 !== undefined) {
    for (let key in map$campValue16) {
      let nested = popByteBuffer();
      let value = map$campValue16[key];
      writeVarint32(nested, 8);
      writeVarint64(nested, intToLong(+key));
      writeVarint32(nested, 16);
      writeVarint64(nested, intToLong(value));
      writeVarint32(bb, 74);
      writeVarint32(bb, nested.offset);
      writeByteBuffer(bb, nested);
      pushByteBuffer(nested);
    }
  }
}

export function decodeRqstFillPower(binary: Uint8Array): RqstFillPower {
  return _decodeRqstFillPower(wrapByteBuffer(binary));
}

function _decodeRqstFillPower(bb: ByteBuffer): RqstFillPower {
  let message: RqstFillPower = {} as any;

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // optional int32 x = 1;
      case 1: {
        message.x = readVarint32(bb);
        break;
      }

      // optional int32 y = 2;
      case 2: {
        message.y = readVarint32(bb);
        break;
      }

      // optional int32 cubeId = 3;
      case 3: {
        message.cubeId = readVarint32(bb);
        break;
      }

      // optional map<int32, int32> campValue11 = 4;
      case 4: {
        let values = message.campValue11 || (message.campValue11 = {});
        let outerLimit = pushTemporaryLength(bb);
        let key: number | undefined;
        let value: number | undefined;
        end_of_entry: while (!isAtEnd(bb)) {
          let tag = readVarint32(bb);
          switch (tag >>> 3) {
            case 0:
              break end_of_entry;
            case 1: {
              key = readVarint32(bb);
              break;
            }
            case 2: {
              value = readVarint32(bb);
              break;
            }
            default:
              skipUnknownField(bb, tag & 7);
          }
        }
        if (key === undefined || value === undefined)
          throw new Error("Invalid data for map: campValue11");
        values[key] = value;
        bb.limit = outerLimit;
        break;
      }

      // optional map<int32, int32> campValue12 = 5;
      case 5: {
        let values = message.campValue12 || (message.campValue12 = {});
        let outerLimit = pushTemporaryLength(bb);
        let key: number | undefined;
        let value: number | undefined;
        end_of_entry: while (!isAtEnd(bb)) {
          let tag = readVarint32(bb);
          switch (tag >>> 3) {
            case 0:
              break end_of_entry;
            case 1: {
              key = readVarint32(bb);
              break;
            }
            case 2: {
              value = readVarint32(bb);
              break;
            }
            default:
              skipUnknownField(bb, tag & 7);
          }
        }
        if (key === undefined || value === undefined)
          throw new Error("Invalid data for map: campValue12");
        values[key] = value;
        bb.limit = outerLimit;
        break;
      }

      // optional map<int32, int32> campValue13 = 6;
      case 6: {
        let values = message.campValue13 || (message.campValue13 = {});
        let outerLimit = pushTemporaryLength(bb);
        let key: number | undefined;
        let value: number | undefined;
        end_of_entry: while (!isAtEnd(bb)) {
          let tag = readVarint32(bb);
          switch (tag >>> 3) {
            case 0:
              break end_of_entry;
            case 1: {
              key = readVarint32(bb);
              break;
            }
            case 2: {
              value = readVarint32(bb);
              break;
            }
            default:
              skipUnknownField(bb, tag & 7);
          }
        }
        if (key === undefined || value === undefined)
          throw new Error("Invalid data for map: campValue13");
        values[key] = value;
        bb.limit = outerLimit;
        break;
      }

      // optional map<int32, int32> campValue14 = 7;
      case 7: {
        let values = message.campValue14 || (message.campValue14 = {});
        let outerLimit = pushTemporaryLength(bb);
        let key: number | undefined;
        let value: number | undefined;
        end_of_entry: while (!isAtEnd(bb)) {
          let tag = readVarint32(bb);
          switch (tag >>> 3) {
            case 0:
              break end_of_entry;
            case 1: {
              key = readVarint32(bb);
              break;
            }
            case 2: {
              value = readVarint32(bb);
              break;
            }
            default:
              skipUnknownField(bb, tag & 7);
          }
        }
        if (key === undefined || value === undefined)
          throw new Error("Invalid data for map: campValue14");
        values[key] = value;
        bb.limit = outerLimit;
        break;
      }

      // optional map<int32, int32> campValue15 = 8;
      case 8: {
        let values = message.campValue15 || (message.campValue15 = {});
        let outerLimit = pushTemporaryLength(bb);
        let key: number | undefined;
        let value: number | undefined;
        end_of_entry: while (!isAtEnd(bb)) {
          let tag = readVarint32(bb);
          switch (tag >>> 3) {
            case 0:
              break end_of_entry;
            case 1: {
              key = readVarint32(bb);
              break;
            }
            case 2: {
              value = readVarint32(bb);
              break;
            }
            default:
              skipUnknownField(bb, tag & 7);
          }
        }
        if (key === undefined || value === undefined)
          throw new Error("Invalid data for map: campValue15");
        values[key] = value;
        bb.limit = outerLimit;
        break;
      }

      // optional map<int32, int32> campValue16 = 9;
      case 9: {
        let values = message.campValue16 || (message.campValue16 = {});
        let outerLimit = pushTemporaryLength(bb);
        let key: number | undefined;
        let value: number | undefined;
        end_of_entry: while (!isAtEnd(bb)) {
          let tag = readVarint32(bb);
          switch (tag >>> 3) {
            case 0:
              break end_of_entry;
            case 1: {
              key = readVarint32(bb);
              break;
            }
            case 2: {
              value = readVarint32(bb);
              break;
            }
            default:
              skipUnknownField(bb, tag & 7);
          }
        }
        if (key === undefined || value === undefined)
          throw new Error("Invalid data for map: campValue16");
        values[key] = value;
        bb.limit = outerLimit;
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

export interface RqstInt {
  value?: number;
}

export function encodeRqstInt(message: RqstInt): Uint8Array {
  let bb = popByteBuffer();
  _encodeRqstInt(message, bb);
  return toUint8Array(bb);
}

function _encodeRqstInt(message: RqstInt, bb: ByteBuffer): void {
  // optional sint32 value = 1;
  let $value = message.value;
  if ($value !== undefined) {
    writeVarint32(bb, 8);
    writeVarint32ZigZag(bb, $value);
  }
}

export function decodeRqstInt(binary: Uint8Array): RqstInt {
  return _decodeRqstInt(wrapByteBuffer(binary));
}

function _decodeRqstInt(bb: ByteBuffer): RqstInt {
  let message: RqstInt = {} as any;

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // optional sint32 value = 1;
      case 1: {
        message.value = readVarint32ZigZag(bb);
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

export interface RqstIntKeyIntValue {
  key?: number;
  value?: number;
}

export function encodeRqstIntKeyIntValue(message: RqstIntKeyIntValue): Uint8Array {
  let bb = popByteBuffer();
  _encodeRqstIntKeyIntValue(message, bb);
  return toUint8Array(bb);
}

function _encodeRqstIntKeyIntValue(message: RqstIntKeyIntValue, bb: ByteBuffer): void {
  // optional sint32 key = 1;
  let $key = message.key;
  if ($key !== undefined) {
    writeVarint32(bb, 8);
    writeVarint32ZigZag(bb, $key);
  }

  // optional sint32 value = 2;
  let $value = message.value;
  if ($value !== undefined) {
    writeVarint32(bb, 16);
    writeVarint32ZigZag(bb, $value);
  }
}

export function decodeRqstIntKeyIntValue(binary: Uint8Array): RqstIntKeyIntValue {
  return _decodeRqstIntKeyIntValue(wrapByteBuffer(binary));
}

function _decodeRqstIntKeyIntValue(bb: ByteBuffer): RqstIntKeyIntValue {
  let message: RqstIntKeyIntValue = {} as any;

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // optional sint32 key = 1;
      case 1: {
        message.key = readVarint32ZigZag(bb);
        break;
      }

      // optional sint32 value = 2;
      case 2: {
        message.value = readVarint32ZigZag(bb);
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

export interface RqstIntKeyStrValue {
  key?: number;
  value?: string;
}

export function encodeRqstIntKeyStrValue(message: RqstIntKeyStrValue): Uint8Array {
  let bb = popByteBuffer();
  _encodeRqstIntKeyStrValue(message, bb);
  return toUint8Array(bb);
}

function _encodeRqstIntKeyStrValue(message: RqstIntKeyStrValue, bb: ByteBuffer): void {
  // optional sint32 key = 1;
  let $key = message.key;
  if ($key !== undefined) {
    writeVarint32(bb, 8);
    writeVarint32ZigZag(bb, $key);
  }

  // optional string value = 2;
  let $value = message.value;
  if ($value !== undefined) {
    writeVarint32(bb, 18);
    writeString(bb, $value);
  }
}

export function decodeRqstIntKeyStrValue(binary: Uint8Array): RqstIntKeyStrValue {
  return _decodeRqstIntKeyStrValue(wrapByteBuffer(binary));
}

function _decodeRqstIntKeyStrValue(bb: ByteBuffer): RqstIntKeyStrValue {
  let message: RqstIntKeyStrValue = {} as any;

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // optional sint32 key = 1;
      case 1: {
        message.key = readVarint32ZigZag(bb);
        break;
      }

      // optional string value = 2;
      case 2: {
        message.value = readString(bb, readVarint32(bb));
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

export interface RqstLoadRole {
  sid?: string;
  name?: string;
  ip?: string;
  ipzone?: string;
}

export function encodeRqstLoadRole(message: RqstLoadRole): Uint8Array {
  let bb = popByteBuffer();
  _encodeRqstLoadRole(message, bb);
  return toUint8Array(bb);
}

function _encodeRqstLoadRole(message: RqstLoadRole, bb: ByteBuffer): void {
  // optional string sid = 1;
  let $sid = message.sid;
  if ($sid !== undefined) {
    writeVarint32(bb, 10);
    writeString(bb, $sid);
  }

  // optional string name = 2;
  let $name = message.name;
  if ($name !== undefined) {
    writeVarint32(bb, 18);
    writeString(bb, $name);
  }

  // optional string ip = 3;
  let $ip = message.ip;
  if ($ip !== undefined) {
    writeVarint32(bb, 26);
    writeString(bb, $ip);
  }

  // optional string ipzone = 4;
  let $ipzone = message.ipzone;
  if ($ipzone !== undefined) {
    writeVarint32(bb, 34);
    writeString(bb, $ipzone);
  }
}

export function decodeRqstLoadRole(binary: Uint8Array): RqstLoadRole {
  return _decodeRqstLoadRole(wrapByteBuffer(binary));
}

function _decodeRqstLoadRole(bb: ByteBuffer): RqstLoadRole {
  let message: RqstLoadRole = {} as any;

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // optional string sid = 1;
      case 1: {
        message.sid = readString(bb, readVarint32(bb));
        break;
      }

      // optional string name = 2;
      case 2: {
        message.name = readString(bb, readVarint32(bb));
        break;
      }

      // optional string ip = 3;
      case 3: {
        message.ip = readString(bb, readVarint32(bb));
        break;
      }

      // optional string ipzone = 4;
      case 4: {
        message.ipzone = readString(bb, readVarint32(bb));
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

export interface RqstLong {
  value?: Long;
}

export function encodeRqstLong(message: RqstLong): Uint8Array {
  let bb = popByteBuffer();
  _encodeRqstLong(message, bb);
  return toUint8Array(bb);
}

function _encodeRqstLong(message: RqstLong, bb: ByteBuffer): void {
  // optional sint64 value = 1;
  let $value = message.value;
  if ($value !== undefined) {
    writeVarint32(bb, 8);
    writeVarint64ZigZag(bb, $value);
  }
}

export function decodeRqstLong(binary: Uint8Array): RqstLong {
  return _decodeRqstLong(wrapByteBuffer(binary));
}

function _decodeRqstLong(bb: ByteBuffer): RqstLong {
  let message: RqstLong = {} as any;

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // optional sint64 value = 1;
      case 1: {
        message.value = readVarint64ZigZag(bb);
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

export interface RqstLookRoleTeam {
  rid?: string;
  type?: number;
  seqList?: number[];
}

export function encodeRqstLookRoleTeam(message: RqstLookRoleTeam): Uint8Array {
  let bb = popByteBuffer();
  _encodeRqstLookRoleTeam(message, bb);
  return toUint8Array(bb);
}

function _encodeRqstLookRoleTeam(message: RqstLookRoleTeam, bb: ByteBuffer): void {
  // optional string rid = 1;
  let $rid = message.rid;
  if ($rid !== undefined) {
    writeVarint32(bb, 10);
    writeString(bb, $rid);
  }

  // optional sint32 type = 2;
  let $type = message.type;
  if ($type !== undefined) {
    writeVarint32(bb, 16);
    writeVarint32ZigZag(bb, $type);
  }

  // repeated sint32 seqList = 3;
  let array$seqList = message.seqList;
  if (array$seqList !== undefined) {
    let packed = popByteBuffer();
    for (let value of array$seqList) {
      writeVarint32ZigZag(packed, value);
    }
    writeVarint32(bb, 26);
    writeVarint32(bb, packed.offset);
    writeByteBuffer(bb, packed);
    pushByteBuffer(packed);
  }
}

export function decodeRqstLookRoleTeam(binary: Uint8Array): RqstLookRoleTeam {
  return _decodeRqstLookRoleTeam(wrapByteBuffer(binary));
}

function _decodeRqstLookRoleTeam(bb: ByteBuffer): RqstLookRoleTeam {
  let message: RqstLookRoleTeam = {} as any;

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // optional string rid = 1;
      case 1: {
        message.rid = readString(bb, readVarint32(bb));
        break;
      }

      // optional sint32 type = 2;
      case 2: {
        message.type = readVarint32ZigZag(bb);
        break;
      }

      // repeated sint32 seqList = 3;
      case 3: {
        let values = message.seqList || (message.seqList = []);
        if ((tag & 7) === 2) {
          let outerLimit = pushTemporaryLength(bb);
          while (!isAtEnd(bb)) {
            values.push(readVarint32ZigZag(bb));
          }
          bb.limit = outerLimit;
        } else {
          values.push(readVarint32ZigZag(bb));
        }
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

export interface RqstMapAttack {
  startX?: number;
  startY?: number;
  destX?: number;
  destY?: number;
  teamSeq?: number[];
}

export function encodeRqstMapAttack(message: RqstMapAttack): Uint8Array {
  let bb = popByteBuffer();
  _encodeRqstMapAttack(message, bb);
  return toUint8Array(bb);
}

function _encodeRqstMapAttack(message: RqstMapAttack, bb: ByteBuffer): void {
  // optional sint32 startX = 1;
  let $startX = message.startX;
  if ($startX !== undefined) {
    writeVarint32(bb, 8);
    writeVarint32ZigZag(bb, $startX);
  }

  // optional sint32 startY = 2;
  let $startY = message.startY;
  if ($startY !== undefined) {
    writeVarint32(bb, 16);
    writeVarint32ZigZag(bb, $startY);
  }

  // optional sint32 destX = 3;
  let $destX = message.destX;
  if ($destX !== undefined) {
    writeVarint32(bb, 24);
    writeVarint32ZigZag(bb, $destX);
  }

  // optional sint32 destY = 4;
  let $destY = message.destY;
  if ($destY !== undefined) {
    writeVarint32(bb, 32);
    writeVarint32ZigZag(bb, $destY);
  }

  // repeated sint32 teamSeq = 5;
  let array$teamSeq = message.teamSeq;
  if (array$teamSeq !== undefined) {
    let packed = popByteBuffer();
    for (let value of array$teamSeq) {
      writeVarint32ZigZag(packed, value);
    }
    writeVarint32(bb, 42);
    writeVarint32(bb, packed.offset);
    writeByteBuffer(bb, packed);
    pushByteBuffer(packed);
  }
}

export function decodeRqstMapAttack(binary: Uint8Array): RqstMapAttack {
  return _decodeRqstMapAttack(wrapByteBuffer(binary));
}

function _decodeRqstMapAttack(bb: ByteBuffer): RqstMapAttack {
  let message: RqstMapAttack = {} as any;

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // optional sint32 startX = 1;
      case 1: {
        message.startX = readVarint32ZigZag(bb);
        break;
      }

      // optional sint32 startY = 2;
      case 2: {
        message.startY = readVarint32ZigZag(bb);
        break;
      }

      // optional sint32 destX = 3;
      case 3: {
        message.destX = readVarint32ZigZag(bb);
        break;
      }

      // optional sint32 destY = 4;
      case 4: {
        message.destY = readVarint32ZigZag(bb);
        break;
      }

      // repeated sint32 teamSeq = 5;
      case 5: {
        let values = message.teamSeq || (message.teamSeq = []);
        if ((tag & 7) === 2) {
          let outerLimit = pushTemporaryLength(bb);
          while (!isAtEnd(bb)) {
            values.push(readVarint32ZigZag(bb));
          }
          bb.limit = outerLimit;
        } else {
          values.push(readVarint32ZigZag(bb));
        }
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

export interface RqstMapCancelDefence {
  x?: number;
  y?: number;
  teamSeq?: number;
}

export function encodeRqstMapCancelDefence(message: RqstMapCancelDefence): Uint8Array {
  let bb = popByteBuffer();
  _encodeRqstMapCancelDefence(message, bb);
  return toUint8Array(bb);
}

function _encodeRqstMapCancelDefence(message: RqstMapCancelDefence, bb: ByteBuffer): void {
  // optional sint32 x = 1;
  let $x = message.x;
  if ($x !== undefined) {
    writeVarint32(bb, 8);
    writeVarint32ZigZag(bb, $x);
  }

  // optional sint32 y = 2;
  let $y = message.y;
  if ($y !== undefined) {
    writeVarint32(bb, 16);
    writeVarint32ZigZag(bb, $y);
  }

  // optional sint32 teamSeq = 3;
  let $teamSeq = message.teamSeq;
  if ($teamSeq !== undefined) {
    writeVarint32(bb, 24);
    writeVarint32ZigZag(bb, $teamSeq);
  }
}

export function decodeRqstMapCancelDefence(binary: Uint8Array): RqstMapCancelDefence {
  return _decodeRqstMapCancelDefence(wrapByteBuffer(binary));
}

function _decodeRqstMapCancelDefence(bb: ByteBuffer): RqstMapCancelDefence {
  let message: RqstMapCancelDefence = {} as any;

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // optional sint32 x = 1;
      case 1: {
        message.x = readVarint32ZigZag(bb);
        break;
      }

      // optional sint32 y = 2;
      case 2: {
        message.y = readVarint32ZigZag(bb);
        break;
      }

      // optional sint32 teamSeq = 3;
      case 3: {
        message.teamSeq = readVarint32ZigZag(bb);
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

export interface RqstMapDefence {
  x?: number;
  y?: number;
  teamSeq?: number[];
}

export function encodeRqstMapDefence(message: RqstMapDefence): Uint8Array {
  let bb = popByteBuffer();
  _encodeRqstMapDefence(message, bb);
  return toUint8Array(bb);
}

function _encodeRqstMapDefence(message: RqstMapDefence, bb: ByteBuffer): void {
  // optional sint32 x = 1;
  let $x = message.x;
  if ($x !== undefined) {
    writeVarint32(bb, 8);
    writeVarint32ZigZag(bb, $x);
  }

  // optional sint32 y = 2;
  let $y = message.y;
  if ($y !== undefined) {
    writeVarint32(bb, 16);
    writeVarint32ZigZag(bb, $y);
  }

  // repeated sint32 teamSeq = 3;
  let array$teamSeq = message.teamSeq;
  if (array$teamSeq !== undefined) {
    let packed = popByteBuffer();
    for (let value of array$teamSeq) {
      writeVarint32ZigZag(packed, value);
    }
    writeVarint32(bb, 26);
    writeVarint32(bb, packed.offset);
    writeByteBuffer(bb, packed);
    pushByteBuffer(packed);
  }
}

export function decodeRqstMapDefence(binary: Uint8Array): RqstMapDefence {
  return _decodeRqstMapDefence(wrapByteBuffer(binary));
}

function _decodeRqstMapDefence(bb: ByteBuffer): RqstMapDefence {
  let message: RqstMapDefence = {} as any;

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // optional sint32 x = 1;
      case 1: {
        message.x = readVarint32ZigZag(bb);
        break;
      }

      // optional sint32 y = 2;
      case 2: {
        message.y = readVarint32ZigZag(bb);
        break;
      }

      // repeated sint32 teamSeq = 3;
      case 3: {
        let values = message.teamSeq || (message.teamSeq = []);
        if ((tag & 7) === 2) {
          let outerLimit = pushTemporaryLength(bb);
          while (!isAtEnd(bb)) {
            values.push(readVarint32ZigZag(bb));
          }
          bb.limit = outerLimit;
        } else {
          values.push(readVarint32ZigZag(bb));
        }
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

export interface RqstStr {
  value?: string;
}

export function encodeRqstStr(message: RqstStr): Uint8Array {
  let bb = popByteBuffer();
  _encodeRqstStr(message, bb);
  return toUint8Array(bb);
}

function _encodeRqstStr(message: RqstStr, bb: ByteBuffer): void {
  // optional string value = 1;
  let $value = message.value;
  if ($value !== undefined) {
    writeVarint32(bb, 10);
    writeString(bb, $value);
  }
}

export function decodeRqstStr(binary: Uint8Array): RqstStr {
  return _decodeRqstStr(wrapByteBuffer(binary));
}

function _decodeRqstStr(bb: ByteBuffer): RqstStr {
  let message: RqstStr = {} as any;

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // optional string value = 1;
      case 1: {
        message.value = readString(bb, readVarint32(bb));
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

export interface RqstStrKeyStrValue {
  key?: string;
  value?: string;
}

export function encodeRqstStrKeyStrValue(message: RqstStrKeyStrValue): Uint8Array {
  let bb = popByteBuffer();
  _encodeRqstStrKeyStrValue(message, bb);
  return toUint8Array(bb);
}

function _encodeRqstStrKeyStrValue(message: RqstStrKeyStrValue, bb: ByteBuffer): void {
  // optional string key = 1;
  let $key = message.key;
  if ($key !== undefined) {
    writeVarint32(bb, 10);
    writeString(bb, $key);
  }

  // optional string value = 2;
  let $value = message.value;
  if ($value !== undefined) {
    writeVarint32(bb, 18);
    writeString(bb, $value);
  }
}

export function decodeRqstStrKeyStrValue(binary: Uint8Array): RqstStrKeyStrValue {
  return _decodeRqstStrKeyStrValue(wrapByteBuffer(binary));
}

function _decodeRqstStrKeyStrValue(bb: ByteBuffer): RqstStrKeyStrValue {
  let message: RqstStrKeyStrValue = {} as any;

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // optional string key = 1;
      case 1: {
        message.key = readString(bb, readVarint32(bb));
        break;
      }

      // optional string value = 2;
      case 2: {
        message.value = readString(bb, readVarint32(bb));
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

export interface RqstUpdateTeam {
  type?: number;
  seq?: number;
  posHid?: number[];
}

export function encodeRqstUpdateTeam(message: RqstUpdateTeam): Uint8Array {
  let bb = popByteBuffer();
  _encodeRqstUpdateTeam(message, bb);
  return toUint8Array(bb);
}

function _encodeRqstUpdateTeam(message: RqstUpdateTeam, bb: ByteBuffer): void {
  // optional sint32 type = 1;
  let $type = message.type;
  if ($type !== undefined) {
    writeVarint32(bb, 8);
    writeVarint32ZigZag(bb, $type);
  }

  // optional sint32 seq = 2;
  let $seq = message.seq;
  if ($seq !== undefined) {
    writeVarint32(bb, 16);
    writeVarint32ZigZag(bb, $seq);
  }

  // repeated sint32 posHid = 3;
  let array$posHid = message.posHid;
  if (array$posHid !== undefined) {
    let packed = popByteBuffer();
    for (let value of array$posHid) {
      writeVarint32ZigZag(packed, value);
    }
    writeVarint32(bb, 26);
    writeVarint32(bb, packed.offset);
    writeByteBuffer(bb, packed);
    pushByteBuffer(packed);
  }
}

export function decodeRqstUpdateTeam(binary: Uint8Array): RqstUpdateTeam {
  return _decodeRqstUpdateTeam(wrapByteBuffer(binary));
}

function _decodeRqstUpdateTeam(bb: ByteBuffer): RqstUpdateTeam {
  let message: RqstUpdateTeam = {} as any;

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // optional sint32 type = 1;
      case 1: {
        message.type = readVarint32ZigZag(bb);
        break;
      }

      // optional sint32 seq = 2;
      case 2: {
        message.seq = readVarint32ZigZag(bb);
        break;
      }

      // repeated sint32 posHid = 3;
      case 3: {
        let values = message.posHid || (message.posHid = []);
        if ((tag & 7) === 2) {
          let outerLimit = pushTemporaryLength(bb);
          while (!isAtEnd(bb)) {
            values.push(readVarint32ZigZag(bb));
          }
          bb.limit = outerLimit;
        } else {
          values.push(readVarint32ZigZag(bb));
        }
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

export interface RqstVerify {
  uid?: string;
  sid?: string;
  access?: string;
  refresh?: string;
  ip?: string;
}

export function encodeRqstVerify(message: RqstVerify): Uint8Array {
  let bb = popByteBuffer();
  _encodeRqstVerify(message, bb);
  return toUint8Array(bb);
}

function _encodeRqstVerify(message: RqstVerify, bb: ByteBuffer): void {
  // optional string uid = 1;
  let $uid = message.uid;
  if ($uid !== undefined) {
    writeVarint32(bb, 10);
    writeString(bb, $uid);
  }

  // optional string sid = 2;
  let $sid = message.sid;
  if ($sid !== undefined) {
    writeVarint32(bb, 18);
    writeString(bb, $sid);
  }

  // optional string access = 3;
  let $access = message.access;
  if ($access !== undefined) {
    writeVarint32(bb, 26);
    writeString(bb, $access);
  }

  // optional string refresh = 4;
  let $refresh = message.refresh;
  if ($refresh !== undefined) {
    writeVarint32(bb, 34);
    writeString(bb, $refresh);
  }

  // optional string ip = 5;
  let $ip = message.ip;
  if ($ip !== undefined) {
    writeVarint32(bb, 42);
    writeString(bb, $ip);
  }
}

export function decodeRqstVerify(binary: Uint8Array): RqstVerify {
  return _decodeRqstVerify(wrapByteBuffer(binary));
}

function _decodeRqstVerify(bb: ByteBuffer): RqstVerify {
  let message: RqstVerify = {} as any;

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // optional string uid = 1;
      case 1: {
        message.uid = readString(bb, readVarint32(bb));
        break;
      }

      // optional string sid = 2;
      case 2: {
        message.sid = readString(bb, readVarint32(bb));
        break;
      }

      // optional string access = 3;
      case 3: {
        message.access = readString(bb, readVarint32(bb));
        break;
      }

      // optional string refresh = 4;
      case 4: {
        message.refresh = readString(bb, readVarint32(bb));
        break;
      }

      // optional string ip = 5;
      case 5: {
        message.ip = readString(bb, readVarint32(bb));
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

export interface RqstXY {
  x?: number;
  y?: number;
}

export function encodeRqstXY(message: RqstXY): Uint8Array {
  let bb = popByteBuffer();
  _encodeRqstXY(message, bb);
  return toUint8Array(bb);
}

function _encodeRqstXY(message: RqstXY, bb: ByteBuffer): void {
  // optional sint32 x = 1;
  let $x = message.x;
  if ($x !== undefined) {
    writeVarint32(bb, 8);
    writeVarint32ZigZag(bb, $x);
  }

  // optional sint32 y = 2;
  let $y = message.y;
  if ($y !== undefined) {
    writeVarint32(bb, 16);
    writeVarint32ZigZag(bb, $y);
  }
}

export function decodeRqstXY(binary: Uint8Array): RqstXY {
  return _decodeRqstXY(wrapByteBuffer(binary));
}

function _decodeRqstXY(bb: ByteBuffer): RqstXY {
  let message: RqstXY = {} as any;

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // optional sint32 x = 1;
      case 1: {
        message.x = readVarint32ZigZag(bb);
        break;
      }

      // optional sint32 y = 2;
      case 2: {
        message.y = readVarint32ZigZag(bb);
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

export interface RqstXYParam {
  x?: number;
  y?: number;
  param?: number;
}

export function encodeRqstXYParam(message: RqstXYParam): Uint8Array {
  let bb = popByteBuffer();
  _encodeRqstXYParam(message, bb);
  return toUint8Array(bb);
}

function _encodeRqstXYParam(message: RqstXYParam, bb: ByteBuffer): void {
  // optional sint32 x = 1;
  let $x = message.x;
  if ($x !== undefined) {
    writeVarint32(bb, 8);
    writeVarint32ZigZag(bb, $x);
  }

  // optional sint32 y = 2;
  let $y = message.y;
  if ($y !== undefined) {
    writeVarint32(bb, 16);
    writeVarint32ZigZag(bb, $y);
  }

  // optional sint32 param = 3;
  let $param = message.param;
  if ($param !== undefined) {
    writeVarint32(bb, 24);
    writeVarint32ZigZag(bb, $param);
  }
}

export function decodeRqstXYParam(binary: Uint8Array): RqstXYParam {
  return _decodeRqstXYParam(wrapByteBuffer(binary));
}

function _decodeRqstXYParam(bb: ByteBuffer): RqstXYParam {
  let message: RqstXYParam = {} as any;

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // optional sint32 x = 1;
      case 1: {
        message.x = readVarint32ZigZag(bb);
        break;
      }

      // optional sint32 y = 2;
      case 2: {
        message.y = readVarint32ZigZag(bb);
        break;
      }

      // optional sint32 param = 3;
      case 3: {
        message.param = readVarint32ZigZag(bb);
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

export interface Long {
  low: number;
  high: number;
  unsigned: boolean;
}

interface ByteBuffer {
  bytes: Uint8Array;
  offset: number;
  limit: number;
}

function pushTemporaryLength(bb: ByteBuffer): number {
  let length = readVarint32(bb);
  let limit = bb.limit;
  bb.limit = bb.offset + length;
  return limit;
}

function skipUnknownField(bb: ByteBuffer, type: number): void {
  switch (type) {
    case 0: while (readByte(bb) & 0x80) { } break;
    case 2: skip(bb, readVarint32(bb)); break;
    case 5: skip(bb, 4); break;
    case 1: skip(bb, 8); break;
    default: throw new Error("Unimplemented type: " + type);
  }
}

function stringToLong(value: string): Long {
  return {
    low: value.charCodeAt(0) | (value.charCodeAt(1) << 16),
    high: value.charCodeAt(2) | (value.charCodeAt(3) << 16),
    unsigned: false,
  };
}

function longToString(value: Long): string {
  let low = value.low;
  let high = value.high;
  return String.fromCharCode(
    low & 0xFFFF,
    low >>> 16,
    high & 0xFFFF,
    high >>> 16);
}

// The code below was modified from https://github.com/protobufjs/bytebuffer.js
// which is under the Apache License 2.0.

let f32 = new Float32Array(1);
let f32_u8 = new Uint8Array(f32.buffer);

let f64 = new Float64Array(1);
let f64_u8 = new Uint8Array(f64.buffer);

function intToLong(value: number): Long {
  value |= 0;
  return {
    low: value,
    high: value >> 31,
    unsigned: value >= 0,
  };
}

let bbStack: ByteBuffer[] = [];

function popByteBuffer(): ByteBuffer {
  const bb = bbStack.pop();
  if (!bb) return { bytes: new Uint8Array(64), offset: 0, limit: 0 };
  bb.offset = bb.limit = 0;
  return bb;
}

function pushByteBuffer(bb: ByteBuffer): void {
  bbStack.push(bb);
}

function wrapByteBuffer(bytes: Uint8Array): ByteBuffer {
  return { bytes, offset: 0, limit: bytes.length };
}

function toUint8Array(bb: ByteBuffer): Uint8Array {
  let bytes = bb.bytes;
  let limit = bb.limit;
  return bytes.length === limit ? bytes : bytes.subarray(0, limit);
}

function skip(bb: ByteBuffer, offset: number): void {
  if (bb.offset + offset > bb.limit) {
    throw new Error('Skip past limit');
  }
  bb.offset += offset;
}

function isAtEnd(bb: ByteBuffer): boolean {
  return bb.offset >= bb.limit;
}

function grow(bb: ByteBuffer, count: number): number {
  let bytes = bb.bytes;
  let offset = bb.offset;
  let limit = bb.limit;
  let finalOffset = offset + count;
  if (finalOffset > bytes.length) {
    let newBytes = new Uint8Array(finalOffset * 2);
    newBytes.set(bytes);
    bb.bytes = newBytes;
  }
  bb.offset = finalOffset;
  if (finalOffset > limit) {
    bb.limit = finalOffset;
  }
  return offset;
}

function advance(bb: ByteBuffer, count: number): number {
  let offset = bb.offset;
  if (offset + count > bb.limit) {
    throw new Error('Read past limit');
  }
  bb.offset += count;
  return offset;
}

function readBytes(bb: ByteBuffer, count: number): Uint8Array {
  let offset = advance(bb, count);
  return bb.bytes.subarray(offset, offset + count);
}

function writeBytes(bb: ByteBuffer, buffer: Uint8Array): void {
  let offset = grow(bb, buffer.length);
  bb.bytes.set(buffer, offset);
}

function readString(bb: ByteBuffer, count: number): string {
  // Sadly a hand-coded UTF8 decoder is much faster than subarray+TextDecoder in V8
  let offset = advance(bb, count);
  let fromCharCode = String.fromCharCode;
  let bytes = bb.bytes;
  let invalid = '\uFFFD';
  let text = '';

  for (let i = 0; i < count; i++) {
    let c1 = bytes[i + offset], c2: number, c3: number, c4: number, c: number;

    // 1 byte
    if ((c1 & 0x80) === 0) {
      text += fromCharCode(c1);
    }

    // 2 bytes
    else if ((c1 & 0xE0) === 0xC0) {
      if (i + 1 >= count) text += invalid;
      else {
        c2 = bytes[i + offset + 1];
        if ((c2 & 0xC0) !== 0x80) text += invalid;
        else {
          c = ((c1 & 0x1F) << 6) | (c2 & 0x3F);
          if (c < 0x80) text += invalid;
          else {
            text += fromCharCode(c);
            i++;
          }
        }
      }
    }

    // 3 bytes
    else if ((c1 & 0xF0) == 0xE0) {
      if (i + 2 >= count) text += invalid;
      else {
        c2 = bytes[i + offset + 1];
        c3 = bytes[i + offset + 2];
        if (((c2 | (c3 << 8)) & 0xC0C0) !== 0x8080) text += invalid;
        else {
          c = ((c1 & 0x0F) << 12) | ((c2 & 0x3F) << 6) | (c3 & 0x3F);
          if (c < 0x0800 || (c >= 0xD800 && c <= 0xDFFF)) text += invalid;
          else {
            text += fromCharCode(c);
            i += 2;
          }
        }
      }
    }

    // 4 bytes
    else if ((c1 & 0xF8) == 0xF0) {
      if (i + 3 >= count) text += invalid;
      else {
        c2 = bytes[i + offset + 1];
        c3 = bytes[i + offset + 2];
        c4 = bytes[i + offset + 3];
        if (((c2 | (c3 << 8) | (c4 << 16)) & 0xC0C0C0) !== 0x808080) text += invalid;
        else {
          c = ((c1 & 0x07) << 0x12) | ((c2 & 0x3F) << 0x0C) | ((c3 & 0x3F) << 0x06) | (c4 & 0x3F);
          if (c < 0x10000 || c > 0x10FFFF) text += invalid;
          else {
            c -= 0x10000;
            text += fromCharCode((c >> 10) + 0xD800, (c & 0x3FF) + 0xDC00);
            i += 3;
          }
        }
      }
    }

    else text += invalid;
  }

  return text;
}

function writeString(bb: ByteBuffer, text: string): void {
  // Sadly a hand-coded UTF8 encoder is much faster than TextEncoder+set in V8
  let n = text.length;
  let byteCount = 0;

  // Write the byte count first
  for (let i = 0; i < n; i++) {
    let c = text.charCodeAt(i);
    if (c >= 0xD800 && c <= 0xDBFF && i + 1 < n) {
      c = (c << 10) + text.charCodeAt(++i) - 0x35FDC00;
    }
    byteCount += c < 0x80 ? 1 : c < 0x800 ? 2 : c < 0x10000 ? 3 : 4;
  }
  writeVarint32(bb, byteCount);

  let offset = grow(bb, byteCount);
  let bytes = bb.bytes;

  // Then write the bytes
  for (let i = 0; i < n; i++) {
    let c = text.charCodeAt(i);
    if (c >= 0xD800 && c <= 0xDBFF && i + 1 < n) {
      c = (c << 10) + text.charCodeAt(++i) - 0x35FDC00;
    }
    if (c < 0x80) {
      bytes[offset++] = c;
    } else {
      if (c < 0x800) {
        bytes[offset++] = ((c >> 6) & 0x1F) | 0xC0;
      } else {
        if (c < 0x10000) {
          bytes[offset++] = ((c >> 12) & 0x0F) | 0xE0;
        } else {
          bytes[offset++] = ((c >> 18) & 0x07) | 0xF0;
          bytes[offset++] = ((c >> 12) & 0x3F) | 0x80;
        }
        bytes[offset++] = ((c >> 6) & 0x3F) | 0x80;
      }
      bytes[offset++] = (c & 0x3F) | 0x80;
    }
  }
}

function writeByteBuffer(bb: ByteBuffer, buffer: ByteBuffer): void {
  let offset = grow(bb, buffer.limit);
  let from = bb.bytes;
  let to = buffer.bytes;

  // This for loop is much faster than subarray+set on V8
  for (let i = 0, n = buffer.limit; i < n; i++) {
    from[i + offset] = to[i];
  }
}

function readByte(bb: ByteBuffer): number {
  return bb.bytes[advance(bb, 1)];
}

function writeByte(bb: ByteBuffer, value: number): void {
  let offset = grow(bb, 1);
  bb.bytes[offset] = value;
}

function readFloat(bb: ByteBuffer): number {
  let offset = advance(bb, 4);
  let bytes = bb.bytes;

  // Manual copying is much faster than subarray+set in V8
  f32_u8[0] = bytes[offset++];
  f32_u8[1] = bytes[offset++];
  f32_u8[2] = bytes[offset++];
  f32_u8[3] = bytes[offset++];
  return f32[0];
}

function writeFloat(bb: ByteBuffer, value: number): void {
  let offset = grow(bb, 4);
  let bytes = bb.bytes;
  f32[0] = value;

  // Manual copying is much faster than subarray+set in V8
  bytes[offset++] = f32_u8[0];
  bytes[offset++] = f32_u8[1];
  bytes[offset++] = f32_u8[2];
  bytes[offset++] = f32_u8[3];
}

function readDouble(bb: ByteBuffer): number {
  let offset = advance(bb, 8);
  let bytes = bb.bytes;

  // Manual copying is much faster than subarray+set in V8
  f64_u8[0] = bytes[offset++];
  f64_u8[1] = bytes[offset++];
  f64_u8[2] = bytes[offset++];
  f64_u8[3] = bytes[offset++];
  f64_u8[4] = bytes[offset++];
  f64_u8[5] = bytes[offset++];
  f64_u8[6] = bytes[offset++];
  f64_u8[7] = bytes[offset++];
  return f64[0];
}

function writeDouble(bb: ByteBuffer, value: number): void {
  let offset = grow(bb, 8);
  let bytes = bb.bytes;
  f64[0] = value;

  // Manual copying is much faster than subarray+set in V8
  bytes[offset++] = f64_u8[0];
  bytes[offset++] = f64_u8[1];
  bytes[offset++] = f64_u8[2];
  bytes[offset++] = f64_u8[3];
  bytes[offset++] = f64_u8[4];
  bytes[offset++] = f64_u8[5];
  bytes[offset++] = f64_u8[6];
  bytes[offset++] = f64_u8[7];
}

function readInt32(bb: ByteBuffer): number {
  let offset = advance(bb, 4);
  let bytes = bb.bytes;
  return (
    bytes[offset] |
    (bytes[offset + 1] << 8) |
    (bytes[offset + 2] << 16) |
    (bytes[offset + 3] << 24)
  );
}

function writeInt32(bb: ByteBuffer, value: number): void {
  let offset = grow(bb, 4);
  let bytes = bb.bytes;
  bytes[offset] = value;
  bytes[offset + 1] = value >> 8;
  bytes[offset + 2] = value >> 16;
  bytes[offset + 3] = value >> 24;
}

function readInt64(bb: ByteBuffer, unsigned: boolean): Long {
  return {
    low: readInt32(bb),
    high: readInt32(bb),
    unsigned,
  };
}

function writeInt64(bb: ByteBuffer, value: Long): void {
  writeInt32(bb, value.low);
  writeInt32(bb, value.high);
}

function readVarint32(bb: ByteBuffer): number {
  let c = 0;
  let value = 0;
  let b: number;
  do {
    b = readByte(bb);
    if (c < 32) value |= (b & 0x7F) << c;
    c += 7;
  } while (b & 0x80);
  return value;
}

function writeVarint32(bb: ByteBuffer, value: number): void {
  value >>>= 0;
  while (value >= 0x80) {
    writeByte(bb, (value & 0x7f) | 0x80);
    value >>>= 7;
  }
  writeByte(bb, value);
}

function readVarint64(bb: ByteBuffer, unsigned: boolean): Long {
  let part0 = 0;
  let part1 = 0;
  let part2 = 0;
  let b: number;

  b = readByte(bb); part0 = (b & 0x7F); if (b & 0x80) {
    b = readByte(bb); part0 |= (b & 0x7F) << 7; if (b & 0x80) {
      b = readByte(bb); part0 |= (b & 0x7F) << 14; if (b & 0x80) {
        b = readByte(bb); part0 |= (b & 0x7F) << 21; if (b & 0x80) {

          b = readByte(bb); part1 = (b & 0x7F); if (b & 0x80) {
            b = readByte(bb); part1 |= (b & 0x7F) << 7; if (b & 0x80) {
              b = readByte(bb); part1 |= (b & 0x7F) << 14; if (b & 0x80) {
                b = readByte(bb); part1 |= (b & 0x7F) << 21; if (b & 0x80) {

                  b = readByte(bb); part2 = (b & 0x7F); if (b & 0x80) {
                    b = readByte(bb); part2 |= (b & 0x7F) << 7;
                  }
                }
              }
            }
          }
        }
      }
    }
  }

  return {
    low: part0 | (part1 << 28),
    high: (part1 >>> 4) | (part2 << 24),
    unsigned,
  };
}

function writeVarint64(bb: ByteBuffer, value: Long): void {
  let part0 = value.low >>> 0;
  let part1 = ((value.low >>> 28) | (value.high << 4)) >>> 0;
  let part2 = value.high >>> 24;

  // ref: src/google/protobuf/io/coded_stream.cc
  let size =
    part2 === 0 ?
      part1 === 0 ?
        part0 < 1 << 14 ?
          part0 < 1 << 7 ? 1 : 2 :
          part0 < 1 << 21 ? 3 : 4 :
        part1 < 1 << 14 ?
          part1 < 1 << 7 ? 5 : 6 :
          part1 < 1 << 21 ? 7 : 8 :
      part2 < 1 << 7 ? 9 : 10;

  let offset = grow(bb, size);
  let bytes = bb.bytes;

  switch (size) {
    case 10: bytes[offset + 9] = (part2 >>> 7) & 0x01;
    case 9: bytes[offset + 8] = size !== 9 ? part2 | 0x80 : part2 & 0x7F;
    case 8: bytes[offset + 7] = size !== 8 ? (part1 >>> 21) | 0x80 : (part1 >>> 21) & 0x7F;
    case 7: bytes[offset + 6] = size !== 7 ? (part1 >>> 14) | 0x80 : (part1 >>> 14) & 0x7F;
    case 6: bytes[offset + 5] = size !== 6 ? (part1 >>> 7) | 0x80 : (part1 >>> 7) & 0x7F;
    case 5: bytes[offset + 4] = size !== 5 ? part1 | 0x80 : part1 & 0x7F;
    case 4: bytes[offset + 3] = size !== 4 ? (part0 >>> 21) | 0x80 : (part0 >>> 21) & 0x7F;
    case 3: bytes[offset + 2] = size !== 3 ? (part0 >>> 14) | 0x80 : (part0 >>> 14) & 0x7F;
    case 2: bytes[offset + 1] = size !== 2 ? (part0 >>> 7) | 0x80 : (part0 >>> 7) & 0x7F;
    case 1: bytes[offset] = size !== 1 ? part0 | 0x80 : part0 & 0x7F;
  }
}

function readVarint32ZigZag(bb: ByteBuffer): number {
  let value = readVarint32(bb);

  // ref: src/google/protobuf/wire_format_lite.h
  return (value >>> 1) ^ -(value & 1);
}

function writeVarint32ZigZag(bb: ByteBuffer, value: number): void {
  // ref: src/google/protobuf/wire_format_lite.h
  writeVarint32(bb, (value << 1) ^ (value >> 31));
}

function readVarint64ZigZag(bb: ByteBuffer): Long {
  let value = readVarint64(bb, /* unsigned */ false);
  let low = value.low;
  let high = value.high;
  let flip = -(low & 1);

  // ref: src/google/protobuf/wire_format_lite.h
  return {
    low: ((low >>> 1) | (high << 31)) ^ flip,
    high: (high >>> 1) ^ flip,
    unsigned: false,
  };
}

function writeVarint64ZigZag(bb: ByteBuffer, value: Long): void {
  let low = value.low;
  let high = value.high;
  let flip = high >> 31;

  // ref: src/google/protobuf/wire_format_lite.h
  writeVarint64(bb, {
    low: (low << 1) ^ flip,
    high: ((high << 1) | (low >>> 31)) ^ flip,
    unsigned: false,
  });
}
