const mongoose = require('mongoose');

const hospitalSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  addressLine1: {
    type: String,
    required: true,
  },
  addressLine1: {
    type: String,
  },
  city: {
    type: Number,
    required: true,
  },
  pinCode: {
    type: String,
    required: true,
  },
  specializedIn: [
    {
      type: String,
    },
  ],
});

const Hospital = mongoose.model('Hospital', hospitalSchema);