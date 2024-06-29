const express = require("express");
const router = express.Router();
const {auth, isAdmin,isManager,isUser} = require("../middlewares/Auth");
const {
    getAllMaintainceLogs,
    getAllMaintenanceLogByFacilityId,
    getLatestMaintenanceLogByFacilityId,
    scheduleMaintenance,
    updateMaintenance,
} = require("../controllers/Maintenance");



router.get("/getAllMaintainceLogs",auth,isAdmin, getAllMaintainceLogs);

router.get("/getAllMaintenanceLogByFacilityId",auth,isManager, getAllMaintenanceLogByFacilityId)

router.post("/scheduleMaintenance",auth,isManager,scheduleMaintenance);

router.post("/updateMaintenance",auth,isManager, updateMaintenance);



module.exports = router;