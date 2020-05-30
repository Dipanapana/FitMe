var mongoose = require('mongoose');
var Exercises = require('./models/Exercises.js');

var ExercisePlanSchema = new mongoose.Schema({
  id: String,
  exercise: Exercises,
  duration: Number,
  updated: { type: Date, default: Date.now },
});

module.exports = mongoose.model('ExercisePlan', ExercisePlanSchema);