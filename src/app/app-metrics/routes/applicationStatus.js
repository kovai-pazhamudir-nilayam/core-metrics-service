const schemas = require("../schemas");

const handlers = require("../handlers");

async function routes(fastify) {
  /*
    // Trigger event to fetch application status
    fastify.route({
      method: "POST",
      url: "/trigger",
      schema: schemas.createApplicationStatusSchema,
      handler: handlers.createApplicationStatusHandler(fastify)
    });

    Raise a google pubsub events, some subsctiption ---> "CAPTURE_POS_METRICS"

  */

  // Trigger event to fetch application status
  fastify.route({
    method: "POST",
    url: "/trigger",
    schema: schemas.posApplicationStatusEventSchema,
    handler: handlers.posApplicationStatusEventHandler(fastify)
  });

  // Store application status
  fastify.route({
    method: "POST",
    url: "/",
    schema: schemas.createApplicationStatusSchema,
    handler: handlers.createApplicationStatusHandler(fastify)
  });

  // Get application status with filters
  fastify.route({
    method: "GET",
    url: "/",
    schema: schemas.getApplicationStatusSchema,
    handler: handlers.getApplicationStatusHandler(fastify)
  });
}

module.exports = routes;
