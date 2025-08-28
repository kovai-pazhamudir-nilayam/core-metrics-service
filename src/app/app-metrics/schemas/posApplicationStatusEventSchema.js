const posApplicationStatusEventSchema = {
  tags: ["Metrics"],
  summary: "This api will be used to raise an event",
  body: {
    type: "object",
    properties: {
      outlet_ids: {
        type: "array",
        items: {
          type: "string"
        }
      },
      trigger_type: {
        type: "string"
        // enum: ["MANUAL", "AUTO"],
        // default: "AUTO"
      }
    }
  },
  response: {
    200: {
      type: "array",
      items: {
        type: "object",
        properties: {
          outlet_id: { type: "string" },
          dms_id: { type: "string" }
        }
      }
    }
  }
};

module.exports = posApplicationStatusEventSchema;
