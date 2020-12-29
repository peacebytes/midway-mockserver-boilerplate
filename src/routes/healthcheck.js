const midway = require("testarmada-midway");

module.exports = midway.route({
  id: "healthcheck",
  label: "healthcheck",
  path: "/healthcheck",

  variantLabel: "respond with file",
  handler: function (req, reply) {
    midway.util.respondWithFile(this, reply, { code: 200 });
  },
});
