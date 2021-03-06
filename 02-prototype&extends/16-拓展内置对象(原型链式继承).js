/*
        var arr=[1,2,3];
        //扩展内置对象(就是给内置对象新增成员),但是存在诸多问题
        Array.prototype.sayHello=function(){
            console.log('我是一个数组');
        };
        arr.sayHello();
        */
// 如何安全地扩展一个内置对象?
// 有!继承数组,扩展自身,而不影响数组

function myArray() {
}

var a = new Array();

myArray.prototype = a;// 继承数组对象

myArray.prototype.sayHello = function () {// 扩展自身
    console.log('我是一个数组');
};

var myarr1 = new myArray();

myarr1.push(1, 2, 3, 4, 5);

console.log(myarr1);

myarr1.sayHello();
