var crypto = require('crypto');
var base64 = require('base-64')
var utf8 = require('utf8');
var key = 'the shared secret key here';
var message = 'the message to hash here';

var hash = crypto.createHmac('sha256', key).update(message);

// to lowercase hexits
var abss = hash.digest('hex');
console.log(abss);
// to base64
hash.digest('base64');

var encoded = 'Zm9vIMKpIGJhciDwnYyGIGJheg==';
var bytes = base64.decode(encoded);
var text = utf8.decode(bytes);
console.log(text);

var token1 = "jVJZlsMgDLsSeJHhOFng%2FkcYQTJJOtP32vSjgGXJlm1dF838LSKWXS2swuBoYahhUUUmQnWJNXSeMdApvcen5B18Y96KSrwQDx2fa9GDIw4GWVIKD%2F%2BILzceGzqCGW1k3FEIegjZDF2r1iuayXirUY%2FIjflqKzxunB44mCYtANWzGm%2FK%2F4rMFwE%2FnaeB4asRmYkkAT3IZMbFJ4erZ9UeJRIdEuThFHtoZvPs877DHxXbyJwq1J4dCOtIQ4e6rPCBrY%2FudHqpmDPxk5evVMIe6YOC8zZ6i7ERD6z%2BcV%2FJtpmTO1Nh%2B3oO9uBh9Mxvb5jOjQz6RNd%2Bo43KzHrVuzo%2F3bz2KJ%2Bo%2BpzCy16%2F4h47SSYZ8xwYa%2F95AqyokUdRLp70pip6Qcc4gavmNKLztpcEqqJstbSVLvfmvUu10bNte%2Bul5fDefgA%3D"
var hash1 = crypto.createHash('sha1').update(token1);

// to lowercase hexits
var abss1 = hash1.digest('hex');
console.log("=-------afasfff----",abss);