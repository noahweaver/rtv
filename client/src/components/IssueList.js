import React from 'react'
import Issue from '../components/Issue'

function IssueList(props){

  const {issues} = props

  return (
    <div>
      {issues.map(issue => <Issue {...issue} key={issue._id} />)}
    </div>
  )
}

export default IssueList