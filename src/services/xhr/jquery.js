import {rootPath, errHandler} from './config'

const xhr = ({url, body = null, method = 'get', dataType = 'json'}) => {
    const defer = $.Deferred()
    console.log(rootPath + url, body)
    $.ajax({
        type: method,
        url: rootPath + url,
        data: body,
        dataType: dataType
    })
        .done(defer.resolve)
        .fail(errHandler)

    return defer.promise()
}

export default xhr
