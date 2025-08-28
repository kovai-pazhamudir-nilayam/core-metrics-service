const outletDeviceRegisterRepo = require("../repository/outletDeviceRegister");

function getOutletDeviceService(fastify) {
  const { getOutletDeviceRegister } = outletDeviceRegisterRepo(fastify);

  return async ({ query, logTrace }) => {
    const outletDeviceInfo = await getOutletDeviceRegister.call(fastify.knex, {
      input: { filters: { ...query } },
      logTrace
    });

    const mappedResponse = outletDeviceInfo.map(item => ({
      outlet_id: item.outlet_id,
      devices: item.devices || []
    }));

    const response = query?.outlet_id ? mappedResponse[0] : mappedResponse;
    return response;
  };
}

module.exports = getOutletDeviceService;
