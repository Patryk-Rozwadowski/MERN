const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserDataSchema = new Schema(
  {
    name: { type: String, required: true },
    password: { type: String, required: true },
    email: { type: String, required: true },
    avatar: { type: String },
    profileBg: {
      type: String,
      required: true,
      default:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvMf5WC3aRlpmqJwGQujetIc8DODKtoX6Gha5RGvDKhgtv9GyM&s'
    },
    description: {
      type: String,
      required: true,
      default: 'Hello! I am new here!'
    },
    places: { type: Array, default: 0 },
    imagesNumber: { type: Array, default: 0 },
    followersNumber: { type: Number, default: 0 },
    followingNumber: { type: Number, default: 0 },
    accountType: { type: String, default: 'free' }
  },
  { timestamps: true }
);

module.exports = mongoose.model('User', UserDataSchema);
