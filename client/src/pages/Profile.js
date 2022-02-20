import React, { useContext, useEffect } from 'react'
import IssueForm from '../components/IssueForm'
import UserIssue from '../components/UserIssue'
import { UserContext } from '../context/UserProvider'

function Profile(){

  const {
    user: {
      username
    }, 
    issues,
    addNewIssue,
    getUserIssues
  } = useContext(UserContext)
  


  function handleSubmit(inputs){
    addNewIssue(inputs)
  }

  useEffect(() => {
    getUserIssues()
  }, [])
  

  return (
    <div className="container">
      <h1>Welcome @{username}!</h1>
      <h3>Add an Issue</h3>
      <IssueForm submit={handleSubmit} />
      <h3>Your Issues</h3>
      <ul>
      {issues ? issues.map(issue => <UserIssue {...issue} key={issue._id} />) : null}
      </ul>
    </div>
  )
}

export default Profile