
#TODO
Potential Issues With Checkboxes and Radio Buttons
Be aware that, in an attempt to normalize change handling for checkbox and radio inputs, React uses a click event in place of a change event. For the most part this behaves as expected, except when calling preventDefault in a change handler. preventDefault stops the browser from visually updating the input, even if checked gets toggled. This can be worked around either by removing the call to preventDefault, or putting the toggle of checked in a setTimeout.
* react transform
* https://github.com/timarney/react-faq

This is a common theme in React design. Some popular libraries implement the "push" approach where computations are performed when the new data is available. React, however, sticks to the "pull" approach where computations can be delayed until necessary.
* https://github.com/krasimir/react-in-patterns
* https://github.com/planningcenter/react-patterns

# 易掉入的坑
* js中对象引用引起的代码逻辑错误
* 直接修改this.state, shouldComponentUpdate 中this.state === nextState
* 异步（下一个ticks）引用this.state, 异步回调时this.state中的值可能已经变化
* this.state很臃肿，在state中保存很多不必要的中间状态， 使得在 shouldComponentUpdate 做状态比较时逻辑复杂，性能受影响
* shouldComponentUpdate 默认返回值是true
* 组件的事件回调函数没有做this.bind (for es6 class)
* render函数包含太多复杂的逻辑，（调试，维护不方便）
* 在 componentWillMount 中ajax获取数据后调用this.setState,组件还没加载（mount）就开始修改this.state(this.setState)
* 传入了多余的props给组件
* jsx中不能写语句， 只能通过{}写一元，三元表达式或IIFE
* props 或state变化时，都会调用shouldComponentUpdate
* react的事件对象是会被复用的， 异步处理的时候需要拷贝出来，不然会出错（或者调用 event.persist ）
* getInitialState 函数名错写， this.state未得到初始化，且无编译时错误。


# THINKING
* this.props.children 与 refs 的使用 

# Building web, Electron, Cordova and Chrome apps, and cross-browser extensions with React, Redux and Webpack. "Write once, deploy everywhere" concept in practice.
https://github.com/zalmoxisus/crossbuilder

# A complete and totally customizable component for notifications in React 
https://github.com/igorprado/react-notification-system

https://github.com/zalmoxisus/redux-notify

http://ireact.cn/

# React Components that Implement Google's Material Design. http://www.material-ui.com
https://github.com/callemall/material-ui

# WAI-ARIA compliant React autosuggest component http://react-autosuggest.js.org
https://github.com/moroshko/react-autosuggest

# A set of React components implementing Google's Material Design specification with the power of CSS Modules http://www.react-toolbox.com
https://github.com/react-toolbox/react-toolbox

# Latest ReactJS Examples
https://react.rocks/

# Infinite scrolling date-picker built with React, with localization, themes, keyboard support, and more.
https://github.com/clauderic/react-infinite-calendar

https://github.com/zippyui/react-date-picker

https://github.com/zippyui/react-combo

# React-powered Hacker News client
https://github.com/insin/react-hn

# Code snippets for Reactjs development in ES6 syntax
https://marketplace.visualstudio.com/items?itemName=xabikos.ReactSnippets

# react
* javascript based
* simple declarative composable
* State, lifecycle hooks, cross-browser event normalization 
* declarative(jsx) one-way-dataflow/top-down-dataflow(prop) component vdom syntheticEvent es6/fp
* 用组合的方法（而不是继承的方法）来实现组件的代码复用
* controlled component/ uncontrolled component :  value: {null}
* stateless compoent / container component
* dumb component/ smart component
* 优化要点：1 是否要重新计算vdom, 2 vdom与真实的dom比较后是否一致
* 基于一个事实： dom的更新代价远大于javascript运算的消耗。
* 生命周期
	* 初始化阶段： getDefaultProps（创建类时调用） getInitialState（实例化的时候调用）
	* 挂载阶段 componentWillMount componentDidMount
	* 渲染阶段： render
	* 运行（更新）阶段 
		* 属性更新： componentWillReceiveProps
		* 状态或属性更新： componentShouldUpdate componentWillUpdate componentDidUpdate
	* 销毁阶段 componentWillUnmount
* prop与state的区别： 组件不能自己修改prop,只能通过父组件来修改。组件本身需要修改的值应该保存在state中
* 全局事件处理： react内部分发事件（Event Delegation）
* react支持的非dom的属性attribute:  key refs dangerouslySetInnerHTML

## 设计原则
* 组件组合：不同人写的组件组合在一起能正常工作。 组件就是函数（just function） ， 但还包含 render , lifecycle, local state
* 通用抽象：local state, lifecyce, render, crosss browser event system
* 特殊用法：mixins refs context:   废弃的，前提是满足实用
* 稳定： 接口稳定，开发版本中的warning, 升级（codemod）
* 互操作： 与其它库，系统配合使用
* 调度: react 申明式编程。 react内部负责组件的创建，异步，批量更新 =》 （根据视图，数据生成的速度，用户交互与后台任务）按需异步，批量更新
* 开发体验： react DevTools
* 调试：props(祖先组件的错误) state（组件自身的错误） render（渲染逻辑的错误）
* 配置：全局配置易引起冲突， 但支持三种配置版本：开发版本，生产发布版本，性能调试版本
* 不仅仅是Dom： react-native
* 实现：接口优雅，内部代码优先满足正确性，性能要求，开发体验
* 工具的优化： 调试时，JSX也支持代码定位
* 吃自己的狗粮：优先满足facebook内部需求，专注满足特定场景用户的需求

