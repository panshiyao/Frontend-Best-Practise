# 对象
### ES5/ES6继承的差别
1. ES5构造函数遵循变量提升，`class`声明会提升（到**块级作用域**的顶端），但不会初始化赋值。`Foo`进入暂时性死区，类似于 `let`、`const`声明变量。
``` javascript
var Foo = function() {
  this.foo = 21;s
};

{
  const foo = new Foo(); // Cannot access 'Foo' before initialization
  class Foo {
    constructor() {
      this.foo = 37;
    }
  }
}
```

2. `class`声明内部会启用严格模式。
``` javascript
// 引用一个未声明的变量
function Bar() {
  baz = 42; // it's ok
}
const bar = new Bar();

class Foo {
  constructor() {
    fol = 42; // ReferenceError: fol is not defined
  }
}
const foo = new Foo();
```
3. `class`定义的方法是不可枚举的。
``` javascript
class Foo {
  constructor() {
    this.foo = 42;
  }
  static answer() {
    return 42;
  }
  print() {
    console.log(this.foo);
  }
}
const fooKeys = Object.keys(Foo); // []
const fooProtoKeys = Object.keys(Foo.prototype); // []
Object.getOwnPropertyDescriptor(Foo.prototype, 'print') // {value: ƒ, writable: true, enumerable: false, configurable: true}
```

4. 必须使用`new`调用`class`。
``` javascript
function Bar() {
  this.bar = 42;
}
const bar = Bar(); // it's ok

class Foo {
  constructor() {
    this.foo = 42;
  }
}
const foo = Foo(); // TypeError: Class constructor Foo cannot be invoked without 'new'
```


### Map/WeakMap/Set/WeakSet类型介绍
#### Map与Object的区别
- Object的键均为Strings类型，在Map里键可以是任意类型。
- Map的遍历遵循元素的插入顺序。
####  WeakMap与Map的区别
- WeakMap的键必须是对象类型(null除外)
- WeakMap的键名所引用的对象都是弱引用。

注：即使arr没有被使用，arr对e1和e2的引用依然存在。一旦不再需要这两个对象，我们就必须手动删除这个引用，否则垃圾回收机制就不会释放e1和e2占用的内存。一旦忘了写，就会造成内存泄露。而WeakMap的键名是弱引用，即垃圾回收机制不将该引用考虑在内。因此，只要所引用的对象的其他引用都被清除，垃圾回收机制就会释放该对象所占用的内存。也就是说，一旦不再需要，WeakMap 里面的键名对象和所对应的键值对会自动消失，不用手动删除引用。

因此WeakMap没有遍历操作的API（即没有keys()、values()和entries()方法），也没有size属性。因为没有办法列出所有键名，某个键名是否存在完全不可预测，跟垃圾回收机制是否运行相关。
``` javascript
const e1 = document.getElementById('foo');
const e2 = document.getElementById('bar');
const arr = [
  [e1, 'foo 元素'],
  [e2, 'bar 元素'],
];

// 不需要 e1 和 e2 的时候
// 必须手动删除引用
arr [0] = null;
arr [1] = null;
```
一个典型应用场景是，在网页的 DOM 元素上添加数据，就可以使用WeakMap结构。当该 DOM 元素被清除，其所对应的WeakMap记录就会自动被移除。
``` javascript
const wm = new WeakMap();
const element = document.getElementById('example');

wm.set(element, 'some information');
wm.get(element) // "some information"
```

#### Set与Array的对比
- Set的成员值是不重复的。
- Set对象允许根据值删除元素，而数组中必须使用基于下标的 splice 方法。

注：Map提供了一种数组去重/字符串去重的方法。
```javascript
// 去除数组的重复成员
[...new Set(array)]
[...new Set('ababbc')].join('') // "abc"
```

#### WeakSet
- WeakSets中的值必须是对象类型，不可以是别的类型
- 对数组中的对象是“弱引用”。

### 属性描述符（defineProperty）
#### 数据属性与访问器属性
JS中有两种属性，数据属性与访问器属性。其中数据属性可以直接设置属性值，访问器属性通过**setter/getter**函数来描述如何处理数据。
数据属性通过参数[[configurable]]、[[Enumerable]]、[[Writable]]、[[Value]]来描述每个属性的特性。访问器属性通过参数：[[configurable]]、[[Enumerable]]、[[Set]]、[[Get]]来描述每个属性的特性。这些描述属性特性的参数所组成的对象被称为属性描述符。

#### 属性描述符的实际运用
在js中我们可以通过下面这几种方法定义属性。在这三种方法中，`Object.defineProperty`只对IE8+生效。那么何时需要用到`Object.defineProperty`呢？
``` javascript
// (1) define someOne property name
someOne.name = 'cover';
//or use (2) 
someOne['name'] = 'cover';
// or use (3) defineProperty
Object.defineProperty(someOne, 'name', {
    value : 'cover'
})
```
[详情可见](https://imweb.io/topic/56d40adc0848801a4ba198ce)
- MVVM双向绑定的实现
- 优化对象获取和修改属性的方式
- 增加属性获取和修改时的信息（编写框架时可用）

### 对象的遍历
#### Iterator(遍历器)的概念
> 遍历器（Iterator）是一种接口，为各种不同的数据结构提供统一的访问机制。任何数据结构只要部署 Iterator 接口，就可以完成遍历操作（即依次处理该数据结构的所有成员）。
>
> Iterator 的作用有三个：一是为各种数据结构，提供一个统一的、简便的访问接口；二是使得数据结构的成员能够按某种次序排列；三是 ES6 创造了一种新的遍历命令for...of循环，Iterator 接口主要供for...of消费。

#### `for..of`的用法
- for...in循环读取键名，for...of循环读取键值。
- for...of循环调用遍历器接口，只返回具有数字索引的属性。

