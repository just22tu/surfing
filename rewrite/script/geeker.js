var obj = JSON.parse($response.body);

if (/voiceBagList/.test($request.url)) {
  if (obj.data.root) {
    obj.data.root.forEach(function(element) {
      element.isuser = true;
      element.isbuy = 1;
    });
  }

  if (obj.data.tlist) {
    obj.data.tlist.forEach(function(element) {
      element.isuser = true;
    });
}
} else if (/getVoiceBagDetail/.test($request.url)) {
  obj.data.isbuy = true;
}

$done({ body: JSON.stringify(obj) });