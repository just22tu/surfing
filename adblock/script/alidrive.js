let obj = JSON.parse($response.body);
if (obj.result) {
    obj.result = Object.values(obj.result).filter(item => (item["appCode"]=="file" || item["appCode"]=="video"));
}
$done({ body: JSON.stringify(obj) });
