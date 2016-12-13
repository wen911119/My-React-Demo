/**
 * Created by WJ on 2016/12/12.
 */
import createReducer from 'UTIL/createReducer'

const initState = {
    keyword: '',
    suggestions: [], // 搜索推荐
    placeholderWord: '',  // 配置
    hotwords: [], // 热搜词提示 配置
    suggestionsFromUrl: '', // 配置
    keywordToUrl: '',  // 配置
    dataType: '',
    historyWords: []
}

const ACTION_HANDLERS = {
    searchBoxInit: (searchBoxState, {payload}) => {
        let newState = Object.assign({}, searchBoxState)
        newState.placeholderWord = payload.placeholderWord
        newState.hotwords = payload.hotwords
        newState.suggestionsFromUrl = payload.suggestionsFromUrl
        newState.keywordToUrl = payload.keywordToUrl
        newState.dataType = payload.dataType || 'json'
        return newState
    },
    fetchSuggesTions: (searchBoxState, {payload}) => {
        if (payload) {
            let newState = Object.assign({}, searchBoxState)
            newState.suggestions = payload
            return newState
        } else {
            return searchBoxState
        }
    },
    keywordChange: (searchBoxState, {payload}) => {
        let newState = Object.assign({}, searchBoxState)
        newState.keyword = payload
        return newState
    }
}

export default createReducer(initState, ACTION_HANDLERS)


