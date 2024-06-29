const express = require("express");
const router = express.Router();
const {auth, isAdmin,isManager,isUser} = require("../middlewares/Auth");
const {
    getAllBookings,
    getBookingByUserId,
    getBookingByFacilityId,
    createBooking,
    approveBooking
}= require("../controllers/Booking");



router.get("/getAllMaintainceLogs",auth,isAdmin, getAllMaintainceLogs);

router.get("/getBookingByUserId",auth,isUser, getBookingByUserId)

router.get("/getBookingByFacilityId",auth,isAdmin,getBookingByFacilityId);

router.post("/createBooking",auth,isUser, createBooking);

router.post("/approveBooking",auth,isAdmin,approveBooking);

module.exports = router;