const mongoose = require("mongoose")
const Schema = mongoose.Schema

const voterSchema = new Schema({
    issueId: {
        type: Schema.Types.ObjectId,
        ref: "Issue",
        required: true
    },
    userId: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    }
})


module.exports = mongoose.model("Voter", voterSchema)