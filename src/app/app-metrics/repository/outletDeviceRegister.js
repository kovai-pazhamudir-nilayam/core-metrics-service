const { logQuery } = require("../../commons/helpers");
const { OUTLET_DEVICE_REGISTER } = require("../commons/constants");

function outletDeviceRegisterRepo(fastify) {
  async function createOutletDeviceRegister({ input, logTrace }) {
    const knex = this;

    const query = knex(OUTLET_DEVICE_REGISTER.NAME)
      .returning("*")
      .insert(input);

    logQuery({
      logger: fastify.log,
      query,
      context: "Create Outlet Device Register",
      logTrace
    });

    const response = await query;
    return response[0];
  }

  async function getOutletDeviceRegister({ input, logTrace }) {
    const knex = this;
    const { filters = {} } = input;

    const devicesSubQuery = `(
      SELECT json_agg(
        json_build_object(
          'type', ODR.type,
          'mac_address', ODR.mac_address,
          'mac_short_name', ODR.mac_short_name,
          'created_by', ODR.created_by,
          'last_modified_at', ODR.last_modified_at
        )
      ) FROM ${OUTLET_DEVICE_REGISTER.NAME} AS ODR 
      WHERE ODR.outlet_id = "ODR".outlet_id
    ) as devices`;

    const query = knex
      .select(["outlet_id", knex.raw(devicesSubQuery)])
      .from(`${OUTLET_DEVICE_REGISTER.NAME} as ODR`);

    if (filters?.outlet_id) {
      query.where("outlet_id", filters.outlet_id);
    }

    logQuery({
      logger: fastify.log,
      query,
      context: "Get Outlet Device Register",
      logTrace
    });

    return query;
  }

  return {
    createOutletDeviceRegister,
    getOutletDeviceRegister
  };
}

module.exports = outletDeviceRegisterRepo;
