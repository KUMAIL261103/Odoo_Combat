const mongoose = require("mongoose");

const MaintenanceSchema = new mongoose.Schema(
  {
    facilityId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Facility",
    },
    title:{
      type: String,
      required: true,
    },
    note: {
      type: String,
    },
    MaintenanceDate: {
      type: String,
      required: true,
    },
    MaintenanceStatus: {
      type: String,
      enum: ["Done", "Pending"],
      default: "Pending",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Maintenance", MaintenanceSchema);
