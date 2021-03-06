function Person(name, sex, age) {
    this.name = name;
    this.age = age;
    this.sex = sex;
}

Person.prototype.sayHello = function () {
    console.log('hello');
}

var p1 = new Person('zzw', 'male', '20');

Person.prototype = {
    sayGoodBye: function () {
        console.log('byebye');
    }
}

var p2 = new Person('zjj', 'female', '19');

p1.sayHello(); //hello 

p2.sayHello(); //undefined

// 通过以上代码可以得知:
// 实例对象可以访问的原型对象的成员以实例对象创建时构造函数所关联的原型对象为主