var mongoose = require('mongoose');

var ExerciseSchema = new mongoose.Schema({
  id: String,
  name: String,
  title: String,
  description: String,
  image: String,
  videos: [],
  updated: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Exercises', ExerciseSchema);