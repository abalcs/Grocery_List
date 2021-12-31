const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/groceries', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

module.exports = mongoose.connection;