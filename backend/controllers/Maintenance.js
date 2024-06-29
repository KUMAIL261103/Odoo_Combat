const Maintenance = require("../models/Maintenance");
//getall mataincelogs
exports.getAllMaintainceLogs = async (req, res) => {
    try {
        const Maintenance = await Maintenance.find();
        res.status(200).json({
            success: true,
            Maintenance,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Server Error",
        });
    }
}

//get Maintenance log by facilityid
exports.getAllMaintenanceLogByFacilityId = async (req, res) => {
    try {
        const Maintenance = await Maintenance.find({ facilityId: req.params.facilityId });
        if (!Maintenance) {
            return res.status(404).json({
                success: false,
                message: "Maintenance log not found",
            });
        }
        res.status(200).json({
            success: true,
            Maintenance,
        });
    }catch(error){
        res.status(500).json({
            success: false,
            message: "Server Error",
        });
    }
}
//get lattest Maintenance  by facilityid
exports.getLatestMaintenanceLogByFacilityId = async (req, res) => {
    try {
        const Maintenance = await Maintenance.find({ facilityId: req.params.facilityId }).sort({ createdAt: -1 }).limit(1);

        if (!Maintenance) {
            return res.status(404).json({
                success: false,
                message: "Maintenance log not found",
            });
        }
        res.status(200).json({
            success: true,
            Maintenance,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: "Server Error",
        });
    }
}

//schedule Maintenance 
exports.scheduleMaintenance = async (req, res) => {
    try {
        const { facilityId, note, MaintenanceDate } = req.body;
        const Maintenance = await Maintenance.create(req.body);
        res.status(201).json({
            success: true,
            Maintenance,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Server Error",
        });
    }
}
//update Maintenance log
exports.updateMaintenance = async (req, res) => {
    try {
       if(!req.params.facilityId || !req.body){
            return res.status(400).json({
                success: false,
                message: "Facility Id is required",
            });
       }
       const {isdone} =req.body;
        const Maintenance = await Maintenance.findOneAndUpdate({ facilityId: req.params.facilityId }, {MaintenanceStatus:isdone}, { new: true });
        if (!Maintenance) {
            return res.status(404).json({
                success: false,
                message: "Maintenance log not found",
            });
        }
        res.status(200).json({
            success: true,
            Maintenance,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Server Error",
        });
    }
}

        

