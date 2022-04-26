
export class ChampionshipConfig {

    private constructor() {
    }
    
    public static Instance : ChampionshipConfig;

    public static GetInstance(): ChampionshipConfig
    {
        if(this.Instance==null){
            this.Instance=new ChampionshipConfig ();
        }
        return this.Instance
    }

    public Data=new Map(
        [
    			["id_30401001",new Championship(30401001,1,12,[0, 0, 0, 0],[0, 120, 60, 30],30401002)],
				["id_30401002",new Championship(30401002,1,18,[0, 180, 90, 45],[0, 180, 90, 45],30402001)],
				["id_30402001",new Championship(30402001,2,12,[0, 0, 0, 0],[0, 120, 60, 30],30403001)],
				["id_30403001",new Championship(30403001,3,13,[0, 120, 60, 30],[0, 0, 0, 0],30404001)],
				["id_30404001",new Championship(30404001,4,14,[0, 0, 0, 0],[0, 120, 60, 30],30405001)],
				["id_30405001",new Championship(30405001,5,15,[0, 120, 60, 30],[0, 0, 0, 0],30406001)],
				["id_30406001",new Championship(30406001,6,16,[0, 0, 0, 0],[0, 120, 60, 30],30407001)],
				["id_30407001",new Championship(30407001,7,17,[0, 120, 60, 30],[0, 0, 0, 0],30401001)],
	
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

export class Championship {
    public	id:number;
	public	dayOfWeek:number;
	public	startHour:number;
	public	survivalPeoples:Array<number>;
	public	teamPeoples:Array<number>;
	public	nextId:number;
	
    constructor(
		id:number,
		dayOfWeek:number,
		startHour:number,
		survivalPeoples:Array<number>,
		teamPeoples:Array<number>,
		nextId:number,) {
    
    	this.id=id;
		this.dayOfWeek=dayOfWeek;
		this.startHour=startHour;
		this.survivalPeoples=survivalPeoples;
		this.teamPeoples=teamPeoples;
		this.nextId=nextId;
	
    }
}