基于产品而不是基于平台组建团队（苹果平台+安卓平台）

# 高阶组件(HOC)/高阶函数(HOF)
* wrapper 在原组件上包装一个新的的组件，实现通用的功能

## context
* parent:  getChildContext(),  childContextTypes
* child: this.context, contextTypes

## refs
* ref = createElement()
* string ref
* function ref :  (ref) => this.myref = ref
* refs may not be attached to stateless function component
* 使用场景：
1. 跨one-way-data-flow调用组件的公共方法: this.myRef.someMethod()
2. 访问原生组件（如: <input />）的dom node:  this.inputRef.value
* 注意事项：
1. 不应该在任何组件的render方法中访问ref

## 限制
* 一个组件的render只能返回一个node
* es5 class compenonet 不会autobinding

## 组件通讯
* parent-child 父 -》 子 通过props通讯
* child-parent 子 -》 父 通过 function props 加上参数 bind
* 非父子关系的： 
1. 全局事件：global event system: subscribe
2. 通过ref调用组件的方法（无状态函数组件不适用）

## reconcile
* key 属性： 在render时，内部同一类组件的同一兄弟实例集中，有相同的key的元素不需要重新渲染

## form 表单
* <input> text checkbox radio, <textarea>,  <option>
* value defaultValue checked selected
* onChange onSubmit

## event 事件
* wrapper work identically cross all browsers
* pooling: e.persist() for asynchronous
* e.preventDefault() 阻止事件的默认行为（如浏览器处理表单的提交submit事件的默认行为）
* e.stopPropagation() 阻止事件向父级祖先冒泡
* keyboard mouse wheel touch form focous clipboard composition select scroll media image animation transition


## 样式
* object
* camelCase
* Vendor Prefix: begin with a capital letter

##  jsx
* syntactic sugar
* 三元表达式
* IIFE 立即执行函数表达式

## propTypes
bool number string func object array  symbol
node element any
instanceOf
arrayOf objectOf oneOf oneOfType shap 

