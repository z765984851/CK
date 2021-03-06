interface FGUIBase
{
    Config:any,
    UIType:any,
    IsInitFinish:boolean,
    Content:any;
    ID:number;
    Init(),
    Show(args? : any),
    Close(),
    Destroy(),
    SetVisible(visible:boolean),
}