/**
 * Created by WJ on 2016/11/20.
 */
import createReducer from 'UTIL/createReducer'
import initState from 'STORE/initState'

const dataFormate = (state, originData) => {
    if (originData.code == 1) {
        let newState = Object.assign({}, state)
        newState.currentPage = originData.data.fpage.currentPage
        newState.pageNum = originData.data.fpage.pageNum
        newState.isLoading = false

        newState.pages.push({
            pageContent: originData.data.list,
            pageIndex: originData.data.fpage.currentPage,
            isShow: true,
            height: '200px'
        })
        return newState
    } else {
        return state
    }

}

const ACTION_HANDLERS = {
    fetchList: (state, {payload}) => {
        return dataFormate(state, payload)
    },
    scrolling: (state, {payload}) => {
        let bottomLoadingPosition = document.getElementById('bottomLoading').getBoundingClientRect().top
        if (bottomLoadingPosition < window._app_client_height_ + 20 && !state.isLoading) {
            let newState = Object.assign({}, state)
            newState.isLoading = true
            console.log(newState, 999999999)
            return newState
        } else {
            return state
        }
    }

}
export default createReducer(initState.list, ACTION_HANDLERS)

