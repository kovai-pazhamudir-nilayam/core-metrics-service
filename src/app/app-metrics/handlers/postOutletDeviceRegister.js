const postOutletDeviceRegisterService = require("../services/postOutletDeviceRegister");

const postOutletDeviceRegisterHandler = fastify => {
  const postOutletDeviceRegister = postOutletDeviceRegisterService(fastify);
  return async (request, reply) => {
    const { body, logTrace } = request;
    const response = await postOutletDeviceRegister({
      body,
      logTrace
    });
    return reply.code(200).send(response);
  };
};

module.exports = postOutletDeviceRegisterHandler;
