var body=$response.body;

body = body.replace(/"viewed\":"N"/g,'"viewed":"Y"');

body = body.replace(/"isRead\":"N"/g,'"isRead":"Y"');

body = body.replace(/"hasAuthority\":false/g,'"hasAuthority":true');

body = body.replace(/"hasRemind\":false/g,'"hasRemind":true');

body = body.replace(/"isVip\":false/g,'"isVip":true');

body = body.replace(/"hasVip\":false/g,'"hasVip":true');

//body = body.replace(/"accountBalance\":\d+/g,'"accountBalance":9999999');

//body = body.replace(/"cost\":\d+/g,'"cost":0');

//body = body.replace(/"tianBi\":\d+/g,'"tianBi":0');

//body = body.replace(/"code\":\d+/g,'"code":0');

//body = body.replace(/"type\":0/g,'"type":1');

body = body.replace(/"role\":"N"/g,'"role":"Y"');

$done(body);
