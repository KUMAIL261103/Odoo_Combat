const mongoose = require("mongoose");

const MaintenanceSchema = new mongoose.Schema(
  {
    facilityId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Facility",
    },
    note: {
      type: String,
    },
    MaintenanceDate: {
      type: Date,
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
