/**
 * Created by WJ on 2016/11/20.
 */
import React, { Component } from 'react'

export default class ListItem extends Component {
    render() {
        let {name, imgUrl, brand, price} = this.props.data
        return (
            <div className="flex-box listItem">
                <div className="goods_pic">
                    <img src={imgUrl} alt=""/>
                </div>
                <div className="goods_text flex-item-1">
                    <div className="goods_brand">{brand}</div>
                    <div className="goods_name">{name}</div>
                    <div className="goods_price">{price}</div>
                </div>
            </div>
        )

    }
}
