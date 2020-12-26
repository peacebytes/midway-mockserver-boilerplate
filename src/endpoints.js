const midway = require('testarmada-midway');
midway.id('midway-boilerplate');

const endpoints = {
  healthcheck: require("./routes/healthcheck"),
  version: require("./routes/version"),
  city: require("./routes/dynamic_url")
}
