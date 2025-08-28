const short = require("short-uuid");
const { METRICS_STATUS } = require("../commons/constants");
const emitApplicationMetricEventService = require("./application-metric-event");
const downstreamCallsRepo = require("../repository/downstreamCalls");
const applicationStatusRepo = require("../repository/application-status");
const { getCurrentTimestamp } = require("../../commons/helpers");

function posApplicationStatusEventService(fastify) {
  const emitPOSApplicationStatusEvent =
    emitApplicationMetricEventService(fastify);
  const { getAllOutlets } = downstreamCallsRepo(fastify);
  const { createApplicationStatus } = applicationStatusRepo(fastify);

  const processOutlet = async ({ outlet_id, input, logTrace }) => {
    const dmsId = short.generate();

    const createApplicationStatusFilters = {
      outlet_id,
      dms_id: dmsId,
      trigger_type: input?.trigger_type,
      trigger_at: getCurrentTimestamp()
    };

    await createApplicationStatus.call(fastify.knex, {
      input: createApplicationStatusFilters,
      logTrace
    });

    emitPOSApplicationStatusEvent({
      body: {
        outlet_id,
        dms_id: dmsId
      },
      eventType: METRICS_STATUS.METRICS_STATUS_CREATED,
      logTrace
    });
    return { outlet_id, dms_id: dmsId };
  };

  return async ({ body, logTrace }) => {
    if (body?.outlet_ids) {
      return body.outlet_ids.map(outlet_id =>
        processOutlet({ outlet_id, input: body, logTrace })
      );
    }

    const allOutlets = await getAllOutlets({ logTrace });

    return allOutlets.map(outlet =>
      processOutlet({ outlet_id: outlet.outlet_id, input: body, logTrace })
    );
  };
}

module.exports = posApplicationStatusEventService;
