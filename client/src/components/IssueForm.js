import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const initInputs = {
  issue: "",
  description: ""
}

function IssueForm(props){
  const [inputs, setInputs] = useState(initInputs)
  const {addNewIssue} = props

  function handleChange(e){
    const {name, value} = e.target
    setInputs(prevInputs => ({
      ...prevInputs,
      [name]: value
    }))
  }

  function handleSubmit(e){
    e.preventDefault()
    addNewIssue(inputs)
    setInputs(initInputs)
  }

  const { issue, description} = inputs
  return (
      <Form>
          <Form.Group>
              <Form.Label>Issue</Form.Label>
              <Form.Control 
                type="text"
                name="issue"
                value={issue}
                onChange={handleChange}
                placeholder="Issue"
                />
          </Form.Group>
          <Form.Group>
              <Form.Label>Description</Form.Label>
              <Form.Control 
                type="text"
                name="description"
                value={description}
                onChange={handleChange}
                placeholder="Description"
                />
          </Form.Group>
          <Button>Add Issue</Button>
      </Form>
    
  )
}

export default IssueForm