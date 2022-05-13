/**
 * 设置LayaNative屏幕方向，可设置以下值
 * landscape           横屏
 * portrait            竖屏
 * sensor_landscape    横屏(双方向)
 * sensor_portrait     竖屏(双方向)
 */
window.screenOrientation = "sensor_landscape";

//-----libs-begin-----
loadLib("libs/min/laya.core.min.js")
loadLib("libs/min/laya.html.min.js")
loadLib("libs/min/laya.ui.min.js")
loadLib("libs/min/laya.d3.min.js")
loadLib("libs/min/laya.physics.min.js")
//-----libs-end-------
loadLib("libs/min/fairygui/rawinflate.min.min.js");// 如果勾选了不压缩，这个库不需要
loadLib("libs/min/fairygui/fairygui.min.js");// 只依赖laya.core,laya.html两个模块
loadLib("libs/min/protobuf/library/protobuf-library.min.js");
loadLib("libs/min/protobuf/bundles/protobuf-bundles.min.js");
loadLib("js/bundle.js");
