const midway = require('testarmada-midway');
midway.id('midway-boilerplate');

const endpoints = {
  healthcheck: require("./routes/healthcheck"),
  version: require("./routes/version"),
  dynamicurl: require("./routes/dynamic_url"),
  queryparams: require("./routes/query_params"),
  headers: require("./routes/dynamicurl_query_header"),
  post: require("./routes/post_request"),
  replysetheaders: require("./routes/replysetheaders"),
  replysetcookies: require("./routes/replysetcookies")
}
