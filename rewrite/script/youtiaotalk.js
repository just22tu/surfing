var obj = JSON.parse($response.body);

obj.data.memberLevel=2;
obj.data.memberExpireTime="2099-09-09";
obj.data.isAureole=true;
obj.data.userInfo.aureoleShowType=2;
obj.data.userInfo.memberLevel=2;
obj.data.userType=2;
obj.data.memberTrialRemaining=999999999;


$done({body: JSON.stringify(obj)})
