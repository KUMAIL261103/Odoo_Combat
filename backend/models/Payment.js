const mongoose = require("mongoose");

const paymentSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    bookingId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Booking",
    },
    amount: {
      type: Number,
      required: true,
    },
    paymentStatus: {
      type: String,
      enum: ["Success", "Pending"],
      default: "Pending",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Payment", paymentSchema);
