import { BitConvert } from "./BitConvert";

export class MiniDataUtil {
    private static   TYPE_MASK:number = 0b1_0_000000;

	private static   DATA_TYPE_STR:number = 0b1_0000000;
	private static   STR_LEN_MASK:number = 0b0_1111111;
	private static   STR_MAX_LEN:number = 0b0_1111111;

	private static   DATA_TYPE_NUM:number = 0b0_000_0000;

	private static   _1BYTES_NUM_MAX_VAL:number = 0b0_000_1111;// 15
	private static   _7BYTES_NUM_MAX_VAL:number = 0b0_000_1111_11111111_11111111_11111111_11111111_11111111_11111111;// 4,503,599,627,370,495

	public static   _1BYTES_NUM_TYPE:number = 0b0_000_0000;
	public static   _2BYTES_NUM_TYPE:number = 0b0_001_0000;
	public static   _3BYTES_NUM_TYPE:number = 0b0_010_0000;
	public static   _4BYTES_NUM_TYPE:number = 0b0_011_0000;
	public static   _5BYTES_NUM_TYPE:number = 0b0_100_0000;
	public static   _6BYTES_NUM_TYPE:number = 0b0_101_0000;
	public static   _7BYTES_NUM_TYPE:number = 0b0_110_0000;
	public static   _8BYTES_NUM_TYPE:number = 0b0_111_0000;

	public static   NUM_TYPE_MASK:number = 0b0_111_0000;// numBytes = (head&NUM_TYPE_MASK)>>>4
	public static   HEAD_NUM_MASK:number = 0b0_000_1111;

    private static   ZERO_LEN_BYTES:number[] = [];

    public static  GetStringDataDscrpt(strBytes:number[]):MiniDataDecryptHead {
		let ret:number = 0;
		ret |= MiniDataUtil.DATA_TYPE_STR;
		let len:number = -1;
		if (strBytes != null) {
			len = strBytes.length;
			if (len >MiniDataUtil. STR_MAX_LEN)
				throw new console.error(("data is too long, only support len"+ MiniDataUtil.STR_MAX_LEN+"s data"));
                
			ret |= len;
		} else {
			strBytes = MiniDataUtil.ZERO_LEN_BYTES;
		}
		return new MiniDataDecryptHead(ret, strBytes);
	}

	
	public static  GetIntDataDscrptHead(num:number):MiniDataDecryptHead {
		if (num < 0)
			throw new console.error("only support positive data");
            
		let headByte:number = 0;
		let tailByteLen:number = 0;
		let tailBytes:number[] = MiniDataUtil.ZERO_LEN_BYTES;
		if (num <= MiniDataUtil._1BYTES_NUM_MAX_VAL) {
			headByte |= num;
		} else {
			tailByteLen = 1;
			headByte |= (num & 0b1111);
			num = (num >>> 4);
			let temp:number = num;
			while (true) {
				if ((temp >>>= 8) == 0)
					break;
				tailByteLen++;
			}
			tailBytes = [tailByteLen];
			temp = 0;
			while (true) {
				tailBytes[temp++] =  (num & 0b11111111);
				num >>>= 8;
				if (num == 0)
					break;
			}
		}
		headByte |= (tailByteLen << 4);
		return new MiniDataDecryptHead(headByte, tailBytes);
	}

	public static  GetLongDataDscrptHead( num:number): MiniDataDecryptHead{
		if (num < 0)
			throw new console.error("only support positive data");
		let headByte:number = 0;
		let tailByteLen:number = 0;
		let tailBytes = MiniDataUtil.ZERO_LEN_BYTES;
		if (num <= MiniDataUtil._1BYTES_NUM_MAX_VAL) {
			headByte |= num;
		} else {
			if (num <= MiniDataUtil._7BYTES_NUM_MAX_VAL) {
				tailByteLen = 1;
				headByte |= (num & 0b1111);
				num = (num >>> 4);
				let temp:number = num;
				while (true) {
					if ((temp >>>= 8) == 0) {
						break;
					}
					tailByteLen++;
				}
			} else {
				tailByteLen = 8;
			}
			tailBytes = [tailByteLen];
			let temp:number = 0;
			while (true) {
				tailBytes[temp++] =  (num & 0b11111111);
				num >>>= 8;
				if (num == 0)
					break;
			}
		}
		headByte |= (tailByteLen << 4);
		return new MiniDataDecryptHead(headByte, tailBytes);
	}


	public static  GetMiniData ( dscrptByte:number, bytesSupplier:Function):any {
		
		let type:number = (dscrptByte & MiniDataUtil.TYPE_MASK);

		let tailLen :number = -1;
		
		let bytes:number[] = new Array;
		switch (type) {
		case MiniDataUtil.DATA_TYPE_STR:
			tailLen = dscrptByte & MiniDataUtil.STR_LEN_MASK;
			if (tailLen > 0) {
				bytes = new Array(tailLen);
				bytes=bytesSupplier(bytes);		
				let uint8=BitConvert.GetInstance().NumberArrayToByte(bytes);
				uint8.pos=0;
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

				bytes= bytesSupplier(bytes);
				console.log("bytes",bytes);
				if (tailLen <= 3) {
					let data : number = dscrptByte & MiniDataUtil.HEAD_NUM_MASK;

					for ( let i = 0, shift = 4; i < tailLen; i++, shift += 8) {
						data = data | ((bytes[i] & 0xFF) << shift);
					}
					return data;
				} else {
					let lte7Bytes:boolean = tailLen <= 6;
					let data:number = lte7Bytes ? dscrptByte & MiniDataUtil.HEAD_NUM_MASK : 0;
					console.log("data",data);
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
export class MiniDataDecryptHead
{
    private headByte:number;

    private tailBytes:number[];

    constructor (headByte:number,tailBytes:number[]){
        this.SetHeadByte(headByte);
        this.SetTailBytes(tailBytes);
    }
   
    public GetHeadByte():number
    {
        return this.headByte;
    }

    public SetHeadByte(headByte:number)
    {
        this.headByte = headByte;
    }

 
    public  GetTailBytes():number[]
    {
        return this.tailBytes;
    }

    public  SetTailBytes(tailBytes:number[])
    {
        this.tailBytes = tailBytes;
    }
}		