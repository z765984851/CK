
export class IntegralLevelConfig {

    private constructor() {
    }
    
    public static Instance : IntegralLevelConfig;

    public static GetInstance(): IntegralLevelConfig
    {
        if(this.Instance==null){
            this.Instance=new IntegralLevelConfig ();
        }
        return this.Instance
    }

    public Data=new Map(
        [
    			["id_30100001",new IntegralLevel(30100001,1,301000011,[0, 1199],"ui://4kxumucabhs67")],
				["id_30100002",new IntegralLevel(30100002,2,301000021,[1200, 2799],"ui://4kxumucabhs68")],
				["id_30100003",new IntegralLevel(30100003,3,301000031,[2800, 4799],"ui://4kxumucabhs69")],
				["id_30100004",new IntegralLevel(30100004,4,301000041,[4800, 7199],"ui://4kxumucabhs6a")],
	
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

export class IntegralLevel {
    public	id:number;
	public	level:number;
	public	rankLang:number;
	public	integral:Array<number>;
	public	rankIcon:string;
	
    constructor(
		id:number,
		level:number,
		rankLang:number,
		integral:Array<number>,
		rankIcon:string,) {
    
    	this.id=id;
		this.level=level;
		this.rankLang=rankLang;
		this.integral=integral;
		this.rankIcon=rankIcon;
	
    }
}