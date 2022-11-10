const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const groupSchema = new Schema({
     idx: { type: String, required: false}, grouplist: { type: Array, required: true },
}, { timestamps: true });

const Group = mongoose.model("Group", groupSchema);

module.exports = Group;