var objc = JSON.parse($response.body);

objc = {
  "is_vip" : true,
  "vip_expire_at" : "2099-09-09",
  "vip_remain_days" : 9999,
  "is_big_member" : true,
  "vip_valid_at" : "2099-09-09",
  "big_member_expire_at" : "2099-09-09",
  "user_id" : "tripletu"
}

$done({body : JSON.stringify(objc)});
