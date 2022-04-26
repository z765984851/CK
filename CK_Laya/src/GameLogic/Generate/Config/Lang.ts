
export class LangConfig {

    private constructor() {
    }
    
    public static Instance : LangConfig;

    public static GetInstance(): LangConfig
    {
        if(this.Instance==null){
            this.Instance=new LangConfig ();
        }
        return this.Instance
    }

    public Data=new Map(
        [
    			["id_102000011",new Lang(102000011,"Steel")],
				["id_102000021",new Lang(102000021,"Rock")],
				["id_102000031",new Lang(102000031,"Wood")],
				["id_102000041",new Lang(102000041,"Dragon")],
				["id_301000011",new Lang(301000011,"Bronze")],
				["id_301000021",new Lang(301000021,"Silver")],
				["id_301000031",new Lang(301000031,"Gold")],
				["id_301000041",new Lang(301000041,"Platnum")],
	
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

export class Lang {
    public	id:number;
	public	text:string;
	
    constructor(
		id:number,
		text:string,) {
    
    	this.id=id;
		this.text=text;
	
    }
}