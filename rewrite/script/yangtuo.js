var obj = JSON.parse($response.body)

obj.data.totalIntegral=999999;
obj.data.signStatus=true;
obj.data.isVip=true;
obj.data.expiresTime="2099-09-09";

$done({body : JSON.stringify(obj)})