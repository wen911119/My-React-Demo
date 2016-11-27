/**
 * Created by WJ on 2016/11/20.
 */
import createReducer from 'UTIL/createReducer'




const ACTION_HANDLERS = {
    fetchList: (state, {payload}) => {
        console.dir(payload)
        return state
    }
}


export default createReducer({}, ACTION_HANDLERS)

