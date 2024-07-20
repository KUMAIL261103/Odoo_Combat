const Booking = require("../models/Booking");
const Facility = require("../models/Facilities");
const User = require("../models/User");
const Razorpay = require("razorpay");
const crypto = require("crypto");
require("dotenv").config();
// const stripe = require("stripe")(process.env.STRIPE_PRIVATE_KEY)
//get all bookings(for admin)
exports.getAllBookings = async (req, res) => {
  try {
    const bookings = await Booking.find()
      .populate("userId")
      .populate("facilityId");
    res.status(200).json({
      success: true,
      bookings,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};
//get booking by userid(for user)
// Backend Route
exports.getBookingByUserId = async (req, res) => {
  try {
    const { userId } = req.query;
    const bookings = await Booking.find({ userId }).populate("facilityId");
    if (!bookings || bookings.length === 0) {
      // Check if bookings array is empty
      return res.status(404).json({
        success: false,
        message: "Booking not found",
      });
    }
    res.status(200).json({
      success: true,
      bookings,
    });
  } catch (error) {
    console.error("Error fetching bookings:", error);
    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};
//get booking by facilityid(for admin)
exports.getBookingByFacilityId = async (req, res) => {
  try {
    const bookings = await Booking.find({
      facilityId: req.params.facilityId,
    }).populate("userId");
    if (!bookings) {
      return res.status(404).json({
        success: false,
        message: "Booking not found",
      });
    }
    res.status(200).json({
      success: true,
      bookings,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};
//create booking(for user)

exports.createBooking = async (req, res) => {
  try {
    const { facilityId } = req.body;
    console.log(req.body);
    const facility = await Facility.findById(facilityId);

    if (!facility) {
      return res.status(404).json({
        success: false,
        message: "Facility not found",
      });
    }
    console.log(facility.amount);

    var instance = new Razorpay({
      key_id: process.env.RAZORPAY_KEY_ID,
      key_secret: process.env.RAZORPAY_KEY_SECRET,
    });
    //console.log(instance);
    const options = {
      amount: facility.amount * 100, // Convert to smallest currency unit
      currency: "INR",
      receipt: `receipt_${facilityId}`,
      
    }
    
    const orderr =  await instance.orders.create(options);
    console.log("this is order--->",orderr);

    if (!orderr) {
      return res.status(500).json({
        success: false,
        message: "Unable to create order",
      });
    }

    res.status(200).json({
      success: true,
      order:orderr,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      error: error.message,
      message: "Server Error",
    });
  }
};
//validate booking(for user)
exports.validateBooking = async (req, res) => {
  try {
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature, userId, facilityId, date } = req.body;
    console.log(req.body);
    const sha = crypto.createHmac("sha256", process.env.RAZORPAY_KEY_SECRET);
    sha.update(`${razorpay_order_id}|${razorpay_payment_id}`);
    const digest = sha.digest("hex");

    if (digest !== razorpay_signature) {
      return res.status(400).json({ msg: "Transaction is not legit!" });
    } else {
      try {
        const bookingData = {
          userId,
          facilityId,
          bookingDate: date,
          paymentId: razorpay_payment_id,
        };

        const booking = await Booking.create(bookingData);
        
        await Facility.findByIdAndUpdate(
          facilityId,
          { $push: { isUsedDate: date } },
          { new: true }
        );

        await User.findByIdAndUpdate(
          userId,
          {
            $push: { 
              bookingId: booking._id,
              paymentId: razorpay_payment_id
            }
          },
          { new: true }
        );

        return res.status(201).json({
          success: true,
          message: "Booking created",
          booking,
        });
      } catch (error) {
        console.error(error);
        res.status(500).json({
          success: false,
          error: error.message,
          message: "Server Error",
        });
      }
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      error: error.message,
      message: "Server Error",
    });
  }
};
    
 

//approve booking(for admin)
exports.approveBooking = async (req, res) => {
  try {
    const { userId, facilityId, answer, date } = req.body;

    const booking = await Booking.findByIdAndUpdate(
      req.params.id,
      { bookingStatus: answer },
      { new: true }
    );
    //isUsedDate is array so append the date
    const facility = await Facility.findByIdAndUpdate(
      facilityId,
      {
        $push: {
          isUsedDate: date,
        },
      },
      { new: true }
    );

    if (!booking) {
      return res.status(404).json({
        success: false,
        message: "Booking not found",
      });
    }
    res.status(200).json({
      success: true,
      booking,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};
