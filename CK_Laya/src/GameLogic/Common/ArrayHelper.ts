export class ArrayHelper {

    private constructor() {
    }

    public static Instance : ArrayHelper;
    public static GetInstance(): ArrayHelper
    {
        if(this.Instance==null){
            this.Instance=new ArrayHelper ();
        }
        return this.Instance
    }


    public HasElement<T>(array:Array<T>,suit:T)
    {
        for (let index = 0; index < array.length; index++) {
            const element = array[index];
            if (element==suit) {
                return true;
            }
        }
        return false;

    }

    public GetElementIndex<T>(array:Array<T>,suit:T)
    {
        for (let index = 0; index < array.length; index++) {
            const element = array[index];
            if (element==suit) {
                return index;
            }
        }
        return null;
    }

    public RemoveElementFromArray<T>(array:Array<T>,suit:T)
    {

        let index= this.GetElementIndex<T>(array,suit);
        if (index!=null) {
            array.splice(index,1);
        }
    }

}