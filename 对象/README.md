# 对象
## ES6 Class
### Class的内部实现（参考babel）
#### babel源码分析



*参考文献：*
- [!babel源码分析之一：AST生成](https://segmentfault.com/a/1190000019019014)
- [ES6 Class是如何实现的？](https://juejin.im/post/5b0abc85f265da0dbd7a648a)
#### ES6/ES5的继承及差别
- ES6是先生成父对象的实例，子类实例基于父类实例构建；ES5是先生成子类的构造函数，基于子类构造函数构建。







### Map类型/WeakMap类型/Set对象介绍
#### Map与Object的区别
- Object的键均为Strings类型，在Map里键可以是任意类型。
- Map的遍历遵循元素的插入顺序。
- map API 可以通过使其四个 API 方法共用两个数组(一个存放键,一个存放值)来实现。
- Object有原型，所以映射中有一些缺省的键。（可以用 map = Object.create(null) 回避）。
####  WeakMap
- WeakMap的键必须是对象类型
- WeakMap的键被弱保持，如果其键所指的对象没有被引用，则会被垃圾回收，因此无法对WeakMap的键进行枚举
#### Set与Array的对比
- Set对象是一组值的集合，这些值是不重复的，可以按照添加顺序来遍历。
- 数组中用于判断元素是否存在的indexOf 函数效率低下。
- Set对象允许根据值删除元素，而数组中必须使用基于下标的 splice 方法。
- 数组的indexOf方法无法找到NaN值。
- Set对象存储不重复的值，所以不需要手动处理包含重复值的情况。
#### WeakSet
- WeakSets中的值必须是对象类型，不可以是别的类型
- WeakSet的“weak”指的是，对集合中的对象，如果不存在其他引用，那么该对象将可被垃圾回收。于是不存在一个当前可用对象组成的列表，所以WeakSets不可枚举

### TypeScript的对象声明方法
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
### 常用的JS设计模式

