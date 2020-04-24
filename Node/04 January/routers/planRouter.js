const express = require("express");
const planRouter = express.Router();
const {
  deletePlan,
  getAllPlans,
  getPlan,
  updatePlan,
  createPlan
} = require("../controllers/planController");
planRouter
  .route("")
  .get(getAllPlans)
  .post(createPlan);
planRouter
  .route("/:id")
  .patch(updatePlan)
  .delete(deletePlan)
  .get(getPlan);
module.exports = planRouter;
