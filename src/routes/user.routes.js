const express = require("express");
const router = express.Router();

const user_controller = require("../controllers/user.controller");

router.get('/user/:id', user_controller.get_user);
router.get('/update/:id', user_controller.grant_admin);
router.get('/isadmin/:id', user_controller.check_admin);

module.exports = router;
