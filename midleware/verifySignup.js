const AdminModel = require('../src/models/adminUser');

checkEmail = (req, res, next) => {
    // Email
    AdminModel.findOne({
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
  next();

module.exports = checkEmail;