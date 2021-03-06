// 使用return访问函数内部变量(值类型)
function f1() {
    var num = 1;
    return num;
}

var x = f1();
console.log(x);//1
// 没错此处通过return"访问"到了函数内部的变量,但是只能访问.
// 每次访问都是将函数执行一次,创建一次变量,将变量值抛出,且只能访问无法修改

// 倘若是引用类型还存在一些问题

// 使用return访问函数内部变量(引用类型)
function f2() {
    var obj = {name: 'zzw'};
    return obj;
}

var x = f2();
var y = f2();
console.log(x === y); // false 每次返回的都是一个新的obj,且地址都不一样

// 现在我们需要一种方法  能够真真切切的访问并修改函数内部的变量(目的)

// 由此引入闭包
