const express = require('express')
const router = express.Router();
const db = require('../db');
const Location = require('../models/location.models');
const { response } = require('express');


//GET -> /locations
router.get('/', (req,res) => {
  const locations = db.get('locations')
                      .value();
  res.status(200).json({
    locations
  })
})


router.get('/:id', (req,res) => {
  const locations = db.get('locations')
                      .filter(location => location.id === req.params.id)
                      .value();
  res.status(200).json({
    locations
  })
})

router.post('/', (req,res) => {
  const {lat, lon, userId} = req.body;
  const location = new Location(lat, lon, userId);
  db.get('locations')
    .push(location)
    .write();
  res.status(200).json({
    msg: 'You have create a location'
  })
})

router.put('/:id', (req,res) => {
  const {lat, lon} = req.body;
  const updateOptions = {};
  if(lat){
    updateOptions.latitude = lat;
  }
  if(lon){
    updateOptions.longitude = lon;
  }
  db.get('locations')
    .find({ id: req.params.id })
    .assign(updateOptions)
    .write();
  res.status(200).json({
    msg: 'update successful'
  })
})

router.delete('/:id', (req,res) => {
  db.get('locations')
    .remove({ id: req.params.id })
    .write();
  res.status(200).json({
    msg: 'You have success deleted that location'
  })
})


module.exports = router;