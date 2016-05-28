'use strict';
const app = require('./config/express')();
require('./config/passport')();
require('./config/database')('mongodb://localhost/contatooh');

app.listen(app.get('port'), () => {
  console.log('Express executado na porta '+app.get('port'));
});
