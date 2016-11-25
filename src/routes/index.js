import App from 'COMPONENT/App'
import Welcome from 'COMPONENT/Welcome'

export default {
  path: '/',

  component: App,
  
  indexRoute: {
    component: Welcome
  },
  
  childRoutes: [
    // 路由按模块组织分离，避免单文件代码量过大
    require('./msg').default,
    require('./todo').default,
    
    // 强制“刷新”页面的 hack
    { path: 'redirect', component: require('COMPONENT/Redirect').default },
    
    // 无路由匹配的情况一定要放到最后，否则会拦截所有路由
    { path: '*', component: require('COMPONENT/404').default }
  ]
}

/*
  当前路由树如下
  ├ /
  |
  ├ /msg
  ├ /msg/add
  ├ /msg/detail/:msgId
  ├ /msg/modify/:msgId
  |
  ├ /todo
  |
  ├ /redirect
  本质上，react-router是把你的层级解构转为了一个配置对象，比如上面就是
*/
