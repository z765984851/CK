(function () {
   'use strict';

   class CK_FGUIConfig {
       constructor() {
           this.Config = new Map([
               [CK_UIType.PanelExample, new CK_UIConfig("ball_package", "panel_comp", false, false)],
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
       }
       Init() {
           if (this.IsInitFinish == false) {
               this.Config = CK_FGUIConfig.GetInstance().Config.get(CK_UIType.PanelExample);
               this.packagePath = `res/fguipackage/${this.Config.PackageName}/${this.Config.PackageName}`;
               fgui.UIPackage.addPackage(this.packagePath);
               this.Content = fgui.UIPackage.createObject(this.Config.PackageName, this.Config.ComponentName);
               fgui.GRoot.inst.addChild(this.Content);
               this.Content.makeFullScreen();
               this.InitComp();
               this.BindEvent();
               this.Close();
               console.log(this.Config.PackageName, "Init finish");
               this.IsInitFinish = true;
           }
       }
       Show(args) {
           if (this.Content != null) {
               this.Content.visible = true;
           }
       }
       Close() {
           if (this.Content != null) {
               this.Content.visible = false;
           }
           this.ID = 0;
       }
       Destroy() {
           var _a;
           (_a = this.Content) === null || _a === void 0 ? void 0 : _a.dispose();
           fgui.UIPackage.removePackage(this.Config.PackageName);
           this.IsInitFinish = false;
           this.ID = 0;
       }
       InitComp() {
           this.testBtn = this.Content.getChild("openwindow_btn");
       }
       BindEvent() {
           this.testBtn.onClick(this, () => {
               console.log("aaa");
           });
       }
   }

   class FGUIManager {
       constructor() {
           this.CurrentOpenUI = new Array();
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
       }
       LoadUIPackage(uiType, onLoadFinish) {
           if (this.CurrentLoadedPackage.has(uiType)) {
               onLoadFinish();
           }
           else {
               let config = CK_FGUIConfig.GetInstance().Config.get(uiType);
               let packagePath = `res/fguipackage/${config.PackageName}/${config.PackageName}`;
               fgui.UIPackage.loadPackage(packagePath, Laya.Handler.create(this, () => {
                   onLoadFinish();
               }));
           }
       }
       OpenUI(uiType, onLoadFinish, args) {
           let openUI = () => {
               let ui = null;
               if (this.CurrentCreatedUI.has(uiType)) {
                   ui = this.CurrentCreatedUI.get(uiType);
                   if (ui.IsMutiple == true) {
                       ui = this.CreateNewUI(uiType);
                       ui.Init();
                   }
               }
               else {
                   ui = this.CreateNewUI(uiType);
                   ui.Init();
                   this.CurrentCreatedUI.set(uiType, ui);
               }
               if (this.CurrentOpenUI.length != 0) {
                   let lastUI = this.CurrentOpenUI[this.CurrentOpenUI.length - 1];
                   lastUI.Close();
               }
               let id = this.CurrentOpenUI.length + 1;
               ui.ID = id;
               ui.Show(args);
           };
           this.LoadUIPackage(uiType, () => {
               openUI();
               onLoadFinish();
           });
       }
       CreateNewUI(uiType) {
           let ui = null;
           switch (uiType) {
               case CK_UIType.PanelExample:
                   ui = new PanelExample();
                   break;
               case CK_UIType.WindowExample:
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
           FGUIManager.GetInstance().Init();
           FGUIManager.GetInstance().OpenUI(CK_UIType.PanelExample, () => { }, null);
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
