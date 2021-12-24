import React, {useContext, useState} from 'react'
import Button from 'react-bootstrap/Button'
import { useNavigate } from 'react-router-dom'
import IssueForm from './IssueForm'
import { UserContext } from '../context/UserProvider'


function UserIssue(props){
  const navigate = useNavigate()

  const { editIssue, deleteIssue } = useContext(UserContext)
  const {issue, description, _id, upVotes, downVotes} = props
  const [editToggle, setEditToggle] = useState(false)

  function submitEdit(inputs, _id){
    console.log("submit edit")
    editIssue(inputs, _id)
    setEditToggle(false)
  }

  return (  
    <li>
        <div>
          <h1>{issue}</h1>
          <p>{description}</p>
          <p>Up votes: {upVotes}</p>
          <p>Down votes: {downVotes}</p>

          {/* number of up/down votes */}
          {editToggle ? <IssueForm submit={submitEdit} _id={_id} issue={issue} description={description}/> : null}
          <Button onClick={() => {
            navigate(`/issue/${_id}`, {state: {issue}})
            }}>{`Go to ${issue}`}</Button>
          <Button onClick={() => setEditToggle(prev => !prev)}>{editToggle ? 'Cancel' : 'Edit'}</Button>
          <Button onClick={() => deleteIssue(_id)}>Delete</Button>
        </div>
      
    </li>
  )
}

export default UserIssue