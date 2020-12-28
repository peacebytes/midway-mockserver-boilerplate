const midway = require('testarmada-midway');

module.exports = midway.route({
    id: 'query_params',
    label: 'query params',
    path: '/api/publicservices/{postal_code}',
    method: 'GET',
    variantLabel: 'Get Services of City by Postal Code',
    handler: function (req, reply) {
      const pc = req.params.postal_code;
      const service = req.query.service;
      let services;
      switch(service) {
        case "sports":
          services = "rec_sports";
          break;
        case "schools":
          city = "school_list";
          break;
        default:
          city = "Sorry, service is not available";
          break;
      }
      midway.util.respondWithFile(this, reply, {filePath: `./api/publicservices/GET/${services}.json`, code: 200});
    }
  });