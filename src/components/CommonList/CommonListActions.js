/**
 * Created by wen91 on 2016/12/2.
 */
import CommonListService from './CommonListService'
const fetchListData = ({url, body, dataFormatter, dataType}) => {

    return function (dispatch) {
        CommonListService.fetch({url, body, dataType}).then(function (res) {
            dispatch({
                type: 'fetchListData',
                payload: dataFormatter(res)
            })
        })
    }
}

const initList = (extraQueryParameter) => ({
    type: 'addExtraQueryParameter',
    payload: extraQueryParameter
})

export default {
    fetchListData,
    initList
}
