const Facility = require("../models/Facilities");
exports.getAllFacilities = async (req, res) => {
    try {
        const facilities = await Facility.find().populate("MaintenanceId");
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
        const { name, location, price,image,amenities } = req.body;
        console.log("this is data-->",req.body);
        const newfacility = await Facility.create({name, location, amount:price,image,amenities});
        res.status(201).json({
            success: true,
            newfacility,
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            error: error.message,
            message: "Server Error",
        });
    }
}
exports.getFacilityByDate = async (req, res) => {
    try {
        console.log("this is  data-->",req.params.currDate);
    const notusedfacility = await Facility.find({ isUsedDate: { $ne: req.params.currDate } }).populate("MaintenanceId");
    console.log("this is not used facility-->", notusedfacility);
    const availableFacilitywithoutMaintenance = notusedfacility.filter((facility) => {
        return facility.MaintenanceId.length === 0 || facility.MaintenanceId.every((maintenance) => maintenance.MaintenanceDate !== req.params.currDate);
    });

//console.log("Available facilities without maintenance on the given date:", availableFacilitywithoutMaintenance);


        if (!availableFacilitywithoutMaintenance) {
            return res.status(404).json({
                success: false,
                message: "Facility not found",
            });
        }
        res.status(200).json({
            success: true,
            availableFacilitywithoutMaintenance,
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