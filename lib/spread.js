'use strict';

// 对象扩展运算符
function mixin() {
    var _console;

    for (var _len = arguments.length, list = Array(_len), _key = 0; _key < _len; _key++) {
        list[_key] = arguments[_key];
    }

    (_console = console).log.apply(_console, list);
    console.log(list);
}

mixin(1, 2, 3, { name: 'xwj' });