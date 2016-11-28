/**
 * Created by wen91 on 2016/11/28.
 */
import {injectReducer} from 'REDUCER'
import createContainer from 'UTIL/createContainer'

const connectComponent = createContainer(
    ({list}) => ({list, rows: 15}), // mapStateToProps
    require('ACTION/list').default                // mapActionCreators
)

export default {
    path: 'search',

    getComponent (nextState, cb) {
        require.ensure([], (require) => {
            injectReducer('search', require('REDUCER/search').default)
            cb(null, require('VIEW/search').default)
        }, 'searchView')

    },

    indexRoute: {
        getComponent (nextState, cb) {
            require.ensure([], (require) => {
                cb(null, connectComponent(require('COMPONENT/List').default))
            }, 'list')
        }
    },

    childRoutes: [
        {
            path: 'detail/:id'
        }
    ]
}
