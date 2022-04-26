import { ArrayHelper } from "../Common/ArrayHelper";
import { BallType } from "../Common/BallType";
import { CkLineage, CkLineageConfig } from "../Generate/Config/CkLineage";

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


  
    //scene local path
    public BattleScenePath="res/unityscenes/LayaScene_BattleScene/Conventional/";
    //scene local path
    public LobbyScenePath="res/unityscenes/LayaScene_LobbyScene/Conventional/";
    //mat local path
    public BasePrefabPath="res/unityscenes/LayaScene_PrefabScene/Conventional/";



    private loadedPath:Array<string>=new Array();
    


    public Init(){
        
    }

    public Preload2DRes(complete?:Handler|null,progress?:Handler|null){
        let preload2DPath:Array<string>=new Array();
        //add preload mat path
        // for (const key in BallType) {
        //     preload2DPath.push(this.BaseMatPath+BallType[key])
        // }
        let needLoadLength=preload2DPath.length;
        //preload 2dRes
        let preloadFunc=()=>{
            if (preload2DPath.length!=0) {
                let path=preload2DPath.pop();
                
                this.Load2DRes(path,Laya.Handler.create(this,(result)=>{
                    // console.log("preload2d",path);
                    if (result!=null) {
                        let currentProgress=(needLoadLength-preload2DPath.length)/needLoadLength;
                        progress?.runWith(currentProgress);
                        preloadFunc();
                    }
                    else{
                        complete?.runWith(false);
                    }
                }))
            }
            else{
                complete?.runWith(true);
            }
        };
        preloadFunc();
    }


    public Preload3DRes(complete?:Handler|null,progress?:Handler|null){
        let preload3DPath:Array<string>=new Array();
        //add preload mat path
        for (const key in BallType) {
            let lnName:CkLineage=CkLineageConfig.GetInstance().GetData("1020000"+BallType[key])
             
            if (lnName!=null) {
                preload3DPath.push(this.BasePrefabPath+lnName.ballType)
            }
           
        }
        let needLoadLength=preload3DPath.length;
        //preload 2dRes
        let preloadFunc=()=>{
            if (preload3DPath.length!=0) {
                let path=preload3DPath.pop();
                this.Load3DRes(path,Laya.Handler.create(this,(result)=>{
                    if (result!=null) {
                        let currentProgress=(needLoadLength-preload3DPath.length)/needLoadLength;
                        progress?.runWith(currentProgress);
                        
                        preloadFunc();
                    }
                    else{
                        complete?.runWith(false);
                    }
                }))
            }
            else{
                complete?.runWith(true);
            }
        };
        preloadFunc();
        
    }



    //path only can be string , its easy to manage
    public Load2DRes(path:string,complete?:Handler|null,progress?:Handler|null)
    {

        if (this.IsLoaded(path)) {
            return;
        }
        
        Laya.loader.load(path,Laya.Handler.create(this,(result)=>{
            this.loadedPath.push(path);
            complete?.runWith(result);
        }),progress)
    }

    //path only can be string , its easy to manage
    public Load3DRes(path:string,complete?:Handler|null,progress?:Handler|null){

        if (this.IsLoaded(path)) {
            return;
        }
        Laya.loader.create(path,Laya.Handler.create(this,(result)=>{
            this.loadedPath.push(path);
            complete?.runWith(result);
        }),progress)
    }


    public GetRes(url:string):any
    {

        let result=Laya.loader.getRes(url);
        if (result==null) {
            console.log(url,"Get Failed");
        }
        return result ;
    }

    public IsLoaded(path:string):boolean
    {

        let result=ArrayHelper.GetInstance().HasElement<string>(this.loadedPath,path);
        return result;
        
    }

    public ReleaseRes(path:string)
    {
        if (this.IsLoaded(path)) {
            Laya.loader.clearRes(path)
            ArrayHelper.GetInstance().RemoveElementFromArray(this.loadedPath,path);
        }
    }

}

