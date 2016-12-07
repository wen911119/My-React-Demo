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
        let {list: {page = 1, rows = 10, needLoading}, dataFormatter, url } = this.props
        if (needLoading) {
            this.props.fetchListData({url, page: parseInt(page, 10) + 1, rows, dataFormatter})
        }
    }

    render() {
        let {list: {pages = [], needLoading, page, pageNum}, listItem} = this.props
        let tips = page < pageNum ? '正在加载中...' : '已经到底喽~'
        return (
            <div data-state={needLoading}>
                <div id="listTopTag"></div>
                { pages.map((page) =>
                    <ListPage page={page} key={page.pageNum} listItem={listItem}/>
                )}
                <div id='bottomLoading'>{tips}</div>
            </div>
        )
    }
}

class ListPage extends Component {
    render() {
        let {page:{isShow, height, pageContent, pageNum}, listItem:ListItem} = this.props
        if (isShow) {
            return (
                <div className={'listPage_' + pageNum}>
                    { pageContent.map((item, index) =>
                        <ListItem data={item} key={pageNum + '-' + index}/>
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