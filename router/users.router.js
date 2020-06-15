const express = require('express');
const router = express.Router();
const User = require('../models/user.models');

//GET /users -> give me all the users
router.get('/', (req,res) => {
  const users = User.find();
  res.status(200).json({
    users
  })
})

//GET /users/:id -> find one user by their id
router.get('/:id', (req,res) => {
  const users = User.find({id: req.params.id});
  res.status(200).json({
    users
  })
})

//POST /users -> create a new user
router.post('/', (req,res) => {
  const {name,age} = req.body;
  const user = new User(name, age);
  user.save();
  res.status(201).json({
    message: 'you have created user'
  })
})

//PUT /users/:id -> update by id
router.put('/:id', (req,res) => {
  const {name, age} = req.body;
  const updateOptions = {};
  if(name){
    updateOptions.name = name;
  }
  if(age){
    updateOptions.age = age;
  }

  //transaction
  User.update({id: req.params.id}, updateOptions)
  res.status(200).json({
    message: 'update'
  })
})

//DELETE /users/:id -> delete by id
router.delete('/:id', (req, res) => {
  User.remove({ id: req.params.id })
  res.status(200).json({
    message: 'You deleted it'
  })
})


module.exports = router;