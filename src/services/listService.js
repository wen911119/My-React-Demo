/**
 * Created by wen91 on 2016/11/27.
 */
import xhr from './xhr/'
/**
 * 对应后端的 /msg/* 所有 API
 */
class ListService {
    /**
     * 取 list（命名为 fetch 而非 get 主要是因为是远程操作）
     * @param  {String} options.author   作者名
     * @param  {Number} options.pageIdx  目标页码（默认是第 1 页）
     * @param  {Number} options.quantity 单页请求 msg 的数量（默认每页显示 10 条）
     * @param  {Number} options.msgId
     * @return {Promise}
     */
    fetch({page, rows}) {
        let url = '/list/'

        url = `${url}?page=${page}&rows=${rows}`

        return xhr({url})
    }


}

// 实例化后再导出
export default new ListService()
