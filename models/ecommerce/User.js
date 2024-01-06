const mongoose = require('mongoose');

const ecommerceUserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    email: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const EcommerceUser = mongoose.model('EcoomerceUser', ecommerceUserSchema);
User;