const mongoose = require('mongoose')
mongoose.Promise = global.Promise

const db = {}
db.mongosse = mongoose
db.admin = require('./adminUser')
db.domain = require('./domain')

module.exports = db