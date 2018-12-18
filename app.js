const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser());
const port = 8080;

const users = [
  {
    login: 'testUser',
    password: 'testPassword',
    isSuper: false,
    acls: [
      {
        topic: '/users/presence',
        permission: 'r' // Permission can be "r" for read, "w" for write, "rw" for read and write, "sub" for subscribe
      }
    ]
  },
  {
    login: 'testUser2',
    password: 'testPassword2',
    isSuper: false,
    acls: [
      {
        topic: '/users/presence',
        permission: 'r' // Permission can be "r" for read, "w" for write, "rw" for read and write, "sub" for subscribe
      }
    ]
  }
];


// Define POST route "/user"
app.post(
  '/user',
  (req, res) => {
    const { username, password } = req.body;
    const userFound = users.find(user => user.login === username && user.password === password);
    userFound
      ? res.status(200).send('ok')
      : res.status(401).send('ko');
  }
);


// Define POST route "/superUser"
app.post(
  '/superUser',
  (req, res) => {
    console.log(req.body);
    const { username, password } = req.body;
    const userFound = users.find(user => user.login === username && user.password === password);
    userFound && userFound.isSuper === true
      ? res.status(200).send('ok')
      : res.status(401).send('ko');
  }
);


// Define POST route "/acls"
app.post(
  '/acls',
  (req, res) => {
    // console.log(req.body);
    res.send();
    // const { username, topic, clientId, acc } = req.body;

    // // acc:
    // // - 1: read
    // // - 2: write
    // // - 2: read and write
    // // - 4: subscribe

    // const userFound = users.find(user => user.login === username);
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
