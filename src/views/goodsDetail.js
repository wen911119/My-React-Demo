/**
 * Created by MB-WJ on 2016/12/15.
 */
import React from 'react'
import {combineReducers} from 'redux'

/* 商品详情 布局基页 */
const GoodsDetailView = ({children, location, params}) => (
    <div>
        <div>这是商品详情页,商品编码是{params.goods_sn}</div>
        { children }
    </div>
)

export default GoodsDetailView

export const goodsDetailReducer = combineReducers({
    slide: {},  // 轮播图组件
    goodsIntroduction: {},
    colorSizeSelector: {} // 颜色尺码选择组件
})
