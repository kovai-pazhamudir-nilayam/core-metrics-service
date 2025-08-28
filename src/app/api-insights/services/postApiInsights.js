const { getCurrentTimestamp } = require("../../commons/helpers");
const { logger } = require("../../utils/logger");
const { SUCCESS_RESPONSE } = require("../commons/constants");
const apiInsightsRepo = require("../repository/apiInsights");

function postApiInsightsService(fastify) {
  const { createApiInsights } = apiInsightsRepo(fastify);

  return async ({ body, logTrace }) => {
    const transformedPayload = body.map(({ sku_code, ...rest }) => {
      return {
        sku_code: JSON.stringify(sku_code),
        created_at: getCurrentTimestamp(),
        ...rest
      };
    });

    const response = await createApiInsights.call(fastify.knex, {
      input: transformedPayload,
      logTrace
    });

    logger.info({ message: "Api insights entry created", response });

    return SUCCESS_RESPONSE;
  };
}

module.exports = postApiInsightsService;
