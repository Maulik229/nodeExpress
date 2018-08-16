// ServerPort.js

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Define collection and schema for Items
var ServerPort = new Schema({
  body: {
    type: String
  },
  title: {
      type: String
  }
},{
    collection: 'MyCollection'
});

module.exports = mongoose.model('ServerPort', ServerPort);