function emitApplicationMetricEventService(fastify) {
  return async ({ body, eventType, logTrace }) => {
    try {
      await fastify.publishEvent({
        data: body,
        event_info: {
          entity_type: "METRICS_STATUS",
          event_type: eventType,
          outlet_id: body?.outlet_id,
          topic_name: fastify.config.METRICS_STATUS_EVENT_TOPIC
        },
        logTrace
      });
    } catch (error) {
      fastify.log.error({
        message: "Error While Raising Event For Outlet Config",
        error,
        log_trace: logTrace
      });
    }
  };
}

module.exports = emitApplicationMetricEventService;
