// 对象扩展运算符
function mixin (...list) {
    console.log(...list);
    console.log(list);
}

mixin(1,2,3, {name: 'xwj'});