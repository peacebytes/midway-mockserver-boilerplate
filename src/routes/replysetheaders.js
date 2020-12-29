const midway = require("testarmada-midway");

module.exports = midway.route({
  id: "replysetheaders",
  label: "set headers in reply",
  path: "/api/publicservices",
  method: "POST",
  variantLabel: "Set headers in reply",
  handler: function (req, reply) {
    /* body
    {
        "municipality": "Thornhill",
        "city" : "Markham",
        "province": "Ontario"
    }
    */
    const municipality = req.payload.municipality;
    const city = req.payload.city;
    const province = req.payload.province;
    const responseMessage = `Received [
      municipality: ${municipality},
      city: ${city},
      province: ${province}
    ]`;
    const responseHeaders = {
      header1: `${municipality}`,
      header2: `${city}`,
      header3: true,
    };
    if (province.includes("On")) {
      reply(responseMessage)
        .header("header1", "test1")
        .header("header2", "test2")
        .header("header3", "test3");
    } else {
      // this will response with json body picked up from
      // path: `src/mocked-data/api/publicservices/POST/default.json`
      // and headers set with responseHeaders
      midway.util.respondWithFile(this, reply, { headers: responseHeaders });
    }
  },
});
