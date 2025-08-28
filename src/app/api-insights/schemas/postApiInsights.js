const postApiInsightsSchema = {
  tags: ["API-INSIGHTS"],
  summary: "This api will create a new api insights",
  body: {
    type: "array",
    minItems: 1,
    items: {
      type: "object",
      properties: {
        api_insights_id: { type: "string", format: "uuid" },
        functionality: { type: "string", nullable: true },
        outlet_id: { type: "string", nullable: true },
        terminal_id: { type: "string", nullable: true },
        register_id: { type: "string", nullable: true },
        cashier_id: { type: "string", nullable: true },
        customer_phone_number: { type: "string", nullable: true },
        cart_id: { type: "string", nullable: true },
        sku_code: {
          type: "array",
          nullable: true,
          items: {
            type: "string"
          }
        },
        order_number: { type: "string", nullable: true },
        type: { type: "string", nullable: true },
        request_at: { type: "string" },
        response_at: { type: "string" },
        response_time_in_ms: { type: "number" }
      }
    }
  },
  response: {
    200: {
      type: "object",
      properties: {
        success: { type: "boolean" }
      }
    }
  }
};

module.exports = postApiInsightsSchema;
