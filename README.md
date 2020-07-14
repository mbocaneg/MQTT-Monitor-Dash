# MQTT-Monitor-Dash
A React based dashboard for monitoring MQTT topics in real time. Work in progress.
![alt text](https://github.com/mbocaneg/MQTT-Monitor-Dash/blob/master/screenshots/Screen%20Shot%202020-07-13%20at%207.58.37%20PM.png)

# Installation
Make sure you have a working instance of the `mosquitto` broker in your network. In my case, `mosquitto` runs on a Raspberry Pi on my network, but installing it on your local machine is fine.

Clone or download this repo, and run the command
```
npm install
```

In the file `src/MQTTconfig.js` change the `HOST` and `OPTIONS` variables to suit your MQTT broker.
Finally, to start the dashboard run the command
```npm start``` 

# Usage
Click the `Add Topic` button to bring up the add topic dialog. Supply the topic you want to monitor and click the `Subscribe` button.

![alt text](https://github.com/mbocaneg/MQTT-Monitor-Dash/blob/master/screenshots/Screen%20Shot%202020-07-13%20at%207.59.55%20PM.png)

THIS IS A WORK IN PROGRESS

