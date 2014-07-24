var Retsly = require('retsly-sdk');
var retsly = new Retsly('LhBv616CKzcUtdplacAX', '43147991398c29d166dd70152caa3600', { debug: true });

retsly.ready(function() {
  retsly.get('/api/v1/listing/test.json', {}, function(res) {
    // { success: true, status_code: 200, bundle: [{ ... }, { ... }] }
  });
});