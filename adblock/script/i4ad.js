var body = $response.body;

body = body.replace(/"ad\":\[.+\]/g,'"ad":[]');
body = body.replace(/"adli\":\[.+\]/g,'"adli":[]');

$done(body);
