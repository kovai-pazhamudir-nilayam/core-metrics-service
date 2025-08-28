const apiInsightsRoutes = require("./apiInsights");

async function routes(fastify) {
  await fastify.register(apiInsightsRoutes, { prefix: "/api-insights" });
}

module.exports = routes;
