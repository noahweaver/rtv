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
    },
    comments: {
        type: Array,
        ref: "Comment"
    }
});

module.exports = mongoose.model("Issue", issueSchema); 