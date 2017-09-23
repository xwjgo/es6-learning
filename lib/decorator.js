'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _dec2, _class;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Person = (_dec = say('我可以吞下玻璃而不伤害身体'), _dec2 = say('牛逼'), testable(_class = _dec(_class = _dec2(_class = function () {
    function Person() {
        _classCallCheck(this, Person);

        this.name = 'xwj';
    }

    _createClass(Person, [{
        key: 'sayHello',
        value: function sayHello() {
            console.log('hello, ' + this.name);
        }
    }]);

    return Person;
}()) || _class) || _class) || _class);

// 是否可测试装饰器

function testable(target) {
    console.log('我是testable装饰器');
    target.isTestable = true;
}

// 装饰器制造函数
function say(word) {
    console.log('生成装饰器：', word);
    return function (target) {
        console.log('装饰器运行', word);
        target.word = word;
    };
}

// log修饰器
function log(target, name, descriptor) {
    console.log(target, name, descriptor);
}