const Booking = require("../models/Booking");
//get all bookings(for admin)
exports.getAllBookings = async (req, res) => {
    try {
        const bookings = await Booking.find();
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
}
//get booking by userid(for user)
exports.getBookingByUserId = async (req, res) => {
    try {
        const bookings = await Booking.find({ userId: req.params.userId });
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
}
//get booking by facilityid(for admin)
exports.getBookingByFacilityId = async (req, res) => {
    try {
        const bookings = await Booking.find({ facilityId: req.params.facilityId });
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
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: "Server Error",
        });
}
}
//create booking(for user)
exports.createBooking = async (req, res) => {
    try {
        const { userId, facilityId, date} = req.body;
        const booking = await Booking.create(userId, facilityId, date);
        const userupdate = await User.findByIdAndUpdate(userId, { $push: {
            booking: booking
        } }, { new: true });
        res.status(201).json({
            success: true,
            booking,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Server Error",
        });
    }
}
//approve booking(for admin)
exports.approveBooking = async (req, res) => {
    try {
        const {userId, facilityId, answer,date} = req.body;
        
        const booking = await Booking.findByIdAndUpdate(req.params.id, { bookingStatus: answer }, { new: true });  
        //isUsedDate is array so append the date
        const facility = await Facility.findByIdAndUpdate(facilityId, { $push: {
            isUsedDate: date
        } }, { new: true });
      
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
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: "Server Error",
        });
    }
}