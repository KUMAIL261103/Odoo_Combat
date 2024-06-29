const Maintainance = require("../models/Maintainance");
//getall mataincelogs
exports.getAllMaintainceLogs = async (req, res) => {
    try {
        const maintainance = await Maintainance.find();
        res.status(200).json({
            success: true,
            maintainance,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Server Error",
        });
    }
}

//get maintainance log by facilityid
exports.getAllMaintainanceLogByFacilityId = async (req, res) => {
    try {
        const maintainance = await Maintainance.find({ facilityId: req.params.facilityId });
        if (!maintainance) {
            return res.status(404).json({
                success: false,
                message: "Maintainance log not found",
            });
        }
        res.status(200).json({
            success: true,
            maintainance,
        });
    }catch(error){
        res.status(500).json({
            success: false,
            message: "Server Error",
        });
    }
}
//get lattest maintainance  by facilityid
exports.getLatestMaintainanceLogByFacilityId = async (req, res) => {
    try {
        const maintainance = await Maintainance.find({ facilityId: req.params.facilityId }).sort({ createdAt: -1 }).limit(1);

        if (!maintainance) {
            return res.status(404).json({
                success: false,
                message: "Maintainance log not found",
            });
        }
        res.status(200).json({
            success: true,
            maintainance,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: "Server Error",
        });
    }
}

//schedule maintainance 
exports.scheduleMaintainance = async (req, res) => {
    try {
        const { facilityId, note, maintainanceDate } = req.body;
        const maintainance = await Maintainance.create(req.body);
        res.status(201).json({
            success: true,
            maintainance,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Server Error",
        });
    }
}
//update maintainance log
exports.updateMaintainance = async (req, res) => {
    try {
       if(!req.params.facilityId || !req.body){
            return res.status(400).json({
                success: false,
                message: "Facility Id is required",
            });
       }
       const {isdone} =req.body;
        const maintainance = await Maintainance.findOneAndUpdate({ facilityId: req.params.facilityId }, {maintainanceStatus:isdone}, { new: true });
        if (!maintainance) {
            return res.status(404).json({
                success: false,
                message: "Maintainance log not found",
            });
        }
        res.status(200).json({
            success: true,
            maintainance,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Server Error",
        });
    }
}

        

