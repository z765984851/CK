
export class CkWeaponConfig {

    private constructor() {
    }
    
    public static Instance : CkWeaponConfig;

    public static GetInstance(): CkWeaponConfig
    {
        if(this.Instance==null){
            this.Instance=new CkWeaponConfig ();
        }
        return this.Instance
    }

    public Data=new Map(
        [
    			["id_10100001",new CkWeapon(10100001,1,1,101000011,"ui://hhm821bgkncbj","ui://hhm821bgkncbf",750,6,100,0)],
				["id_10100002",new CkWeapon(10100002,2,2,101000021,"ui://hhm821bgkncbj","ui://hhm821bgkncbf",800,8,130,0)],
				["id_10100003",new CkWeapon(10100003,3,3,101000031,"ui://hhm821bgkncbh","ui://hhm821bgkncbk",1500,4,120,0)],
				["id_10100004",new CkWeapon(10100004,4,4,101000041,"ui://hhm821bgkncbi","ui://hhm821bgkncbl",1200,10,100,130)],
	
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

export class CkWeapon {
    public	id:number;
	public	weaponId:number;
	public	weapontype:number;
	public	classLang:number;
	public	weaponIcon:string;
	public	cap:string;
	public	atkDistance:number;
	public	atk:number;
	public	atkSpeed:number;
	public	singSpeed:number;
	
    constructor(
		id:number,
		weaponId:number,
		weapontype:number,
		classLang:number,
		weaponIcon:string,
		cap:string,
		atkDistance:number,
		atk:number,
		atkSpeed:number,
		singSpeed:number,) {
    
    	this.id=id;
		this.weaponId=weaponId;
		this.weapontype=weapontype;
		this.classLang=classLang;
		this.weaponIcon=weaponIcon;
		this.cap=cap;
		this.atkDistance=atkDistance;
		this.atk=atk;
		this.atkSpeed=atkSpeed;
		this.singSpeed=singSpeed;
	
    }
}