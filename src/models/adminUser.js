const mongoose = require('mongoose');
const Admin = new mongoose.model(
    'AdminUser',
    new mongoose.Schema({
    email: {type:String , required : true},
    password : { type:String , required : true }
}));
module.exports = Admin