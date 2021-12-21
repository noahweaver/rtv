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
    issues,
    addNewIssue,
  } = useContext(UserContext)

// if issue is submitted on profile page and then user navigates to public page, 
  //  new issue does not render until page is refreshed


  return (
    <div className="container">
      <h1>Welcome @{username}!</h1>
      <h3>Add an Issue</h3>
      <IssueForm addNewIssue={addNewIssue}/>
      <h3>Your Issues</h3>
      <ul>
      {issues ? issues.map(issue => <Issue {...issue} key={issue._id} />) : null}
      </ul>
      {/* <IssueList issues={issues}/> */}
    </div>
  )
}

export default Profile