export enum CK_MsgCMD{
	Verify=201,//验证玩家 ,proto=RqstVerify
	CreateRole=202,//创建游戏角色
	EnterGame=203,//进入游戏 ,proto=RqstLoadRole
	PI=205,//心跳
	CheckIn=206,//签到
	ChangeImg=211,//更换头像 ,proto=RqstInt
	UpdateTeam=801,//更新队伍 ,proto=RqstIntKeyIntValue
	Read=1002,//读邮件 ,proto=RqstInt
	Delete=1003,//删除 ,proto=RqstInt
	Pick=1004,//领取附件，暂时不做 ,proto=RqstInt
	Chat=1101,//发送聊天 ,proto=RqstIntKeyStrValue
	GetCacheChat=1103,//获取聊天缓冲区 ,proto=RqstInt
	FreeMatch=1401,//自由赛匹配 ,proto=RqstInt
	ChampionshipMatch=1402//锦标赛匹配 ,proto=RqstInt
}