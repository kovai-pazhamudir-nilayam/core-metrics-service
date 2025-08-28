const getOutletDeviceService = require("../services/getOutletDevice");

const getOutletDeviceHandler = fastify => {
  const getOutletDevice = getOutletDeviceService(fastify);
  return async (request, reply) => {
    const { query, logTrace } = request;
    const response = await getOutletDevice({
      query,
      logTrace
    });
    return reply.code(200).send(response);
  };
};

module.exports = getOutletDeviceHandler;
