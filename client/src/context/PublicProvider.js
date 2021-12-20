import React, {useEffect, useState} from 'react'
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

    //useEffect for now, maybe change to add to login or when navigating to public
    useEffect(() => {
        getPublicIssues()
    }, [])

    
    //get all comments
    function getPublicIssues(){
        userAxios.get("/api/issue")
            .then(res => {
                console.log(res.data)
                setPublicIssues(prev => ([...prev, res.data]))
                // will need to sort by upvotes when done
            })
            .catch(err => console.log(err.response.data.errMsg))
    }

    return (
        <PublicContext.Provider
            value={{
                publicIssues,
                getPublicIssues,
            }}
            >
            {props.children}
        </PublicContext.Provider>
    )
}
