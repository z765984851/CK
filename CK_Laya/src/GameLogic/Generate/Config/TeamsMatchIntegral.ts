
export class TeamsMatchIntegralConfig {

    private constructor() {
    }
    
    public static Instance : TeamsMatchIntegralConfig;

    public static GetInstance(): TeamsMatchIntegralConfig
    {
        if(this.Instance==null){
            this.Instance=new TeamsMatchIntegralConfig ();
        }
        return this.Instance
    }

    public Data=new Map(
        [
    			["id_30200001",new TeamsMatchIntegral(30200001,1,[100, -50, 0],[110, -45, 0],[120, -40, 0],[0, 0, 0])],
				["id_30200002",new TeamsMatchIntegral(30200002,2,[0, 0, 0],[90, -50, 0],[0, 0, 0],[0, 0, 0])],
				["id_30200003",new TeamsMatchIntegral(30200003,3,[0, 0, 0],[0, 0, 0],[80, -60, 0],[0, 0, 0])],
				["id_30200004",new TeamsMatchIntegral(30200004,4,[0, 0, 0],[0, 0, 0],[0, 0, 0],[70, -70, 0])],
	
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

export class TeamsMatchIntegral {
    public	id:number;
	public	level:number;
	public	bronzeRoom:Array<number>;
	public	silverRoom:Array<number>;
	public	goldRoom:Array<number>;
	public	platinumRoom:Array<number>;
	
    constructor(
		id:number,
		level:number,
		bronzeRoom:Array<number>,
		silverRoom:Array<number>,
		goldRoom:Array<number>,
		platinumRoom:Array<number>,) {
    
    	this.id=id;
		this.level=level;
		this.bronzeRoom=bronzeRoom;
		this.silverRoom=silverRoom;
		this.goldRoom=goldRoom;
		this.platinumRoom=platinumRoom;
	
    }
}