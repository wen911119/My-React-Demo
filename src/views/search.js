/**
 * Created by WJ on 2016/12/13.
 */
import React from 'react'
import {combineReducers} from 'redux'
import searchBoxReducer from 'COMPONENT/SearchBox/SearchBoxReducer.js'
const SearchView = ({children, location}) => (
    <div>
        <div>这是搜索页</div>
        { children }
    </div>
)

export default SearchView

export const searchReducer = combineReducers({
    searchBox: searchBoxReducer,
    others: {}
})
