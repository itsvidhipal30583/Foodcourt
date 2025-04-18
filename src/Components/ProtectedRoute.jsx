import React, { useContext } from 'react'
import { AuthContext } from './AuthProvider'
import { Navigate } from 'react-router-dom';



const ProtectedRoute = ({children}) => {

    const { user } = useContext(AuthContext);
    return (
        <div>
            {
            user?<Navigate to={'/'} />:Children
            }
        </div>
    )
  return (
    <div>
      
    </div>
  )
}

export default ProtectedRoute
