import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

function CommentForm(props) {

    const {
        handleChange, 
        addComment, 
        setCommentToggle, 
        comment,
        setCommentInput, 
    } = props


    return (
        <Form onSubmit={() => addComment(comment)}>
            <Form.Group>
                <Form.Control 
                    type="text"
                    name="comment"
                    value={comment.comment}
                    onChange={handleChange}
                />
            </Form.Group>
            <Button type="submit">Add Comment</Button>
            <Button onClick={() => {
                setCommentToggle(false)
                setCommentInput({comment: ""})
            }}>Cancel</Button>
        </Form>
    )
}

export default CommentForm
