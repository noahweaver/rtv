import React, {useContext, useState} from 'react'
import Button from 'react-bootstrap/Button'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../context/UserProvider'

function PublicIssue(props){
    
  const navigate = useNavigate()
  const {issue, description, _id, upVotes, downVotes, upVote, downVote} = props
  const { user } = useContext(UserContext)


  return (
  <div className="border border-dark rounded w-50 m-2 p-2">
        <h1>{issue}</h1>
      <p>{description}</p>
      <p>{upVotes} <Button variant="light" className="m-1" onClick={() => upVote(_id, user._id)}>upvote</Button></p>
      <p>{downVotes} <Button variant="light" className="m-1" onClick={() => downVote(_id, user._id)}>downvote</Button></p>

      <Button 
        variant="light" 
        className="m-1" 
        onClick={() => {
          navigate(`/issue/${_id}`, {state: {issue}})
        }}>
        {`Go to ${issue}`}
      </Button>      
  </div>
  )
}

export default PublicIssue