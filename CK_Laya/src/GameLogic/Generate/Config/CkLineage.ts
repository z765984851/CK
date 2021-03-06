
export class CkLineageConfig {

    private constructor() {
    }
    
    public static Instance : CkLineageConfig;

    public static GetInstance(): CkLineageConfig
    {
        if(this.Instance==null){
            this.Instance=new CkLineageConfig ();
        }
        return this.Instance
    }

    public Data=new Map(
        [
    			["id_10200001",new CkLineage(10200001,1,"ui://hhm821bghasg2","ui://4kxumucakncbqu","FeBall.lh")],
				["id_10200002",new CkLineage(10200002,2,"ui://hhm821bghasg1","ui://4kxumucakncbqv","StoneBall.lh")],
				["id_10200003",new CkLineage(10200003,3,"ui://hhm821bghasg0","ui://4kxumucakncbqt","WoodBall.lh")],
				["id_10200004",new CkLineage(10200004,4,"ui://hhm821bghasg3","ui://4kxumucakncbqw","DragonBall.lh")],
	
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

export class CkLineage {
    public	id:number;
	public	lineageType:number;
	public	lineageIcon:string;
	public	ballIcon:string;
	public	ballType:string;
	
    constructor(
		id:number,
		lineageType:number,
		lineageIcon:string,
		ballIcon:string,
		ballType:string,) {
    
    	this.id=id;
		this.lineageType=lineageType;
		this.lineageIcon=lineageIcon;
		this.ballIcon=ballIcon;
		this.ballType=ballType;
	
    }
}