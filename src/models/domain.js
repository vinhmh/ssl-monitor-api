const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const db = require('../utils/db');
const autoIncrement = require('mongoose-auto-increment');

var userSchema = new Schema({
    domain: {
        type: String, 
        required: true, 
        unique: true},
    priority: {
        type: Int32Array, 
        required: true, 
        unique: true},
   
})

const doamains = mongoose.model('Domain', userSchema);
module.exports = {
    domains
};