/**
 * Created by wen91 on 2016/12/2.
 */
import createReducer from 'UTIL/createReducer'


const initState = {
    pages: [    // 列表每页的数据
        {
            pageContent: [], // 该页的实际内容，具体格式和子组件相关，这里没有限制!!!!
            pageNum: 1,   // 页码!!!!
            isShow: true, // 正常展示还是回收
            height: '800px', // 该页的高度，用于回收状态占位!!!!

        }
    ],
    page: 1,    // 当前请求页!!!!
    rows: 10,   // 每页几条数据!!!!
    totalPageNum: 0, // 总页数!!!!
    currentPageView: 0, // 当前可视区内是第几页
    needLoading: true // 是否需要加载数据
}

const ACTION_HANDLERS = {
    fetchListData: (listState, {payload}) => {
        if (payload) {
            let newState = Object.assign({}, listState)
            newState.pages.push({
                pageContent: payload.pageContent,
                pageNum: payload.pageNum,
                height: payload.height,
                isShow: true
            })
            newState.page = payload.page
            newState.rows = payload.rows
            newState.totalPageNum = payload.totalPageNum
            newState.needLoading = false
            return newState
        }else{
            return listState
        }
    },
    scrolling: (listState, {payload}) => {
        let newState = Object.assign({}, listState)
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
                if (v.pageNum <= (pageViewNum - 3) || v.pageNum >= (pageViewNum + 3)) {
                    v.isShow = false
                } else {
                    v.isShow = true
                }
            })

        }
        if (bottomLoadingPosition < window._app_client_height_ + 20 && !listState.needLoading && listState.page < listState.totalPageNum) {
            newState.needLoading = true
        }
        return newState
    }
}

export default createReducer(initState, ACTION_HANDLERS)