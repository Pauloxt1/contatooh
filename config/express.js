'use strict';
const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const passport = require('passport');
const helmet = require('helmet');

module.exports = function(){
  const app = express();

  app.set('view engine', 'ejs');
  app.set('views', './app/views');
  app.set('port', 3000);
  app.use(cookieParser());
  app.use(session({
    secret: 'homem avestruz',
    resave: true,
    saveUninitialized:true
  }));
  app.use(passport.initialize());
  app.use(passport.session());
  app.use(helmet.xssFilter());
  app.use(helmet.noSniff());
  app.use(helmet.frameguard());
  app.disable('x-powered-by');
  app.use(helmet());
  app.use(bodyParser.urlencoded({extended:true}));
  app.use(bodyParser.json());
  app.use(require('method-override')());
  app.use(express.static('./public'));
  require('../app/routes/auth')(app);
  require('../app/routes/contato')(app);
  require('../app/routes/index')(app);

  app.get('*', (req, res) => {
    res.status(404).render('404');
  });

  return app;
}
