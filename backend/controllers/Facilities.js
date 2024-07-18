const Facility = require("../models/Facilities");
exports.getAllFacilities = async (req, res) => {
    try {
        const facilities = await Facility.find();
        res.status(200).json({
            success: true,
            facilities,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Server Error",
        });
    }
}
exports.getFacility = async (req, res) => {
    try {
        const facility = await Facility.findById(req.params.id);
        if (!facility) {
            return res.status(404).json({
                success: false,
                message: "Facility not found",
            });
        }
        res.status(200).json({
            success: true,
            facility,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Server Error",
        });
    }
}
//create facility(for admin)
exports.createFacility = async (req, res) => {
    try {
        const { name, location, amount,image } = req.body;
        const facility = await Facility.create({name, location, amount,image});
        res.status(201).json({
            success: true,
            facility,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Server Error",
        });
    }
}
exports.getFacilityByDate = async (req, res) => {
    try {
        console.log("this is  data-->",req.params.currDate);
       const facility = await Facility.find({ isUsedDate: { $ne: req.params.currDate } });
        if (!facility) {
            return res.status(404).json({
                success: false,
                message: "Facility not found",
            });
        }
        res.status(200).json({
            success: true,
            facility,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Server Error",
        });
    }
}
exports.getFacilityWithMaintainencelogs = async (req, res) => {
    try {
        const facility = await Facility.find().populate("MaintenanceId");
        if (!facility) {
            return res.status(404).json({
                success: false,
                message: "Facility not found",
            });
        }
        res.status(200).json({
            success: true,
            facility,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Server Error",
        });
    }
}