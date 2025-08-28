const getOutletDeviceSchema = {
  tags: ["Metrics"],
  summary: "This api will be used to get outlet device details",
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
        devices: {
          type: "array",
          items: {
            type: "object",
            properties: {
              type: { type: "string", enum: ["SERVER", "POS", "POS_HHT"] },
              mac_address: { type: "string" },
              mac_short_name: { type: "string" }
            }
          }
        }
      }
    }
  }
};

module.exports = getOutletDeviceSchema;
