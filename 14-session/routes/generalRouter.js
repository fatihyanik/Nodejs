const express = require("express");
const adminRouter = require("./adminRouter");
const router = express.Router();

const { login, aboutUs, loginPost } = require("../models/general");

router.use("/admin", adminRouter);

router.get("/", login);
router.get("/login", login);
router.get("/aboutus", aboutUs);
router.post("/login", loginPost);

module.exports = router;
