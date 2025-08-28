const getApiInsightsSchema = {
  tags: ["API-INSIGHTS"],
  summary: "This api to get Api Insights",
  query: {
    type: "object",
    required: ["outlet_id"],
    properties: {
      outlet_id: { type: "string" },
      cart_id: { type: "string" },
      functionality: { type: "string" },
      terminal_id: { type: "string" },
      page_size: { type: "string", default: 10 },
      current_page: { type: "string", default: 1 }
    }
  },
  response: {
    200: {
      type: "object",
      properties: {
        data: {
          type: "array",
          items: {
            type: "object",
            properties: {
              api_insights_id: { type: "string" },
              functionality: { type: "string" },
              outlet_id: { type: "string" },
              terminal_id: { type: "string" },
              register_id: { type: "string" },
              cashier_id: { type: "string" },
              customer_phone_number: { type: "string" },
              cart_id: { type: "string" },
              sku_code: { type: "array", items: { type: "string" } },
              order_number: { type: "string" },
              type: { type: "string" },
              request_at: { type: "string" },
              response_at: { type: "string" },
              response_time_in_ms: { type: "number" },
              created_at: { type: "string" }
            }
          }
        },
        meta: {
          type: "object",
          properties: {
            pagination: {
              type: "object",
              properties: {
                total_items: { type: "string" },
                current_page: { type: "string" },
                page_size: { type: "string" },
                total_pages: { type: "string" }
              }
            }
          }
        }
      }
    }
  }
};

module.exports = getApiInsightsSchema;
