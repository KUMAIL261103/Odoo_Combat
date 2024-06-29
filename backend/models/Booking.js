const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    facilityId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Facility",
    },
    bookingDate: {
      type: Date,
      required: true,
    },
    bookingStatus: {
      type: String,
      enum: ["Aprooved", "Pending"],
      default: "Pending",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Booking", bookingSchema);
