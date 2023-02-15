const router = require("express").Router();
const apiRoutes = require("./api")
const adminRoutes = require("./admin");

router.use("https://dream-matras.onrender.com/api", apiRoutes);
router.use("/admin", adminRoutes);


router.get("/", (req, res) => {
	res.write("Home page")
	res.end();
});

module.exports = router;
