using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class TestMove : MonoBehaviour
{
    private Transform transform;
    private Vector3 dir=Vector3.left;
    // Start is called before the first frame update
    void Start()
    {
        transform = GetComponent<Transform>();
    }

    // Update is called once per frame
    void Update()
    {
        Vector3 pos = transform.position;
        transform.Translate(dir*5*Time.deltaTime);
        if (pos.x>=5)
        {
            dir=Vector3.left;
        }

        if (pos.x<=-5)
        {
            dir=Vector3.right;
        }
    }
}
