const outletDeviceRegisterRepo = require("../repository/outletDeviceRegister");
const auditMapper = require("../../commons/mapper/audit-mapper");

function postOutletDeviceRegisterService(fastify) {
  const { createOutletDeviceRegister } = outletDeviceRegisterRepo(fastify);

  return async ({ body, logTrace }) => {
    const audit = auditMapper.updatedAudit({});
    await createOutletDeviceRegister.call(fastify.knex, {
      input: { ...body, ...audit },
      logTrace
    });

    return { success: true };
  };
}

module.exports = postOutletDeviceRegisterService;
