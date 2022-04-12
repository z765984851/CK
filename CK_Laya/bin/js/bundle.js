(function () {
    'use strict';

    class ResMananger {
        constructor() {
        }
        static GetInstance() {
            if (this.Instance == null) {
                this.Instance = new ResMananger();
            }
            return this.Instance;
        }
        Load2DRes(resName, complete, progress) {
            Laya.loader.load(resName, complete, progress);
        }
        Load3DRes(resName, complete, progress) {
            Laya.loader.create(resName, complete, progress);
        }
        GetRes(url) {
            let result = Laya.loader.getRes(url);
            if (result == null) {
                console.log(url, "Get Failed");
            }
            return result;
        }
    }

    class SceneManager {
        constructor() {
            this.ScenePathMap = new Map([
                [SceneType.GameScene, "res/unityscenes/LayaScene_LightTest/Conventional/LightTest.ls"]
            ]);
        }
        static GetInstance() {
            if (this.Instance == null) {
                this.Instance = new SceneManager();
            }
            return this.Instance;
        }
        LoadScene3D(sceneType, complete, progress) {
            let url = this.ScenePathMap.get(sceneType);
            ResMananger.GetInstance().Load3DRes(url, complete, progress);
        }
        ChangeScene3D(sceneType) {
            let url = this.ScenePathMap.get(sceneType);
            let scene = ResMananger.GetInstance().GetRes(url);
            Laya.stage.addChild(scene);
            this.CurrentActiveScene = scene;
        }
    }
    var SceneType;
    (function (SceneType) {
        SceneType[SceneType["GameScene"] = 1] = "GameScene";
    })(SceneType || (SceneType = {}));

    class GameManager extends Laya.Script {
        constructor() {
            super();
        }
        onAwake() {
            SceneManager.GetInstance().LoadScene3D(SceneType.GameScene, Laya.Handler.create(this, () => {
                SceneManager.GetInstance().ChangeScene3D(SceneType.GameScene);
            }));
        }
    }

    class GameConfig {
        constructor() { }
        static init() {
            var reg = Laya.ClassUtils.regClass;
            reg("GameLogic/Manager/GameManager.ts", GameManager);
        }
    }
    GameConfig.width = 1600;
    GameConfig.height = 900;
    GameConfig.scaleMode = "fixedwidth";
    GameConfig.screenMode = "horizontal";
    GameConfig.alignV = "top";
    GameConfig.alignH = "left";
    GameConfig.startScene = "StartScene.scene";
    GameConfig.sceneRoot = "";
    GameConfig.debug = true;
    GameConfig.stat = true;
    GameConfig.physicsDebug = false;
    GameConfig.exportSceneToJson = true;
    GameConfig.init();

    class Main {
        constructor() {
            if (window["Laya3D"])
                Laya3D.init(GameConfig.width, GameConfig.height);
            else
                Laya.init(GameConfig.width, GameConfig.height, Laya["WebGL"]);
            Laya["Physics"] && Laya["Physics"].enable();
            Laya["DebugPanel"] && Laya["DebugPanel"].enable();
            Laya.stage.scaleMode = GameConfig.scaleMode;
            Laya.stage.screenMode = GameConfig.screenMode;
            Laya.stage.alignV = GameConfig.alignV;
            Laya.stage.alignH = GameConfig.alignH;
            Laya.URL.exportSceneToJson = GameConfig.exportSceneToJson;
            if (GameConfig.debug || Laya.Utils.getQueryString("debug") == "true")
                Laya.enableDebugPanel();
            if (GameConfig.physicsDebug && Laya["PhysicsDebugDraw"])
                Laya["PhysicsDebugDraw"].enable();
            if (GameConfig.stat)
                Laya.Stat.show();
            Laya.alertGlobalError(true);
            Laya.ResourceVersion.enable("version.json", Laya.Handler.create(this, this.onVersionLoaded), Laya.ResourceVersion.FILENAME_VERSION);
        }
        onVersionLoaded() {
            Laya.AtlasInfoManager.enable("fileconfig.json", Laya.Handler.create(this, this.onConfigLoaded));
        }
        onConfigLoaded() {
            GameConfig.startScene && Laya.Scene.open(GameConfig.startScene);
        }
    }
    new Main();

}());
