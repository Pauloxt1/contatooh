'use strict';
const config = require('./config/config.js')();
const app = require('./config/express')();
require('./config/passport')();
require('./config/database')(config.db);

console.log('ClientID é: '+config.clientID);
console.log('ClientSecret é: '+config.clientSecret);

app.listen(config.port, config.address, () => {
  console.log('Express executado no '+config.address+'('+config.env+') na porta '+config.port);
});
