const adminController = require('../controllers/adminController')
const verifySignup = require('../../midleware/verifySignup')


module.exports = function(app){
    app.use(function(req, res, next) {
        res.header(
          "Access-Control-Allow-Headers",
          "x-access-token, Origin, Content-Type, Accept"
        );
        next();
      });
    
    app.post('/signup',verifySignup,adminController.signup)
    app.post('/login',adminController.login)
}