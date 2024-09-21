let body = $response.body
console.log(body)

try {
    let obj = JSON.parse(body)
    if (obj.code == 0 && obj.data) {
        obj.data.level = 2;
        body = JSON.stringify(obj)
    }
} catch(e) {
    console.error(__name, 'error', e.message)
}

$done(body)
