const midway = require('testarmada-midway');

module.exports = midway.route({
    id: 'dynamic_url',
    label: 'dynamic url',
    path: '/api/postalcode/{postal_code}',
    method: 'GET',
    variantLabel: 'Get City by Postal Code',
    handler: function (req, reply) {
      const pc = req.params.postal_code;
      let city;
      switch(pc) {
        case "M4B":
          city = "East York";
          break;
        case "L3T":
          city = "Thornhill";
          break;
        case "E3B":
          city = "Fredericton";
          break;
        default:
          city = "Sorry, PC is not handled";
          break;
      }
      reply({message: `city: ${city}`});
    }
  });