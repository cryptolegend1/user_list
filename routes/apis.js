var express = require("express");
var router = express.Router();

var userController = require("../controllers/userController");

router.route("/add").post(userController.create);
router.route("/getlist").get(userController.getlist);

module.exports = router;
