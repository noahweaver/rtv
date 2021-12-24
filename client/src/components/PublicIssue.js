import React, {useContext, useState} from 'react'
import Button from 'react-bootstrap/Button'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../context/UserProvider'

function PublicIssue(props){
    
  const navigate = useNavigate()
  const {issue, description, _id, upVotes, downVotes, upVote, downVote} = props
  const { user } = useContext(UserContext)


  return (
    <li>
      <h1>{issue}</h1>
      {/* username of poster? */}
      <p>{description}</p>
      <p>{upVotes} <Button onClick={() => upVote(_id, user._id)}>upvote</Button></p>
      <p>{downVotes} <Button onClick={() => downVote(_id, user._id)}>downvote</Button></p>

    <Button onClick={() => {
      navigate(`/issue/${_id}`, {state: {issue}})
    }}>{`Go to ${issue}`}</Button>
    <Button>Upvote</Button>
    <Button>Downvote</Button>
    </li>
  )
}

export default PublicIssue