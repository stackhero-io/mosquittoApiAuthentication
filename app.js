const express = require('express');
const app = express();
const port = 8080;

// Define GET route "/"
app.get(
  '/',
  (req, res) => res.send('Stackhero\'s Mosquitto API authentication example')
);


// Define POST route "/user"
app.post(
  '/user',
  (req, res) => res.send(JSON.stringify(req.body))
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
