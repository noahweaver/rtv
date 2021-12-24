import React, { useState } from 'react'
import axios from 'axios'
export const PublicContext = React.createContext()
const userAxios = axios.create()

userAxios.interceptors.request.use(config => {
    const token = localStorage.getItem("token")
    config.headers.Authorization = `Bearer ${token}`
    return config
})


export default function PublicProvider(props) {

    const [publicIssues, setPublicIssues] = useState([])
    
    function getPublicIssues(){
        userAxios.get("/api/issue")
            .then(res => {
                const issueArray = res.data
                localStorage.setItem("Public Issues", JSON.stringify(res.data))
                setPublicIssues([...issueArray])
                // will need to sort by upvotes when done
            })
            .catch(err => console.log(err.response.data.errMsg))
    }

    function upVote(issueId, userId){
        console.log("upVote", issueId, "userId", userId)
        userAxios.put(`api/issue/upvotes/${issueId}`, userId)
            .then(res => {
                console.log(res)
                getPublicIssues()
            }
                )
            .catch(err => console.log(err))
    }

    function downVote(issueId){
        console.log("downVote", issueId)
        userAxios.put(`api/issue/downvotes/${issueId}`)
            .then(res => getPublicIssues())
            .catch(err => console.log(err))
    }


    return (
        <PublicContext.Provider
            value={{
                publicIssues,
                setPublicIssues,
                getPublicIssues,
                upVote,
                downVote
            }}
            >
            {props.children}
        </PublicContext.Provider>
    )
}
