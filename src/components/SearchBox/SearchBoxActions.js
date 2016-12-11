/**
 * Created by WJ on 2016/12/12.
 */
import SearchBoxService from './SearchBoxService'
const keyWordChange = ({url, keyWord, dataType}) => {

    return function (dispatch) {
        dispatch({
            type: 'keyWordChange',
            payload: keyWord
        })
        SearchBoxService.fetch({url, keyWord, dataType}).then(function (res) {
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
    keyWordChange,
    init
}