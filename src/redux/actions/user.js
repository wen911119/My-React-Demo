import userService from 'SERVICE/userService'
// ================================
// Action Type
// ================================
const LOG_IN = 'LOG_IN'
const LOG_OUT = 'LOG_OUT'

// ================================
// Action Creator
//
// Action Creator 应该返回一个对象是吧
// 但是！
// 这里为什么有的返回的一个接受dispatch作为参数的函数？！
// 这样的还能叫Action Creator吗？！
// 原来，
// 在使用了redux-thunk之后（把它当作中间件用）Action Creator 就还可以返回一个 thunk 函数
// redux-thunk 中间件会做过滤，如果Action Creator 返回的是一个正常的action 对象，就什么也不做。如果返回的是一个函数那么就对它处理
//
// ================================
const loginDone = (userData) => ({
    type: LOG_IN,
    payload: userData
})

const login = (formData) => {
    return dispatch => {     // 终于懂了！尼玛！这是redux-thunk!!!
        userService
            .login(formData)
            .then(
                re => dispatch(loginDone(re))
            )
    }
}

const checkLogin = () => {
    return dispatch => {
        userService
            .checkLogin()
            .then((re) => {
                if (!re) return
                dispatch(loginDone(re))
            })
    }
}

const logout = () => {
    return dispatch => {
        userService
            .logout()
            .then(() =>
                dispatch({
                    type: LOG_OUT
                })
            )
    }
}
/* default 导出所有 Actions Creator */
export default {
    login, checkLogin, logout
}

// ================================
// Action handlers for Reducer
// 本来更新 state 是 Reducer 的责任
// 但要把 ActionType 导出又引入实在太麻烦
// 且在 Reducer 中写 switch-case 实在太不优雅
// 故在此直接给出处理逻辑
// ================================
export const ACTION_HANDLERS = {
    [LOG_IN]: (userData, {payload}) => payload, // payload is userData
    [LOG_OUT]: () => null
}
