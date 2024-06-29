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
    amount: {
      type: Number,
      required: true,
    },
    AvailableDate: {
      type: Date,
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
  },
  { timestamps: true }
);

module.exports = mongoose.model("Facility", facilitySchema);
