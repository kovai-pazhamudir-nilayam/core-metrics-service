const createApplicationStatusHandler = require("./createApplicationStatus");
const getApplicationStatusHandler = require("./getApplicationStatus");
const posApplicationStatusEventHandler = require("./posApplicationStatusEvent");
const postOutletDeviceRegisterHandler = require("./postOutletDeviceRegister");
const getOutletDeviceHandler = require("./getOutletDevice");

module.exports = {
  createApplicationStatusHandler,
  getApplicationStatusHandler,
  posApplicationStatusEventHandler,
  postOutletDeviceRegisterHandler,
  getOutletDeviceHandler
};
