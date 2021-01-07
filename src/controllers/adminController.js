const db = require('../models/index')
const Admin = db.admin
const config = require('../config/auth.config')

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')

exports.signup = (req,res) => {
    const adminUser = new Admin(
        {   email: req.body.email,
            password: bcrypt.hashSync(req.body.password, 8)
        });
            
    adminUser.save((err) => {
    if (err) {
        res.status(500).send({ message: err});
        return;
        }   
            
    });res.send({message: "User register successfully"});
}
exports.login = (req, res) => {
    Admin.findOne({
      adminUser: req.body.adminUser
    })
      .exec((err, aduser) => {
        if (err) {
          console.log(err)
          res.status(500).send({ message: err });
          return;
        }
        if (!aduser) {
          return res.status(404).send({ message: "User Not found." });
        }
  
        var passwordIsValid = bcrypt.compareSync(
          req.body.password,
          aduser.password
        );
  
        if (!passwordIsValid) {
          return res.status(401).send({
            accessToken: null,
            message: "Invalid Password!"
          });
        }
  
        var token = jwt.sign({ id: aduser._id }, config.secret, {
          expiresIn: 86400 // 24 hours
        });
        res.status(200).send({
          id: aduser._id,
          email: aduser.email,
          accessToken: token
        });
      });
  }

