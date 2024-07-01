import React from 'react'
import { Button, TextField, Typography } from '@mui/material'
import './login1.css'

const Login1 = () => {
  return (
    <div>
        <div className='container'>
          
        <div style={{textAlign:"center", marginTop:"100px"}}>
            <div className='text'>

    <Typography variant='h2'>LIBRARY LOGIN</Typography>
  
            </div>
    <div className='email'>

    <TextField id ='outlined-basic' variant='outlined' label='email'></TextField>
    <br/>
    </div>
    <div className='pass'>
    <TextField id ='outlined-basic' variant='outlined' label='password'  ></TextField>
    <br/>
    </div>
    <div className='button'>

    <Button variant='outlained' > Login</Button>
    </div>
    </div>
        </div>
    </div>
    
  )
}

export default Login1