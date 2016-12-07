/**
 * Created by wen91 on 2016/11/28.
 */
import React, {Component} from 'react'

export default class CommonListContainer extends Component {
    componentWillMount() {
        // 这个方法并不是每次更新都会执行的，因为有缓存
        // needLoading 的改变并不会触发这里
        const extraQueryParameter = this.props.queryParameter
        extraQueryParameter && this.props.initList(extraQueryParameter)
        this.loading()
    }

    componentDidUpdate() {
        // 所以只能在这里检测needLoading的改变
        this.loading()
    }

    loading() {
        let {list: {page = 5, rows = 10, needLoading, extraQueryParameter = {}}, dataFormatter, url} = this.props
        if (needLoading) {
            extraQueryParameter.page = parseInt(page, 10) + 1
            extraQueryParameter.rows = rows
            this.props.fetchListData({url, body: extraQueryParameter, dataFormatter})
        }
    }

    render() {
        let {list: {pages = [], needLoading, page, totalPageNum}, listItem} = this.props
        let tips = page < totalPageNum ? '正在加载中...' : '已经到底喽~'
        console.log(pages, 45685656)
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
        let {page: {isShow, height, pageContent, pageNum}, listItem: ListItem} = this.props
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
