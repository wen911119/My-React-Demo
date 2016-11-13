import React, { Component } from 'react'
import { connect } from 'react-redux'
import { IndexLink, Link } from 'react-router'
import LoginForm from './LoginForm'
import LogoutDropdown from './LogoutDropdown'

/* 导航栏全局显示，控制着用户的登录注销 */
// es7的装饰器
@connect( // 功能同 UTIL/createContainer
  ({ userData }) => ({ userData }),
  require('ACTION/user').default
)
export default class Navbar extends Component {
  componentWillMount () {
    console.info('[Navbar] 初始化：检查用户是否已经登录')
    console.info('[TIPS] 由于有Redux Logger，故之后就不手动打印动作了')
    console.log(this.props, 99) // 这个时候userData还是null
    this.props.checkLogin()
  }

  render () {
    console.info(this.props, 88) // 第一遍渲染时userData还是null，第二遍就是wen911119
    let {
      userData, login, logout, // 通过 connect 获取
      location: { pathname }   // 通过 App 传入
    } = this.props

    return (
      <div className="row clearfix">
        <div className="col-md-12 column">
          <nav className="navbar navbar-default" role="navigation">
            <div className="navbar-header">
              <button
                type="button"
                className="navbar-toggle"
                data-toggle="collapse"
                data-target="#nav-collapse">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <Link to='/' className="navbar-brand"> 
                React Demo
              </Link>
            </div>
            <div className="collapse navbar-collapse" id="nav-collapse">
              <ul className="nav navbar-nav">
                <li className={pathname === '/' && 'active'}>
                  <IndexLink to='/'>
                    欢迎页
                  </IndexLink>
                </li>
                <li className={pathname.startsWith('/msg') && 'active'}>
                  <Link to='/msg'>
                    留言板
                  </Link>
                </li>
                <li className={pathname.startsWith('/todo') && 'active'}>
                  <Link to='/todo'>
                    待办事项(新功能)
                  </Link>
                </li>
              </ul>
              { userData ?
                <LogoutDropdown userData={userData} logout={logout} /> :
                <LoginForm login={login} />
              }
            </div>
          </nav>
        </div>
      </div>
    )
  }
}
