const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DataSchema = new Schema(
  {
    id: { type: String, required: true },
    name: { type: String, required: true },
    password: { type: String, required: true },
    userName: { type: String, required: true },
    avatar: { type: String, required: true, default: 'https://secure.gravatar.com/avatar/a79f74f7099431d5e5ec311f285b5990?s=500&d=mm&r=g' },
    profileBg: { type: String, required: true, default: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvMf5WC3aRlpmqJwGQujetIc8DODKtoX6Gha5RGvDKhgtv9GyM&s' },
    description: { type: String, required: true, default: 'Hello! I am new here!' },
    places: { type: Array, required: true },
    imagesNumber: { type: Array, required: true },
    followersNumber: { type: Number, required: true, default: 0 },
    followingNumber: { type: Number, required: true, default: 0 },
    accountType: { type: String, required: true, default: 'free' }
  },
  { timestamps: true }
);

module.exports = mongoose.model('User', DataSchema);
