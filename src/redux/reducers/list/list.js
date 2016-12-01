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
        newState.rows = originData.data.fpage.pagesize

        newState.pages.push({
            pageContent: originData.data.list,
            pageIndex: originData.data.fpage.currentPage,
            isShow: true,
            height: newState.rows * 18 * 20
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
        let newState = Object.assign({}, state)
        let bottomLoadingPosition = document.getElementById('bottomLoading').getBoundingClientRect().top
        let listTopPosition = document.getElementById('listTopTag').getBoundingClientRect().bottom
        if (listTopPosition > window._app_client_height_) {
            console.log('列表还没有进入可视区')
        } else if (listTopPosition > 0) {
            console.log('列表正进入或离开可视区，当前是page_1')
        } else {
            let pageViewNum = parseInt(-listTopPosition / 7200, 10) + 1
            console.log('当前是第' + pageViewNum + '页')

            newState.pages.forEach((v, k) => {
                if (v.pageIndex <= (pageViewNum - 3) || v.pageIndex >= (pageViewNum + 3)) {
                    console.log(v.pageIndex)
                    v.isShow = false
                } else {
                    v.isShow = true
                }
            })

        }
        if (bottomLoadingPosition < window._app_client_height_ + 20 && !state.isLoading && state.currentPage < state.pageNum) {
            newState.isLoading = true
        }
        return newState
    }

}
export default createReducer(initState.list, ACTION_HANDLERS)

