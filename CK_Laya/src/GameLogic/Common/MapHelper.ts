export class MapHelper {

    private constructor() {
    }

    public static Instance : MapHelper;
    public static GetInstance(): MapHelper
    {
        if(this.Instance==null){
            this.Instance=new MapHelper ();
        }
        return this.Instance
    }


    public GetKeyByValue(object, value) {
        return Object.keys(object).find(key => object[key] === value);
    }
}