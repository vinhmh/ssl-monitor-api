const { Int32 } = require('mongodb');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const domainSchema = new Schema({
    domain: {
        type: String, 
        required: true, 
        unique: true},
    priority: {
        type: Number, 
        required: true, 
        unique: true},
    port: {
        type: Array,
        "default": []
    },
    expiredDate:{
        type: String
    },
    status:{
        type: String
    }
   
})

module.exports  = mongoose.model('Domain', domainSchema)
