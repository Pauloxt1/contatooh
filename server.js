'use strict';
const config = require('./config/config.js')();
const app = require('./config/express')();
require('./config/passport')();
require('./config/database')(config.db);

app.listen(app.get('port'), () => {
  console.log('Express executado na porta '+app.get('port'));
});
