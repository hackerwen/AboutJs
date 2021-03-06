function Person(name, status) {
    this.name = name;
    this.status = status;
    this.skill = function () {
        console.log('sayhello');
    }
}

console.log(Person.prototype); // 原型对象
Person.prototype.exercise = function () {
    console.log('锻炼!');
} // 动态为原型对象添加方法

var p = new Person('zzw', 'double'); // 构造函数实例化实例对象
p.exercise(); // 实例对象调用原型对象的方法

// 当访问对象内部方法或属性时,首先在对象内部搜索,如果搜索不到则前往原型对象中查找