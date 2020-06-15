const uuid = require('uuid');

const Location = function(latitude, longitude, userId) {
  this.latitude = latitude;
  this.longitude = longitude;
  this.userId = userId;
  this.id = uuid.v4();
}

module.exports = Location;