
export class CkLevelUpConfig {

    private constructor() {
    }
    
    public static Instance : CkLevelUpConfig;

    public static GetInstance(): CkLevelUpConfig
    {
        if(this.Instance==null){
            this.Instance=new CkLevelUpConfig ();
        }
        return this.Instance
    }

    public Data=new Map(
        [
    			["id_40101001",new CkLevelUp(40101001,1,1,0,0,0)],
				["id_40101002",new CkLevelUp(40101002,1,2,42,2,0)],
				["id_40101003",new CkLevelUp(40101003,1,3,62,0,0)],
				["id_40101004",new CkLevelUp(40101004,1,4,91,2,0)],
				["id_40101005",new CkLevelUp(40101005,1,5,129,0,0)],
				["id_40101006",new CkLevelUp(40101006,1,6,176,2,0)],
				["id_40101007",new CkLevelUp(40101007,1,7,232,0,0)],
				["id_40101008",new CkLevelUp(40101008,1,8,297,2,0)],
				["id_40101009",new CkLevelUp(40101009,1,9,371,0,0)],
				["id_40101010",new CkLevelUp(40101010,1,10,454,2,0)],
				["id_40101011",new CkLevelUp(40101011,1,11,546,0,1)],
				["id_40101012",new CkLevelUp(40101012,1,12,647,2,0)],
				["id_40101013",new CkLevelUp(40101013,1,13,757,0,0)],
				["id_40101014",new CkLevelUp(40101014,1,14,876,2,0)],
				["id_40101015",new CkLevelUp(40101015,1,15,1004,0,0)],
				["id_40101016",new CkLevelUp(40101016,1,16,1141,2,0)],
				["id_40101017",new CkLevelUp(40101017,1,17,1287,0,0)],
				["id_40101018",new CkLevelUp(40101018,1,18,1442,2,0)],
				["id_40101019",new CkLevelUp(40101019,1,19,1606,0,0)],
				["id_40101020",new CkLevelUp(40101020,1,20,1779,2,0)],
				["id_40101021",new CkLevelUp(40101021,1,21,1961,0,1)],
				["id_40102001",new CkLevelUp(40102001,2,1,0,0,0)],
				["id_40102002",new CkLevelUp(40102002,2,2,78,2,0)],
				["id_40102003",new CkLevelUp(40102003,2,3,106,0,0)],
				["id_40102004",new CkLevelUp(40102004,2,4,146,2,0)],
				["id_40102005",new CkLevelUp(40102005,2,5,198,0,0)],
				["id_40102006",new CkLevelUp(40102006,2,6,262,2,0)],
				["id_40102007",new CkLevelUp(40102007,2,7,338,0,0)],
				["id_40102008",new CkLevelUp(40102008,2,8,426,2,0)],
				["id_40102009",new CkLevelUp(40102009,2,9,526,0,0)],
				["id_40102010",new CkLevelUp(40102010,2,10,638,2,0)],
				["id_40102011",new CkLevelUp(40102011,2,11,762,0,1)],
				["id_40102012",new CkLevelUp(40102012,2,12,898,2,0)],
				["id_40102013",new CkLevelUp(40102013,2,13,1046,0,0)],
				["id_40102014",new CkLevelUp(40102014,2,14,1206,2,0)],
				["id_40102015",new CkLevelUp(40102015,2,15,1378,0,0)],
				["id_40102016",new CkLevelUp(40102016,2,16,1562,2,0)],
				["id_40102017",new CkLevelUp(40102017,2,17,1758,0,0)],
				["id_40102018",new CkLevelUp(40102018,2,18,1966,2,0)],
				["id_40102019",new CkLevelUp(40102019,2,19,2186,0,0)],
				["id_40102020",new CkLevelUp(40102020,2,20,2418,2,0)],
				["id_40102021",new CkLevelUp(40102021,2,21,2662,0,1)],
				["id_40103001",new CkLevelUp(40103001,3,1,0,0,0)],
				["id_40103002",new CkLevelUp(40103002,3,2,141,2,0)],
				["id_40103003",new CkLevelUp(40103003,3,3,194,0,0)],
				["id_40103004",new CkLevelUp(40103004,3,4,262,2,0)],
				["id_40103005",new CkLevelUp(40103005,3,5,345,0,0)],
				["id_40103006",new CkLevelUp(40103006,3,6,443,2,0)],
				["id_40103007",new CkLevelUp(40103007,3,7,556,0,0)],
				["id_40103008",new CkLevelUp(40103008,3,8,684,2,0)],
				["id_40103009",new CkLevelUp(40103009,3,9,827,0,0)],
				["id_40103010",new CkLevelUp(40103010,3,10,985,2,0)],
				["id_40103011",new CkLevelUp(40103011,3,11,1158,0,1)],
				["id_40103012",new CkLevelUp(40103012,3,12,1346,2,0)],
				["id_40103013",new CkLevelUp(40103013,3,13,1549,0,0)],
				["id_40103014",new CkLevelUp(40103014,3,14,1767,2,0)],
				["id_40103015",new CkLevelUp(40103015,3,15,2000,0,0)],
				["id_40103016",new CkLevelUp(40103016,3,16,2248,2,0)],
				["id_40103017",new CkLevelUp(40103017,3,17,2511,0,0)],
				["id_40103018",new CkLevelUp(40103018,3,18,2789,2,0)],
				["id_40103019",new CkLevelUp(40103019,3,19,3082,0,0)],
				["id_40103020",new CkLevelUp(40103020,3,20,3390,2,0)],
				["id_40103021",new CkLevelUp(40103021,3,21,3713,0,1)],
				["id_40104001",new CkLevelUp(40104001,4,1,0,0,0)],
				["id_40104002",new CkLevelUp(40104002,4,2,228,2,0)],
				["id_40104003",new CkLevelUp(40104003,4,3,324,0,0)],
				["id_40104004",new CkLevelUp(40104004,4,4,438,2,0)],
				["id_40104005",new CkLevelUp(40104005,4,5,570,0,0)],
				["id_40104006",new CkLevelUp(40104006,4,6,720,2,0)],
				["id_40104007",new CkLevelUp(40104007,4,7,888,0,0)],
				["id_40104008",new CkLevelUp(40104008,4,8,1074,2,0)],
				["id_40104009",new CkLevelUp(40104009,4,9,1278,0,0)],
				["id_40104010",new CkLevelUp(40104010,4,10,1500,2,0)],
				["id_40104011",new CkLevelUp(40104011,4,11,1740,0,1)],
				["id_40104012",new CkLevelUp(40104012,4,12,1998,2,0)],
				["id_40104013",new CkLevelUp(40104013,4,13,2274,0,0)],
				["id_40104014",new CkLevelUp(40104014,4,14,2568,2,0)],
				["id_40104015",new CkLevelUp(40104015,4,15,2880,0,0)],
				["id_40104016",new CkLevelUp(40104016,4,16,3210,2,0)],
				["id_40104017",new CkLevelUp(40104017,4,17,3558,0,0)],
				["id_40104018",new CkLevelUp(40104018,4,18,3924,2,0)],
				["id_40104019",new CkLevelUp(40104019,4,19,4308,0,0)],
				["id_40104020",new CkLevelUp(40104020,4,20,4710,2,0)],
				["id_40104021",new CkLevelUp(40104021,4,21,5130,0,1)],
	
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

export class CkLevelUp {
    public	id:number;
	public	quality:number;
	public	level:number;
	public	costGcke:number;
	public	propertyNum:number;
	public	specialtyNum:number;
	
    constructor(
		id:number,
		quality:number,
		level:number,
		costGcke:number,
		propertyNum:number,
		specialtyNum:number,) {
    
    	this.id=id;
		this.quality=quality;
		this.level=level;
		this.costGcke=costGcke;
		this.propertyNum=propertyNum;
		this.specialtyNum=specialtyNum;
	
    }
}