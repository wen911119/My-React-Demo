/**
 * Created by WJ on 2016/12/12.
 */
import createReducer from 'UTIL/createReducer'

const initState = {
    state: 'sleep', // or active
    keyWord: '',
    suggesTions: [], // 搜索推荐
    placeholderWord: '',  // 配置
    hotWords: [], // 热搜词提示 配置
    suggesTionsFromUrl: '', // 配置
    keyWordToUrl: '',  // 配置
    dataType: ''
}

const ACTION_HANDLERS = {
    init: (searchBoxState, {payload}) => {
        let newState = Object.assign({}, searchBoxState)
        newState.placeholderWord = payload.placeholderWord
        newState.hotWords = payload.hotWords
        newState.suggesTionsFromUrl = payload.suggesTionsFromUrl
        newState.keyWordToUrl = payload.keyWordToUrl
        newState.dataType = payload.dataType || 'json'
        return newState
    },
    fetchSuggesTions: (searchBoxState, {payload}) => {
        if (payload) {
            let newState = Object.assign({}, searchBoxState)
            newState.suggesTions = payload
            return newState
        } else {
            return searchBoxState
        }
    },
    keyWordChange:(searchBoxState, {payload}) => {
        let newState = Object.assign({}, searchBoxState)
        newState.keyWord = payload
        return newState
    }
}

export default createReducer(initState, ACTION_HANDLERS)