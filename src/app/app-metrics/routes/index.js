const applicationStatusRoutes = require("./applicationStatus");
const outletDeviceRoutes = require("./outletDevice");

async function routes(fastify) {
  await fastify.register(applicationStatusRoutes, {
    prefix: "/metrics"
  });
  await fastify.register(outletDeviceRoutes, {
    prefix: "/metrics"
  });
}

module.exports = routes;
