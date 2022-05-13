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
        CK_EventCode["UpdateRoleInfo"] = "UpdateRoleInfo";
    })(CK_EventCode || (CK_EventCode = {}));

    var RequestCMD;
    (function (RequestCMD) {
        RequestCMD[RequestCMD["Verify"] = 201] = "Verify";
        RequestCMD[RequestCMD["CreateRole"] = 202] = "CreateRole";
        RequestCMD[RequestCMD["EnterGame"] = 203] = "EnterGame";
        RequestCMD[RequestCMD["PI"] = 205] = "PI";
        RequestCMD[RequestCMD["CheckIn"] = 206] = "CheckIn";
        RequestCMD[RequestCMD["ChangeImg"] = 211] = "ChangeImg";
        RequestCMD[RequestCMD["LevelUp"] = 701] = "LevelUp";
        RequestCMD[RequestCMD["AllotProperty"] = 702] = "AllotProperty";
        RequestCMD[RequestCMD["ChooseSpecialty"] = 703] = "ChooseSpecialty";
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
                [CK_UIType.BagPanel, new CK_UIConfig("bag_package", "bag_comp", false, false)],
                [CK_UIType.FGUITipWIndow, new CK_UIConfig("common_component_package", "common_popup_comp", false, true)],
                [CK_UIType.UpgradeWindow, new CK_UIConfig("main_package", "bred_upgrade_comp", false, true)],
                [CK_UIType.SpecialtyWindow, new CK_UIConfig("main_package", "bred_specialty_upgrade_comp", false, true)],
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
        CK_UIType[CK_UIType["BagPanel"] = 8] = "BagPanel";
        CK_UIType[CK_UIType["FGUITipWIndow"] = 9] = "FGUITipWIndow";
        CK_UIType[CK_UIType["UpgradeWindow"] = 10] = "UpgradeWindow";
        CK_UIType[CK_UIType["SpecialtyWindow"] = 11] = "SpecialtyWindow";
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
            this.GCKE = this.data.respRole.roleInfo.gcke;
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
        UpdatePlayerData(recvData) {
            this.UpdateBallData(recvData);
            this.UpdateRoleInfo(recvData);
            this.UpdateTeamInfo(recvData);
        }
        UpdateBallData(recvData) {
            if (recvData.respCk == null)
                return;
            if (recvData.respCk.opList == null)
                return;
            recvData.respCk.opList.forEach(element => {
                let isHave = false;
                this.BallInPackage.forEach((ball, idx) => {
                    if (element.id == ball.id) {
                        isHave = true;
                        this.BallInPackage[idx] = element;
                    }
                });
                if (!isHave)
                    this.BallInPackage.push(element);
            });
        }
        UpdateRoleInfo(recvData) {
            if (recvData.respRole == null)
                return;
            if (recvData.respRole.roleOp == null)
                return;
            if (recvData.respRole.roleOp.gckeOp != null && recvData.respRole.roleOp.gckeOp.value != null)
                this.GCKE = recvData.respRole.roleOp.gckeOp.value;
            Laya.stage.event(CK_EventCode.UpdateRoleInfo);
        }
        UpdateTeamInfo(recvData) {
            if (recvData.respTeam == null)
                return;
            if (recvData.respTeam.teamOp == null)
                return;
            recvData.respTeam.teamOp.forEach(teamNew => {
                this.teamList.forEach(teamOld => {
                    if (teamOld.id == teamNew.id) {
                        teamOld.ckId = teamNew.ckId;
                        teamOld.type = teamNew.type;
                    }
                });
            });
            this.UpdateNormalTeam(this.GetTeam(TeamType.NormalTeam));
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

    class BattleEntityFactory {
        constructor() {
            this.ifInit = false;
            this.config = new Map([
                [BattleEntityType.DeathEffect, "ck_death_effect.lh"],
                [BattleEntityType.AfterDeath, "ck_afterdeath.lh"],
                [BattleEntityType.Arrow, "ck_flyprop_arrow.lh"],
                [BattleEntityType.FireBall, "ck_flyprop_fireball.lh"],
            ]);
            this.prefabMap = new Map();
            this.activeEntity = new Array();
            this.entityCount = 0;
        }
        static GetInstance() {
            if (this.Instance == null) {
                this.Instance = new BattleEntityFactory();
            }
            return this.Instance;
        }
        Init(onComplete) {
            if (this.ifInit == false) {
                this.entityScene = new Laya.Scene();
                let progress = 0;
                let keys = this.config.keys();
                for (const key of keys) {
                    const element = this.config.get(key);
                    if (element != undefined || element != null) {
                        this.LoadPrefab(element, Laya.Handler.create(this, (result) => {
                            progress++;
                            this.prefabMap.set(key, result);
                            this.entityScene.addChild(result);
                            if (progress == this.config.size) {
                                this.ifInit = true;
                                onComplete === null || onComplete === void 0 ? void 0 : onComplete.run();
                            }
                        }));
                    }
                }
            }
            else {
                onComplete === null || onComplete === void 0 ? void 0 : onComplete.run();
            }
        }
        LoadPrefab(path, onComplete) {
            let wholePath = ResMananger.GetInstance().BasePrefabPath + path;
            ResMananger.GetInstance().Load3DRes(wholePath, onComplete);
        }
        Create(entityType, parent) {
            this.entityCount++;
            const entityName = this.config.get(entityType);
            let entityPrefab = Laya.Pool.getItemByCreateFun(entityName, () => {
                let model = this.prefabMap.get(entityType);
                let entity = Laya.Sprite3D.instantiate(model, parent);
                return entity;
            });
            let id = this.entityCount;
            let battleEntity = new BattleEntity(entityName, entityPrefab, id);
            this.activeEntity.push(battleEntity);
            return battleEntity;
        }
        Recover(id) {
            let suitIndex;
            for (let index = 0; index < this.activeEntity.length; index++) {
                const element = this.activeEntity[index];
                if (element.ID == id) {
                    suitIndex = index;
                    break;
                }
            }
            if (suitIndex != undefined) {
                let entity = this.activeEntity[suitIndex];
                entity.Recover();
                ArrayHelper.GetInstance().RemoveElementFromArray(this.activeEntity, entity);
            }
        }
        Clear() {
            for (let index = 0; index < this.activeEntity.length; index++) {
                let element = this.activeEntity[index];
                element.Entity.destroy();
                ArrayHelper.GetInstance().RemoveElementFromArray(this.activeEntity, element);
            }
            let keys = this.config.keys();
            for (const key of keys) {
                const element = this.config.get(key);
                if (element != undefined || element != null) {
                    Laya.Pool.clearBySign(element);
                }
            }
            this.activeEntity = new Array();
        }
    }
    class BattleEntity {
        constructor(sign, entity, id) {
            this.Sign = sign;
            this.Entity = entity;
            this.ID = id;
        }
        SetActive(active) {
            this.Entity.active = active;
        }
        SetPos(pos) {
            this.Entity.transform.position = pos;
        }
        Recover() {
            this.Entity.active = false;
            Laya.Pool.recover(this.Sign, this.Entity);
        }
        SetRotate(angle) {
            let rotation = new Laya.Vector3(0, angle, 0);
            this.Entity.transform.rotationEuler = rotation;
        }
        SetScale(scale) {
            this.Entity.transform.localScale = scale;
        }
    }
    var BattleEntityType;
    (function (BattleEntityType) {
        BattleEntityType[BattleEntityType["DeathEffect"] = 1] = "DeathEffect";
        BattleEntityType[BattleEntityType["Arrow"] = 2] = "Arrow";
        BattleEntityType[BattleEntityType["FireBall"] = 3] = "FireBall";
        BattleEntityType[BattleEntityType["AfterDeath"] = 4] = "AfterDeath";
    })(BattleEntityType || (BattleEntityType = {}));

    class BattleTools {
        static CalculateRotateWithFace(face, forward) {
            let direction = new Laya.Vector3(face.x, face.y, face.z);
            Laya.Vector3.normalize(direction, direction);
            let angel = Laya.Vector3.dot(forward, direction);
            let deltaAng = (Math.acos(angel) * 180) / Math.PI;
            const out = new Laya.Vector3();
            Laya.Vector3.cross(forward, direction, out);
            if (out.y != 0) {
                if (out.y > 0) {
                    deltaAng = -deltaAng;
                }
            }
            return deltaAng;
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
        constructor(content, camera) {
            this.currentPos = new Laya.Vector4(0, 0, 0, 0);
            this.content = content;
            this.camera = camera;
        }
        Show(data) {
            this.battlerData = data;
            this.component = fgui.UIPackage.createObject("battle_package", "battle_ck3d_comp").asCom;
            this.content.addChild(this.component);
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

    class BattleAnimFactory {
        constructor() {
            this.config = new Map([
                [BattleAnimType.FeHurtAnim, "battle_fe_hurt_anim"],
                [BattleAnimType.DragonHurtAnim, "battle_dragon_hurt_anim"],
                [BattleAnimType.WoodHurtAnim, "battle_wood_hurt_anim"],
                [BattleAnimType.StoneHurtAnim, "battle_stone_hurt_anim"],
                [BattleAnimType.BallDeadAnim, "battle_death_anim"],
            ]);
            this.activeAnims = new Array();
        }
        static GetInstance() {
            if (this.Instance == null) {
                this.Instance = new BattleAnimFactory();
            }
            return this.Instance;
        }
        Init(content, camera) {
            this.content = content;
            this.camera = camera;
        }
        Create(animType, target, onAnimFinish) {
            const componentName = this.config.get(animType);
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
                onAnimFinish === null || onAnimFinish === void 0 ? void 0 : onAnimFinish.run();
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
            let keys = this.config.keys();
            for (const key of keys) {
                const element = this.config.get(key);
                if (element != undefined || element != null) {
                    Laya.Pool.clearBySign(element);
                }
            }
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
    var BattleAnimType;
    (function (BattleAnimType) {
        BattleAnimType[BattleAnimType["FeHurtAnim"] = 1] = "FeHurtAnim";
        BattleAnimType[BattleAnimType["WoodHurtAnim"] = 3] = "WoodHurtAnim";
        BattleAnimType[BattleAnimType["DragonHurtAnim"] = 4] = "DragonHurtAnim";
        BattleAnimType[BattleAnimType["StoneHurtAnim"] = 2] = "StoneHurtAnim";
        BattleAnimType[BattleAnimType["BallDeadAnim"] = 5] = "BallDeadAnim";
    })(BattleAnimType || (BattleAnimType = {}));

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
            let keys = this.config.keys();
            for (const key of keys) {
                const element = this.config.get(key);
                if (element != undefined || element != null) {
                    Laya.Pool.clearBySign(element);
                }
            }
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
            this.onDeadAnimFinish = null;
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
            this.scene.BallLayer.addChild(this.ball);
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
            let direction = new Laya.Vector3();
            Laya.Vector3.subtract(face, this.lastPos, direction);
            let up = new Laya.Vector3(1, 0);
            let angle = BattleTools.CalculateRotateWithFace(direction, up);
            this.ui.RotateWeapon(angle);
        }
        ChangeHp(v) {
            this.ui.ChangeHp(v);
        }
        GetHurt(hitInfo) {
            BattleAnimFactory.GetInstance().Create(this.userData.battleCk.lineage, this.ball);
            HurtNumFactory.GetInstance().Create(hitInfo, this.ball);
        }
        Atk() {
            this.ui.PlayAtkAnim();
        }
        Died() {
            this.IsDied = true;
            let currentPos = this.ball.transform.localPosition;
            this.scene.CreateDeathEffect(new Laya.Vector3(currentPos.x, 3, currentPos.z), this.onDeadAnimFinish);
            this.Destroy();
        }
        SetOnDeadAnimFinish(handle) {
            this.onDeadAnimFinish = Laya.Handler.create(this, () => {
                handle();
            });
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
        SetFollowTarget(followTarget) {
            this.followTarget = followTarget;
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
            this.flyProps = new Map();
            this.Scene = scene;
            this.Init();
        }
        Init() {
            this.Camera = this.Scene.getChildByName("Main Camera");
            this.Light = this.Scene.getChildByName("Directional Light");
            this.BallLayer = this.Scene.getChildByName("BallLayer");
            this.UILayer = this.Scene.getChildByName("UILayer");
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
                    this.MainUser = battleBall;
                }
            }
            this.ChangeCameraFollow(this.MainUser.CkId);
        }
        GameStart() {
            FGUIManager.GetInstance().OpenPanel(CK_UIType.BattlePanel, () => {
                this.battlePanel = FGUIManager.GetInstance().GetPanel(CK_UIType.BattlePanel);
                this.endFrameId = this.battleFrames.length;
                for (let index = 0; index < this.balls.length; index++) {
                    let ball = this.balls[index];
                    ball.CreateUI();
                }
                this.FrameLogic();
            }, true, this.currentBattleData);
        }
        FrameLogic() {
            let frameData = this.battleFrames[this.currentFrameId];
            let entityFrameInfos = frameData.otherEntityFrameList;
            for (let index = 0; index < entityFrameInfos.length; index++) {
                const frameInfo = entityFrameInfos[index];
                if (frameInfo.isCreate) {
                    this.CreateFlyProp(frameInfo.id, frameInfo.type);
                    let prop = this.flyProps.get(frameInfo.id);
                    let pos = new Laya.Vector3(frameInfo.posXY.x / 1000, 0, frameInfo.posXY.y / 1000);
                    let face = new Laya.Vector3(frameInfo.faceXY.x / 1000, 0, frameInfo.faceXY.y / 1000);
                    let dir = new Laya.Vector3();
                    Laya.Vector3.subtract(face, pos, dir);
                    let angle = BattleTools.CalculateRotateWithFace(dir, new Laya.Vector3(0, 0, 1));
                    prop.SetRotate(angle);
                }
            }
            for (let index = 0; index < entityFrameInfos.length; index++) {
                const frameInfo = entityFrameInfos[index];
                let pos = new Laya.Vector3(frameInfo.posXY.x / 1000, 3, frameInfo.posXY.y / 1000);
                let prop = this.flyProps.get(frameInfo.id);
                prop.SetPos(pos);
            }
            for (let index = 0; index < entityFrameInfos.length; index++) {
                const frameInfo = entityFrameInfos[index];
                if (frameInfo.isDestroy) {
                    let prop = this.flyProps.get(frameInfo.id);
                    BattleEntityFactory.GetInstance().Recover(prop.ID);
                }
            }
            let ckframeInfos = frameData.ckFrameInfoList;
            for (let index = 0; index < ckframeInfos.length; index++) {
                const frameInfo = ckframeInfos[index];
                let battleBall = this.ckMap.get(frameInfo.id);
                if (frameInfo.hit != null) {
                    battleBall.GetHurt(frameInfo.hit);
                }
            }
            for (let index = 0; index < ckframeInfos.length; index++) {
                const frameInfo = ckframeInfos[index];
                let battleBall = this.ckMap.get(frameInfo.id);
                battleBall.ChangeHp(frameInfo.hp);
            }
            let isMainUserDied = false;
            for (let index = 0; index < ckframeInfos.length; index++) {
                const frameInfo = ckframeInfos[index];
                let battleBall = this.ckMap.get(frameInfo.id);
                if (frameInfo.isDead == true) {
                    if (this.battleType == BattleType.TeamBattle_3) {
                        let onDeadAnimFinish = () => {
                            let cameraTarget = null;
                            for (let index = 0; index < this.balls.length; index++) {
                                let element = this.balls[index];
                                if (element.Camp == this.MainUser.Camp) {
                                    if (element.IsDied == false) {
                                        cameraTarget = element;
                                        break;
                                    }
                                }
                            }
                            if (cameraTarget != null) {
                                this.ChangeCameraFollow(cameraTarget.CkId);
                            }
                        };
                        if (this.CameraFollow != null) {
                            if (battleBall.CkId == this.CameraFollow.CkId) {
                                this.CameraFollow.SetOnDeadAnimFinish(onDeadAnimFinish);
                                this.CameraFollow = null;
                            }
                        }
                    }
                    this.battlePanel.UserDied(battleBall.CkId);
                    battleBall.Died();
                    if (frameInfo.id == this.MainUser.CkId) {
                        isMainUserDied = true;
                    }
                }
            }
            if (isMainUserDied) {
                if (this.battleType == BattleType.SingleBattle_6) {
                    this.GameOver();
                    return;
                }
            }
            for (let index = 0; index < ckframeInfos.length; index++) {
                const frameInfo = ckframeInfos[index];
                let battleBall = this.ckMap.get(frameInfo.id);
                battleBall.Move(frameInfo.posXY.x / 1000, frameInfo.posXY.y / 1000);
                battleBall.FaceHandle(frameInfo.faceXY.x / 1000, frameInfo.faceXY.y / 1000);
            }
            if (this.CameraFollow != null) {
                this.cameraComp.Follow();
            }
            for (let index = 0; index < ckframeInfos.length; index++) {
                const frameInfo = ckframeInfos[index];
                let battleBall = this.ckMap.get(frameInfo.id);
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
        ChangeCameraFollow(ckId) {
            let battleBall = this.ckMap.get(ckId);
            this.CameraFollow = battleBall;
            this.cameraComp.SetFollowTarget(battleBall.GetBallGameObject());
        }
        GameOver() {
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
        }
        CreateDeathEffect(pos, onAnimFinish) {
            let effect = BattleEntityFactory.GetInstance().Create(BattleEntityType.DeathEffect, this.UILayer);
            effect.SetActive(true);
            effect.SetPos(pos);
            Laya.timer.once(490, this, () => {
                BattleEntityFactory.GetInstance().Recover(effect.ID);
                this.CreateAfterDeathEffect(pos);
                onAnimFinish === null || onAnimFinish === void 0 ? void 0 : onAnimFinish.run();
            });
        }
        CreateAfterDeathEffect(pos) {
            let effect = BattleEntityFactory.GetInstance().Create(BattleEntityType.AfterDeath, this.UILayer);
            effect.SetActive(true);
            let tempPos = new Laya.Vector3(pos.x, 0, pos.z);
            effect.SetPos(tempPos);
        }
        CreateFlyProp(id, propType) {
            let prop = BattleEntityFactory.GetInstance().Create(propType, this.UILayer);
            prop.SetActive(true);
            this.flyProps.set(id, prop);
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
                ["id_102000001", new Lang(102000001, "common")],
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
                ["id_10110600001", new Lang(10110600001, "slowest")],
                ["id_10110600002", new Lang(10110600002, "very slow")],
                ["id_10110600003", new Lang(10110600003, "slow")],
                ["id_10110600004", new Lang(10110600004, "slower")],
                ["id_10110600005", new Lang(10110600005, "medium")],
                ["id_10110600006", new Lang(10110600006, "faster")],
                ["id_10110600007", new Lang(10110600007, "fast")],
                ["id_10110600008", new Lang(10110600008, "very fast")],
                ["id_10110600009", new Lang(10110600009, "fastest")],
                ["id_402001011", new Lang(402001011, "Super attack")],
                ["id_402001021", new Lang(402001021, "Super attack")],
                ["id_402001031", new Lang(402001031, "Super attack")],
                ["id_402001041", new Lang(402001041, "Super attack")],
                ["id_402001051", new Lang(402001051, "Super attack")],
                ["id_402001061", new Lang(402001061, "Super attack")],
                ["id_402001071", new Lang(402001071, "Super attack")],
                ["id_402001081", new Lang(402001081, "Super attack")],
                ["id_402001091", new Lang(402001091, "Super attack")],
                ["id_402001101", new Lang(402001101, "Super attack")],
                ["id_402001111", new Lang(402001111, "Super attack")],
                ["id_402001121", new Lang(402001121, "Super attack")],
                ["id_402001131", new Lang(402001131, "Super attack")],
                ["id_402001141", new Lang(402001141, "Super attack")],
                ["id_402001151", new Lang(402001151, "Super attack")],
                ["id_402001161", new Lang(402001161, "Super attack")],
                ["id_402001171", new Lang(402001171, "Super attack")],
                ["id_402001181", new Lang(402001181, "Super attack")],
                ["id_402001191", new Lang(402001191, "Super attack")],
                ["id_402001201", new Lang(402001201, "Super attack")],
                ["id_402001211", new Lang(402001211, "Super attack")],
                ["id_402001221", new Lang(402001221, "Super attack")],
                ["id_402001231", new Lang(402001231, "Super attack")],
                ["id_402001241", new Lang(402001241, "Super attack")],
                ["id_402001251", new Lang(402001251, "Super attack")],
                ["id_402001261", new Lang(402001261, "Super attack")],
                ["id_402001271", new Lang(402001271, "Super attack")],
                ["id_402001281", new Lang(402001281, "Super attack")],
                ["id_402001291", new Lang(402001291, "Super attack")],
                ["id_402001301", new Lang(402001301, "Super attack")],
                ["id_402001311", new Lang(402001311, "Super attack")],
                ["id_402001321", new Lang(402001321, "Super attack")],
                ["id_402001331", new Lang(402001331, "Super attack")],
                ["id_402001341", new Lang(402001341, "Super attack")],
                ["id_402001351", new Lang(402001351, "Super attack")],
                ["id_402001361", new Lang(402001361, "Super attack")],
                ["id_402008011", new Lang(402008011, "Super attack")],
                ["id_402008021", new Lang(402008021, "Super attack")],
                ["id_402008031", new Lang(402008031, "Super attack")],
                ["id_402008041", new Lang(402008041, "Super attack")],
                ["id_402008051", new Lang(402008051, "Super attack")],
                ["id_402008061", new Lang(402008061, "Super attack")],
                ["id_402008071", new Lang(402008071, "Super attack")],
                ["id_402008081", new Lang(402008081, "Super attack")],
                ["id_402008091", new Lang(402008091, "Super attack")],
                ["id_402008101", new Lang(402008101, "Super attack")],
                ["id_402008111", new Lang(402008111, "Super attack")],
                ["id_402008121", new Lang(402008121, "Super attack")],
                ["id_402009011", new Lang(402009011, "Super attack")],
                ["id_402009021", new Lang(402009021, "Super attack")],
                ["id_402009031", new Lang(402009031, "Super attack")],
                ["id_402009041", new Lang(402009041, "Super attack")],
                ["id_402009051", new Lang(402009051, "Super attack")],
                ["id_402009061", new Lang(402009061, "Super attack")],
                ["id_402009071", new Lang(402009071, "Super attack")],
                ["id_402009081", new Lang(402009081, "Super attack")],
                ["id_402009091", new Lang(402009091, "Super attack")],
                ["id_402009101", new Lang(402009101, "Super attack")],
                ["id_402009111", new Lang(402009111, "Super attack")],
                ["id_402009121", new Lang(402009121, "Super attack")],
                ["id_402000011", new Lang(402000011, "Super attack")],
                ["id_402000021", new Lang(402000021, "Super attack")],
                ["id_402000031", new Lang(402000031, "Super attack")],
                ["id_402000041", new Lang(402000041, "Super attack")],
                ["id_402000051", new Lang(402000051, "Super attack")],
                ["id_402000061", new Lang(402000061, "Super attack")],
                ["id_402000071", new Lang(402000071, "Super attack")],
                ["id_402000081", new Lang(402000081, "Super attack")],
                ["id_402000091", new Lang(402000091, "Super attack")],
                ["id_402000101", new Lang(402000101, "Super attack")],
                ["id_402000111", new Lang(402000111, "Super attack")],
                ["id_402000121", new Lang(402000121, "Super attack")],
                ["id_402000131", new Lang(402000131, "Super attack")],
                ["id_402000141", new Lang(402000141, "Super attack")],
                ["id_402000151", new Lang(402000151, "Super attack")],
                ["id_402000161", new Lang(402000161, "Super attack")],
                ["id_402000171", new Lang(402000171, "Super attack")],
                ["id_402000181", new Lang(402000181, "Super attack")],
                ["id_402000191", new Lang(402000191, "Super attack")],
                ["id_402000201", new Lang(402000201, "Super attack")],
                ["id_402000211", new Lang(402000211, "Super attack")],
                ["id_402000221", new Lang(402000221, "Super attack")],
                ["id_402000231", new Lang(402000231, "Super attack")],
                ["id_402000241", new Lang(402000241, "Super attack")],
                ["id_402000251", new Lang(402000251, "Super attack")],
                ["id_402000261", new Lang(402000261, "Super attack")],
                ["id_402000271", new Lang(402000271, "Super attack")],
                ["id_402000281", new Lang(402000281, "Super attack")],
                ["id_402000291", new Lang(402000291, "Super attack")],
                ["id_402000301", new Lang(402000301, "Super attack")],
                ["id_402001012", new Lang(402001012, "Power+1")],
                ["id_402001022", new Lang(402001022, "Constitution+1")],
                ["id_402001032", new Lang(402001032, "Intelligence+1")],
                ["id_402001042", new Lang(402001042, "Power+2")],
                ["id_402001052", new Lang(402001052, "Constitution+2")],
                ["id_402001062", new Lang(402001062, "Intelligence+2")],
                ["id_402001072", new Lang(402001072, "Power+3")],
                ["id_402001082", new Lang(402001082, "Constitution+3")],
                ["id_402001092", new Lang(402001092, "Intelligence+3")],
                ["id_402001102", new Lang(402001102, "Power+4")],
                ["id_402001112", new Lang(402001112, "Constitution+4")],
                ["id_402001122", new Lang(402001122, "Intelligence+4")],
                ["id_402001132", new Lang(402001132, "Power+2")],
                ["id_402001142", new Lang(402001142, "Constitution+2")],
                ["id_402001152", new Lang(402001152, "Intelligence+2")],
                ["id_402001162", new Lang(402001162, "Power+3")],
                ["id_402001172", new Lang(402001172, "Constitution+3")],
                ["id_402001182", new Lang(402001182, "Intelligence+3")],
                ["id_402001192", new Lang(402001192, "Power+4")],
                ["id_402001202", new Lang(402001202, "Constitution+4")],
                ["id_402001212", new Lang(402001212, "Intelligence+4")],
                ["id_402001222", new Lang(402001222, "Power+6")],
                ["id_402001232", new Lang(402001232, "Constitution+6")],
                ["id_402001242", new Lang(402001242, "Intelligence+6")],
                ["id_402001252", new Lang(402001252, "Power+3")],
                ["id_402001262", new Lang(402001262, "Constitution+3")],
                ["id_402001272", new Lang(402001272, "Intelligence+3")],
                ["id_402001282", new Lang(402001282, "Power+5")],
                ["id_402001292", new Lang(402001292, "Constitution+5")],
                ["id_402001302", new Lang(402001302, "Intelligence+5")],
                ["id_402001312", new Lang(402001312, "Power+6")],
                ["id_402001322", new Lang(402001322, "Constitution+6")],
                ["id_402001332", new Lang(402001332, "Intelligence+6")],
                ["id_402001342", new Lang(402001342, "Power+8")],
                ["id_402001352", new Lang(402001352, "Constitution+8")],
                ["id_402001362", new Lang(402001362, "Intelligence+8")],
                ["id_402008012", new Lang(402008012, "Power+4")],
                ["id_402008022", new Lang(402008022, "Power+6")],
                ["id_402008032", new Lang(402008032, "Power+8")],
                ["id_402008042", new Lang(402008042, "Constitution+4")],
                ["id_402008052", new Lang(402008052, "Constitution+6")],
                ["id_402008062", new Lang(402008062, "Constitution+8")],
                ["id_402008072", new Lang(402008072, "Agility+4")],
                ["id_402008082", new Lang(402008082, "Agility+6")],
                ["id_402008092", new Lang(402008092, "Agility+8")],
                ["id_402008102", new Lang(402008102, "Intelligence+4")],
                ["id_402008112", new Lang(402008112, "Intelligence+6")],
                ["id_402008122", new Lang(402008122, "Intelligence+8")],
                ["id_402009012", new Lang(402009012, "Power+4")],
                ["id_402009022", new Lang(402009022, "Power+6")],
                ["id_402009032", new Lang(402009032, "Power+8")],
                ["id_402009042", new Lang(402009042, "Constitution+4")],
                ["id_402009052", new Lang(402009052, "Constitution+6")],
                ["id_402009062", new Lang(402009062, "Constitution+8")],
                ["id_402009072", new Lang(402009072, "Agility+4")],
                ["id_402009082", new Lang(402009082, "Agility+6")],
                ["id_402009092", new Lang(402009092, "Agility+8")],
                ["id_402009102", new Lang(402009102, "Intelligence+4")],
                ["id_402009112", new Lang(402009112, "Intelligence+6")],
                ["id_402009122", new Lang(402009122, "Intelligence+8")],
                ["id_402000012", new Lang(402000012, "Power+2")],
                ["id_402000022", new Lang(402000022, "Power+4")],
                ["id_402000032", new Lang(402000032, "Power+6")],
                ["id_402000042", new Lang(402000042, "Intelligence+2")],
                ["id_402000052", new Lang(402000052, "Intelligence+4")],
                ["id_402000062", new Lang(402000062, "Intelligence+6")],
                ["id_402000072", new Lang(402000072, "Dexterity+2")],
                ["id_402000082", new Lang(402000082, "Dexterity+4")],
                ["id_402000092", new Lang(402000092, "Dexterity+6")],
                ["id_402000102", new Lang(402000102, "Constitution+2")],
                ["id_402000112", new Lang(402000112, "Constitution+4")],
                ["id_402000122", new Lang(402000122, "Constitution+6")],
                ["id_402000132", new Lang(402000132, "Spirit+2")],
                ["id_402000142", new Lang(402000142, "SpiritAdd+4")],
                ["id_402000152", new Lang(402000152, "SpiritAdd+6")],
                ["id_402000162", new Lang(402000162, "Luck+2")],
                ["id_402000172", new Lang(402000172, "Luck+4")],
                ["id_402000182", new Lang(402000182, "LuckAdd+6")],
                ["id_402000192", new Lang(402000192, "Power+1")],
                ["id_402000202", new Lang(402000202, "Power+3")],
                ["id_402000212", new Lang(402000212, "Power+5")],
                ["id_402000222", new Lang(402000222, "Intelligence+1")],
                ["id_402000232", new Lang(402000232, "Intelligence+3")],
                ["id_402000242", new Lang(402000242, "Intelligence+5")],
                ["id_402000252", new Lang(402000252, "Dexterity+1")],
                ["id_402000262", new Lang(402000262, "Dexterity+3")],
                ["id_402000272", new Lang(402000272, "Dexterity+5")],
                ["id_402000282", new Lang(402000282, "Constitution+1")],
                ["id_402000292", new Lang(402000292, "Constitution+3")],
                ["id_402000302", new Lang(402000302, "Constitution+5")],
                ["id_10001", new Lang(10001, "Rare or higher quality can get this specialty")],
                ["id_10002", new Lang(10002, "Click button to choose specialty")],
                ["id_10003", new Lang(10003, "This specialty can be learned at level 11")],
                ["id_10004", new Lang(10004, "This specialty can be learned at level 21")],
                ["id_10005", new Lang(10005, "Assign points")],
                ["id_10006", new Lang(10006, "Choose specialty")],
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
            this.AddEvent();
            this.SetCKE();
            this.SetCKT();
            this.SetID();
            this.SetRankInfo();
        }
        Close() {
            this.SetVisible(false);
            this.RemoveEvent();
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
            this.ckeText.text = DataManager.GetInstance().PlayerData.GCKE.toLocaleString();
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
        AddEvent() {
            Laya.stage.on(CK_EventCode.UpdateRoleInfo, this, this.RefreshMoney);
        }
        RemoveEvent() {
            Laya.stage.off(CK_EventCode.UpdateRoleInfo, this, this.RefreshMoney);
        }
        RefreshMoney() {
            this.SetCKT();
            this.SetCKE();
        }
    }

    class UIBattleUserInfo {
        constructor(content) {
            this.content = content;
            this.InitComp();
        }
        InitComp() {
            let loadComp = this.content.getChild("battle_playerck_comp").asCom;
            this.ballLoader = loadComp.getChild("battle_ckball_loader").asLoader;
            this.beltLoader = loadComp.getChild("battle_ckbelt_loader").asLoader;
            this.hatLoader = loadComp.getChild("battle_ckclass_loader").asLoader;
            this.weaponLoader = loadComp.getChild("battle_ckweapon_loader").asLoader;
            this.nameText = this.content.getChild("battle_playerid_txt").asTextField;
        }
        Show(data) {
            this.userData = data;
            this.UserID = this.userData.roleBaseInfo.id;
            this.CKId = this.userData.battleCk.id;
            this.ChangeCareer(this.userData.battleCk.professionList[0]);
            this.ChangeBlood(this.userData.battleCk.lineage);
            this.ChangeQuality(this.userData.battleCk.quality);
            this.SetID(this.userData.roleBaseInfo.name);
        }
        ChangeCareer(career) {
            let careerConfig = CkWeaponConfig.GetInstance().GetData("1010000" + career);
            this.weaponLoader.url = careerConfig.weaponIcon;
            this.hatLoader.url = careerConfig.cap;
        }
        ChangeBlood(blood) {
            let bloodConfig = CkLineageConfig.GetInstance().GetData("1020000" + blood);
            this.ballLoader.url = bloodConfig.lineageIcon;
        }
        ChangeQuality(quality) {
            let qualityConfig = CkQualityConfig.GetInstance().GetData("1030000" + quality);
            this.beltLoader.url = qualityConfig.qualityIcon;
        }
        SetID(name) {
            this.nameText.text = name;
        }
        SetGray() {
            this.content.grayed = true;
        }
    }

    class FGUI_BattlePanel {
        constructor() {
            this.UIType = CK_UIType.BattlePanel;
            this.IsInitFinish = false;
            this.ID = 0;
            this.userInfoName = "battle_team_comp";
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
            this.userInfoCtrl.selectedIndex = this.battleData.battleType - 1;
            this.FreshUserInfo();
        }
        Close() {
            this.SetVisible(false);
            this.ID = 0;
            Laya.stage.event(CK_EventCode.PanelDestroy, this.ID);
        }
        Destroy() {
            var _a;
            BallMsgFactory.GetInstance().Clear();
            BattleAnimFactory.GetInstance().Clear();
            HurtNumFactory.GetInstance().Clear();
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
            this.hurtAnimLayer = this.Content.getChild("hurtanim_layer").asCom;
            this.hurtNumLayer = this.Content.getChild("hurtnum_layer").asCom;
            let userComp = this.Content.getChild("battle_playercard_team_comp").asCom;
            this.userInfos = new Array();
            for (let index = 0; index < 6; index++) {
                let name = this.userInfoName + (index + 1);
                let infoComp = userComp.getChild(name).asCom;
                let newUserInfo = new UIBattleUserInfo(infoComp);
                this.userInfos.push(newUserInfo);
            }
            this.userInfoCtrl = this.Content.getController("battle_battletype_comp");
        }
        InitFactory() {
            BallMsgFactory.GetInstance().Init(this.msgLayer, this.battleScene.Camera);
            BattleAnimFactory.GetInstance().Init(this.hurtAnimLayer, this.battleScene.Camera);
            HurtNumFactory.GetInstance().Init(this.hurtNumLayer, this.battleScene.Camera);
        }
        FreshUserInfo() {
            if (this.battleData.battleType == BattleType.SingleBattle_6) {
                let tempArray = new Array();
                let battlerList = this.battleData.battlerList;
                for (let index = 0; index < battlerList.length; index++) {
                    const element = battlerList[index];
                    if (element.roleBaseInfo.id == DataManager.GetInstance().PlayerData.ID) {
                        tempArray.push(element);
                    }
                }
                for (let index = 0; index < battlerList.length; index++) {
                    const element = battlerList[index];
                    if (element.roleBaseInfo.id != DataManager.GetInstance().PlayerData.ID) {
                        tempArray.push(element);
                    }
                }
                for (let index = 0; index < tempArray.length; index++) {
                    const element = tempArray[index];
                    let comp = this.userInfos[index];
                    comp.Show(element);
                }
            }
            else if (this.battleData.battleType == BattleType.TeamBattle_3) {
                for (let index = 0; index < this.userInfos.length; index++) {
                    const element = this.userInfos[index];
                    element.Show(this.battleData.battlerList[index]);
                }
            }
        }
        UserDied(ckId) {
            for (let index = 0; index < this.userInfos.length; index++) {
                const element = this.userInfos[index];
                if (element.CKId == ckId) {
                    element.SetGray();
                    return;
                }
            }
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
            this.anotherWeaponLoader = this.content.getChild("common_class_sway_loader").asLoader;
            this.ckIdText = this.content.getChild("common_balldnanumber_txt").asTextField;
            this.professionText = this.content.getChild("common_classname_comp").asCom.getChild("common_classname_txt").asTextField;
            this.levelText = this.content.getChild("common_balllvl_comp").asCom.getChild("common_lvlnumber_txt").asTextField;
            this.typeCtrl = this.content.getController("common_cardlevel_ctrl");
            this.stateCtrl = this.content.getController("bag_state_ctrl");
            this.weaponTrans = this.content.getTransition("common_weaponsway_anim");
            this.weaponTrans.stop();
        }
        Show(data, state = 0) {
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
            this.SetState(state);
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
            this.ckIdText.text = "ID:" + MathHelper.GetInstance().PrefixInteger(id, 10);
        }
        SetLevel(level) {
            this.levelText.text = level.toString();
        }
        SetState(state) {
            this.stateCtrl.selectedIndex = state;
            if (state == 1) {
                if (this.anotherWeaponLoader != undefined && this.anotherWeaponLoader.scaleX > 0) {
                    this.anotherWeaponLoader.url = this.professionLoader.url;
                    this.anotherWeaponLoader.setScale(-this.anotherWeaponLoader.scaleX, this.anotherWeaponLoader.scaleY);
                }
                if (!this.weaponTrans.playing)
                    this.weaponTrans.play();
            }
            else {
                if (this.weaponTrans.playing)
                    this.weaponTrans.stop();
            }
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
                this.LoadBattleEntity(fightResult);
            });
        }
        LoadBattleEntity(fightResult) {
            BattleEntityFactory.GetInstance().Init(Laya.Handler.create(this, () => {
                this.ChangeLoadingProgress(60);
                FGUIManager.GetInstance().AddPackage("battle_package");
                this.EnterScene(fightResult);
            }));
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
        SetEmpty() {
            this.isEmptyCtrl.selectedIndex = 1;
        }
    }

    class FGUI_BattleResultPanel {
        constructor() {
            this.UIType = CK_UIType.BattleResultPanel;
            this.IsInitFinish = false;
            this.ID = 0;
            this.resultItems = new Array();
            this.userDataMap = new Map();
            this.survivoRankItemMap = new Map([
                [1, 3],
                [2, 4],
                [3, 2],
                [4, 5],
                [5, 1],
                [6, 6],
            ]);
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
                this.SurvivoDataHandle();
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
                this.TeamDataHandle();
            }
        }
        TeamDataHandle() {
            let clearingList = this.battleData.fightClearing.clearingList;
            for (let index = 0; index < clearingList.length; index++) {
                const element = clearingList[index];
                let UIBattleResultItem = this.resultItems[index];
                let userData = this.userDataMap.get(element.rid);
                UIBattleResultItem.SetData(userData, element);
            }
        }
        SurvivoDataHandle() {
            let clearingList = this.battleData.fightClearing.clearingList;
            let userRank = 0;
            let currentUserId = DataManager.GetInstance().PlayerData.ID;
            for (let index = 0; index < clearingList.length; index++) {
                const element = clearingList[index];
                if (element.rid == currentUserId) {
                    userRank = element.rank;
                }
            }
            for (let index = 0; index < clearingList.length; index++) {
                const element = clearingList[index];
                let itemIndex = this.survivoRankItemMap.get(index + 1) - 1;
                let UIBattleResultItem = this.resultItems[itemIndex];
                if (index + 1 < userRank) {
                    UIBattleResultItem.SetEmpty();
                }
                else {
                    let userData = this.userDataMap.get(element.rid);
                    UIBattleResultItem.SetData(userData, element);
                }
            }
        }
        ReturnLobby() {
            FGUIManager.GetInstance().CloseAllPanel();
            FGUIManager.GetInstance().CloseAllWindow();
            SceneManager.GetInstance().DestroyCurrentScene();
            BattleEntityFactory.GetInstance().Clear();
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

    class FGUI_BagPanel {
        constructor() {
            this.UIType = CK_UIType.BagPanel;
            this.IsInitFinish = false;
            this.ID = 0;
            this.itemCount = 18;
            this.pageCount = 0;
            this.curPage = 0;
            this.inType = MainPanelType.Lobby;
        }
        Init() {
            if (this.IsInitFinish == false) {
                this.Config = CK_FGUIConfig.GetInstance().Config.get(this.UIType);
                this.Content = fgui.UIPackage.createObject(this.Config.PackageName, this.Config.ComponentName).asCom;
                fgui.GRoot.inst.addChild(this.Content);
                this.Content.makeFullScreen();
                this.SetVisible(false);
                this.IsInitFinish = true;
                this.InitComp();
                this.InitCompEvent();
            }
        }
        InitComp() {
            this.closeComp = this.Content.getChild("match_back_btn").asCom;
            this.itemList = this.Content.getChild("bag_ckcard_list").asList;
            this.leftBtn = this.Content.getChild("bag_left_btn").asButton;
            this.rightBtn = this.Content.getChild("bag_right_btn").asButton;
        }
        InitCompEvent() {
            this.closeComp.onClick(this, this.Close);
            this.leftBtn.onClick(this, this.OnClickLeftBtn);
            this.rightBtn.onClick(this, this.OnClickRightBtn);
            this.itemList.itemRenderer = this.SetBagItemListRenderFunc();
        }
        Show(args) {
            if (args != undefined && args != null)
                this.inType = args;
            this.SetVisible(true);
            this.AddEvent();
            this.SetData();
        }
        Close() {
            this.SetVisible(false);
            this.RemoveEvent();
            let mainPanel = FGUIManager.GetInstance().GetPanel(CK_UIType.MainPanel);
            if (mainPanel != null || mainPanel != undefined) {
                mainPanel.SetVisible(true);
                mainPanel.ChangePanel(this.inType);
            }
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
        SetData() {
            this.SetUIItemList();
        }
        SetUIItemList() {
            this.itemList.numItems = 0;
            this.itemCount = DataManager.GetInstance().PlayerData.BallInPackage.length;
            this.itemList.numItems = this.itemCount;
            this.pageCount = Math.ceil(this.itemCount / 8);
            for (let index = 0; index < this.pageCount; index++) {
                this.itemList.addChildAt(fgui.UIPackage.createObject("common_component_package", "common_empty_comp"), index * 10);
                if (index * 8 + 7 < this.itemCount) {
                    this.itemList.addChildAt(fgui.UIPackage.createObject("common_component_package", "common_empty_comp"), index * 10 + 9);
                }
            }
        }
        SetBagItemListRenderFunc() {
            let ballList = DataManager.GetInstance().PlayerData.BallInPackage;
            return Laya.Handler.create(this, (idx, obj) => {
                let card = new UIBallCard(obj, 2);
                let tempData = ballList[idx];
                let data = new ResponsePackage.RespCkCardInfo();
                let currentId = DataManager.GetInstance().PlayerData.NoramlaTeam.ckId;
                let state = 0;
                if (currentId == tempData.id)
                    state = 1;
                data.lineage = tempData.lineage;
                data.lv = tempData.level;
                data.professionList = tempData.professionList;
                data.quality = tempData.quality;
                data.seq = tempData.seq;
                card.Show(data, state);
                obj.onClick(this, function () {
                    this.SetVisible(false);
                    this.RemoveEvent();
                    let mainPanel = FGUIManager.GetInstance().GetPanel(CK_UIType.MainPanel);
                    if (mainPanel != null || mainPanel != undefined) {
                        mainPanel.SetVisible(true);
                        mainPanel.ChangePanel(MainPanelType.Bred, [tempData, CK_UIType.BagPanel]);
                    }
                });
            }, [], false);
        }
        OnClickLeftBtn() {
            this.curPage -= 1;
            if (this.curPage < 0)
                this.curPage = 0;
            this.itemList.scrollToView(this.curPage * 10, true);
        }
        OnClickRightBtn() {
            this.curPage += 1;
            if (this.curPage >= this.pageCount)
                this.curPage--;
            this.itemList.scrollToView(this.curPage * 10, true);
        }
        AddEvent() {
        }
        RemoveEvent() {
        }
    }

    class FGUI_TipWIndow extends fgui.Window {
        constructor() {
            super(...arguments);
            this.IsInitFinish = false;
            this.ID = 0;
            this.UIType = CK_UIType.FGUITipWIndow;
            this.funcConfirm = null;
            this.funcCancel = null;
        }
        Init() {
            if (this.IsInitFinish == false) {
                this.Config = CK_FGUIConfig.GetInstance().Config.get(this.UIType);
                this.Content = fgui.UIPackage.createObject(this.Config.PackageName, this.Config.ComponentName).asCom;
                this.contentPane = this.Content;
                this.center();
                this.modal = true;
                this.setPivot(0.5, 0.5);
                this.InitComp();
                this.BindEvent();
                this.HideBtns();
                this.IsInitFinish = true;
            }
        }
        doShowAnimation() {
            this.setScale(0.1, 0.1);
            this.onShown();
            fgui.GTween.to2(0.1, 0.1, 1, 1, 0.3)
                .setTarget(this, this.setScale)
                .setEase(fgui.EaseType.QuadOut);
        }
        doHideAnimation() {
            fgui.GTween.to2(1, 1, 0.1, 0.1, 0.3)
                .setTarget(this, this.setScale)
                .setEase(fgui.EaseType.QuadOut)
                .onComplete(this.hideImmediately, this);
        }
        onShown() {
            this.SetTitle();
            this.SetContext();
            this.SetFunction();
        }
        onHide() {
            this.ID = 0;
            Laya.stage.event(CK_EventCode.WindowClose);
        }
        onInit() {
            this.Init();
        }
        Show(args) {
            this.args = args;
            this.SetVisible(true);
            this.HideBtns();
            this.show();
        }
        Close() {
            this.hide();
        }
        Destroy() {
            this.dispose();
            this.ID = 0;
            this.IsInitFinish = false;
            Laya.stage.event(CK_EventCode.WindowDestroy, this.ID);
        }
        SetVisible(visible) {
            if (this.contentPane != null)
                this.contentPane.visible = visible;
        }
        InitComp() {
            this.title = this.contentPane.getChild("common_title_txt").asTextField;
            this.context = this.contentPane.getChild("common_text_txt").asTextField;
            this.confirmBtn = this.contentPane.getChild("common_confirm_btn").asButton;
            this.cancelBtn = this.contentPane.getChild("common_cancel_btn").asButton;
        }
        HideBtns() {
            if (this.confirmBtn != undefined)
                this.confirmBtn.visible = false;
            if (this.cancelBtn != undefined)
                this.cancelBtn.visible = false;
        }
        SetTitle() {
            if (this.title == undefined)
                return;
            let str = this.args[0];
            if (str == undefined)
                this.title.text = "...";
            else
                this.title.text = str;
        }
        SetContext() {
            if (this.context == undefined)
                return;
            let str = this.args[1];
            if (str == undefined)
                this.context.text = "...";
            else
                this.context.text = str;
        }
        SetFunction() {
            this.funcConfirm = this.args[2];
            this.funcCancel = this.args[3];
            this.confirmBtn.visible = this.funcConfirm != null;
            this.cancelBtn.visible = this.funcCancel != null;
        }
        BindEvent() {
            if (this.confirmBtn != null)
                this.confirmBtn.onClick(this, () => {
                    if (this.funcConfirm != null)
                        this.funcConfirm();
                    this.Close();
                });
            if (this.cancelBtn != null)
                this.cancelBtn.onClick(this, () => {
                    if (this.funcCancel != null)
                        this.funcCancel();
                    this.Close();
                });
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

    class FGUI_UpgradeWindow extends fgui.Window {
        constructor() {
            super(...arguments);
            this.IsInitFinish = false;
            this.ID = 0;
            this.UIType = CK_UIType.UpgradeWindow;
            this.rqstPropertyMap = new Map();
        }
        Init() {
            if (this.IsInitFinish == false) {
                this.Config = CK_FGUIConfig.GetInstance().Config.get(this.UIType);
                this.Content = fgui.UIPackage.createObject(this.Config.PackageName, this.Config.ComponentName).asCom;
                this.contentPane = this.Content;
                this.center();
                this.modal = true;
                this.setPivot(0.5, 0.5);
                this.InitComp();
                this.BindEvent();
                this.IsInitFinish = true;
            }
        }
        doShowAnimation() {
            this.onShown();
            this.setScale(0.1, 0.1);
            fgui.GTween.to2(0.1, 0.1, 1, 1, 0.3)
                .setTarget(this, this.setScale)
                .setEase(fgui.EaseType.QuadOut);
        }
        doHideAnimation() {
            fgui.GTween.to2(1, 1, 0.1, 0.1, 0.3)
                .setTarget(this, this.setScale)
                .setEase(fgui.EaseType.QuadOut)
                .onComplete(this.hideImmediately, this);
        }
        onShown() {
            this.InitData();
            this.InitWindow();
        }
        onHide() {
            this.ID = 0;
            Laya.stage.event(CK_EventCode.WindowClose);
        }
        onInit() {
            this.Init();
        }
        Show(args) {
            this.ckInfo = args;
            this.SetVisible(true);
            this.show();
        }
        Close() {
            this.hide();
        }
        Destroy() {
            this.dispose();
            this.ID = 0;
            this.IsInitFinish = false;
            Laya.stage.event(CK_EventCode.WindowDestroy, this.ID);
        }
        SetVisible(visible) {
            if (this.contentPane != null)
                this.contentPane.visible = visible;
        }
        InitComp() {
            this.uiTextLevel = this.Content.getChild("bred_level_txt").asTextField;
            let comptop = this.Content.getChild("bred_status3_upgrade_comp").asCom;
            this.uiTextStr = comptop.getChild("bred_status1_comp").asCom.getChild("n13").asTextField;
            this.uiBtnStr = comptop.getChild("bred_status1_comp").asCom.getChild("n14").asButton;
            this.uiLoaderStr = comptop.getChild("bred_status1_comp").asCom.getChild("n22").asLoader;
            this.uiTextInt = comptop.getChild("bred_status2_comp").asCom.getChild("n13").asTextField;
            this.uiBtnInt = comptop.getChild("bred_status2_comp").asCom.getChild("n14").asButton;
            this.uiLoaderInt = comptop.getChild("bred_status2_comp").asCom.getChild("n22").asLoader;
            this.uiTextDex = comptop.getChild("bred_status3_comp").asCom.getChild("n13").asTextField;
            this.uiBtnDex = comptop.getChild("bred_status3_comp").asCom.getChild("n14").asButton;
            this.uiLoaderDex = comptop.getChild("bred_status3_comp").asCom.getChild("n22").asLoader;
            let compdown = this.Content.getChild("bred_status6_upgrade_comp").asCom;
            this.uiTextCon = compdown.getChild("bred_status1_comp").asCom.getChild("n13").asTextField;
            this.uiBtnCon = compdown.getChild("bred_status1_comp").asCom.getChild("n14").asButton;
            this.uiLoaderCon = compdown.getChild("bred_status1_comp").asCom.getChild("n22").asLoader;
            this.uiTextSpi = compdown.getChild("bred_status2_comp").asCom.getChild("n13").asTextField;
            this.uiBtnSpi = compdown.getChild("bred_status2_comp").asCom.getChild("n14").asButton;
            this.uiLoaderSpi = compdown.getChild("bred_status2_comp").asCom.getChild("n22").asLoader;
            this.uiTextLuk = compdown.getChild("bred_status3_comp").asCom.getChild("n13").asTextField;
            this.uiBtnLuk = compdown.getChild("bred_status3_comp").asCom.getChild("n14").asButton;
            this.uiLoaderLuk = compdown.getChild("bred_status3_comp").asCom.getChild("n22").asLoader;
            this.uiTextRemain = this.Content.getChild("bred_pointnum_txt").asTextField;
            this.uiBtnConfirm = this.Content.getChild("bred_confirm_btn").asButton;
            this.uiCompCloseArea = this.Content.getChild("bred_mask_grp").asCom;
        }
        BindEvent() {
            if (this.uiBtnStr != null)
                this.uiBtnStr.onClick(this, this.OnClickStrBtn);
            if (this.uiBtnInt != null)
                this.uiBtnInt.onClick(this, this.OnClickIntBtn);
            if (this.uiBtnDex != null)
                this.uiBtnDex.onClick(this, this.OnClickDexBtn);
            if (this.uiBtnCon != null)
                this.uiBtnCon.onClick(this, this.OnClickConBtn);
            if (this.uiBtnSpi != null)
                this.uiBtnSpi.onClick(this, this.OnClickSpiBtn);
            if (this.uiBtnLuk != null)
                this.uiBtnLuk.onClick(this, this.OnClickLukBtn);
            if (this.uiBtnConfirm != null)
                this.uiBtnConfirm.onClick(this, this.OnClickConfirm);
            if (this.uiCompCloseArea != null)
                this.uiCompCloseArea.onClick(this, this.Close);
        }
        InitData() {
            this.rqstPropertyMap.clear();
            for (let i = 1; i <= 6; i++)
                this.rqstPropertyMap.set(i.toString(), 0);
        }
        InitWindow() {
            this.SetLevel();
            this.SetStr();
            this.SetInt();
            this.SetDex();
            this.SetCon();
            this.SetSpi();
            this.SetLuk();
            this.SetRemain();
        }
        SetLevel() {
            if (this.uiTextLevel == null)
                return;
            this.uiTextLevel.text = "Lv0";
            if (this.ckInfo == null)
                return;
            this.uiTextLevel.text = "Lv" + this.ckInfo.level.toString();
        }
        SetStr() {
            if (this.uiLoaderStr != null)
                this.uiLoaderStr.url = "ui://4kxumucabhs61";
            if (this.uiTextStr != null) {
                this.uiTextStr.text = "0";
                if (this.ckInfo != null)
                    this.uiTextStr.text = this.ckInfo.strength.toString();
            }
        }
        SetInt() {
            if (this.uiLoaderInt != null)
                this.uiLoaderInt.url = "ui://4kxumucabhs62";
            if (this.uiTextInt != null) {
                this.uiTextInt.text = "0";
                if (this.ckInfo != null)
                    this.uiTextInt.text = this.ckInfo.wisdom.toString();
            }
        }
        SetDex() {
            if (this.uiLoaderDex != null)
                this.uiLoaderDex.url = "ui://4kxumucabhs63";
            if (this.uiTextDex != null) {
                this.uiTextDex.text = "0";
                if (this.ckInfo != null)
                    this.uiTextDex.text = this.ckInfo.agile.toString();
            }
        }
        SetCon() {
            if (this.uiLoaderCon != null)
                this.uiLoaderCon.url = "ui://4kxumucax6u0ro";
            if (this.uiTextCon != null) {
                this.uiTextCon.text = "0";
                if (this.ckInfo != null)
                    this.uiTextCon.text = this.ckInfo.health.toString();
            }
        }
        SetSpi() {
            if (this.uiLoaderSpi != null)
                this.uiLoaderSpi.url = "ui://4kxumucabhs65";
            if (this.uiTextSpi != null) {
                this.uiTextSpi.text = "0";
                if (this.ckInfo != null)
                    this.uiTextSpi.text = this.ckInfo.spirit.toString();
            }
        }
        SetLuk() {
            if (this.uiLoaderLuk != null)
                this.uiLoaderLuk.url = "ui://4kxumucabhs61";
            if (this.uiTextLuk != null) {
                this.uiTextLuk.text = "0";
                if (this.ckInfo != null)
                    this.uiTextLuk.text = this.ckInfo.luck.toString();
            }
        }
        SetRemain() {
            if (this.uiTextRemain != null) {
                this.uiTextRemain.text = "0";
                if (this.ckInfo != null) {
                    this.uiTextRemain.text = this.ckInfo.propertyNum.toString();
                }
            }
        }
        IsRemainEnough() {
            let remain = 0;
            if (this.uiTextRemain != null)
                remain = parseInt(this.uiTextRemain.text);
            return remain > 0;
        }
        ReduceRemain() {
            if (this.uiTextRemain == null)
                return;
            let remain = parseInt(this.uiTextRemain.text);
            remain -= 1;
            this.uiTextRemain.text = remain.toString();
        }
        UpValue(uiText) {
            let value = parseInt(uiText.text);
            value++;
            uiText.text = value.toString();
        }
        OnClickStrBtn() {
            if (!this.IsRemainEnough())
                return;
            this.UpValue(this.uiTextStr);
            this.ReduceRemain();
            this.rqstPropertyMap.set("1", this.rqstPropertyMap.get("1") + 1);
        }
        OnClickIntBtn() {
            if (!this.IsRemainEnough())
                return;
            this.UpValue(this.uiTextInt);
            this.ReduceRemain();
            this.rqstPropertyMap.set("2", this.rqstPropertyMap.get("2") + 1);
        }
        OnClickDexBtn() {
            if (!this.IsRemainEnough())
                return;
            this.UpValue(this.uiTextDex);
            this.ReduceRemain();
            this.rqstPropertyMap.set("3", this.rqstPropertyMap.get("3") + 1);
        }
        OnClickConBtn() {
            if (!this.IsRemainEnough())
                return;
            this.UpValue(this.uiTextCon);
            this.ReduceRemain();
            this.rqstPropertyMap.set("4", this.rqstPropertyMap.get("4") + 1);
        }
        OnClickSpiBtn() {
            if (!this.IsRemainEnough())
                return;
            this.UpValue(this.uiTextSpi);
            this.ReduceRemain();
            this.rqstPropertyMap.set("5", this.rqstPropertyMap.get("5") + 1);
        }
        OnClickLukBtn() {
            if (!this.IsRemainEnough())
                return;
            this.UpValue(this.uiTextLuk);
            this.ReduceRemain();
            this.rqstPropertyMap.set("6", this.rqstPropertyMap.get("6") + 1);
        }
        OnClickConfirm() {
            if (this.IsRemainEnough())
                return;
            this.RqstSetProperty();
        }
        RqstSetProperty() {
            let rqstData = RequestPackage.RqstAllotProperty.create();
            rqstData.ckId = this.ckInfo.id;
            rqstData.allotMap = {
                "1": this.rqstPropertyMap.get("1"),
                "2": this.rqstPropertyMap.get("2"),
                "3": this.rqstPropertyMap.get("3"),
                "4": this.rqstPropertyMap.get("4"),
                "5": this.rqstPropertyMap.get("5"),
                "6": this.rqstPropertyMap.get("6")
            };
            let buf = RequestPackage.RqstAllotProperty.encode(rqstData).finish();
            SocketClient.GetInstance().SendBizMsg(RequestCMD.AllotProperty, buf);
            this.Close();
        }
    }

    class CkSpecialtyConfig {
        constructor() {
            this.Data = new Map([
                ["id_40200101", new CkSpecialty(40200101, 402001011, 102000001, 402001012, "ui://4kxumucax6u0pz", 1)],
                ["id_40200102", new CkSpecialty(40200102, 402001021, 102000001, 402001022, "ui://4kxumucax6u0q0", 1)],
                ["id_40200103", new CkSpecialty(40200103, 402001031, 102000001, 402001032, "ui://4kxumucax6u0q1", 1)],
                ["id_40200104", new CkSpecialty(40200104, 402001041, 102000001, 402001042, "ui://4kxumucax6u0pz", 2)],
                ["id_40200105", new CkSpecialty(40200105, 402001051, 102000001, 402001052, "ui://4kxumucax6u0q0", 2)],
                ["id_40200106", new CkSpecialty(40200106, 402001061, 102000001, 402001062, "ui://4kxumucax6u0q1", 2)],
                ["id_40200107", new CkSpecialty(40200107, 402001071, 102000001, 402001072, "ui://4kxumucax6u0pz", 3)],
                ["id_40200108", new CkSpecialty(40200108, 402001081, 102000001, 402001082, "ui://4kxumucax6u0q0", 3)],
                ["id_40200109", new CkSpecialty(40200109, 402001091, 102000001, 402001092, "ui://4kxumucax6u0q1", 3)],
                ["id_40200110", new CkSpecialty(40200110, 402001101, 102000001, 402001102, "ui://4kxumucax6u0pz", 4)],
                ["id_40200111", new CkSpecialty(40200111, 402001111, 102000001, 402001112, "ui://4kxumucax6u0q0", 4)],
                ["id_40200112", new CkSpecialty(40200112, 402001121, 102000001, 402001122, "ui://4kxumucax6u0q1", 4)],
                ["id_40200113", new CkSpecialty(40200113, 402001131, 102000001, 402001132, "ui://4kxumucax6u0pz", 1)],
                ["id_40200114", new CkSpecialty(40200114, 402001141, 102000001, 402001142, "ui://4kxumucax6u0q0", 1)],
                ["id_40200115", new CkSpecialty(40200115, 402001151, 102000001, 402001152, "ui://4kxumucax6u0q1", 1)],
                ["id_40200116", new CkSpecialty(40200116, 402001161, 102000001, 402001162, "ui://4kxumucax6u0pz", 2)],
                ["id_40200117", new CkSpecialty(40200117, 402001171, 102000001, 402001172, "ui://4kxumucax6u0q0", 2)],
                ["id_40200118", new CkSpecialty(40200118, 402001181, 102000001, 402001182, "ui://4kxumucax6u0q1", 2)],
                ["id_40200119", new CkSpecialty(40200119, 402001191, 102000001, 402001192, "ui://4kxumucax6u0pz", 3)],
                ["id_40200120", new CkSpecialty(40200120, 402001201, 102000001, 402001202, "ui://4kxumucax6u0q0", 3)],
                ["id_40200121", new CkSpecialty(40200121, 402001211, 102000001, 402001212, "ui://4kxumucax6u0q1", 3)],
                ["id_40200122", new CkSpecialty(40200122, 402001221, 102000001, 402001222, "ui://4kxumucax6u0pz", 4)],
                ["id_40200123", new CkSpecialty(40200123, 402001231, 102000001, 402001232, "ui://4kxumucax6u0q0", 4)],
                ["id_40200124", new CkSpecialty(40200124, 402001241, 102000001, 402001242, "ui://4kxumucax6u0q1", 4)],
                ["id_40200125", new CkSpecialty(40200125, 402001251, 102000001, 402001252, "ui://4kxumucax6u0pz", 1)],
                ["id_40200126", new CkSpecialty(40200126, 402001261, 102000001, 402001262, "ui://4kxumucax6u0q0", 1)],
                ["id_40200127", new CkSpecialty(40200127, 402001271, 102000001, 402001272, "ui://4kxumucax6u0q1", 1)],
                ["id_40200128", new CkSpecialty(40200128, 402001281, 102000001, 402001282, "ui://4kxumucax6u0pz", 2)],
                ["id_40200129", new CkSpecialty(40200129, 402001291, 102000001, 402001292, "ui://4kxumucax6u0q0", 2)],
                ["id_40200130", new CkSpecialty(40200130, 402001301, 102000001, 402001302, "ui://4kxumucax6u0q1", 2)],
                ["id_40200131", new CkSpecialty(40200131, 402001311, 102000001, 402001312, "ui://4kxumucax6u0pz", 3)],
                ["id_40200132", new CkSpecialty(40200132, 402001321, 102000001, 402001322, "ui://4kxumucax6u0q0", 3)],
                ["id_40200133", new CkSpecialty(40200133, 402001331, 102000001, 402001332, "ui://4kxumucax6u0q1", 3)],
                ["id_40200134", new CkSpecialty(40200134, 402001341, 102000001, 402001342, "ui://4kxumucax6u0pz", 4)],
                ["id_40200135", new CkSpecialty(40200135, 402001351, 102000001, 402001352, "ui://4kxumucax6u0q0", 4)],
                ["id_40200136", new CkSpecialty(40200136, 402001361, 102000001, 402001362, "ui://4kxumucax6u0q1", 4)],
                ["id_40200801", new CkSpecialty(40200801, 402008011, 102000001, 402008012, "ui://4kxumucax6u0pz", 0)],
                ["id_40200802", new CkSpecialty(40200802, 402008021, 102000001, 402008022, "ui://4kxumucax6u0q0", 0)],
                ["id_40200803", new CkSpecialty(40200803, 402008031, 102000001, 402008032, "ui://4kxumucax6u0q1", 0)],
                ["id_40200804", new CkSpecialty(40200804, 402008041, 102000001, 402008042, "ui://4kxumucax6u0pz", 0)],
                ["id_40200805", new CkSpecialty(40200805, 402008051, 102000001, 402008052, "ui://4kxumucax6u0q0", 0)],
                ["id_40200806", new CkSpecialty(40200806, 402008061, 102000001, 402008062, "ui://4kxumucax6u0q1", 0)],
                ["id_40200807", new CkSpecialty(40200807, 402008071, 102000001, 402008072, "ui://4kxumucax6u0pz", 0)],
                ["id_40200808", new CkSpecialty(40200808, 402008081, 102000001, 402008082, "ui://4kxumucax6u0q0", 0)],
                ["id_40200809", new CkSpecialty(40200809, 402008091, 102000001, 402008092, "ui://4kxumucax6u0q1", 0)],
                ["id_40200810", new CkSpecialty(40200810, 402008101, 102000001, 402008102, "ui://4kxumucax6u0pz", 0)],
                ["id_40200811", new CkSpecialty(40200811, 402008111, 102000001, 402008112, "ui://4kxumucax6u0q0", 0)],
                ["id_40200812", new CkSpecialty(40200812, 402008121, 102000001, 402008122, "ui://4kxumucax6u0q1", 0)],
                ["id_40200901", new CkSpecialty(40200901, 402009011, 102000011, 402009012, "ui://4kxumucax6u0pz", 0)],
                ["id_40200902", new CkSpecialty(40200902, 402009021, 102000011, 402009022, "ui://4kxumucax6u0q0", 0)],
                ["id_40200903", new CkSpecialty(40200903, 402009031, 102000011, 402009032, "ui://4kxumucax6u0q1", 0)],
                ["id_40200904", new CkSpecialty(40200904, 402009041, 102000021, 402009042, "ui://4kxumucax6u0pz", 0)],
                ["id_40200905", new CkSpecialty(40200905, 402009051, 102000021, 402009052, "ui://4kxumucax6u0q0", 0)],
                ["id_40200906", new CkSpecialty(40200906, 402009061, 102000021, 402009062, "ui://4kxumucax6u0q1", 0)],
                ["id_40200907", new CkSpecialty(40200907, 402009071, 102000031, 402009072, "ui://4kxumucax6u0pz", 0)],
                ["id_40200908", new CkSpecialty(40200908, 402009081, 102000031, 402009082, "ui://4kxumucax6u0q0", 0)],
                ["id_40200909", new CkSpecialty(40200909, 402009091, 102000031, 402009092, "ui://4kxumucax6u0q1", 0)],
                ["id_40200910", new CkSpecialty(40200910, 402009101, 102000041, 402009102, "ui://4kxumucax6u0pz", 0)],
                ["id_40200911", new CkSpecialty(40200911, 402009111, 102000041, 402009112, "ui://4kxumucax6u0q0", 0)],
                ["id_40200912", new CkSpecialty(40200912, 402009121, 102000041, 402009122, "ui://4kxumucax6u0q1", 0)],
                ["id_40200001", new CkSpecialty(40200001, 402000011, 102000011, 402000012, "ui://4kxumucax6u0q1", 2)],
                ["id_40200002", new CkSpecialty(40200002, 402000021, 102000011, 402000022, "ui://4kxumucax6u0pz", 3)],
                ["id_40200003", new CkSpecialty(40200003, 402000031, 102000011, 402000032, "ui://4kxumucax6u0q0", 1)],
                ["id_40200004", new CkSpecialty(40200004, 402000041, 102000011, 402000042, "ui://4kxumucax6u0q1", 4)],
                ["id_40200005", new CkSpecialty(40200005, 402000051, 102000011, 402000052, "ui://4kxumucax6u0pz", 2)],
                ["id_40200006", new CkSpecialty(40200006, 402000061, 102000011, 402000062, "ui://4kxumucax6u0q0", 3)],
                ["id_40200007", new CkSpecialty(40200007, 402000071, 102000011, 402000072, "ui://4kxumucax6u0q1", 1)],
                ["id_40200008", new CkSpecialty(40200008, 402000081, 102000011, 402000082, "ui://4kxumucax6u0q1", 4)],
                ["id_40200009", new CkSpecialty(40200009, 402000091, 102000011, 402000092, "ui://4kxumucax6u0pz", 2)],
                ["id_40200010", new CkSpecialty(40200010, 402000101, 102000021, 402000102, "ui://4kxumucax6u0q0", 3)],
                ["id_40200011", new CkSpecialty(40200011, 402000111, 102000021, 402000112, "ui://4kxumucax6u0q1", 1)],
                ["id_40200012", new CkSpecialty(40200012, 402000121, 102000021, 402000122, "ui://4kxumucax6u0pz", 4)],
                ["id_40200013", new CkSpecialty(40200013, 402000131, 102000021, 402000132, "ui://4kxumucax6u0q0", 2)],
                ["id_40200014", new CkSpecialty(40200014, 402000141, 102000021, 402000142, "ui://4kxumucax6u0q1", 3)],
                ["id_40200015", new CkSpecialty(40200015, 402000151, 102000021, 402000152, "ui://4kxumucax6u0q1", 1)],
                ["id_40200016", new CkSpecialty(40200016, 402000161, 102000021, 402000162, "ui://4kxumucax6u0pz", 4)],
                ["id_40200017", new CkSpecialty(40200017, 402000171, 102000021, 402000172, "ui://4kxumucax6u0q0", 2)],
                ["id_40200018", new CkSpecialty(40200018, 402000181, 102000021, 402000182, "ui://4kxumucax6u0q1", 3)],
                ["id_40200019", new CkSpecialty(40200019, 402000191, 102000021, 402000192, "ui://4kxumucax6u0pz", 1)],
                ["id_40200020", new CkSpecialty(40200020, 402000201, 102000021, 402000202, "ui://4kxumucax6u0q0", 4)],
                ["id_40200021", new CkSpecialty(40200021, 402000211, 102000021, 402000212, "ui://4kxumucax6u0q1", 2)],
                ["id_40200022", new CkSpecialty(40200022, 402000221, 102000021, 402000222, "ui://4kxumucax6u0q1", 3)],
                ["id_40200023", new CkSpecialty(40200023, 402000231, 102000031, 402000232, "ui://4kxumucax6u0pz", 1)],
                ["id_40200024", new CkSpecialty(40200024, 402000241, 102000031, 402000242, "ui://4kxumucax6u0q0", 4)],
                ["id_40200025", new CkSpecialty(40200025, 402000251, 102000031, 402000252, "ui://4kxumucax6u0q1", 2)],
                ["id_40200026", new CkSpecialty(40200026, 402000261, 102000031, 402000262, "ui://4kxumucax6u0pz", 3)],
                ["id_40200027", new CkSpecialty(40200027, 402000271, 102000031, 402000272, "ui://4kxumucax6u0q0", 1)],
                ["id_40200028", new CkSpecialty(40200028, 402000281, 102000031, 402000282, "ui://4kxumucax6u0q1", 4)],
                ["id_40200029", new CkSpecialty(40200029, 402000291, 102000031, 402000292, "ui://4kxumucax6u0q1", 2)],
                ["id_40200030", new CkSpecialty(40200030, 402000301, 102000041, 402000302, "ui://4kxumucax6u0pz", 3)],
            ]);
        }
        static GetInstance() {
            if (this.Instance == null) {
                this.Instance = new CkSpecialtyConfig();
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
    class CkSpecialty {
        constructor(id, specialtyLang, specialtyTypeLang, specialtyDescLang, icon, quality) {
            this.id = id;
            this.specialtyLang = specialtyLang;
            this.specialtyTypeLang = specialtyTypeLang;
            this.specialtyDescLang = specialtyDescLang;
            this.icon = icon;
            this.quality = quality;
        }
    }

    class UISpecialtyItem {
        constructor(content) {
            this.Content = content;
            this.Init();
            this.BindEvent();
        }
        Init() {
            this.uiLoaderSpecialty = this.Content.getChild("bred_spcicon_loader").asLoader;
            this.uiTextName = this.Content.getChild("bred_spcname_txt").asTextField;
            this.uiTextType = this.Content.getChild("bred_spctype_txt").asTextField;
            this.uiTextDes = this.Content.getChild("bred_spcdesc_txt").asTextField;
            this.uiImgSelection = this.Content.getChild("n22").asImage;
        }
        BindEvent() {
        }
        Show(args) {
            if (args != null)
                this.specialData = args;
            if (this.Content != null)
                this.Content.visible = true;
            if (this.uiLoaderSpecialty != null && this.specialData != null)
                this.uiLoaderSpecialty.url = this.specialData.icon;
            if (this.uiTextName != null && this.specialData != null)
                this.uiTextName.text = LangConfig.GetInstance().GetData(this.specialData.specialtyLang.toString()).text;
            if (this.uiTextType != null && this.specialData != null)
                this.uiTextType.text = LangConfig.GetInstance().GetData(this.specialData.specialtyTypeLang.toString()).text;
            if (this.uiTextDes != null && this.specialData != null)
                this.uiTextDes.text = LangConfig.GetInstance().GetData(this.specialData.specialtyDescLang.toString()).text;
            this.ActiveSelection(false);
        }
        Hide() {
            if (this.Content != null) {
                this.Content.visible = false;
                this.Content.dispose();
            }
        }
        ActiveSelection(active) {
            if (this.uiImgSelection != null)
                this.uiImgSelection.visible = active;
        }
    }

    class FGUI_SpecialtyWindow extends fgui.Window {
        constructor() {
            super(...arguments);
            this.IsInitFinish = false;
            this.ID = 0;
            this.UIType = CK_UIType.SpecialtyWindow;
            this.specialtyList = new Array();
            this.specialtyDataList = new Array();
            this.lastSelectIdx = null;
        }
        Init() {
            if (this.IsInitFinish == false) {
                this.Config = CK_FGUIConfig.GetInstance().Config.get(this.UIType);
                this.Content = fgui.UIPackage.createObject(this.Config.PackageName, this.Config.ComponentName).asCom;
                this.contentPane = this.Content;
                this.center();
                this.modal = true;
                this.setPivot(0.5, 0.5);
                this.InitComp();
                this.BindEvent();
                this.IsInitFinish = true;
            }
        }
        doShowAnimation() {
            this.InitWindow();
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
            if (args != null)
                this.ckInfo = args;
            this.SetVisible(true);
            this.show();
        }
        Close() {
            this.hide();
            Laya.stage.event(CK_EventCode.WindowClose);
        }
        Destroy() {
            this.dispose();
            this.ID = 0;
            this.IsInitFinish = false;
            Laya.stage.event(CK_EventCode.WindowDestroy, this.ID);
        }
        SetVisible(visible) {
            if (this.contentPane != null)
                this.contentPane.visible = visible;
        }
        InitComp() {
            this.uiListSpecialty = this.Content.getChild("bred_spc_list").asList;
            this.uiTextCost = this.Content.getChild("bred_cost_spc_comp").asCom.getChild("bred_upgrademoney_txt").asTextField;
            this.uiBtnConfirm = this.Content.getChild("bred_changespc_btn").asButton;
            this.uiCompClose = this.Content.getChild("bred_mask_grp").asCom;
        }
        InitWindow() {
            this.SetUIChooseList();
        }
        BindEvent() {
            if (this.uiCompClose != null)
                this.uiCompClose.onClick(this, this.Close);
            if (this.uiBtnConfirm != null)
                this.uiBtnConfirm.onClick(this, this.OnClickConfirmBtn);
            if (this.uiListSpecialty != null)
                this.uiListSpecialty.itemRenderer = this.SetSpecialtyListRenderFunc();
        }
        SetSpecialtyListRenderFunc() {
            return Laya.Handler.create(this, (idx, obj) => {
                let item = new UISpecialtyItem(obj);
                item.Show(this.specialtyDataList[idx]);
                this.specialtyList.push(item);
                obj.onClick(this, this.OnClickItem, [idx]);
            }, null, false);
        }
        SetUIChooseList() {
            while (this.specialtyList.length > 0)
                this.specialtyList.pop().Hide();
            while (this.specialtyDataList.length > 0)
                this.specialtyDataList.pop();
            this.uiListSpecialty.numItems = 0;
            this.InitChooseListData();
            this.uiListSpecialty.numItems = this.specialtyDataList.length;
        }
        InitChooseListData() {
            if (this.ckInfo == null)
                return;
            if (this.ckInfo.chooseSpecialtyList == null)
                return;
            this.ckInfo.chooseSpecialtyList.forEach(id => {
                let specialty = CkSpecialtyConfig.GetInstance().GetData((40200000 + id).toString());
                if (specialty != null)
                    this.specialtyDataList.push(specialty);
            });
        }
        OnClickItem(args) {
            console.log("-----------------OnClickItem", args);
            if (args == null)
                return;
            let idx = args;
            if (idx == null)
                return;
            let item = this.specialtyList[idx];
            if (item == null)
                return;
            item.ActiveSelection(true);
            if (this.lastSelectIdx == null)
                this.lastSelectIdx = idx;
            else {
                let item = this.specialtyList[this.lastSelectIdx];
                if (item != null)
                    item.ActiveSelection(false);
                this.lastSelectIdx = idx;
            }
        }
        OnClickConfirmBtn() {
            if (this.ckInfo == null)
                return;
            if (this.lastSelectIdx == null)
                return;
            let specialty = this.specialtyDataList[this.lastSelectIdx];
            if (specialty == null)
                return;
            let rqstData = RequestPackage.RqstIntKeyIntValue.create();
            rqstData.key = this.ckInfo.id;
            rqstData.value = specialty.id - 40200000;
            let buf = RequestPackage.RqstIntKeyIntValue.encode(rqstData).finish();
            SocketClient.GetInstance().SendBizMsg(RequestCMD.ChooseSpecialty, buf);
            this.Close();
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
                case CK_UIType.BagPanel:
                    ui = new FGUI_BagPanel();
                    break;
                case CK_UIType.FGUITipWIndow:
                    ui = new FGUI_TipWIndow();
                    break;
                case CK_UIType.UpgradeWindow:
                    ui = new FGUI_UpgradeWindow();
                    break;
                case CK_UIType.SpecialtyWindow:
                    ui = new FGUI_SpecialtyWindow();
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

    class Utils {
        static get Instance() {
            if (this.instance == undefined)
                this.instance = new Utils();
            return this.instance;
        }
        ShowTipWindow(title, context, comfirm, cancel) {
            FGUIManager.GetInstance().OpenWindow(CK_UIType.FGUITipWIndow, () => { }, [
                title,
                context,
                comfirm,
                cancel
            ]);
        }
        ShowScrollTips(context) {
            let Content = fgui.UIPackage.createObject("common_component_package", "common_tips_comp").asCom;
            let anim;
            let uiTextContex;
            if (Content != null) {
                fgui.GRoot.inst.addChild(Content);
                Content.center();
                Content.setXY(Content.x, Content.y - 165);
                Content.setPivot(0.5, 0.5);
                uiTextContex = Content.getChild("common_tips_txt").asTextField;
                anim = Content.getTransition("common_tipsdisappear_anim");
            }
            if (uiTextContex != null)
                uiTextContex.text = context;
            if (anim != null) {
                anim.play(Laya.Handler.create(this, () => {
                    Content.dispose();
                }));
            }
        }
    }

    class UISpecialty {
        constructor(content) {
            this.Content = content;
            this.Init();
            this.BindEvent();
        }
        Init() {
            this.uiBtnSpecialty = this.Content.getChild("bred_specialty_btn").asButton;
            this.uiComDialog = this.Content.getChild("bred_specialtydialog_comp").asCom;
            if (this.uiComDialog != null) {
                this.uiComDialog.visible = false;
                this.uiTextName = this.uiComDialog.getChild("bred_spcname_txt").asTextField;
                this.uiTextType = this.uiComDialog.getChild("bred_spctype_txt").asTextField;
                this.uiTextDes = this.uiComDialog.getChild("bred_spcdesc_txt").asTextField;
            }
        }
        BindEvent() {
            this.uiBtnSpecialty.onClick(this, this.OnClickBtn);
        }
        Show(args) {
            if (args != null)
                this.specialData = args;
            if (this.Content != null)
                this.Content.visible = true;
            Laya.stage.on(Laya.Event.MOUSE_UP, this, this.ClickEventCallBack);
            if (this.uiTextName != null && this.specialData != null) {
                let langData = LangConfig.GetInstance().GetData(this.specialData.specialtyLang.toString());
                this.uiTextName.text = langData ? langData.text : "";
            }
            if (this.uiTextType != null && this.specialData != null) {
                let langData = LangConfig.GetInstance().GetData(this.specialData.specialtyTypeLang.toString());
                this.uiTextType.text = langData ? langData.text : "";
            }
            if (this.uiTextDes != null && this.specialData != null) {
                let langData = LangConfig.GetInstance().GetData(this.specialData.specialtyDescLang.toString());
                this.uiTextDes.text = langData ? langData.text : "";
            }
            if (this.uiBtnSpecialty != null && this.specialData != null) {
                this.uiBtnSpecialty.icon = this.specialData.icon;
            }
        }
        Hide() {
            if (this.Content != null) {
                this.Content.visible = false;
                this.Content.dispose();
            }
            Laya.stage.off(Laya.Event.MOUSE_UP, this, this.ClickEventCallBack);
        }
        OnClickBtn() {
            if (this.specialData == null)
                return;
            console.log("log----------------------specialData", this.specialData);
            if (this.specialData.specialtyLang != 0 &&
                this.specialData.specialtyTypeLang == 0 &&
                this.specialData.specialtyDescLang == 0) {
                let langData = LangConfig.GetInstance().GetData(this.specialData.specialtyLang.toString());
                console.log("log----------------------langData", langData);
                if (langData == null)
                    return;
                Utils.Instance.ShowScrollTips(langData.text);
                return;
            }
            if (this.uiComDialog != null)
                this.uiComDialog.visible = true;
        }
        ClickEventCallBack() {
            if (this.specialData != null &&
                this.specialData.specialtyLang != 0 &&
                this.specialData.specialtyTypeLang == 0 &&
                this.specialData.specialtyDescLang == 0) {
                return;
            }
            if (this.uiComDialog != null)
                this.uiComDialog.visible = false;
        }
    }

    class UILobby {
        constructor(content) {
            this.specialtyList = new Array();
            this.specialtyDataList = new Array();
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
            if (this.ballSpecialList != null)
                this.ballSpecialList.itemRenderer = this.SetSpecialtyListRenderHandler();
        }
        BindEvent() {
            this.playBtn.onClick(this, this.ToMatchPanel);
            this.bagBtn.onClick(this, this.OnClickBagBtn);
            this.ballMsg.onClick(this, this.ToBredPanel);
        }
        Show() {
            let currentId = DataManager.GetInstance().PlayerData.NoramlaTeam.ckId;
            if (currentId != undefined) {
                this.formationController.selectedIndex = 0;
                let ckInfo = DataManager.GetInstance().PlayerData.GetBallById(currentId);
                this.ChangeBall(ckInfo);
                this.ChangeProperty(ckInfo);
                this.SetSpecialtyList(ckInfo);
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
        SetSpecialtyList(ckInfo) {
            if (this.ballSpecialList == null || ckInfo == null)
                return;
            while (this.specialtyList.length > 0)
                this.specialtyList.pop().Hide();
            while (this.specialtyDataList.length > 0)
                this.specialtyDataList.pop();
            this.InitSpecailDataList(ckInfo);
            this.ballSpecialList.numItems = 0;
            this.ballSpecialList.numItems = this.specialtyDataList.length;
        }
        InitSpecailDataList(ckInfo) {
            if (ckInfo == null)
                return;
            ckInfo.dnaSpecialtyList.forEach(id => {
                let special = CkSpecialtyConfig.GetInstance().GetData((40200000 + id).toString());
                if (special != null && ckInfo.quality >= special.quality)
                    this.specialtyDataList.push(special);
            });
            ckInfo.specialtyList.forEach(id => {
                let special = CkSpecialtyConfig.GetInstance().GetData((40200000 + id).toString());
                if (special != null)
                    this.specialtyDataList.push(special);
            });
        }
        SetSpecialtyListRenderHandler() {
            return Laya.Handler.create(this, (idx, obj) => {
                let specialty = new UISpecialty(obj);
                let data = this.specialtyDataList[idx];
                specialty.Show(data);
                this.specialtyList.push(specialty);
            }, null, false);
        }
        ToMatchPanel() {
            let mainPanel = FGUIManager.GetInstance().GetPanel(CK_UIType.MainPanel);
            if (mainPanel != null || mainPanel != undefined) {
                mainPanel.ChangePanel(MainPanelType.Match);
            }
        }
        ToBredPanel() {
            let mainPanel = FGUIManager.GetInstance().GetPanel(CK_UIType.MainPanel);
            if (mainPanel != null || mainPanel != undefined) {
                let currentId = DataManager.GetInstance().PlayerData.NoramlaTeam.ckId;
                let ckInfo;
                if (currentId != undefined && currentId != null)
                    ckInfo = DataManager.GetInstance().PlayerData.GetBallById(currentId);
                if (ckInfo != undefined && ckInfo != null)
                    mainPanel.ChangePanel(MainPanelType.Bred, [ckInfo, CK_UIType.MainPanel]);
            }
        }
        OnClickBagBtn() {
            let mainPanel = FGUIManager.GetInstance().GetPanel(CK_UIType.MainPanel);
            if (mainPanel != null || mainPanel != undefined) {
                mainPanel.SetVisible(false);
            }
            let curScene = SceneManager.GetInstance().CurrentActiveScene;
            curScene.HideCurrent();
            FGUIManager.GetInstance().OpenPanel(CK_UIType.BagPanel, () => {
                FGUIManager.GetInstance().OpenPanel(CK_UIType.TopBarPanel, () => { }, false);
            }, false, MainPanelType.Lobby);
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

    class CkLevelUpConfig {
        constructor() {
            this.Data = new Map([
                ["id_40101001", new CkLevelUp(40101001, 1, 1, 0, 0, 0)],
                ["id_40101002", new CkLevelUp(40101002, 1, 2, 42, 2, 0)],
                ["id_40101003", new CkLevelUp(40101003, 1, 3, 62, 0, 0)],
                ["id_40101004", new CkLevelUp(40101004, 1, 4, 91, 2, 0)],
                ["id_40101005", new CkLevelUp(40101005, 1, 5, 129, 0, 0)],
                ["id_40101006", new CkLevelUp(40101006, 1, 6, 176, 2, 0)],
                ["id_40101007", new CkLevelUp(40101007, 1, 7, 232, 0, 0)],
                ["id_40101008", new CkLevelUp(40101008, 1, 8, 297, 2, 0)],
                ["id_40101009", new CkLevelUp(40101009, 1, 9, 371, 0, 0)],
                ["id_40101010", new CkLevelUp(40101010, 1, 10, 454, 2, 0)],
                ["id_40101011", new CkLevelUp(40101011, 1, 11, 546, 0, 1)],
                ["id_40101012", new CkLevelUp(40101012, 1, 12, 647, 2, 0)],
                ["id_40101013", new CkLevelUp(40101013, 1, 13, 757, 0, 0)],
                ["id_40101014", new CkLevelUp(40101014, 1, 14, 876, 2, 0)],
                ["id_40101015", new CkLevelUp(40101015, 1, 15, 1004, 0, 0)],
                ["id_40101016", new CkLevelUp(40101016, 1, 16, 1141, 2, 0)],
                ["id_40101017", new CkLevelUp(40101017, 1, 17, 1287, 0, 0)],
                ["id_40101018", new CkLevelUp(40101018, 1, 18, 1442, 2, 0)],
                ["id_40101019", new CkLevelUp(40101019, 1, 19, 1606, 0, 0)],
                ["id_40101020", new CkLevelUp(40101020, 1, 20, 1779, 2, 0)],
                ["id_40101021", new CkLevelUp(40101021, 1, 21, 1961, 0, 1)],
                ["id_40102001", new CkLevelUp(40102001, 2, 1, 0, 0, 0)],
                ["id_40102002", new CkLevelUp(40102002, 2, 2, 78, 2, 0)],
                ["id_40102003", new CkLevelUp(40102003, 2, 3, 106, 0, 0)],
                ["id_40102004", new CkLevelUp(40102004, 2, 4, 146, 2, 0)],
                ["id_40102005", new CkLevelUp(40102005, 2, 5, 198, 0, 0)],
                ["id_40102006", new CkLevelUp(40102006, 2, 6, 262, 2, 0)],
                ["id_40102007", new CkLevelUp(40102007, 2, 7, 338, 0, 0)],
                ["id_40102008", new CkLevelUp(40102008, 2, 8, 426, 2, 0)],
                ["id_40102009", new CkLevelUp(40102009, 2, 9, 526, 0, 0)],
                ["id_40102010", new CkLevelUp(40102010, 2, 10, 638, 2, 0)],
                ["id_40102011", new CkLevelUp(40102011, 2, 11, 762, 0, 1)],
                ["id_40102012", new CkLevelUp(40102012, 2, 12, 898, 2, 0)],
                ["id_40102013", new CkLevelUp(40102013, 2, 13, 1046, 0, 0)],
                ["id_40102014", new CkLevelUp(40102014, 2, 14, 1206, 2, 0)],
                ["id_40102015", new CkLevelUp(40102015, 2, 15, 1378, 0, 0)],
                ["id_40102016", new CkLevelUp(40102016, 2, 16, 1562, 2, 0)],
                ["id_40102017", new CkLevelUp(40102017, 2, 17, 1758, 0, 0)],
                ["id_40102018", new CkLevelUp(40102018, 2, 18, 1966, 2, 0)],
                ["id_40102019", new CkLevelUp(40102019, 2, 19, 2186, 0, 0)],
                ["id_40102020", new CkLevelUp(40102020, 2, 20, 2418, 2, 0)],
                ["id_40102021", new CkLevelUp(40102021, 2, 21, 2662, 0, 1)],
                ["id_40103001", new CkLevelUp(40103001, 3, 1, 0, 0, 0)],
                ["id_40103002", new CkLevelUp(40103002, 3, 2, 141, 2, 0)],
                ["id_40103003", new CkLevelUp(40103003, 3, 3, 194, 0, 0)],
                ["id_40103004", new CkLevelUp(40103004, 3, 4, 262, 2, 0)],
                ["id_40103005", new CkLevelUp(40103005, 3, 5, 345, 0, 0)],
                ["id_40103006", new CkLevelUp(40103006, 3, 6, 443, 2, 0)],
                ["id_40103007", new CkLevelUp(40103007, 3, 7, 556, 0, 0)],
                ["id_40103008", new CkLevelUp(40103008, 3, 8, 684, 2, 0)],
                ["id_40103009", new CkLevelUp(40103009, 3, 9, 827, 0, 0)],
                ["id_40103010", new CkLevelUp(40103010, 3, 10, 985, 2, 0)],
                ["id_40103011", new CkLevelUp(40103011, 3, 11, 1158, 0, 1)],
                ["id_40103012", new CkLevelUp(40103012, 3, 12, 1346, 2, 0)],
                ["id_40103013", new CkLevelUp(40103013, 3, 13, 1549, 0, 0)],
                ["id_40103014", new CkLevelUp(40103014, 3, 14, 1767, 2, 0)],
                ["id_40103015", new CkLevelUp(40103015, 3, 15, 2000, 0, 0)],
                ["id_40103016", new CkLevelUp(40103016, 3, 16, 2248, 2, 0)],
                ["id_40103017", new CkLevelUp(40103017, 3, 17, 2511, 0, 0)],
                ["id_40103018", new CkLevelUp(40103018, 3, 18, 2789, 2, 0)],
                ["id_40103019", new CkLevelUp(40103019, 3, 19, 3082, 0, 0)],
                ["id_40103020", new CkLevelUp(40103020, 3, 20, 3390, 2, 0)],
                ["id_40103021", new CkLevelUp(40103021, 3, 21, 3713, 0, 1)],
                ["id_40104001", new CkLevelUp(40104001, 4, 1, 0, 0, 0)],
                ["id_40104002", new CkLevelUp(40104002, 4, 2, 228, 2, 0)],
                ["id_40104003", new CkLevelUp(40104003, 4, 3, 324, 0, 0)],
                ["id_40104004", new CkLevelUp(40104004, 4, 4, 438, 2, 0)],
                ["id_40104005", new CkLevelUp(40104005, 4, 5, 570, 0, 0)],
                ["id_40104006", new CkLevelUp(40104006, 4, 6, 720, 2, 0)],
                ["id_40104007", new CkLevelUp(40104007, 4, 7, 888, 0, 0)],
                ["id_40104008", new CkLevelUp(40104008, 4, 8, 1074, 2, 0)],
                ["id_40104009", new CkLevelUp(40104009, 4, 9, 1278, 0, 0)],
                ["id_40104010", new CkLevelUp(40104010, 4, 10, 1500, 2, 0)],
                ["id_40104011", new CkLevelUp(40104011, 4, 11, 1740, 0, 1)],
                ["id_40104012", new CkLevelUp(40104012, 4, 12, 1998, 2, 0)],
                ["id_40104013", new CkLevelUp(40104013, 4, 13, 2274, 0, 0)],
                ["id_40104014", new CkLevelUp(40104014, 4, 14, 2568, 2, 0)],
                ["id_40104015", new CkLevelUp(40104015, 4, 15, 2880, 0, 0)],
                ["id_40104016", new CkLevelUp(40104016, 4, 16, 3210, 2, 0)],
                ["id_40104017", new CkLevelUp(40104017, 4, 17, 3558, 0, 0)],
                ["id_40104018", new CkLevelUp(40104018, 4, 18, 3924, 2, 0)],
                ["id_40104019", new CkLevelUp(40104019, 4, 19, 4308, 0, 0)],
                ["id_40104020", new CkLevelUp(40104020, 4, 20, 4710, 2, 0)],
                ["id_40104021", new CkLevelUp(40104021, 4, 21, 5130, 0, 1)],
            ]);
        }
        static GetInstance() {
            if (this.Instance == null) {
                this.Instance = new CkLevelUpConfig();
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
    class CkLevelUp {
        constructor(id, quality, level, costGcke, propertyNum, specialtyNum) {
            this.id = id;
            this.quality = quality;
            this.level = level;
            this.costGcke = costGcke;
            this.propertyNum = propertyNum;
            this.specialtyNum = specialtyNum;
        }
    }

    class UIBred {
        constructor(content) {
            this.lastPanelType = CK_UIType.MainPanel;
            this.specialtyList = new Array();
            this.specialtyDataList = new Array();
            this.dnaSpecialtyNum = 0;
            this.currentBall = null;
            this.currentProperty = null;
            this.Content = content;
            this.Init();
            this.BindEvent();
        }
        Init() {
            this.ballMsg = this.Content.getChild("bred_ckmodel_comp").asCom;
            this.statusMsg = this.Content.getChild("bred_status_comp").asCom;
            this.backBtn = this.Content.getChild("bred_back_btn").asButton;
            this.bagBtn = this.Content.getChild("bred_bag_btn").asButton;
            this.uiBtnUpLevel = this.Content.getChild("bred_upgrade_btn").asButton;
            this.uiBtnBattle = this.Content.getChild("bred_battlestate_btn").asButton;
            this.uiBarTodayLimit = this.Content.getChild("bred_today_bar").asProgress;
            this.uiBarTotle = this.Content.getChild("bred_total_bar").asProgress;
            this.uiListSpecialty = this.Content.getChild("bred_specialty_list").asList;
            this.uiTextCost = this.Content.getChild("bred_spend_comp").asCom.getChild("bred_upgrademoney_txt").asTextField;
            this.uiListSpecialty = this.Content.getChild("bred_specialty_list").asList;
            if (this.uiListSpecialty != null)
                this.uiListSpecialty.itemRenderer = this.SetSpecialtyListRenderHandler();
        }
        BindEvent() {
            this.backBtn.onClick(this, this.OnClickBackBtn);
            this.bagBtn.onClick(this, this.OnClickBagBtn);
            this.uiBtnUpLevel.onClick(this, this.OnClickUpLevelBtn);
            this.uiBtnBattle.onClick(this, this.OnClickBattleBtn);
        }
        Show(args) {
            if (args != null && args[0] != null)
                this.ckInfo = args[0];
            if (args != null && args[1] != null)
                this.lastPanelType = args[1];
            this.AddEvent();
            this.SetData();
        }
        Hide() {
            this.RemoveEvent();
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
        SetData() {
            if (this.ckInfo != undefined && this.ckInfo != null) {
                let ckData = ResponsePackage.RespCkInfo.create(this.ckInfo);
                this.ChangeBall(ckData);
                this.ChangeProperty(ckData);
            }
            this.SetDayLimitBar();
            this.SetTotleBar();
            this.SetUpLevelCost();
            this.SetUpLevelBtnState();
            this.SetSpecialtyList();
            this.SetBattleBtnState();
        }
        SetDayLimitBar() {
            if (this.uiBarTodayLimit == null)
                return;
        }
        SetTotleBar() {
            if (this.uiBarTotle == null)
                return;
            if (this.ckInfo == null)
                return;
            this.uiBarTotle.value = this.ckInfo.life;
            this.uiBarTotle.max = this.ckInfo.maxLife;
        }
        SetUpLevelCost() {
            if (this.uiTextCost == null)
                return;
            this.uiTextCost.text = "x0";
            if (this.ckInfo == null)
                return;
            let id = (40100000 + this.ckInfo.quality * 1000 + this.ckInfo.level + 1).toString();
            let configData = CkLevelUpConfig.GetInstance().GetData(id);
            let cost = 0;
            if (configData != null)
                cost = configData.costGcke;
            this.uiTextCost.text = "x" + cost;
        }
        SetUpLevelBtnState() {
            if (this.uiBtnUpLevel == null)
                return;
            this.uiBtnUpLevel.title = "Upgrade";
            if (this.ckInfo == null)
                return;
            if (this.ckInfo.propertyNum > 0)
                this.uiBtnUpLevel.title = "+++";
            else if (this.ckInfo.chooseSpecialtyList.length > 0)
                this.uiBtnUpLevel.title = "|||";
        }
        SetSpecialtyList() {
            if (this.uiListSpecialty == null || this.ckInfo == null)
                return;
            while (this.specialtyList.length > 0)
                this.specialtyList.pop().Hide();
            while (this.specialtyDataList.length > 0)
                this.specialtyDataList.pop();
            this.InitSpecailDataList();
            this.uiListSpecialty.numItems = 0;
            this.uiListSpecialty.numItems = this.specialtyDataList.length;
        }
        SetBattleBtnState() {
            if (this.uiBtnBattle == null)
                return;
            let ctrl = this.uiBtnBattle.getController("bred_battlestate_ctrl");
            if (ctrl == null)
                return;
            ctrl.selectedIndex = 0;
            let currentId = DataManager.GetInstance().PlayerData.NoramlaTeam.ckId;
            if (currentId != null && this.ckInfo != null && this.ckInfo.id == currentId)
                ctrl.selectedIndex = 1;
        }
        InitSpecailDataList() {
            if (this.ckInfo == null)
                return;
            this.dnaSpecialtyNum = 0;
            this.ckInfo.dnaSpecialtyList.forEach(id => {
                let special = CkSpecialtyConfig.GetInstance().GetData((40200000 + id).toString());
                if (special != null) {
                    if (this.ckInfo.quality >= special.quality)
                        this.specialtyDataList.push(special);
                    else
                        this.specialtyDataList.push(new CkSpecialty(0, 10001, 0, 0, "ui://4kxumucaljvzrq", 1));
                    this.dnaSpecialtyNum++;
                }
            });
            this.ckInfo.specialtyList.forEach(id => {
                let special = CkSpecialtyConfig.GetInstance().GetData((40200000 + id).toString());
                if (special != null)
                    this.specialtyDataList.push(special);
            });
            let diff = this.specialtyDataList.length - this.dnaSpecialtyNum;
            switch (diff) {
                case 0:
                    {
                        if (this.ckInfo.level < 11)
                            this.specialtyDataList.push(new CkSpecialty(0, 10003, 0, 0, "ui://4kxumucaljvzrr", 1));
                        else
                            this.specialtyDataList.push(new CkSpecialty(0, 0, 0, 0, "ui://4kxumucaljvzrs", 1));
                        if (this.ckInfo.level < 20)
                            this.specialtyDataList.push(new CkSpecialty(0, 10004, 0, 0, "ui://4kxumucaljvzrr", 1));
                        else
                            this.specialtyDataList.push(new CkSpecialty(0, 0, 0, 0, "ui://4kxumucaljvzrs", 1));
                    }
                    break;
                case 1:
                    {
                        if (this.ckInfo.level < 20)
                            this.specialtyDataList.push(new CkSpecialty(0, 10004, 0, 0, "ui://4kxumucaljvzrr", 1));
                        else
                            this.specialtyDataList.push(new CkSpecialty(0, 0, 0, 0, "ui://4kxumucaljvzrs", 1));
                    }
                    break;
                default:
                    break;
            }
        }
        SetSpecialtyListRenderHandler() {
            return Laya.Handler.create(this, (idx, obj) => {
                let specialty = new UISpecialty(obj);
                let data = this.specialtyDataList[idx];
                specialty.Show(data);
                this.specialtyList.push(specialty);
                if (data.specialtyLang == 0) {
                    obj.onClick(this, () => {
                        FGUIManager.GetInstance().OpenWindow(CK_UIType.SpecialtyWindow, function () { }, this.ckInfo);
                    });
                }
            }, null, false);
        }
        ToLobby() {
            let mainPanel = FGUIManager.GetInstance().GetPanel(CK_UIType.MainPanel);
            if (mainPanel != null || mainPanel != undefined) {
                mainPanel.SetVisible(true);
                mainPanel.ChangePanel(MainPanelType.Lobby);
            }
        }
        ToBag() {
            let mainPanel = FGUIManager.GetInstance().GetPanel(CK_UIType.MainPanel);
            if (mainPanel != null || mainPanel != undefined) {
                mainPanel.SetVisible(false);
            }
            let curScene = SceneManager.GetInstance().CurrentActiveScene;
            curScene.HideCurrent();
            FGUIManager.GetInstance().OpenPanel(CK_UIType.BagPanel, () => {
                FGUIManager.GetInstance().OpenPanel(CK_UIType.TopBarPanel, () => { }, false);
            }, false, MainPanelType.Lobby);
        }
        OnClickBackBtn() {
            switch (this.lastPanelType) {
                case CK_UIType.MainPanel:
                    this.ToLobby();
                    break;
                case CK_UIType.BagPanel:
                    this.ToBag();
                    break;
                default: break;
            }
        }
        OnClickBagBtn() {
            let mainPanel = FGUIManager.GetInstance().GetPanel(CK_UIType.MainPanel);
            if (mainPanel != null || mainPanel != undefined) {
                mainPanel.SetVisible(false);
            }
            let curScene = SceneManager.GetInstance().CurrentActiveScene;
            curScene.HideCurrent();
            FGUIManager.GetInstance().OpenPanel(CK_UIType.BagPanel, () => {
                FGUIManager.GetInstance().OpenPanel(CK_UIType.TopBarPanel, () => { }, false);
            }, false, MainPanelType.Bred);
        }
        OnClickUpLevelBtn() {
            if (this.ckInfo == null)
                return;
            if (this.ckInfo.propertyNum != null && this.ckInfo.propertyNum > 0)
                FGUIManager.GetInstance().OpenWindow(CK_UIType.UpgradeWindow, function () { }, this.ckInfo);
            else if (this.ckInfo.chooseSpecialtyList != null && this.ckInfo.chooseSpecialtyList.length > 0)
                FGUIManager.GetInstance().OpenWindow(CK_UIType.SpecialtyWindow, function () { }, this.ckInfo);
            else if (this.ckInfo.level < this.ckInfo.levelLimit)
                Utils.Instance.ShowTipWindow("", "uplevel?", () => { this.RqstLevelUp(); }, function () { });
        }
        OnClickBattleBtn() {
            this.RqstBattle();
        }
        RqstLevelUp() {
            if (this.ckInfo == null || this.ckInfo == undefined)
                return;
            let rqstData = RequestPackage.RqstInt.create();
            rqstData.value = this.ckInfo.id;
            let buf = RequestPackage.RqstInt.encode(rqstData).finish();
            SocketClient.GetInstance().SendBizMsg(RequestCMD.LevelUp, buf);
        }
        RqstBattle() {
            if (this.ckInfo == null || this.ckInfo == undefined)
                return;
            let currentTeam = DataManager.GetInstance().PlayerData.NoramlaTeam;
            if (currentTeam == null)
                return;
            let rqstData = RequestPackage.RqstIntKeyIntValue.create();
            rqstData.key = TeamType.NormalTeam;
            rqstData.value = this.ckInfo.id;
            let buf = RequestPackage.RqstIntKeyIntValue.encode(rqstData).finish();
            SocketClient.GetInstance().SendBizMsg(RequestCMD.UpdateTeam, buf);
        }
        AddEvent() {
            Laya.stage.on(RequestCMD.LevelUp.toString(), this, this.RespLevelUp);
            Laya.stage.on(RequestCMD.AllotProperty.toString(), this, this.RespPropertySet);
            Laya.stage.on(RequestCMD.ChooseSpecialty.toString(), this, this.RespPropertySet);
            Laya.stage.on(RequestCMD.UpdateTeam.toString(), this, this.RespPropertySet);
        }
        RemoveEvent() {
            Laya.stage.off(RequestCMD.LevelUp.toString(), this, this.RespLevelUp);
            Laya.stage.off(RequestCMD.AllotProperty.toString(), this, this.RespPropertySet);
            Laya.stage.off(RequestCMD.ChooseSpecialty.toString(), this, this.RespPropertySet);
            Laya.stage.off(RequestCMD.UpdateTeam.toString(), this, this.RespPropertySet);
        }
        RespLevelUp(data) {
            let respfully = ResponsePackage.RespFully.decode(data);
            DataManager.GetInstance().PlayerData.UpdatePlayerData(respfully);
            this.ckInfo = DataManager.GetInstance().PlayerData.GetBallById(this.ckInfo.id);
            if (this.ckInfo != null && this.ckInfo.propertyNum > 0)
                FGUIManager.GetInstance().OpenWindow(CK_UIType.UpgradeWindow, function () { }, this.ckInfo);
            else if (this.ckInfo != null && this.ckInfo.chooseSpecialtyList.length > 0)
                FGUIManager.GetInstance().OpenWindow(CK_UIType.SpecialtyWindow, function () { }, this.ckInfo);
            this.SetData();
        }
        RespPropertySet(data) {
            let respfully = ResponsePackage.RespFully.decode(data);
            DataManager.GetInstance().PlayerData.UpdatePlayerData(respfully);
            this.ckInfo = DataManager.GetInstance().PlayerData.GetBallById(this.ckInfo.id);
            this.SetData();
        }
    }

    class FGUI_MainPanel {
        constructor() {
            this.UIType = CK_UIType.MainPanel;
            this.IsInitFinish = false;
            this.ID = 0;
            this.lobbyPanel = null;
            this.matchPanel = null;
            this.bredPanel = null;
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
            this.bredComp = this.Content.getChild("bred_comp").asCom;
            this.panelController = this.Content.getController("main_ctrl");
        }
        InitMap() {
            this.lobbyPanel = new UILobby(this.lobbyComp);
            this.matchPanel = new UIMatch(this.matchComp);
            this.bredPanel = new UIBred(this.bredComp);
            this.panelMap.set(MainPanelType.Lobby, this.lobbyPanel);
            this.panelMap.set(MainPanelType.Match, this.matchPanel);
            this.panelMap.set(MainPanelType.Bred, this.bredPanel);
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
        MainPanelType[MainPanelType["Bred"] = 2] = "Bred";
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
