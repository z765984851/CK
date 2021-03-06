(function () {
    'use strict';

    var CK_EventCode;
    (function (CK_EventCode) {
        CK_EventCode["WindowClose"] = "WindowClose";
        CK_EventCode["PanelClose"] = "PanelClose";
        CK_EventCode["WindowDestroy"] = "WindowDestroy";
        CK_EventCode["PanelDestroy"] = "PanelDestroy";
        CK_EventCode["GetServerResp"] = "GetServerResp";
        CK_EventCode["LoadingProgressChange"] = "LoadingProgressChange";
        CK_EventCode["RegularSuccess"] = "RegularSuccess";
    })(CK_EventCode || (CK_EventCode = {}));

    var RequestCMD;
    (function (RequestCMD) {
        RequestCMD[RequestCMD["Verify"] = 201] = "Verify";
        RequestCMD[RequestCMD["CreateRole"] = 202] = "CreateRole";
        RequestCMD[RequestCMD["EnterGame"] = 203] = "EnterGame";
        RequestCMD[RequestCMD["PI"] = 205] = "PI";
        RequestCMD[RequestCMD["CheckIn"] = 206] = "CheckIn";
        RequestCMD[RequestCMD["ChangeImg"] = 211] = "ChangeImg";
        RequestCMD[RequestCMD["UpdateTeam"] = 801] = "UpdateTeam";
        RequestCMD[RequestCMD["Read"] = 1002] = "Read";
        RequestCMD[RequestCMD["Delete"] = 1003] = "Delete";
        RequestCMD[RequestCMD["Pick"] = 1004] = "Pick";
        RequestCMD[RequestCMD["Chat"] = 1101] = "Chat";
        RequestCMD[RequestCMD["GetCacheChat"] = 1103] = "GetCacheChat";
        RequestCMD[RequestCMD["FreeMatch"] = 1401] = "FreeMatch";
        RequestCMD[RequestCMD["ChampionshipMatch"] = 1402] = "ChampionshipMatch";
        RequestCMD[RequestCMD["ChampionshipInfo"] = 1407] = "ChampionshipInfo";
    })(RequestCMD || (RequestCMD = {}));

    class CK_FGUIConfig {
        constructor() {
            this.Config = new Map([
                [CK_UIType.PanelExample, new CK_UIConfig("ball_package", "panel_comp", false, false)],
                [CK_UIType.WindowExample, new CK_UIConfig("ball_package", "window_comp", true, false)],
                [CK_UIType.LoadingPanel, new CK_UIConfig("loading_package", "loading_comp", false, false)],
                [CK_UIType.MainPanel, new CK_UIConfig("main_package", "main_comp", false, false)],
                [CK_UIType.BattlePanel, new CK_UIConfig("battle_package", "battle_comp", false, false)],
                [CK_UIType.TopBarPanel, new CK_UIConfig("common_component_package", "common_playerinfo_comp", false, false)],
                [CK_UIType.MatchWaitingPanel, new CK_UIConfig("match_package", "match_waiting_comp", false, false)],
                [CK_UIType.BattleResultPanel, new CK_UIConfig("battle_package", "battle_settle_comp", false, false)],
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
        CK_UIType[CK_UIType["MainPanel"] = 3] = "MainPanel";
        CK_UIType[CK_UIType["TopBarPanel"] = 4] = "TopBarPanel";
        CK_UIType[CK_UIType["BattlePanel"] = 5] = "BattlePanel";
        CK_UIType[CK_UIType["MatchWaitingPanel"] = 6] = "MatchWaitingPanel";
        CK_UIType[CK_UIType["BattleResultPanel"] = 7] = "BattleResultPanel";
    })(CK_UIType || (CK_UIType = {}));
    class CK_UIConfig {
        constructor(packageName, componentName, isMutiple, isWindow) {
            this.PackageName = packageName;
            this.ComponentName = componentName;
            this.IsMutiple = isMutiple;
            this.IsWindow = isWindow;
        }
    }

    var TeamType;
    (function (TeamType) {
        TeamType[TeamType["NormalTeam"] = 1001] = "NormalTeam";
    })(TeamType || (TeamType = {}));

    class PlayerData {
        constructor(respfully) {
            this.data = respfully;
            this.HandleData();
        }
        HandleData() {
            this.BallInPackage = this.data.respCk.roleCks;
            this.CKE = this.data.respRole.roleInfo.cke;
            this.CKT = this.data.respRole.roleInfo.ckt;
            this.ID = this.data.respRole.roleInfo.id;
            this.teamList = this.data.respTeam.teamList;
            this.UpdateNormalTeam(this.GetTeam(TeamType.NormalTeam));
            this.UpdateRank(this.data.respRole.roleInfo.division, this.data.respRole.roleInfo.integral);
        }
        UpdateNormalTeam(teamInfo) {
            this.NoramlaTeam = teamInfo;
        }
        UpdateRank(ranklevel, rankScore) {
            this.RankLevel = ranklevel;
            this.RankScore = rankScore;
        }
        GetTeam(teamTpye) {
            for (let index = 0; index < this.teamList.length; index++) {
                const element = this.teamList[index];
                if (element.type == teamTpye) {
                    return element;
                }
            }
            return null;
        }
        GetBallById(id) {
            for (let index = 0; index < this.BallInPackage.length; index++) {
                let element = this.BallInPackage[index];
                if (element.id == id) {
                    return element;
                }
            }
            return null;
        }
    }

    class HttpServerResp {
        constructor(data) {
            this.Data = data;
            this.VersionStatus = this.Data.versionStatus;
            this.Channel = this.Data.channel;
            this.ServerStatus = this.Data.serverStatus;
            this.ClientIP = this.Data.clientIP;
            this.Sid = this.Data.server.sid;
            this.GatewayIp = this.Data.server.gatewayIp;
            this.Port = this.Data.server.port;
        }
    }

    class DataManager {
        constructor() {
        }
        static GetInstance() {
            if (this.Instance == null) {
                this.Instance = new DataManager();
            }
            return this.Instance;
        }
        SetHttpServerResp(data) {
            this.HttpServerResp = new HttpServerResp(data);
            Laya.stage.event(CK_EventCode.GetServerResp);
        }
        SetPlayerData(respfully) {
            this.PlayerData = new PlayerData(respfully);
            this.ServerTime = respfully.respRole.roleInfo.serverTime;
            Laya.timer.loop(1000, this, this.ServerTimeUpdate);
            console.log("[DataManager]SetPlayerData", this.PlayerData);
        }
        ServerTimeUpdate() {
            this.ServerTime += 1000;
        }
    }

    class FGUI_LoadingPanel {
        constructor() {
            this.UIType = CK_UIType.LoadingPanel;
            this.IsInitFinish = false;
            this.ID = 0;
            this.currentProgress = 0;
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
            this.progressText.text = "0%";
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
            this.IsInitFinish = false;
            this.ID = 0;
            Laya.stage.off(CK_EventCode.LoadingProgressChange, this, this.ChangeProgress);
            Laya.stage.event(CK_EventCode.PanelDestroy, this.UIType);
        }
        SetVisible(visible) {
            if (this.Content != null) {
                this.Content.visible = visible;
            }
        }
        InitComp() {
            this.progressText = this.Content.getChild("loading_progress_txt");
            this.animRotate = this.Content.getTransition("loading_logospinning _anim");
            this.animText = this.Content.getTransition("loading_titlechange_anim");
        }
        ChangeProgress(data) {
            let value = data.Value;
            let ifTween = false;
            if (ifTween) {
            }
            else {
                this.currentProgress = value;
                this.progressText.text = this.currentProgress + "%";
            }
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
        BallType[BallType["Fe"] = 1] = "Fe";
        BallType[BallType["Stone"] = 2] = "Stone";
        BallType[BallType["Wood"] = 3] = "Wood";
        BallType[BallType["Dragon"] = 4] = "Dragon";
    })(BallType || (BallType = {}));

    class CkLineageConfig {
        constructor() {
            this.Data = new Map([
                ["id_10200001", new CkLineage(10200001, 1, "ui://hhm821bghasg2", "ui://4kxumucakncbqu", "FeBall.lh")],
                ["id_10200002", new CkLineage(10200002, 2, "ui://hhm821bghasg1", "ui://4kxumucakncbqv", "StoneBall.lh")],
                ["id_10200003", new CkLineage(10200003, 3, "ui://hhm821bghasg0", "ui://4kxumucakncbqt", "WoodBall.lh")],
                ["id_10200004", new CkLineage(10200004, 4, "ui://hhm821bghasg3", "ui://4kxumucakncbqw", "DragonBall.lh")],
            ]);
        }
        static GetInstance() {
            if (this.Instance == null) {
                this.Instance = new CkLineageConfig();
            }
            return this.Instance;
        }
        GetData(Id) {
            let data = this.Data.get("id_" + Id);
            if (data != null) {
                return data;
            }
            return null;
        }
    }
    class CkLineage {
        constructor(id, lineageType, lineageIcon, ballIcon, ballType) {
            this.id = id;
            this.lineageType = lineageType;
            this.lineageIcon = lineageIcon;
            this.ballIcon = ballIcon;
            this.ballType = ballType;
        }
    }

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
                let lnName = CkLineageConfig.GetInstance().GetData("1020000" + BallType[key]);
                if (lnName != null) {
                    preload3DPath.push(this.BasePrefabPath + lnName.ballType);
                }
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
                console.log("[ResMananger] ReleaseRes", path);
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
            let pool = this.pool.get(ballType);
            pool.push(ball);
        }
        CreateBall(ballType) {
            if (!this.pool.has(ballType)) {
                this.pool.set(ballType, new Array);
            }
            let array = this.pool.get(ballType);
            let ball = null;
            if (!this.ballMap.has(ballType)) {
                let lnName = CkLineageConfig.GetInstance().GetData("1020000" + ballType);
                let path = ResMananger.GetInstance().BasePrefabPath + lnName.ballType;
                ball = ResMananger.GetInstance().GetRes(path);
                this.ballMap.set(ballType, ball);
            }
            let ballPrefab = this.ballMap.get(ballType);
            ball = Laya.Sprite3D.instantiate(ballPrefab, ball);
            this.poolParent.addChild(ball);
            array.push(ball);
        }
    }

    class UIBall {
        constructor(root, ballType, scale = 1) {
            this.rotateAngels = new Laya.Vector3(0, 0.01, 0.01);
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
            this.uiCamera.transform.position = new Laya.Vector3(0, 1, 0);
            this.uiCamera.transform.rotationEuler = new Laya.Vector3(-90, 0, 180);
            this.uiCamera.clearFlag = Laya.CameraClearFlags.DepthOnly;
            this.directionLight = this.ballScene.addChild(new Laya.DirectionLight());
            var mat = this.directionLight.transform.worldMatrix;
            mat.setForward(new Laya.Vector3(-1, -1, 0));
            this.directionLight.transform.worldMatrix = mat;
            this.ball = BallFactory.GetInstance().GetBall(this.BallType);
            this.ballScene.addChild(this.ball);
            this.ball.transform.localPosition = new Laya.Vector3(0, 0, 0);
            this.ball.transform.localScale = new Laya.Vector3(1 * this.scale, 1 * this.scale, 1 * this.scale);
            this.ball.active = true;
        }
        Change(root, ballType, scale = 1) {
            this.root = root;
            this.BallType = ballType;
            this.scale = scale;
            this.root.addChild(this.ballScene);
            let globalPoint = this.root.localToGlobal(new Laya.Point(0, 0));
            this.uiCamera.viewport = new Laya.Viewport(globalPoint.x, globalPoint.y, this.root.width, this.root.height);
            this.Resycle();
            this.ball = BallFactory.GetInstance().GetBall(this.BallType);
            this.ballScene.addChild(this.ball);
            this.ball.transform.localPosition = new Laya.Vector3(0, 0, 0);
            this.ball.transform.localScale = new Laya.Vector3(1 * this.scale, 1 * this.scale, 1 * this.scale);
            this.ball.active = true;
        }
        Destroy() {
            this.Resycle();
            this.ballScene.destroy();
        }
        Resycle() {
            if (this.ball = undefined) {
                BallFactory.GetInstance().ResycleBall(this.BallType, this.ball);
            }
        }
        StartRotate() {
            Laya.stage.timer.frameLoop(1, this, this.Rotate);
        }
        StopRotate() {
            Laya.stage.timer.clear(this, this.Rotate);
        }
        Rotate() {
            this.ball.transform.rotate(this.rotateAngels, false);
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

    var BattleType;
    (function (BattleType) {
        BattleType[BattleType["SingleBattle_6"] = 1] = "SingleBattle_6";
        BattleType[BattleType["TeamBattle_3"] = 2] = "TeamBattle_3";
    })(BattleType || (BattleType = {}));
    var MatchType;
    (function (MatchType) {
        MatchType[MatchType["Free"] = 1] = "Free";
        MatchType[MatchType["Championship"] = 2] = "Championship";
    })(MatchType || (MatchType = {}));

    var CareerType;
    (function (CareerType) {
        CareerType[CareerType["Sword"] = 1] = "Sword";
        CareerType[CareerType["Axe"] = 2] = "Axe";
        CareerType[CareerType["Bow"] = 3] = "Bow";
        CareerType[CareerType["Staff"] = 4] = "Staff";
    })(CareerType || (CareerType = {}));

    class CkQualityConfig {
        constructor() {
            this.Data = new Map([
                ["id_10300001", new CkQuality(10300001, 1, "ui://hhm821bghasgb", "ui://4kxumucakncbqx")],
                ["id_10300002", new CkQuality(10300002, 2, "ui://hhm821bghasgc", "ui://4kxumucakncbqy")],
                ["id_10300003", new CkQuality(10300003, 3, "ui://hhm821bghasgd", "ui://4kxumucakncbqz")],
                ["id_10300004", new CkQuality(10300004, 4, "ui://hhm821bghasge", "ui://4kxumucakncbr0")],
            ]);
        }
        static GetInstance() {
            if (this.Instance == null) {
                this.Instance = new CkQualityConfig();
            }
            return this.Instance;
        }
        GetData(Id) {
            let data = this.Data.get("id_" + Id);
            if (data != null) {
                return data;
            }
            return null;
        }
    }
    class CkQuality {
        constructor(id, qualityType, qualityIcon, beltIcon) {
            this.id = id;
            this.qualityType = qualityType;
            this.qualityIcon = qualityIcon;
            this.beltIcon = beltIcon;
        }
    }

    class CkWeaponConfig {
        constructor() {
            this.Data = new Map([
                ["id_10100001", new CkWeapon(10100001, 1, 1, 101000011, "ui://hhm821bgkncbj", "ui://hhm821bgkncbf", 750, 6, 100, 0)],
                ["id_10100002", new CkWeapon(10100002, 2, 2, 101000021, "ui://hhm821bgkncbj", "ui://hhm821bgkncbf", 800, 8, 130, 0)],
                ["id_10100003", new CkWeapon(10100003, 3, 3, 101000031, "ui://hhm821bgkncbh", "ui://hhm821bgkncbk", 1500, 4, 120, 0)],
                ["id_10100004", new CkWeapon(10100004, 4, 4, 101000041, "ui://hhm821bgkncbi", "ui://hhm821bgkncbl", 1200, 10, 100, 130)],
            ]);
        }
        static GetInstance() {
            if (this.Instance == null) {
                this.Instance = new CkWeaponConfig();
            }
            return this.Instance;
        }
        GetData(Id) {
            let data = this.Data.get("id_" + Id);
            if (data != null) {
                return data;
            }
            return null;
        }
    }
    class CkWeapon {
        constructor(id, weaponId, weapontype, classLang, weaponIcon, cap, atkDistance, atk, atkSpeed, singSpeed) {
            this.id = id;
            this.weaponId = weaponId;
            this.weapontype = weapontype;
            this.classLang = classLang;
            this.weaponIcon = weaponIcon;
            this.cap = cap;
            this.atkDistance = atkDistance;
            this.atk = atk;
            this.atkSpeed = atkSpeed;
            this.singSpeed = singSpeed;
        }
    }

    class UIBallBattleMsg {
        constructor(root, camera) {
            this.currentPos = new Laya.Vector4(0, 0, 0, 0);
            this.root = root;
            this.camera = camera;
        }
        Show(data) {
            this.battlerData = data;
            this.component = fgui.UIPackage.createObject("battle_package", "battle_ck3d_comp").asCom;
            this.root.addChild(this.component);
            this.InitComp();
            this.InitData();
        }
        InitComp() {
            this.idText = this.component.getChild("battle_playerid_txt").asTextField;
            this.hpSlider = this.component.getChild("battle_ckhp_bar").asSlider;
            this.hatLoader = this.component.getChild("battle_class_comp").asCom.getChild("lobby_function_icon");
            this.weaponRotateComp = this.component.getChild("battle_ckweapon_comp").asCom;
            this.weaponLoader = this.weaponRotateComp.getChild("weapon_comp").asCom.getChild("lobby_ckweapon_icon");
            this.beltLoader = this.component.getChild("battle_ckquality_comp").asCom.getChild("lobby_ckquality_icon");
            this.meleeAnim = this.weaponRotateComp.getTransition("weapon_melee_atk_anim");
            this.arrowAnim = this.weaponRotateComp.getTransition("weapon_arrow_atk_anim");
        }
        InitData() {
            this.careerType = this.battlerData.battleCk.professionList[0];
            this.ballType = this.battlerData.battleCk.lineage;
            this.idText.text = this.battlerData.roleBaseInfo.name;
            this.hpSlider.max = this.battlerData.battleCk.maxHp;
            this.ChangeHp(this.battlerData.battleCk.maxHp);
            this.ChangeCareer(this.careerType);
            this.ChangeBelt(this.battlerData.battleCk.quality);
        }
        StartFollow(followTarget) {
            this.followTarget = followTarget;
            Laya.timer.loop(20, this, this.Follow);
        }
        StopFollow() {
            Laya.timer.clear(this, this.Follow);
        }
        Follow() {
            this.camera.viewport.project(this.followTarget.transform.position, this.camera.projectionViewMatrix, this.currentPos);
            this.component.displayObject.pos(this.currentPos.x, this.currentPos.y);
        }
        ChangeCareer(career) {
            let careerConfig = CkWeaponConfig.GetInstance().GetData("1010000" + career);
            this.weaponLoader.url = careerConfig.weaponIcon;
            this.hatLoader.url = careerConfig.cap;
        }
        ChangeBelt(quality) {
            let beltConfig = CkQualityConfig.GetInstance().GetData("1030000" + quality);
            this.beltLoader.url = beltConfig.qualityIcon;
        }
        ChangeHp(value) {
            this.hpSlider.value = value;
        }
        RotateWeapon(angle) {
            this.weaponRotateComp.rotation = angle;
        }
        PlayAtkAnim() {
            switch (this.careerType) {
                case CareerType.Axe:
                    this.meleeAnim.play();
                    break;
                case CareerType.Bow:
                    this.arrowAnim.play();
                    break;
                case CareerType.Staff:
                    this.meleeAnim.play();
                    break;
                case CareerType.Sword:
                    this.meleeAnim.play();
                    break;
                default:
                    break;
            }
        }
        HurtAnim() {
        }
        Destroy() {
            this.StopFollow();
            this.component.dispose();
        }
    }

    class BallMsgFactory {
        constructor() {
            this.msgMap = new Map();
        }
        static GetInstance() {
            if (this.Instance == null) {
                this.Instance = new BallMsgFactory();
            }
            return this.Instance;
        }
        Init(content, camera) {
            this.content = content;
            this.camera = camera;
        }
        Create(data) {
            let newMsg = new UIBallBattleMsg(this.content, this.camera);
            this.msgMap.set(data.roleBaseInfo.id, newMsg);
            newMsg.Show(data);
            return newMsg;
        }
        Get(userId) {
            let msg = this.msgMap.get(userId);
            return msg;
        }
        Destroy(userId) {
            let msg = this.Get(userId);
            msg.Destroy();
            this.msgMap.delete(userId);
        }
        Clear() {
            this.content = null;
            for (const key in this.msgMap) {
                let msg = this.msgMap[key];
                msg.Destroy();
            }
            this.msgMap.clear();
        }
    }

    class HurtAnimFactory {
        constructor() {
            this.config = new Map([
                [BallType.Fe, "battle_fe_hurt_anim"],
                [BallType.Dragon, "battle_dragon_hurt_anim"],
                [BallType.Wood, "battle_wood_hurt_anim"],
                [BallType.Stone, "battle_stone_hurt_anim"],
            ]);
            this.activeAnims = new Array();
        }
        static GetInstance() {
            if (this.Instance == null) {
                this.Instance = new HurtAnimFactory();
            }
            return this.Instance;
        }
        Init(content, camera) {
            this.content = content;
            this.camera = camera;
        }
        Create(ballType, target) {
            const componentName = this.config.get(ballType);
            let animComp = Laya.Pool.getItemByCreateFun(componentName, () => {
                let comp = fgui.UIPackage.createObject("battle_package", componentName);
                this.content.addChild(comp);
                return comp;
            });
            animComp.visible = true;
            let hurtAnim = new HurtAnim(componentName, animComp);
            this.activeAnims.push(hurtAnim);
            let tempPos = new Laya.Vector4();
            this.camera.viewport.project(target.transform.position, this.camera.projectionViewMatrix, tempPos);
            animComp.displayObject.pos(tempPos.x, tempPos.y);
            hurtAnim.MoveClip.setPlaySettings(0, null, 1, null, Laya.Handler.create(this, () => {
                hurtAnim.Recover();
                ArrayHelper.GetInstance().RemoveElementFromArray(this.activeAnims, hurtAnim);
            }));
            hurtAnim.Play();
        }
        Clear() {
            for (let index = 0; index < this.activeAnims.length; index++) {
                let element = this.activeAnims[index];
                element.Stop();
                element.Recover();
                ArrayHelper.GetInstance().RemoveElementFromArray(this.activeAnims, element);
            }
            Laya.Pool.clearBySign(this.config.get(BallType.Dragon));
            Laya.Pool.clearBySign(this.config.get(BallType.Fe));
            Laya.Pool.clearBySign(this.config.get(BallType.Wood));
            Laya.Pool.clearBySign(this.config.get(BallType.Stone));
            this.activeAnims = new Array();
            this.content = null;
            this.camera = null;
        }
    }
    class HurtAnim {
        constructor(sign, content) {
            this.Content = content;
            this.MoveClip = this.Content.getChild("anim").asMovieClip;
            this.Sign = sign;
        }
        Play() {
            this.MoveClip.playing = true;
        }
        Stop() {
            this.MoveClip.playing = false;
        }
        Recover() {
            this.Content.visible = false;
            Laya.Pool.recover(this.Sign, this.Content);
        }
    }

    class HurtNumFactory {
        constructor() {
            this.config = new Map([
                [HitType.PhyNormal, "battle_hurtnum_phy_comp"],
                [HitType.MagicNormal, "battle_hurtnum_critical_comp"],
                [HitType.Miss, "battle_hurtnum_miss_comp"],
                [HitType.Critical, "battle_hurtnum_critical_comp"],
            ]);
            this.activeAnims = new Array();
        }
        static GetInstance() {
            if (this.Instance == null) {
                this.Instance = new HurtNumFactory();
            }
            return this.Instance;
        }
        Init(content, camera) {
            this.content = content;
            this.camera = camera;
        }
        Create(hitMsg, target) {
            let hitType = hitMsg.hitType;
            if (hitMsg.hitType == 1) {
                hitType = hitMsg.atkType * 10 + hitMsg.hitType;
            }
            const componentName = this.config.get(hitType);
            let animComp = Laya.Pool.getItemByCreateFun(componentName, () => {
                let comp = fgui.UIPackage.createObject("battle_package", componentName);
                this.content.addChild(comp);
                return comp;
            });
            animComp.visible = true;
            let hurtAnim = new HurtText(componentName, animComp);
            this.activeAnims.push(hurtAnim);
            let tempPos = new Laya.Vector4();
            this.camera.viewport.project(target.transform.position, this.camera.projectionViewMatrix, tempPos);
            animComp.displayObject.pos(tempPos.x, tempPos.y);
            if (hitMsg.hitType != 3) {
                let hitStr = hitMsg.value.toString();
                if (hitMsg.value >= 0) {
                    hitStr = `+${hitMsg.value}`;
                }
                hurtAnim.SetText(hitStr);
            }
            hurtAnim.Transition.play(Laya.Handler.create(this, () => {
                hurtAnim.Recover();
                ArrayHelper.GetInstance().RemoveElementFromArray(this.activeAnims, hurtAnim);
            }), 1);
        }
        Clear() {
            for (let index = 0; index < this.activeAnims.length; index++) {
                let element = this.activeAnims[index];
                element.Transition.stop();
                element.Recover();
                ArrayHelper.GetInstance().RemoveElementFromArray(this.activeAnims, element);
            }
            Laya.Pool.clearBySign(this.config.get(HitType.Critical));
            Laya.Pool.clearBySign(this.config.get(HitType.MagicNormal));
            Laya.Pool.clearBySign(this.config.get(HitType.Miss));
            Laya.Pool.clearBySign(this.config.get(HitType.PhyNormal));
            this.activeAnims = new Array();
            this.content = null;
            this.camera = null;
        }
    }
    class HurtText {
        constructor(sign, content) {
            this.Content = content;
            this.Transition = this.Content.getTransition("anim");
            this.Sign = sign;
        }
        Recover() {
            this.Content.visible = false;
            Laya.Pool.recover(this.Sign, this.Content);
        }
        SetText(str) {
            let damageText = this.Content.getChild("damage_text").asTextField;
            damageText.text = str;
        }
    }
    var HitType;
    (function (HitType) {
        HitType[HitType["Critical"] = 2] = "Critical";
        HitType[HitType["Miss"] = 3] = "Miss";
        HitType[HitType["PhyNormal"] = 11] = "PhyNormal";
        HitType[HitType["MagicNormal"] = 21] = "MagicNormal";
    })(HitType || (HitType = {}));

    class BattleBall {
        constructor(userdata, scene) {
            this.IsDied = false;
            this.IsDestroy = false;
            this.r_ball = 0.5;
            this.PI = 3.14;
            this.userData = userdata;
            this.scene = scene;
            this.RoleId = this.userData.roleBaseInfo.id;
            this.CkId = this.userData.battleCk.id;
            this.Camp = this.userData.camp;
            this.CreateBall();
        }
        CreateBall() {
            let ckInfo = this.userData.battleCk;
            this.ball = BallFactory.GetInstance().GetBall(ckInfo.lineage);
            this.scene.Scene.addChild(this.ball);
            this.ball.active = true;
            this.ball.transform.localScale = new Laya.Vector3(1, 1, 1);
        }
        CreateUI() {
            this.ui = BallMsgFactory.GetInstance().Create(this.userData);
            this.ui.StartFollow(this.ball);
        }
        GetBallGameObject() {
            return this.ball;
        }
        Transport(x, y) {
            let newPos = new Laya.Vector3(x, 0, y);
            this.ball.transform.position = newPos;
        }
        Move(x, y) {
            if (this.IsDied) {
                return;
            }
            this.lastPos = this.ball.transform.position;
            let newPos = new Laya.Vector3(x, 0, y);
            if (this.lastPos != newPos) {
                this.Rotate(newPos);
                this.ball.transform.position = newPos;
            }
        }
        FaceHandle(x, y) {
            if (this.IsDied) {
                return;
            }
            this.RotateWeapon(new Laya.Vector3(x, y));
        }
        Rotate(newPos) {
            let dis = Laya.Vector3.distance(newPos, this.lastPos);
            let angle = 360 * (dis / (this.r_ball * this.PI));
            let direction = new Laya.Vector3(0, 0, 0);
            Laya.Vector3.subtract(newPos, this.lastPos, direction);
            Laya.Vector3.cross(new Laya.Vector3(0, 1, 0), direction, direction);
            Laya.Vector3.scale(direction, angle * 15, direction);
            this.ball.transform.rotate(direction, false, false);
        }
        RotateWeapon(face) {
            let direction = new Laya.Vector3(face.x, face.y);
            Laya.Vector3.subtract(face, this.lastPos, direction);
            Laya.Vector3.normalize(direction, direction);
            let up = new Laya.Vector3(1, 0);
            let angel = Laya.Vector3.dot(up, direction);
            let deltaAng = (Math.acos(angel) * 180) / Math.PI;
            const out = new Laya.Vector3();
            Laya.Vector3.cross(up, direction, out);
            if (out.y != 0) {
                if (out.y > 0) {
                    deltaAng = -deltaAng;
                }
                this.ui.RotateWeapon(deltaAng);
            }
        }
        ChangeHp(v) {
            this.ui.ChangeHp(v);
        }
        GetHurt(hitInfo) {
            HurtAnimFactory.GetInstance().Create(this.userData.battleCk.lineage, this.ball);
            HurtNumFactory.GetInstance().Create(hitInfo, this.ball);
        }
        Atk() {
            this.ui.PlayAtkAnim();
        }
        Died() {
            console.log("[BattleBall] died", this.CkId);
            this.IsDied = true;
            this.Destroy();
        }
        Destroy() {
            if (!this.IsDestroy) {
                this.IsDestroy = true;
                BallMsgFactory.GetInstance().Destroy(this.userData.roleBaseInfo.id);
                this.ball.destroy();
            }
        }
    }

    class CameraComponent {
        constructor(camera) {
            this.camera = camera;
        }
        StartFollow(followTarget) {
            this.followTarget = followTarget;
            Laya.timer.frameLoop(1, this, this.Follow);
        }
        StopFollow() {
            Laya.timer.clear(this, this.Follow);
        }
        Follow() {
            this.camera.transform.position = new Laya.Vector3(this.followTarget.transform.position.x, 4, this.followTarget.transform.position.z);
        }
    }

    class BattleScene {
        constructor(scene) {
            this.SceneType = SceneType.BattleScene;
            this.balls = new Array();
            this.currentFrameId = 0;
            this.roleMap = new Map();
            this.ckMap = new Map();
            this.frameTime = 10;
            this.endFrameId = 0;
            this.Scene = scene;
            this.Init();
        }
        Init() {
            this.Camera = this.Scene.getChildByName("Main Camera");
            this.Light = this.Scene.getChildByName("Directional Light");
            this.OpenShadow();
            this.BindEvent();
            this.CameraInit();
        }
        OpenShadow() {
            this.Light.shadowMode = 1;
        }
        CameraInit() {
            this.cameraComp = new CameraComponent(this.Camera);
        }
        GameInit(battleData) {
            this.currentBattleData = battleData;
            this.DataHandle();
        }
        DataHandle() {
            this.battleFrames = this.currentBattleData.frameList;
            this.matchType = this.currentBattleData.matchType;
            this.battleType = this.currentBattleData.battleType;
            let battlerList = this.currentBattleData.battlerList;
            for (let index = 0; index < battlerList.length; index++) {
                const battler = battlerList[index];
                let roleInfo = battler.roleBaseInfo;
                let ckInfo = battler.battleCk;
                let battleBall = new BattleBall(battler, this);
                battleBall.Transport(ckInfo.posX / 1000, ckInfo.posY / 1000);
                this.balls.push(battleBall);
                this.roleMap.set(roleInfo.id, battleBall);
                this.ckMap.set(ckInfo.id, battleBall);
                if (roleInfo.id == DataManager.GetInstance().PlayerData.ID) {
                    this.mainUser = battleBall;
                    this.cameraComp.StartFollow(battleBall.GetBallGameObject());
                }
            }
        }
        GameStart() {
            FGUIManager.GetInstance().OpenPanel(CK_UIType.BattlePanel, () => {
                this.battlePanel = FGUIManager.GetInstance().GetPanel(CK_UIType.BattlePanel);
                this.endFrameId = this.battleFrames.length;
                for (let index = 0; index < this.balls.length; index++) {
                    let ball = this.balls[index];
                    ball.CreateUI();
                }
                console.log("[BattleScene]GameStart FrameCound", this.endFrameId);
                this.FrameLogic();
            }, true, this.currentBattleData);
        }
        FrameLogic() {
            let frameData = this.battleFrames[this.currentFrameId];
            let ckframeInfos = frameData.ckFrameInfoList;
            for (let index = 0; index < ckframeInfos.length; index++) {
                const frameInfo = ckframeInfos[index];
                let battleBall = this.ckMap.get(frameInfo.id);
                battleBall.ChangeHp(frameInfo.hp);
                if (frameInfo.hit != null) {
                    battleBall.GetHurt(frameInfo.hit);
                }
                if (frameInfo.isDead == true) {
                    battleBall.Died();
                    if (frameInfo.id == this.mainUser.CkId) {
                        if (this.battleType == BattleType.SingleBattle_6) {
                            this.GameOver();
                            return;
                        }
                        else if (this.battleType == BattleType.TeamBattle_3) {
                            let cameraTarget = null;
                            for (let index = 0; index < this.balls.length; index++) {
                                let element = this.balls[index];
                                if (element.Camp == this.mainUser.Camp) {
                                    if (element.IsDied == false) {
                                        cameraTarget = element;
                                        break;
                                    }
                                }
                            }
                            if (cameraTarget == null) {
                                this.GameOver();
                                return;
                            }
                            else {
                                this.cameraComp.StartFollow(cameraTarget.GetBallGameObject());
                            }
                        }
                    }
                }
                battleBall.Move(frameInfo.posXY.x / 1000, frameInfo.posXY.y / 1000);
                battleBall.FaceHandle(frameInfo.faceXY.x / 1000, frameInfo.faceXY.y / 1000);
                if (frameInfo.isAtk) {
                    battleBall.Atk();
                }
            }
            this.currentFrameId++;
            this.battlePanel.ChangeTime(this.currentFrameId * this.frameTime);
            if (this.currentFrameId != this.endFrameId) {
                Laya.timer.once(this.frameTime, this, this.FrameLogic);
            }
            else {
                this.GameOver();
            }
        }
        GameOver() {
            this.cameraComp.StopFollow();
            this.ShowResultPanel();
        }
        ShowResultPanel() {
            for (let index = 0; index < this.balls.length; index++) {
                const ball = this.balls[index];
                ball.Destroy();
            }
            FGUIManager.GetInstance().OpenPanel(CK_UIType.BattleResultPanel, () => { }, false, this.currentBattleData);
        }
        BindEvent() {
            let focusBall = 0;
            Laya.stage.on(Laya.Event.KEY_DOWN, this, (e) => {
                let keyCode = e.keyCode;
                console.log(keyCode);
                if (keyCode = 65) {
                    let ball = this.balls[focusBall];
                    this.cameraComp.StartFollow(ball.GetBallGameObject());
                    focusBall++;
                    if (focusBall == this.balls.length) {
                        focusBall = 0;
                    }
                }
            });
        }
    }

    class LobbyScene {
        constructor(scene) {
            this.SceneType = SceneType.LobbyScene;
            this.currentBall = null;
            this.ballMap = new Map();
            this.rotateAngels = new Laya.Vector3(0, 0.01, 0.01);
            this.Scene = scene;
            this.Init();
        }
        Init() {
            this.ballParent = this.Scene.getChildByName("BallParent");
            let ballCount = this.ballParent.numChildren;
            for (let index = 0; index < ballCount; index++) {
                let child = this.ballParent.getChildAt(index);
                this.ballMap.set(index, child);
            }
        }
        ChangeBall(type) {
            this.HideCurrent();
            this.currentBall = this.ballMap.get(type - 1);
            this.currentBall.active = true;
            this.StartRotate();
        }
        HideCurrent() {
            if (this.currentBall != null) {
                this.currentBall.active = false;
            }
        }
        StartRotate() {
            this.StopRotate();
            Laya.stage.timer.frameLoop(1, this, this.Rotate);
        }
        StopRotate() {
            Laya.stage.timer.clear(this, this.Rotate);
        }
        Rotate() {
            this.currentBall.transform.rotate(this.rotateAngels, false);
        }
    }

    class SceneManager {
        constructor() {
            this.ScenePathMap = new Map([
                [SceneType.BattleScene, "res/unityscenes/LayaScene_BattleScene/Conventional/BattleScene.ls"],
                [SceneType.LobbyScene, "res/unityscenes/LayaScene_LobbyScene/Conventional/LobbyScene.ls"],
            ]);
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
                this.GameScene.addChild(scene);
                switch (sceneType) {
                    case SceneType.BattleScene:
                        this.CurrentActiveScene = new BattleScene(scene);
                        break;
                    case SceneType.LobbyScene:
                        this.CurrentActiveScene = new LobbyScene(scene);
                        break;
                    default:
                        break;
                }
            }
        }
        DestroyCurrentScene() {
            this.CurrentActiveScene.Scene.destroy();
            let url = this.ScenePathMap.get(this.CurrentActiveScene.SceneType);
            ResMananger.GetInstance().ReleaseRes(url);
            this.CurrentActiveScene = null;
        }
    }
    var SceneType;
    (function (SceneType) {
        SceneType["None"] = "None";
        SceneType["BattleScene"] = "BattleScene.ls";
        SceneType["LobbyScene"] = "LobbyScene.ls";
    })(SceneType || (SceneType = {}));

    class IntegralLevelConfig {
        constructor() {
            this.Data = new Map([
                ["id_30100001", new IntegralLevel(30100001, 1, 301000011, [0, 1199], "ui://4kxumucabhs67")],
                ["id_30100002", new IntegralLevel(30100002, 2, 301000021, [1200, 2799], "ui://4kxumucabhs68")],
                ["id_30100003", new IntegralLevel(30100003, 3, 301000031, [2800, 4799], "ui://4kxumucabhs69")],
                ["id_30100004", new IntegralLevel(30100004, 4, 301000041, [4800, 7199], "ui://4kxumucabhs6a")],
            ]);
        }
        static GetInstance() {
            if (this.Instance == null) {
                this.Instance = new IntegralLevelConfig();
            }
            return this.Instance;
        }
        GetData(Id) {
            let data = this.Data.get("id_" + Id);
            if (data != null) {
                return data;
            }
            return null;
        }
    }
    class IntegralLevel {
        constructor(id, level, rankLang, integral, rankIcon) {
            this.id = id;
            this.level = level;
            this.rankLang = rankLang;
            this.integral = integral;
            this.rankIcon = rankIcon;
        }
    }

    class LangConfig {
        constructor() {
            this.Data = new Map([
                ["id_102000011", new Lang(102000011, "Steel")],
                ["id_102000021", new Lang(102000021, "Rock")],
                ["id_102000031", new Lang(102000031, "Wood")],
                ["id_102000041", new Lang(102000041, "Dragon")],
                ["id_301000011", new Lang(301000011, "Bronze")],
                ["id_301000021", new Lang(301000021, "Silver")],
                ["id_301000031", new Lang(301000031, "Gold")],
                ["id_301000041", new Lang(301000041, "Platnum")],
                ["id_304010001", new Lang(304010001, "Mon.")],
                ["id_304020001", new Lang(304020001, "Tues.")],
                ["id_304030001", new Lang(304030001, "Wed.")],
                ["id_304040001", new Lang(304040001, "Thur.")],
                ["id_304050001", new Lang(304050001, "Fri.")],
                ["id_304060001", new Lang(304060001, "Sat.")],
                ["id_304070001", new Lang(304070001, "Sun.")],
                ["id_101000011", new Lang(101000011, "Warrior")],
                ["id_101000021", new Lang(101000021, "Warrior")],
                ["id_101000031", new Lang(101000031, "Archer")],
                ["id_101000041", new Lang(101000041, "Magician")],
            ]);
        }
        static GetInstance() {
            if (this.Instance == null) {
                this.Instance = new LangConfig();
            }
            return this.Instance;
        }
        GetData(Id) {
            let data = this.Data.get("id_" + Id);
            if (data != null) {
                return data;
            }
            return null;
        }
    }
    class Lang {
        constructor(id, text) {
            this.id = id;
            this.text = text;
        }
    }

    class FGUI_TopBarPanel {
        constructor() {
            this.UIType = CK_UIType.TopBarPanel;
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
            this.SetCKE();
            this.SetCKT();
            this.SetID();
            this.SetRankInfo();
        }
        Close() {
            this.SetVisible(false);
            this.ID = 0;
            Laya.stage.event(CK_EventCode.PanelDestroy, this.ID);
        }
        Destroy() {
            var _a;
            (_a = this.Content) === null || _a === void 0 ? void 0 : _a.dispose();
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
            this.ckeText = this.Content.getChild("common_ckenumber_txt");
            this.cktText = this.Content.getChild("common_cktnumber_txt");
            this.divisionImgLoader = this.Content.getChild("common_rankingbadge_icon");
            this.divisionName = this.Content.getChild("common_rank_txt");
            this.rankInfoBtn = this.Content.getChild("common_info_btn");
            this.addCKEBtn = this.Content.getChild("common_ckeplus_btn");
            this.addCKTBtn = this.Content.getChild("common_cktplus_btn");
            this.divisionProgressBar = this.Content.getChild("common_rank_bar");
            this.idText = this.Content.getChild("common_idnumber_txt").asTextField;
        }
        BringToFront() {
            fgui.GRoot.inst.setChildIndex(this.Content, fgui.GRoot.inst.numChildren);
        }
        SetCKE() {
            this.ckeText.text = DataManager.GetInstance().PlayerData.CKE.toLocaleString();
        }
        SetCKT() {
            this.cktText.text = DataManager.GetInstance().PlayerData.CKT.toLocaleString();
        }
        SetID() {
            this.idText.text = DataManager.GetInstance().PlayerData.ID;
        }
        SetRankInfo() {
            let rankLevel = DataManager.GetInstance().PlayerData.RankLevel;
            let rankScore = DataManager.GetInstance().PlayerData.RankScore;
            let rankConfig = IntegralLevelConfig.GetInstance().GetData("3010000" + rankLevel);
            this.divisionImgLoader.url = rankConfig.rankIcon;
            this.divisionProgressBar.max = rankConfig.integral[1];
            this.divisionProgressBar.value = rankScore - rankConfig.integral[0];
            this.divisionName.text = LangConfig.GetInstance().GetData(rankConfig.rankLang).text;
        }
    }

    class FGUI_BattlePanel {
        constructor() {
            this.UIType = CK_UIType.BattlePanel;
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
            this.battleData = args;
            this.battleScene = SceneManager.GetInstance().CurrentActiveScene;
            this.ChangeTime(0);
            this.InitFactory();
        }
        Close() {
            this.SetVisible(false);
            this.ID = 0;
            Laya.stage.event(CK_EventCode.PanelDestroy, this.ID);
        }
        Destroy() {
            var _a;
            (_a = this.Content) === null || _a === void 0 ? void 0 : _a.dispose();
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
            this.timeText = this.Content.getChild("battle_time_comp").asCom.getChild("battle_timenumber_txt").asTextField;
            this.msgLayer = this.Content.getChild("msg_layer").asCom;
            this.flyPropLayer = this.Content.getChild("flyprop_layer").asCom;
            this.hurtAnimLayer = this.Content.getChild("hurtanim_layer").asCom;
            this.hurtNumLayer = this.Content.getChild("hurtnum_layer").asCom;
        }
        InitFactory() {
            BallMsgFactory.GetInstance().Clear();
            BallMsgFactory.GetInstance().Init(this.msgLayer, this.battleScene.Camera);
            HurtAnimFactory.GetInstance().Clear();
            HurtAnimFactory.GetInstance().Init(this.hurtAnimLayer, this.battleScene.Camera);
            HurtNumFactory.GetInstance().Clear();
            HurtNumFactory.GetInstance().Init(this.hurtNumLayer, this.battleScene.Camera);
        }
        ChangeTime(milSecond) {
            let s = milSecond / 1000;
            let sec = Math.floor(s % 60);
            let min = Math.floor(s / 60);
            let secStr = sec.toString();
            let minStr = min.toString();
            if (sec < 10) {
                secStr = "0" + sec;
            }
            if (min < 10) {
                minStr = "0" + min;
            }
            this.timeText.text = minStr + ":" + secStr;
        }
    }

    var CK_RespCMD;
    (function (CK_RespCMD) {
        CK_RespCMD[CK_RespCMD["UserJoin"] = 1403] = "UserJoin";
        CK_RespCMD[CK_RespCMD["MatchFailed"] = 1404] = "MatchFailed";
        CK_RespCMD[CK_RespCMD["BattleStart"] = 1406] = "BattleStart";
    })(CK_RespCMD || (CK_RespCMD = {}));

    var EventProperty;
    (function (EventProperty) {
        class LoadProgressProperty {
            constructor(value, ifTween = false) {
                this.Value = value;
                this.IfTween = ifTween;
            }
        }
        EventProperty.LoadProgressProperty = LoadProgressProperty;
    })(EventProperty || (EventProperty = {}));

    class MathHelper {
        constructor() {
        }
        static GetInstance() {
            if (this.Instance == null) {
                this.Instance = new MathHelper();
            }
            return this.Instance;
        }
        GetRandomInt(min, max) {
            let value = Math.random() * (max - min);
            value = Math.round(value);
            return value;
        }
        GetRandomFloat(min, max, exact) {
            let value = Math.random() * (max - min);
            value = Number.parseFloat(value.toFixed(exact));
            return value;
        }
        PrefixInteger(num, length) {
            return (Array(length).join('0') + num).slice(-length);
        }
    }

    class UIBallCard {
        constructor(content, cardType) {
            this.content = content;
            this.cardType = cardType;
            this.InitComp();
        }
        InitComp() {
            this.ballLoader = this.content.getChild("common_ball_loader").asLoader;
            this.beltLoader = this.content.getChild("common_belt_loader").asLoader;
            this.professionLoader = this.content.getChild("common_class_loader").asLoader;
            this.ckIdText = this.content.getChild("common_balldna_comp").asCom.getChild("common_balldnanumber_txt").asTextField;
            this.professionText = this.content.getChild("common_classname_comp").asCom.getChild("common_classname_txt").asTextField;
            this.levelText = this.content.getChild("common_balllvl_comp").asCom.getChild("common_lvlnumber_txt").asTextField;
            this.typeCtrl = this.content.getController("common_cardlevel_ctrl");
        }
        Show(data) {
            if (this.cardType == 1) {
                this.typeCtrl.selectedIndex = 1;
            }
            else if (this.cardType == 2) {
                this.typeCtrl.selectedIndex = 0;
            }
            this.ballData = data;
            this.ChangeCareer(this.ballData.professionList[0]);
            this.ChangeBlood(this.ballData.lineage);
            this.ChangeBelt(this.ballData.quality);
            this.SetID(this.ballData.seq);
            this.SetLevel(this.ballData.lv);
        }
        ChangeCareer(career) {
            let careerConfig = CkWeaponConfig.GetInstance().GetData("1010000" + career);
            this.professionLoader.url = careerConfig.weaponIcon;
            this.professionText.text = LangConfig.GetInstance().GetData(careerConfig.classLang).text;
        }
        ChangeBlood(blood) {
            let bloodConfig = CkLineageConfig.GetInstance().GetData("1020000" + blood);
            this.ballLoader.url = bloodConfig.ballIcon;
        }
        ChangeBelt(quality) {
            let beltConfig = CkQualityConfig.GetInstance().GetData("1030000" + quality);
            this.beltLoader.url = beltConfig.beltIcon;
        }
        SetID(id) {
            this.ckIdText.text = MathHelper.GetInstance().PrefixInteger(id, 10);
        }
        SetLevel(level) {
            this.levelText.text = level.toString();
        }
    }

    class UIMatchWaitingItem {
        constructor(content) {
            this.uiBallCard = null;
            this.content = content;
            this.InitComp();
        }
        InitComp() {
            this.playerIdText = this.content.getChild("match_playerid_txt").asTextField;
            this.ckInfoComp = this.content.getChild("match_playercard_comp").asCom;
            this.selfCtrl = this.content.getController("match_seatyoursefl_ctrl");
            this.emptyCtrl = this.content.getController("match_seatstatus_ctrl");
            this.ChangeEmptyDisplay(true);
            this.ChangeSelfDisplay(false);
        }
        SetData(data) {
            this.roomRoleInfo = data;
            this.ChangeEmptyDisplay(false);
            if (this.roomRoleInfo.roleBaseInfo.id == DataManager.GetInstance().PlayerData.ID) {
                this.ChangeSelfDisplay(true);
            }
            this.SetID(this.roomRoleInfo.roleBaseInfo.name);
            this.ChangeCk();
        }
        ChangeEmptyDisplay(isEmpty) {
            this.emptyCtrl.selectedIndex = isEmpty ? 1 : 0;
        }
        ChangeSelfDisplay(isSelf) {
            this.selfCtrl.selectedIndex = isSelf ? 1 : 0;
        }
        SetID(id) {
            this.playerIdText.text = id;
        }
        ChangeCk() {
            if (this.uiBallCard == null) {
                this.uiBallCard = new UIBallCard(this.ckInfoComp, 1);
                this.uiBallCard.Show(this.roomRoleInfo.roleBaseInfo.ckCardInfo);
            }
        }
    }

    class FGUI_MatchWaitingPanel {
        constructor() {
            this.UIType = CK_UIType.MatchWaitingPanel;
            this.IsInitFinish = false;
            this.ID = 0;
            this.waitingComps = new Array();
            this.matchTime = 0;
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
            this.matchType = args[0];
            this.battleType = args[1];
            this.SetVisible(true);
            this.BindEvent();
            this.matchModeCtrl.selectedIndex = this.matchType - 1;
            this.battleModeCtrl.selectedIndex = this.battleType - 1;
            this.waitStateCtrl.selectedIndex = 0;
            this.matchTime = 0;
            Laya.timer.loop(1000, this, this.MatchTimer);
        }
        Close() {
            this.ID = 0;
            Laya.stage.off(CK_RespCMD.UserJoin.toString(), this, this.OnGetUserJoin);
            Laya.timer.clear(this, this.MatchTimer);
            this.SetVisible(false);
            Laya.stage.event(CK_EventCode.PanelDestroy, this.ID);
        }
        Destroy() {
            var _a;
            Laya.stage.off(CK_RespCMD.UserJoin.toString(), this, this.OnGetUserJoin);
            Laya.timer.clear(this, this.MatchTimer);
            this.IsInitFinish = false;
            this.ID = 0;
            (_a = this.Content) === null || _a === void 0 ? void 0 : _a.dispose();
            Laya.stage.event(CK_EventCode.PanelDestroy, this.UIType);
        }
        SetVisible(visible) {
            if (this.Content != null) {
                this.Content.visible = visible;
            }
        }
        InitComp() {
            this.matchModeCtrl = this.Content.getController("match_matchtype_ctrl");
            this.battleModeCtrl = this.Content.getController("match_gametype_ctrl");
            this.waitStateCtrl = this.Content.getController("match_readychange_ctrl");
            this.countDownAnim = this.Content.getTransition("match_countdown_anim");
            this.matchTimeText = this.Content.getChild("match_matching_comp").asCom.getChild("match_countdown_txt").asTextField;
            for (let index = 0; index < 6; index++) {
                let childName = `match_player${index + 1}card_comp`;
                let comp = this.Content.getChild(childName).asCom;
                this.waitingComps[index] = new UIMatchWaitingItem(comp);
            }
        }
        BindEvent() {
            Laya.stage.on(CK_RespCMD.UserJoin.toString(), this, this.OnGetUserJoin);
            Laya.stage.once(CK_RespCMD.BattleStart.toString(), this, this.OnGetGameStart);
            Laya.stage.once(CK_RespCMD.MatchFailed.toString(), this, this.OnMatchFailed);
            if (this.matchType == MatchType.Free) {
                Laya.stage.once(RequestCMD.FreeMatch.toString(), this, this.OnGetRoomData);
            }
            else if (this.matchType == MatchType.Championship) {
                Laya.stage.once(RequestCMD.ChampionshipMatch.toString(), this, this.OnGetRoomData);
            }
        }
        OnGetRoomData(data) {
            let respfully = ResponsePackage.RespFully.decode(data);
            let users = respfully.respMatch.roomRoles;
            for (let i = 0; i < users.length; i++) {
                let userJoinData = users[i];
                let index = userJoinData.index;
                let waitingComp = this.waitingComps[index - 1];
                waitingComp.SetData(userJoinData);
            }
        }
        OnGetUserJoin(data) {
            let respfully = ResponsePackage.RespFully.decode(data);
            let userJoinData = respfully.respMatch.joinRole;
            let index = userJoinData.index;
            let waitingComp = this.waitingComps[index - 1];
            waitingComp.SetData(userJoinData);
        }
        OnGetGameStart(data) {
            let respfully = ResponsePackage.RespFully.decode(data);
            this.waitStateCtrl.selectedIndex = 1;
            this.countDownAnim.play(Laya.Handler.create(this, () => {
                FGUIManager.GetInstance().OpenPanel(CK_UIType.LoadingPanel, () => { });
                this.ChangeLoadingProgress(10);
                SceneManager.GetInstance().LoadScene3D(SceneType.BattleScene, Laya.Handler.create(this, this.LoadFGUIPackage, [respfully.respFight.fightResult]));
            }), 1);
        }
        LoadFGUIPackage(fightResult) {
            FGUIManager.GetInstance().LoadUIPackage("battle_package", () => {
                this.ChangeLoadingProgress(50);
                FGUIManager.GetInstance().AddPackage("battle_package");
                this.EnterScene(fightResult);
            });
        }
        OnMatchFailed() {
            console.log("[UIMatch] match failed");
        }
        EnterScene(battleData) {
            this.ChangeLoadingProgress(100);
            Laya.timer.once(500, this, () => {
                SceneManager.GetInstance().DestroyCurrentScene();
                SceneManager.GetInstance().ChangeScene3D(SceneType.BattleScene);
                let battleScene = SceneManager.GetInstance().CurrentActiveScene;
                battleScene.GameInit(battleData);
                FGUIManager.GetInstance().CloseAllPanel();
                FGUIManager.GetInstance().CloseAllWindow();
                battleScene.GameStart();
            });
        }
        ChangeLoadingProgress(value, isTween = false) {
            let data = new EventProperty.LoadProgressProperty(value, isTween);
            Laya.stage.event(CK_EventCode.LoadingProgressChange, data);
        }
        MatchTimer() {
            this.matchTime++;
            let sec = Math.floor(this.matchTime % 60);
            let min = Math.floor(this.matchTime / 60);
            let secStr = sec.toString();
            let minStr = min.toString();
            if (sec < 10) {
                secStr = "0" + sec;
            }
            if (min < 10) {
                minStr = "0" + min;
            }
            this.matchTimeText.text = minStr + ":" + secStr;
        }
    }

    class UIBattleResultItem {
        constructor(content) {
            this.content = content;
            this.InitComp();
        }
        InitComp() {
            this.userIDText = this.content.getChild("battle_playerid_team_settle_txt").asTextField;
            this.divisionIcon = this.content.getChild("battle_rank_team_settle_loader").asLoader;
            this.divisionName = this.content.getChild("battle_rank_settle_txt").asTextField;
            this.ballCard = this.content.getChild("battle_playercard_team_settle_loader").asCom;
            this.scoreText = this.content.getChild("battle_playerranknumber_txt").asTextField;
            this.changeScoreText = this.content.getChild("battle_playerrankchangenumber_settle_txt").asTextField;
            this.scoreColorCtrl = this.content.getController("battle_rankchangetxtcolor_ctrl");
            this.isUserCtrl = this.content.getController("battle_isplayer_ctrl");
            this.isEmptyCtrl = this.content.getController("battle_showplayer_survive_ctrl");
        }
        SetData(userData, battleData) {
            if (battleData == null) {
                this.isEmptyCtrl.selectedIndex = 1;
                return;
            }
            this.battleData = battleData;
            this.userData = userData;
            this.isEmptyCtrl.selectedIndex = 0;
            this.SetID(this.userData.roleBaseInfo.name);
            this.SetRankInfo();
            this.SetCurrentScore();
            this.SetCardInfo();
        }
        SetID(id) {
            this.userIDText.text = id;
        }
        SetRankInfo() {
            let rankLevel = this.userData.roleBaseInfo.division;
            let rankConfig = IntegralLevelConfig.GetInstance().GetData("3010000" + rankLevel);
            this.divisionIcon.url = rankConfig.rankIcon;
            this.divisionName.text = LangConfig.GetInstance().GetData(rankConfig.rankLang).text;
        }
        SetCurrentScore() {
            let rankLevel = DataManager.GetInstance().PlayerData.RankLevel;
            let rankScore = DataManager.GetInstance().PlayerData.RankScore;
            let rankConfig = IntegralLevelConfig.GetInstance().GetData("3010000" + rankLevel);
            let currentScoreStr = "";
            if (DataManager.GetInstance().PlayerData.ID == this.battleData.rid) {
                this.isUserCtrl.selectedIndex = 0;
                currentScoreStr = `${rankScore}/${rankConfig.integral[1]}`;
            }
            else {
                this.isUserCtrl.selectedIndex = 1;
            }
            this.scoreText.text = currentScoreStr;
            let score = this.battleData.integral;
            let scoreText = score.toString();
            if (score >= 0) {
                scoreText = "+" + scoreText;
                this.scoreColorCtrl.selectedIndex = 0;
            }
            else {
                this.scoreColorCtrl.selectedIndex = 1;
            }
            this.changeScoreText.text = scoreText;
        }
        SetCardInfo() {
            let card = new UIBallCard(this.ballCard, 1);
            card.Show(this.userData.roleBaseInfo.ckCardInfo);
        }
    }

    class FGUI_BattleResultPanel {
        constructor() {
            this.UIType = CK_UIType.BattleResultPanel;
            this.IsInitFinish = false;
            this.ID = 0;
            this.resultItems = new Array();
            this.userDataMap = new Map();
        }
        Init() {
            if (this.IsInitFinish == false) {
                this.Config = CK_FGUIConfig.GetInstance().Config.get(this.UIType);
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
            this.battleData = args;
            this.HandleData();
            this.SetResult();
        }
        Close() {
            this.SetVisible(false);
            this.ID = 0;
            Laya.stage.event(CK_EventCode.PanelDestroy, this.ID);
        }
        Destroy() {
            var _a;
            (_a = this.Content) === null || _a === void 0 ? void 0 : _a.dispose();
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
            this.returnBtn = this.Content.getChild("battle_home_btn").asButton;
            this.panelModeCtrl = this.Content.getController("battle_settletypecomp");
            for (let index = 0; index < 6; index++) {
                let compName = `battle_playercard${index + 1}_team_settle_comp`;
                let comp = this.Content.getChild(compName).asCom;
                let newItem = new UIBattleResultItem(comp);
                this.resultItems.push(newItem);
            }
        }
        BindEvent() {
            this.returnBtn.onClick(this, this.ReturnLobby);
        }
        HandleData() {
            let battlers = this.battleData.battlerList;
            for (let index = 0; index < battlers.length; index++) {
                let battler = battlers[index];
                this.userDataMap.set(battler.roleBaseInfo.id, battler);
            }
        }
        SetResult() {
            if (this.battleData.battleType == BattleType.SingleBattle_6) {
                this.panelModeCtrl.selectedIndex = BattleResultType.Survivo;
            }
            else {
                let winCamp = this.battleData.fightClearing.winCamp;
                if (winCamp == 1) {
                    this.panelModeCtrl.selectedIndex = BattleResultType.BlueWin;
                }
                else if (winCamp == 2) {
                    this.panelModeCtrl.selectedIndex = BattleResultType.RedWin;
                }
                else {
                    this.panelModeCtrl.selectedIndex = BattleResultType.NoWin;
                }
            }
            let clearingList = this.battleData.fightClearing.clearingList;
            console.log("[FGUI_BattleResultPanel]SetResult", clearingList);
            for (let index = 0; index < clearingList.length; index++) {
                const element = clearingList[index];
                let UIBattleResultItem = this.resultItems[index];
                let userData = this.userDataMap.get(element.rid);
                UIBattleResultItem.SetData(userData, element);
            }
        }
        ReturnLobby() {
            FGUIManager.GetInstance().CloseAllPanel();
            FGUIManager.GetInstance().CloseAllWindow();
            SceneManager.GetInstance().DestroyCurrentScene();
            SceneManager.GetInstance().LoadScene3D(SceneType.LobbyScene, Laya.Handler.create(this, () => {
                SceneManager.GetInstance().ChangeScene3D(SceneType.LobbyScene);
                FGUIManager.GetInstance().OpenPanel(CK_UIType.MainPanel, () => { }, true, MainPanelType.Lobby);
                FGUIManager.GetInstance().OpenPanel(CK_UIType.TopBarPanel, () => { }, false);
            }));
        }
    }
    var BattleResultType;
    (function (BattleResultType) {
        BattleResultType[BattleResultType["BlueWin"] = 0] = "BlueWin";
        BattleResultType[BattleResultType["RedWin"] = 1] = "RedWin";
        BattleResultType[BattleResultType["NoWin"] = 2] = "NoWin";
        BattleResultType[BattleResultType["Survivo"] = 3] = "Survivo";
    })(BattleResultType || (BattleResultType = {}));

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
        OpenPanel(uiType, onOpenFinish, ifDestroyLast = true, args) {
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
                    if (ifDestroyLast) {
                        let lastPanel = this.CurrentOpenPanel.pop();
                        lastPanel.Destroy();
                    }
                }
                let id = this.CurrentOpenPanel.length + 1;
                ui.ID = id;
                ui.Show(args);
                this.CurrentOpenPanel.push(ui);
            };
            this.LoadUIPackage(config.PackageName, () => {
                openUI();
                onOpenFinish();
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
        CloseAllPanel() {
            while (this.CurrentOpenPanel.length != 0) {
                let panel = this.CurrentOpenPanel.pop();
                panel.Destroy();
            }
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
                case CK_UIType.MainPanel:
                    ui = new FGUI_MainPanel();
                    break;
                case CK_UIType.TopBarPanel:
                    ui = new FGUI_TopBarPanel();
                    break;
                case CK_UIType.BattlePanel:
                    ui = new FGUI_BattlePanel();
                    break;
                case CK_UIType.MatchWaitingPanel:
                    ui = new FGUI_MatchWaitingPanel();
                    break;
                case CK_UIType.BattleResultPanel:
                    ui = new FGUI_BattleResultPanel();
                    break;
                default:
                    break;
            }
            return ui;
        }
    }

    class PropertyGroup {
        constructor(content) {
            this.content = content;
            this.InitComp();
        }
        InitComp() {
            this.levelText = this.content.getChild("common_lvnumber_txt").asTextField;
            this.strengthText = this.content.getChild("common_str_txt").asTextField;
            this.wisdomText = this.content.getChild("common_int_txt").asTextField;
            this.agileText = this.content.getChild("common_dex_txt").asTextField;
            this.healthText = this.content.getChild("common_con_txt").asTextField;
            this.spiritText = this.content.getChild("common_spi_txt").asTextField;
            this.luckText = this.content.getChild("common_luk_txt").asTextField;
            this.hpText = this.content.getChild("common_hpnumber_txt").asTextField;
        }
        SetData(ckInfo) {
            this.levelText.text = ckInfo.level.toString();
            this.strengthText.text = ckInfo.strength.toString();
            this.wisdomText.text = ckInfo.wisdom.toString();
            this.agileText.text = ckInfo.agile.toString();
            this.healthText.text = ckInfo.health.toString();
            this.spiritText.text = ckInfo.spirit.toString();
            this.luckText.text = ckInfo.luck.toString();
        }
    }

    class UIBallLobbyMsg {
        constructor(content) {
            this.content = content;
            this.InitComp();
        }
        InitComp() {
            this.hatLoader = this.content.getChild("lobby_class_comp").asCom.getChild("lobby_function_icon");
            this.weaponLoader = this.content.getChild("lobby_ckweapon_comp").asCom.getChild("lobby_ckweapon_icon");
            this.beltLoader = this.content.getChild("lobby_ckquality_comp").asCom.getChild("lobby_ckquality_icon");
        }
        SetData(data) {
            this.ballData = data;
            this.ChangeCareer(this.ballData.professionList[0]);
            this.ChangeBlood(this.ballData.lineage);
            this.ChangeBelt(this.ballData.quality);
        }
        ChangeCareer(career) {
            let careerConfig = CkWeaponConfig.GetInstance().GetData("1010000" + career);
            this.weaponLoader.url = careerConfig.weaponIcon;
            this.hatLoader.url = careerConfig.cap;
        }
        ChangeBlood(blood) {
            let lobbyScene = SceneManager.GetInstance().CurrentActiveScene;
            lobbyScene.ChangeBall(blood);
            lobbyScene.StartRotate();
        }
        ChangeBelt(quality) {
            let beltConfig = CkQualityConfig.GetInstance().GetData("1030000" + quality);
            this.beltLoader.url = beltConfig.qualityIcon;
        }
    }

    class UILobby {
        constructor(content) {
            this.currentBall = null;
            this.currentProperty = null;
            this.Content = content;
            this.Init();
            this.BindEvent();
        }
        Init() {
            this.ballMsg = this.Content.getChild("lobby_ckmodel_comp").asCom;
            this.ballDayLimit = this.Content.getChild("lobby_daylimit_comp").asCom;
            this.ballLimit = this.Content.getChild("lobby_careerlist_comp").asCom;
            this.statusMsg = this.Content.getChild("lobby_status_comp").asCom;
            this.ballSpecialList = this.Content.getChild("lobby_expertise_list").asList;
            this.gachaBtn = this.Content.getChild("lobby_gashaponmachines_btn").asButton;
            this.bagBtn = this.Content.getChild("lobby_bag_btn").asButton;
            this.formationBtn = this.Content.getChild("lobby_chooseck_btn").asButton;
            this.playBtn = this.Content.getChild("lobby_play_btn").asButton;
            this.formationController = this.Content.getController("lobby_ck_ctrl");
        }
        BindEvent() {
            this.playBtn.onClick(this, this.ToMatchPanel);
        }
        Show() {
            let currentId = DataManager.GetInstance().PlayerData.NoramlaTeam.ckId;
            if (currentId != undefined) {
                this.formationController.selectedIndex = 0;
                let ckInfo = DataManager.GetInstance().PlayerData.GetBallById(currentId);
                this.ChangeBall(ckInfo);
                this.ChangeProperty(ckInfo);
            }
            else {
                this.formationController.selectedIndex = 1;
            }
        }
        Hide() {
            let lobbyScene = SceneManager.GetInstance().CurrentActiveScene;
            lobbyScene.StopRotate();
            lobbyScene.HideCurrent();
        }
        ChangeBall(ckInfo) {
            if (this.currentBall == null) {
                this.currentBall = new UIBallLobbyMsg(this.ballMsg);
            }
            this.currentBall.SetData(ckInfo);
        }
        ChangeProperty(ckInfo) {
            if (this.currentProperty == null) {
                this.currentProperty = new PropertyGroup(this.statusMsg);
            }
            this.currentProperty.SetData(ckInfo);
        }
        ToMatchPanel() {
            let mainPanel = FGUIManager.GetInstance().GetPanel(CK_UIType.MainPanel);
            if (mainPanel != null || mainPanel != undefined) {
                mainPanel.ChangePanel(MainPanelType.Match);
            }
        }
    }

    class ChampionshipConfig {
        constructor() {
            this.Data = new Map([
                ["id_30401001", new Championship(30401001, 1, 304010001, 12, [0, 0, 0, 0], [0, 120, 60, 30], 30401002)],
                ["id_30401002", new Championship(30401002, 1, 304010001, 18, [0, 180, 90, 45], [0, 180, 90, 45], 30402001)],
                ["id_30402001", new Championship(30402001, 2, 304020001, 12, [0, 0, 0, 0], [0, 120, 60, 30], 30403001)],
                ["id_30403001", new Championship(30403001, 3, 304030001, 13, [0, 120, 60, 30], [0, 0, 0, 0], 30404001)],
                ["id_30404001", new Championship(30404001, 4, 304040001, 14, [0, 0, 0, 0], [0, 120, 60, 30], 30405001)],
                ["id_30405001", new Championship(30405001, 5, 304050001, 15, [0, 120, 60, 30], [0, 0, 0, 0], 30406001)],
                ["id_30406001", new Championship(30406001, 6, 304060001, 16, [0, 0, 0, 0], [0, 120, 60, 30], 30407001)],
                ["id_30407001", new Championship(30407001, 7, 304070001, 17, [0, 120, 60, 30], [0, 0, 0, 0], 30401001)],
            ]);
        }
        static GetInstance() {
            if (this.Instance == null) {
                this.Instance = new ChampionshipConfig();
            }
            return this.Instance;
        }
        GetData(Id) {
            let data = this.Data.get("id_" + Id);
            if (data != null) {
                return data;
            }
            return null;
        }
    }
    class Championship {
        constructor(id, dayOfWeek, dayOfWeekLang, startHour, survivalPeoples, teamPeoples, nextId) {
            this.id = id;
            this.dayOfWeek = dayOfWeek;
            this.dayOfWeekLang = dayOfWeekLang;
            this.startHour = startHour;
            this.survivalPeoples = survivalPeoples;
            this.teamPeoples = teamPeoples;
            this.nextId = nextId;
        }
    }

    class BaseMsgHeadUtil {
        static HaveLenField(headByte) {
            return (headByte & BaseMsgHeadUtil.HEAD_MASK_LENGTH_FIELD) == BaseMsgHeadUtil.HEAD_MASK_LENGTH_FIELD;
        }
        static GetCompressionType(headByte) {
            return (headByte & BaseMsgHeadUtil.HEAD_MASK_COMPRESSION_TYPE) >>> 5;
        }
        static GetMsgType(headByte) {
            return (headByte & BaseMsgHeadUtil.HEAD_MASK_MSG_TYPE) >>> 2;
        }
        static GetExtendType(headByte) {
            return headByte & BaseMsgHeadUtil.HEAD_MASK_EXTEND;
        }
        static BuildHeadByte(haveLenField, msgType, cmpType, extType) {
            let ret = haveLenField ? 1 : 0;
            ret = ret << 2 | cmpType & 0b11;
            ret = ret << 3 | msgType & 0b111;
            ret = ret << 2 | extType & 0b11;
            return ret;
        }
    }
    BaseMsgHeadUtil.HEAD_MASK_LENGTH_FIELD = 0b1 << 7;
    BaseMsgHeadUtil.HEAD_MASK_LENGTH_FIELD_INVS = ~BaseMsgHeadUtil.HEAD_MASK_LENGTH_FIELD;
    BaseMsgHeadUtil.HEAD_MASK_MSG_TYPE = 0b111 << 2;
    BaseMsgHeadUtil.HEAD_MASK_MSG_TYPE_INVS = ~BaseMsgHeadUtil.HEAD_MASK_MSG_TYPE;
    BaseMsgHeadUtil.HEAD_MASK_COMPRESSION_TYPE = 0b11 << 5;
    BaseMsgHeadUtil.HEAD_MASK_COMPRESSION_TYPE_INVS = ~BaseMsgHeadUtil.HEAD_MASK_COMPRESSION_TYPE;
    BaseMsgHeadUtil.HEAD_MASK_EXTEND = 0b11;
    BaseMsgHeadUtil.HEAD_MASK_EXTEND_RVS = ~BaseMsgHeadUtil.HEAD_MASK_EXTEND;

    var MsgType;
    (function (MsgType) {
        MsgType[MsgType["BIZ_MSG"] = 0] = "BIZ_MSG";
        MsgType[MsgType["CTRL_HEART_BEAT"] = 1] = "CTRL_HEART_BEAT";
        MsgType[MsgType["CTRL_CONNC_OPEN"] = 2] = "CTRL_CONNC_OPEN";
        MsgType[MsgType["CTRL_CONNC_CLOSE"] = 3] = "CTRL_CONNC_CLOSE";
        MsgType[MsgType["CTRL_CUSTOM"] = 4] = "CTRL_CUSTOM";
        MsgType[MsgType["ERR_MSG"] = 7] = "ERR_MSG";
    })(MsgType || (MsgType = {}));
    var ExtType;
    (function (ExtType) {
        ExtType[ExtType["BIZ_MSG_EXT_TYPE_UNICAST"] = 0] = "BIZ_MSG_EXT_TYPE_UNICAST";
        ExtType[ExtType["BIZ_MSG_EXT_TYPE_BROADCAST"] = 1] = "BIZ_MSG_EXT_TYPE_BROADCAST";
        ExtType[ExtType["BIZ_MSG_EXT_TYPE_MULTICAST"] = 2] = "BIZ_MSG_EXT_TYPE_MULTICAST";
        ExtType[ExtType["CTRL_HEART_BEAT_EXT_TYPE_BASIC"] = 10] = "CTRL_HEART_BEAT_EXT_TYPE_BASIC";
        ExtType[ExtType["CTRL_CONNC_OPEN_EXT_TYPE_BASIC"] = 20] = "CTRL_CONNC_OPEN_EXT_TYPE_BASIC";
        ExtType[ExtType["CTRL_CONNC_CLOSE_EXT_TYPE_NO_PARAM"] = 30] = "CTRL_CONNC_CLOSE_EXT_TYPE_NO_PARAM";
        ExtType[ExtType["CTRL_CONNC_CLOSE_EXT_TYPE_WITH_CAUSE_CODE"] = 31] = "CTRL_CONNC_CLOSE_EXT_TYPE_WITH_CAUSE_CODE";
        ExtType[ExtType["CTRL_CUSTOM_EXT_TYPE_0"] = 40] = "CTRL_CUSTOM_EXT_TYPE_0";
        ExtType[ExtType["CTRL_CUSTOM_EXT_TYPE_1"] = 41] = "CTRL_CUSTOM_EXT_TYPE_1";
        ExtType[ExtType["CTRL_CUSTOM_EXT_TYPE_2"] = 42] = "CTRL_CUSTOM_EXT_TYPE_2";
        ExtType[ExtType["CTRL_CUSTOM_EXT_TYPE_3"] = 43] = "CTRL_CUSTOM_EXT_TYPE_3";
        ExtType[ExtType["ERR_MSG_EXT_TYPE_CODE"] = 70] = "ERR_MSG_EXT_TYPE_CODE";
        ExtType[ExtType["ERR_MSG_EXT_TYPE_CODE_WITH_CAUSE"] = 71] = "ERR_MSG_EXT_TYPE_CODE_WITH_CAUSE";
        ExtType[ExtType["ERR_MSG_EXT_TYPE_CODE_WITH_AGENT_ID"] = 72] = "ERR_MSG_EXT_TYPE_CODE_WITH_AGENT_ID";
        ExtType[ExtType["ERR_MSG_EXT_TYPE_CODE_WITH_AGENT_ID_AND_CAUSE"] = 73] = "ERR_MSG_EXT_TYPE_CODE_WITH_AGENT_ID_AND_CAUSE";
    })(ExtType || (ExtType = {}));

    class BitConvert {
        constructor() {
            this.byte = new Laya.Byte();
            this.byte = new Laya.Byte();
            this.byte.endian = Laya.Byte.LITTLE_ENDIAN;
        }
        static GetInstance() {
            if (this.Instance == null) {
                this.Instance = new BitConvert();
            }
            return this.Instance;
        }
        IntToByteArray(int) {
            this.byte.clear();
            this.byte.writeInt32(int);
            let array = this.byte.readUint8Array(0, this.byte.length);
            let result = new Array(this.byte.length);
            for (let index = 0; index < array.length; index++) {
                const element = array[index];
                result[index] = element;
            }
            return result;
        }
        StringToByteArray(str) {
            this.byte.clear();
            this.byte.writeUTFBytes(str);
            let array = this.byte.readUint8Array(0, this.byte.length);
            let result = new Array(this.byte.length);
            for (let index = 0; index < array.length; index++) {
                const element = array[index];
                result[index] = element;
            }
            return result;
        }
        ByteArrayToNumberArray(arr) {
            let numberArray = new Array(arr.length);
            for (let index = 0; index < arr.length; index++) {
                const element = arr[index];
                numberArray[index] = element;
            }
            return numberArray;
        }
        NumberArrayToByte(arr) {
            let byte = new Laya.Byte();
            for (let index = 0; index < arr.length; index++) {
                const element = arr[index];
                byte.writeByte(element);
            }
            byte.pos = 0;
            return byte;
        }
        NumberArrayToByteArray(arr) {
            let byte = this.NumberArrayToByte(arr);
            let bytes = byte.getUint8Array(0, byte.length);
            return bytes;
        }
    }

    class MiniDataUtil {
        static GetStringDataDscrpt(strBytes) {
            let ret = 0;
            ret |= MiniDataUtil.DATA_TYPE_STR;
            let len = -1;
            if (strBytes != null) {
                len = strBytes.length;
                if (len > MiniDataUtil.STR_MAX_LEN)
                    throw new console.error(("data is too long, only support len" + MiniDataUtil.STR_MAX_LEN + "s data"));
                ret |= len;
            }
            else {
                strBytes = MiniDataUtil.ZERO_LEN_BYTES;
            }
            return new MiniDataDecryptHead(ret, strBytes);
        }
        static GetIntDataDscrptHead(num) {
            if (num < 0)
                throw new console.error("only support positive data");
            let headByte = 0;
            let tailByteLen = 0;
            let tailBytes = MiniDataUtil.ZERO_LEN_BYTES;
            if (num <= MiniDataUtil._1BYTES_NUM_MAX_VAL) {
                headByte |= num;
            }
            else {
                tailByteLen = 1;
                headByte |= (num & 0b1111);
                num = (num >>> 4);
                let temp = num;
                while (true) {
                    if ((temp >>>= 8) == 0)
                        break;
                    tailByteLen++;
                }
                tailBytes = [tailByteLen];
                temp = 0;
                while (true) {
                    tailBytes[temp++] = (num & 0b11111111);
                    num >>>= 8;
                    if (num == 0)
                        break;
                }
            }
            headByte |= (tailByteLen << 4);
            return new MiniDataDecryptHead(headByte, tailBytes);
        }
        static GetLongDataDscrptHead(num) {
            if (num < 0)
                throw new console.error("only support positive data");
            let headByte = 0;
            let tailByteLen = 0;
            let tailBytes = MiniDataUtil.ZERO_LEN_BYTES;
            if (num <= MiniDataUtil._1BYTES_NUM_MAX_VAL) {
                headByte |= num;
            }
            else {
                if (num <= MiniDataUtil._7BYTES_NUM_MAX_VAL) {
                    tailByteLen = 1;
                    headByte |= (num & 0b1111);
                    num = (num >>> 4);
                    let temp = num;
                    while (true) {
                        if ((temp >>>= 8) == 0) {
                            break;
                        }
                        tailByteLen++;
                    }
                }
                else {
                    tailByteLen = 8;
                }
                tailBytes = [tailByteLen];
                let temp = 0;
                while (true) {
                    tailBytes[temp++] = (num & 0b11111111);
                    num >>>= 8;
                    if (num == 0)
                        break;
                }
            }
            headByte |= (tailByteLen << 4);
            return new MiniDataDecryptHead(headByte, tailBytes);
        }
        static GetMiniData(dscrptByte, bytesSupplier) {
            let type = (dscrptByte & MiniDataUtil.TYPE_MASK);
            let tailLen = -1;
            let bytes = new Array;
            switch (type) {
                case MiniDataUtil.DATA_TYPE_STR:
                    tailLen = dscrptByte & MiniDataUtil.STR_LEN_MASK;
                    if (tailLen > 0) {
                        bytes = new Array(tailLen);
                        bytes = bytesSupplier(bytes);
                        let uint8 = BitConvert.GetInstance().NumberArrayToByte(bytes);
                        uint8.pos = 0;
                        return uint8.getUTFBytes(tailLen);
                    }
                    break;
                case MiniDataUtil.DATA_TYPE_NUM: {
                    tailLen = (dscrptByte & MiniDataUtil.NUM_TYPE_MASK) >>> 4;
                    if (tailLen == 0)
                        return dscrptByte & MiniDataUtil.HEAD_NUM_MASK;
                    else {
                        bytes = new Array(tailLen);
                        bytes = bytesSupplier(bytes);
                        if (tailLen <= 3) {
                            let data = dscrptByte & MiniDataUtil.HEAD_NUM_MASK;
                            for (let i = 0, shift = 4; i < tailLen; i++, shift += 8) {
                                data = data | ((bytes[i] & 0xFF) << shift);
                            }
                            return data;
                        }
                        else {
                            let lte7Bytes = tailLen <= 6;
                            let data = lte7Bytes ? dscrptByte & MiniDataUtil.HEAD_NUM_MASK : 0;
                            for (let i = 0, shift = lte7Bytes ? 4 : 0; i < tailLen; i++, shift += 8) {
                                data = data | ((bytes[i] & 0xFF) << shift);
                            }
                            return data;
                        }
                    }
                }
                default:
                    break;
            }
            return null;
        }
    }
    MiniDataUtil.TYPE_MASK = 128;
    MiniDataUtil.DATA_TYPE_STR = 128;
    MiniDataUtil.STR_LEN_MASK = 127;
    MiniDataUtil.STR_MAX_LEN = 127;
    MiniDataUtil.DATA_TYPE_NUM = 0;
    MiniDataUtil._1BYTES_NUM_MAX_VAL = 15;
    MiniDataUtil._7BYTES_NUM_MAX_VAL = 4503599627370495;
    MiniDataUtil._1BYTES_NUM_TYPE = 0;
    MiniDataUtil._2BYTES_NUM_TYPE = 16;
    MiniDataUtil._3BYTES_NUM_TYPE = 32;
    MiniDataUtil._4BYTES_NUM_TYPE = 48;
    MiniDataUtil._5BYTES_NUM_TYPE = 64;
    MiniDataUtil._6BYTES_NUM_TYPE = 80;
    MiniDataUtil._7BYTES_NUM_TYPE = 96;
    MiniDataUtil._8BYTES_NUM_TYPE = 112;
    MiniDataUtil.NUM_TYPE_MASK = 112;
    MiniDataUtil.HEAD_NUM_MASK = 15;
    MiniDataUtil.ZERO_LEN_BYTES = [];
    class MiniDataDecryptHead {
        constructor(headByte, tailBytes) {
            this.SetHeadByte(headByte);
            this.SetTailBytes(tailBytes);
        }
        GetHeadByte() {
            return this.headByte;
        }
        SetHeadByte(headByte) {
            this.headByte = headByte;
        }
        GetTailBytes() {
            return this.tailBytes;
        }
        SetTailBytes(tailBytes) {
            this.tailBytes = tailBytes;
        }
    }

    class MessageCenter {
        constructor() {
        }
        static GetInstance() {
            if (this.Instance == null) {
                this.Instance = new MessageCenter();
            }
            return this.Instance;
        }
        HandleReceiveMsg(data) {
            BaseMsgHeadUtil.GetCompressionType(data.Head);
            let baseType = BaseMsgHeadUtil.GetMsgType(data.Head);
            let extType = BaseMsgHeadUtil.GetExtendType(data.Head);
            extType = baseType * 10 + extType;
            console.log("ReceiveMsg", "BaseType:", baseType, " ,ExtType:", extType);
            switch (baseType) {
                case MsgType.BIZ_MSG:
                    this.HandleBizMsg(extType, data);
                    break;
                case MsgType.CTRL_HEART_BEAT:
                    this.HandleHeartbeat();
                    break;
                case MsgType.CTRL_CONNC_OPEN:
                    this.HandleConnectOpen();
                    break;
                case MsgType.CTRL_CONNC_CLOSE:
                    this.HandleConnectClose(extType, data);
                    break;
                case MsgType.CTRL_CUSTOM:
                    this.HandleCustom(extType, data);
                    break;
                case MsgType.ERR_MSG:
                    this.HandleErrorMsg(extType, data);
                    break;
                default:
                    break;
            }
        }
        HandleBizMsg(extType, data) {
            let body = data.Body;
            if (body != null) {
                let byte = new Laya.Byte();
                byte.writeArrayBuffer(body);
                byte.pos = 0;
                let bytesSupplier = (bytes) => {
                    let tempBytes = byte.getUint8Array(byte.pos, bytes.length);
                    return BitConvert.GetInstance().ByteArrayToNumberArray(tempBytes);
                };
                let msgLength = MiniDataUtil.GetMiniData(byte.getByte(), bytesSupplier);
                let cmdId = MiniDataUtil.GetMiniData(byte.getByte(), bytesSupplier);
                let data = byte.getUint8Array(byte.pos, byte.length);
                switch (extType) {
                    case ExtType.BIZ_MSG_EXT_TYPE_UNICAST:
                        console.log("HandleBizMsg", cmdId);
                        Laya.stage.event(cmdId.toString(), data);
                        break;
                    case ExtType.BIZ_MSG_EXT_TYPE_BROADCAST:
                        console.log("BIZ_MSG_EXT_TYPE_BROADCAST");
                        break;
                    case ExtType.BIZ_MSG_EXT_TYPE_MULTICAST:
                        console.log("BIZ_MSG_EXT_TYPE_MULTICAST");
                        break;
                    default:
                        break;
                }
            }
        }
        HandleErrorMsg(extType, data) {
            let body = data.Body;
            let errCode = 0;
            if (body != null) {
                let byte = new Laya.Byte();
                byte.writeArrayBuffer(body);
                byte.pos = 0;
                let bytesSupplier = (bytes) => {
                    let tempBytes = byte.getUint8Array(byte.pos, bytes.length);
                    return BitConvert.GetInstance().ByteArrayToNumberArray(tempBytes);
                };
                errCode = MiniDataUtil.GetMiniData(byte.getByte(), bytesSupplier);
                switch (extType) {
                    case ExtType.ERR_MSG_EXT_TYPE_CODE:
                        console.log("ERR_MSG_EXT_TYPE_CODE", errCode);
                        break;
                    case ExtType.ERR_MSG_EXT_TYPE_CODE_WITH_CAUSE:
                        let causeCode = MiniDataUtil.GetMiniData(byte.getByte(), bytesSupplier);
                        console.log("ERR_MSG_EXT_TYPE_CODE_WITH_CAUSE", errCode, causeCode);
                        break;
                    case ExtType.ERR_MSG_EXT_TYPE_CODE_WITH_AGENT_ID:
                        console.log("ERR_MSG_EXT_TYPE_CODE_WITH_AGENT_ID", errCode);
                        break;
                    case ExtType.ERR_MSG_EXT_TYPE_CODE_WITH_AGENT_ID_AND_CAUSE:
                        console.log("ERR_MSG_EXT_TYPE_CODE_WITH_AGENT_ID_AND_CAUSE", errCode);
                        break;
                    default:
                        break;
                }
            }
        }
        HandleConnectClose(extType, data) {
            let body = data.Body;
            if (body != null) {
                let byte = new Laya.Byte();
                byte.writeArrayBuffer(body);
                byte.pos = 0;
                let bytesSupplier = (bytes) => {
                    let tempBytes = byte.getUint8Array(byte.pos, bytes.length);
                    return BitConvert.GetInstance().ByteArrayToNumberArray(tempBytes);
                };
                switch (extType) {
                    case ExtType.CTRL_CONNC_CLOSE_EXT_TYPE_NO_PARAM:
                        console.log("CTRL_CONNC_CLOSE_EXT_TYPE_NO_PARAM");
                        break;
                    case ExtType.CTRL_CONNC_CLOSE_EXT_TYPE_WITH_CAUSE_CODE:
                        let causeCode = MiniDataUtil.GetMiniData(byte.getByte(), bytesSupplier);
                        console.log("CTRL_CONNC_CLOSE_EXT_TYPE_WITH_CAUSE_CODE", causeCode);
                        break;
                    default:
                        break;
                }
                SocketClient.GetInstance().SocketClose();
            }
        }
        HandleHeartbeat() {
            console.log("CTRL_HEART_BEAT");
        }
        HandleConnectOpen() {
            SocketClient.GetInstance().Regular();
            console.log("CTRL_CONNC_OPEN_EXT_TYPE_BASIC");
        }
        HandleCustom(extType, data) {
            let body = data.Body;
            if (body != null) {
                let byte = new Laya.Byte();
                byte.writeArrayBuffer(body);
                byte.pos = 0;
                let bytesSupplier = (bytes) => {
                    let tempBytes = byte.getUint8Array(byte.pos, bytes.length);
                    return BitConvert.GetInstance().ByteArrayToNumberArray(tempBytes);
                };
                switch (extType) {
                    case ExtType.CTRL_CUSTOM_EXT_TYPE_0:
                        console.log("CTRL_CUSTOM_EXT_TYPE_0");
                        Laya.stage.event(CK_EventCode.RegularSuccess);
                        break;
                    case ExtType.CTRL_CUSTOM_EXT_TYPE_1:
                        console.log("CTRL_CUSTOM_EXT_TYPE_1");
                        break;
                    case ExtType.CTRL_CUSTOM_EXT_TYPE_2:
                        console.log("CTRL_CUSTOM_EXT_TYPE_2");
                        break;
                    case ExtType.CTRL_CUSTOM_EXT_TYPE_3:
                        console.log("CTRL_CUSTOM_EXT_TYPE_3");
                        break;
                    default:
                        break;
                }
            }
        }
    }

    class SocketClient {
        constructor() {
            this.UID = 111111111;
            this.Endian = Laya.Byte.BIG_ENDIAN;
            this.socket = new Laya.Socket();
            this.socket.endian = this.Endian;
            this.byte = new Laya.Byte();
            this.byte.endian = this.Endian;
            this.socket.on(Laya.Event.OPEN, this, this.OpenHandler);
            this.socket.on(Laya.Event.MESSAGE, this, this.ReceiveHandler);
            this.socket.on(Laya.Event.CLOSE, this, this.CloseHandler);
            this.socket.on(Laya.Event.ERROR, this, this.ErrorHandler);
        }
        static GetInstance() {
            if (this.Instance == null) {
                this.Instance = new SocketClient();
            }
            return this.Instance;
        }
        Connect() {
            console.log("Socket Connet", this.IP, this.Port);
            this.socket.connect(this.IP, this.Port);
        }
        OpenHandler(event = null) {
            this.ShakeHand();
        }
        ReceiveHandler(msg = null) {
            let buffer = msg;
            let byte = new Laya.Byte();
            byte.writeArrayBuffer(buffer);
            let receiveData = new ReceiveData();
            byte.pos = 0;
            receiveData.Head = byte.getByte();
            if (BaseMsgHeadUtil.HaveLenField(receiveData.Head)) {
                receiveData.Length = byte.getInt32();
            }
            receiveData.Body = byte.getUint8Array(byte.pos, byte.length);
            MessageCenter.GetInstance().HandleReceiveMsg(receiveData);
        }
        CloseHandler(e = null) {
            console.log("Socket Close");
        }
        ErrorHandler(e = null) {
            console.log("Socket Error", e);
        }
        SendMsg(haveLenField, msgType, cmpType, extType, msg) {
            this.byte.clear();
            let head = BaseMsgHeadUtil.BuildHeadByte(haveLenField, msgType, cmpType, extType);
            this.byte.writeByte(head);
            this.byte.writeInt32(msg.length);
            for (let index = 0; index < msg.length; index++) {
                const element = msg[index];
                this.byte.writeByte(element);
            }
            this.socket.send(this.byte.buffer);
        }
        ShakeHand() {
            this.byte.clear();
            let head = BaseMsgHeadUtil.BuildHeadByte(true, MsgType.CTRL_CONNC_OPEN, 0, ExtType.CTRL_CONNC_OPEN_EXT_TYPE_BASIC);
            this.byte.writeByte(head);
            var body = MiniDataUtil.GetStringDataDscrpt(BitConvert.GetInstance().StringToByteArray(this.ServerId));
            var bodyLength = 1 + body.GetTailBytes().length;
            this.byte.writeInt32(bodyLength);
            this.byte.writeByte(body.GetHeadByte());
            let tailArray = body.GetTailBytes();
            for (let index = 0; index < tailArray.length; index++) {
                const element = tailArray[index];
                this.byte.writeByte(element);
            }
            this.socket.send(this.byte.buffer);
        }
        Regular() {
            this.byte.clear();
            this.byte.pos = 0;
            let msg = this.UID + "#" + this.ServerId + "#" + "accessToken" + "#" + "refreshToken";
            let msgByteArray = BitConvert.GetInstance().StringToByteArray(msg);
            let msgHead = MiniDataUtil.GetStringDataDscrpt(msgByteArray);
            this.byte.writeByte(msgHead.GetHeadByte());
            let tailBytes = msgHead.GetTailBytes();
            for (let index = 0; index < tailBytes.length; index++) {
                const element = tailBytes[index];
                this.byte.writeByte(element);
            }
            let msgArray = BitConvert.GetInstance().ByteArrayToNumberArray(this.byte.getUint8Array(0, this.byte.length));
            this.SendMsg(true, MsgType.CTRL_CUSTOM, 0, ExtType.CTRL_CUSTOM_EXT_TYPE_0, msgArray);
        }
        SendBizMsg(cmd, msg) {
            console.log("[SocketClient]Send Biz Msg ", cmd);
            let proxtoHead = MiniDataUtil.GetIntDataDscrptHead(3);
            let cmdHead = MiniDataUtil.GetIntDataDscrptHead(cmd);
            this.byte.clear();
            this.byte.pos = 0;
            this.byte.writeByte(proxtoHead.GetHeadByte());
            let tailArray = proxtoHead.GetTailBytes();
            for (let index = 0; index < tailArray.length; index++) {
                const element = tailArray[index];
                this.byte.writeByte(element);
            }
            this.byte.writeByte(cmdHead.GetHeadByte());
            tailArray = cmdHead.GetTailBytes();
            for (let index = 0; index < tailArray.length; index++) {
                const element = tailArray[index];
                this.byte.writeByte(element);
            }
            for (let index = 0; index < msg.length; index++) {
                const element = msg[index];
                this.byte.writeUint8(element);
            }
            let msgArray = BitConvert.GetInstance().ByteArrayToNumberArray(this.byte.getUint8Array(0, this.byte.length));
            this.SendMsg(true, MsgType.BIZ_MSG, 0, ExtType.BIZ_MSG_EXT_TYPE_UNICAST, msgArray);
        }
        SendBizMsg_Empty(cmd) {
            let rqst = RequestPackage.RqstInt.create();
            rqst.value = 0;
            let buf = RequestPackage.RqstInt.encode(rqst).finish();
            SocketClient.GetInstance().SendBizMsg(cmd, buf);
        }
        SocketClose() {
            this.socket.cleanSocket();
            this.socket.close();
        }
    }
    class ReceiveData {
    }

    class UIMatch {
        constructor(content) {
            this.currentMatchMode = MatchType.Free;
            this.isRequestMsg = false;
            this.Content = content;
            this.Init();
        }
        Init() {
            this.InitComp();
            this.BindEvent();
        }
        Show(args) {
        }
        Hide() {
        }
        InitComp() {
            this.returnBtn = this.Content.getChild("match_back_btn").asButton;
            this.freeModeBtn = this.Content.getChild("match_matchmode1_btn").asButton;
            this.championModeBtn = this.Content.getChild("match_matchmode2_btn").asButton;
            this.free_singleBattleBtn = this.Content.getChild("match_mode2_free_btn").asButton;
            this.free_teamBattleBtn = this.Content.getChild("match_mode1_free_btn").asButton;
            this.champ_singleBattleBtn = this.Content.getChild("match_mode2_championship_btn").asButton;
            this.champ_teamBattleBtn = this.Content.getChild("match_mode1_championship_btn").asButton;
            this.nextChampionText = this.Content.getChild("match_time_txt").asTextField;
        }
        BindEvent() {
            this.returnBtn.onClick(this, this.ToLobbyPanel);
            this.freeModeBtn.onClick(this, this.ChangeMode_Free);
            this.championModeBtn.onClick(this, this.ChangeMode_Champion);
            this.free_singleBattleBtn.onClick(this, this.StartMatch, [BattleType.SingleBattle_6]);
            this.free_teamBattleBtn.onClick(this, this.StartMatch, [BattleType.TeamBattle_3]);
            this.champ_singleBattleBtn.onClick(this, this.StartMatch, [BattleType.SingleBattle_6]);
            this.champ_teamBattleBtn.onClick(this, this.StartMatch, [BattleType.TeamBattle_3]);
        }
        ToLobbyPanel() {
            let mainPanel = FGUIManager.GetInstance().GetPanel(CK_UIType.MainPanel);
            if (mainPanel != null || mainPanel != undefined) {
                mainPanel.ChangePanel(MainPanelType.Lobby);
            }
        }
        ChangeMode_Free() {
            this.currentMatchMode = MatchType.Free;
        }
        ChangeMode_Champion() {
            this.currentMatchMode = MatchType.Championship;
            this.RqstChampionMsg();
        }
        RqstChampionMsg() {
            if (this.isRequestMsg == false) {
                Laya.stage.once(RequestCMD.ChampionshipInfo.toString(), this, this.freshChampionshipInfo);
                SocketClient.GetInstance().SendBizMsg_Empty(RequestCMD.ChampionshipInfo);
                this.isRequestMsg = true;
            }
        }
        freshChampionshipInfo(data) {
            let respfully = ResponsePackage.RespFully.decode(data);
            let championInfo = respfully.respMatch.respChampionship;
            this.currentChampionMsg = championInfo;
            this.champ_singleBattleBtn.grayed = !championInfo.survivalEnd;
            this.champ_teamBattleBtn.grayed = !championInfo.teamEnd;
            let champConfig = ChampionshipConfig.GetInstance().GetData(championInfo.cid);
            let nextChampConfig = ChampionshipConfig.GetInstance().GetData(champConfig.nextId);
            this.nextChampionText.text = `${nextChampConfig.startHour}:00:00`;
            this.isRequestMsg = false;
        }
        StartMatch(battleMode) {
            this.currentBattleMode = battleMode;
            let args = new Array();
            args.push(this.currentMatchMode);
            args.push(this.currentBattleMode);
            FGUIManager.GetInstance().OpenPanel(CK_UIType.MatchWaitingPanel, () => {
                switch (this.currentMatchMode) {
                    case MatchType.Free:
                        this.EnterFree();
                        break;
                    case MatchType.Championship:
                        this.EnterChampion();
                        break;
                    default:
                        break;
                }
            }, false, args);
        }
        EnterFree() {
            console.log("[UIMatch]EnterFree ", this.currentBattleMode);
            let msg = RequestPackage.RqstInt.create();
            msg.value = this.currentBattleMode;
            let buf = RequestPackage.RqstInt.encode(msg).finish();
            SocketClient.GetInstance().SendBizMsg(RequestCMD.FreeMatch, buf);
        }
        EnterChampion() {
            console.log("[UIMatch]EnterChampion ", this.currentBattleMode);
            if (this.currentChampionMsg == undefined) {
                console.log("[UIMatch] Is wait champion msg");
                return;
            }
            switch (this.currentBattleMode) {
                case BattleType.SingleBattle_6:
                    if (!this.currentChampionMsg.survivalEnd) {
                        return;
                    }
                    break;
                case BattleType.TeamBattle_3:
                    if (!this.currentChampionMsg.teamEnd) {
                        return;
                    }
                    break;
                default:
                    break;
            }
            let msg = RequestPackage.RqstInt.create();
            msg.value = this.currentBattleMode;
            let buf = RequestPackage.RqstInt.encode(msg).finish();
            SocketClient.GetInstance().SendBizMsg(RequestCMD.ChampionshipMatch, buf);
        }
    }

    class FGUI_MainPanel {
        constructor() {
            this.UIType = CK_UIType.MainPanel;
            this.IsInitFinish = false;
            this.ID = 0;
            this.lobbyPanel = null;
            this.matchPanel = null;
            this.panelMap = new Map();
        }
        Init() {
            if (this.IsInitFinish == false) {
                this.Config = CK_FGUIConfig.GetInstance().Config.get(this.UIType);
                this.Content = fgui.UIPackage.createObject(this.Config.PackageName, this.Config.ComponentName).asCom;
                fgui.GRoot.inst.addChild(this.Content);
                this.Content.makeFullScreen();
                this.InitComp();
                this.InitMap();
                this.SetVisible(false);
                this.IsInitFinish = true;
            }
        }
        Show(panelType) {
            this.SetVisible(true);
            this.ChangePanel(panelType);
        }
        Close() {
            this.SetVisible(false);
            this.ID = 0;
            Laya.stage.event(CK_EventCode.PanelDestroy, this.ID);
        }
        Destroy() {
            var _a;
            (_a = this.Content) === null || _a === void 0 ? void 0 : _a.dispose();
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
            this.matchComp = this.Content.getChild("match_comp").asCom;
            this.lobbyComp = this.Content.getChild("lobby_comp").asCom;
            this.panelController = this.Content.getController("main_ctrl");
        }
        InitMap() {
            this.lobbyPanel = new UILobby(this.lobbyComp);
            this.matchPanel = new UIMatch(this.matchComp);
            this.panelMap.set(MainPanelType.Lobby, this.lobbyPanel);
            this.panelMap.set(MainPanelType.Match, this.matchPanel);
        }
        ChangePanel(panelType, args) {
            this.panelController.selectedIndex = panelType;
            if (this.currentUI != undefined) {
                this.currentUI.Hide();
            }
            this.currentUI = this.panelMap.get(panelType);
            this.currentUI.Show(args);
        }
    }
    var MainPanelType;
    (function (MainPanelType) {
        MainPanelType[MainPanelType["Lobby"] = 0] = "Lobby";
        MainPanelType[MainPanelType["Match"] = 1] = "Match";
    })(MainPanelType || (MainPanelType = {}));

    class HttpManager {
        constructor() {
        }
        static GetInstance() {
            if (this.Instance == null) {
                this.Instance = new HttpManager();
            }
            return this.Instance;
        }
        Get(url, data, onComplete, onError) {
            let rqst = new Laya.HttpRequest();
            rqst.http.timeout = 10000;
            rqst.once(Laya.Event.COMPLETE, this, onComplete);
            rqst.once(Laya.Event.ERROR, this, onError);
            rqst.send(url, data, "get", "json");
        }
        Post(url, data, onComplete, onError) {
            let rqst = new Laya.HttpRequest();
            rqst.http.timeout = 10000;
            rqst.once(Laya.Event.COMPLETE, this, onComplete);
            rqst.once(Laya.Event.ERROR, this, onError);
            rqst.send(url, data, "post", "json");
        }
    }

    class LoginManager {
        constructor() {
            this.LoginURL = "http://192.168.10.26:8001/api/version/config";
            this.Channel = "trunk";
            this.Version = "1.0.1";
        }
        static GetInstance() {
            if (this.Instance == null) {
                this.Instance = new LoginManager();
            }
            return this.Instance;
        }
        GetServer() {
            let url = `${this.LoginURL}?channel=${this.Channel}&version=${this.Version}`;
            HttpManager.GetInstance().Get(url, null, this.onGetServerSuccess, this.onGetServerError);
            console.log("GetServer", url);
        }
        onGetServerSuccess(data) {
            if (data.code == 0) {
                let body = data.body;
                DataManager.GetInstance().SetHttpServerResp(body);
            }
            else {
                console.log("[LoginManager]", "onGetServerSuccess", "Get Error");
            }
        }
        onGetServerError(error) {
            console.log(error);
        }
        SocketConnet() {
            SocketClient.GetInstance().IP = DataManager.GetInstance().HttpServerResp.GatewayIp;
            SocketClient.GetInstance().Port = DataManager.GetInstance().HttpServerResp.Port;
            SocketClient.GetInstance().ServerId = DataManager.GetInstance().HttpServerResp.Sid;
            SocketClient.GetInstance().Connect();
        }
        SendVerify() {
            let rqstVerify = RequestPackage.RqstVerify.create();
            rqstVerify.ip = DataManager.GetInstance().HttpServerResp.ClientIP;
            rqstVerify.access = "111123132";
            rqstVerify.sid = DataManager.GetInstance().HttpServerResp.Sid;
            rqstVerify.uid = SocketClient.GetInstance().UID.toString();
            let buf = RequestPackage.RqstVerify.encode(rqstVerify).finish();
            SocketClient.GetInstance().SendBizMsg(RequestCMD.Verify, buf);
        }
        SendCreateRole() {
            SocketClient.GetInstance().SendBizMsg_Empty(RequestCMD.CreateRole);
        }
        SendRqstRoleInfo() {
            let rqst = RequestPackage.RqstLoadRole.create();
            rqst.ip = DataManager.GetInstance().HttpServerResp.ClientIP;
            rqst.sid = DataManager.GetInstance().HttpServerResp.Sid;
            let buf = RequestPackage.RqstLoadRole.encode(rqst).finish();
            SocketClient.GetInstance().SendBizMsg(RequestCMD.EnterGame, buf);
        }
        StartHeartBeat() {
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
            this.ChangeLoadingProgress(0);
            this.GetServerResp();
        }
        GetServerResp() {
            Laya.stage.once(CK_EventCode.GetServerResp, this, this.OnGetSuccess);
            LoginManager.GetInstance().GetServer();
        }
        OnGetSuccess() {
            this.ChangeLoadingProgress(10);
            Laya.stage.once(CK_EventCode.RegularSuccess, this, this.OnRegularSuccess);
            LoginManager.GetInstance().SocketConnet();
        }
        OnRegularSuccess() {
            this.ChangeLoadingProgress(20);
            Laya.stage.once(RequestCMD.Verify.toString(), this, this.OnVerifySuccess);
            LoginManager.GetInstance().SendVerify();
        }
        OnVerifySuccess(data) {
            this.ChangeLoadingProgress(30);
            let respfully = ResponsePackage.RespFully.decode(data);
            let ifCreateRole = respfully.respRole.createRole.value;
            if (ifCreateRole) {
                Laya.stage.once(RequestCMD.CreateRole.toString(), this, this.OnCreateRoleSuccess);
                LoginManager.GetInstance().SendCreateRole();
            }
            else {
                this.OnCreateRoleSuccess();
            }
        }
        OnCreateRoleSuccess() {
            this.ChangeLoadingProgress(35);
            Laya.stage.once(RequestCMD.EnterGame.toString(), this, this.OnRqstRoleInfoSuccess);
            LoginManager.GetInstance().SendRqstRoleInfo();
        }
        OnRqstRoleInfoSuccess(data) {
            this.ChangeLoadingProgress(40);
            let respfully = ResponsePackage.RespFully.decode(data);
            DataManager.GetInstance().SetPlayerData(respfully);
            this.Preload2DRes();
        }
        Preload2DRes() {
            ResMananger.GetInstance().Preload2DRes(Laya.Handler.create(this, this.Preload3DRes));
        }
        Preload3DRes() {
            this.ChangeLoadingProgress(50);
            ResMananger.GetInstance().Preload3DRes(Laya.Handler.create(this, this.PreloadLobbyScene));
        }
        PreloadLobbyScene() {
            SceneManager.GetInstance().LoadScene3D(SceneType.LobbyScene, Laya.Handler.create(this, this.PreloadFGUIPackage));
        }
        PreloadFGUIPackage() {
            this.ChangeLoadingProgress(60);
            let preloadPackage = [
                "main_package",
                "common_icon_package",
                "common_component_package",
                "common_battle_package",
                "common_button_package",
                "common_bar_package",
            ];
            let onLoadFinish = () => {
                for (let index = 0; index < preloadPackage.length; index++) {
                    const element = preloadPackage[index];
                    FGUIManager.GetInstance().AddPackage(element);
                }
                this.ChangeLoadingProgress(90);
                this.InitFactory();
            };
            FGUIManager.Instance.LoadUIPackages(preloadPackage, onLoadFinish, () => { });
        }
        InitFactory() {
            BallFactory.GetInstance().Init();
            this.ChangeLoadingProgress(100);
            SceneManager.GetInstance().ChangeScene3D(SceneType.LobbyScene);
            FGUIManager.GetInstance().OpenPanel(CK_UIType.MainPanel, () => { }, true, MainPanelType.Lobby);
            FGUIManager.GetInstance().OpenPanel(CK_UIType.TopBarPanel, () => { }, false);
        }
        ChangeLoadingProgress(value, isTween = false) {
            let data = new EventProperty.LoadProgressProperty(value, isTween);
            Laya.stage.event(CK_EventCode.LoadingProgressChange, data);
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
    GameConfig.scaleMode = "noscale";
    GameConfig.screenMode = "horizontal";
    GameConfig.alignV = "top";
    GameConfig.alignH = "left";
    GameConfig.startScene = "StartScene.scene";
    GameConfig.sceneRoot = "";
    GameConfig.debug = false;
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
