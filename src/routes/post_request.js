const midway = require('testarmada-midway');

module.exports = midway.route({
    id: 'post_request',
    label: 'post with payload',
    path: '/api/postalcode',
    method: 'POST',
    variantLabel: 'POST a new postal code',
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
      if (province.includes("On")) {
        reply(responseMessage);
      } else {
        // this will response with json body picked up from
        // path: `src/mocked-data/api/postalcode/POST/default.json`
        midway.util.respondWithFile(this, reply);
      }
    }
  });