import {injectReducer} from 'REDUCER'
import createContainer from 'UTIL/createContainer'

const connectComponent = createContainer(
    ({list}) => ({list}), // mapStateToProps
    require('ACTION/list').default                // mapActionCreators
)

export default {
    path: 'list',

    getComponent (nextState, cb) {
        require.ensure([], (require) => {
            injectReducer('list', require('REDUCER/list/').default)
            cb(null, require('VIEW/list').default)
        }, 'listView')

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



