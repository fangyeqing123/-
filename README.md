## 知识点(看完这个就有点底气了，加油)

### 基础知识

基础知识(这个很全，比较系统)：

1. 前端面试知识点目录整理：https://segmentfault.com/a/1190000018603454 

   带答案的：https://segmentfault.com/a/1190000019595050

2. 前端面试知识点https://www.jianshu.com/p/63e3911dfb93?tdsourcetag=s_pcqq_aiomsg

3. web前端面试题+ 必会知识点：https://www.jianshu.com/p/26cf596f22fa

4. 前端面试知识点整理：https://www.cnblogs.com/anqwjoe/p/10428136.html ，https://www.cnblogs.com/anqwjoe/p/10437658.html

5. 前端面试考点多？看这些文章就够了：https://yq.aliyun.com/articles/610229?spm=a2c4e.11153940.0.0.44075382JYyItD

我摘抄的一些：

1. 使用过哪些打包工具？webpack，gulp？
2. react开发中用到的es6的语法，比如箭头函数，跟普通函数有什么区别？(1、代码简洁，2、this指向)，那
3. 说说this指向有什么区别？
4. es6的promise有哪些方法？（回答的是then,catch，和函数resolve，reject一系列的关联和概念）,接着问还有其他的吗？（回答all,race），promise.race用的多吗？有什么含义？和promise.all的区别？
5. 写组件的时候，什么时候用class定义,什么时候用function定义?他们有什么区别？

CDN图片裁剪
上回说到的图片裁切可以这么用
https://gw.alicdn.com/imgextra/i3/O1CN011zREFGKJBslSIFQ_!!6000000006710-0-tps-1500-13628.jpg_800x0cy500i0.jpg
_800x0 -> 宽度等比缩放，最大 800
cy500i0 -> 垂直切割，每 500 pixels 切一张图， i0 表示第一张，i1 表示第二张，以此类推
###Promise 异步问题同步话解决方案
### 原理性能

1. diff算法是什么含义？有什么需要注意的？为什么diff算法能做到性能优化？概念是什么？

## web安全（附加扩展，拓展知识面）

常见的攻击：https://blog.csdn.net/echo_laodong/article/details/79254552

http请求头中Referer的含义和作用：https://blog.csdn.net/shenqueying/article/details/79426884、https://blog.csdn.net/kellywong/article/details/102406414

## 面试题（再刷刷题，稳了）

1. 2019前端面试总结: https://www.jianshu.com/p/458db9587772
2. 阿里前端2019内推四面技术面一面hr面经：https://www.nowcoder.com/discuss/95876
3. 2019前端面试系列——JS面试题：https://yq.aliyun.com/articles/711428
4. 2019阿里前端面试题：https://www.jianshu.com/p/f9520817856c

