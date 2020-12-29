const express = require('express');
const router = express.Router();
const PORT = process.env.PORT || 5000;
const adminModel = require('../models/adminUser')

router.get('/', (req, res) => {
    res.send(`Listening on ${ PORT }`);
})

router.get('/adminUser', (req, res) => {
    adminModel.find().then((adminUser) => {
        res.send({
            adminUser
        });
    }, (e) => {
        res.status(400).send(e);
    });
});

router.post('/adminUser', (req, res) => {
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

// router.get('/user/:userID', (req, res) => {
//     var userID = req.params.userID;

//     User.findOne({
//         userID: userID
//     }).then((user) => {
//         res.send(user);
//     }, (e) => {
//         res.status(400).send(e);
//     });
// });

// router.put('/user/:userID', (req, res) => {
//     var query = {
//         userID: req.params.userID
//     };

//     User.findOneAndUpdate(query, {
//         role: req.body.role,
//         password: req.body.password
//     }, {
//         upsert: true
//     }, (e, raw) => {
//         if (e) {
//             res.status(400).send('Invalid user supplied');
//         }
//         res.send(raw);
//     });
// });


// router.delete('/user/:userID', (req, res) => {
//     var query = {
//         userID: req.params.userID
//     };
//     User.findOneAndRemove(query,
//         (e, raw) => {
//             if (e) {
//                 res.status(400).send('Invalid username supplied');
//             }
//             res.send(raw);
//         });
// });

module.exports = router;