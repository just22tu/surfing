/**********
[rewrite_local]
https:\/\/openapiv5\.ketangpai\.com\/*
[mitm]
hostname= openapiv5.ketangpai.com
**********/

var body=$response.body;
body = body.replace(/"remainTimes\":\d+/g,'"remainTimes":99999');
body = body.replace(/"cutscreenState\":1/g,'"cutscreenState":0');
body = body.replace(/"allowcopy\":"0"/g,'"allowcopy":"1"');
body = body.replace(/"allowpaster\":"0"/g,'"allowpaster":"1"');
body = body.replace(/"viewtestpaper\":"0"/g,'"viewtestpaper":"1"');
body = body.replace(/"viewanswer\":"0"/g,'"viewanswer":"1"');
body = body.replace(/"studentCount\":\d+/g,'"studentCount":0');

$done(body);

