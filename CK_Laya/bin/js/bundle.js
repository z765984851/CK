(function () {
   'use strict';

   class CK_FGUIConfig {
       constructor() {
           this.Config = new Map([
               [CK_UIType.PanelExample, new CK_UIConfig("ball_package", "panel_comp", false, false)],
               [CK_UIType.WindowExample, new CK_UIConfig("ball_package", "window_comp", true, false)],
               [CK_UIType.LoadingPanel, new CK_UIConfig("loading_package", "loading_comp", false, false)],
               [CK_UIType.LobbyPanel, new CK_UIConfig("lobby_package", "lobby_comp", false, false)],
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
       CK_UIType[CK_UIType["LoadingPanel"] = 2] = "LoadingPanel";
       CK_UIType[CK_UIType["LobbyPanel"] = 3] = "LobbyPanel";
   })(CK_UIType || (CK_UIType = {}));
   class CK_UIConfig {
       constructor(packageName, componentName, isMutiple, isWindow) {
           this.PackageName = packageName;
           this.ComponentName = componentName;
           this.IsMutiple = isMutiple;
           this.IsWindow = isWindow;
       }
   }

   var CK_EventCode;
   (function (CK_EventCode) {
       CK_EventCode["WindowClose"] = "WindowClose";
       CK_EventCode["PanelClose"] = "PanelClose";
       CK_EventCode["WindowDestroy"] = "WindowDestroy";
       CK_EventCode["PanelDestroy"] = "PanelDestroy";
       CK_EventCode["GetServerResp"] = "GetServerResp";
       CK_EventCode["LoadingProgressChange"] = "LoadingProgressChange";
   })(CK_EventCode || (CK_EventCode = {}));

   class FGUI_LoadingPanel {
       constructor() {
           this.UIType = CK_UIType.LoadingPanel;
           this.IsInitFinish = false;
           this.ID = 0;
       }
       Init() {
           if (this.IsInitFinish == false) {
               this.Config = CK_FGUIConfig.GetInstance().Config.get(this.UIType);
               this.Content = fgui.UIPackage.createObject(this.Config.PackageName, this.Config.ComponentName).asCom;
               fgui.GRoot.inst.addChild(this.Content);
               this.Content.makeFullScreen();
               this.InitComp();
               this.SetVisible(false);
               this.IsInitFinish = true;
           }
       }
       Show(args) {
           this.SetVisible(true);
           this.animRotate.play(null, -1);
           this.animText.play(null, -1);
           Laya.stage.on(CK_EventCode.LoadingProgressChange, this, this.ChangeProgress);
       }
       Close() {
           this.SetVisible(false);
           this.ID = 0;
           Laya.stage.off(CK_EventCode.LoadingProgressChange, this, this.ChangeProgress);
           Laya.stage.event(CK_EventCode.PanelDestroy, this.ID);
       }
       Destroy() {
           var _a;
           (_a = this.Content) === null || _a === void 0 ? void 0 : _a.dispose();
           fgui.UIPackage.removePackage(this.Config.PackageName);
           this.IsInitFinish = false;
           this.ID = 0;
           Laya.stage.event(CK_EventCode.PanelDestroy, this.UIType);
       }
       SetVisible(visible) {
           if (this.Content != null) {
               this.Content.visible = visible;
           }
       }
       InitComp() {
           this.progressText = this.Content.getChild("openwindow_btn");
           this.animRotate = this.Content.getTransition("loading_logospinning _anim");
           this.animText = this.Content.getTransition("loading_titlechange_anim");
       }
       ChangeProgress(value) {
           this.progressText.text = value + "%";
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
               FGUIManager.GetInstance().AddPackage(this.Config.PackageName);
               this.Content = fgui.UIPackage.createObject(this.Config.PackageName, this.Config.ComponentName).asCom;
               fgui.GRoot.inst.addChild(this.Content);
               this.Content.makeFullScreen();
               this.InitComp();
               this.BindEvent();
               this.SetVisible(false);
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

   var BallType;
   (function (BallType) {
       BallType["Dragon"] = "DragonBall.lh";
       BallType["Fe"] = "FeBall.lh";
       BallType["Wood"] = "WoodBall.lh";
       BallType["Stone"] = "StoneBall.lh";
   })(BallType || (BallType = {}));

   class ArrayHelper {
       constructor() {
       }
       static GetInstance() {
           if (this.Instance == null) {
               this.Instance = new ArrayHelper();
           }
           return this.Instance;
       }
       HasElement(array, suit) {
           for (let index = 0; index < array.length; index++) {
               const element = array[index];
               if (element == suit) {
                   return true;
               }
           }
           return false;
       }
       GetElementIndex(array, suit) {
           for (let index = 0; index < array.length; index++) {
               const element = array[index];
               if (element == suit) {
                   return index;
               }
           }
           return null;
       }
       RemoveElementFromArray(array, suit) {
           let index = this.GetElementIndex(array, suit);
           if (index != null) {
               array.splice(index, 1);
           }
       }
   }

   class ResMananger {
       constructor() {
           this.BaseScenePath = "res/unityscenes/LayaScene_BattleScene/Conventional/";
           this.BasePrefabPath = "res/unityscenes/LayaScene_PrefabScene/Conventional/";
           this.loadedPath = new Array();
       }
       static GetInstance() {
           if (this.Instance == null) {
               this.Instance = new ResMananger();
           }
           return this.Instance;
       }
       Init() {
       }
       Preload2DRes(complete, progress) {
           let preload2DPath = new Array();
           let needLoadLength = preload2DPath.length;
           let preloadFunc = () => {
               if (preload2DPath.length != 0) {
                   let path = preload2DPath.pop();
                   this.Load2DRes(path, Laya.Handler.create(this, (result) => {
                       if (result != null) {
                           let currentProgress = (needLoadLength - preload2DPath.length) / needLoadLength;
                           progress === null || progress === void 0 ? void 0 : progress.runWith(currentProgress);
                           preloadFunc();
                       }
                       else {
                           complete === null || complete === void 0 ? void 0 : complete.runWith(false);
                       }
                   }));
               }
               else {
                   complete === null || complete === void 0 ? void 0 : complete.runWith(true);
               }
           };
           preloadFunc();
       }
       Preload3DRes(complete, progress) {
           let preload3DPath = new Array();
           for (const key in BallType) {
               preload3DPath.push(this.BasePrefabPath + BallType[key]);
           }
           let needLoadLength = preload3DPath.length;
           let preloadFunc = () => {
               if (preload3DPath.length != 0) {
                   let path = preload3DPath.pop();
                   this.Load3DRes(path, Laya.Handler.create(this, (result) => {
                       if (result != null) {
                           let currentProgress = (needLoadLength - preload3DPath.length) / needLoadLength;
                           progress === null || progress === void 0 ? void 0 : progress.runWith(currentProgress);
                           preloadFunc();
                       }
                       else {
                           complete === null || complete === void 0 ? void 0 : complete.runWith(false);
                       }
                   }));
               }
               else {
                   complete === null || complete === void 0 ? void 0 : complete.runWith(true);
               }
           };
           preloadFunc();
       }
       Load2DRes(path, complete, progress) {
           if (this.IsLoaded(path)) {
               return;
           }
           Laya.loader.load(path, Laya.Handler.create(this, (result) => {
               this.loadedPath.push(path);
               complete === null || complete === void 0 ? void 0 : complete.runWith(result);
           }), progress);
       }
       Load3DRes(path, complete, progress) {
           if (this.IsLoaded(path)) {
               return;
           }
           Laya.loader.create(path, Laya.Handler.create(this, (result) => {
               this.loadedPath.push(path);
               complete === null || complete === void 0 ? void 0 : complete.runWith(result);
           }), progress);
       }
       GetRes(url) {
           let result = Laya.loader.getRes(url);
           if (result == null) {
               console.log(url, "Get Failed");
           }
           return result;
       }
       IsLoaded(path) {
           let result = ArrayHelper.GetInstance().HasElement(this.loadedPath, path);
           return result;
       }
       ReleaseRes(path) {
           if (this.IsLoaded(path)) {
               Laya.loader.clearRes(path);
               ArrayHelper.GetInstance().RemoveElementFromArray(this.loadedPath, path);
           }
       }
   }

   class BallFactory {
       constructor() {
           this.pool = new Map();
           this.ballMap = new Map();
       }
       static GetInstance() {
           if (this.Instance == null) {
               this.Instance = new BallFactory();
           }
           return this.Instance;
       }
       Init() {
           this.poolParent = new Laya.Scene();
           Laya.stage.addChild(this.poolParent);
       }
       GetBall(ballType) {
           let ball = null;
           if (this.pool.has(ballType)) {
               if (this.pool.get(ballType).length == 0) {
                   this.CreateBall(ballType);
               }
           }
           else {
               this.CreateBall(ballType);
           }
           let array = this.pool.get(ballType);
           ball = array.pop();
           return ball;
       }
       ResycleBall(ballType, ball) {
           ball.active = false;
           this.pool[ballType].push(ball);
       }
       CreateBall(ballType) {
           if (!this.pool.has(ballType)) {
               this.pool.set(ballType, new Array);
           }
           let array = this.pool.get(ballType);
           let ball = null;
           if (!this.ballMap.has(ballType)) {
               let path = ResMananger.GetInstance().BasePrefabPath + ballType;
               ball = ResMananger.GetInstance().GetRes(path);
               this.ballMap.set(ballType, ball);
           }
           let ballPrefab = this.ballMap.get(ballType);
           ball = Laya.Sprite3D.instantiate(ballPrefab, ball);
           this.poolParent.addChild(ball);
           array.push(ball);
       }
       TestBall() {
           this.GetBall(BallType.Dragon);
       }
   }

   class UIBall {
       constructor(root, ballType, scale = 1) {
           this.root = root;
           this.BallType = ballType;
           this.scale = scale;
       }
       Show() {
           this.ballScene = new Laya.Scene3D();
           this.root.addChild(this.ballScene);
           this.uiCamera = new Laya.Camera();
           this.ballScene.addChild(this.uiCamera);
           let globalPoint = this.root.localToGlobal(new Laya.Point(0, 0));
           this.uiCamera.viewport = new Laya.Viewport(globalPoint.x, globalPoint.y, this.root.width, this.root.height);
           this.uiCamera.transform.position = new Laya.Vector3(0, 1 * this.scale, 0);
           this.uiCamera.transform.rotationEuler = new Laya.Vector3(-90, 0, 180);
           this.uiCamera.clearFlag = Laya.CameraClearFlags.DepthOnly;
           this.uiCamera.clearColor = null;
           this.directionLight = this.ballScene.addChild(new Laya.DirectionLight());
           var mat = this.directionLight.transform.worldMatrix;
           mat.setForward(new Laya.Vector3(-1, -1, 0));
           this.directionLight.transform.worldMatrix = mat;
           this.ball = BallFactory.GetInstance().GetBall(this.BallType);
           this.ballScene.addChild(this.ball);
           this.ball.transform.localPosition = new Laya.Vector3(0, 0, 0);
           this.ball.transform.localScale = new Laya.Vector3(1, 1, 1);
           this.ball.active = true;
       }
       Change(root, ballType, scale = 1) {
           this.root = root;
           this.BallType = ballType;
           this.scale = scale;
           this.root.addChild(this.ballScene);
           let globalPoint = this.root.localToGlobal(new Laya.Point(0, 0));
           this.uiCamera.viewport = new Laya.Viewport(globalPoint.x, globalPoint.y, this.root.width, this.root.height);
           this.ball = BallFactory.GetInstance().GetBall(this.BallType);
           this.ballScene.addChild(this.ball);
           this.ball.transform.localPosition = new Laya.Vector3(0, 0, 0);
           this.ball.transform.localScale = new Laya.Vector3(1, 1, 1);
           this.ball.active = true;
       }
       Destroy() {
           this.Resycle();
           this.ballScene.destroy();
       }
       Resycle() {
           BallFactory.GetInstance().ResycleBall(this.BallType, this.ball);
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
           let uiBall = new UIBall(this.ball_loader.displayObject, BallType.Dragon, 0.7);
           uiBall.Show();
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
           this.ball_loader = this.Content.getChild("ball_loader");
           this.ball_holder = this.Content.getChild("ball_holder");
       }
       BindEvent() {
           this.openBtn.onClick(this, () => {
               FGUIManager.GetInstance().OpenWindow(CK_UIType.WindowExample, () => { });
           });
       }
   }

   class UIHpSlider {
       constructor(root, camera) {
           this.currentPos = new Laya.Vector4(0, 0, 0, 0);
           this.root = root;
           this.camera = camera;
       }
       Show() {
           this.component = fgui.UIPackage.createObject("ball_package", "hp_slider");
           fgui.GRoot.inst.addChild(this.component);
       }
       Follow() {
           this.camera.viewport.project(this.root.transform.position, this.camera.projectionViewMatrix, this.currentPos);
           this.component.displayObject.pos(this.currentPos.x, this.currentPos.y);
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
           this.OpenShadow();
           this.BindEvent();
           this.CreateBall();
       }
       OpenShadow() {
           this.Light.shadowMode = 1;
       }
       CreateBall() {
           this.ball = BallFactory.GetInstance().GetBall(BallType.Dragon);
           this.Scene.addChild(this.ball);
           this.ball.transform.localPosition = new Laya.Vector3(0, 0, 0);
           this.ball.transform.localScale = new Laya.Vector3(1, 1, 1);
           this.ball.active = true;
           this.slider = new UIHpSlider(this.ball, this.Camera);
           this.slider.Show();
           this.slider.Follow();
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

   class SceneManager {
       constructor() {
       }
       static GetInstance() {
           if (this.Instance == null) {
               this.Instance = new SceneManager();
           }
           return this.Instance;
       }
       Init() {
           this.GameScene = new Laya.Scene();
           Laya.stage.addChild(this.GameScene);
           this.UIScene = new Laya.Scene();
           Laya.stage.addChild(this.UIScene);
       }
       LoadScene3D(sceneType, complete, progress) {
           let url = ResMananger.GetInstance().BaseScenePath + sceneType;
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
               let url = ResMananger.GetInstance().BaseScenePath + sceneType;
               let scene = ResMananger.GetInstance().GetRes(url);
               this.GameScene.addChild(scene);
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
       SceneType["BattleScene"] = "BattleScene.ls";
   })(SceneType || (SceneType = {}));

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
           SceneManager.GetInstance().UIScene.addChild(fgui.GRoot.inst.displayObject);
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
       LoadUIPackage(packageName, onLoadFinish) {
           if (this.CurrentLoadedPackage.has(packageName)) {
               onLoadFinish();
           }
           else {
               let packagePath = `res/fguipackage/${packageName}/${packageName}`;
               fgui.UIPackage.loadPackage(packagePath, Laya.Handler.create(this, () => {
                   this.CurrentLoadedPackage.set(packageName, packageName);
                   onLoadFinish();
               }));
           }
       }
       LoadUIPackages(packageNames, onLoadFinish, onLoadProgress) {
           let progress = 0;
           let wholeValue = packageNames.length;
           let progressFloat = 0;
           for (let index = 0; index < wholeValue; index++) {
               const packageName = packageNames[index];
               this.LoadUIPackage(packageName, () => {
                   progress++;
                   progressFloat = progress / wholeValue;
                   onLoadProgress(progressFloat);
                   if (progress == wholeValue) {
                       onLoadFinish();
                   }
               });
           }
       }
       AddPackage(packageName) {
           let packagePath = `res/fguipackage/${packageName}/${packageName}`;
           fgui.UIPackage.addPackage(packagePath);
       }
       OpenWindow(uiType, onLoadFinish, args) {
           let config = CK_FGUIConfig.GetInstance().Config.get(uiType);
           let openUI = () => {
               let ui = null;
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
           this.LoadUIPackage(config.PackageName, () => {
               openUI();
               onLoadFinish();
           });
       }
       OpenPanel(uiType, onLoadFinish, ifDestroyLast = true, args) {
           let config = CK_FGUIConfig.GetInstance().Config.get(uiType);
           let openUI = () => {
               let ui = null;
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
           this.LoadUIPackage(config.PackageName, () => {
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
               case CK_UIType.LoadingPanel:
                   ui = new FGUI_LoadingPanel();
                   break;
               default:
                   break;
           }
           return ui;
       }
   }

   class GameManager extends Laya.Script {
       constructor() {
           super();
       }
       onAwake() {
           this.Init();
       }
       Init() {
           this.InitManager();
           this.InitFGUI();
       }
       InitManager() {
           SceneManager.GetInstance().Init();
           FGUIManager.GetInstance().Init();
       }
       InitFGUI() {
           let preloadPackage = ["common_font_package", "loading_package"];
           let onLoadFinish = () => {
               for (let index = 0; index < preloadPackage.length; index++) {
                   const element = preloadPackage[index];
                   FGUIManager.GetInstance().AddPackage(element);
               }
               this.ShowLoadingPanel();
           };
           let onProgress = (progress) => {
               console.log("InitFGUI", progress);
           };
           FGUIManager.Instance.LoadUIPackages(preloadPackage, onLoadFinish, onProgress);
       }
       ShowLoadingPanel() {
           FGUIManager.GetInstance().OpenPanel(CK_UIType.LoadingPanel, () => { }, null);
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
