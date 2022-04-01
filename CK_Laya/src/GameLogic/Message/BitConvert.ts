export class BitConvert {

    private byte=new Laya.Byte();
    private constructor() {
        this.byte=new Laya.Byte();
        this.byte.endian=Laya.Byte.LITTLE_ENDIAN;
    }

    public static Instance : BitConvert;
    public static GetInstance(): BitConvert
    {
        if(this.Instance==null){
            this.Instance=new BitConvert ();
        }
        return this.Instance;
    }


    
    public IntToByteArray(int:number):number[]
    {

        this.byte.clear();
        this.byte.writeInt32(int);
        let array:Uint8Array =this.byte.readUint8Array(0,this.byte.length);
        let result:number[]=[this.byte.length];
        for (let index = 0; index < array.length; index++) {
            const element = array[index];
            result[index]=element;
        }
        return result;

    }

    public StringToByteArray(str:string):number[]
    {

        this.byte.clear();
        this.byte.writeUTFString(str);
        let array:Uint8Array =this.byte.readUint8Array(0,this.byte.length);
        let result:number[]=[this.byte.length];
        for (let index = 0; index < array.length; index++) {
            const element = array[index];
            result[index]=element;
        }
        return result;

    }

    public ByteArrayToNumberArray(arr:Uint8Array):number[]
    {

        let numberArray:number[]=[arr.length];
        for (let index = 0; index < arr.length; index++) {
            const element = arr[index];
            numberArray[index]=element;
        }
        return numberArray;

    }

    public NumberArrayToByte(arr:number[]):Laya.Byte
    {
        let byte=new Laya.Byte();
        for (let index = 0; index < arr.length; index++) {
            const element = arr[index];
           byte.writeByte(element);
        }
        byte.pos=0;
        return byte;
    }

    public NumberArrayToByteArray(arr:number[]):Uint8Array
    {
        let byte=this.NumberArrayToByte(arr);
        let bytes=byte.getUint8Array(0,byte.length);
        return bytes;
    }

   



}
