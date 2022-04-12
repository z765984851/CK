export class ResMananger {

    private constructor() {
    }

    public static Instance : ResMananger;
    public static GetInstance(): ResMananger
    {
        if(this.Instance==null){
            this.Instance=new ResMananger ();
        }
        return this.Instance
    }



    public Load2DRes(resName:string,complete?,progress?)
    {

        Laya.loader.load(resName,complete,progress)
    }


    public Load3DRes(resName:string,complete?,progress?){
        Laya.loader.create(resName,complete,progress)
    }

    public GetRes(url:string):any
    {

        let result=Laya.loader.getRes(url);
        if (result==null) {
            console.log(url,"Get Failed");
            
        }
        return result ;
    }


}

