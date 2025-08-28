const { getAuthToken } = require("@ebono-commerce/ebono-platform-token");

function downstreamCallsRepo(fastify) {
  async function getAllOutlets({ logTrace }) {
    const auth = await getAuthToken("PLATFORM");
    const response = await fastify.request({
      url: `${fastify.config.CORE_NETWORK_URI}/v1/outlets`,
      method: "GET",
      headers: {
        ...logTrace,
        Authorization: auth,
        "x-channel-id": "WEB"
      },
      path: "/core-network/v1/outlets",
      downstream_system: "core-network",
      source_system: "core-metrics-service",
      domain: "order",
      functionality: "Get All Outlets"
    });
    return response;
  }

  return {
    getAllOutlets
  };
}

module.exports = downstreamCallsRepo;
