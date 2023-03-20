var body=$response.body;
    body = body.replace(/vipstatus\":\d+/g,'vipstatus":1');
    body = body.replace(/isexpert\":false/g,'isexpert":true');
    body = body.replace(/endtime\":"\d+-\d+-\d+/g,'endtime":"2099-09-09');
    body = body.replace(/vipResidualDay\":\d/g,'vipResidualDay":9999');
$done(body);
