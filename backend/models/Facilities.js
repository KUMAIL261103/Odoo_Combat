const mongoose = require("mongoose");

const facilitySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    amenities: [
      {
        type: String,
      },
    ],
    availabilityStatus: {
      type: Boolean,
      default: true,
    },
    maintainanceId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Maintainance",
    },
    bookingId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Booking",
    },
    amount: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Facility", facilitySchema);
