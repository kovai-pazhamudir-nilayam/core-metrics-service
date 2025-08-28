const getApiInsightsService = require("../services/getApiInsights");

const getApiInsightsHandler = fastify => {
  const getApiInsights = getApiInsightsService(fastify);
  return async (request, reply) => {
    const { query, logTrace } = request;
    const response = await getApiInsights({
      query,
      logTrace
    });
    return reply.code(200).send(response);
  };
};

module.exports = getApiInsightsHandler;
