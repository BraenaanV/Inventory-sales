const router = require("express").Router();
const invController = require("../../controllers/invController");

// Matches with "/api/inventory"
router.route("/")
  .get(invController.findAll)
  .post(invController.create);

// Matches with "/api/inventory/:id"
router
  .route("/:id")
  .get(invController.findById)
  .put(invController.update)
  .delete(invController.remove);

module.exports = router;
