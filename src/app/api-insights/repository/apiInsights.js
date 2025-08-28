/* eslint-disable complexity */
const { logQuery } = require("../../commons/helpers");
const { API_INSIGHTS } = require("../commons/constants");

function apiInsightsRepo(fastify) {
  async function createApiInsights({ input, logTrace }) {
    // batch entry
    const knex = this;

    const query = knex(API_INSIGHTS.NAME)
      // .returning("*")
      .insert(input)
      .onConflict([API_INSIGHTS.COLUMNS.API_INSIGHTS_ID])
      .ignore();

    logQuery({
      logger: fastify.log,
      query,
      context: "Create Api insights Data",
      logTrace
    });
    const response = await query;
    return response;
  }

  async function getApiInsights({ input }) {
    const knex = this;
    const { filters = {} } = input;
    const { where: whereClause, whereIn: whereInClause, pagination } = filters;
    const { page_size = 10, current_page = 1 } = pagination;
    const query = knex(API_INSIGHTS.NAME).select("*");

    if (whereClause?.outlet_id) {
      query.where(API_INSIGHTS.COLUMNS.OUTLET_ID, whereClause.outlet_id);
    }

    if (whereClause?.cart_id) {
      query.where(API_INSIGHTS.COLUMNS.CART_ID, whereClause.cart_id);
    }

    if (whereClause?.terminal_id) {
      query.where(API_INSIGHTS.COLUMNS.TERMINAL_ID, whereClause.terminal_id);
    }

    if (whereClause?.functionality) {
      query.where(
        API_INSIGHTS.COLUMNS.FUNCTIONALITY,
        whereClause.functionality
      );
    }

    if (whereInClause?.columns && whereInClause?.values) {
      query.whereIn(whereInClause.columns, whereInClause.values);
    }

    const response = await query
      .orderBy(API_INSIGHTS.COLUMNS.CREATED_AT, "desc")
      .paginate({ page_size, current_page });

    return response;
  }

  return {
    createApiInsights,
    getApiInsights
  };
}

module.exports = apiInsightsRepo;
