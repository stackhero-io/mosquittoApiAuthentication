# Mosquitto API authentication example

You'll find in this repository an example of how to handle authentication on Mosquitto through an API.

This API is created in Node.js with Express.

## Create a Node.js service

In stackhero, create a Node.js service. You can select LTS or CURRENT version, both will work, but we recommend the LTS one.
Add you SSH public key in configuration and validate the configuration.


## Clone the app

On your computer, clone this project:

```
git clone https://github.com/stackhero-io/mosquittoApiAuthentication.git
cd mosquittoApiAuthentication
```


## Deploy the app

From your Node.js service, in Stackhero's console, copy the `git remote command` in the cloned app directory.

Then, deploy the app: `git push -u stackhero`


## Configure your Mosquitto service

In your Mosquitto service configuration, enable `API authentication` and copy this configuration:
  - Host: put your Node.js endpoint domain (XXXXXX.stackhero-network.com)
  - Protocol: `HTTPS`
  - Port: `443`
  - User route: `/user`
  - Super user route: `/superUser`
  - ACLs route: `/acls`

