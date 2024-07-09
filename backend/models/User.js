const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
      trim: true,
    },
    lastName: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ["admin", "user", "manager"],
      default: "user",
      required: true,
    },
    bookingId: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: "Booking",
    }],
    paymentId: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: "Payment",
    }],

    token: {
      type: String,
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("User", UserSchema);
