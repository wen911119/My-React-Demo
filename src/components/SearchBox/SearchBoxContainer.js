/**
 * Created by MB-WJ on 2016/12/12.
 */
import React, {Component} from 'react'

export default class SearchBoxContainer extends Component {
    componentWillMount() {
        // 获取配置项
        let {placeholderWord, hotwords, suggestionsFromUrl, keywordToUrl} = this.props
        // 初始化 把这些属性更新到state里
        this.props.init({placeholderWord, hotwords, suggestionsFromUrl, keywordToUrl})
    }


    componentDidUpdate() {
        //

    }

    handleChange(evt) {
        let self = this
        let {keywordChange, search: {suggestionsFromUrl}} = self.props
        console.log(suggestionsFromUrl, evt.target.value)
        keywordChange(suggestionsFromUrl + '?keyWord=' + evt.target.value, evt.target.value)
    }

    handleSubmit(e) {
        e.preventDefault()
        let {keyword, keywordToUrl} = this.props.search
        this.context.router.push(keywordToUrl + keyword)
    }

    render() {
        let {placeholderWord, hotwords, suggestions, historyWords} = this.props.search

        return (
            <div>
                <div className="flex-box search-box-area">
                    <div className="close-icon">x</div>
                    <div className="search-input-box flex-box flex-item-1">
                        <div className="search-icon"></div>
                        <div className="search-input flex-item-1">
                            <form onSubmit={(e) => this.handleSubmit(e)}>
                                <input type="search" placeholder={placeholderWord}
                                       defaultValue="" onChange={this.handleChange.bind(this)}/>
                            </form>
                        </div>
                        <div className="clear-icon"></div>
                    </div>
                </div>
                <SearchTips {...{hotwords, suggestions, historyWords}} />
            </div>
        )

    }
}

class SearchTips extends Component {
    render() {
        let {hotwords, suggestions, historyWords} = this.props

        if (suggestions.length > 0) {
            return (
                <div className="suggestion-words-area">
                    <ul>
                        { suggestions.map((suggestion, index) =>
                            <li key={index}>{suggestion.word} <span>{suggestion.count}</span></li>
                        )}
                    </ul>
                </div>
            )
        } else {
            return (
                <div>
                    <div className="hot-words-area">
                        <div>大家都在搜：</div>
                        <ul>
                            { hotwords.map((hotword, index) =>
                                <li key={index}>{hotword}</li>
                            )}
                        </ul>
                    </div>
                    <div className="hot-words-area">
                        <div>搜索历史：</div>
                        <ul>
                            { historyWords.map((historyWord, index) =>
                                <li key={index}>{historyWord}</li>
                            )}
                        </ul>
                    </div>
                </div>
            )
        }
    }
}
