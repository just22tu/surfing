
let obj = JSON.parse($response.body);
  obj.data.endTime = 4092599349000;
  obj.data.hasOpenedMember = true;
  $done({body: JSON.stringify(obj)});
