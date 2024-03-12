var obj = JSON.parse($response.body);

obj.data.memberShipFlag=1;
obj.data.memberShipExpireTime="2099-09-09 14:38:32";
obj.data.memberShipRetainDay=9999;
obj.data.commonMemberShipExprireTime="2099-09-09 14:38:32";
obj.data.memberShipRemainCnt=9999;
obj.data.commonmMemberShipRetainCnt=9999;
obj.data.commonmMemberShipRetainDay=9999;
obj.data.memberShipLevel=5;
obj.data.commonMemberShipFlag=1;
obj.data.commonMemberShipLevel=5;
obj.data.memberShipValidity=1;

$done({body : JSON.stringify(obj)});