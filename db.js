const lowdb = require('lowdb');
const db = lowdb('./data.json');

db.defaults({ users: [], locations: []}).write();

module.exports = db;