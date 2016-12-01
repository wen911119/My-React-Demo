/**
 * Created by WJ on 2016/11/19.
 */
import React, {Component} from 'react'
import ListPage from './ListPage'

export default class ListContainer extends Component {
    componentWillMount() {
        // 这个方法并不是每次更新都会执行的，因为有缓存
        // isLoading 的改变并不会触发这里
        this.updateList()

    }

    updateList() {
        let {listData: {currentPage = 1, rows = 10, isLoading}} = this.props.list
        if (isLoading) {
            this.props.fetchList({currentPage: parseInt(currentPage, 10) + 1, rows})
        }
    }


    componentDidUpdate() {
        // 所以只能在这里检测isLoading的改变
        this.updateList()
    }

    render() {
        let {listData: {pages = [], isLoading, currentPage, pageNum}} = this.props.list
        let tips = currentPage < pageNum ? '正在加载中...' : '已经到底喽~'
        return (
            <div data-state={isLoading}>
                <div id="listTopTag"></div>
                { pages.map((page) =>
                    <ListPage page={page} key={page.pageIndex}/>
                )}
                <div id='bottomLoading'>{tips}</div>
            </div>
        )
    }
}
