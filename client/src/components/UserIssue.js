import React, {useContext, useState} from 'react'
import Button from 'react-bootstrap/Button'
import Card  from 'react-bootstrap/Card'
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
        <Card className="m-1 w-50 bg-dark text-white">
        <Card.Body>
          <Card.Title>{issue}</Card.Title>
          <Card.Subtitle>{description}</Card.Subtitle>
          <Card.Text>Up votes: {upVotes}</Card.Text>
          <Card.Text>Down votes: {downVotes}</Card.Text>
          {editToggle ? <IssueForm submit={submitEdit} _id={_id} issue={issue} description={description}/> : null}
          <Button 
            variant="light" 
            className="m-1" 
            onClick={() => {
            navigate(`/issue/${_id}`, {state: {issue}})
            }}>{`Go to ${issue}`}</Button>
          <Button 
            variant="light" 
            className="m-1" 
            onClick={() => setEditToggle(prev => !prev)}>
            {editToggle ? 'Cancel' : 'Edit'}
          </Button>
          <Button 
            variant="light" 
            className="m-1" 
            onClick={() => deleteIssue(_id)}>
            Delete
          </Button>
          </Card.Body>
        </Card>
      
    </li>
  )
}

export default UserIssue