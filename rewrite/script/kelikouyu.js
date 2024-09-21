var obj = JSON.parse($response.body);

obj.userDetail.summary.vipInfos=[
        {
          "level" : 1,
          "beginAt" : 1,
          "expireAt" : 4092640548
        }
      ];
obj.userDetail.summary.userStatus="USER_STATUS_OK";
obj.userDetail.summary.hasBoundInfos = [
  {
    "type" : "USER_BIND_TYPE_PHONE",
    "bindTargetCode" : "188****8888"
  }
];

$done({body : JSON.stringify(obj)})