# Frontend Best Practise
前端知识手册，记录前端基础知识、网络、性能优化、主流框架的原理与实现（前端工程化内容见Fantastic-Frontend-Engineering）。
该目录相当于一个知识字典，在前端学习过程中每一个模块都需要了解，但并非所有模块的重要性都一样。对于已经有一定工作经验的前端er，推荐的技能储备顺序如下：

**作为中阶前端应该了解的东西：**
- ES6 面向对象的实现
- HTTP2.0协议
    - 跨域方法
    - 缓存的实现
- 浏览器的任务循环
- 网页渲染原理
  - 回流、重绘
  - DOM数量对网页性能的影响（为什么虚拟DOM会提升网页性能）
- 异步的实现

成为高阶前端一定要搞懂的东西：
- 前端工程化：webpack的打包与构建流程
- 服务器：node服务的部署、nginx的配置
- 使用typescript开发


## JS/浏览器
javascript指南：https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide
### 对象（构造函数、继承、原型链、ES6对象声明&实现、getter、setter、枚举、let/const/var）
- 设计模式概述
- 对象的声明
- 继承
- ES6类定义
- 遍历
### 变量及作用域（作用域、闭包、变量提升、垃圾回收）
### 模块化（AMD、CMD、requireJS、commonJS、ES6）
### 异步（promise、async/await、defer、generator）
- Generator（ES6）
### 函数（箭头函数、this）
### 内存机制
### 事件循环（定时器etc）
### 渲染原理（DOM/CSSOM、回流重绘）
### 同源策略

## 网络
### HTTP/2.0
- 状态码
- 缓存
### Websocket
### WebWorker
### 网络攻击

## CSS
### 浮动
### 垂直居中

## 动画
### requestAnimationFrame

## 性能优化
### 评判性能的标准
### 资源优化
- 字体优化
- 图片优化
- gzip
### 加载优化
- CodeSpliting
- TreeShaking
- 懒加载、延迟加载、按需加载
- 使用缓存
- 离线应用
### 渲染优化
- 骨架图
- 服务端渲染
- 节流与防抖

## 开发
### 热启动
### SourceMap

## React
### 生命周期
### Diff算法
### Redux状态存储
### 路由管理
### 跨组件通信
### 插件

## Vue
### 生命周期
### mixin
### 路由管理
### 跨组件通信
### 插件

## 工具
### Git
### Nginx

## 其他
### 字符集与编码
http://www.ruanyifeng.com/blog/2007/10/ascii_unicode_and_utf-8.html
### md5
