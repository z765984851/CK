
export class CkSpecialtyConfig {

    private constructor() {
    }
    
    public static Instance : CkSpecialtyConfig;

    public static GetInstance(): CkSpecialtyConfig
    {
        if(this.Instance==null){
            this.Instance=new CkSpecialtyConfig ();
        }
        return this.Instance
    }

    public Data=new Map(
        [
    			["id_40200101",new CkSpecialty(40200101,402001011,102000001,402001012,"ui://4kxumucax6u0pz",1)],
				["id_40200102",new CkSpecialty(40200102,402001021,102000001,402001022,"ui://4kxumucax6u0q0",1)],
				["id_40200103",new CkSpecialty(40200103,402001031,102000001,402001032,"ui://4kxumucax6u0q1",1)],
				["id_40200104",new CkSpecialty(40200104,402001041,102000001,402001042,"ui://4kxumucax6u0pz",2)],
				["id_40200105",new CkSpecialty(40200105,402001051,102000001,402001052,"ui://4kxumucax6u0q0",2)],
				["id_40200106",new CkSpecialty(40200106,402001061,102000001,402001062,"ui://4kxumucax6u0q1",2)],
				["id_40200107",new CkSpecialty(40200107,402001071,102000001,402001072,"ui://4kxumucax6u0pz",3)],
				["id_40200108",new CkSpecialty(40200108,402001081,102000001,402001082,"ui://4kxumucax6u0q0",3)],
				["id_40200109",new CkSpecialty(40200109,402001091,102000001,402001092,"ui://4kxumucax6u0q1",3)],
				["id_40200110",new CkSpecialty(40200110,402001101,102000001,402001102,"ui://4kxumucax6u0pz",4)],
				["id_40200111",new CkSpecialty(40200111,402001111,102000001,402001112,"ui://4kxumucax6u0q0",4)],
				["id_40200112",new CkSpecialty(40200112,402001121,102000001,402001122,"ui://4kxumucax6u0q1",4)],
				["id_40200113",new CkSpecialty(40200113,402001131,102000001,402001132,"ui://4kxumucax6u0pz",1)],
				["id_40200114",new CkSpecialty(40200114,402001141,102000001,402001142,"ui://4kxumucax6u0q0",1)],
				["id_40200115",new CkSpecialty(40200115,402001151,102000001,402001152,"ui://4kxumucax6u0q1",1)],
				["id_40200116",new CkSpecialty(40200116,402001161,102000001,402001162,"ui://4kxumucax6u0pz",2)],
				["id_40200117",new CkSpecialty(40200117,402001171,102000001,402001172,"ui://4kxumucax6u0q0",2)],
				["id_40200118",new CkSpecialty(40200118,402001181,102000001,402001182,"ui://4kxumucax6u0q1",2)],
				["id_40200119",new CkSpecialty(40200119,402001191,102000001,402001192,"ui://4kxumucax6u0pz",3)],
				["id_40200120",new CkSpecialty(40200120,402001201,102000001,402001202,"ui://4kxumucax6u0q0",3)],
				["id_40200121",new CkSpecialty(40200121,402001211,102000001,402001212,"ui://4kxumucax6u0q1",3)],
				["id_40200122",new CkSpecialty(40200122,402001221,102000001,402001222,"ui://4kxumucax6u0pz",4)],
				["id_40200123",new CkSpecialty(40200123,402001231,102000001,402001232,"ui://4kxumucax6u0q0",4)],
				["id_40200124",new CkSpecialty(40200124,402001241,102000001,402001242,"ui://4kxumucax6u0q1",4)],
				["id_40200125",new CkSpecialty(40200125,402001251,102000001,402001252,"ui://4kxumucax6u0pz",1)],
				["id_40200126",new CkSpecialty(40200126,402001261,102000001,402001262,"ui://4kxumucax6u0q0",1)],
				["id_40200127",new CkSpecialty(40200127,402001271,102000001,402001272,"ui://4kxumucax6u0q1",1)],
				["id_40200128",new CkSpecialty(40200128,402001281,102000001,402001282,"ui://4kxumucax6u0pz",2)],
				["id_40200129",new CkSpecialty(40200129,402001291,102000001,402001292,"ui://4kxumucax6u0q0",2)],
				["id_40200130",new CkSpecialty(40200130,402001301,102000001,402001302,"ui://4kxumucax6u0q1",2)],
				["id_40200131",new CkSpecialty(40200131,402001311,102000001,402001312,"ui://4kxumucax6u0pz",3)],
				["id_40200132",new CkSpecialty(40200132,402001321,102000001,402001322,"ui://4kxumucax6u0q0",3)],
				["id_40200133",new CkSpecialty(40200133,402001331,102000001,402001332,"ui://4kxumucax6u0q1",3)],
				["id_40200134",new CkSpecialty(40200134,402001341,102000001,402001342,"ui://4kxumucax6u0pz",4)],
				["id_40200135",new CkSpecialty(40200135,402001351,102000001,402001352,"ui://4kxumucax6u0q0",4)],
				["id_40200136",new CkSpecialty(40200136,402001361,102000001,402001362,"ui://4kxumucax6u0q1",4)],
				["id_40200801",new CkSpecialty(40200801,402008011,102000001,402008012,"ui://4kxumucax6u0pz",0)],
				["id_40200802",new CkSpecialty(40200802,402008021,102000001,402008022,"ui://4kxumucax6u0q0",0)],
				["id_40200803",new CkSpecialty(40200803,402008031,102000001,402008032,"ui://4kxumucax6u0q1",0)],
				["id_40200804",new CkSpecialty(40200804,402008041,102000001,402008042,"ui://4kxumucax6u0pz",0)],
				["id_40200805",new CkSpecialty(40200805,402008051,102000001,402008052,"ui://4kxumucax6u0q0",0)],
				["id_40200806",new CkSpecialty(40200806,402008061,102000001,402008062,"ui://4kxumucax6u0q1",0)],
				["id_40200807",new CkSpecialty(40200807,402008071,102000001,402008072,"ui://4kxumucax6u0pz",0)],
				["id_40200808",new CkSpecialty(40200808,402008081,102000001,402008082,"ui://4kxumucax6u0q0",0)],
				["id_40200809",new CkSpecialty(40200809,402008091,102000001,402008092,"ui://4kxumucax6u0q1",0)],
				["id_40200810",new CkSpecialty(40200810,402008101,102000001,402008102,"ui://4kxumucax6u0pz",0)],
				["id_40200811",new CkSpecialty(40200811,402008111,102000001,402008112,"ui://4kxumucax6u0q0",0)],
				["id_40200812",new CkSpecialty(40200812,402008121,102000001,402008122,"ui://4kxumucax6u0q1",0)],
				["id_40200901",new CkSpecialty(40200901,402009011,102000011,402009012,"ui://4kxumucax6u0pz",0)],
				["id_40200902",new CkSpecialty(40200902,402009021,102000011,402009022,"ui://4kxumucax6u0q0",0)],
				["id_40200903",new CkSpecialty(40200903,402009031,102000011,402009032,"ui://4kxumucax6u0q1",0)],
				["id_40200904",new CkSpecialty(40200904,402009041,102000021,402009042,"ui://4kxumucax6u0pz",0)],
				["id_40200905",new CkSpecialty(40200905,402009051,102000021,402009052,"ui://4kxumucax6u0q0",0)],
				["id_40200906",new CkSpecialty(40200906,402009061,102000021,402009062,"ui://4kxumucax6u0q1",0)],
				["id_40200907",new CkSpecialty(40200907,402009071,102000031,402009072,"ui://4kxumucax6u0pz",0)],
				["id_40200908",new CkSpecialty(40200908,402009081,102000031,402009082,"ui://4kxumucax6u0q0",0)],
				["id_40200909",new CkSpecialty(40200909,402009091,102000031,402009092,"ui://4kxumucax6u0q1",0)],
				["id_40200910",new CkSpecialty(40200910,402009101,102000041,402009102,"ui://4kxumucax6u0pz",0)],
				["id_40200911",new CkSpecialty(40200911,402009111,102000041,402009112,"ui://4kxumucax6u0q0",0)],
				["id_40200912",new CkSpecialty(40200912,402009121,102000041,402009122,"ui://4kxumucax6u0q1",0)],
				["id_40200001",new CkSpecialty(40200001,402000011,102000011,402000012,"ui://4kxumucax6u0q1",2)],
				["id_40200002",new CkSpecialty(40200002,402000021,102000011,402000022,"ui://4kxumucax6u0pz",3)],
				["id_40200003",new CkSpecialty(40200003,402000031,102000011,402000032,"ui://4kxumucax6u0q0",1)],
				["id_40200004",new CkSpecialty(40200004,402000041,102000011,402000042,"ui://4kxumucax6u0q1",4)],
				["id_40200005",new CkSpecialty(40200005,402000051,102000011,402000052,"ui://4kxumucax6u0pz",2)],
				["id_40200006",new CkSpecialty(40200006,402000061,102000011,402000062,"ui://4kxumucax6u0q0",3)],
				["id_40200007",new CkSpecialty(40200007,402000071,102000011,402000072,"ui://4kxumucax6u0q1",1)],
				["id_40200008",new CkSpecialty(40200008,402000081,102000011,402000082,"ui://4kxumucax6u0q1",4)],
				["id_40200009",new CkSpecialty(40200009,402000091,102000011,402000092,"ui://4kxumucax6u0pz",2)],
				["id_40200010",new CkSpecialty(40200010,402000101,102000021,402000102,"ui://4kxumucax6u0q0",3)],
				["id_40200011",new CkSpecialty(40200011,402000111,102000021,402000112,"ui://4kxumucax6u0q1",1)],
				["id_40200012",new CkSpecialty(40200012,402000121,102000021,402000122,"ui://4kxumucax6u0pz",4)],
				["id_40200013",new CkSpecialty(40200013,402000131,102000021,402000132,"ui://4kxumucax6u0q0",2)],
				["id_40200014",new CkSpecialty(40200014,402000141,102000021,402000142,"ui://4kxumucax6u0q1",3)],
				["id_40200015",new CkSpecialty(40200015,402000151,102000021,402000152,"ui://4kxumucax6u0q1",1)],
				["id_40200016",new CkSpecialty(40200016,402000161,102000021,402000162,"ui://4kxumucax6u0pz",4)],
				["id_40200017",new CkSpecialty(40200017,402000171,102000021,402000172,"ui://4kxumucax6u0q0",2)],
				["id_40200018",new CkSpecialty(40200018,402000181,102000021,402000182,"ui://4kxumucax6u0q1",3)],
				["id_40200019",new CkSpecialty(40200019,402000191,102000021,402000192,"ui://4kxumucax6u0pz",1)],
				["id_40200020",new CkSpecialty(40200020,402000201,102000021,402000202,"ui://4kxumucax6u0q0",4)],
				["id_40200021",new CkSpecialty(40200021,402000211,102000021,402000212,"ui://4kxumucax6u0q1",2)],
				["id_40200022",new CkSpecialty(40200022,402000221,102000021,402000222,"ui://4kxumucax6u0q1",3)],
				["id_40200023",new CkSpecialty(40200023,402000231,102000031,402000232,"ui://4kxumucax6u0pz",1)],
				["id_40200024",new CkSpecialty(40200024,402000241,102000031,402000242,"ui://4kxumucax6u0q0",4)],
				["id_40200025",new CkSpecialty(40200025,402000251,102000031,402000252,"ui://4kxumucax6u0q1",2)],
				["id_40200026",new CkSpecialty(40200026,402000261,102000031,402000262,"ui://4kxumucax6u0pz",3)],
				["id_40200027",new CkSpecialty(40200027,402000271,102000031,402000272,"ui://4kxumucax6u0q0",1)],
				["id_40200028",new CkSpecialty(40200028,402000281,102000031,402000282,"ui://4kxumucax6u0q1",4)],
				["id_40200029",new CkSpecialty(40200029,402000291,102000031,402000292,"ui://4kxumucax6u0q1",2)],
				["id_40200030",new CkSpecialty(40200030,402000301,102000041,402000302,"ui://4kxumucax6u0pz",3)],
	
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

export class CkSpecialty {
    public	id:number;
	public	specialtyLang:number;
	public	specialtyTypeLang:number;
	public	specialtyDescLang:number;
	public	icon:string;
	public	quality:number;
	
    constructor(
		id:number,
		specialtyLang:number,
		specialtyTypeLang:number,
		specialtyDescLang:number,
		icon:string,
		quality:number,) {
    
    	this.id=id;
		this.specialtyLang=specialtyLang;
		this.specialtyTypeLang=specialtyTypeLang;
		this.specialtyDescLang=specialtyDescLang;
		this.icon=icon;
		this.quality=quality;
	
    }
}