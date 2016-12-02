/**
 * Created by wen91 on 2016/12/2.
 */
import xhr from './xhr/'

class CommonListService {
    fetch({url, data, type = 'json'}) {
        return xhr(url, data, type)
    }
}

export default new CommonListService()