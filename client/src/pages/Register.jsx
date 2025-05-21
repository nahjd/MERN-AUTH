import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

import { TextField, Button, Box, Typography } from '@mui/material';

export default function Register() {
  const navigate = useNavigate();
  const [data, setData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const registerUser = async (e) => {
    e.preventDefault();
    const { name, email, password } = data;
    try {
      const { data: response } = await axios.post('/register', {
        name,
        email,
        password,
      });

      if (response.error) {
        toast.error(response.error);
      } else {
        setData({ name: '', email: '', password: '' });
        toast.success('Login Successful. Welcome!');
        navigate('/login');
      }
    } catch (error) {
      console.log(error);
      toast.error('Registration failed');
    }
  };

  return (
    <Box
      component="form"
      onSubmit={registerUser}
      sx={{
        maxWidth: '400px',
        mx: 'auto',
        mt: 10,
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
      }}
    >
      <Typography variant="h4" textAlign="center">Sign Up</Typography>
      <TextField
        label="Name"
        value={data.name}
        onChange={(e) => setData({ ...data, name: e.target.value })}
        required
      />
      <TextField
        label="Email"
        type="email"
        value={data.email}
        onChange={(e) => setData({ ...data, email: e.target.value })}
        required
      />
      <TextField
        label="Password"
        type="password"
        value={data.password}
        onChange={(e) => setData({ ...data, password: e.target.value })}
        required
      />
      <Button type="submit" variant="contained" fullWidth>
        Sign Up
      </Button>
    </Box>
  );
}
