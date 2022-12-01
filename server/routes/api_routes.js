const Grocery = require('../models/Grocery');

function routeCreate(app) {
    app.post('/api/groceries', (req, res) => {
        Grocery.create(req.body)
        .then(grocery => {
            res.send('Completed');
        });
    });

    app.get('/api/groceries', (req, res) => {
        Grocery.find()
        .then((groceries) => {
            res.send(groceries);
        });
    });

    app.delete('/api/groceries', (req, res) => {
        Grocery.deleteOne(req.body)
        .then(() => {
            res.status(200).send('Deleted');
        });
    });

    app.put('/api/groceries', (req, res) => {
        Grocery.findOneAndUpdate({_id: req.body._id}, {item: req.body.item})
        .then(() => {
            res.status(200).send('Updated')
        })
    });
}

module.exports = routeCreate;