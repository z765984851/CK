export class CameraComponent {

    private camera:Laya.Camera;
    private followTarget:Laya.Sprite3D;
    constructor(camera) {
        this.camera=camera;
    }
    
    StartFollow(followTarget){

        this.followTarget=followTarget;
        Laya.timer.frameLoop(1,this,this.Follow);
    }

    StopFollow(){
        Laya.timer.clear(this,this.Follow);
    }
    private Follow()
    {
        this.camera.transform.position=new Laya.Vector3(this.followTarget.transform.position.x,4,this.followTarget.transform.position.z);
    }

}