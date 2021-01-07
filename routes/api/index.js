const router = require("express").Router();
const invRoutes = require("./inventory");

// Book routes
router.use("/inventory", invRoutes);

module.exports = router;