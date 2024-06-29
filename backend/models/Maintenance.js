const mongoose = require("mongoose");

const maintainanceSchema = new mongoose.Schema(
  {
    facilityId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Facility",
    },
    note: {
      type: String,
    },
    maintainanceDate: {
      type: Date,
      required: true,
    },
    maintainanceStatus: {
      type: String,
      enum: ["Done", "Pending"],
      default: "Pending",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Maintainance", maintainanceSchema);
