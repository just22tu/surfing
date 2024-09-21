var body=$response.body;
    body = body.replace(/"IsMember\":false/g,'"IsMember":true');
    body = body.replace(/"IsValid\":false/g,'"IsValid":true');
    body = body.replace(/"EndDate\":"\d+-\d+-\d+"/g,'"EndDate":"2099-09-09"');
    body = body.replace(/"ValidDay\":\d+/g,'"ValidDay":9999');
    body = body.replace(/"DisplayType\":0/g,'"DisplayType":12');
$done(body);
