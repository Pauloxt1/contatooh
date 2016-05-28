'use strict';

const passport = require('passport');
const GitHubStrategy = require('passport-github').Strategy;


module.exports = () => {

  const Usuario = require('../app/models/usuario');

  passport.use(new  GitHubStrategy({
    clientID: '6dd78481113dc4eaa71b',
    clientSecret: '7ac49ccfcc5fe22f8ce59b940f445021574a37d5',
    callbackURL: 'http://localhost:3000/auth/github/callback'
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
