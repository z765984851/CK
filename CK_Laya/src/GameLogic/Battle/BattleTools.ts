export class BattleTools 
{

    //face = endPos-startPos 
    public static CalculateRotateWithFace(face:Laya.Vector3,forward:Laya.Vector3)
    {
        let direction=new Laya.Vector3(face.x,face.y,face.z);
        Laya.Vector3.normalize(direction,direction);

        let angel=Laya.Vector3.dot(forward,direction);
        let deltaAng = (Math.acos(angel) * 180) / Math.PI;

        const out = new Laya.Vector3();
        Laya.Vector3.cross(forward, direction, out);
        if (out.y != 0) {
            if (out.y > 0) 
            {
                deltaAng = -deltaAng;
            }
            
        }
        return deltaAng;
    }


}