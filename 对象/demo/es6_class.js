class Parent {
    constructor(name) {
        this.name = name;
    }

    sayName() {
        console.log('my name is ', this.name)
    }
}

class Child extends Parent {
    constructor(name, age) {
        super(name);
        this.age = age;
    }

    sayAge() {
        console.log('my age is ', this.age)
    }
}

const p = new Parent('Pansy');
p.sayName();

const c = new Child('Bily', 12);
c.sayName();
c.sayAge();