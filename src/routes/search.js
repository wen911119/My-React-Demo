/**
 * Created by WJ on 2016/12/13.
 */

import {injectReducer} from 'REDUCER'
import createContainer from 'UTIL/createContainer'
import searchView, {searchReducer} from 'VIEW/search'

const searchBoxConfig = {
    placeholderWord: '满300减100',
    hotwords: ['羽绒服', '大衣', '男装'],
    suggestionsFromUrl: '/getAssociate',
    keywordToUrl: '/list/',
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
                cb(null, createContainer(({searchView: {searchBox: search}}) => ({
                    ...searchBoxConfig,
                    search
                }), require('COMPONENT/SearchBox/SearchBoxActions.js').default, require('COMPONENT/SearchBox/SearchBoxContainer.js').default))
            }, 'goodsList')
        }
    }
}
