var config = require('./config/config.js')();
var app = require('./config/express')();
require('./config/passport')();
require('./config/database')(config.db);

app.listen(app.get('port'), function() {
  console.log('Express executado na porta '+app.get('port'));
});
