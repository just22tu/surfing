var obj = JSON['parse']($response['body']);
if ($request['url']['indexOf']('hotWords') !== -1) {
    obj['hotwords'] = {};
    obj['tabs'] = {};
    delete obj['abver']
}
if ($request['url']['indexOf']('hotSearchTerms') !== -1) {
    obj['topData']['data'] = {};
    obj['data'] = {}
}
$done({
    body: JSON['stringify'](obj)
});
