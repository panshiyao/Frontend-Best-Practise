# Frontend Best Practise
结构化的解决前端开发中遇到的问题。包括但不限于「JS基础」「CSS实现」「算法与设计模式」「性能优化」「工具」，也会不定期对项目管理、沟通，以及自身的结构化提升进行思考。

目标：成为一个能准确快速定位问题、解决问题的「结构化」前端工程师。

p.s: 只有成型的文章才会发布到github上来，日常的学习总结在语雀上进行维护，更新较慢，但保证质量。

## JS基础
### [继承与原型链](https://github.com/panshiyao/Frontend-Best-Practise/issues/1)
**摘要：**
理解JS领域内的继承原理，掌握**组合继承、原型式继承**的具体实现方法。
对原型链有深刻理解，能够画出某对象直到Object->null的原型链，能够区分prototype/__proto__/constructor的不同()。
知道如何获取对象的可枚举、不可枚举、自身、原型链上的属性，及获取方法（for..in/hasOwnProperty/getOwnPropertyName/Object.keys）。

### [对象](https://segmentfault.com/a/1190000006752076)
**摘要：**
清楚基本数据类型和引用数据类型，二者存储方式的不同（堆存储、栈存储）。如何判断一个对象属于某种类型，instanceOf/typeOf的不同。能够区分使用bind/apply/call、箭头函数、new、function等不同语境下，this指向的不同。

### [变量提升](https://github.com/creeperyang/blog/issues/16)
**摘要：**
清楚变量提升原理，函数声明和函数表达式的变量提升的不同。ES6 let对于变量提升的新特性。

### 字符串操作
// TODO

### 数组操作
// TODO
### 正则表达式
// TODO

### [Event Loop](https://segmentfault.com/a/1190000011198232)
**摘要：**
理解浏览器内核的进程及线程规划。清楚一段异步代码的执行栈（事件循环机制），JS线程、GUI、Timer、IO、异步网络请求模块的具体表现。

### 异步
**摘要：**
清楚并能使用Promise、async...await进行异步开发。了解Promise.all/race特性。

### 模块化
**摘要：**
了解AMD/CMD的差别。了解CommonJS、ES6 module的差别。

## CSS
### 常用的居中方法
**摘要：**
了解常用居中方法及其兼容性。
### 盒模型
了解盒模型，BFC，及margin-top collapse，margin合并等特性。
### 自适应方案
理解移动设备**物理像素、实际像素、CSS像素**的不同。了解基于rem、initialScale等的不同自适应方案。
### 预处理与后处理
了解less/sass的不同特性，以及相应语法能实现的好玩的东西。理解postcss的作用，及常用的postcss插件。
### 页面渲染
了解页面渲染的原理，DOM树、CSS树的构建。清楚回流与重绘的影响。设置CSS的什么属性能使文档回流、重绘，以及解决办法。

## 网络
### 一个网络请求从发起到页面返回的过程
重点是了解这个过程各个阶段的占用时间，然后才能进行优化。
### TCP/IP
五层协议、三次握手四次挥手的实现。
### HTTPS
HTTP包的组成，SSL的实现原理。301、302、304等状态码代表的含义。
### Get与Post区别
### 跨域
跨域的常用方法，例如postMessage、jsonp、CORS（设置xhr的withCredential属性为true，可以使服务端的跨域响应set-Cookie有效。前提是服务端必须同样携带Access-Allow-Control-Credential属性）。
### 存储
与缓存相关的协议头、协商缓存、disk cache/memory cache的区别，缓存策略等。Cache具有的的属性。
### WebSocket


## 框架
### React
理解React的生命周期。清楚从setState开始，对比state、合并state、虚拟DOM到真实DOM的映射在生命周期中所处的位置。清楚虚拟DOM的原理，理解其为什么具有更高的性能。清楚并理解setSate异步的原因。了解diff算法，清楚为什么要在循环的时候设置key值。

### redux
使用redux能解决什么问题？清楚redux-thunk、redux-saga都解决了什么问题。

### Webpack
清楚webpack的执行顺序、生命周期。了解常用的loader、plugin。精通基于webpack的打包优化方案。


## 一些JS与CSS的实现搜集
### 防抖＆节流
### 深拷贝
### 懒加载

## 算法

## 分享些好的面试博客
前端框架：https://abigaleyu.co/2018/06/28/interview-FE-frame/

HTTP：https://abigaleyu.co/2018/06/28/interview-http/
