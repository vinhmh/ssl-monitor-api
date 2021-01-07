const db = require('../models/index')
const Domain = db.domain
var mongo = require('mongodb');
var o_id = new mongo.ObjectID();
// collection.update({'_id': o_id});

exports.addDomain =(req,res) => {
    const domain = new Domain(
        {   domain: req.body.domain,
            priority: req.body.priority
        });
            
    domain.save((err) => {
    if (err) {
        res.status(500).send({ message: err});
        return;
        }   
            
    });res.send({message: "Add domain successfully"});
}

exports.listDomain = async(req,res) =>{
  const domains = await Domain.find({'_id': req.params.id})
  res.json(domains)
}

exports.deleteDomain = (req,res) =>{
    Domain.deleteOne({_id:req.params.id}).then( () =>{
    res.status(200).json({
        message: 'domain has been deleted ...',
        })
    })
}

// app.delete('/api/stuff/:id', (req, res, next) => {
//     Thing.deleteOne({_id: req.params.id}).then(
//       () => {
//         res.status(200).json({
//           message: 'Deleted!'
//         });
//       }
//     ).catch(
//       (error) => {
//         res.status(400).json({
//           error: error
//         });
//       }
//     );
//   })