/**
 * Created by MB-WJ on 2016/12/2.
 */
import React, {Component} from 'react'
import {Link} from 'react-router'
export default class GoodsListItem extends Component {
    render() {
        let {productName, imgUrl_300_300: mgUrl, brandName, salesPrice, productCode} = this.props.data

        return (

            <div className="flex-box listItem" style={{height: '360px'}}>
                <div className="goods_pic">
                    <Link to={'/goodsDetail/' + productCode}><img src={mgUrl} alt=""/></Link>
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
        if (originalData.data.length == 0) {
            return {
                pageContent: [],
                pageNum: 0,
                height: 0,
                totalPageNum: 1,
                currentPage: 1,
                rows: 0
            }
        } else {
            return {
                pageContent: originalData.data.list,
                pageNum: originalData.data.fpage.currentPage,
                height: originalData.data.fpage.pagesize * 18 * 20,
                totalPageNum: originalData.data.fpage.total,
                currentPage: originalData.data.fpage.currentPage,
                rows: originalData.data.fpage.pagesize
            }
        }
    } else {
        return {}
    }
}

export const dataUrl = '/list/'

