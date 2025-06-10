import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { useNavigate, Link as RouterLink } from 'react-router-dom';

import {
  TextField,
  Button,
  Box,
  Typography,
  InputAdornment,
  IconButton,
  Link,
} from '@mui/material';

import { Visibility, VisibilityOff } from '@mui/icons-material';

export default function Login() {
  const navigate = useNavigate();
  const [data, setData] = useState({
    email: '',
    password: '',
  });
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => setShowPassword((show) => !show);

  const loginUser = async (e) => {
    e.preventDefault();
    const { email, password } = data;
    try {
      const { data: responseData } = await axios.post(
        '/login',
        { email, password },
        { withCredentials: true }
      );

      if (responseData.error) {
        toast.error(responseData.error);
      } else {
        setData({ email: '', password: '' });
        toast.success('Login successful');
        navigate('/home');
      }
    } catch (error) {
      console.error(error);
      toast.error('Login failed. Please try again.');
    }
  };

  return (
    <Box
      component="form"
      onSubmit={loginUser}
      sx={{
        maxWidth: '400px',
        mx: 'auto',
        mt: 10,
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
      }}
    >
      <Typography variant="h4" textAlign="center">
        Login
      </Typography>

      <TextField
        label="Email"
        type="email"
        value={data.email}
        onChange={(e) => setData({ ...data, email: e.target.value })}
        required
      />

      <TextField
        label="Password"
        type={showPassword ? 'text' : 'password'}
        value={data.password}
        onChange={(e) => setData({ ...data, password: e.target.value })}
        required
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                onClick={togglePasswordVisibility}
                edge="end"
                aria-label="toggle password visibility"
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          ),
        }}
      />

      <Button type="submit" variant="contained" fullWidth>
        Login
      </Button>

      {/* Register link */}
      <Typography textAlign="center">
        Don't have an account?{' '}
        <Link component={RouterLink} to="/register" underline="hover">
          Register here
        </Link>
      </Typography>
    </Box>
  );
}
