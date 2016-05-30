'use strict';

const config = require('./config.js')();
const passport = require('passport');
const GitHubStrategy = require('passport-github').Strategy;


module.exports = () => {

  const Usuario = require('../app/models/usuario');
  const githubCallback = config.githubCallback;

  passport.use(new  GitHubStrategy({
    clientID: config.clientID,
    clientSecret: config.clientSecret,
    callbackURL: githubCallback
  }, (acessToken, refreshToken, profile, done) => {

      Usuario.findOrCreate(
        {"login": profile.username},
        {"nome": profile.username},
        (err, usuario) => {
          if(err){
            console.log(err);
            return done(err);
          }
          return done(null, usuario);
        }
      )
  }));

  passport.serializeUser((usuario, done) => {
    done(null, usuario._id);
  });

  passport.deserializeUser((id, done) => {
      Usuario.findById(id).exec().then((usuario) => done(null, usuario));
  });
}
