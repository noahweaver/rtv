import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

function AuthForm(props) {

    const {
        handleChange,
        handleSubmit,
        btnText,
        inouts: {
            username,
            password
        }
    } = props

    return (
        <>
            <Form onSubmit={handleSubmit}>
                <Form.Group>
                    <Form.Label>Username</Form.Label>
                    <Form.Control 
                        type="text"
                        value={username}
                        name="username"
                        onChange={handleChange}
                        placeholder="Username"
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Password</Form.Label>
                    <Form.Control 
                        type="text"
                        value={password}
                        name="password"
                        onChange={handleChange}
                        placeholder="Password"
                    />
                </Form.Group>
                <Button>{btnText}</Button>
            </Form>
        </>
    )
}

export default AuthForm
