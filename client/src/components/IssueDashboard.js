import React, {useEffect, useState} from 'react'
import axios from 'axios'
import {useParams} from 'react-router-dom'

const userAxios = axios.create()

userAxios.interceptors.request.use(config => {
    const token = localStorage.getItem("token")
    config.headers.Authorization = `Bearer ${token}`
    return config
})


function IssueDashboard () {

const [singleIssue, setSingleIssue] = useState({})
const {issueId} = useParams()

const {issue, description, comments} = singleIssue


useEffect(() => {
    console.log("useEffect for issue dashboard")
    getSingleIssue()
}, [])

function getSingleIssue(){
    userAxios.get(`/api/issue/${issueId}`)
        .then(res => setSingleIssue(...res.data))
        .catch(err => console.log(err))
}

    return (
        <div>
            <h1>Issue Dashboard</h1>
            <h1>Title: {issue}</h1>
            <p>Descripton: {description}</p>
            <p>Comments: {comments}</p>
        </div>
    )
}

export default IssueDashboard










//only able to see comments if on dashboard
//needs to be deeplinked --> check recipe app for how I did it