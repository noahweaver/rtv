import React, {useEffect, useState} from 'react'
import axios from 'axios'
import {useParams} from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import CommentCard from '../components/CommentCard'

const userAxios = axios.create()

userAxios.interceptors.request.use(config => {
    const token = localStorage.getItem("token")
    config.headers.Authorization = `Bearer ${token}`
    return config
})


function IssueDashboard (props) {


const [singleIssue, setSingleIssue] = useState({})
const [comments, setComments] = useState([])
const {issueId} = useParams()

const {issue, description} = singleIssue


useEffect(() => {
    console.log("useEffect for issue dashboard")
    getSingleIssue()
    getIssueComments()
}, [])

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
// add comment => POST


function addComment(issueId){
    console.log("Add Comment was called")
    axios.put(`/issues/${issueId}`)
        .then(res => {
            const updates = res.data
            setSingleIssue(prevState => ({...prevState, updates}))
        })
        .catch(err => console.log(err))
}

    return (
        <div>
            <h1>Title: {issue}</h1>
            <p>Descripton: {description}</p>
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
            <Button onClick={addComment} >Add a Comment</Button>
        </div>
    )
}

export default IssueDashboard




//only able to see comments if on dashboard
//needs to be deeplinked --> check recipe app for how I did it