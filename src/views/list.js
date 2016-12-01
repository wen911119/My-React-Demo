/**
 * Created by WJ on 2016/11/19.
 */
import React from 'react'


/* 留言板 布局基页 */
const ListView = ({children, location}) => (
    <div>
        <div>这是列表页</div>
        <div style={{height: '1000px', backgroundColor: '#ccc'}}>这是图片区</div>
        { children }
    </div>
)

export default ListView
