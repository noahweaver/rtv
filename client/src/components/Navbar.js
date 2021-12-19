import React from 'react'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'

function Navbar(props) {

    const {logout} = props

    return (
        <Nav className="w-20p justify-content-evenly flex-nowrap">
            <Nav.Item >
                <Link to="/profile" className="btn btn-primary">Profile</Link>
            </Nav.Item>
            <Nav.Item>
                <Link to="/public" className="btn btn-primary">Public</Link>
            </Nav.Item>
            <Nav.Item>
                <Button onClick={logout}>Logout</Button>
            </Nav.Item>
        </Nav>
    )
}

export default Navbar
