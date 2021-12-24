import React, {useState} from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'


function IssueForm(props){
 
  const {
    submit,
    _id,
    issue,
    description
  } = props

  const initInputs = {
    issue: issue || "",
    description: description || ""
  }
  
  const [inputs, setInputs] = useState(initInputs)

  function handleChange(e){
    const {name, value} = e.target
    setInputs(prevInputs => ({
      ...prevInputs,
      [name]: value
    }))
  }

  return (
      <Form onSubmit={(e) => {
        e.preventDefault()
        submit(inputs, _id)
        setInputs(initInputs)
        }} className="w-25p">
          <Form.Group>
              <Form.Label>Issue</Form.Label>
              <Form.Control 
                type="text"
                name="issue"
                value={inputs.issue}
                onChange={handleChange}
                placeholder={"Issue"}
                />
          </Form.Group>
          <Form.Group>
              <Form.Label>Description</Form.Label>
              <Form.Control 
                type="text"
                name="description"
                value={inputs.description}
                onChange={handleChange}
                placeholder={"Description"}
                />
          </Form.Group>
          <Button type="submit">Submit</Button>
      </Form>
    
  )
}

export default IssueForm