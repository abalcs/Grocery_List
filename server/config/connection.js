const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/groceries');

module.exports = mongoose.connection;