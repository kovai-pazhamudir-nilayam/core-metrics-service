const getApplicationStatusSchema = {
  tags: ["Metrics"],
  summary: "This api will be used to get application status details",
  querystring: {
    type: "object",
    properties: {
      outlet_id: { type: "string" }
    }
  },
  response: {
    200: {
      type: "object",
      properties: {
        outlet_id: { type: "string" },
        metrics: {
          type: "array",
          items: {
            type: "object",
            properties: {
              dms_id: { type: "string" },
              mac_address: { type: "string" },
              terminal_id: { type: "string" },
              register_id: { type: "string" },
              user_id: { type: "string" },
              upstream_type: { type: "string", enum: ["LOCAL", "REMOTE"] },
              type: { type: "string", enum: ["SERVER", "CLIENT"] },
              app_version: { type: "string" },
              last_order_at: { type: "string" },
              current_cart_id: { type: "string" },
              weighing_scale_status: { type: "string" },
              edc_type: { type: "string" },
              trigger_type: { type: "string" },
              metric_capture_at: { type: "string" },
              trigger_at: { type: "string" }
            }
          }
        }
      }
    }
  }
};

module.exports = getApplicationStatusSchema;
