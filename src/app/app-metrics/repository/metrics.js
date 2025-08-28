/* eslint-disable complexity */
const { logQuery } = require("../../commons/helpers");
const { METRICS } = require("../commons/constants");

function metricsRepo(fastify) {
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
    const { where: whereClause, whereIn: whereInClause } = filters;
    const query = knex(METRICS.NAME).select("*");

    if (whereInClause?.columns && whereInClause?.values) {
      query.whereIn(whereInClause.columns, whereInClause.values);
    }

    if (whereClause?.outlet_id) {
      query.where(METRICS.COLUMNS.OUTLET_ID, whereClause.outlet_id);
    }

    if (whereClause?.terminal_id) {
      query.where(METRICS.COLUMNS.TERMINAL_ID, whereClause.terminal_id);
    }

    if (whereClause?.upstream_type) {
      query.where(METRICS.COLUMNS.UPSTREAM_TYPE, whereClause.upstream_type);
    }

    if (whereClause?.register_id) {
      query.where(METRICS.COLUMNS.REGISTER_ID, whereClause.register_id);
    }

    if (whereClause?.user_id) {
      query.where(METRICS.COLUMNS.USER_ID, whereClause.user_id);
    }

    // Filter to only last 1 day based on last_modified_at
    query.where(
      METRICS.COLUMNS.LAST_MODIFIED_AT,
      ">=",
      knex.raw(`now() - interval '1 day'`)
    );

    query.orderBy(METRICS.COLUMNS.LAST_MODIFIED_AT, "desc");

    logQuery({
      logger: fastify.log,
      query,
      context: "Get Application Status",
      logTrace
    });

    return query;
  }

  return {
    createMetrics,
    getMetrics
  };
}

module.exports = metricsRepo;
