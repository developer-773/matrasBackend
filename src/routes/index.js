const router = require("express").Router();
const apiRoutes = require("./api")
const adminRoutes = require("./admin");
const productsRouter = require("./api/products");

router.use("/api", apiRoutes);
router.use("/admin", adminRoutes);
router.use("/api", (req, res) =>
	res.status(404).json({ status: 404, message: "No API route found" })
);



router.get(`https://dream-matras.onrender.com/api/${productsRouter}`, (req, res) => {
	res.write("Home page")
	res.end();
});

module.exports = router;
