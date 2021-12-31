
   
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

app.use(express.static(path.join(__dirname, 'client/build')));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});

routes(app);

db.once('open', () => {
  // Start the Server
  app.listen(PORT, () => {console.log(`Server running on port ${PORT}!`);});
}); // open // object that gives you some methods to test or check our connection

// const express = require('express');
// const path = require('path');
// const routes = require('./routes/api_routes');
// const db = require('./config/connection');
// // require('dotenv').config();
// // Heroku 
// const PORT = process.env.PORT || 3001;

// // express returns an Object
// const app = express(); // instance = Object

// // Setup our server
// // if (process.env.NODE_ENV === 'production') {

// app.use(express.static(path.join(__dirname, 'public')));
// app.use(express.static(path.resolve(__dirname, 'build')));

//   // app.use(express.static('client/build'));
// // app.get('*', (req, res) => {
// //     res.sendFile(path.resolve(__dirname, 'client/build', 'index.html'));
// //   })
// // }
// // app.use(express.static(path.join(__dirname, 'client/build')));

// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, 'build', 'index.html'));
// });

// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// routes(app);

// db.once('open', () => {
//   // Start the Server
//   app.listen(PORT, () => {console.log(`Server running on port ${PORT}!`);});
// }); // open // object that gives you some methods to test or check our connection