const APPLICATION_STATUS = {
  NAME: "application_status",
  COLUMNS: {
    APPLICATION_STATUS_ID: "application_status_id",
    DMS_ID: "dms_id",
    OUTLET_ID: "outlet_id",
    TRIGGER_TYPE: "trigger_type",
    TRIGGER_AT: "trigger_at"
  }
};

const OUTLET_DEVICE_REGISTER = {
  NAME: "outlet_device_register",
  COLUMNS: {
    OUTLET_DEVICE_REGISTER_ID: "outlet_device_register_id",
    OUTLET_ID: "outlet_id",
    TYPE: "type",
    MAC_ADDRESS: "mac_address",
    MAC_SHORT_NAME: "mac_short_name",
    CREATED_BY: "created_by",
    LAST_MODIFIED_BY: "last_modified_by",
    LAST_MODIFIED_AT: "last_modified_at",
    API_VERSION: "api_version"
  }
};

const METRICS = {
  NAME: "metrics",
  COLUMNS: {
    METRICS_ID: "metrics_id",
    DMS_ID: "dms_id",
    OUTLET_ID: "outlet_id",
    TERMINAL_ID: "terminal_id",
    REGISTER_ID: "register_id",
    USER_ID: "user_id",
    UPSTREAM_TYPE: "upstream_type",
    TYPE: "type",
    LAST_ORDER_AT: "last_order_at",
    CURRENT_CART_ID: "current_cart_id",
    WEIGHING_SCALE_STATUS: "weighing_scale_status",
    EDC_TYPE: "edc_type",
    METRIC_CAPTURE_AT: "metric_capture_at",
    MAC_ADDRESS: "mac_address",
    API_VERSION: "api_version",
    APP_VERSION: "app_version",
    LAST_MODIFIED_AT: "last_modified_at"
  }
};

const SUCCESS_RESPONSE = { success: true };

const METRICS_STATUS = {
  METRICS_STATUS_CREATED: "METRICS_STATUS_CREATED"
};

module.exports = {
  APPLICATION_STATUS,
  OUTLET_DEVICE_REGISTER,
  SUCCESS_RESPONSE,
  METRICS_STATUS,
  METRICS
};
