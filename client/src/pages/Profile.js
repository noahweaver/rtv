import React, {useContext} from 'react'
import IssueForm from '../components/IssueForm'
import IssueList from '../components/IssueList'
import Issue from '../components/Issue'
import { UserContext } from '../context/UserProvider'

function Profile(){

  const {
    user: {
      username
    }, 
    addNewIssue,
    issues
  } = useContext(UserContext)

  return (
    <div className="profile">
      <h1>Welcome @{username}!</h1>
      <h3>Add an Issue</h3>
      <IssueForm addNewIssue={addNewIssue}/>
      <h3>Your Issues</h3>
      <IssueList issues={issues}/>
    </div>
  )
}

export default Profile