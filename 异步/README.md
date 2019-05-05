# 异步
## Generator
Generator 函数是 ES6 提供的一种异步编程解决方案，语法行为与传统函数完全不同。首先可以把它理解成，Generator 函数是一个[状态机](http://www.ruanyifeng.com/blog/2013/09/finite-state_machine_for_javascript.html)，封装了多个内部状态。
> 状态机：
> 是表示有限个状态以及在这些状态之间的转移和动作等行为的数学模型。可以理解为它由state/action/state钩子和action钩子组成。

执行 Generator 函数会返回一个遍历器对象，也就是说，Generator 函数除了状态机，还是一个遍历器对象生成函数。返回的遍历器对象，可以依次遍历 Generator 函数内部的每一个状态。

### Generator语法
在调用Generator函数时，会返回一个指向内部状态的指针对象（遍历器对象）。如下helloWorldGenerator函数有三个状态：hello，world 和 return 语句（结束执行）。对返回的遍历器调用next方法，指针会依次移向下一个状态，直到结束。
``` javascript
function* helloWorldGenerator() {
  yield 'hello';
  yield 'world';
  return 'ending';
}

var hw = helloWorldGenerator();

hw.next()
// { value: 'hello', done: false }

hw.next()
// { value: 'world', done: false }

hw.next()
// { value: 'ending', done: true }

hw.next()
// { value: undefined, done: true }
```
