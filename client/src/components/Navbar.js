import React from 'react'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'

function Navbar(props) {

    const {logout} = props

    return (
        <Nav className="">
            <Nav.Item >
                <Nav.Link href="/profile">Profile</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/public">Public</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Button onClick={logout}>Logout</Button>
            </Nav.Item>
        </Nav>
    )
}

export default Navbar
