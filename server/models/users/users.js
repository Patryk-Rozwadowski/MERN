const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DataSchema = new Schema(
    {
        id: {type: String},
        password: {type: String, required: true},
        userName: {type: String, required: true},
        avatar: {type: String, required: true},
        profileBg: {type: String, required: true},
        description: {type: String, required: true},
        followersNumber: {type: Number, required: true},
        followingNumber: {type: Number, required: true},
        accountType: {type: String, required: true}
    },
    { timestamps: true }
);


module.exports = mongoose.model("Users", DataSchema);