const applicationStatusRepo = require("../repository/application-status");
const auditMapper = require("../../commons/mapper/audit-mapper");
const { getCurrentTimestamp } = require("../../commons/helpers");
const { logger } = require("../../utils/logger");

function storeApplicationStatusService(fastify) {
  const { createMetrics } = applicationStatusRepo(fastify);

  return async ({ body, logTrace }) => {
    const audit = auditMapper.updatedAudit({});
    const input = {
      ...body,
      metric_capture_at: getCurrentTimestamp(),
      ...audit
    };

    const response = await createMetrics.call(fastify.knex, {
      input,
      logTrace
    });

    logger.info({ message: "Application status entry created", response });

    return response;
  };
}

module.exports = storeApplicationStatusService;
