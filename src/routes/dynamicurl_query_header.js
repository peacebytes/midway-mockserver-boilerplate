const midway = require("testarmada-midway");

module.exports = midway.route({
  id: "dynamicurl_query_headers",
  label: "dynamicurl query params headers",
  path: "/api/headers/{postal_code}",
  method: "GET",
  variantLabel: "Get Services of City by Postal Code And Headers",
  handler: function (req, reply) {
    const pc = req.params.postal_code;
    const service = req.query.service;
    const name = req.headers.name;
    var replyString =
      "Postal Code: " + pc + " Service:" + service + " Name: " + name;
    reply(replyString);
  },
});
