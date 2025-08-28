/* eslint-disable complexity */
const { logQuery } = require("../../commons/helpers");
const { APPLICATION_STATUS, METRICS } = require("../commons/constants");

function applicationStatusRepo(fastify) {
  async function createApplicationStatus({ input, logTrace }) {
    const knex = this;

    const query = knex(APPLICATION_STATUS.NAME).returning("*").insert(input);

    logQuery({
      logger: fastify.log,
      query,
      context: "Create Application Status",
      logTrace
    });
    const response = await query;
    return response[0];
  }

  async function getApplicationStatus({ logTrace, input }) {
    const knex = this;
    const { filters = {} } = input;
    const { where: whereClause } = filters;
    const query = knex(APPLICATION_STATUS.NAME).select("*");

    if (whereClause?.outlet_id) {
      query.where(APPLICATION_STATUS.COLUMNS.OUTLET_ID, whereClause.outlet_id);
    }

    // Filter to only last 1 day based on trigger_at
    query.where(
      APPLICATION_STATUS.COLUMNS.TRIGGER_AT,
      ">=",
      knex.raw(`now() - interval '1 day'`)
    );

    query.orderBy(APPLICATION_STATUS.COLUMNS.TRIGGER_AT, "desc");

    logQuery({
      logger: fastify.log,
      query,
      context: "Get Application Status",
      logTrace
    });

    return query;
  }

  async function createMetrics({ input, logTrace }) {
    const knex = this;

    const query = knex("metrics")
      .returning("*")
      .insert(input)
      .onConflict([METRICS.COLUMNS.DMS_ID, METRICS.COLUMNS.TERMINAL_ID])
      .merge();

    logQuery({
      logger: fastify.log,
      query,
      context: "Create Metrics Data",
      logTrace
    });
    const response = await query;
    return response[0];
  }

  async function getMetrics({ logTrace, input }) {
    const knex = this;
    const { filters = {} } = input;
    const { where: whereClause } = filters;
    const query = knex(APPLICATION_STATUS.NAME).select("*");

    if (whereClause?.outlet_id) {
      query.where(APPLICATION_STATUS.COLUMNS.OUTLET_ID, whereClause.outlet_id);
    }

    if (whereClause?.terminal_id) {
      query.where(
        APPLICATION_STATUS.COLUMNS.TERMINAL_ID,
        whereClause.terminal_id
      );
    }

    if (whereClause?.upstream_type) {
      query.where(
        APPLICATION_STATUS.COLUMNS.UPSTREAM_TYPE,
        whereClause.upstream_type
      );
    }

    if (whereClause?.register_id) {
      query.where(
        APPLICATION_STATUS.COLUMNS.REGISTER_ID,
        whereClause.register_id
      );
    }

    if (whereClause?.user_id) {
      query.where(APPLICATION_STATUS.COLUMNS.USER_ID, whereClause.user_id);
    }

    // Filter to only last 1 day based on last_modified_at
    query.where(
      APPLICATION_STATUS.COLUMNS.LAST_MODIFIED_AT,
      ">=",
      knex.raw(`now() - interval '1 day'`)
    );

    query.orderBy(APPLICATION_STATUS.COLUMNS.LAST_MODIFIED_AT, "desc");

    logQuery({
      logger: fastify.log,
      query,
      context: "Get Application Status",
      logTrace
    });

    return query;
  }

  return {
    createApplicationStatus,
    getApplicationStatus,
    createMetrics,
    getMetrics
  };
}

module.exports = applicationStatusRepo;
