const apiInsightsRepo = require("../repository/apiInsights");

function getApiInsightsService(fastify) {
  const { getApiInsights } = apiInsightsRepo(fastify);

  return async ({ query, logTrace }) => {
    const { page_size, current_page, ...rest } = query;
    const response = await getApiInsights.call(fastify.knex, {
      input: {
        filters: { where: { ...rest }, pagination: { page_size, current_page } }
      },
      logTrace
    });

    return response;
  };
}

module.exports = getApiInsightsService;
