const express = require('express');
const router = express.Router();
const {Ad} = require('../models/ad');
router.get('/', async (req, res) => {
    const adList = await Ad.find();
  
    if(!adList) {
      res.status(500).json({success: false})
    }
    res.send(adList);
  });

  router.get('/:id', async (req, res) => {
    const ad = await Ad.findById(req.params.id);
  
    if(!ad) {
      res.status(500).json({success: false})
    }
    res.send(ad);
  });
  
router.post('/', (req, res) => {
    const ad = new Ad({
      title: req.body.title,
      location: req.body.location,
      description: req.body.description,
      contact: req.body.contact,
    })
  
    ad.save().then((createdAd => {
      res.status(201).json(createdAd)
    })).catch((err => {
      res.status(500).json({
        error: err,
        success: false
      })
    }))
  });
  
module.exports = router;