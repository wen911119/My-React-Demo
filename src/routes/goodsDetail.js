/**
 * Created by WJ on 2016/12/20.
 */
import {injectReducer} from 'REDUCER'
import goodsDetailView, {goodsDetailReducer} from 'VIEW/goodsDetail'

export default {
    path: 'goodsDetail/:goods_sn',

    getComponent (nextState, cb) {
        require.ensure([], () => {
            injectReducer('goodsDetailView', goodsDetailReducer)
            cb(null, goodsDetailView)
        }, 'goodsDetailView')

    }
}
