/**
 * Created by wen91 on 2016/11/28.
 */
import React, {Component} from 'react'
import {Link} from 'react-router'

export default class CommonListContainer extends Component {
    componentWillMount() {
        // 获取配置项
        let {queryParameter, dataFromUrl, listItem, dataFormatter, dataType} = this.props
        queryParameter.word = this.props.params.keyword || ''
        // 初始化
        this.props.init({queryParameter, dataFromUrl, listItem, dataFormatter, dataType})
    }


    componentDidUpdate() {
        // 所以只能在这里检测needLoading的改变
        let {needLoading, queryParameter, dataFromUrl, dataFormatter, dataType} = this.props.list
        if (needLoading) {
            this.props.fetchListData({
                url: dataFromUrl,
                body: queryParameter,
                dataFormatter: dataFormatter,
                dataType: dataType
            })
        }
    }


    render() {
        let {pages = [], currentPage, totalPageNum, listItem} = this.props.list
        let tips = currentPage < totalPageNum ? '正在加载中...' : '已经到底喽~'
        if (pages.length == 0) {
            return (
                <div>
                    <Link to='/search' style={{
                        'height': '30px',
                        'width': '100px',
                        'border': '1px solid #ccc',
                        'display': 'inline-block'
                    }}>
                    </Link>
                    <div>没有搜索结果</div>
                </div>
            )
        } else {
            return (
                <div>
                    <Link to='/search' style={{
                        'height': '20px',
                        'width': '100px',
                        'border': '1px solid #ccc',
                        'display': 'inline-block'
                    }}>
                    </Link>
                    <div id="listTopTag"></div>
                    { pages.map((page) =>
                        <ListPage page={page} key={page.pageNum} listItem={listItem}/>
                    )}
                    <div id='bottomLoading'>{tips}</div>
                </div>
            )
        }
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

