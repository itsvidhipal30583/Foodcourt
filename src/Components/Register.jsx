import { Box, Button, TextField } from '@mui/material'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from './Navbar'
import { toast } from 'react-toastify';


const Register = () => {

  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const navigate = useNavigate();


  const handleSubmit = (event) => {
    event.preventDefault();
    if (!name || !email || !password){
      toast.warning('All fields Required');
      return
    }
    const user = { name, email, password }
    console.log(user)

    localStorage.setItem('user', JSON.stringify(user));
    toast.success('User Registered Successfully');
    navigate('/login');
  }
  return (
    <>
      <Navbar/>
      
        <Box sx={{
          boxShadow: 10, maxWidth: 600, display: 'flex', justifyContent: 'center', alignitems: 'center', flexDirection: 'column', height: '180', p: 5, mt: 12, mx: 'auto',
          borderRadius:5}}>
          
        
          <form>
            <h2 style={{ textDecoration: 'underline', color: 'black',textAlign:'center',color:'navy' }} >Register</h2>
            <TextField label="Name" type='text' value={name} onChange={(event) => setName(event.target.value)} fullWidth margin='normal' variant='outlined' required />
            <TextField label="Email" type="email" value={email} onChange={(event) => setEmail(event.target.value)} fullWidth margin='normal' variant='outlined' required />
            <TextField label="Password" type="password" value={password} onChange={(event) => setPassword(event.target.value)} fullWidth margin='normal' variant="outlined" required />
            <Button variant='contained'  fullWidth sx={{ p: 1.3, mt: 2 }} onClick={handleSubmit}>Submit</Button>
        </form> 
          </Box>
      
    </>
  )
}

export default Register
