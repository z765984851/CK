export class UIHpSlider {

    private root:Laya.Sprite3D;
    private camera:Laya.Camera;
    private component:fgui.GComponent;
    constructor(root,camera) {
        this.root=root;
        this.camera=camera;
    }


    public Show(){
        this.component=fgui.UIPackage.createObject("ball_package","hp_slider") as fgui.GComponent;
        fgui.GRoot.inst.addChild(this.component);
        

    }

    private currentPos:Laya.Vector4=new Laya.Vector4(0,0,0,0);
    public Follow(){

    //    this.camera.worldToViewportPoint(this.root.transform.position,this.currentPos);
    //    console.log(this.currentPos);
       this.camera.viewport.project(this.root.transform.position,this.camera.projectionViewMatrix,this.currentPos)
       this.component.displayObject.pos(this.currentPos.x,this.currentPos.y);
    }

}