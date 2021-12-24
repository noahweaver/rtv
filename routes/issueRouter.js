const express = require("express")
const issueRouter = express.Router()
const Issue = require('../models/issue.js')

// Get All Issues
issueRouter.get("/", (req, res, next) => {
  Issue.find((err, issues) => {
    if(err){
      res.status(500)
      return next(err)
    }
    return res.status(200).send(issues)
  })
})

// Get issues by user id
issueRouter.get("/user", (req, res, next) => {
  Issue.find({ user: req.user._id }, (err, issues) => {
    if(err){
      res.status(500)
      return next(err)
    }
    return res.status(200).send(issues)
  })
})

// Add new Issue
issueRouter.post("/", (req, res, next) => {
  req.body.user = req.user._id
  const newIssue = new Issue(req.body)
  newIssue.save((err, savedIssue) => {
    if(err){
      res.status(500)
      return next(err)
    }
    return res.status(201).send(savedIssue)
  })
})

//GET one issue
issueRouter.get("/:issueId", (req, res, next) => {
  Issue.find({_id: req.params.issueId},
    (err, issue) => {
      if(err){
        res.status(500)
        return next(err)
      }
      return res.status(200).send(issue)
    }
    )
})


// Delete Issue
issueRouter.delete("/:issueId", (req, res, next) => {
  Issue.findOneAndDelete(
    { _id: req.params.issueId, user: req.user._id },
    (err, deletedIssue) => {
      if(err){
        res.status(500)
        return next(err)
      }
      return res.status(200).send(`Successfully delete issue: ${deletedIssue.title}`)
    }
  )
})

// Update Issue
issueRouter.put("/:issueId", (req, res, next) => {
  Issue.findOneAndUpdate(
    { _id: req.params.issueId, user: req.user._id},
    req.body, 
    { new: true },
    (err, updatedIssue) => {
      if(err){
        res.status(500)
        return next(err)
      }
      return res.status(201).send(updatedIssue)
    }
  )
})

//Upvote
issueRouter.put("/upvotes/:issueId", (req, res, next) => {
  Issue.findOne(
    { _id: req.params.issueId},
    (err, issue) => {
      if(err){
        res.status(500)
        return next(err)
      }
      if(issue.voters.includes(req.user._id)){
        res.status(403)
        return next(new Error("You already voted on this issue"))
      } else {
        Issue.findOneAndUpdate(
          { _id: req.params.issueId },
          { 
            $inc: { upVotes: 1 }, 
            $push: { voters: req.user._id}
          },
          { new: true },
          (err, issue) => {
            if (err) {
              res.status(500)
              return next(err)
            }
            return res.status(201).send(issue)
          })
      }
    })
  })

  //downvote
issueRouter.put("/downvotes/:issueId", (req, res, next) => {
  Issue.findOne(
    { _id: req.params.issueId},
    (err, issue) => {
      if(err){
        res.status(500)
        return next(err)
      }
      if(issue.voters.includes(req.user._id)){
        res.status(403)
        return next(new Error("You already voted on this issue"))
      } else {
        Issue.findOneAndUpdate(
          { _id: req.params.issueId },
          { 
            $inc: { downVotes: 1 }, 
            $push: { voters: req.user._id}
          },
          { new: true },
          (err, issue) => {
            if (err) {
              res.status(500)
              return next(err)
            }
            return res.status(201).send(issue)
          })
      }
    })
  })


//removeupvote
//remove downvote


module.exports = issueRouter