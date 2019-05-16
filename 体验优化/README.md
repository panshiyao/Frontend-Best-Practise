# 性能优化的“套路”

## 优秀的WebApp长什么样？
- github
- Facebook
- Airbnb
- google

## 测试工具
## 性能参数
## 资源优化
### 字体优化 iconfont vs svg
- github在2016年就已经使用svg代替iconfont了。
- iconfont字体在异步加载时会使页面出现闪烁。
- iconfont图标在1x显示器上仍然会渲染模糊。
- 若使用base64编码内联iconfont，会增加字体体积到1.3倍。
### 图片优化 
- webp
### Gzip

## 加载优化
- CodeSpliting
- TreeShaking
- lazy-load
- 缓存
- ServiceWorker

## 渲染优化
- 页面解析流程
  - CSS的解析不会阻塞DOM树解析，但是会阻塞DOM树渲染
  - CSS的解析会阻塞后面JS的解析
  - DOMContentLoaded会在所有js执行完毕后触发（HTML加载 + CSS加载/JS加载 + CSSOM/DOM解析 + JS解析）
  - DOMContentLoaded不会等待DOM渲染完毕
- 骨架图
- 服务端渲染
- 节流与防抖

## 参考文献
- [Google Web Fundamentals - Performance：关于Web的最佳实践-性能篇](https://developers.google.com/web/fundamentals/performance/why-performance-matters/)
- [使用Lighthouse审查网络应用](https://developers.google.com/web/tools/lighthouse/)
- [以用户为中心的性能指标](https://developers.google.com/web/fundamentals/performance/user-centric-performance-metrics?hl=zh-CN)
- [Webpack-CodeSpliting](https://webpack.js.org/guides/code-splitting/)
- [SVG-vs-Iconfont](https://aotu.io/notes/2018/11/23/SVG_vs_Image_vs_iconfont/index.html)
- [Iconfont字体生成原理及使用技巧](https://www.iconfont.cn/help/article_detail?article_id=1)
