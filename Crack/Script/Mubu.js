let body = $response.body
console.log(body)
try {
    let obj = JSON.parse(body)
    if (obj.code == 0 && obj.data) {
        obj.data.expert = true;
        obj.data.level = 1;
        obj.data.vipEndDate = "20990909"
        obj.data.name = "possess"
        obj.data.wxName = "possess"
        body = JSON.stringify(obj)
    }
} catch(e) {
    console.error(__name, 'error', e.message)
}
$done(body)