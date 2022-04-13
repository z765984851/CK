(function () {
   'use strict';

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

   var CK_EventCode;
   (function (CK_EventCode) {
       CK_EventCode["WindowClose"] = "WindowClose";
       CK_EventCode["PanelClose"] = "PanelClose";
       CK_EventCode["WindowDestroy"] = "WindowDestroy";
       CK_EventCode["PanelDestroy"] = "PanelDestroy";
   })(CK_EventCode || (CK_EventCode = {}));

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
           console.log("OnDestroyWindow1", id, this.CurrentOpenWindow.size);
           let ui = this.GetWindow(id);
           console.log("OnDestroyWindow2", id, this.CurrentOpenWindow.size);
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
               console.log("CloseAllWindow", index, this.CurrentOpenWindow.size);
               ui.Destroy();
               console.log("CloseAllWindow", index, this.CurrentOpenWindow.size);
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

   class GameManager extends Laya.Script {
       constructor() {
           super();
       }
       onAwake() {
           Laya.stage.on(Laya.Event.KEY_DOWN, this, (e) => {
               let keyCode = e.keyCode;
               if (keyCode == 65) {
                   FGUIManager.GetInstance().CloseAllWindow();
               }
           });
           FGUIManager.GetInstance().Init();
           FGUIManager.GetInstance().OpenPanel(CK_UIType.PanelExample, () => { }, null);
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
