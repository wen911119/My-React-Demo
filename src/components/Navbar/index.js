import React, {Component} from 'react'
import {connect} from 'react-redux'
import {IndexLink, Link} from 'react-router'
import LoginForm from './LoginForm'
import LogoutDropdown from './LogoutDropdown'

/* 导航栏全局显示，控制着用户的登录注销 */
// http://www.jianshu.com/p/94c988cf11f3
// connect([mapStateToProps], [mapDispatchToProps], [mergeProps], [options])
// mapStateToProps是一个函数，返回值表示的是需要merge进props的state。默认值为() => ({})，即什么都不传。
// mapDispatchToProps可以是一个函数，返回值表示的是需要merge进props的actionCreators，比如下面这样的
// (dispatch, props) => ({ // 通常会省略第二个参数
// bindActionCreators({
//    ResourceActions
//  }, dispatch)
// })
// 更方便的是可以直接接受一个对象，此时connect函数内部会将其转变为函数，这个函数和上面那个例子是一模一样的。
// es7的装饰器
@connect( // 功能同 UTIL/createContainer
    ({userData}) => ({userData}), // 直接从全局store上取出userData 并把它传给组件的属性userData(把数据变为属性)
    require('ACTION/user').default    //  把方法变为属性
)
export default class Navbar extends Component {
    componentWillMount() {
        console.info('[Navbar] 初始化：检查用户是否已经登录')
        console.info('[TIPS] 由于有Redux Logger，故之后就不手动打印动作了')
        console.log(this.props, 99) // 这个时候userData还是null
        this.props.checkLogin()
    }

    render() {
        console.info(this.props, 88) // 第一遍渲染时userData还是null，第二遍就是wen911119
        let {
            userData, login, logout, // 通过 connect 获取
            location: {pathname}   // 通过 App 传入
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
                                <li className={pathname.startsWith('/list') && 'active'}>
                                    <Link to='/list'>
                                        列表页(我自己的)
                                    </Link>
                                </li>
                                <li className={pathname.startsWith('/search') && 'active'}>
                                    <Link to='/search'>
                                        搜索页(我自己的)
                                    </Link>
                                </li>
                            </ul>
                            { userData ?
                                <LogoutDropdown userData={userData} logout={logout}/> :
                                <LoginForm login={login}/>
                            }
                        </div>
                    </nav>
                </div>
            </div>
        )
    }
}
