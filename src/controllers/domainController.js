const db = require("../models/index");
const Domain = db.domain;
var mongo = require("mongodb");
const mongoose = require("mongoose");
const domain = require("../models/domain");
var o_id = new mongo.ObjectID();
// collection.update({'_id': o_id});

exports.addDomain = (req, res) => {
  const domain = new Domain({
    domain: req.body.domain,
    priority: req.body.priority,
    domain:req.body.domain
  });

  domain.save((err) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }
  });
  res.send({ message: "Add domain successfully" });
};

exports.listDomain = (req, res) => {
  Domain.find({}, (err, domain) =>
    {if(err) console.log(err)
    res.send(domain)
    });
};

exports.deleteDomain = (req, res) => {
  var id = mongoose.Types.ObjectId(req.query.id)
  Domain.deleteOne({
      _id:id
  },(err,domain) =>{
      if(err) res.send(err);
      res.json({message: 'Domain successfully deleted'});
  })
};

