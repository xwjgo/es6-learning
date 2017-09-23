@testable
@say('我可以吞下玻璃而不伤害身体')
@say('牛逼')
class Person {
    constructor () {
        this.name = 'xwj';
    }
    sayHello () {
        console.log(`hello, ${this.name}`);
    }
}

// 是否可测试装饰器
function testable (target) {
    console.log('我是testable装饰器');
    target.isTestable = true;
}

// 装饰器制造函数
function say (word) {
    console.log('生成装饰器：', word);
    return function (target) {
        console.log('装饰器运行', word);
        target.word = word;
    }
}

// log修饰器
function log (target, name, descriptor) {
    console.log(target, name, descriptor);
}
