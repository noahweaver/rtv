import React, {useState, useEffect, useContext} from 'react'
import axios from 'axios'
import { PublicContext } from './PublicProvider'
export const UserContext = React.createContext()
const userAxios = axios.create()

userAxios.interceptors.request.use(config => {
    const token = localStorage.getItem("token")
    config.headers.Authorization = `Bearer ${token}`
    return config
})

export default function UserProvider(props) {
    
    const { setPublicIssues, getPublicIssues } = useContext(PublicContext)

    const initState = {
        user: JSON.parse(localStorage.getItem("user")) || {},
        token: localStorage.getItem("token") || "",
        issues: localStorage.getItem("User Issues") || [],
        errMsg: ""
    }
    const [userState, setUserState] = useState(initState)

    useEffect(() => {
        getUserIssues()
        getPublicIssues()
    }, [])

    //functions
    function signup(credentials){
        axios.post("/auth/signup", credentials)
            .then(res => {
                console.log(res)
                const {user, token} = res.data
                localStorage.setItem("token", token)
                localStorage.setItem("user", JSON.stringify(user))
                setUserState(prev => ({
                    ...prev,
                    user,
                    token
                }))
                localStorage.setItem("userState", userState)
            })
            .catch(err => handleAuthErr(err.response.data.errMsg))
            // .catch(err => console.dir(err))
    }

    function login(credentials){
        axios.post("/auth/login", credentials)
            .then(res => {
                console.log(res)
                const {user, token} = res.data
                localStorage.setItem("token", token)
                localStorage.setItem("user", JSON.stringify(user))
                
                getUserIssues()
                getPublicIssues()
                setUserState(prevUserState => ({
                    ...prevUserState,
                    user,
                    token
                }))
                
            })
            .catch(err => handleAuthErr(err.response.data.errMsg))
            // .catch(err => console.dir(err))
    }

    function logout(){
        localStorage.removeItem("token")
        localStorage.removeItem("user")
        localStorage.removeItem("User Issues")
        setUserState({
            user: {},
            token: "",
            issues: []
        })
    }

    function handleAuthErr(errMsg){
        setUserState(prev => ({
            ...prev, 
            errMsg
        }))
    }

    function resetAuthErr(){
        setUserState(prev => ({
            ...prev,
            errMsg: ""
        }))
    }

    function getUserIssues(){
        userAxios.get("/api/issue/user")
            .then(res => {
                console.log(res.data)
                localStorage.setItem("User Issues", JSON.stringify(res.data))
                setUserState(prevState => ({
                    ...prevState,
                    issues: res.data
                }))
                
            })
            .catch(err => console.log(err.response.data.errMsg))
    }

    function addNewIssue(newIssue){
        userAxios.post("/api/issue", newIssue)
            .then(res => {
                console.log(res)
                setUserState(prevState => ({
                    ...prevState,
                    issues: [...prevState.issues, res.data]
                }))
                const newIssue = res.data
                setPublicIssues(prevState => ([...prevState, newIssue]))
            })
            .catch(err => console.log(err.response.data.errMsg))
    }
    
    return (
        <UserContext.Provider
            value={{
                ...userState,
                signup,
                login,
                logout,
                addNewIssue,
                resetAuthErr
            }}
        >
            {props.children}
        </UserContext.Provider>
    )
}
