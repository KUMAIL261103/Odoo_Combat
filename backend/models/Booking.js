const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    facilityId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Facility",
    },
    bookingDate: {
      type: String,
      required: true,
    },
    // bookingStatus: {
    //   type: String,
    //   enum: ["Aprooved", "Pending", "Rejected"],
    //   default: "Pending",
    // },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Booking", bookingSchema);
