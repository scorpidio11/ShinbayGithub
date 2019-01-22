const router = require("express").Router();
const shindataRoutes = require("./shinbay");

// Shindata routes
router.use("/shinbay", shindataRoutes);

module.exports = router;
