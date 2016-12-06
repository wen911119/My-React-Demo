/**
 * Created by wen91 on 2016/12/2.
 */
import CommonListService from './CommonListService'
const fetchListData = ({url, page, rows}) => {

    return function (dispatch) {
        CommonListService.fetch({url, page, rows, type}).then(function (res) {
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
