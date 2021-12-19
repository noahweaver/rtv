import React from 'react'
import {Outlet, Navigate} from 'react-router-dom'
import Auth from '../pages/Auth'

export default function ProtectedRoute(props){
    
    const { 
        path, 
        redirectTo, 
        component: C, 
        token, 
        ...rest 
    } = props

    return (
        <>
        {token ? 
            <Outlet {...rest}/> 
            :
             <Navigate to="/" />}
    
        



    {/* <Routes>
         <Route path={path} element={<C {...rest} />} />
    </Routes> */}



    
    {/* {token ? 
        <Routes>
        <Route path={path} element={<C {...rest}/> }/> 
        </Routes>
        :
        <Routes> 
        <Route path='/' element={<Auth />}/>
     </Routes>} */}

    </>
    )
}

