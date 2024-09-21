var url = $request.url;
var obj = JSON.parse($response.body);

if (url.indexOf("/appServiceApi/vip/newUserPayVipData") !== -1) {

obj.data.vipList.forEach(function(vip) {
  vip.vipStatus = 1;
  vip.svipIsLifelong = 1;
});

obj.data.svipInfo.vipStatus = 1;
obj.data.svipInfo.svipIsLifelong = 1;

} else if (url.indexOf("/appServiceApi/video/videoDetail") !== -1) {
  obj.data.playAll = true;
}

$done({ body: JSON.stringify(obj) });
