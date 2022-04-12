export class ErrorConfig {
    private constructor() {
    }
    public static Instance : ErrorConfig;

    public static GetInstance(): ErrorConfig
    {
        if(this.Instance==null){
            this.Instance=new ErrorConfig ();
        }
        return this.Instance
    }

    public Data=new Map(
        [
            ["id_1001" , new Error(1001,143001,0,5)],
            ["id_1002" , new Error(1002,143002,0,5)],
            ["id_1003" , new Error(1003,143003,0,5)],

        ]
    );

    public GetData(Id)
    {

        let data=this.Data.get("id_"+Id);
        if (data!=null) {
            return data;
        }
        return null;
    }

}


export class Error
{
    public Id:number;
    public Lang:number;
    public Color:number;
    public Type:number;

    constructor(Id:number,Lang:number, Color:number,Type:number) {
        
        this.Id=Id;
        this.Lang=Lang;
        this.Color=Color;
        this.Type=Type;

    }

}