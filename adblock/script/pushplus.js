let body = $response.body;

let pattern = /<div class="container py-3 text-center">([\s\S]*?)<hr class="my-3 ad" \/>([\s\S]*?)<a href="https:\/\/ai3.pushplus.plus" target="_blank">([\s\S]*?)<\/a>([\s\S]*?)<\/div>/g;

body = body.replace(pattern, '<div class="container py-3 text-center"></div>');

$done({ body });
