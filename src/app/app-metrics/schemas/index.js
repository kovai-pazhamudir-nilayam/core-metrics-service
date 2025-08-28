const createApplicationStatusSchema = require("./createApplicationStatusSchema");
const getApplicationStatusSchema = require("./getApplicationStatusSchema");
const posApplicationStatusEventSchema = require("./posApplicationStatusEventSchema");
const postOutletDeviceRegisterSchema = require("./postOutletDeviceRegister");
const getOutletDeviceSchema = require("./getOutletDevice");

module.exports = {
  createApplicationStatusSchema,
  getApplicationStatusSchema,
  posApplicationStatusEventSchema,
  postOutletDeviceRegisterSchema,
  getOutletDeviceSchema
};
