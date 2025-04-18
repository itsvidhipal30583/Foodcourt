import React, { createContext, useState } from 'react'
import { toast } from 'react-toastify';


export const AuthContext = createContext();

const AuthProvider = ({children}) => {
    const [user, setuser] = useState();

    useEffect(() => {
        const retrievedUser = JSON.parse(localStorage.getItem('loggedInUser'));

        if (retrievedUser) {
            setuser(retrievedUser)
        }
    }, []);

    //Login function
    const login = (email, password) => {
        const retrievedUser = JSON.parse(localStorage.getItem('user'));
        if (retrievedUser && retrievedUser.email === email && retrievedUser.password === password) {
            setuser(retrievedUser)
            localStorage.setItem('loggedInUser', JSON.stringify(retrievedUser));
            toast.success('User LoggedIn Successfully')
        }

         
        else {
            toast.warning('Invalid Credentials')
        }
    }


    //Logout function
    const logout = () => {
        setuser(null);
        localStorage.removeItem('loggedInUser');
       toast.success('User LoggedOut Successfully')
    }
  return (
    <div>
          <AuthContext.Provider value={{user,login,logout}}>
             {children} 
      </AuthContext.Provider>
    </div>
  )
}

export default AuthProvider
