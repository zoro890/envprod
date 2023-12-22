const express = require("express");
const tourCtrl = require ("../controller/tours_Ctrl");

const toursRouter = express.Router();

toursRouter.route("/").get(tourCtrl.getAllTours).post(tourCtrl.checkBody, tourCtrl.postNewTour);

toursRouter
  .route("/:id")
  .get(tourCtrl.getTourById)
  .patch(tourCtrl.updateTourById)
  .delete(tourCtrl.deleteTourById);

  toursRouter.param("id",tourCtrl.checkId)

module.exports = toursRouter;