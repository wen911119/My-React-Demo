/**
 * Created by wen91 on 2016/12/2.
 */
import CommonListService from './CommonListService'
const fetchListData = ({url, page = 1, rows = 10}) => {

    return function (dispatch) {
        CommonListService.fetch({url, data, type}).then(function (res) {
            dispatch({
                type: 'fetchListData',
                payload: res
            })
        })
    }


}

export default {
    fetchListData
}
