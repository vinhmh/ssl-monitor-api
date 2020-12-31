const crypto = require('crypto')
var sha1 = require('sha1');
const message = "d08f514d319af2ff1f2089d8a573eabf::=4f3a31313a224153474964656e74697479223a31333a7b733a31363a22004153474964656e74697479005f6964223b693a323636333335383b733a373a22002a0075756964223b693a323636333335383b733a383a22002a006c6f67696e223b733a383a22626f7275746f3939223b733a31323a22002a007075626c69634b6579223b733a33323a226430386635313464333139616632666631663230383964386135373365616266223b733a32313a22002a0065787069726174696f6e4461746574696d65223b733a31343a223230313931323233303733383430223b733a31393a22002a007375696369646554696d657374616d70223b733a31343a223230313931323235303632373131223b733a31333a22002a006c6f63616c456d61696c223b733a383a22626f7275746f3939223b733a31343a22002a00646f6d61696e456d61696c223b733a31313a22796f706d61696c2e636f6d223b733a383a22002a007374617465223b693a313b733a393a22002a00656e74697479223b693a313b733a373a22002a0061726561223b4e3b733a393a22002a0076616e697368223b693a303b733a383a22002a00726f6c6573223b733a303a22223b7d::=1"
var sha12 = sha1(message);

console.log(sha12);

// log convert hex to string
//const str = "806a3768c98eb133fe5ff2946f704cdef8e175fe";
var signer = crypto.createHash('sha1').update(message).digest('hex');
console.log(signer);

var token1 = "jVJZlsMgDLsSeJHhOFng%2FkcYQTJJOtP32vSjgGXJlm1dF838LSKWXS2swuBoYahhUUUmQnWJNXSeMdApvcen5B18Y96KSrwQDx2fa9GDIw4GWVIKD%2F%2BILzceGzqCGW1k3FEIegjZDF2r1iuayXirUY%2FIjflqKzxunB44mCYtANWzGm%2FK%2F4rMFwE%2FnaeB4asRmYkkAT3IZMbFJ4erZ9UeJRIdEuThFHtoZvPs877DHxXbyJwq1J4dCOtIQ4e6rPCBrY%2FudHqpmDPxk5evVMIe6YOC8zZ6i7ERD6z%2BcV%2FJtpmTO1Nh%2B3oO9uBh9Mxvb5jOjQz6RNd%2Bo43KzHrVuzo%2F3bz2KJ%2Bo%2BpzCy16%2F4h47SSYZ8xwYa%2F95AqyokUdRLp70pip6Qcc4gavmNKLztpcEqqJstbSVLvfmvUu10bNte%2Bul5fDefgA%3D"
var hash1 = crypto.createHash('sha1').update(token1);

// to lowercase hexits
var abss1 = hash1.digest('hex');
console.log("=-------afasfff----",abss);