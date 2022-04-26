
export class SurvivalMatchIntegralConfig {

    private constructor() {
    }
    
    public static Instance : SurvivalMatchIntegralConfig;

    public static GetInstance(): SurvivalMatchIntegralConfig
    {
        if(this.Instance==null){
            this.Instance=new SurvivalMatchIntegralConfig ();
        }
        return this.Instance
    }

    public Data=new Map(
        [
    			["id_30300001",new SurvivalMatchIntegral(30300001,1,[200, 120, 60, -50, -75, -100],[220, 132, 66, -45, -68, -90],[240, 144, 72, -40, -60, -80],[0, 0, 0, 0, 0, 0])],
				["id_30300002",new SurvivalMatchIntegral(30300002,2,[0, 0, 0, 0, 0, 0],[200, 108, 54, -50, -75, -100],[0, 0, 0, 0, 0, 0],[0, 0, 0, 0, 0, 0])],
				["id_30300003",new SurvivalMatchIntegral(30300003,3,[0, 0, 0, 0, 0, 0],[0, 0, 0, 0, 0, 0],[200, 96, 48, -60, -90, -120],[0, 0, 0, 0, 0, 0])],
				["id_30300004",new SurvivalMatchIntegral(30300004,4,[0, 0, 0, 0, 0, 0],[0, 0, 0, 0, 0, 0],[0, 0, 0, 0, 0, 0],[190, 84, 42, -70, -105, -140])],
	
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

export class SurvivalMatchIntegral {
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