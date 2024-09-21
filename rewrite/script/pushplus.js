var obj = JSON.parse($response.body);

obj.data.vipUserResponseDto.isVip=1;
obj.data.vipUserResponseDto.lastDay=9999999999;
obj.data.points=999999999;
obj.data.roleType=1;

$done({body: JSON.stringify(obj)})