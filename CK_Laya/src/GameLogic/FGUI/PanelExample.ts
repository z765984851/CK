import { CK_FGUIConfig, CK_UIConfig, CK_UIType } from "./CK_FGUIConfig";


export class PanelExample  implements FGUIBase 
{
    
     Config:CK_UIConfig;
     IsInitFinish: boolean=false;
     Content: fgui.GComponent;
     ID: number= 0;
     UIType: any = CK_UIType.PanelExample;
     private packagePath;

     private testBtn:fgui.GButton;

    

     Init() {
         if (this.IsInitFinish==false) {

            this.Config=CK_FGUIConfig.GetInstance().Config.get(this.UIType);
            this.packagePath=`res/fguipackage/${this.Config.PackageName}/${this.Config.PackageName}`
            fgui.UIPackage.addPackage(this.packagePath);
            this.Content=fgui.UIPackage.createObject(this.Config.PackageName,this.Config.ComponentName) as fgui.GComponent;
            fgui.GRoot.inst.addChild(this.Content);
            this.Content.makeFullScreen();
            this.InitComp();
            this.BindEvent();
            this.Close();

            console.log(this.Config.PackageName,"Init finish");
            

            this.IsInitFinish=true;               
            

         }
         
     }


     Show(args? : any) {
        if (this.Content!=null) {
            this.Content.visible=true;

        }
     }

     Hide() {
       
        if (this.Content!=null) {
            this.Content.visible=false;
        }
        
     }

     Close() {

        this.Content?.dispose()
        this.ID=0;
     }

     Destroy() {

         this.Content?.dispose()
         fgui.UIPackage.removePackage(this.Config.PackageName)
         this.IsInitFinish=false;
         this.ID=0;
     }

    
     private InitComp(){

        this.testBtn=this.Content.getChild("openwindow_btn") as fgui.GButton;
     }
     
     private BindEvent()
     {
        this.testBtn.onClick(this,()=>{
            console.log("aaa");
            
        })

     }

}



