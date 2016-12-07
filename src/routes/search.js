/**
 * Created by wen91 on 2016/11/28.
 */
import {injectReducer} from 'REDUCER'
import createContainer from 'UTIL/createContainer'
import searchView, {searchReducer} from 'VIEW/search'
import GoodsListItem, {goodsListDataFormatter, dataUrl} from 'COMPONENT/CommonList/ListItems/GoodsListItem.js'


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
                cb(null, createContainer(({searchView: {goodsList:list}}) => ({
                    list,
                    listItem: GoodsListItem,
                    dataFormatter: goodsListDataFormatter,
                    url: dataUrl
                }), require('COMPONENT/CommonList/CommonListAction.js').default, require('COMPONENT/CommonList/CommonListContainer.js').default))
            }, 'goodsList')
        }
    },

    childRoutes: [
        {
            path: 'detail/:id'
        }
    ]
}
