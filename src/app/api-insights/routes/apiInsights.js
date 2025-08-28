const schemas = require("../schemas");

const handlers = require("../handlers");

async function routes(fastify) {
  fastify.route({
    method: "POST",
    url: "/",
    schema: schemas.postApiInsightsSchema,
    handler: handlers.postApiInsightsHandler(fastify)
  });

  fastify.route({
    method: "GET",
    url: "/",
    schema: schemas.getApiInsightsSchema,
    handler: handlers.getApiInsightsHandler(fastify)
  });
}

module.exports = routes;
