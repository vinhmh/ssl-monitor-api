const AdminModel = require('../models/adminUser');
const bcrypt = require('bcrypt');

exports.signup() = (req,res) => {
    const adminUser = new AdminModel(
        {
            email: req.body.email,
            password: req.bcrypt.hashSync(req.body.password, 8)});
            adminUser.save((err, adminUser) => {
                if (err) {
                  res.status(500).send({ message: err });
                  return;
                   
};

exports.signin() = (req,res);