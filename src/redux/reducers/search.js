/**
 * Created by wen91 on 2016/11/28.
 */
import { combineReducers } from 'redux'
import listReducer from './list'


export default combineReducers({
    list: listReducer,
    fillter: {}
})