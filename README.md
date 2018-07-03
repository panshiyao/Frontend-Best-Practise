# Frontend Best Practise
一些值得记录的Bug，以及一些前端的最佳实践。以下是目录，期望对你有帮助。

## Basic JS
### 对象
#### [对象的继承与原型链](https://github.com/panshiyao/Frontend-Best-Practise/issues/1)
通过与java等基于类的面向对象语言进行对比，从而理解new与构造函数的存在。继而理解prototype原型的概念。
#### [对象的遍历：for..in/Object.keys/getOwnProperty](https://segmentfault.com/a/1190000007908692?_ea=1493826)
- for..in遍历原型链上的可枚举属性
- Object.keys遍历对象自有的可枚举属性
- getOwnProperty遍历自身的全部属性。
注：通过for..in结合getOwnProperty可以获取对象自身的可枚举属性。
#### [数据类型](https://segmentfault.com/a/1190000006752076)
- 基本数据类型：Number/Null/Undefined/Boolean/String/Symbol
- 引用数据类型：Object
- 基本数据类型用栈存储，引用数据类型用堆存储。
- 使用instanceOf判断一个引用类型的变量具体是不是某种类型的对象

### 变量
#### [变量提升](https://github.com/creeperyang/blog/issues/16)


### 数据操作
#### 字符串操作
- split(seperator,howmany) 将字符串分割为数组
- slice(start, end) 截取字符串（也可以截取数组）
#### 数组操作
- splice(index. delNum, addItem) 返回被删除对象的数组
- slice(start, end) 截取数组，不改变原来的数组

### 事件
#### Event Loop
- [setTimeout与setImmdiate](https://github.com/creeperyang/blog/issues/26)
- [帮助理解执行栈、模块和任务队列三个概念](https://mp.weixin.qq.com/s?__biz=MzI1MTE2NTE1Ng==&mid=2649515867&idx=1&sn=971a3e41da08ddf2da200d9d07af0fb0&chksm=f1efe7d0c6986ec688a746ece15f52c8df78bca37ca2609e75199f5c3fbbabd3fbcc00179885&scene=0&key=564c3e9811aee0abcc036cb111e6e7bdbe3938a8756b5bf3b98a1696b2f16c1e6e3a1b4af159d1ae1dd3e71ee5fae4e0b6655bd9f37cc81efb1174bf3ef39b43f874bc6a0482348422cc5245dfae917f&ascene=0&uin=MzIxNTY1NTU=&devicetype=iMac+MacBookPro11,1+OSX+OSX+10.12.1+build(16B2555)&version=12010210&nettype=WIFI&fontScale=100&pass_ticket=g24dIjS/70EF4QPCYwRMInMa218z6XagvevxLr5Mbzc=)

#### Promise & async
- [如何实现Promise串行调用](https://github.com/panshiyao/Frontend-Best-Practise/issues/2)

#### bind、apply、call的区别

### 移动端用户体验
#### 开启3D加速的方法
#### 重复点击问题

## NodeJS
#### 文件操作
- Node动态读取文件路径并创建路由（注意嵌套，需要用到栈）
#### 环境部署

## 工程化
#### 模块化
- CommonJS
- Requirejs
- import/export
#### Webpack
- [热更新的原理](https://www.jianshu.com/p/652fbae768bf)
- [loader与plugin的区别](http://www.imweb.io/topic/59324940b9b65af940bf58ae)
- Webpack打包生命周期
- CodeSpliting按需加载
- 提升webpack的打包速度
#### CSS Module
#### CSS预处理&后处理
- Less vs Sass
- [postcss的作用](https://segmentfault.com/a/1190000011595620)

## React
#### 生命周期
- 虚拟DOM是在生命周期的哪一步映射成真实DOM的
- setState都做什么操作？
#### 虚拟DOM
- 虚拟DOM为什么具有更高的性能
#### diff算法
- 为什么在循环的时候要设置key值
#### react-router
- React-Router如何记录路由状态
#### redux

## Network
#### 网页请求过程
#### HTTPS
- [HTTP](https://juejin.im/entry/5968708b6fb9a06bbb32d6c2)
- SSL
#### 跨域
- 浏览器为什么要进行跨域限制
- 跨域方法
#### 缓存
- 缓存相关的http头（Cache-control, Expires, E-tag,If-None-Match, Last-Modify这些都在什么时候用）✨
- http是无状态协议，怎么保存用户登录状态
#### Cookie
- cookie具有哪些属性
#### WebSocket

## CSS
#### 居中问题
- 实现垂直居中的方式
#### 多屏适配方案
- rem与px
#### Less vs Scss
#### flex
- flex实现流式布局
#### 盒模型
#### BFC


## Data Science
#### SVG
#### Canvas
#### D3.js


## Bug


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
  - MongoDB 亿量级数据，bson数据格式
  - [Redis 内存中存储，容易丢数据，可以做缓存](https://www.jianshu.com/p/249defad8592)
  - Cassandra 读取性能更好
- 非关系型数据库(Not-Only-Sql)：基于键值对、可扩展、无事务
  - MySQL 百万量级
  - Post-Gress-Q-L 比MySQL少了很多坑，jsonb数据格式
  - Hadoop 批量计算、数据挖掘
#### Linux
