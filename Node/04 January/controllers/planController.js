const plans = require("../data/plans");
module.exports.deletePlan=function(req,res){

}
module.exports.getPlan=function(req,res){

}
module.exports.getAllPlans = function(req, res) {
  res.json({
    plans: plans
  });
};
module.exports.updatePlan = function(req, res) {
  const { id } = req.params;
  const data = req.body;
  const plan = plans[id - 1];
  const keys = Object.keys(data);
  for (var i = 0; i < keys.length; i++) {
    plan[keys[i]] = data[keys[i]];
  }
  res.json({
    plans
  });
};
module.exports.createPlan = function(req, res) {
  const plan = req.body;
  plan.id = plans.length + 1;
  plans.push(plan);
  res.json({
    plans
  });
};