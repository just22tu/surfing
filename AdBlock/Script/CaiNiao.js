var obj = JSON.parse($response.body); - 1 != $request.url.indexOf("mtop.cainiao.nbpresentation.protocol.homepage.get.cn") ? obj.data ? .result ? .dataList ? .length > 0 && (obj.data.result.dataList = obj.data.result.dataList.filter(d = >"big_banner_area_v870" != d.type)) : -1 != $request.url.indexOf("mtop.cainiao.guoguo.nbnetflow.ads.index.cn") ? obj.data ? .result && (obj.data.result = []) : -1 != $request.url.indexOf("mtop.cainiao.adkeyword") && obj.data ? .result ? .adHotKeywords && (obj.data.result.adHotKeywords = []);
var body = JSON.stringify(obj);
$done({
    body
});
