/**
 * Created by wen91 on 2016/12/2.
 */
import xhr from './xhr/'

class CommonListService {
    fetch({url, body = {}, dataType = 'json'}) {

        return xhr(url, body, dataType)
    }
}

export default new CommonListService()