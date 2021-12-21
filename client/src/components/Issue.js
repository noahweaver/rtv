import React from 'react'
import Button from 'react-bootstrap/Button'
import { useNavigate } from 'react-router-dom'

function Issue(props){
  const navigate = useNavigate()
  const {issue, description, _id} = props

  return (
    <li>
      <h1>{issue}</h1>
      {/* username of poster? */}
      <p>{description}</p>
      
      {/* upvotes and downvotes */}
      {/* Only see comments if on issue dashboard */}

    <Button onClick={() => {
      navigate(`/issue/${_id}`, {state: {issue}})
    }}>{`Go to ${issue}`}</Button>
    </li>
  )
}

export default Issue