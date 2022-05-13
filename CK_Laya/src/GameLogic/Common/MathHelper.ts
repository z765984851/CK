export class MathHelper {

    private constructor() {
    }

    public static Instance : MathHelper;
    public static GetInstance(): MathHelper
    {
        if(this.Instance==null){
            this.Instance=new MathHelper ();
        }
        return this.Instance
    }


    public GetRandomInt(min,max):number
    {
        let value=Math.random()*(max-min);
        value=Math.round(value)
        return value;
    }


    public GetRandomFloat(min,max,exact):number
    {
        let value=Math.random()*(max-min);
        value=Number.parseFloat(value.toFixed(exact));
        return value;
    }

    //add 0 before the number til the length
    public PrefixInteger(num, length) {
        return (Array(length).join('0') + num).slice(-length);
    }
}