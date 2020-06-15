const uuid = require('uuid')
const db = require('../db')
const User = function(name, age){
  this.name = name;
  this.age = age;
  this.id = uuid.v4();
}

User.find = function(query){
  let users;
  if(!query){
    users = db.get('users').value()
    return users ? users : [];
  }else {
    users = db.get('users').find(query).value();
  }
  return users ? users : [];
};
User.update = function(query, updates){
  db.get('users')
    .find(query)
    .assign(updates)
    .write();
};
User.remove = function(query){
  db.get('users')
    .remove(query)
    .write();
};
User.prototype.save = function(){
  db.get('users')
    .push(this)
    .write();
};
module.exports = User;