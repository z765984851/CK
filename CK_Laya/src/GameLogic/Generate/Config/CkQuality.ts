
export class CkQualityConfig {

    private constructor() {
    }
    
    public static Instance : CkQualityConfig;

    public static GetInstance(): CkQualityConfig
    {
        if(this.Instance==null){
            this.Instance=new CkQualityConfig ();
        }
        return this.Instance
    }

    public Data=new Map(
        [
    			["id_10300001",new CkQuality(10300001,1,"ui://hhm821bghasgb","ui://4kxumucakncbqx")],
				["id_10300002",new CkQuality(10300002,2,"ui://hhm821bghasgc","ui://4kxumucakncbqy")],
				["id_10300003",new CkQuality(10300003,3,"ui://hhm821bghasgd","ui://4kxumucakncbqz")],
				["id_10300004",new CkQuality(10300004,4,"ui://hhm821bghasge","ui://4kxumucakncbr0")],
	
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

export class CkQuality {
    public	id:number;
	public	qualityType:number;
	public	qualityIcon:string;
	public	beltIcon:string;
	
    constructor(
		id:number,
		qualityType:number,
		qualityIcon:string,
		beltIcon:string,) {
    
    	this.id=id;
		this.qualityType=qualityType;
		this.qualityIcon=qualityIcon;
		this.beltIcon=beltIcon;
	
    }
}