>Tips:
* [react组件生命周期](https://cloud.githubusercontent.com/assets/3348398/15650035/4c5eb69c-26a8-11e6-8dd3-26ddc32f3293.png)
* 你不能在conponentWillUpdate方法中使用 this.setState()。如果需要更新 state 来响应某个 prop 的改变，请使用 componentWillReceiveProps。
* 不要在render中改变组件状态
* [React移动web极致优化](https://github.com/lcxfs1991/blog/issues/8)
* [React同构直出优化总结](https://github.com/joeyguo/blog/issues/9)

# redux
actionCreater -> action  -> dispatch -> middleware -> reducer -> state -> connect(mapStateToProps, mapDispatchToProps) -> UI -> reactive -> dipatch(actionCreator(action))
https://github.com/reactjs/redux
http://camsong.github.io/redux-in-chinese/index.html
状态容器，提供可预测的状态管理
* restore: 全局唯一的状态集的管理器
* action
* reducer
const store = createStore(reducers, initState, compose(applyMiddlware(...), windows.devToolsExtenstin()))
* Dumb组件与Smart组件的区别：  ？？
redux: 一致化（可运行于客户端，服务端，原生应用中）的可预测的状态容器
三个原则：单一数据源，状态只读，reduce纯函数
为什么叫 reduce 函数： 之前积累运算的结果与当前积累的值，返回一个新的积累结果（把一个集合归并成一个单值）
redux Middleware 和 store enhancer 的区别是什么，各自解决的问题域是哪些?:   Middleware通过 ApplyMiddleware这个函数组成一个store enhancer,  还可以通过compose函数把多个store enhancer组合起来


# CommonJS AMD CMD UMD
* CommonJS  - Node.js
* AMD - RequireJS
* CMD - SeaJS
* UMD
* SystemJS

# webpack
统一的，支持异步的，分块传输的，
静态分析各种类型的模块，按需打包成分块，
plugins: 
module-bind
http://webpack.github.io/docs/configuration.html
http://webpack.github.io/docs/webpack-dev-server.html
chunking 
module: loaders： babel-loader url-loader html-loader json-loader file-loader style-loader css-loader 
    import-loader export-loader es3ify-loader(jsx)
plugins: DefinePlugin ProviderPlugin CommonChunkPlugin UglifyJsPlugin 
output: Path PublicPath filename ChunkFilename
context:
entry:
>Tips:
* style-loader 与 css-loader的区别
    style-loader: Add exports of a module as style to DOM
    css-loader:  Loads css file with resolved imports and returns css code

# 同构
* ReactDomServer.renderToString 与 ReactDomServer.renderToStaticMarkup 的区别？

单页面应用，现代浏览器（HTML5, CSS3, ES6）

# Drag and Drop for React
https://github.com/gaearon/react-dnd
http://gaearon.github.io/react-dnd/
## Trello like board based on React, Redux, React-dnd 
https://github.com/web-pal/react-trello-board/
http://interactjs.io/
DragDropContext
DragSource
	beginDrag(prop)
DropTarget
	canDrop(props)
	drop(props, monitor)
type spec collect(connect, monitor)

HtmlBack = react-dnd-html5-backend

knight
square boardsquare 
<Board>
	<Boardsquare>
		<Knight />
	</Boardsquare>

	<Boardsquare></Boardsquare>
	<Boardsquare></Boardsquare>
	<Boardsquare>
		<Other />
	</Boardsquare>
</Board>

# redux-react
<Provider store={store} >
connect(mapStateToProps, mapDispatchToProps,mergeProps, Options)
bindActionCreators()


# react-router
https://github.com/reactjs/react-router
Router Route BrowserHistory HashHistory MemoryHistory
jsx routes config
plain routes config
onEntor onLeave
动态路由： getChildRoutes getComponents getIndexRoute
Todo: indexRoute IndexRedirect IndexLink?
https://github.com/reactjs/react-router/blob/master/docs/API.md

## histroy
https://github.com/mjackson/history
push replace

## react-router-redux
enhanced history
	routerMiddleware(bowserHistory)
	enhancedHistory = syncHistoryWithStore(bowserHistory, store, options)

# redux-form
* 表单构造，（同步+异步）验证， 格式转换，动态生成，
* 高阶组件 decorator
* form fields initialValues validate asyncValidate asyncBlurFields destroyOnUnmount
* formReducer: normorlize plugin
* actionCreator

# reselect
https://github.com/reactjs/reselect
智能缓存表达表结构
优化render效率： 组件的输入不变的情况不下不用rerender

# redux-persist
https://www.npmjs.com/package/redux-persist
https://github.com/rt2zz/redux-persist

# redux-storage
https://github.com/michaelcontento/redux-storage

# redux-thunk
A thunk is a function that wraps an expression to delay its evaluation.

# redux-promise
https://github.com/acdlite/redux-promise

# redux-actions
https://github.com/acdlite/redux-actions

# redux-saga
https://github.com/yelouafi/redux-saga/
管理redux应用中的异步操作(side effects)的中间件
saga middleware在reducer后运行
Effort: put call/apply cps
声明式代码
相比于函数模拟和窥探调用 ，模拟数据要容易得多
控制流：take fork cancel join race takeEvery takeLatest select
与redux-thunk的区别：

## universal
https://github.com/pavelkornev/redux-saga/tree/master/examples/real-world-universal

# Identifies accessibility issues in your React.js elements
https://github.com/reactjs/react-a11y
# Static AST checker for a11y rules on JSX elements.
https://github.com/evcohen/eslint-plugin-jsx-a11y


# react-boilerplate
https://github.com/mxstbr/react-boilerplate
# react-starter-kit
https://github.com/kriasoft/react-starter-kit

# react-native


http://ux.ant.design/
https://github.com/ant-design/antd-init/tree/add-redux-boilerplate/boilerplates/redux

# A React framework for building text editors.
http://github.com/facebook/draft-js

# react-intl
https://github.com/yahoo/react-intl/wiki


# rechart
	SVG： svg path reat cicle polygen polyline G Symbel LinearGradient RadialGradient
		viewport viewbox preserveAspectRatio
	 Canvas

https://github.com/pockry/Building-the-F8-2016-App-CN/


http://es6.ruanyifeng.com/

mango odm:
http://mongoosejs.com/docs/index.html


js promises:
http://www.html5rocks.com/zh/tutorials/es6/promises/#toc-error-handling


inner join
right outer join
left outer join

js: 事件冒泡

synthetic
event.persist
dangeroushly


props -> state -> set_status
ui design -> draw boxes for component (一个组件只负责做一件事情) ->  static version (data props from mock data for server data api)-> interactive version(state) -> revers interactive( callback props -> state change -> rerender) 


one way data flow/one way data binding
modular

最小化需要变化的状态，能计算出的都省略掉

props: 用于静态显示：  props是一个回调函数呢？
state: 用于动态交互

code is read far more than it's written

找一个共同的父组件来维护state， 因为子组件可能需要修改状态，需要通过callback props通知到维护state的组件来更新状态（最小路径）



移动端，公众号，



react-router: SPA应用中，服务端怎么处理中间状态页面（服务端render ?）
redux-electron-store: 
redux-actions: 
	createAction("", page)



# A completely customizable framework for building rich text editors.
https://github.com/ianstormtaylor/slate#

# hotkeys
https://github.com/chrisui/react-hotkeys
https://github.com/ccampbell/mousetrap
