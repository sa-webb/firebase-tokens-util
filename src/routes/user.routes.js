var admin = require('firebase-admin');

var serviceAccount = require('../../serviceAccountKey.json');

const express = require("express");
const router = express.Router();

const user_controller = require("../controllers/user.controller");

router.get('/user/:id', user_controller.get_user);

module.exports = router;
