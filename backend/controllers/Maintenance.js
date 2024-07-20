const Maintenance = require("../models/Maintenance");
const Facility = require("../models/Facilities");
//getall mataincelogs
exports.getAllMaintainceLogs = async (req, res) => {
    try {
        const getMaintenance = await Maintenance.find();
        res.status(200).json({
            success: true,
            getMaintenance,
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
        const MaintenancebyFacilityId = await Maintenance.find({ facilityId: req.params.facilityId });
        if (!MaintenancebyFacilityId) {
            return res.status(404).json({
                success: false,
                message: "Maintenance log not found",
            });
        }
        res.status(200).json({
            success: true,
            MaintenancebyFacilityId,
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
        const MaintenancebyFacilityId = await Maintenance.find({ facilityId: req.params.facilityId }).sort({ createdAt: -1 }).limit(1);

        if (!MaintenancebyFacilityId) {
            return res.status(404).json({
                success: false,
                message: "Maintenance log not found",
            });
        }
        res.status(200).json({
            success: true,
            MaintenancebyFacilityId,
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
        const { facilityId, note, MaintenanceDate,title } = req.body;
        console.log(req.body);
        const data = {
            facilityId: facilityId,
            note: note,
            MaintenanceDate: MaintenanceDate,
            title:title,
        };
        
        const newMaintenance = await Maintenance.create(data);
        const facilityupdate = await Facility.findByIdAndUpdate(facilityId, { $push: { MaintenanceId: newMaintenance._id } }, { new: true });
        res.status(201).json({
            success: true,
            newMaintenance,
        });
        
    } catch (error) {
        res.status(500).json({
            success: false,
            error:error,
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

        

