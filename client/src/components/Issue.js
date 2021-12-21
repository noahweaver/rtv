import React from 'react'

function Issue(props){

  const {issue, description, _id} = props

  return (
    <li>
      <h1>{issue}</h1>
      {/* username of poster? */}
      <p>{description}</p>
      
      {/* upvotes and downvotes */}
      {/* comments */}

    </li>
  )
}

export default Issue