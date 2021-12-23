import React from 'react'

function CommentCard(props) {

    const {comment, username} = props

    return (
        <li>
            username: {username}
            <br></br>
            Comment: {comment}
        </li>
    )
}

export default CommentCard
