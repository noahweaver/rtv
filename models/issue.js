const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const issueSchema = new Schema({
    issue: {
        type: String,
        required: true
    },
    description:{
        type: String
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    }
});

module.exports = mongoose.model("Issue", issueSchema); 