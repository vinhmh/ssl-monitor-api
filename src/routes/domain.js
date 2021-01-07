const domainController = require('../controllers/domainController')
module.exports = function(app){
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });
  app.get('/domain/listDomains',domainController.listDomain)
  app.post('/domain/addDomain', domainController.addDomain)
  app.delete('/domain',domainController.deleteDomain)
}