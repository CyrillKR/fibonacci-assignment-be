const express = require("express");
const { getFibonacci, getHistory } = require("../controllers/controllers");
const router = express.Router();

router.get("/", (req, res) => res.status(200).json({ msg: "Default route" }));
router.get("/history", getHistory);
router.get("/:n", getFibonacci);

module.exports = router;
