const express = require('express');
const router = express.Router();
const PORT = process.env.PORT || 5000;
const adminModel = require('../models/adminUser')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

router.get('/', (req, res) => {
    res.send(`Listening on ${ PORT }`);
})

router.get('/', (req, res) => {
    adminModel.find().then((adminUser) => {
        res.send({
            adminUser
        });
    }, (e) => {
        res.status(400).send(e);
    });
});

router.post('/', (req, res) => {
    var adminUser = new adminModel({
        email: req.body.email,
        password: req.body.password,
    });
    // result = User.addUser(user);
    adminUser.save().then((adminUser) => {
        res.send(adminUser);
    }, (e) => {
        res.status(400).send(e);
    });
});


router.post('/login',(req,res)=>{
    adminModel.findOne({email : req.body.email }).exec()
        .then(adminUser =>{
                if(adminUser){
                    verifyPassword(adminUser,req,res)
                }else{
                    res.json({message : "Incorrect email or password..."})
                }
            }).catch(error =>{
                res.status(500).json({message : `error : ${error}` })
        })
})
 
const verifyPassword = (adminUser,req,res)=>{
    bcrypt.compare(req.body.password,adminUser.password,(err,result)=>{
        if(err) return res.status(500).json({message : err})
        else{
            if(result) return getToken(adminUser,res)
            else return res.json({message : "Authentication failed ..."})
        }
    })
}

const getToken = (adminUser,res) =>{
    const token = jwt.sign({ email: adminUser.email},
        process.env.JWT_KEY, { expiresIn:"1h"})
    res.json({
        message : "Auth successful",
        adminUser,
        token : token
    });
}


module.exports = router;