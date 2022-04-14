import { SceneType } from "../Manager/SceneManager";

export interface SceneBase{
    Scene ;
    Camera;
    Light;
    SceneType:SceneType;
}