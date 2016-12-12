/**
 * Created by wen91 on 2016/11/28.
 */
import {injectReducer} from 'REDUCER'
import createContainer from 'UTIL/createContainer'
import searchView, {searchReducer} from 'VIEW/search2'
import GoodsListItem, {goodsListDataFormatter, dataUrl} from 'COMPONENT/CommonList/ListItems/GoodsListItem.js'

const goodsListConfig = {
    listItem: GoodsListItem,
    dataFormatter: goodsListDataFormatter,
    dataFromUrl: dataUrl,
    queryParameter: {word: '男鞋', page: 1, rows: 20},
    dataType: 'json'
}

export default {
    path: 'search',

    getComponent (nextState, cb) {
        require.ensure([], () => {
            injectReducer('searchView', searchReducer)
            cb(null, searchView)
        }, 'searchView')

    },

    indexRoute: {
        getComponent (nextState, cb) {
            require.ensure([], (require) => {
                cb(null, createContainer(({searchView: {goodsList: list}}) => ({...goodsListConfig, list}), require('COMPONENT/CommonList/CommonListActions.js').default, require('COMPONENT/CommonList/CommonListContainer.js').default))
            }, 'goodsList')
        }
    },

    childRoutes: [
        {
            path: 'detail/:id'
        }
    ]
}
