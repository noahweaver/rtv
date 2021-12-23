import React, {useContext, useEffect} from 'react'
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
    getUserIssues,
    deleteIssue
  } = useContext(UserContext)

  useEffect(() => {
    getUserIssues()
  }, [])
  
  console.log("Profile Page issues render", issues)

  // const userIssues = localStorage.getItem(JSON.parse("User Issues"))


  // console.log("UserIssuesArray", userIssuesArr)
  // const UserIssuesMap = userIssuesArr.map(issue => <Issue {...issue} key={issue._id} />)

  return (
    <div className="container">
      <h1>Welcome @{username}!</h1>
      <h3>Add an Issue</h3>
      <IssueForm addNewIssue={addNewIssue}/>
      <h3>Your Issues</h3>
      <ul>
       
      {issues ? issues.map(issue => 
        <>
          <Issue {...issue} key={issue._id} />
            <button onClick={() => deleteIssue(issue._id)}>Delete Issue</button>
            </>) 
      : null}

      </ul>
    </div>
  )
}

export default Profile