const midway = require("testarmada-midway");

module.exports = midway.route({
  id: "replysetcookies",
  label: "set cookies in reply",
  path: "/api/version",
  method: "POST",
  variantLabel: "Set headers in reply",
  handler: function (req, reply) {
    /* body
    {
        "target": "aws",
        "env": "staging1"
    }
    */
    const env = req.payload.env;
    const targetInfra = req.payload.target;
    const cookies = [
      { name: "env", value: `${env}` },
      { name: "target", value: `${targetInfra}` },
    ];
    if (targetInfra.includes("Azure")) {
      reply({ message: "test" }).state("env", "dev").state("target", "azure");
    } else {
      // this will response with json body picked up from
      // path: `src/mocked-data/api/version/POST/default.json`
      // and cookies set with cookies
      midway.util.respondWithFile(this, reply, { cookies: cookies });
    }
  },
});
