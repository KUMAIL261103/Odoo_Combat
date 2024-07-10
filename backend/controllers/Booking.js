const Booking = require("../models/Booking");
const Facility = require("../models/Facilities");
const User = require("../models/User");
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
    const { userId, facilityId, date } = req.body;
    const data = {
      userId: userId,
      facilityId: facilityId,
      bookingDate: date,
    };
    const booking = await Booking.create(data);
    const facilityupdate = await Facility.findByIdAndUpdate(
      facilityId,
      {
        $push: {
          isUsedDate: date,
        },
      },
      { new: true }
    );
    //add booking id to  to user
    const userupdate = await User.findByIdAndUpdate(
      userId,
      {
        $push: {
          bookingId: booking._id,
        },
      },
      { new: true }
    );
    res.status(201).json({
      success: true,
      message: "Booking created",
      booking,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
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
