require('dotenv').config();
const cors = require('cors');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');




// * Application-Level Middleware * //

// Third-Party Middleware

app.use(cors());
app.use(bodyParser.json());

// // Built-In Middleware

// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// Custom Middleware

// app.use(async (req, res, next) => {
//   req.context = {
//     models,
//     me: await models.AdminUser.findByLogin('vinhmh@gmail.com'),
//   };
//   next();
// });

// * import Routes * //

const domainRoute = require('./routes/domain');
const adminRoute = require('./routes/adminUser');

// * Start * //

const eraseDatabaseOnSync = true;

// init route
 app.use('/domain',domainRoute)
 app.use('/adminUser',adminRoute)

 //mongo connection
 mongoose.connect('mongodb://root:root@127.0.0.1:27017/ssl-monitor?authSource=admin',
 {useNewUrlParse: true})
 .then(() => console.log("Connected to Database! "))
 .catch(err => console.log(err));

 //start 
 app.listen(5000)