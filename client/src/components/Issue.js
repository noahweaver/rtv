import React from 'react'

function Issue(props){

  const {issue, description, _id} = props

  return (
    <div>
      <h1>{issue}</h1>
      <p>{description}</p>
    </div>
  )
}

export default Issue