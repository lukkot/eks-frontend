'use strict';

const express = require('express');
const cors = require('cors')

const network = require('./ips.js')
const www = require('./www.js')


// Constants
const PORT = 8181;
const HOST = '0.0.0.0';
const ips = network.getIps();


// App
const app = express();
app.use(cors());

// ENDPOINTS
app.get('/', (req, res) => {
  res.send(www.getIndex(ips));
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);

