/**
 * Created by WJ on 2016/12/12.
 */
import xhr from 'SERVICE/xhr'

class SearchBoxService {
    fetch({url, keyWord, dataType}) {
        return xhr({url, keyWord, dataType})
    }
}

export default new SearchBoxService()
