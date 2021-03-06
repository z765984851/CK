
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
    			["id_102000001",new Lang(102000001,"common")],
				["id_102000011",new Lang(102000011,"Steel")],
				["id_102000021",new Lang(102000021,"Rock")],
				["id_102000031",new Lang(102000031,"Wood")],
				["id_102000041",new Lang(102000041,"Dragon")],
				["id_301000011",new Lang(301000011,"Bronze")],
				["id_301000021",new Lang(301000021,"Silver")],
				["id_301000031",new Lang(301000031,"Gold")],
				["id_301000041",new Lang(301000041,"Platnum")],
				["id_304010001",new Lang(304010001,"Mon.")],
				["id_304020001",new Lang(304020001,"Tues.")],
				["id_304030001",new Lang(304030001,"Wed.")],
				["id_304040001",new Lang(304040001,"Thur.")],
				["id_304050001",new Lang(304050001,"Fri.")],
				["id_304060001",new Lang(304060001,"Sat.")],
				["id_304070001",new Lang(304070001,"Sun.")],
				["id_101000011",new Lang(101000011,"Warrior")],
				["id_101000021",new Lang(101000021,"Warrior")],
				["id_101000031",new Lang(101000031,"Archer")],
				["id_101000041",new Lang(101000041,"Magician")],
				["id_10110600001",new Lang(10110600001,"slowest")],
				["id_10110600002",new Lang(10110600002,"very slow")],
				["id_10110600003",new Lang(10110600003,"slow")],
				["id_10110600004",new Lang(10110600004,"slower")],
				["id_10110600005",new Lang(10110600005,"medium")],
				["id_10110600006",new Lang(10110600006,"faster")],
				["id_10110600007",new Lang(10110600007,"fast")],
				["id_10110600008",new Lang(10110600008,"very fast")],
				["id_10110600009",new Lang(10110600009,"fastest")],
				["id_402001011",new Lang(402001011,"Super attack")],
				["id_402001021",new Lang(402001021,"Super attack")],
				["id_402001031",new Lang(402001031,"Super attack")],
				["id_402001041",new Lang(402001041,"Super attack")],
				["id_402001051",new Lang(402001051,"Super attack")],
				["id_402001061",new Lang(402001061,"Super attack")],
				["id_402001071",new Lang(402001071,"Super attack")],
				["id_402001081",new Lang(402001081,"Super attack")],
				["id_402001091",new Lang(402001091,"Super attack")],
				["id_402001101",new Lang(402001101,"Super attack")],
				["id_402001111",new Lang(402001111,"Super attack")],
				["id_402001121",new Lang(402001121,"Super attack")],
				["id_402001131",new Lang(402001131,"Super attack")],
				["id_402001141",new Lang(402001141,"Super attack")],
				["id_402001151",new Lang(402001151,"Super attack")],
				["id_402001161",new Lang(402001161,"Super attack")],
				["id_402001171",new Lang(402001171,"Super attack")],
				["id_402001181",new Lang(402001181,"Super attack")],
				["id_402001191",new Lang(402001191,"Super attack")],
				["id_402001201",new Lang(402001201,"Super attack")],
				["id_402001211",new Lang(402001211,"Super attack")],
				["id_402001221",new Lang(402001221,"Super attack")],
				["id_402001231",new Lang(402001231,"Super attack")],
				["id_402001241",new Lang(402001241,"Super attack")],
				["id_402001251",new Lang(402001251,"Super attack")],
				["id_402001261",new Lang(402001261,"Super attack")],
				["id_402001271",new Lang(402001271,"Super attack")],
				["id_402001281",new Lang(402001281,"Super attack")],
				["id_402001291",new Lang(402001291,"Super attack")],
				["id_402001301",new Lang(402001301,"Super attack")],
				["id_402001311",new Lang(402001311,"Super attack")],
				["id_402001321",new Lang(402001321,"Super attack")],
				["id_402001331",new Lang(402001331,"Super attack")],
				["id_402001341",new Lang(402001341,"Super attack")],
				["id_402001351",new Lang(402001351,"Super attack")],
				["id_402001361",new Lang(402001361,"Super attack")],
				["id_402008011",new Lang(402008011,"Super attack")],
				["id_402008021",new Lang(402008021,"Super attack")],
				["id_402008031",new Lang(402008031,"Super attack")],
				["id_402008041",new Lang(402008041,"Super attack")],
				["id_402008051",new Lang(402008051,"Super attack")],
				["id_402008061",new Lang(402008061,"Super attack")],
				["id_402008071",new Lang(402008071,"Super attack")],
				["id_402008081",new Lang(402008081,"Super attack")],
				["id_402008091",new Lang(402008091,"Super attack")],
				["id_402008101",new Lang(402008101,"Super attack")],
				["id_402008111",new Lang(402008111,"Super attack")],
				["id_402008121",new Lang(402008121,"Super attack")],
				["id_402009011",new Lang(402009011,"Super attack")],
				["id_402009021",new Lang(402009021,"Super attack")],
				["id_402009031",new Lang(402009031,"Super attack")],
				["id_402009041",new Lang(402009041,"Super attack")],
				["id_402009051",new Lang(402009051,"Super attack")],
				["id_402009061",new Lang(402009061,"Super attack")],
				["id_402009071",new Lang(402009071,"Super attack")],
				["id_402009081",new Lang(402009081,"Super attack")],
				["id_402009091",new Lang(402009091,"Super attack")],
				["id_402009101",new Lang(402009101,"Super attack")],
				["id_402009111",new Lang(402009111,"Super attack")],
				["id_402009121",new Lang(402009121,"Super attack")],
				["id_402000011",new Lang(402000011,"Super attack")],
				["id_402000021",new Lang(402000021,"Super attack")],
				["id_402000031",new Lang(402000031,"Super attack")],
				["id_402000041",new Lang(402000041,"Super attack")],
				["id_402000051",new Lang(402000051,"Super attack")],
				["id_402000061",new Lang(402000061,"Super attack")],
				["id_402000071",new Lang(402000071,"Super attack")],
				["id_402000081",new Lang(402000081,"Super attack")],
				["id_402000091",new Lang(402000091,"Super attack")],
				["id_402000101",new Lang(402000101,"Super attack")],
				["id_402000111",new Lang(402000111,"Super attack")],
				["id_402000121",new Lang(402000121,"Super attack")],
				["id_402000131",new Lang(402000131,"Super attack")],
				["id_402000141",new Lang(402000141,"Super attack")],
				["id_402000151",new Lang(402000151,"Super attack")],
				["id_402000161",new Lang(402000161,"Super attack")],
				["id_402000171",new Lang(402000171,"Super attack")],
				["id_402000181",new Lang(402000181,"Super attack")],
				["id_402000191",new Lang(402000191,"Super attack")],
				["id_402000201",new Lang(402000201,"Super attack")],
				["id_402000211",new Lang(402000211,"Super attack")],
				["id_402000221",new Lang(402000221,"Super attack")],
				["id_402000231",new Lang(402000231,"Super attack")],
				["id_402000241",new Lang(402000241,"Super attack")],
				["id_402000251",new Lang(402000251,"Super attack")],
				["id_402000261",new Lang(402000261,"Super attack")],
				["id_402000271",new Lang(402000271,"Super attack")],
				["id_402000281",new Lang(402000281,"Super attack")],
				["id_402000291",new Lang(402000291,"Super attack")],
				["id_402000301",new Lang(402000301,"Super attack")],
				["id_402001012",new Lang(402001012,"Power+1")],
				["id_402001022",new Lang(402001022,"Constitution+1")],
				["id_402001032",new Lang(402001032,"Intelligence+1")],
				["id_402001042",new Lang(402001042,"Power+2")],
				["id_402001052",new Lang(402001052,"Constitution+2")],
				["id_402001062",new Lang(402001062,"Intelligence+2")],
				["id_402001072",new Lang(402001072,"Power+3")],
				["id_402001082",new Lang(402001082,"Constitution+3")],
				["id_402001092",new Lang(402001092,"Intelligence+3")],
				["id_402001102",new Lang(402001102,"Power+4")],
				["id_402001112",new Lang(402001112,"Constitution+4")],
				["id_402001122",new Lang(402001122,"Intelligence+4")],
				["id_402001132",new Lang(402001132,"Power+2")],
				["id_402001142",new Lang(402001142,"Constitution+2")],
				["id_402001152",new Lang(402001152,"Intelligence+2")],
				["id_402001162",new Lang(402001162,"Power+3")],
				["id_402001172",new Lang(402001172,"Constitution+3")],
				["id_402001182",new Lang(402001182,"Intelligence+3")],
				["id_402001192",new Lang(402001192,"Power+4")],
				["id_402001202",new Lang(402001202,"Constitution+4")],
				["id_402001212",new Lang(402001212,"Intelligence+4")],
				["id_402001222",new Lang(402001222,"Power+6")],
				["id_402001232",new Lang(402001232,"Constitution+6")],
				["id_402001242",new Lang(402001242,"Intelligence+6")],
				["id_402001252",new Lang(402001252,"Power+3")],
				["id_402001262",new Lang(402001262,"Constitution+3")],
				["id_402001272",new Lang(402001272,"Intelligence+3")],
				["id_402001282",new Lang(402001282,"Power+5")],
				["id_402001292",new Lang(402001292,"Constitution+5")],
				["id_402001302",new Lang(402001302,"Intelligence+5")],
				["id_402001312",new Lang(402001312,"Power+6")],
				["id_402001322",new Lang(402001322,"Constitution+6")],
				["id_402001332",new Lang(402001332,"Intelligence+6")],
				["id_402001342",new Lang(402001342,"Power+8")],
				["id_402001352",new Lang(402001352,"Constitution+8")],
				["id_402001362",new Lang(402001362,"Intelligence+8")],
				["id_402008012",new Lang(402008012,"Power+4")],
				["id_402008022",new Lang(402008022,"Power+6")],
				["id_402008032",new Lang(402008032,"Power+8")],
				["id_402008042",new Lang(402008042,"Constitution+4")],
				["id_402008052",new Lang(402008052,"Constitution+6")],
				["id_402008062",new Lang(402008062,"Constitution+8")],
				["id_402008072",new Lang(402008072,"Agility+4")],
				["id_402008082",new Lang(402008082,"Agility+6")],
				["id_402008092",new Lang(402008092,"Agility+8")],
				["id_402008102",new Lang(402008102,"Intelligence+4")],
				["id_402008112",new Lang(402008112,"Intelligence+6")],
				["id_402008122",new Lang(402008122,"Intelligence+8")],
				["id_402009012",new Lang(402009012,"Power+4")],
				["id_402009022",new Lang(402009022,"Power+6")],
				["id_402009032",new Lang(402009032,"Power+8")],
				["id_402009042",new Lang(402009042,"Constitution+4")],
				["id_402009052",new Lang(402009052,"Constitution+6")],
				["id_402009062",new Lang(402009062,"Constitution+8")],
				["id_402009072",new Lang(402009072,"Agility+4")],
				["id_402009082",new Lang(402009082,"Agility+6")],
				["id_402009092",new Lang(402009092,"Agility+8")],
				["id_402009102",new Lang(402009102,"Intelligence+4")],
				["id_402009112",new Lang(402009112,"Intelligence+6")],
				["id_402009122",new Lang(402009122,"Intelligence+8")],
				["id_402000012",new Lang(402000012,"Power+2")],
				["id_402000022",new Lang(402000022,"Power+4")],
				["id_402000032",new Lang(402000032,"Power+6")],
				["id_402000042",new Lang(402000042,"Intelligence+2")],
				["id_402000052",new Lang(402000052,"Intelligence+4")],
				["id_402000062",new Lang(402000062,"Intelligence+6")],
				["id_402000072",new Lang(402000072,"Dexterity+2")],
				["id_402000082",new Lang(402000082,"Dexterity+4")],
				["id_402000092",new Lang(402000092,"Dexterity+6")],
				["id_402000102",new Lang(402000102,"Constitution+2")],
				["id_402000112",new Lang(402000112,"Constitution+4")],
				["id_402000122",new Lang(402000122,"Constitution+6")],
				["id_402000132",new Lang(402000132,"Spirit+2")],
				["id_402000142",new Lang(402000142,"SpiritAdd+4")],
				["id_402000152",new Lang(402000152,"SpiritAdd+6")],
				["id_402000162",new Lang(402000162,"Luck+2")],
				["id_402000172",new Lang(402000172,"Luck+4")],
				["id_402000182",new Lang(402000182,"LuckAdd+6")],
				["id_402000192",new Lang(402000192,"Power+1")],
				["id_402000202",new Lang(402000202,"Power+3")],
				["id_402000212",new Lang(402000212,"Power+5")],
				["id_402000222",new Lang(402000222,"Intelligence+1")],
				["id_402000232",new Lang(402000232,"Intelligence+3")],
				["id_402000242",new Lang(402000242,"Intelligence+5")],
				["id_402000252",new Lang(402000252,"Dexterity+1")],
				["id_402000262",new Lang(402000262,"Dexterity+3")],
				["id_402000272",new Lang(402000272,"Dexterity+5")],
				["id_402000282",new Lang(402000282,"Constitution+1")],
				["id_402000292",new Lang(402000292,"Constitution+3")],
				["id_402000302",new Lang(402000302,"Constitution+5")],
				["id_10001",new Lang(10001,"Rare or higher quality can get this specialty")],
				["id_10002",new Lang(10002,"Click button to choose specialty")],
				["id_10003",new Lang(10003,"This specialty can be learned at level 11")],
				["id_10004",new Lang(10004,"This specialty can be learned at level 21")],
				["id_10005",new Lang(10005,"Assign points")],
				["id_10006",new Lang(10006,"Choose specialty")],
	
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