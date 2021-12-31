
const express = require('express');
const path = require('path');
const routes = require('./routes/api_routes');
const db = require('./config/connection');
// require('dotenv').config();
// Heroku 
const PORT = process.env.PORT || 3001;

// express returns an Object
const app = express(); // instance = Object

// Setup our server

app.use('/', express.static(path.join(__dirname, 'client/build')));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', function (req, res) {
  res.render('index.html', {});
});

// app.get('/*', function(req, res) {
//   res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
// });

routes(app);

db.once('open', () => {
  // Start the Server
  app.listen(PORT, () => {console.log(`Server running on port ${PORT}!`);});
});

// const express = require('express');
// const path = require('path');
// const routes = require('./routes/api_routes');
// const db = require('./config/connection');
// const { createProxyMiddleware } = require('http-proxy-middleware');

// // require('dotenv').config();
// // Heroku 
// const PORT = process.env.PORT || 3001;

// // express returns an Object
// const app = express(); // instance = Object
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// routes(app);
// // Setup our server
// app.use(
//   createProxyMiddleware(["api/groceries"], {
//      target: "http://localhost:3001"
// }));

// if(process.env.NODE_ENV === 'production') {
//   app.use(express.static('client/build'));
//   app.get('*', (req, res) => {
//     res.sendFile(path.resolve(__dirname, 'client/build', 'index.html'))
//   })
// }

// // app.get('/api/groceries', (req, res) => {
// //   res.send('homepage hit')
// // })

// app.use('/', express.static(path.join(__dirname, 'client/build')));



// db.once('open', () => {
//   // Start the Server
//   app.listen(PORT, () => {console.log(`Server running on port ${PORT}!`);});
// }); // open // object that gives you some methods to test or check our connection

