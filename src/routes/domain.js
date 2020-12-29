const express =  require('express');
const router = express.Router();
const domainModel = require('../models/domain');

router.get('/', async (req, res) => {
 try {
   const domains = await domainModel.find();
   res.json(domains);
 }
 catch (error){
   res.json({message : error});
 }
});

router.post('/', async (req, res) => {
  try {
    let addDomain = new domainModel(req.body);
    let domain = await addDomain.save();
    res.json(domain); 
  }
  catch (error){
    res.json({message : error});
  }
});

module.exports = router;