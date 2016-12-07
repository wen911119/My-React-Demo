/**
 * Created by wen91 on 2016/12/2.
 */
import xhr from 'SERVICE/xhr'

class CommonListService {
    fetch({url, body, dataType}) {
        return xhr({url, body, dataType})
    }
}

export default new CommonListService()
