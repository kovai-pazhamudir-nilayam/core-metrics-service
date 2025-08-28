const { METRICS } = require("../commons/constants");
const applicationStatusRepo = require("../repository/application-status");
const metricsRepo = require("../repository/metrics");

const metricsFields = [
  "mac_address",
  "terminal_id",
  "register_id",
  "user_id",
  "upstream_type",
  "type",
  "app_version",
  "last_order_at",
  "current_cart_id",
  "weighing_scale_status",
  "edc_type",
  "metric_capture_at"
];

const createEmptyMetrics = () => {
  const emptyMetrics = {};
  metricsFields.forEach(field => {
    emptyMetrics[field] = "";
  });
  return emptyMetrics;
};

const createResponseObject = (status, metricsData = null) => {
  const response = {
    dms_id: status.dms_id,
    trigger_type: status.trigger_type,
    trigger_at: status.trigger_at
  };

  if (metricsData) {
    metricsFields.forEach(field => {
      response[field] = metricsData[field] || "";
    });
  } else {
    Object.assign(response, createEmptyMetrics());
  }

  return response;
};

function fetchApplicationStatusService(fastify) {
  const { getApplicationStatus } = applicationStatusRepo(fastify);
  const { getMetrics } = metricsRepo(fastify);

  return async ({ body, logTrace }) => {
    const { outlet_id } = body;

    const applicationStatusList = await getApplicationStatus.call(
      fastify.knex,
      { input: { filters: { where: { outlet_id } } }, logTrace }
    );

    if (!applicationStatusList.length) {
      return { outlet_id, metrics: [] };
    }

    const dmsIdList = applicationStatusList.map(({ dms_id }) => dms_id);
    const metricsResult = await getMetrics.call(fastify.knex, {
      input: {
        filters: {
          whereIn: {
            columns: METRICS.COLUMNS.DMS_ID,
            values: dmsIdList
          }
        }
      },
      logTrace
    });

    const metricsByDmsId = metricsResult.reduce((acc, metric) => {
      const dmsId = metric.dms_id;
      if (!acc[dmsId]) {
        acc[dmsId] = [];
      }
      acc[dmsId].push(metric);
      return acc;
    }, {});

    const metricsResponse = applicationStatusList.reduce((acc, status) => {
      const metricsList = metricsByDmsId[status.dms_id] || [];

      if (metricsList.length === 0) {
        acc.push(createResponseObject(status));
      } else {
        const statusMetrics = metricsList.map(metricData =>
          createResponseObject(status, metricData)
        );
        acc.push(...statusMetrics);
      }

      return acc;
    }, []);

    return { outlet_id, metrics: metricsResponse };
  };
}

module.exports = fetchApplicationStatusService;
