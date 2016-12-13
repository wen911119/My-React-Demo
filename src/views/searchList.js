/**
 * Created by MB-WJ on 2016/12/13.
 */
import React from 'react'
import {combineReducers} from 'redux'
import commonListReducer from 'COMPONENT/CommonList/CommonListReducer.js'

/* 留言板 布局基页 */
const searchListView = ({children, location}) => (
    <div>
        <div>这是搜素结果页，包含列表组件，筛选组件，排序组件</div>
        { children }
    </div>
)

export default searchListView


export const searchListReducer = combineReducers({
    goodsList: commonListReducer,
    filter: {},
    sort: {}
})

