/**
 * Created by MB-WJ on 2016/12/2.
 */
import React, {Component} from 'react'

export default class GoodsListItem extends Component {
    render() {
        let {productName, imgUrl_300_300: mgUrl, brandName, salesPrice} = this.props.data

        return (
            <div className="flex-box listItem" style={{height: '360px'}}>
                <div className="goods_pic">
                    <img src={mgUrl} alt=""/>
                </div>
                <div className="goods_text flex-item-1">
                    <div className="goods_brand">{brandName}</div>
                    <div className="goods_name">{productName}</div>
                    <div className="goods_price">{salesPrice}</div>
                </div>
            </div>
        )

    }
}

export function goodsListDataFormatter(originalData) {
    if (originalData.code == 1) {
        return {
            pageContent: originalData.data.list,
            pageNum: originalData.data.fpage.currentPage,
            height: originalData.data.fpage.rows * 18 * 20,
            totalPageNum: originalData.data.fpage.pageNum,
            page: originalData.data.fpage.page,
            rows: originalData.data.fpage.rows
        }
    } else {
        return {}
    }
}

export const dataUrl = '/list/'