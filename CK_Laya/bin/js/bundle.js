(function () {
    'use strict';

    var CK_EventCode;
    (function (CK_EventCode) {
        CK_EventCode["WindowClose"] = "WindowClose";
        CK_EventCode["PanelClose"] = "PanelClose";
        CK_EventCode["WindowDestroy"] = "WindowDestroy";
        CK_EventCode["PanelDestroy"] = "PanelDestroy";
    })(CK_EventCode || (CK_EventCode = {}));

    class CK_FGUIConfig {
        constructor() {
            this.Config = new Map([
                [CK_UIType.PanelExample, new CK_UIConfig("ball_package", "panel_comp", false, false)],
                [CK_UIType.WindowExample, new CK_UIConfig("ball_package", "window_comp", true, false)],
            ]);
        }
        static GetInstance() {
            if (this.Instance == null) {
                this.Instance = new CK_FGUIConfig();
            }
            return this.Instance;
        }
    }
    var CK_UIType;
    (function (CK_UIType) {
        CK_UIType[CK_UIType["PanelExample"] = 0] = "PanelExample";
        CK_UIType[CK_UIType["WindowExample"] = 1] = "WindowExample";
    })(CK_UIType || (CK_UIType = {}));
    class CK_UIConfig {
        constructor(packageName, componentName, isMutiple, isWindow) {
            this.PackageName = packageName;
            this.ComponentName = componentName;
            this.IsMutiple = isMutiple;
            this.IsWindow = isWindow;
        }
    }

    class PanelExample {
        constructor() {
            this.IsInitFinish = false;
            this.ID = 0;
            this.UIType = CK_UIType.PanelExample;
        }
        Init() {
            if (this.IsInitFinish == false) {
                this.Config = CK_FGUIConfig.GetInstance().Config.get(this.UIType);
                this.packagePath = `res/fguipackage/${this.Config.PackageName}/${this.Config.PackageName}`;
                fgui.UIPackage.addPackage(this.packagePath);
                this.Content = fgui.UIPackage.createObject(this.Config.PackageName, this.Config.ComponentName).asCom;
                fgui.GRoot.inst.addChild(this.Content);
                this.Content.makeFullScreen();
                this.InitComp();
                this.BindEvent();
                this.Close();
                this.IsInitFinish = true;
            }
        }
        Show(args) {
            this.SetVisible(true);
        }
        Close() {
            this.SetVisible(false);
            this.ID = 0;
            Laya.stage.event(CK_EventCode.PanelDestroy, this.ID);
        }
        SetVisible(visible) {
            if (this.Content != null) {
                this.Content.visible = visible;
            }
        }
        Destroy() {
            var _a;
            (_a = this.Content) === null || _a === void 0 ? void 0 : _a.dispose();
            fgui.UIPackage.removePackage(this.Config.PackageName);
            this.IsInitFinish = false;
            this.ID = 0;
            Laya.stage.event(CK_EventCode.PanelDestroy, this.UIType);
        }
        InitComp() {
            this.testBtn = this.Content.getChild("openwindow_btn").asButton;
        }
        BindEvent() {
            this.testBtn.onClick(this, () => {
                FGUIManager.GetInstance().OpenWindow(CK_UIType.WindowExample, () => { });
            });
        }
    }

    class WindowExample extends fgui.Window {
        constructor() {
            super(...arguments);
            this.IsInitFinish = false;
            this.ID = 0;
            this.UIType = CK_UIType.WindowExample;
        }
        Init() {
            if (this.IsInitFinish == false) {
                this.Config = CK_FGUIConfig.GetInstance().Config.get(this.UIType);
                this.packagePath = `res/fguipackage/${this.Config.PackageName}/${this.Config.PackageName}`;
                fgui.UIPackage.addPackage(this.packagePath);
                this.Content = fgui.UIPackage.createObject(this.Config.PackageName, this.Config.ComponentName).asCom;
                this.contentPane = this.Content;
                this.center();
                this.setPivot(0.5, 0.5);
                this.InitComp();
                this.BindEvent();
                this.IsInitFinish = true;
            }
        }
        doShowAnimation() {
            this.setScale(0.1, 0.1);
            fgui.GTween.to2(0.1, 0.1, 1, 1, 0.3)
                .setTarget(this, this.setScale)
                .setEase(fgui.EaseType.QuadOut)
                .onComplete(this.onShown, this);
        }
        doHideAnimation() {
            fgui.GTween.to2(1, 1, 0.1, 0.1, 0.3)
                .setTarget(this, this.setScale)
                .setEase(fgui.EaseType.QuadOut)
                .onComplete(this.hideImmediately, this);
        }
        onShown() {
        }
        onHide() {
            this.ID = 0;
            Laya.stage.event(CK_EventCode.WindowClose);
        }
        onInit() {
            this.Init();
        }
        Show(args) {
            this.show();
            this.title.text = this.ID.toString();
        }
        Close() {
            this.hide();
        }
        Destroy() {
            Laya.stage.event(CK_EventCode.WindowDestroy, this.ID);
            this.dispose();
            this.ID = 0;
            this.IsInitFinish = false;
        }
        SetVisible(visible) {
            if (this.Content != null) {
                this.Content.visible = visible;
            }
        }
        InitComp() {
            this.openBtn = this.Content.getChild("open_btn").asButton;
            this.title = this.Content.getChild("title").asTextField;
        }
        BindEvent() {
            this.openBtn.onClick(this, () => {
                FGUIManager.GetInstance().OpenWindow(CK_UIType.WindowExample, () => { });
            });
        }
    }

    class FGUIManager {
        constructor() {
            this.CurrentOpenWindow = new Map();
            this.CurrentOpenPanel = new Array();
            this.CurrentCreatedUI = new Map();
            this.CurrentLoadedPackage = new Map();
        }
        static GetInstance() {
            if (this.Instance == null) {
                this.Instance = new FGUIManager();
            }
            return this.Instance;
        }
        Init() {
            Laya.stage.addChild(fgui.GRoot.inst.displayObject);
            Laya.stage.on(CK_EventCode.WindowClose, this, () => {
                this.OnCloseWindow();
            });
            Laya.stage.on(CK_EventCode.WindowDestroy, this, (arg) => {
                this.OnDestroyWindow(arg);
            });
            Laya.stage.on(CK_EventCode.PanelDestroy, this, (arg) => {
                this.OnDestroyPanel(arg);
            });
        }
        LoadUIPackage(uiType, onLoadFinish) {
            if (this.CurrentLoadedPackage.has(uiType)) {
                onLoadFinish();
            }
            else {
                let config = CK_FGUIConfig.GetInstance().Config.get(uiType);
                let packagePath = `res/fguipackage/${config.PackageName}/${config.PackageName}`;
                fgui.UIPackage.loadPackage(packagePath, Laya.Handler.create(this, () => {
                    this.CurrentLoadedPackage.set(uiType, config);
                    onLoadFinish();
                }));
            }
        }
        OpenWindow(uiType, onLoadFinish, args) {
            let openUI = () => {
                let ui = null;
                let config = CK_FGUIConfig.GetInstance().Config.get(uiType);
                if (config.IsMutiple || this.CurrentCreatedUI.has(uiType) == false) {
                    ui = this.CreateNewUI(uiType);
                    this.CurrentCreatedUI.set(uiType, ui);
                }
                else {
                    console.log("window", uiType, "can not mutiple open");
                    return;
                }
                if (this.CurrentOpenWindow.size != 0) {
                    let lastUI = this.CurrentOpenWindow.get(this.CurrentOpenWindow.size);
                    lastUI.SetVisible(false);
                }
                let id = this.CurrentOpenWindow.size + 1;
                ui.ID = id;
                ui.Show(args);
                this.CurrentOpenWindow.set(id, ui);
            };
            this.LoadUIPackage(uiType, () => {
                openUI();
                onLoadFinish();
            });
        }
        OpenPanel(uiType, onLoadFinish, ifDestroyLast = true, args) {
            let openUI = () => {
                let ui = null;
                let config = CK_FGUIConfig.GetInstance().Config.get(uiType);
                if (this.CurrentCreatedUI.has(uiType) == false) {
                    ui = this.CreateNewUI(uiType);
                    ui.Init();
                    this.CurrentCreatedUI.set(uiType, ui);
                }
                else {
                    ui = this.CurrentCreatedUI.get(uiType);
                }
                if (this.CurrentOpenPanel.length != 0) {
                    let lastPanel = this.CurrentOpenPanel.pop();
                    if (ifDestroyLast) {
                        lastPanel.Destroy();
                    }
                    else {
                        lastPanel.SetVisible(false);
                    }
                }
                let id = this.CurrentOpenPanel.length + 1;
                ui.ID = id;
                ui.Show(args);
                this.CurrentOpenPanel.push(ui);
            };
            this.LoadUIPackage(uiType, () => {
                openUI();
                onLoadFinish();
            });
        }
        GetWindow(id) {
            let ui = null;
            if (id <= this.CurrentOpenWindow.size) {
                ui = this.CurrentOpenWindow.get(id);
            }
            else {
                console.log("GetWindow", id, "is out of bounds");
            }
            return ui;
        }
        GetPanel(uiType) {
            for (let index = 0; index < this.CurrentOpenPanel.length; index++) {
                let element = this.CurrentOpenPanel[index];
                if (element.UIType == uiType) {
                    return element;
                }
            }
            return null;
        }
        OnCloseWindow() {
            this.CurrentOpenWindow.delete(this.CurrentOpenWindow.size);
            if (this.CurrentOpenWindow.size != 0) {
                let lastUI = this.CurrentOpenWindow.get(this.CurrentOpenWindow.size);
                lastUI.SetVisible(true);
            }
        }
        OnDestroyWindow(id) {
            let ui = this.GetWindow(id);
            if (!this.IfOpenThisWindow(ui.UIType)) {
                if (this.CurrentCreatedUI.has(ui.UIType)) {
                    this.CurrentCreatedUI.delete(ui.UIType);
                }
            }
        }
        OnDestroyPanel(uiType) {
            let ui = this.GetPanel(uiType);
            if (this.CurrentCreatedUI.has(uiType)) {
                this.CurrentCreatedUI.delete(uiType);
            }
        }
        CloseAllWindow() {
            let windowCount = this.CurrentOpenWindow.size;
            for (let index = windowCount; index > 0; index--) {
                let ui = this.CurrentOpenWindow.get(index);
                ui.Destroy();
            }
            this.CurrentOpenWindow.clear();
        }
        IfOpenThisWindow(uiType) {
            for (let index = 0; index < this.CurrentOpenWindow.size; index++) {
                let element = this.CurrentOpenWindow.get(index + 1);
                if (element.UIType == uiType) {
                    return true;
                }
            }
            return false;
        }
        CreateNewUI(uiType) {
            let ui = null;
            switch (uiType) {
                case CK_UIType.PanelExample:
                    ui = new PanelExample();
                    break;
                case CK_UIType.WindowExample:
                    ui = new WindowExample();
                    break;
                default:
                    break;
            }
            return ui;
        }
    }

    class BattleScene {
        constructor(scene) {
            this.SceneType = SceneType.BattleScene;
            this.r_ball = 0.5;
            this.PI = 3.14;
            this.Scene = scene;
            this.Init();
        }
        Init() {
            this.Camera = this.Scene.getChildByName("Main Camera");
            this.Light = this.Scene.getChildByName("Directional Light");
            this.ball = this.Scene.getChildByName("DragonBall");
            this.OpenShadow();
            this.BindEvent();
        }
        OpenShadow() {
            this.Light.shadowMode = 1;
        }
        BindEvent() {
            Laya.stage.on(Laya.Event.KEY_PRESS, this, (e) => {
                let keyCode = e.keyCode;
                console.log(keyCode);
                this.currentPos = this.ball.transform.position;
                this.tempX = this.currentPos.x;
                this.tempY = this.currentPos.y;
                this.tempZ = this.currentPos.z;
                if (keyCode == 115) {
                    this.tempZ += 0.01;
                }
                if (keyCode == 119) {
                    this.tempZ -= 0.01;
                }
                if (keyCode == 100) {
                    this.tempX += 0.01;
                }
                if (keyCode == 97) {
                    this.tempX -= 0.01;
                }
                this.newPos = new Laya.Vector3(this.tempX, this.tempY, this.tempZ);
                if (this.newPos != this.currentPos) {
                    let dis = Laya.Vector3.distance(this.newPos, this.currentPos);
                    let angle = 360 * (dis / (this.r_ball * this.PI));
                    let forward = new Laya.Vector3(0, 0, 0);
                    Laya.Vector3.subtract(this.newPos, this.currentPos, forward);
                    Laya.Vector3.cross(new Laya.Vector3(0, 1, 0), forward, forward);
                    Laya.Vector3.scale(forward, angle * 100, forward);
                    console.log(forward);
                    this.ball.transform.rotate(forward, false, false);
                    this.ball.transform.position = this.newPos;
                }
            });
            Laya.timer.frameLoop(1, this, () => {
                this.Camera.transform.position = new Laya.Vector3(this.ball.transform.position.x, 4, this.ball.transform.position.z);
            });
        }
    }

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
                [SceneType.BattleScene, "res/unityscenes/LayaScene_BattleScene/Conventional/BattleScene.ls"]
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
            if (sceneType == SceneType.None) {
                if (this.CurrentActiveScene != null) {
                    Laya.stage.removeChild(this.CurrentActiveScene.Scene);
                    this.CurrentActiveScene = null;
                }
            }
            else {
                let url = this.ScenePathMap.get(sceneType);
                let scene = ResMananger.GetInstance().GetRes(url);
                Laya.stage.addChild(scene);
                switch (sceneType) {
                    case SceneType.BattleScene:
                        this.CurrentActiveScene = new BattleScene(scene);
                        break;
                    default:
                        break;
                }
            }
        }
    }
    var SceneType;
    (function (SceneType) {
        SceneType["None"] = "None";
        SceneType["BattleScene"] = "BattleScene";
    })(SceneType || (SceneType = {}));

    class GameManager extends Laya.Script {
        constructor() {
            super();
        }
        onAwake() {
            this.Init();
            SceneManager.GetInstance().LoadScene3D(SceneType.BattleScene, Laya.Handler.create(this, () => {
                SceneManager.GetInstance().ChangeScene3D(SceneType.BattleScene);
            }));
        }
        Init() {
            FGUIManager.GetInstance().Init();
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
