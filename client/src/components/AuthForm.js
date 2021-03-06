import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

function AuthForm(props) {

    const {
        handleChange,
        handleSubmit,
        btnText,
        errMsg,
        inputs: {
            username,
            password
        }
    } = props

    return (
        <>
        <h1>{btnText}</h1>
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
                <Button type="submit" >{btnText}</Button>
                <p style={{color: "red"}}> {errMsg} </p>
            </Form>
        </>
    )
}

export default AuthForm
