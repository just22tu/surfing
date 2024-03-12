var url = $request.url;
var body = $response.body;

if (url.match(/https?:\/\/h5\.ileci\.com\/coursePay/)) {
    var obj = JSON.parse(body);
    obj.data.orderID = "";
    obj.data.price = "";
    // obj.data.originalPrice = "";
    // obj.data.userDiscountCount = 9999;
    $done({ body: JSON.stringify(obj) });
} else if (url.match(/https?:\/\/mapi\.ileci\.com\/v\d\/updateNewVocabularyList\d\?/)) {
    body = body.replace(/"freeState":0/g, '"freeState":1');
    $done({ body });
} else {
    $done({});
}

$done({body : JSON.stringify(obj)});