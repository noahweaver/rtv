import React from 'react'

function Issue(props){

  const {issue, description, _id} = props

  return (
    <li>
      <h1>{issue}</h1>
      {/* username of poster? */}
      <p>{description}</p>
    </li>
  )
}

export default Issue