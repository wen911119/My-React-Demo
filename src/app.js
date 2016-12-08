/* 入口启动文件 */
import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {Router} from 'react-router'
import store, {history} from 'STORE'
import routes from 'ROUTE'  // 会默认加载routers目录下index.js

/**
 * 下面这货用于检测不必要的重新渲染，详情请看其项目地址：
 * https://github.com/garbles/why-did-you-update
 *
 * 有关性能提升方面的问题
 * 诸如 PureComponent / shouldComponentUpdate / Immutable.js 等
 * 请自行查阅相关资料
 */
if (__DEV__ && __WHY_DID_YOU_UPDATE__) {  // __DEV__和__WHY_DID_YOU_UPDATE__都是在webpack.base.conf.js定义的全局变量

    // 解构赋值
    const {whyDidYouUpdate} = require('why-did-you-update')
    whyDidYouUpdate(React)

}
if (__DEV__) {
    console.info('[当前环境] 开发环境')
}
if (__PROD__) {
    console.info('[当前环境] 生产环境')
}

// ================================
// 将根组件挂载到 DOM，启动！
// ================================
window.onerror = function (msg) {
    alert(msg)
}

function throttle(func, wait, options) {
    let context, args, result, timeout

    // 上次执行时间点
    let previous = 0
    if (!options) options = {}
    // 延迟执行函数
    let later = function () {
        // 若设定了开始边界不执行选项，上次执行时间始终为0
        previous = options.leading === false ? 0 : Date.now()
        timeout = null
        result = func.apply(context, args)
        if (!timeout) context = args = null
    }
    return function () {
        let now = Date.now()
        // 首次执行时，如果设定了开始边界不执行选项，将上次执行时间设定为当前时间。
        if (!previous && options.leading === false) previous = now
        // 延迟执行时间间隔
        let remaining = wait - (now - previous)
        context = this
        args = arguments
        // 延迟时间间隔remaining小于等于0，表示上次执行至此所间隔时间已经超过一个时间窗口
        // remaining大于时间窗口wait，表示客户端系统时间被调整过
        if (remaining <= 0 || remaining > wait) {
            clearTimeout(timeout)
            timeout = null
            previous = now
            result = func.apply(context, args)
            if (!timeout) context = args = null
            // 如果延迟执行不存在，且没有设定结尾边界不执行选项
        } else if (!timeout && options.trailing !== false) {
            timeout = setTimeout(later, remaining)
        }
        return result
    }
}

alert(Object.assign({a: 1}, {b: 2}).a)


const MOUNT_NODE = document.getElementById('app')

function broadcastScrollPosition(p) {
    store.dispatch({
        type: 'scrolling',
        payload: {
            scrollTop: p
        }
    })
}

let _broadcastScrollPosition = throttle(broadcastScrollPosition, 1000)

window.onscroll = function (e) {

    _broadcastScrollPosition(e.target.body.scrollTop)

}

window._app_client_height_ = document.documentElement.clientHeight
ReactDOM.render(
    <Provider store={store}>
        <Router history={history} children={routes}/>
    </Provider>,
    MOUNT_NODE
)

// === Webpack 处理 assets，取消注释即可进行测试 === //
/* 处理 less / sass */
// import 'ASSET/less/normalize.less'
// import 'ASSET/scss/normalize.scss'

/* 处理 img，小于 10KB 的转为 base64，否则使用 URL */
// import base64 from 'ASSET/img/smaller.png'
// import url from 'ASSET/img/larger.png'

// function appendImgToBody(content) {
//   const img = document.createElement('img')
//   img.src = content
//   document.body.appendChild(img)
// }

// appendImgToBody(base64)
// appendImgToBody(url)


/**
 * 【拓展】
 *  react-redux 的 Provider 中传入的属性
 *  可以让全体组件轻松访问，避免繁琐累赘的层层下传。例子：
 *
 *  class XXX extends Component {
 *    static contextTypes = {
 *      // 组件中需要这样子声明
 *      store: PropTypes.object.isRequired
 *    }
 *    componentDidMount () {
 *      // 之后就可以直接这样用
 *      this.context.store.getState()
 *    }
 *  }
 *
 *  但上面这种官方的做法实在太麻烦，于是我们有更为直接的方式：
 *  import store from 'STORE'
 *  store.getState() // 只读，更改 state 只能通过 dispatch
 */
