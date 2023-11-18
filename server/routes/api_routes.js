const Grocery = require('../models/Grocery');
const Target = require('../models/Target');

function routeCreate(app) {
    app.post('/api/groceries', (req, res) => {
        Grocery.create(req.body)
        .then(grocery => {
            res.send('Completed');
        });
    });

    app.post('/api/target', (req, res) => {
        Target.create(req.body)
        .then(item => {
            res.send('Completed');
        });
    });

    app.get('/api/groceries', (req, res) => {
        Grocery.find()
        .then((groceries) => {
            res.send(groceries);
        });
    });

    app.get('/api/target', (req, res) => {
        Target.find()
        .then((item) => {
            res.send(item);
        });
    });

    app.delete('/api/groceries', (req, res) => {
        Grocery.deleteOne(req.body)
        .then(() => {
            res.status(200).send('Deleted');
        });
    });

    app.delete('/api/target', (req, res) => {
        Target.deleteOne(req.body)
        .then(() => {
            res.status(200).send('Deleted');
        });
    });

    app.put('/api/target', (req, res) => {
        Target.findOneAndUpdate({_id: req.body._id}, {item: req.body.item})
        .then(() => {
            res.status(200).send('Updated')
        })
    });
}

module.exports = routeCreate;