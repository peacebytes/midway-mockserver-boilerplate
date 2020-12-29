const midway = require("testarmada-midway");

module.exports = midway
  .route({
    id: "version",
    label: "version information",
    path: "/api/version",

    variantLabel: "default version",
    handler: function (req, reply) {
      midway.util.respondWithFile(this, reply, { code: 202 });
    },
  })
  .variant({
    id: "qa",
    label: "qa version",
    handler: function (req, reply) {
      midway.util.respondWithFile(this, reply, {
        filePath: "./api/version/GET/qa.json",
        code: 202,
      });
    },
  })
  .variant({
    id: "staging",
    label: "staging version",
    handler: function (req, reply) {
      reply({ message: "version: staging env" });
    },
  })
  .variant({
    id: "prod",
    label: "production version",
    handler: function (req, reply) {
      reply({ message: "version: prod env" });
    },
  });
