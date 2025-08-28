const getApplicationStatusService = require("../services/getApplicationStatus");

const getApplicationStatusHandler = fastify => {
  const fetchApplicationStatus = getApplicationStatusService(fastify);
  return async (request, reply) => {
    const { query, logTrace } = request;
    const response = await fetchApplicationStatus({
      body: query,
      logTrace
    });
    return reply.send(response);
  };
};

module.exports = getApplicationStatusHandler;
