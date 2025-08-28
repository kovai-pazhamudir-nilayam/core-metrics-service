const postApiInsightsService = require("../services/postApiInsights");

const postApiInsightsHandler = fastify => {
  const postApiInsights = postApiInsightsService(fastify);
  return async (request, reply) => {
    const { body, logTrace } = request;
    const response = await postApiInsights({
      body,
      logTrace
    });
    return reply.code(200).send(response);
  };
};

module.exports = postApiInsightsHandler;
