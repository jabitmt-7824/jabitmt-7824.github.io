const express = require("express");
const router = express.Router();

const hobbieController = require("../controllers/hobbieController");

// home page
router.get("/",hobbieController.home);

// form page for add hobbie
router.get("/add-form",hobbieController.addForm);

// add hobbie
router.post("/add-hobbie",hobbieController.addHobbie);

// delete hobbie
router.post("/delete-hobbie",hobbieController.deleteHobbie);

// calender page
router.get("/calender-view",hobbieController.calenderPage);

module.exports = router;