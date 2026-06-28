const express = require("express");
const router = express.Router();
const  protect =require("../middleware/authMiddleware");

const { generateResponse } = require("../controllers/aiController");

router.post("/", protect, generateResponse);

module.exports = router;