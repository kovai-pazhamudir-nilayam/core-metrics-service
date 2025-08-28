exports.envSchema = {
  type: "object",
  properties: {
    DB_USER: {
      type: "string",
      default: "postgres"
    },
    DB_PASSWORD: {
      type: "string",
      default: "postgres"
    },
    DB_NAME: {
      type: "string",
      default: "postgres"
    },
    DB_HOST: {
      type: "string",
      default: "localhost"
    },
    DB_PORT: {
      type: "string",
      default: "5432"
    },
    DATASTORE_NAMESPACE: {
      type: "string"
    },
    CLOUD_BUCKET_NAME: {
      type: "string"
    },
    UDP_PORT: {
      type: "string"
    },
    METRICS_STATUS_EVENT_TOPIC: {
      type: "string"
    },
    OUTLET_ID: {
      type: "string"
    },
    CORE_NETWORK_URI: {
      type: "string"
    }
  }
};
