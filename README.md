# Mosquitto API authentication example

You'll find in this repository an example of how to handle authentication on Mosquitto through an API.

This API is created in Node.js with Express.


## Create a Node.js service

In stackhero, create a Node.js service. You can select LTS or CURRENT version, both will work, but we recommend the LTS one.
Add your SSH public key in configuration and validate the configuration.


## Clone the app

On your computer, clone this project:

```
git clone https://github.com/stackhero-io/mosquittoApiAuthentication.git
cd mosquittoApiAuthentication
```

It's a good idea to check the `app.js` file content and change the default passwords, to avoid that someone connects to your Mosquitto server.


## Deploy the app

From your Node.js service, in Stackhero's console, copy the `git remote command` in the cloned app directory.

Then, deploy the app: `git push -u stackhero`


## Configure your Mosquitto service

In your Mosquitto's service configuration, enable `API authentication` and copy this configuration:
  - Host: put your Node.js endpoint domain (XXXXXX.stackhero-network.com)
  - Protocol: `HTTPS`
  - Port: `443`
  - User route: `/user`
  - Super user route: `/superUser`
  - ACLs route: `/acls`

Validate the configuration and voila. Your Mosquitto is now using this Node.js code to validate devices authentication and ACLs!
Note that if you defined users in your Mosquitto's service configuration, those users still work too.


## Conclusion

You now have a way to handle devices authentication directly with an app.
You can now modify this code to check permissions, for example, in a database, letting you handle devices authentication in a dynamic way.