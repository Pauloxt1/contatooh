'use strict';
const config = require('./config/config.js')();
const app = require('./config/express')();
require('./config/passport')();
require('./config/database')(config.db);

app.listen(config.port, config.address, () => {
  console.log('Express executado no '+config.address+' na porta '+config.port);
});
