import React from 'react'
import Navbar from 'COMPONENT/Navbar/'
console.log(123654)
let DevTools
if (__DEV__ && __COMPONENT_DEVTOOLS__) {
  // 组件形式的 Redux DevTools
  // 这是定义react组件的另外一种形式？
  DevTools = require('COMPONENT/DevTools').default
}

const App = ({ children, location }) => (
  <div>
    <Navbar location={location} />
  
    <div className="container">
      {/* 相当于 Vue Demo 中的根 router-view */}
      { console.log(children, 98) }
      { children }
    </div>

    { DevTools && <DevTools /> }
  </div>
)

export default App
