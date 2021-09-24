const { model, Schema } = require('mongoose');

const grocerySchema = new Schema({
    item: String
});

const Grocery = model('Grocery', grocerySchema);

module.exports = Grocery;