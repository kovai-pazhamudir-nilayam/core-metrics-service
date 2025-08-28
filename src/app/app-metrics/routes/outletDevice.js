const schemas = require("../schemas");

const handlers = require("../handlers");

async function routes(fastify) {
  fastify.route({
    method: "POST",
    url: "/outlet-device/register",
    schema: schemas.postOutletDeviceRegisterSchema,
    handler: handlers.postOutletDeviceRegisterHandler(fastify)
  });

  fastify.route({
    method: "GET",
    url: "/outlet-device",
    schema: schemas.getOutletDeviceSchema,
    handler: handlers.getOutletDeviceHandler(fastify)
  });
}

module.exports = routes;
