# 性能优化的“套路”
## 优秀的WebApp长什么样？
- github
- Facebook
- Airbnb
- google
## 网页从请求到渲染的全链路
- chrome dev tool performance
## 评判性能的指标
性能不只是加载时间的问题。对于一个应用，随时都有可能发生性能不佳的情况，不只限于加载期间。 应用无法迅速响应点按或点击操作，以及无法平滑滚动或产生动画效果的问题与加载缓慢一样，都会导致糟糕的用户体验。因此，我们不应该只使用一个指标来衡量加载，而应该衡量整个体验过程中可能影响用户对加载的感知的每个时刻。
- 是否发生？	导航是否成功启动？服务器是否有响应？
- 是否有用？	是否已渲染可以与用户互动的足够内容？
- 是否可用？	用户可以与页面交互，还是页面仍在忙于加载？
- 是否令人愉快？	交互是否顺畅而自然，没有滞后和卡顿？
### RAIL模型
![RAIL](https://developers.google.com/web/fundamentals/performance/images/rail.png?hl=zh-CN)
- Response：输入延迟时间（从点按到绘制）小于 100 毫秒。在100ms以内响应用户的操作，如果您未响应，操作与反应之间的连接就会中断。用户会注意到。对于需要超过 500 毫秒才能完成的操作，应始终提供反馈。
- Animation：动画的帧率大于60fps。用户可以感知每秒渲染 60 帧的平滑动画转场。也就是每帧 16 毫秒（包括浏览器将新帧绘制到屏幕上所需的时间），留给应用大约 10 毫秒的时间来生成一帧。
- Idle：主线程 JS 工作分成不大于 50 毫秒的块。
- Load：页面的首屏内容可以在 1000 毫秒内就绪。
### 白屏时间
- firstPaint 
- firstContentPaint
### 首屏时间
- firstMeaningfulPaint

### 可交互时间
![指标](https://developers.google.com/web/fundamentals/performance/images/perf-metrics-load-timeline.png?hl=zh-CN)

### 测试工具
> Before setting out on what might be a long and arduous journey, we would be wise to first determine whether we even need to make the trip (spoiler alert: we do). The first step, then, in improving our pages' speed is to measure current performance and analyze where and how we can make positive changes.
- Lighthouse


## 优化实操
### 资源优化
#### 字体优化 iconfont vs svg
- github在2016年就已经使用svg代替iconfont了。
- iconfont字体在异步加载时会使页面出现闪烁。
- iconfont图标在1x显示器上仍然会渲染模糊。
- 若使用base64编码内联iconfont，会增加字体体积到1.3倍。
#### 图片优化 webp
#### Gzip

### 加载优化
#### CodeSpliting
#### TreeShaking
#### 懒加载
#### 缓存
#### ServiceWorker

### 渲染优化
#### 骨架图
#### 服务端渲染

## 参考文献
- [Google Web Fundamentals - Performance：关于Web的最佳实践-性能篇](https://developers.google.com/web/fundamentals/performance/why-performance-matters/)
- [使用Lighthouse审查网络应用](https://developers.google.com/web/tools/lighthouse/)
- [以用户为中心的性能指标](https://developers.google.com/web/fundamentals/performance/user-centric-performance-metrics?hl=zh-CN)
- [Webpack-CodeSpliting](https://webpack.js.org/guides/code-splitting/)
- [SVG-vs-Iconfont](https://aotu.io/notes/2018/11/23/SVG_vs_Image_vs_iconfont/index.html)
