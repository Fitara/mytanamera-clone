const express = require("express");
const router = express.Router();
const Controller = require("../controllers/controller");
const authen = require("../middlewares/authen");

router.get("/", Controller.categories);
router.get("/:productId", Controller.detail);

router.use(authen);
router.post("/", Controller.postCategory);
router.put("/:id", Controller.putCategory);
router.delete("/:id", Controller.deleteCategory);

module.exports = router;
