import Config from "./Config";

// Learn TypeScript:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/typescript.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html


export enum GameType{
    game = 0,
    win,
    lose,
    mainUI,
    pause,
    shop,
    setting,
    ranking
}

const {ccclass, property} = cc._decorator;
import GameValue from './GameValue';
import { Test1 } from "./interface/Interface";

@ccclass
export default class TSDemo extends cc.Component {

    // @property(cc.Label)
    // label: cc.Label = null;

    // @property
    // text: string = 'hello';

    // LIFE-CYCLE CALLBACKS:

    @property(GameValue)
    public gameValue : GameValue = null;

    @property({
        type:cc.Enum(GameType)
    })
    public gameType:GameType = GameType.mainUI;

    
    @property(cc.Sprite)
    sprite1:cc.Sprite = null;

    public static instance : TSDemo;

    onLoad () {
        TSDemo.instance = this;
    }

    start () {
        Config.Instance().log1();
        console.log('------------------');
        Config.Instance().log3();
        console.log('------------------');
        this.gameType = GameType.lose;
        console.log('gameTypeValue ' + this.gameType);
        console.log('------------------');
        this.gameValue.call();
        console.log('------------------');

        var gameValueGo = this.node.getParent().getChildByName('gameValue');
        var _gameValue = gameValueGo.getComponent(GameValue);
        _gameValue.call();
        
        this.call(false, 1.2);

        var instance = new Test1.Test2();
        instance.test();
        console.log('get Value ' + instance.getValue());
        console.log('get string ' + instance.getString());
        console.log('get value1 ' + instance.getValue1(2, 20));

        instance.setCallBack(function(content:string)
        {
            console.log('this is ts and js callBack ' + content);
        });


        this.setSprite();
    }

    public call(de:Boolean, dafa:number):void
    {
        //des : Boolean = false;
        console.log('de ' + de + "   dafa " + dafa);
    }

    public setSprite():void
    {
        //var callback = cc.callFunc(this.loadSuccessful, this);
        //cc.loader.loadRes('2', cc.SpriteFrame, callback);
        var callBack = function(err:any, spriteFrame:cc.SpriteFrame)
        {
            TSDemo.instance.sprite1.spriteFrame = spriteFrame;
            TSDemo.instance.call(true, 2.5);
        };
        cc.loader.loadRes('2', cc.SpriteFrame, callBack);
        // var self = this;
        // cc.loader.loadRes('2', cc.SpriteFrame, function(err, spriteFrame){
        //     self.call(true, 3.5);
        // });
    }

    public loadSuccessful(err:any, spriteFrame:cc.SpriteFrame):void{
        TSDemo.instance.sprite1.spriteFrame = spriteFrame;
        TSDemo.instance.call(true, 2.5);
    }

    update (dt) {

    }
}


