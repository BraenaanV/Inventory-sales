const router = require("express").Router();
const invRoutes = require("./inventory");

// Inv routes
router.use("/inventory", invRoutes);

module.exports = router;