16.6ms是游览器高性能下一帧的时间
### VUE
![setState](https://gw.alicdn.com/imgextra/i4/O1CN01af5Ll41PgVJ8wRzVI_!!6000000001870-2-tps-2048-1266.png "setState")
![setState](https://gw.alicdn.com/imgextra/i1/O1CN01cHpOpK1aSGlyoQ1Ac_!!6000000003328-2-tps-1396-1162.png "setState")
![setState](https://gw.alicdn.com/imgextra/i1/O1CN01ZDIW1s1K85T0n4au7_!!6000000001118-2-tps-1442-984.png "setState")
	vue3的diff算法用的是最长递增子序列+双端预判
	vue2引入了vdom，使用的是snabbdom的代码，用的是双端预判
			比如 1，2，3，4     1，5，3，4
			react上来就干，计算diff
			vue2做的是双端预判 减少循环的次数 先判断开头的 这两个1 如果相等 就进行一个预判 然后判断2，5是否相等 如果不相等就判断尾部的4和4是不是相等，相等的话就进行一个预判然后再判断3，3是不是相等 在进行一个预判 最终比较2和5
			而Vue3在DOM-Diff过程中，根据 newIndexToOldIndexMap 新老节点索引列表找到最长稳定序列，通过最长增长子序列的算法比对，找出新旧节点中不需要移动的节点，原地复用，仅对需要移动或已经patch的节点进行操作，最大限度地提升替换效率，相比于Vue2版本是质的提升！
			web这个领域，列表都是插入数据，删除数据，倒序，打乱排序
	vue 响应式主动通知
	react 虚拟dom被动计算
	react就是解析了jsx => createElment 没有太多的标记
	
	the-super-tiny-compiler
	
![setState](https://gw.alicdn.com/imgextra/i3/O1CN01VmtBND1h4de0qwmL9_!!6000000004224-2-tps-1856-1376.png "setState")
![setState](https://gw.alicdn.com/imgextra/i3/O1CN01EckXfa20y2FgvHpdF_!!6000000006917-2-tps-1776-1312.png "setState")
![setState](https://gw.alicdn.com/imgextra/i4/O1CN01zWJUUR1kplFACRpJw_!!6000000004733-2-tps-2042-1198.png "setState")
![setState](https://gw.alicdn.com/imgextra/i2/O1CN01ZCfGTn1k1Nft7EkAN_!!6000000004623-2-tps-1886-1352.png "setState")
![setState](https://gw.alicdn.com/imgextra/i4/O1CN01hgIpuY1w4NezRI5zE_!!6000000006254-2-tps-1522-630.png "setState")
### react 的 Fiber
   Fiber就是所谓的时间切片
   1.任务可以切开 利用空闲时间计算
   2.diff可以中断
   			树形结构的diff递归很难中断 但是react做到了
   react把树形结构变成了链表
#### vue 两个怎么配合的？
	       根据组件划分，组件之间通过响应式主动通知，组件内部，通过VDOM计算 diff
		   
#### svelte 没有vdom，直接编译成js
#### vdom：用js的object 来描述dom节点，杀手锏：跨端
 react15  完整的diff算法是O(n^3)的时间复杂度，是不可接受的，react的diff只比较同级的可以优化时间复杂度到O(n)

#### Event Loop
		简单来说，js的事件循环，每次读取一个任务，然后执行这个任务，执行完再继续获取下一个，如果暂时没有任务，就暂停执行，等待下一个任务到来；如果在执行任务的过程中有新的任务到达，也不会中断现有任务的执行，而是添加到队列的尾部等待
		先执行同步任务 然后执行微任务然后执行宏任务
		常见宏任务：定时器、IO任务、requestAnimationFrame
		常见微任务：queueMicrotask、await、then、nextTick
### 性能优化知识点补充

1. webpack打包原理和优化：https://blog.csdn.net/kun5706947/article/details/78949038/
2. webpack面试题：https://www.jianshu.com/p/e80d38661358

### 下面分别是三个人的面试记录（硬核，想想就很激动）

### 一

```
  MVVM与MVC最大bai的区别就是：MVVM实现了View和Model的自动同步，也就是当Model的属性改变时，我们不用再自己手动操作Dom元素，来改变View的显示，而是改变属性后该属性对应View层显示会自动改变。非常的神奇~

MVC,MVP,MVVM是三种常见的前端架构模式(Architectural Pattern),它通过分离关注点来改进代码组织方式。不同于设计模式(Design Pattern),只是为了解决一类问题而总结出的抽象方法，一种架构模式往往能使用多种设计模式。

MVC模式是MVP,MVVM模式的基础，这两种模式更像是MVC模式的优化改良版,他们三个的MV即Model，view相同，不同的是MV之间的纽带部分。
\1. react16相比于react15的新特性

    “删除”了以下钩子（17版本中将真的删除）：
    componentWillMount()
    componentWillReceiveProps(nextProps, nextState)
    componentWillUpdate()
    新增了一下钩子：
    static getDerivedStateFromProps(nextProps, prevState)
    getSnapshotBeforeUpdate(prevProps, prevState)
    componentDidCatch(error, info)
    
    // 以下代码实现，更新name属性到state上；
    static getDerivedStateFromProps (nextProps, prevState) {
        return {
            name: nextProps.name
        };
    }
    // 上面的代码在以前版本中
    // 你可能会用以下这样做，虽然这样做看起来也没问题，用上面的方法更加安全，不会对this做误操作
    componentWillReceiveProps (nextProps) {
        if (this.state.name !== nextProps.name) {
            this.setState({
                name: nextProps.name
            });
        }
    }

     ref优化
     React16提供了一种优雅的方式createPortal，Portals 提供了一种很好的将子节点渲染到父组件以外的 DOM 节点的方式。
     React.createContext
     第三：性能方面的优化
            1.React.Fragments
            2.React.memo
            3.React.lazy & React.Suspense
                实现React的Code Spliting对React代码进行拆包，有效的减少一次性加载太多代码的问题。
                用法：
                const IconDemo = lazy(() => import('./icon'));
                <Suspense fallback={<div className="loading">Loading...</div>}>
                    <Route path="/" component={Home} exact />
                    <Route path="/icon" component={IconDemo} />
                </Suspense>
    hooks
react为什么要用Hook
	主要论述了React为啥要有Hook，总的来说是以下三个原因：

	Component非UI逻辑复用困难。
	组件的生命周期函数不适合side effect逻辑的管理。
	不友好的Class Component。
\2. redux connect原理?
	原理解析
	首先connect之所以会成功，是因为Provider组件：

	在原应用组件上包裹一层，使原来整个应用成为Provider的子组件
	接收Redux的store作为props，通过context对象传递给子孙组件上的connect
	那connect做了些什么呢？
	它真正连接 Redux 和 React，它包在我们的容器组件的外一层，它接收上面 Provider 提供的 store 里面的 state 和 dispatch，传给一个构造函数，返回一个对象，以属性形式传给我们的容器组件。

	connect是一个高阶函数，首先传入mapStateToProps、mapDispatchToProps，然后返回一个生产Component的函数(wrapWithConnect)，然后再将真正的Component作为参数传入wrapWithConnect，这样就生产出一个经过包裹的Connect组件，该组件具有如下特点:
	通过props.store获取祖先Component的store
	props包括stateProps、dispatchProps、parentProps,合并在一起得到nextState，作为props传给真正的Component
	componentDidMount时，添加事件this.store.subscribe(this.handleChange)，实现页面交互
	shouldComponentUpdate时判断是否有避免进行渲染，提升页面性能，并得到nextState
	componentWillUnmount时移除注册的事件this.handleChange


\3. 普通递归和尾递归的区别？

递归函数是自己调用自己的函数。

递归函数执行时会形成一个调用记录，当子一层函数代码执行完成之后父一层函数才会销毁调用记录，这就形成了调用栈。栈的叠加可能会产生内存溢出。
尾递归函数每子一层不再需要使用父一层的变量，所以父一层执行完毕就会销毁栈记录，避免了内存溢出节省了内存空间

\4. jsonp，fetch，ajax跨域请求的方式

答. 提到jsonp为动态插入js，服务端做回调；fetch是现代浏览器的特性，添加credentials: 'include'属性；ajax通常用cors的方式进行前后端约定配置

\5. vuex和redux的区别

        vuex的流向：
        view——>commit——>mutations——>state变化——>view变化（同步操作）
        view——>dispatch——>actions——>mutations——>state变化——>view变化（异步操作）

        redux的流向：
        view——>actions——>reducer——>state变化——>view变化（同步异步一样）
        有中间件的流向：view -> action -> middleware -> reducer -> store ，在这一环节可以做一些"副作用"的操作，如异步请求、打印日志等。
        Redux相对于Flux的改进：
        （1）把store和Dispatcher合并,结构更加简单清晰
        新增state角色，代表每个时间点store对应的值，对状态的管理更加明确
        Redux数据流的顺序是:
        （2）View调用store.dispatch发起Action->store接受Action(action传入reducer函数,reducer函数返回一个新的state)->通知store.subscribe订阅的重新渲染函数
        Vuex是专门为Vue设计的状态管理框架,
        同样基于Flux架构，并吸收了Redux的优点
        Vuex相对于Redux的不同点有:
        （1）改进了Redux中的Action和Reducer函数，以mutations变化函数取代Reducer，
        无需switch,只需在对应的mutation函数里改变state值即可
        （2）由于Vue自动重新渲染的特性，无需订阅重新渲染函数，只要生成新的State即可
        （3）Vuex数据流的顺序是:View调用store.commit提交对应的请求到Store中对应的mutation函数->store改变(vue检测到数据变化自动渲染)


\6. 会使用阿里系的nodeJS框架-eggJS，问其底层的洋葱圈模型实现原理是怎么样的？

答. 知道其中间件是用一个数组维护，同时使用next指针往下传递消息，但如何往回调用，讲不出

\7. 如何保障前端稳定性？

答. 第一、添加全局的window.onerror；第二、使用react的componentDidCatch。 问，给代码添加单元测试吗？答，会写

```

### 二

```
对react体系比较了解，对react组件优化、redux单向数据流、无状态组件/高阶组件等比较熟悉。有一定前端性能优化的经验，能够熟练使用在webview视角下的相关优化策略。
不清楚是不是发挥原因，面下来基础不够深，较一般。如promise.race不清楚什么意思，generator不知道怎么用，react生命周期不熟悉，
```

### 三

```
问了一些关于React的问题PureComponent，VDOM，能够回答出来。问了下实现bind ployfill和import与require区别都能回答，前端基础可以。整体看下来技术栈丰富，后续希望专攻前端领域技术。
1. React 16 有何特性？它们分别去解决了什么问题？Redux 框架核心解决的问题？

答. 对 React 16 新 Feature 的理解比较到位，但是没有考虑到 Fiber 相关的东西；Redux 的理解和掌握 ok

2. 对于高频操作 DOM 的情形，如何去优化？VirtualDOM 的思路？

答. Cahce 静态；Interval 合并；减少循环操作；O(n) 的 VDOM 有所了解；PureComponent

3. 笔试：实现优先级队列

答. http://alibole.alibaba-inc.com/static/alibole-manage/src/p/detail/index.html?codeId=52948
候选人快速实现了一个 O(1) / O(n) 的算法，后面再聊改进的时候，引导想到了二分查找 / 插入的思路降低复杂度，基本 ok
```



简单介绍一下之前的工作和用到的技术

重点不要放在公司内容上，主要放在技术栈上

###React的setState到底是同步还是异步的

![setState](https://gw.alicdn.com/imgextra/i1/O1CN01OIgA3w1Lj10iza3OU_!!6000000001334-2-tps-1614-660.png "setState")


+ [ ] React生命周期、shouldcomponentUpdate作用、高阶组件优缺点(https://www.jianshu.com/p/0aae7d4d9bc1)、组件通信的方式都能打上来

  1. ***componentWillMount\*****()** – 在渲染之前执行，在客户端和服务器端都会执行。
  2. ***componentDidMount\*****()** – 仅在第一次渲染后在客户端执行。
  3. ***componentWillReceiveProps\*****()** – 当从父类接收到 props 并且在调用另一个渲染器之前调用。
  4. ***shouldComponentUpdate\*****()** – 根据特定条件返回 true 或 false。如果你希望更新组件，请返回**true** 否则返回 **false**。默认情况下，它返回 false。
  5. ***componentWillUpdate\*****()** – 在 DOM 中进行渲染之前调用。
  6. ***componentDidUpdate\*****()** – 在渲染发生后立即调用。
  7. ***componentWillUnmount\*****()** – 从 DOM 卸载组件后调用。用于清理内存空间。

+ [ ] 路由提到了hash ，history(自己补一下：https://blog.csdn.net/leviscar/article/details/81878677)

  1. URL路由

  2：Hash路由

  大部分情况下，都可以使用URL路由，使用Hash路由是为了兼容一些老的浏览器

+ [ ] React 中 keys 的作用是什么？
	在开发过程中，我们需要保证某个元素的 key 在其同级元素中具有唯一性。
	在 React Diff 算法中 React 会借助元素的 Key 值来判断该元素是新近创建的还是被移动而来		的元素，从而减少不必要的元素重渲染；
	此外，React 还需要借助 Key 值来判断元素与本地状态的关联关系，因此我们绝不可忽视转换函数中 Key 的重要性。

+ [ ] react diff 原理（常考，大厂必考）

  + 把树形结构按照层级分解，只比较同级元素。
  + 给列表结构的每个单元添加唯一的 key 属性，方便比较。
  + React 只会匹配相同 class 的 component（这里面的 class 指的是组件的名字）
  + 合并操作，调用 component 的 setState 方法的时候, React 将其标记为 dirty.到每一个事件循环结束, React 检查所有标记 dirty 的 component 重新绘制.
  + 选择性子树渲染。开发人员可以重写 shouldComponentUpdate 提高 diff 的性能。

+ [ ] 为什么虚拟 dom 会提高性能?(必考)

  虚拟 dom 相当于在 js 和真实 dom 中间加了一个缓存，利用 dom diff 算法避免了没有必要的 dom 操作，从而提高性能。

  用 JavaScript 对象结构表示 DOM 树的结构；然后用这个树构建一个真正的 DOM 树，插到文档当中当状态变更的时候，重新构造一棵新的对象树。然后用新的树和旧的树进行比较，记录两棵树差异把 2 所记录的差异应用到步骤 1 所构建的真正的 DOM 树上，视图就更新了。

+ [ ]  shouldComponentUpdate 是做什么的，（react 性能优化是哪个周期函数？）

  shouldComponentUpdate 这个方法用来判断是否需要调用 render 方法重新描绘 dom。因为 dom 的描绘非常消耗性能，如果我们能在 shouldComponentUpdate 方法中能够写出更优化的 dom diff 算法，可以极大的提高性能。

  参考react 性能优化-sf

+ [ ] 展示组件(Presentational component)和容器组件(Container component)之间有何不同

  + 展示组件关心组件看起来是什么。展示专门通过 props 接受数据和回调，并且几乎不会有自身的状态，但当展示组件拥有自身的状态时，通常也只关心 UI 状态而不是数据的状态。
  + 容器组件则更关心组件是如何运作的。容器组件会为展示组件或者其它容器组件提供数据和行为(behavior)，它们会调用 Flux actions，并将其作为回调提供给展示组件。容器组件经常是有状态的，因为它们是(其它组件的)数据源。

+ [ ] 为什么建议传递给 setState 的参数是一个 callback 而不是一个对象

  因为 this.props 和 this.state 的更新可能是异步的，不能依赖它们的值去计算下一个 state

+ [ ] React 中有三种构建组件的方式

  React.createClass()、ES6 class 和无状态函数。

+ [ ] 简述 flux 思想，了解 redux 么，说一下 redux 把，redux 有什么缺点

  Flux 的最大特点，就是数据的"单向流动"。

  1. 用户访问 View
  2. View 发出用户的 Action
  3. Dispatcher 收到 Action，要求 Store 进行相应的更新
  4. Store 更新后，发出一个"change"事件
  5. View 收到"change"事件后，更新页面

  + redux 是一个应用数据流框架，主要是解决了组件间状态共享的问题，原理是集中式管理，主要有三个核心方法，action，store，reducer，工作流程是 view 调用 store 的 dispatch 接收 action 传入 store，reducer 进行 state 操作，view 通过 store 提供的 getState 获取最新的数据，flux 也是用来进行数据操作的，有四个组成部分 action，dispatch，view，store，工作流程是 view 发出一个 action，派发器接收 action，让 store 进行数据更新，更新完成以后 store 发出 change，view 接受 change 更新视图。Redux 和 Flux 很像。主要区别在于 Flux 有多个可以改变应用状态的 store，在 Flux 中 dispatcher 被用来传递数据到注册的回调事件，但是在 redux 中只能定义一个可更新状态的 store，redux 把 store 和 Dispatcher 合并,结构更加简单清晰
  + 新增 state,对状态的管理更加明确，通过 redux，流程更加规范了，减少手动编码量，提高了编码效率，同时缺点时当数据更新时有时候组件不需要，但是也要重新绘制，有些影响效率。一般情况下，我们在构建多交互，多数据流的复杂项目应用时才会使用它们

  + 一个组件所需要的数据，必须由父组件传过来，而不能像 flux 中直接从 store 取。
  + 当一个组件相关数据更新时，即使父组件不需要用到这个组件，父组件还是会重新 render，可能会有效率影响，或者需要写复杂的 shouldComponentUpdate 进行判断。

+ [ ] 设计模式有一定的经验：能说出单例模式、工厂模式、装饰器模式、观察者模式在React项目中的具体使用例子，并说出了工厂和装饰的区别。对事件的设计有自己的想法，并且考虑的比较全面



## 阿里巴巴：

+ webpack的了解
+ 为什么使用 gulp 不用 webpack？（gulp与webpack区别）
+ gulp和webpack的区别？(模块与流，CommonChunks抽出公共模块)
+ Webpack 的工作原理



## 百度：

+ webpack路由懒加载
+ 介绍一下webpack和gulp，以及项目中具体的使用
+ 除了Webpack
+ 你还知道哪些打包工具



## 百度外卖：

+ Webpack 常用的插件？
+ webpack工具和node了解哪些?node各个模块的底层原理?



## 腾讯：

+ webpack底层实现原理
+ gulp与webpack区别
+ webpack是用来干嘛的
+ 有没有用过grunt gulp webpack这些，前端工程化的意义
+ Webpack 怎么提取公共模块



## 问题列表

1. webpack与grunt、gulp的不同？
2. 与webpack类似的工具还有哪些？谈谈你为什么最终选择（或放弃）使用webpack？
3. 有哪些常见的Loader？他们是解决什么问题的？
4. 有哪些常见的Plugin？他们是解决什么问题的？
5. Loader和Plugin的不同？
6. webpack的构建流程是什么?从读取配置到输出文件这个过程尽量说全
7. 是否写过Loader和Plugin？描述一下编写loader或plugin的思路？
8. webpack的热更新是如何做到的？说明其原理？
9. 如何利用webpack来优化前端性能？（提高性能和体验）
10. 如何提高webpack的构建速度？
11. 怎么配置单页应用？怎么配置多页应用？
12. npm打包时需要注意哪些？如何利用webpack来更好的构建？
13. 如何在vue项目中实现按需加载？

------

## 1. webpack与grunt、gulp的不同？

三者都是前端构建工具，grunt和gulp在早期比较流行，现在webpack相对来说比较主流，不过一些轻量化的任务还是会用gulp来处理，比如单独打包CSS文件等。

[grunt](https://link.zhihu.com/?target=https%3A//www.gruntjs.net/)和[gulp](https://link.zhihu.com/?target=https%3A//www.gulpjs.com.cn/)是基于任务和流（Task、Stream）的。类似jQuery，找到一个（或一类）文件，对其做一系列链式操作，更新流上的数据， 整条链式操作构成了一个任务，多个任务就构成了整个web的构建流程。

webpack是基于入口的。webpack会自动地递归解析入口所需要加载的所有资源文件，然后用不同的Loader来处理不同的文件，用Plugin来扩展webpack功能。

所以总结一下：

+ 从构建思路来说

```text
gulp和grunt需要开发者将整个前端构建过程拆分成多个`Task`，并合理控制所有`Task`的调用关系
webpack需要开发者找到入口，并需要清楚对于不同的资源应该使用什么Loader做何种解析和加工
```

+ 对于知识背景来说
  gulp更像后端开发者的思路，需要对于整个流程了如指掌 webpack更倾向于前端开发者的思路

------

## 2. 与webpack类似的工具还有哪些？谈谈你为什么最终选择（或放弃）使用webpack？

同样是基于入口的打包工具还有以下几个主流的：

+ webpack
+ [rollup](https://link.zhihu.com/?target=https%3A//rollupjs.org/)
+ [parcel](https://link.zhihu.com/?target=https%3A//parceljs.org/)

**从应用场景上来看：**

+ webpack适用于大型复杂的前端站点构建
+ rollup适用于基础库的打包，如vue、react
+ parcel适用于简单的实验性项目，他可以满足低门槛的快速看到效果

> 由于parcel在打包过程中给出的调试信息十分有限，所以一旦打包出错难以调试，所以不建议复杂的项目使用parcel

------

## 3.有哪些常见的Loader？他们是解决什么问题的？

+ file-loader：把文件输出到一个文件夹中，在代码中通过相对 URL 去引用输出的文件
+ url-loader：和 file-loader 类似，但是能在文件很小的情况下以 base64 的方式把文件内容注入到代码中去
+ source-map-loader：加载额外的 Source Map 文件，以方便断点调试
+ image-loader：加载并且压缩图片文件
+ babel-loader：把 ES6 转换成 ES5
+ css-loader：加载 CSS，支持模块化、压缩、文件导入等特性
+ style-loader：把 CSS 代码注入到 JavaScript 中，通过 DOM 操作去加载 CSS。
+ eslint-loader：通过 ESLint 检查 JavaScript 代码

------

## 4.有哪些常见的Plugin？他们是解决什么问题的？

+ define-plugin：定义环境变量
+ commons-chunk-plugin：提取公共代码
+ uglifyjs-webpack-plugin：通过`UglifyES`压缩`ES6`代码

------

## 5.Loader和Plugin的不同？

**不同的作用**

+ **Loader**直译为"加载器"。Webpack将一切文件视为模块，但是webpack原生是只能解析js文件，如果想将其他文件也打包的话，就会用到`loader`。 所以Loader的作用是让webpack拥有了加载和解析*非JavaScript文件*的能力。
+ **Plugin**直译为"插件"。Plugin可以扩展webpack的功能，让webpack具有更多的灵活性。 在 Webpack 运行的生命周期中会广播出许多事件，Plugin 可以监听这些事件，在合适的时机通过 Webpack 提供的 API 改变输出结果。

**不同的用法**

+ **Loader**在`module.rules`中配置，也就是说他作为模块的解析规则而存在。 类型为数组，每一项都是一个`Object`，里面描述了对于什么类型的文件（`test`），使用什么加载(`loader`)和使用的参数（`options`）
+ **Plugin**在`plugins`中单独配置。 类型为数组，每一项是一个`plugin`的实例，参数都通过构造函数传入。

------

## 6.webpack的构建流程是什么?从读取配置到输出文件这个过程尽量说全

Webpack 的运行流程是一个串行的过程，从启动到结束会依次执行以下流程：

1. 初始化参数：从配置文件和 Shell 语句中读取与合并参数，得出最终的参数；
2. 开始编译：用上一步得到的参数初始化 Compiler 对象，加载所有配置的插件，执行对象的 run 方法开始执行编译；
3. 确定入口：根据配置中的 entry 找出所有的入口文件；
4. 编译模块：从入口文件出发，调用所有配置的 Loader 对模块进行翻译，再找出该模块依赖的模块，再递归本步骤直到所有入口依赖的文件都经过了本步骤的处理；
5. 完成模块编译：在经过第4步使用 Loader 翻译完所有模块后，得到了每个模块被翻译后的最终内容以及它们之间的依赖关系；
6. 输出资源：根据入口和模块之间的依赖关系，组装成一个个包含多个模块的 Chunk，再把每个 Chunk 转换成一个单独的文件加入到输出列表，这步是可以修改输出内容的最后机会；
7. 输出完成：在确定好输出内容后，根据配置确定输出的路径和文件名，把文件内容写入到文件系统。

在以上过程中，Webpack 会在特定的时间点广播出特定的事件，插件在监听到感兴趣的事件后会执行特定的逻辑，并且插件可以调用 Webpack 提供的 API 改变 Webpack 的运行结果。

------

## 7.是否写过Loader和Plugin？描述一下编写loader或plugin的思路？

Loader像一个"翻译官"把读到的源文件内容转义成新的文件内容，并且每个Loader通过链式操作，将源文件一步步翻译成想要的样子。

编写Loader时要遵循单一原则，每个Loader只做一种"转义"工作。 每个Loader的拿到的是源文件内容（`source`），可以通过返回值的方式将处理后的内容输出，也可以调用`this.callback()`方法，将内容返回给webpack。 还可以通过 `this.async()`生成一个`callback`函数，再用这个callback将处理后的内容输出出去。 此外`webpack`还为开发者准备了开发loader的工具函数集——`loader-utils`。

相对于Loader而言，Plugin的编写就灵活了许多。 webpack在运行的生命周期中会广播出许多事件，Plugin 可以监听这些事件，在合适的时机通过 Webpack 提供的 API 改变输出结果。

------

## 8.webpack的热更新是如何做到的？说明其原理？

webpack的热更新又称热替换（Hot Module Replacement），缩写为HMR。 这个机制可以做到不用刷新浏览器而将新变更的模块替换掉旧的模块。

**原理：**

![img](assets/v2-40ff7f2e518e4b4695777d5160a3406e_hd.jpg)图片来自饿了么前端@知乎专栏

首先要知道server端和client端都做了处理工作

1. 第一步，在 webpack 的 watch 模式下，文件系统中某一个文件发生修改，webpack 监听到文件变化，根据配置文件对模块重新编译打包，并将打包后的代码通过简单的 JavaScript 对象保存在内存中。
2. 第二步是 webpack-dev-server 和 webpack 之间的接口交互，而在这一步，主要是 dev-server 的中间件 webpack-dev-middleware 和 webpack 之间的交互，webpack-dev-middleware 调用 webpack 暴露的 API对代码变化进行监控，并且告诉 webpack，将代码打包到内存中。
3. 第三步是 webpack-dev-server 对文件变化的一个监控，这一步不同于第一步，并不是监控代码变化重新打包。当我们在配置文件中配置了devServer.watchContentBase 为 true 的时候，Server 会监听这些配置文件夹中静态文件的变化，变化后会通知浏览器端对应用进行 live reload。注意，这儿是浏览器刷新，和 HMR 是两个概念。
4. 第四步也是 webpack-dev-server 代码的工作，该步骤主要是通过 sockjs（webpack-dev-server 的依赖）在浏览器端和服务端之间建立一个 websocket 长连接，将 webpack 编译打包的各个阶段的状态信息告知浏览器端，同时也包括第三步中 Server 监听静态文件变化的信息。浏览器端根据这些 socket 消息进行不同的操作。当然服务端传递的最主要信息还是新模块的 hash 值，后面的步骤根据这一 hash 值来进行模块热替换。
5. webpack-dev-server/client 端并不能够请求更新的代码，也不会执行热更模块操作，而把这些工作又交回给了 webpack，webpack/hot/dev-server 的工作就是根据 webpack-dev-server/client 传给它的信息以及 dev-server 的配置决定是刷新浏览器呢还是进行模块热更新。当然如果仅仅是刷新浏览器，也就没有后面那些步骤了。
6. HotModuleReplacement.runtime 是客户端 HMR 的中枢，它接收到上一步传递给他的新模块的 hash 值，它通过 JsonpMainTemplate.runtime 向 server 端发送 Ajax 请求，服务端返回一个 json，该 json 包含了所有要更新的模块的 hash 值，获取到更新列表后，该模块再次通过 jsonp 请求，获取到最新的模块代码。这就是上图中 7、8、9 步骤。
7. 而第 10 步是决定 HMR 成功与否的关键步骤，在该步骤中，HotModulePlugin 将会对新旧模块进行对比，决定是否更新模块，在决定更新模块后，检查模块之间的依赖关系，更新模块的同时更新模块间的依赖引用。
8. 最后一步，当 HMR 失败后，回退到 live reload 操作，也就是进行浏览器刷新来获取最新打包代码。

------

## 9.如何利用webpack来优化前端性能？（提高性能和体验）
https://www.cnblogs.com/imwtr/p/7801973.html
用webpack优化前端性能是指优化webpack的输出结果，让打包的最终结果在浏览器运行快速高效。

+ 压缩代码。删除多余的代码、注释、简化代码的写法等等方式。可以利用webpack的`UglifyJsPlugin`和`ParallelUglifyPlugin`来压缩JS文件， 利用`cssnano`（css-loader?minimize）来压缩css
+ 使用fast-sass-loader代替sass-loader
 fast-sass-loader可以并行地处理sass,在提交构建之前会先组织好代码，速度也会快一些
+ babel-loader开启缓存
 babel-loader在执行的时候，可能会产生一些运行期间重复的公共文件，造成代码体积大冗	  余，同时也会减慢编译效率 可以加上cacheDirectory参数或使用 transform-runtime 插件试试
+ 使用HappyPack来加速构建
+ 利用CDN加速。在构建过程中，将引用的静态资源路径修改为CDN上对应的路径。可以利用webpack对于`output`参数和各loader的`publicPath`参数来修改资源路径
+ 删除死代码（Tree Shaking）。将代码中永远不会走到的片段删除掉。可以通过在启动webpack时追加参数`--optimize-minimize`来实现
+ 提取公共代码。

------

## 10.如何提高webpack的构建速度？

1. 多入口情况下，使用`CommonsChunkPlugin`来提取公共代码
2. 通过`externals`配置来提取常用库
3. 利用`DllPlugin`和`DllReferencePlugin`预编译资源模块 通过`DllPlugin`来对那些我们引用但是绝对不会修改的npm包来进行预编译，再通过`DllReferencePlugin`将预编译的模块加载进来。
4. 使用`Happypack` 实现多线程加速编译
5. 使用`webpack-uglify-parallel`来提升`uglifyPlugin`的压缩速度。 原理上`webpack-uglify-parallel`采用了多核并行压缩来提升压缩速度
6. 使用`Tree-shaking`和`Scope Hoisting`来剔除多余代码

------

## 11.怎么配置单页应用？怎么配置多页应用？

单页应用可以理解为webpack的标准模式，直接在`entry`中指定单页应用的入口即可，这里不再赘述

多页应用的话，可以使用webpack的 `AutoWebPlugin`来完成简单自动化的构建，但是前提是项目的目录结构必须遵守他预设的规范。 多页应用中要注意的是：

+ 每个页面都有公共的代码，可以将这些代码抽离出来，避免重复的加载。比如，每个页面都引用了同一套css样式表
+ 随着业务的不断扩展，页面可能会不断的追加，所以一定要让入口的配置足够灵活，避免每次添加新页面还需要修改构建配置

------

## 12.npm打包时需要注意哪些？如何利用webpack来更好的构建？

`Npm`是目前最大的 JavaScript 模块仓库，里面有来自全世界开发者上传的可复用模块。你可能只是JS模块的使用者，但是有些情况你也会去选择上传自己开发的模块。 关于NPM模块上传的方法可以去[官网](https://link.zhihu.com/?target=https%3A//docs.npmjs.com/)上进行学习，这里只讲解如何利用webpack来构建。

NPM模块需要注意以下问题：

1. 要支持CommonJS模块化规范，所以要求打包后的最后结果也遵守该规则。
2. Npm模块使用者的环境是不确定的，很有可能并不支持ES6，所以打包的最后结果应该是采用ES5编写的。并且如果ES5是经过转换的，请最好连同SourceMap一同上传。
3. Npm包大小应该是尽量小（有些仓库会限制包大小）
4. 发布的模块不能将依赖的模块也一同打包，应该让用户选择性的去自行安装。这样可以避免模块应用者再次打包时出现底层模块被重复打包的情况。
5. UI组件类的模块应该将依赖的其它资源文件，例如`.css`文件也需要包含在发布的模块里。



基于以上需要注意的问题，我们可以对于webpack配置做以下扩展和优化：

1. CommonJS模块化规范的解决方案： 设置`output.libraryTarget='commonjs2'`使输出的代码符合CommonJS2 模块化规范，以供给其它模块导入使用
2. 输出ES5代码的解决方案：使用`babel-loader`把 ES6 代码转换成 ES5 的代码。再通过开启`devtool: 'source-map'`输出SourceMap以发布调试。
3. Npm包大小尽量小的解决方案：Babel 在把 ES6 代码转换成 ES5 代码时会注入一些辅助函数，最终导致每个输出的文件中都包含这段辅助函数的代码，造成了代码的冗余。解决方法是修改`.babelrc`文件，为其加入`transform-runtime`插件
4. 不能将依赖模块打包到NPM模块中的解决方案：使用`externals`配置项来告诉webpack哪些模块不需要打包。
5. 对于依赖的资源文件打包的解决方案：通过`css-loader`和`extract-text-webpack-plugin`来实现，配置如下：

```js
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  module: {
    rules: [
      {
        // 增加对 CSS 文件的支持
        test: /\.css/,
        // 提取出 Chunk 中的 CSS 代码到单独的文件中
        use: ExtractTextPlugin.extract({
          use: ['css-loader']
        }),
      },
    ]
  },
  plugins: [
    new ExtractTextPlugin({
      // 输出的 CSS 文件名称
      filename: 'index.css',
    }),
  ],
};
```

------

## 13.如何在vue项目中实现按需加载？

**Vue UI组件库的按需加载** 为了快速开发前端项目，经常会引入现成的UI组件库如ElementUI、iView等，但是他们的体积和他们所提供的功能一样，是很庞大的。 而通常情况下，我们仅仅需要少量的几个组件就足够了，但是我们却将庞大的组件库打包到我们的源码中，造成了不必要的开销。

不过很多组件库已经提供了现成的解决方案，如Element出品的`babel-plugin-component`和AntDesign出品的`babel-plugin-import` 安装以上插件后，在`.babelrc`配置中或`babel-loader`的参数中进行设置，即可实现组件按需加载了。

```js
{
  "presets": [["es2015", { "modules": false }]],
  "plugins": [
    [
      "component",
      {
        "libraryName": "element-ui",
        "styleLibraryName": "theme-chalk"
      }
    ]
  ]
}
```

**单页应用的按需加载** 现在很多前端项目都是通过单页应用的方式开发的，但是随着业务的不断扩展，会面临一个严峻的问题——首次加载的代码量会越来越多，影响用户的体验。

通过`import(*)`语句来控制加载时机，webpack内置了对于`import(*)`的解析，会将`import(*)`中引入的模块作为一个新的入口在生成一个chunk。 当代码执行到`import(*)`语句时，会去加载Chunk对应生成的文件。`import()`会返回一个Promise对象，所以为了让浏览器支持，需要事先注入`Promise polyfill`



# 1月9号

vue相关：

+ [ ] vue中computed的原理(非常重要)

  具体：https://www.jianshu.com/p/909bc773ffc3

+ [ ] Vue 的数据双向绑定实现

​      具体见： https://www.cnblogs.com/chenhuichao/p/10818396.html

+ [ ] Vue 框架知识 1.生命周期说不清, 不确定各阶段该做什么 2. 组件通讯方式没问题

  生命周期：https://www.cnblogs.com/goloving/p/8617785.html

  组件通讯方式：https://www.cnblogs.com/xuniannian/p/11351030.html

+ [ ] 用 Vue 如何实现一个组件监控窗口的大小变化

  答. mounted 加 event listener，willDestroy 注销 event listener，event handler 中修改 data，template 里引用相应的 data 渲染。

  具体见：https://blog.csdn.net/guoxuhan/article/details/79231741

+ [ ] react vue 实现数据驱动的原理

  答. vue 答得还不错 说了实现原理；react dom diff 算法引导下说了差不多，具体细节说的不是很清楚

+ [ ] vue数组的变化是怎么做到监听的

  答. 说看过源码。说到了setter/getter。但是vue中数组并不是这么监听的，实际情况应当是覆盖了数组的push等方法，在自定义的push等方法中进行了监听。

  具体：https://blog.csdn.net/XuM222222/article/details/99950241

ES6相关：

+ [x] Es6箭头函数中this意义，和普通函数的区别

​      具体看 https://www.jianshu.com/p/afcfeed968a0

+ [ ] Promise 相关问题：1. 异常捕获没太关注 2. Promise.all 无法实现 3. Promise.race

​     具体看：https://segmentfault.com/a/1190000020034361

+ [x] ES6 中 let, const 分别是什么含义, 如何选择使用的?

  答. const 说的出是固定引用, let 是实现块级作用域. https://www.cnblogs.com/sunala/p/9878123.html

+ [ ] es6代码如何在浏览器里顺利运行

  答. babel + polyfill

js相关：

+ [x] js的并发请求和执行情况defer和async的区别?
  `defer`是“渲染完再执行”，`async`是“下载完就执行”。另外，如果有多个`defer`脚本，会按照它们在页面出现的顺序加载，而多个`async`脚本是不能保证加载顺序的。

  https://segmentfault.com/q/1010000000640869

+ [x] 数组的常用方法（push/slice/indexOf/map/filter/reduce...）

+ [x] 什么是事件委托(delegate)? 如何实现事件委托, 原理是什么?

  答. 事件执行的顺序说的对, 但是 event 的 target, currentTarget 区分不清

  具体见：https://blog.csdn.net/u013243347/article/details/52613272

+ [x] 如何阻止事件冒泡？
  A: 一般浏览器使用stopPropagation，IE使用cancelBubble

+ [x] 变量声明的方式，区别是什么

  答. var，const，let的区别 1. var 存在变量提升，可以后声明 2. const 静态，不可修改 3. let 块级作用域

+ [x] js apply call bind 区别，怎么自己实现 bind

  答. 都答上来了，还不错

  具体见：https://www.cnblogs.com/zhonghonglin1997/p/10395342.html

  自己实现bind：https://blog.csdn.net/lovefengruoqing/article/details/80186401

+ [x]  什么是闭包？举例说明，闭包的优缺点

  答. 回答的很清楚，闭包的特性以及使用场景，以及闭包带来的优缺点，实际的例子讲了闭包的用法，模拟作用域，解决全局污染

  具体见：https://www.cnblogs.com/cxying93/p/6103375.html

+ [x] this 如何工作，代表什么

  答. this代表当前的执行环境，特点在代码执行期间落地，this代表的是父作用域。使用的时候指向用示例讲的很清楚。以及改变this的方法，call等方法的区别也很清楚，箭头函数的this指向问题，声明是指定this的目标

+ [x] localstorage最大存储空间是多少？如果超过了会怎么样呢？

  答. cookie和storage解释的很清楚，对于cookie和storage的使用也清楚，分别讲述了在h5下使用cookie和storage的存储方式和特性。localstorage和sessionstorage解释的也很清楚。storage同域共享。

  具体见：https://blog.csdn.net/weixin_42614080/article/details/90706499

+ [x] const定义的数组可以使用push方法修改吗。

  答. const是一个引用的内存地址，所以可以修改

+ [x] import、require区别

  答. 规范的问题，具体的回答不上

  具体见：https://blog.csdn.net/weixin_38173313/article/details/81205395

react相关(非常重要)：

+ [x] react 16 有用过哪些新特性？

  答. 新的生命周期、hooks，只了解过，没实际用过，项目中用的 15 的版本。问了下用了多久 react  回答说半年左右 

  具体见：https://zhuanlan.zhihu.com/p/51599829

+ [x] diff算法一定要掌握

+ [x]  react 解决逻辑复用一般怎么处理

  答. 原先说了封装组件，后面引导下说了高阶组件，项目中用过，后面引导问了下 hooks 也说了下可以解决，但是没用过

+ [x] 高阶组件

跨越&安全相关：

+ [ ] 同源策略相关问题， 停留在运用上, 但是不清楚 JSONP 实现的原理, cookies 共享也不了解.

  jsonP原理：https://www.cnblogs.com/Nyan-Workflow-FC/p/11221224.html

  cookies共享：https://www.oschina.net/question/2292604_2175958?sort=time

+ [ ] 如何监控jsonp请求成功还是失败

  答. try catch

+ [ ] 为什么 HTTPS 比 HTTP 协议更安全

  答. 证书验证，防范恶意第三方拦截数据，防范中间人攻击。能讲出大概，但具体的原理讲不太清楚

  具体见：https://www.cnblogs.com/fundebug/p/10773136.html

+ [ ] http1.0和http2.0的区别和对前端的改变

  答.  二进制传输；解析速度快；对前端比较好的是可以多路复用；特别讲到了丢包的问题会带来的问题；header压缩；服务端推送

  具体见：https://www.cnblogs.com/heluan/p/8620312.html

样式相关:

+ [x] 前端布局方式

  答.  float布局，尝试参考蚂蚁的ant-d mobile的方法去实现自己的组件库。会去兼容各种flex的问题。bfc的问题大概知道，盒模型清楚。

+ [x] 相对定位相对什么定位

  答. 不知道

  具体见：https://www.cnblogs.com/gchlcc/p/6295199.html



还有一个hybird非常重要

二面：

+ [ ]  分享两个觉得有技术挑战的case

​     遇到的困难时什么？为什么用这个方案解决，其他的有什么不好

+ [ ] 对于换工作的考虑主要有哪些？



模拟面试：

项目问题：

项目用户有多少日活？

哪个项目是你觉得做的比较好的？业务是什么样子的？你们的运营的主要业务诉求是什么？业务埋点数据效果监控保障

回答：美图美妆后台系统

vue：

1. new vue这个过程大概做了一些什么事情？

react：

1. render做了一些什么事情？提示：怎么渲染的dom树的，虚拟dom和diff算法。再次提示：怎么更新到dom树的，怎么根据虚拟的dom找到真实的dom

2. 前端项目怎么构建、开发、发布的？

   代码push到仓库还是，这个发布打包的过程？

   脚本用什么写的？有没有读过脚本？加入让你做，你觉得需要做哪些事情？打包、编译、发布

3. jquery的插件机制

4. jquery的选择器的返回结果是什么？类数组



摘抄：

1. 简单介绍你的工作&项目经历，自我介绍

答. - 16年毕业，去了北京。第一份是老虎智汇科技，第二份是在京东，主要技术栈是vue，nodejs Express。
  - 在京东主要做了团队内部一些公共工具，运营后台，并负责维护大部门的NF1-ADC应用，是个高性能的网络负载均衡与WEB防火墙应用。

2. 可以选其中的一个项目，具体介绍一下，说一下技术栈，你的职责，角色，工作范围

答. - NF1-ADC，是一个网络负载均衡、DDNS的web应用防火墙等应用的集合。使用的vue作为技术框架，和团队技术栈保持一致。从项目开始，我一直主导整个项目。
  - 今年三月份做了大的重构，我负责代码review和工作分配。

3. 你刚刚提到这个项目有其他同学参与进来，多人协作，怎么保持项目的可维护性和统一？

答. - 使用了ESlint，每周两、三次代码review，每日站会。

4. CSS@3中，有哪些喜欢的 features？

答. - @media，因为它是响应式布局的基础。
  - animation，可以实现动画，比较喜欢
  - flex布局，很好用

5. 可以介绍一下你了解的CSS的设计思想吗？

答. - 使用sass
  - 可以将一些常量存储下来，一些方法可以复用；
  - 一些帮助class，比如overflow hidden，使用者可以直接用。
  - 还有mixin

6. DOM 操作：使用原生的js实现将一个列表的最后一项和第一项元素交换

答. - querySelectAll找到所有的子元素，然后把第一项和最后一项交换位置。
    - 那如何实现交换位置？  
      - 可以把innerHTML的字符拿到，然后把字符串中第一个标签和最后一个标签交换，再设置回去。

7. 如何做图片懒加载，说说你的思路

答. - 监听滚动事件，并节流，通过getBoundingClientRect方法，拿到元素距离视口的距离，然后判断是否需要加载。

8. TCP/IP 建立连接的过程 三次握手，说一下过程。为什么需要三次？
 TCP/IP学习地址：https://juejin.cn/post/6844903490595061767#heading-19
答. - 客户端向服务端发送请求，SYNC
  - 服务器接收到编码后，发送回答确认 ACK
  - 客户端接收到包之后，发送确认ACK + 1
  - 一定需要三次，因为通信是双向的，如果服务器端没有收到最后客户端ACK的话，不能贸然发送数据。

9. HTTP，Get & Post 区别，除此之外还有什么类型

答. - GET会被浏览器缓存，参数放在url上。
  - POST不会缓存，数据放在body中。
  - 安全性上，GET容易XSS攻击。
  - 除此之外还了解的类型有：DELETE PUT OPTION

10. JavaScript 实现数组去重的方法，有多少说多少

答. - 知道ES6的Set方法
  - 提到两重遍历原数组和result数组，把不重复的数据放入result数组

11. JavaScript 中，什么是 `Promise`? 如何处理 `Promise` 异常？`then` 第二个参数`reject`和 `catch` 有什么区别？

答. - 主要用来解决异步的问题，避免多层回调。
  - 有三个状态，一个是pending、resolve、reject,并且是不可逆的。
  - 一般用catch处理。reject的时候不一定是代码错误，可能是业务上需要reject。(不完全认同)

12. ES6箭头函数和普通函数的区别?

答. - 内部没有this，被绑定到了上层作用域
  - 不能作为构造函数，不能使用new，没有arguments

13. 介绍一个你最近了解的前端新技术，是否有将他们运用到工作中？

答. - flutter，google推出的，一套代码编译出安卓和ios、web的。使用
    - 追问：那这项技术能否运用到你的工作中？
      - 应该是可以的，因为阿里的闲鱼，就使用的flutter实现的。
      - 并且gitHub上热度很高，谷歌推出的，信赖度比较高，生态完善会比较快。
    - 追问：如果要运用到你的工作中，你觉得还需要哪些困难需要克服？
      - 它是新的框架，ios有swift，安卓也有Kotlin，使用flutter的话还需要磨合。
      - 基础设施还不够多，一些东西需要手动去写。
      - 社区学习相关的覆盖面还比较少，学习成本比较高。



2020年2月4号

1. 受控组件和非受控组件：https://segmentfault.com/a/1190000012404114
2. ant-design表单关联验证：https://www.cnblogs.com/chaoxiZ/p/10136780.html
3. react 新出的 react-hooks 有没有了解：https://segmentfault.com/a/1190000019061074?utm_source=tag-newest
4. 前端单页原理、react-router 嵌套路由：https://www.cnblogs.com/SamWeb/p/8932931.html
5. 正则，问号的含义。
6. 前端基础：DOM 基础、事件委托，currentTarget 和 target 具体指向
7. 前端埋点、监控等基础设施



2020年2月5号

```
1. React 组件的数据，放 state 与放 this 有区别么，为什么？
 答. 从回答来看，对于 react 的处理流程理解得不深，并且认为 state 中的数据与虚拟 dom 的更新有直接关系。
2. react中高阶组件有什么用？
答：给组件增加一些公用的方法，并且讲了一些他们公司的例子
3. react该怎么做性能优化？
答：使用purerenderdecorator, purecomponent
4. 这两个是怎么做性能优化的？
答：在shouldcomponentupdate的时候对更新的props和当前的props做对比
5.purecomponent对比的层次是什么？
答：不知道
6.React、Vue.js 在技术层面有什么区别？
回答：写法不同，React 有自己的语法；Vue.js 基于模板；组件的更新形式不一样。
```



其他

```
一 es6基础语法部分：

1 promise作为es6新特性被加入的理由：

解决了异步回调的嵌套写法的冗杂

2 promise的三个状态

pending Fulfilled Rejected

3 多个promise的封装方法，以及应用场景

race 和 all ，all作为同步多请求比较试用，race对于多个同结果请求能够拿到最快的返回
```

字节跳动面试记录：

1. 先简单做自我介绍？

公司的从事内容介绍的不高大上，代表你没有认同感

你的技术栈？除了react 还有没有其他的比如node.js h5

2. 介绍一两个你负责的项目，以及技术栈

   美图美妆平台，平台主要是给内部运营同学使用的，

   你负责的是什么？你负责的模块是哪些还是全部自己负责，代码结构、模块设计、封装抽象

   ps：遇到的场景是什么？你是怎么想的，怎么做的，说白了就是看一下你有没有一些思考

   渲染需求不太高？错！

   时间组件怎么做的？回答不清楚

   高阶组件的实现方式？答案：https://www.jianshu.com/p/2385afe223b6 

   code演示，高阶组件还有没有其他实现形式？hoc

   

   redux用过么？状态管理用的store

   redux数据是怎么传递的？

   redux connect函数是做什么的？connect函数原理

   react dom diff是怎么做的？比对算法

   面试官出题，输出结果是什么？为什么？
