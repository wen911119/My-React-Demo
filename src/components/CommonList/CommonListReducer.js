/**
 * Created by wen91 on 2016/12/2.
 */
import createReducer from 'UTIL/createReducer'


const initState = {
    pages: [    // 列表每页的数据
        {
            pageContent: [], // 该页的实际内容，具体格式和子组件相关，这里没有限制
            pageNum: 1,   // 页码
            isShow: true, // 正常展示还是回收
            height: '800px', // 该页的高度，用于回收状态占位

        }
    ],
    page: 1,    // 当前请求页
    rows: 10,   // 每页几条数据
    pageNum: 0, // 总页数
    currentPageView: 0, // 当前可视区内是第几页
    needLoading: true, // 是否需要加载数据
    dataFormatter: (originData) => originData  // 格式化方法
}

const ACTION_HANDLERS = {
    fetchListData: (listState, {payload}) => {

    }
}

export default createReducer(initState.list, ACTION_HANDLERS)