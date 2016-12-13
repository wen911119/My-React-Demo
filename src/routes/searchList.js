/**
 * Created by MB-WJ on 2016/12/13.
 */
/**
 * Created by WJ on 2016/12/13.
 */
import {injectReducer} from 'REDUCER'
import createContainer from 'UTIL/createContainer'
import searchListView, {searchListReducer} from 'VIEW/searchList'
import GoodsListItem, {goodsListDataFormatter, dataUrl} from 'COMPONENT/CommonList/ListItems/GoodsListItem.js'

const goodsListConfig = {
    listItem: GoodsListItem,
    dataFormatter: goodsListDataFormatter,
    dataFromUrl: dataUrl,
    queryParameter: {word: '', page: 1, rows: 20},
    dataType: 'json'
}

export default {
    path: 'list(/:keyword)',

    getComponent (nextState, cb) {
        require.ensure([], () => {
            injectReducer('searchListView', searchListReducer)
            cb(null, searchListView)
        }, 'searchListView')

    },

    indexRoute: {
        getComponent (nextState, cb) {
            require.ensure([], (require) => {
                cb(null, createContainer(({searchListView: {goodsList: list}}) => ({...goodsListConfig, list}), require('COMPONENT/CommonList/CommonListActions.js').default, require('COMPONENT/CommonList/CommonListContainer.js').default))
            }, 'goodsList')
        }
    }
}



