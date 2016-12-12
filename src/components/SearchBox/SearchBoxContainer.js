/**
 * Created by MB-WJ on 2016/12/12.
 */
import React, {Component} from 'react'

export default class SearchBoxContainer extends Component {
    componentWillMount() {
        // 获取配置项
        let {placeholderWord, hotWords, suggesTionsFromUrl, keyWordToUrl} = this.props
        // 初始化 把这些属性更新到state里
        this.props.init({placeholderWord, hotWords, suggesTionsFromUrl, keyWordToUrl})
    }


    componentDidUpdate() {
        //

    }

    handleChange(evt) {
        let {keyWordChange} = this.props.searchbox
        keyWordChange(evt.target.value)
    }
    handleSubmit(e){
        e.preventDefault()
        this.context.router.push('/list')
    }

    render() {
        let {placeholderWord, hotWords, suggesTionsFromUrl, keyWordToUrl, state, keyWord, suggesTions} = this.props.searchbox
        if (state == 'sleep') {
            return (
                <div>

                </div>
            )
        } else if (state == 'wake-up') {
            return (
                <div>
                    <div className="flex-box">
                        <div className="close-icon">x</div>
                        <div className="search-input-box flex-box flex-item-1">
                            <div className="search-icon"></div>
                            <div className="search-input flex-item-1">
                                <form onSubmit={(e) => this.handleSubmit(e)}>
                                    <input type="search" placeholder={placeholderWord}
                                           defaultValue="" onChange={this.handleChange}/>
                                </form>
                            </div>
                            <div className="clear-icon"></div>
                        </div>
                    </div>
                    <div></div>
                    <div></div>
                </div>
            )
        } else if (state == 'active') {

        }
    }
}