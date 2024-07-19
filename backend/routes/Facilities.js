const express = require("express");
const router = express.Router();
const { auth, isAdmin, isManager, isUser } = require("../middlewares/Auth");

const {
  getAllFacilities,
  getFacility,
  createFacility,
  getFacilityByDate,
  getFacilityWithMaintainencelogs
} = require("../controllers/Facilities");

router.get("/getAllFacilities", getAllFacilities);
router.get("/getFacility/:id", auth, getFacility);
router.post("/createFacility", auth, isAdmin, createFacility);
router.get("/getFacilityByDate/:currDate", auth, getFacilityByDate);
router.get("/getFacilityWithMaintainencelogs",auth,isManager,isAdmin,getFacilityWithMaintainencelogs);
module.exports = router;
