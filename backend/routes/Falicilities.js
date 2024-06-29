const express = require("express");
const router = express.Router();
const {auth, isAdmin,isManager,isUser} = require("../middlewares/Auth");

const {
    getAllFacilities,
    getFacility,
    createFacility,
    getFacilityByDate
} = require("../controllers/Facilities");

router.get("/getAllFacilities",auth,getAllFacilities);
router.get("/getFacility/:id",auth,getFacility);
router.post("/createFacility",auth,isAdmin,createFacility);
router.get("/getFacilityByDate/:date",auth,getFacilityByDate);

module.exports = router;
