module.exports = {
  env: 'test',
  db: 'mongodb://localhost/contatooh_test',
  sauceTestName: 'Contatoooh E2E Testing',
  sauceUser: process.env.SAUCE_USERNAME,
  sauceKey: process.env.SAUCE_ACCESS_KEY,
  travisJobNumber: process.env.TRAVIS_JOB_NUMBER,
  travisBuild: process.env.TRAVIS_BUILD_NUMBER,
  clientID: process.env.CLIENT_ID,
  clientSecret: process.env.CLIENT_SECRET,
  selinumUser: process.env.SELINUM_USER,
  selinumUserPassword: process.env.SELINUM_USER_PASSWORD,
  port:3000,
  address: 'localhost',
  domain: 'localhost',
  githubCallback: 'http://localhost:3000/auth/github/callback'
};
