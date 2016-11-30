/**
 * Created by WJ on 2016/11/19.
 */
import React, { Component } from 'react'
import ListPage from './ListPage'

export default class ListContainer extends Component {
    componentWillMount () {

        this.updateList()

    }

    updateList () {

        let { listData: {currentPage = 1, rows = 10} } = this.props.list
        this.props.fetchList({ currentPage, rows })
    }

    render () {
        let { listData: {pages = [] } } = this.props.list
        return (
            <div>
                { pages.map((page)=>
                    <ListPage page={page} />
                )}
                <div id='bottomLoading'>正在加载中...</div>
            </div>
        )
    }
}
