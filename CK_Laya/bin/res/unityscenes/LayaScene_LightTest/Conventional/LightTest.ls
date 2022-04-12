{
	"version":"LAYASCENE3D:02",
	"data":{
		"type":"Scene3D",
		"props":{
			"name":"LightTest",
			"ambientColor":[
				0.212,
				0.227,
				0.259
			],
			"reflectionDecodingFormat":1,
			"reflection":"Assets/Scenes/LightTestGIReflection.ltcb.ls",
			"reflectionIntensity":1,
			"ambientMode":1,
			"ambientSphericalHarmonics":[
				0.1678838,
				-0.01659165,
				-0.01137983,
				0.00656961,
				0.004985159,
				-0.008635049,
				0.009734819,
				-0.01030053,
				0.02333619,
				0.2107363,
				0.02701665,
				-0.0188861,
				0.01090373,
				0.008416965,
				-0.01457904,
				0.01416337,
				-0.01572322,
				0.03351215,
				0.2899413,
				0.1099665,
				-0.0348094,
				0.02009422,
				0.01630473,
				-0.02824404,
				0.01814265,
				-0.02374644,
				0.04080036
			],
			"ambientSphericalHarmonicsIntensity":1,
			"lightmaps":[
				{
					"constructParams":[
						512,
						512,
						1,
						false
					],
					"propertyParams":{
						"filterMode":1,
						"wrapModeU":1,
						"wrapModeV":1,
						"anisoLevel":3
					},
					"color":{
						"path":"Assets/Scenes/LightTest/Lightmap-0_comp_light.png"
					},
					"direction":{
						"path":"Assets/Scenes/LightTest/Lightmap-0_comp_dir.png"
					}
				}
			],
			"enableFog":false,
			"fogStart":0,
			"fogRange":300,
			"fogColor":[
				0.5,
				0.5,
				0.5
			]
		},
		"child":[
			{
				"type":"Camera",
				"instanceID":0,
				"props":{
					"name":"Main Camera",
					"active":true,
					"isStatic":false,
					"layer":0,
					"position":[
						0,
						1,
						-10
					],
					"rotation":[
						0,
						1,
						0,
						0
					],
					"scale":[
						1,
						1,
						1
					],
					"clearFlag":1,
					"orthographic":false,
					"orthographicVerticalSize":10,
					"fieldOfView":60,
					"enableHDR":true,
					"nearPlane":0.3,
					"farPlane":1000,
					"viewport":[
						0,
						0,
						1,
						1
					],
					"clearColor":[
						0.1921569,
						0.3019608,
						0.4745098,
						0
					]
				},
				"components":[],
				"child":[]
			},
			{
				"type":"DirectionLight",
				"instanceID":1,
				"props":{
					"name":"Directional Light",
					"active":true,
					"isStatic":false,
					"layer":0,
					"position":[
						0,
						3,
						0
					],
					"rotation":[
						0.1093816,
						0.8754261,
						0.4082179,
						-0.2345697
					],
					"scale":[
						1,
						1,
						1
					],
					"intensity":1,
					"lightmapBakedType":2,
					"color":[
						1,
						0.9568627,
						0.8392157
					]
				},
				"components":[],
				"child":[]
			},
			{
				"type":"MeshSprite3D",
				"instanceID":2,
				"props":{
					"name":"Cube",
					"active":true,
					"isStatic":true,
					"layer":0,
					"position":[
						-0.6016636,
						0.4732833,
						-0.1627936
					],
					"rotation":[
						0,
						0,
						0,
						-1
					],
					"scale":[
						1,
						1,
						1
					],
					"meshPath":"Library/unity default resources-Cube.lm",
					"lightmapIndex":0,
					"lightmapScaleOffset":[
						0.2380894,
						0.2380894,
						-0.0009656351,
						0.7841906
					],
					"enableRender":true,
					"receiveShadows":true,
					"castShadow":true,
					"materials":[
						{
							"type":"Laya.BlinnPhongMaterial",
							"path":"Resources/unity_builtin_extra.lmat"
						}
					]
				},
				"components":[
					{
						"type":"PhysicsCollider",
						"restitution":0,
						"friction":0.5,
						"rollingFriction":0,
						"shapes":[
							{
								"type":"BoxColliderShape",
								"center":[
									0,
									0,
									0
								],
								"size":[
									1,
									1,
									1
								]
							}
						],
						"isTrigger":false
					}
				],
				"child":[]
			},
			{
				"type":"MeshSprite3D",
				"instanceID":3,
				"props":{
					"name":"Plane",
					"active":true,
					"isStatic":true,
					"layer":0,
					"position":[
						-0.6016636,
						0.07,
						-0.1627936
					],
					"rotation":[
						0,
						0,
						0,
						-1
					],
					"scale":[
						1,
						1,
						1
					],
					"meshPath":"Library/unity default resources-Plane.lm",
					"lightmapIndex":0,
					"lightmapScaleOffset":[
						0.78125,
						0.78125,
						0,
						0
					],
					"enableRender":true,
					"receiveShadows":true,
					"castShadow":true,
					"materials":[
						{
							"type":"Laya.BlinnPhongMaterial",
							"path":"Resources/unity_builtin_extra.lmat"
						}
					]
				},
				"components":[
					{
						"type":"PhysicsCollider",
						"restitution":0,
						"friction":0.5,
						"rollingFriction":0,
						"shapes":[
							{
								"type":"MeshColliderShape",
								"mesh":"Library/unity default resources-Plane.lm"
							}
						],
						"isTrigger":false
					}
				],
				"child":[]
			}
		]
	}
}