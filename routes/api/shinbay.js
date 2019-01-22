const router = require("express").Router();
const shinbayController = require("../../controllers/shinbayController");

// Matches with "/api/shinbay"
router.route("/")
  .get(shinbayController.findAll)
  .post(shinbayController.create)
  .delete(shinbayController.remove);

// Matches with "/api/shinbay/:id"
router
  .route("/view")
  .get(shinbayController.findById)
  .put(shinbayController.update)
  .delete(shinbayController.remove);
  
  // Matches with "/api/shinbay/:id"
router
  .route("/print")
  .get(shinbayController.findById)
  .put(shinbayController.update)
  .delete(shinbayController.remove);



// Matches with "/api/shinbay/:id"
router
  .route("/:id")
  .get(shinbayController.findById)
  .put(shinbayController.update)
  .delete(shinbayController.remove);
  
module.exports = router;
