/**
 * Created by wen91 on 2016/11/28.
 */
import React, {Component} from 'react'

export default class CommonListContainer extends Component {
    componentWillMount() {
        // 这个方法并不是每次更新都会执行的，因为有缓存
        // needLoading 的改变并不会触发这里
        this.loading()
    }

    componentDidUpdate() {
        // 所以只能在这里检测needLoading的改变
        this.loading()
    }

    loading() {
        let {listData: {currentPage = 1, rows = 10, needLoading}} = this.props.list
        if (needLoading) {
            this.props.fetchListData({currentPage: parseInt(currentPage, 10) + 1, rows})
        }
    }

    render() {
        let {listData: {pages = [], needLoading, page, pageNum}, pageItem} = this.props
        let tips = page < pageNum ? '正在加载中...' : '已经到底喽~'
        return (
            <div data-state={needLoading}>
                <div id="listTopTag"></div>
                { pages.map((page) =>
                    <ListPage page={page} key={page.pageNum} PageItem={pageItem}/>
                )}
                <div id='bottomLoading'>{tips}</div>
            </div>
        )
    }
}

class ListPage extends Component {
    render() {
        let {page:{isShow, height, pageContent, pageNum}, PageItem} = this.props
        if (isShow) {
            return (
                <div className={'listPage_' + pageNum}>
                    { pageContent.map((item, index) =>
                        <PageItem data={item} key={pageNum + '-' + index}/>
                    )}
                </div>


            )
        } else {
            return (
                <div style={{height: height}} className={'listPage_' + pageNum}>

                </div>
            )
        }
    }
}