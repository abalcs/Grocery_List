const Grocery = require('../models/Grocery');

function routeCreate(app) {
    app.post('api/grocery', (req, res) => {
        Grocery.create(req.body)
        .then(grocery => {
            res.send('Completed');
        });
    });

    app.get('api/groceries', (req, res) => {
        Grocery.find()
        .then((groceries) => {
            res.send(groceries);
        });
    });

    app.delete('api/groceries', (req, res) => {
        Grocery.deleteOne(req.body)
        .then(() => {
            res.status(200).send('Completed');
        });
    });

    app.put('api/groceries', (req, res) => {
        console.log(req.body);
    });
}

module.exports = routeCreate;