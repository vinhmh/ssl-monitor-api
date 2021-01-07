require('dotenv').config();
const cors = require('cors');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const dbConfig = require('./config/dbConfig')
//routes
const db= require('./models/index')
const adRoute = require('./routes/adminUser')

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json());
adRoute(app)
require('./routes/domain')(app)

 //start 
 db.mongosse.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Successfully connect to MongoDB.");
  })
  .catch(err => {
    console.error("Connection error", err);
    process.exit();
  });

 const PORT = process.env.PORT || 5000;
 app.listen(PORT, () => {console.log(`Server is running on ${PORT}`)})