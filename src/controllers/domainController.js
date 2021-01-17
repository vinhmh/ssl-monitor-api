const db = require("../models/index");
const Domain = db.domain;
var mongo = require("mongodb");
const mongoose = require("mongoose");
const domain = require("../models/domain");
var o_id = new mongo.ObjectID();

exports.addDomain = (req, res) => {
  const domain = new Domain({
    domain: req.body.domain,
    priority: req.body.priority,
    port:req.body.port,
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

exports.deleteDomain =  (req, res) => {
  var id = req.params.id
  Domain.findByIdAndRemove(id).then(data => {
    if (!data) {
      res.status(404).send({
        message: `Cannot delete domain with id=${id}. Maybe domain was not found!`
      });
    } else {
      res.send({
        message: "Domain was deleted successfully!"
      });
    }
  })
  .catch(err => {
    res.status(500).send({
      message: "Could not delete Tutorial with id=" + id
    });
  });
};

