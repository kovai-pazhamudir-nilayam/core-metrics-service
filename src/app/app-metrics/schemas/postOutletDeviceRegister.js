const postOutletDeviceRegisterSchema = {
  tags: ["Metrics"],
  summary: "This api will be used to post outlet device register details",
  body: {
    type: "object",
    properties: {
      outlet_id: { type: "string" },
      type: { type: "string", enum: ["SERVER", "POS", "POS_HHT"] },
      mac_address: { type: "string" },
      mac_short_name: { type: "string" },
      created_by: { type: "string", format: "uuid" },
      last_modified_by: { type: "string", format: "uuid" }
    }
  },
  response: {
    200: {
      success: { type: "boolean" }
    }
  }
};

module.exports = postOutletDeviceRegisterSchema;
