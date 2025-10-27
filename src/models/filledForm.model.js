const mongoose = require("mongoose");

const filledFormSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User", // Reference to Teacher model
    required: true,
  },
  scheme: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "governmentScheme",
    required: true,
  },
  date: {
    type: Date,
    default: new Date(),
  },

  formFee :{
    type: Number,
    require: true

  },
  formStatus:
  {
    type: String,
    enum:["pending" ,"approved"],
    default: "pending"
  }

});

const filledForm = mongoose.model("filledForm", 
  filledFormSchema);
module.exports = filledForm

