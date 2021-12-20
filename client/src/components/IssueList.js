import React from 'react'
import Issue from '../components/Issue'

function IssueList(props){

  const {issues} = props

  return (
    <ul>
      {issues.map(issue => <Issue {...issue} key={issue._id} />)}
    </ul>
  )
}

export default IssueList