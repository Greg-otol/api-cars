const mongoose = require('mongoose');

const CarsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  year: {
    type: Number,
    required: true,
  },
});

const Cars = mongoose.model('cars', CarsSchema);

module.exports = Cars;
