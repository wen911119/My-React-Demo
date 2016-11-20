import { injectReducer } from 'REDUCER'
import createContainer from 'UTIL/createContainer'

const connectComponent = createContainer(
    ({ list }) => ({ list }), // mapStateToProps
    require('ACTION/list').default                // mapActionCreators
)

export default {
    path: 'list',

    getComponent (nextState, cb) {
      require.ensure([], (require) => {
          console.log(123)
          injectReducer('list', require('REDUCER/list/').default)
          console.log(456)
          cb(null, require('VIEW/list').default)
      }, 'listView')

    },

    indexRoute: {
        getComponent (nextState, cb) {
            require.ensure([], (require) => {
                console.log(789)
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



