# Frontend Best Practise
前端笔面试知识整理。

我以前曾经反感面试，因为过程总经常会问到一些应用性很少的知识点，大多数人看面经只是为了面试而不是真正学到东西。后来经历了很多面试才想明白，和很多优秀的其他同行聊聊，可以了解到自己的知识体系中还有哪些坑需要完善。并且通过面试不是目的，只是一张入场券，它后面的优秀团队和企业文化、薪资才是你所要追求的。

本篇目录最后会整理成gitbook的形式，欢迎大家贡献文章和代码。

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
#### DNS/TCP/UDP
- 一次网络请求的耗费时间
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
#### 🌹居中的方法
- flex
- table-cell
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


## 计算机网络
#### 进程与线程
#### 容器（docker）
- [容器与虚拟机的区别](https://www.zhihu.com/question/48174633)
> 虚拟机更擅长于彻底隔离整个运行环境。例如，云服务提供商通常采用虚拟机技术隔离不同的用户。而Docker通常用于隔离不同的应用，例如前端，后端以及数据库。

> 虚拟机之间完全独立，独立的应用系统和操作系统，有当前虚拟机自己的操作系统内核；Docker将各种应用程序和他们所依赖的运行环境打包成标准的容器,容器之间隔离，容器之间共享操作系统内核

> 例如一个典型的Docker应用场景是当主机上的Docker实例属于单一用户的情况下，在保证安全的同时可以充分发挥Docker的技术优势。对于隔离要求较高的环境如混合用户环境，就可以使用服务器虚拟化技术。
- [docker部署方案](https://zhuanlan.zhihu.com/p/26517832)
#### 数据库（Redis、Postgres、Cassandra）
- [数据库选型](https://www.jianshu.com/p/46d01f6108ec)
- 关系型数据库：
  - MySQL 百万量级
  - Post-Gress-Q-L 比MySQL少了很多坑，jsonb数据格式
  - Hadoop 批量计算、数据挖掘 
- 非关系型数据库(Not-Only-Sql)：基于键值对、可扩展、无事务
  - MongoDB 亿量级数据，bson数据格式
  - [Redis 内存中存储，容易丢数据，可以做缓存](https://www.jianshu.com/p/249defad8592)
  - Cassandra 读取性能更好
#### Linux
