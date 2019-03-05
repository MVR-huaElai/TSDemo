// Learn TypeScript:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/typescript.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html
const {ccclass, property} = cc._decorator;

import {GameType} from './TSDemo';

export default class Config {

    private static instance : Config;

    public static Instance():Config{
        if(Config.instance == null)
        {
            Config.instance = new Config();
        }
        return Config.instance;
    }

    public log1()
    {
        console.log('this is log1 ' + GameType.ranking);
    }

    private log2()
    {
        console.log('this is log2');
        
    }

    public log3(){
        console.log('this is log3 and call log2');
        this.log2();
    }
}


