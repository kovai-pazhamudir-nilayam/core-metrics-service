const { posApplicationStatusEvent } = require("../services");

const posApplicationStatusEventHandler = fastify => {
  const posApplicationStatusEventService = posApplicationStatusEvent(fastify);
  return async (request, reply) => {
    const { body, logTrace } = request;
    const response = await posApplicationStatusEventService({
      body,
      logTrace
    });
    return reply.code(201).send(response);
  };
};

module.exports = posApplicationStatusEventHandler;
