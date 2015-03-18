var request = require("request");

//获取cookie字段
function parseCookies (cookie) {
    var list = {},
        rc = cookie;

    rc && rc.split(';').forEach(function( cookie ) {
        var parts = cookie.split('=');
        list[parts.shift().trim()] = decodeURI(parts.join('='));
    });

    return list;
}

//错误处理
function errorHandle(err, obj, callback) {
    err.params = obj;
    callback(err);
}

//响应处理
function resHandle(obj, res, callback) {
    var httpError = null;
    if (res.statusCode < 300 && res.statusCode >= 200) {
        callback(null, res.body);
    }
    else if (res.statusCode >= 400) {
        console.debug(obj);
        var msg = "调用接口发生错误";
        if(res.statusCode == 403) {
            msg = res.body.message;
        }
        httpError = new Error(msg);
        httpError.params = obj;
        httpError.code = res.statusCode;
        callback(httpError);
    }

}
//request类库回调处理封装
function requestCallback(obj, callback) {
    return function (err, res, body) {
        console.timeEnd(obj.method + ":" + obj.url + ":" + parseCookies(obj.headers.cookie).etoken);
        if (err) {
            errorHandle(err, obj, callback);
        } else {
            resHandle(obj, res, callback);
        }
    }
}
/**
 * obj支持的格式为
 * {
 *      url，
  *     qs, 查询字符串
   *    headers:{
   *        token一般写到headers里面
   *    }  Http-Headers
   *    timeout 超时时间
 * }
 **/

exports.getData = function (obj, callback) {
    obj.method = "get";
    console.time(obj.method + ":" + obj.url + ":" + parseCookies(obj.headers.cookie).etoken );

    //加上content-length后 request请求接口会超时
    if( obj.headers['content-length']){
        delete obj.headers['content-length'];
    }

    request.get(
        {   url: obj.url,
            qs: obj.params,
            json: true,
            headers: obj.headers,
            timeout: 15000
        },
        requestCallback(obj, callback))
}

/**
 * obj支持的格式为
 * {
 *      url，
  *     json, 请求的json数据
   *    headers:{
   *        token一般写到headers里面
   *    }  Http-Headers
   *    timeout 超时时间
 * }
 **/

exports.postData = function (obj, callback) {

    obj.method = "post";
    console.time(obj.method + ":" + obj.url + ":" + parseCookies(obj.headers.cookie).etoken)

    //加上content-length后 request请求接口会超时
    if( obj.headers['content-length']){
        delete obj.headers['content-length'];
    }

    return request.post(
        {   url: obj.url,
            json: obj.params || true,
            headers: obj.headers,
            timeout: 15000
        },
        requestCallback(obj, callback))
}

/**
 * obj支持的格式为
 * {
 *      url，#url地址
  *     json, #请求的json数据
   *    headers:{
   *        token一般写到headers里面
   *    }  #Http-Headers
   *    timeout #超时时间
 * }
 **/

exports.putData = function (obj, callback) {
    obj.method = "put";
    console.time(obj.method + ":" + obj.url + ":" + parseCookies(obj.headers.cookie).etoken);

    //加上content-length后 request请求接口会超时
    if( obj.headers['content-length']){
        delete obj.headers['content-length'];
    }

    return request.put(
        {   url: obj.url,
            json: obj.params,
            headers: obj.headers,
            timeout: 15000
        },
        requestCallback(obj, callback))
}

/**
 * obj支持的格式为
 * {
 *      url，#url地址
  *     json, #请求的json数据
   *    headers:{
   *        token一般写到headers里面
   *    }  #Http-Headers
   *    timeout #超时时间
 * }
 **/

exports.delData = function (obj, callback) {
    obj.method = "del";
    console.time(obj.method + ":" + obj.url + ":" + parseCookies(obj.headers.cookie).etoken);

    //加上content-length后 request请求接口会超时
    if( obj.headers['content-length']){
        delete obj.headers['content-length'];
    }

    return request.del({
            url: obj.url,
            json: obj.params || true,
            headers: obj.headers,
            timeout: 15000
        },
        requestCallback(obj, callback))
}

exports.getStream = function (obj) {
    return request.get(
        {   url: obj.url,
            qs: obj.params,
            headers: obj.headers,
            timeout: 15000
        })
}

/**
 * obj为request参数
 *  fieldName为构造上传表单form的文件key
 *  stream为文件流
 *  options为request的form选项
 *  callback为回调
 * */
exports.postFileStream = function (obj, fieldName, stream, options, callback) {
    obj.method = "post";
    console.time(obj.method + ":" + obj.url + ":" + parseCookies(obj.headers.cookie).etoken);
    var form = request.post(
        {
            url: obj.url,
            headers: obj.headers,
            json: true,
            timeout: 15000
        }, requestCallback(obj, callback)
    ).form();


    options = options || {};
    form.append(fieldName, stream, options);
}