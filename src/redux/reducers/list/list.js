/**
 * Created by WJ on 2016/11/20.
 */
import createReducer from 'UTIL/createReducer'
import { ACTION_HANDLERS } from 'ACTION/list/list'
import initState from 'STORE/initState'

export default createReducer(initState.list, ACTION_HANDLERS)
