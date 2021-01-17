const db = require('../src/models/index');
const adUser = db.admin

checkEmail = (req, res, next) => {
    // Email
    adUser.findOne({
      email: req.body.email
    }).exec((err, user) => {
      if (err) {
        res.status(500).send({ message: err });
        return;
      }

      if (user) {
        res.status(400).send({ message: "Failed! Email is already in use!" });
        return;
      }
      next();
    });
  };
  
const verifySignup = checkEmail;
module.exports = verifySignup;