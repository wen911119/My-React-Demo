/**
 * Created by WJ on 2016/11/20.
 */

const fetchList = ({ currentPage, rows }) => {
    console.log(currentPage, rows, 6)
    return {
        type: 'listTest',
        payload: {

        }
    }
}

export default {
    fetchList
}

export const ACTION_HANDLERS = {

}
