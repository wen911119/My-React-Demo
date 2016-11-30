/**
 * Created by WJ on 2016/11/20.
 */
import React, {Component} from 'react'
import ListItem from './ListItem'

export default class ListPage extends Component {
    render() {
        let {isShow, height, pageContent, pageIndex} = this.props.page
        if (isShow) {
            return (
                <div className={'listPage_' + pageIndex} data-index={pageIndex}>
                    { pageContent.map((item) =>
                        <ListItem data={item} key={item.productCode}/>
                    )}
                </div>


            )
        } else {
            return (
                <div style={{height: height}} className={'listPage_' + pageIndex} data-index={pageIndex}>

                </div>
            )
        }
    }
}
