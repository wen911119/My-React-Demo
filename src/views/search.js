/**
 * Created by wen91 on 2016/11/28.
 */
import React from 'react'


/* 留言板 布局基页 */
const SearchView = ({children, location}) => (
    <div>
        <div>这是搜素结果页，包含列表组件，筛选组件，排序组件</div>
        { children }
    </div>
)

export default SearchView