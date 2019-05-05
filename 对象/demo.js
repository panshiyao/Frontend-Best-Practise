/**
 * 对象的声明
 */
function Father(name) {
    this.name = name;
}
Father.prototype.sayName = function () {
    console.log('My name is ', this.name);
};

/**
 * 组合继承
 */
function Child(name, gender) {
    Father.call(this, name); // 在调用call的时候执行了Father并且改变了其内部的this指向
    this.gender = gender;
}

Child.prototype = Object.create(Father.prototype); // Child的原型指向以Father.prototype为原型的实例
Child.prototype.sayGender = function () {
    console.log('My gender is ', this.gender);
};

Child.prototype.constructor = Child; // 改造构造函数
console.log(Child.prototype.constructor); // 若不改造构造函数，Child原型的构造函数会指向Father

const ch1 = new Child('Charlotte', 'developer');
ch1.sayName();
ch1.sayGender();

/**
 * ES6写法
 */
class Father_ES6 {
    constructor(name, sex) {
        this.name = name;
        this.sex = sex;
    }

    sayName() {
        console.log(this.name);
    }
}

/**
 * 枚举
 */
console.log(Object.keys(Father.prototype)); // ES6的方法是类内部定义的，不可枚举，而ES5的声明方法可以
console.log(Object.keys(Father_ES6.prototype));
console.log(Object.getOwnPropertyNames(Father_ES6.prototype)); // 枚举原型对象自身可枚举和不可枚举的属性

/**
 * 属性描述符
 */

