const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser());
const port = 8080;

const users = [
  {
    login: 'testUser',
    password: 'testPassword',
    isSuper: false
  },
  {
    login: 'testUser2',
    password: 'testPassword2',
    isSuper: true
  },
  {
    login: 'testUser2',
    password: 'testPassword2',
    isSuper: true
  }
];


// Define GET route "/"
app.get(
  '/',
  (req, res) => res.send('Stackhero\'s Mosquitto API authentication example')
);


// Define POST route "/user"
app.post(
  '/user',
  (req, res) => {
    const { username, password } = req.body;
    const userFound = users.find(user => user.login === username && user.password === password);
    res.status(userFound ? 200 : 401).send();
  }
);


// Define POST route "/superUser"
app.post(
  '/superUser',
  (req, res) => {
    const { username, password } = req.body;
    const userFound = users.find(user => user.login === username && user.password === password);
    res.status(userFound && userFound.isSuper === true ? 200 : 401).send();
  }
);


// Define POST route "/acls"
app.post(
  '/acls',
  (req, res) => {
    console.log(req.body);
    res.send();
    // const { username, password } = req.body;
    // const userFound = users.find(user => user.login === username && user.password === password);
    // res.status(userFound && userFound.isSuper === true ? 200 : 401).send();
  }
);


// Start Express server
const server = app.listen(port);

// You'll see this log directly on your Stackhero's console
console.log('🎉 The app has just start!');

// Handle termination signal
// When you'll push your code to Stackhero, we'll send a termination signal (SIGTERM).
// The goal is to let you close cleanly connections from Express, connections to databases etc...
process.on('SIGTERM', () => {
  // You'll see this log directly on your Stackhero's console
  console.info('😯 SIGTERM signal received.');

  // Close the server and all connections
  server.close(
    err => {
      if (err) {
        // You'll see this log directly on your Stackhero's console
        console.error(err);
        process.exit(1);
      }
      else {
        // You'll see this log directly on your Stackhero's console
        console.log('👋 Exit the app with status code 0');
        process.exit(0);
      }
    }
  );
});
