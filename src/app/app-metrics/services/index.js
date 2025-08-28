const storeApplicationStatus = require("./postStoreApplicationStatus");
const fetchApplicationStatus = require("./getApplicationStatus");
const posApplicationStatusEvent = require("./posApplicationStatusEvent");
const postOutletDeviceRegister = require("./postOutletDeviceRegister");
const getOutletDevice = require("./getOutletDevice");

module.exports = {
  storeApplicationStatus,
  fetchApplicationStatus,
  posApplicationStatusEvent,
  postOutletDeviceRegister,
  getOutletDevice
};
