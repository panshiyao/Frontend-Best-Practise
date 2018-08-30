# Frontend Best Practise
在开发和学习中积累前端最佳实践。

会列出目录和优先级，根据优先级不断整理及完善文章。

欢迎贡献及提意见。

love and peace小仙女❤️~

## Basic JS
#### [对象的继承与原型链](https://github.com/panshiyao/Frontend-Best-Practise/issues/1)
- 要掌握组合继承、原型式继承的方法
- 理解Object.create与new的不同
- 理解prototype/__proto__/ constructor的不同概念
- super的用法
- 属性的获取方式 for..in全部可枚举/hasOwnProperty判断自身属性/getOwnPropertyName自身全部/Object.keys自身可枚举（=for..in + hasOwnProperty）
#### [数据类型](https://segmentfault.com/a/1190000006752076)
- 基本数据类型：Number/Null/Undefined/Boolean/String/Symbol
- 引用数据类型：Object
- 基本数据类型用栈存储，引用数据类型用堆存储
- 使用instanceOf判断一个引用类型的变量具体是不是某种类型的对象
- 使用typeof判断当前对象的原始值类型

#### [变量提升](https://github.com/creeperyang/blog/issues/16)

#### 字符串操作
- split(seperator,howmany) 将字符串分割为数组
- slice(start, end) 截取字符串（也可以截取数组）
#### 数组操作
- splice(index. delNum, addItem) 返回被删除对象的数组
- slice(start, end) 截取数组，不改变原来的数组
#### 正则表达式

#### [Event Loop](https://segmentfault.com/a/1190000011198232)
- 浏览器内核
- JS执行栈
- GUI/Timer/IO/异步网络请求模块
- 异步队列
- NodeJS EventLoop

#### 异步操作
- Promise.all
- Promise.race
- async..await

#### this的指向
- bind/apply/call
- 箭头函数
- new
- function

### 模块化
- CommonJS
- import/export
- AMD(require.js)/CMD


## 浏览器与网络
#### [DNS/TCP/UDP](https://hit-alibaba.github.io/interview/basic/network/TCP.html)
- [网络请求对性能的影响：Keep-Alive，负载均衡](https://juejin.im/entry/5a22ba97f265da432153db5b)
- SYN(Synchronize Sequence Number)/ACK(Acknowledgement)
- FIN

#### HTTP/SSL
#### 跨域
- postMessage
- jsonp
- CORS（设置xhr的withCredential属性为true，可以使服务端的跨域响应set-Cookie有效。前提是服务端必须同样携带Access-Allow-Control-Credential属性）
#### Get与Post区别
- 请求数据限制
- 明文传输
- 历史记录保存参数
- 后退重新提交

#### 缓存
- 缓存相关的http头（Cache-control, Expires, E-tag,If-None-Match, Last-Modify这些都在什么时候用）✨
- disk cache, memory cache
#### Cookie
- cookie具有哪些属性
#### WebSocket

## CSS
#### 居中的方法
- flex
- table-cell多行文字垂直居中
- absolute + translate 50%（可以在不知道元素高度的情况下实现）
- inline-block + vertical-align: center + 伪类 height: 100%（vertical-align默认baseline基线对齐，父元素的基线是x的底边）// [为什么可以实现这个功能还需要探究](https://codepen.io/anon/pen/gjmoJx)
#### 🌹盒模型&BFC
#### position的属性值有哪些
- relative
- absolute
- fix
#### 自适应方案
- rem
- rem + initialScale
#### 🌹flex
- 流式布局
#### CSS预处理
- less
- sass
#### [后处理](https://segmentfault.com/a/1190000011595620)
- postcss
#### 回流与重绘
#### [动画](https://css-tricks.com/almanac/properties/t/transform/)
- scale（width/height/font-size/padding受影响）
- skew
- rotate
- translate

## React
#### 生命周期
- 虚拟DOM是在生命周期的哪一步映射成真实DOM的
#### [setState](https://segmentfault.com/a/1190000003969996)
- 异步与同步
#### 虚拟DOM
- 虚拟DOM为什么具有更高的性能
#### diff算法
- 为什么在循环的时候要设置key值
#### redux
- 为什么应用redux？
- redux-saga与redux-thunk有什么不同？

## Webpack
#### 生命周期
- 执行顺序：从下到上，从右到左
#### loader
- css-loader
- file-loader 处理字体图标
- url-loader 处理图片
- babel-loader ES6转义

#### plugin
- DefinePlugin 打包时定义全局常量
- CommonsChunkPlugin
- ExtractTextPlugin
- UglifyJsPlugin
- LoaderOptionsPlugin
- HtmlWebpackPlugin

#### [热更新的原理](https://www.jianshu.com/p/652fbae768bf)
#### contenthash与chunkhash的区别
#### CodeSpliting按需加载
#### 提升webpack的打包速度
#### webpack4



## NodeJS
#### 文件操作
- Node动态读取文件路径并创建路由（注意嵌套，需要用到栈）
#### 环境部署
- nodemon启动服务
- pm2进程管理



## 实现
#### 防抖＆节流
#### 深拷贝
#### 懒加载

## 算法
#### 栈与队列
#### 链表
- [链表的实现](https://segmentfault.com/a/1190000010345293)
- [反转链表](https://github.com/panshiyao/Frontend-Best-Practise/issues/5)
#### 二叉树
- [二叉树的实现](https://segmentfault.com/a/1190000010345441)
- 计算二叉树的深度
- 反转二叉树
- 二叉树排序
#### 递归
- [尾调用优化](https://github.com/panshiyao/Frontend-Best-Practise/issues/4)
- [斐波那契数列](https://juejin.im/post/5b2a5daa51882574b72f0bef)
- 求一个数的阶乘
- 一个人上台阶可以上一步也可以上两步，问他走10级台阶有多少种走法
- 二维数组的全排列组合（如：[[1,2],[3,4],[5,6]]）
- 汉诺塔
- 乌龟寻路径
#### 字符串与数组
- 判断一个字符串是不是回文字符串
- 实现反转字符串
- 实现反转数组
#### 查找
- [二分法查找](https://github.com/panshiyao/Frontend-Best-Practise/issues/7)
#### 排序


## 分享些好的面试博客
前端框架：https://abigaleyu.co/2018/06/28/interview-FE-frame/
HTTP：https://abigaleyu.co/2018/06/28/interview-http/
