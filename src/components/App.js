import React from 'react'
import Navbar from 'COMPONENT/Navbar/'
let DevTools
if (__DEV__ && __COMPONENT_DEVTOOLS__) {
  // 组件形式的 Redux DevTools
  // 这是定义react组件的另外一种形式？
  DevTools = require('COMPONENT/DevTools').default
}
/* React中函数式声明组件 */
// 对于无状态的组件，即纯展示类的组件
// 推荐用下面这种纯函数的方式来声明
// 接受 属性 props 参数,组件=f(props)
const App = ({ children, location }) => ( // children是自带属性，代表子组件。location 是react-router提供的属性，代表当前地址的
  <div>
    <Navbar location={location} />
  
    <div className="container">
      {/* 相当于 Vue Demo 中的根 router-view */}
      { children }  // 包括welcome,msg,todo 三个组件，其中welcome是默认就展示出来的
    </div>

    { DevTools && <DevTools /> }
  </div>
)

export default App
