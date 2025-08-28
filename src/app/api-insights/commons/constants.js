const API_INSIGHTS = {
  NAME: "api_insights",
  COLUMNS: {
    API_INSIGHTS_ID: "api_insights_id",
    FUNCTIONALITY: "functionality",
    OUTLET_ID: "outlet_id",
    TERMINAL_ID: "terminal_id",
    REGISTER_ID: "register_id",
    CASHIER_ID: "cashier_id",
    CART_ID: "cart_id",
    CUSTOMER_PHONE_NUMBER: "customer_phone_number",
    SKU_CODE: "sku_code",
    ORDER_NUMBER: "order_number",
    TYPE: "type",
    REQUEST_AT: "request_at",
    RESPONSE_AT: "response_at",
    RESPONSE_TIME_IN_MS: "response_time_in_ms",
    CREATED_AT: " created_at"
  }
};

const SUCCESS_RESPONSE = { success: true };

module.exports = {
  API_INSIGHTS,
  SUCCESS_RESPONSE
};
