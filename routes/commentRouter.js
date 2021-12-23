const express = require("express")
const commentRouter = express.Router()
const Comment = require('../models/comment.js')

//get all comments from one issue
commentRouter.get("/:issueId", (req, res, next) => {
    Comment.find(
        { issueId: req.params.issueId },
        (err, comments) => {
            if (err) {
                res.status(500)
                return next(err)
            }
            res.status(200).send(comments)
        }
    )
})

//add new comment
commentRouter.post('/:issueId', (req, res, next) => {
    req.body.userId = req.user._id
    req.body.username = req.user.username
    req.body.issueId = req.params.issueId
    const newComment = new Comment(req.body)
    newComment.save(
        (err, newComment) => {
            if (err) {
                res.status(500)
                next(err)
            }
            return res.status(201).send(newComment)
        }
    )
})

//update (edit) a comment
commentRouter.put('/:issueId/:commentId', (req, res, next) => {
    Comment.findByIdAndUpdate(
        { _id: req.params.commentId, user: req.user._id, issue: req.params.issueId },
        req.body,
        { new: true },
        (err, updatedComment) => {
            if (err) {
                console.log("Error")
                res.status(500)
                return next(err)
            }
            return res.send(updatedComment)
        }
    )
})

//delete a comment
commentRouter.delete('/:issueId/:commentId', (req, res, next) => {
    Comment.findByIdAndDelete(
        {_id: req.params.commentId, user: req.user._id, issue: req.params.issueId },
        (err, deletedComment) => {
            if (err) {
                res.status(500)
                return next(err)
            }
            return res.send(deletedComment)
        })
})


module.exports = commentRouter
