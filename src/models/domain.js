const { Int32 } = require("mongodb");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const domainSchema = new Schema({
  domain: {
    type: String,
    required: true,
  },
  priority: {
    type: Number,
    // required: true,
  },
  port: { type: Number },
  expiredDate: {
    type: Date,
  },
  status: {
    type: String,
  },
});

module.exports = mongoose.model("Domain", domainSchema);
