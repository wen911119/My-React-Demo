import {injectReducer} from 'REDUCER'
import userAuth from 'UTIL/userAuth'           // 用户访问拦截器
import createContainer from 'UTIL/createContainer'

const connectComponent = createContainer(
    ({userData, msg}) => ({userData, msg}), // mapStateToProps
    require('ACTION/msg').default               // mapActionCreators
    // 是一个函数
    // 返回另一个函数
    // 这另一个函数 是 actionCreator

)

export default {
    path: 'msg',

    /* 布局基页 */
    // https://segmentfault.com/a/1190000007141049
    // react-router 按需加载
    // 按需加载之后，我们需要让路由动态加载组件，需要将 component 换成 getComponent
    // require.ensure(dependencies, callback, chunkName)
    // 这是 webpack 提供的方法，这也是按需加载的核心方法。第一个参数是依赖，第二个是回调函数，第三个就是上面提到的 chunkName，用来指定这个 chunk file 的 name。
    // 如果需要返回多个子组件，则使用 getComponents 方法，将多个组件作为一个对象的属性通过 cb 返回出去即可。这个在官方示例也有，但是我们这里并不需要，
    // 而且根组件是不能返回多个子组件的，所以使用 getComponent。

    getComponent (nextState, cb) {
        require.ensure([], (require) => {
            // 立即注入 Reducer
            injectReducer('msg', require('REDUCER/msg/').default)

            cb(null, require('VIEW/msg').default)
        }, 'msgView')
    },

    indexRoute: { // 对应 /msg
        getComponent (nextState, cb) {
            require.ensure([], (require) => {
                cb(null, connectComponent(require('COMPONENT/Msg/MsgList').default))
            }, 'msgList')
        }
    },

    childRoutes: [
        { // 对应 /msg/detail/:msgId
            path: 'detail/:msgId',
            getComponent (nextState, cb) {
                require.ensure([], (require) => {
                    cb(null, connectComponent(require('COMPONENT/Msg/MsgDetail').default))
                }, 'msgDetail')
            }
        },
        { // 对应 /msg/add
            path: 'add',
            getComponent (nextState, cb) {
                require.ensure([], (require) => {
                    cb(null, connectComponent(require('COMPONENT/Msg/MsgForm').default))
                }, 'msgForm')
            },
            onEnter: userAuth
        },
        { // 对应 /msg/:msgId
            path: 'modify/:msgId',
            getComponent (nextState, cb) {
                require.ensure([], (require) => {
                    cb(null, connectComponent(require('COMPONENT/Msg/MsgForm').default))
                }, 'msgForm')
            },
            onEnter: userAuth
        }]
}
