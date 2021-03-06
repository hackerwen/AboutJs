// eval函数可以将字符串转为可执行的javascript代码
// 还可以用来将json字符串转为js对象 效果等同于 JSON.parse(),但是JSON对象存在兼容性问题

eval('var a=10');
console.log(a); // 10


var res = eval('1+7+3+4'); // 如果是数值计算 eval会返回结果
console.log(res);

var jsonData = '{"name":"zzw","age":"18"}';
var jsonObj = JSON.parse(jsonData); // 返回一个对象
console.log(jsonObj);

// 但是eval不行
// eval(jsonData);会报错

// 相当与在js文件中直接写
// {
//     "name":"zzw",
//     "age":"18"
// };
// 这并不是一个对象,没有赋值过程,语法有错误

// 使用eval来解析JSON格式字符串的时候,会将{}解析为代码块标识,而不是对象字面量
// 将json字符串用()包起来就不会将{}解析为代码块标识,而是解析为表达式
eval('var jsonObj1=' + '{"name":"zzw","age":"18"}');
console.log(jsonObj1);
