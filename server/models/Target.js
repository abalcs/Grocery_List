const { model, Schema } = require('mongoose');

const targetSchema = new Schema({
    item: String
});

const Target = model('Target', targetSchema);

module.exports = Target;