import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { PublicContext } from '../context/PublicProvider'
import { UserContext } from '../context/UserProvider'
import Button from 'react-bootstrap/Button'
import CommentCard from '../components/CommentCard'
import CommentForm from '../components/CommentForm'


const userAxios = axios.create()

userAxios.interceptors.request.use(config => {
    const token = localStorage.getItem("token")
    config.headers.Authorization = `Bearer ${token}`
    return config
})


function IssueDashboard (props) {

const { upVote, downVote } = useContext(PublicContext)
const { user } = useContext(UserContext)
const [singleIssue, setSingleIssue] = useState({})
const [comments, setComments] = useState([])
const [commentToggle, setCommentToggle] = useState(false)
const [commentInput, setCommentInput] = useState({ comment: "" })
const { issueId } = useParams()

const {
    issue, 
    description, 
    upVotes, 
    downVotes, 
    _id
} = singleIssue


useEffect(() => {
    console.log("useEffect for issue dashboard")
    getSingleIssue()
    getIssueComments()
}, [])

function handleChange(e){
    const {name, value} = e.target
    setCommentInput(prevInputs => ({...prevInputs, [name]: value}))
  }

function getSingleIssue(){
    userAxios.get(`/api/issue/${issueId}`)
        .then(res => {
            console.log("getSingleIssue", ...res.data)
            setSingleIssue(...res.data)
        })
        .catch(err => console.log(err))
}
function getIssueComments(){
    userAxios.get(`/api/comment/${issueId}`)
    .then(res => {
        console.log("getIssueComments", res.data)
        setComments(res.data)
    })
    .catch(err => console.log(err))
}

function addComment(newComment){
    console.log("newComment", newComment)
    userAxios.post(`/api/comment/${issueId}`, newComment)
        .then(res => setComments(prevComments => [...prevComments, res.data]))
        .then(setCommentToggle(false))
        .then(setCommentInput(""))
        .then(getIssueComments())
        .catch(err => console.log(err))
}

function handleUpVote(_id, userId){
    upVote(_id, userId)
    getSingleIssue()
    getIssueComments()
}
function handleDownVote(_id, userId){
    downVote(_id, userId)
    getSingleIssue()
    getIssueComments()
}

    return (
        <div>
            <h1>Title: {issue}</h1>
            <p>Descripton: {description}</p>
            <p>{upVotes} <Button onClick={() => handleUpVote(_id, user._id)}>Upvote</Button></p>
            <p>{downVotes} <Button onClick={() => handleDownVote(_id, user._id)}>Downvote</Button></p>
            <ul>
            {comments ? 
                comments.map(comment => 
                    <CommentCard 
                        {...comment} 
                        key={comment._id}
                        />)
            :
            null
            }
            </ul>
            {!commentToggle ? <Button onClick={() => setCommentToggle(true)} >Add a Comment</Button> : null}
            {commentToggle ? <CommentForm 
                        handleChange={handleChange}
                        addComment={addComment}
                        setCommentToggle={setCommentToggle}
                        comment={commentInput}
                        setCommentInput={setCommentInput}
                        /> 
                        : null}
        </div>
    )
}

export default IssueDashboard
