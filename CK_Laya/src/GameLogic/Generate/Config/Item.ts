
export class ItemConfig {

    private constructor() {
    }
    
    public static Instance : ItemConfig;

    public static GetInstance(): ItemConfig
    {
        if(this.Instance==null){
            this.Instance=new ItemConfig ();
        }
        return this.Instance
    }

    public Data=new Map(
        [
    			["id_20101001",new Item(20101001,1,"ui://4kxumucaqtdwr")],
				["id_20101002",new Item(20101002,1,"ui://4kxumucaqtdws")],
	
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

export class Item {
    public	id:number;
	public	type:number;
	public	icon:string;
	
    constructor(
		id:number,
		type:number,
		icon:string,) {
    
    	this.id=id;
		this.type=type;
		this.icon=icon;
	
    }
}