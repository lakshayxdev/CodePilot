const express = require("express");
const router = express.Router();

const protect = require("../middleware/authMiddleware");
const { getHistory, getHistoryById, deleteHistoryById } = require("../controllers/historyController");

router.get("/", protect, getHistory);
router.delete("/:id", protect, deleteHistoryById);

module.exports = router;