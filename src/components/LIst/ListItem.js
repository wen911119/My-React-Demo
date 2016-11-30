/**
 * Created by WJ on 2016/11/20.
 */
import React, {Component} from 'react'

export default class ListItem extends Component {
    render() {
        let {productName, imgUrl_300_300: mgUrl, brandName, salesPrice} = this.props.data

        return (
            <div className="flex-box listItem">
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
