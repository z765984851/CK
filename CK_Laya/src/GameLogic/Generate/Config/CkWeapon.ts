
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
    			["id_10100001",new CkWeapon(10100001,1,1,"ui://hhm821bghasg9","ui://hhm821bghasg4",20,60,100,0)],
				["id_10100002",new CkWeapon(10100002,2,2,"ui://hhm821bghasga","ui://hhm821bghasg6",30,80,130,0)],
				["id_10100003",new CkWeapon(10100003,3,3,"ui://hhm821bghasga","ui://hhm821bghasg5",200,40,120,0)],
				["id_10100004",new CkWeapon(10100004,4,4,"ui://hhm821bghasg8","ui://hhm821bghasg7",150,60,100,130)],
	
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
		weaponIcon:string,
		cap:string,
		atkDistance:number,
		atk:number,
		atkSpeed:number,
		singSpeed:number,) {
    
    	this.id=id;
		this.weaponId=weaponId;
		this.weapontype=weapontype;
		this.weaponIcon=weaponIcon;
		this.cap=cap;
		this.atkDistance=atkDistance;
		this.atk=atk;
		this.atkSpeed=atkSpeed;
		this.singSpeed=singSpeed;
	
    }
}