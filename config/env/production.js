module.exports = {
  evn: 'production',
  db: process.env.OPENSHIFT_MONGO_DB_URL+'contatooh',
  clientID: process.env.CLIENT_ID,
  clientSecret: process.env.CLIENT_SECRET,
  port: process.env.OPENSHIFT_NODE_JS_PORT,
  address: process.env.OPENSHIFT_NODE_JS_IP,
  domain: process.env.OPENSHIFT_APP_DNS
};
