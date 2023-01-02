body = $response.body.replace(/\"is_vip":\w+/g, '\"is_vip":true')
$done({body});
