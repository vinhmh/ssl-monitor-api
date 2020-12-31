const { raw } = require("body-parser")

var token = "jVJZlsMgDLsSeJHhOFng%2FkcYQTJJOtP32vSjgGXJlm1dF838LSKWXS2swuBoYahhUUUmQnWJNXSeMdApvcen5B18Y96KSrwQDx2fa9GDIw4GWVIKD%2F%2BILzceGzqCGW1k3FEIegjZDF2r1iuayXirUY%2FIjflqKzxunB44mCYtANWzGm%2FK%2F4rMFwE%2FnaeB4asRmYkkAT3IZMbFJ4erZ9UeJRIdEuThFHtoZvPs877DHxXbyJwq1J4dCOtIQ4e6rPCBrY%2FudHqpmDPxk5evVMIe6YOC8zZ6i7ERD6z%2BcV%2FJtpmTO1Nh%2B3oO9uBh9Mxvb5jOjQz6RNd%2Bo43KzHrVuzo%2F3bz2KJ%2Bo%2BpzCy16%2F4h47SSYZ8xwYa%2F95AqyokUdRLp70pip6Qcc4gavmNKLztpcEqqJstbSVLvfmvUu10bNte%2Bul5fDefgA%3D"
var puk = "d08f514d319af2ff1f2089d8a573eabf"
const rawurldecode = unescape(token.replace("%20"," "))
console.log(rawurldecode.digest('base64'))