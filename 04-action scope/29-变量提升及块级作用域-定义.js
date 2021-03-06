// js中没有块级作用域的说法,大括号并不会创建一个作用域


for (var i = 0; i < 5; i++) {
    console.log(i);//0 1 2 3 4
}

console.log(i);//5 for循环外部依旧可以访问到i


// 只有函数能够创建作用域

// 变量提升是分作用域的

// 函数与变量同名只提升函数  但是变量赋值还是要执行的

var num = 10;

function num() {
    console.log(123);
}

num();

// 预编译

function num() {
    console.log(123);
}

num = 10;
num(); // is not a function


// 函数与函数同名全部都会提升,但会以函数声明顺序进行覆盖,后面覆盖前面的

function f1() {
    console.log('first');
}

function f1() {
    console.log('last');
}

// 预编译

function f1() {
    console.log('last')
}


// 函数表达式与变量提升方式相同,变量赋值不会被提升,但变量声明会提升

f1(); // undefined
var f1 = function () {
    console.log('f1');
};

// 预编译
var f1; // 提升
f1(); // 调用 undefined
f1 = function () { // 赋值
    console.log('f1');
};

