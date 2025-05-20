import React, { useState } from 'react'
import axios from 'axios'
import { toast } from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

export default function Login() {
  const navigate = useNavigate()
  const [data, setData] = useState({
    email: '',
    password: '',
  })

  const loginUser = async (e) => {
    e.preventDefault()
    const { email, password } = data
    try {
      const { data: responseData } = await axios.post(
        '/login',
        { email, password },
        { withCredentials: true }
      )

      if (responseData.error) {
        toast.error(responseData.error)
      } else {
        setData({ email: '', password: '' })
        toast.success('Login successful')
        navigate('/dashboard')
      }
    } catch (error) {
      console.error(error)
      toast.error('Login failed. Please try again.')
    }
  }

  return (
    <div>
      <form onSubmit={loginUser}>
        <label>Email</label>
        <input
          type="email"
          placeholder="Enter email..."
          value={data.email}
          onChange={(e) => setData({ ...data, email: e.target.value })}
        />
        <label>Password</label>
        <input
          type="password"
          placeholder="Enter password..."
          value={data.password}
          onChange={(e) => setData({ ...data, password: e.target.value })}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  )
}
