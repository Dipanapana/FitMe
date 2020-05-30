var mongoose = require('mongoose');
var ExercisePlan = require('./models/ExercisePlan.js');

var WorkoutPlanSchema = new mongoose.Schema({
  id: String,
  name: String,
  title: String,
  restBetweenExercise: Number,
  exercises: [ExercisePlan],
  description: String,
  updated: { type: Date, default: Date.now },
});

module.exports = mongoose.model('WorkoutPlan', WorkoutPlanSchema);