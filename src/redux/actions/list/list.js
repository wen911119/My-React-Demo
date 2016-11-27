/**
 * Created by WJ on 2016/11/20.
 */
import listService from 'SERVICE/listService'
const fetchList = ({currentPage, rows}) => {

    return function (dispatch) {
        listService.fetch({page: currentPage, rows}).then(function (res) {
            dispatch({
                type: 'fetchList',
                payload: res
            })
        })
    }


}

export default {
    fetchList
}


