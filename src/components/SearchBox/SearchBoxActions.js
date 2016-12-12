/**
 * Created by WJ on 2016/12/12.
 */
import SearchBoxService from './SearchBoxService'
const keywordChange = (url, keyword, dataType) => {
    console.log(url)
    return function (dispatch) {
        dispatch({
            type: 'keywordChange',
            payload: keyword
        })
        SearchBoxService.fetch({url, keyword, dataType}).then(function (res) {

            res = res.code == 1 ? res.data : {}
            dispatch({
                type: 'fetchSuggesTions',
                payload: res
            })
        })
    }
}

const init = (config) => ({
    type: 'init',
    payload: config
})

export default {
    keywordChange,
    init
}
