/**
 * Created by wen91 on 2016/12/2.
 */
import xhr from './xhr/'

class CommonListService {
    fetch({url, page = 1, rows = 10, type = 'json'}) {
        return xhr(url, page, rows, type)
    }
}

export default new CommonListService()