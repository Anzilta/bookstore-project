import React, { useState } from 'react';
import axios from "axios"
import {
  Container,
  Typography,
  TextField,
  Button,
  Grid,
  Box,
  Link,
} from '@mui/material';

const Signup = () => {
  const [formData, setFormData] = useState({
    name: '',
    place: '',
    age: '',
    email: '',
    education: '',
    phoneNumber: '',
    passWord: '',
  });
  


  const handleChange = (event) => {
    const { name, value, checked } = event.target;
    setFormData({...formData, [event.target.name]: event.target.value});
    console.log(formData)
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // post data to DB
    axios.post("http://127.0.0.1:3000/",formData)
    .then(()=>{
        console.log(formData)
    })
    .catch((error)=>{
        console.log(error)
    })
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    // Add your form submission logic here

  };

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',         
          borderRadius:'10px',
          borderColor:'black',
          borderWidth:"50px",
          borderBottomColor:'red',
          border:'2px'
        }}
      >
        <Typography component="h1" variant="h5">
          Sign Up
        </Typography>
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="name"
                label="Name"
                name="name"
                autoComplete="name"
                value={formData.name}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="place"
                label="Place"
                name="place"
                value={formData.place}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                id="age"
                label="Age"
                name="age"
                type="number"
                value={formData.age}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                id="phoneNumber"
                label="Phone Number"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                value={formData.email}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="password"
                type='password'
                label="password"
                name="passWord"
                value={formData.password}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="education"
                label="Education"
                name="education"
                value={formData.education}
                onChange={handleChange}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign Up
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link href="#" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};

export default Signup;