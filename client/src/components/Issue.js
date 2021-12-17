import React from 'react'

function Issue(props){

  const {title, description, imgUrl, _id}

  return (
    <div>
      <h1>{title}</h1>
      <h2>{description}</h2>
      <img src={imgUrl} alt={imgUrl} width={250} />
    </div>
  )
}

export default Issue