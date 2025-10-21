const mongoose = require("mongoose");

const governmentSchemeSchema = new mongoose.Schema({
  schemeName: {
    type: String,
    require: true,
    unique: true,
  },
  schemeLink: {
    type: String,
    require: true,
  },
  schemeDetail: {
    type: String,
    require: true,
  },
  schemeType: {
    type: String,
    require: true,
    enum: ["state", "central"],
    default: "central",
  },
  schemeState: {
    type: String,
    require: false,
  },
  schemeImage: {
    type: String,
    require: false,
  },
  lastDateToApply: {
    type: Date
  }
});
const governmentScheme = mongoose.model("governmentScheme", governmentSchemeSchema);
module.exports = governmentScheme
