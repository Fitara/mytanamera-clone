const express = require("express");
const router = express.Router();
const Controller = require("../controllers/controller");
const authen = require("../middlewares/authen");

router.get("/", Controller.products);
router.get("/:productId", Controller.detail);

router.use(authen);
router.post("/", Controller.postProduct);
router.put("/:id", Controller.putProduct);
router.delete("/:id", Controller.deleteProduct);

module.exports = router;
