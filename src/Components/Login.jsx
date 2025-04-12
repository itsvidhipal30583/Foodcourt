import React, { useState} from 'react'
import { Box, Button, TextField } from '@mui/material'

import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Navbar from './Navbar';


const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const user = JSON.parse(localStorage.getItem('user'))
    if (user && user.email === email && user.password === password) {
      localStorage.setItem('loggedInUser', JSON.stringify(user));
      toast.success('user loggedIn successfully');
      navigate('/')
    }
  }

  
  
  return (
    <>
             <Navbar/>
              <Box sx={{
                boxShadow: 10, maxWidth: 600, display: 'flex', justifyContent: 'center', alignitems: 'center', flexDirection: 'column', height: '180', p: 5, mt: 12, mx: 'auto',
                borderRadius:5}}>
       
                
          <h2 style={{ textDecoration: 'underline', color: 'navy' }} >Login</h2>
        <form>
          
          <TextField label="Email" value={email} onChange={(e)=>setEmail(e.target.value)} margin='normal' variant='outlined' fullWidth />
          <TextField label="Password" value={password } onChange={(e)=>setPassword(e.target.value)} margin='normal'  fullWidth />
                 
          <Button variant='contained' margin='normal' sx={{mt:1}} fullWidth onClick={handleLogin}>Submit</Button>
             
       
      </form> 
    </Box >
    </>
  )
}

export default Login
