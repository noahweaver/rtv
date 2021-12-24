const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const issueSchema = new Schema({
    issue: {
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    upVotes: {
        type: Number,
        default: 0
    },
    downVotes: {
        type: Number,
        default: 0
    },
    voters: {
        type: Array,
        required: true
    }
});

module.exports = mongoose.model("Issue", issueSchema); 