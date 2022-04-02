

import { SocketClient } from "../Message/SocketClient";
export default class GameManager extends Laya.Script {

    constructor() {
        super();
    }

    public onAwake():void {

        SocketClient.GetInstance().ServerId="5001";
        SocketClient.GetInstance().IP="192.168.10.26";
        SocketClient.GetInstance().Port=8088;
        SocketClient.GetInstance().Connect();
        
        // let bytes=new Laya.Byte()
        // bytes.writeUTFString("aaaaaaa");
        // console.log(bytes);
        // bytes.pos=0;
        // // let number=bytes.getUint8Array(0,bytes.length);
        // // console.log(number);
        // console.log(bytes.getUTFString());
        
    }
}