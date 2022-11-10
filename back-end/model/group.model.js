const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const groupSchema = new Schema({
    id: { type: String, required: true, unique: true }, grouplist: { type: Array, required: true },
}, { timestamps: true });

const Group = mongoose.model("Group", groupSchema);

module.exports = Group;