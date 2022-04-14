using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class RotateTest : MonoBehaviour
{

    private Transform _transform;

    private float tempX;
    private float tempY;
    private float tempZ;
    // Start is called before the first frame update
    void Start()
    {
        _transform = this.GetComponent<Transform>();
        
    }

    // Update is called once per frame
    void FixedUpdate()
    {

        Vector3 currentPos = transform.position;
        tempX = currentPos.x;
        tempY = currentPos.y;
        tempZ = currentPos.z;
        if (Input.GetKey(KeyCode.W))
        {
            tempZ = tempZ - 0.01f;
        }
        if (Input.GetKey(KeyCode.A))
        {
            tempX = tempX + 0.01f;
        }
        if (Input.GetKey(KeyCode.S))
        {
            tempZ = tempZ + 0.01f;
        }
        if (Input.GetKey(KeyCode.D))
        {
            tempX = tempX - 0.01f;
        }


        Vector3 newPos = new Vector3(tempX, tempY, tempZ);
        if (newPos!=transform.position)
        {
            // //角度
            float dis = Vector3.Distance(newPos , currentPos);
            float angle = 360 * (dis / 0.5f * Mathf.PI);
            //轴
            Vector3 forward = newPos - currentPos;
            forward = Vector3.Cross(Vector3.up,forward);
            // forward=Vector3.
            // transform.Rotate((forward)*200);
            transform.RotateAround(transform.position,forward,angle*Time.deltaTime*5);
            
        }
        
        transform.position = newPos;
    }
}
