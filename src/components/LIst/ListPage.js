/**
 * Created by WJ on 2016/11/20.
 */
import React, { Component } from 'react'
import ListItem from './ListItem'

export default class ListPage extends Component {
    render () {
        let { isShow, height, items } = this.props.page
        if (isShow) {
            return (
                <div className="listPage">
                    { items.map((item) =>
                        <ListItem data={item}/>

                    )}
                </div>


            )
        }else {
            return (
                <div style={height} className="listPage">

                </div>
            )
        }
    }
}
