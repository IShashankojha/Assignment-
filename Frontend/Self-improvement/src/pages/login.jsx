import React, { useState } from 'react';
import API from '../service/api';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [form, setForm] = useState({ username: '', password: '' });
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await API.post('/auth/login', form);
      const token = response.data.token;
      if (token) {
        localStorage.setItem('token', token);
      }
      navigate('/');
    } catch (error) {
      alert('Login failed');
    }
  };

  return (
    <div className="container">
      <form className="login-form" onSubmit={handleLogin}>
        <input
          className="form-input"
          type="text"
          placeholder="Username"
          value={form.username}
          onChange={(e) => setForm({ ...form, username: e.target.value })}
        />
        <input
          className="form-input"
          type="password"
          placeholder="Password"
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />
        <button className="form-button" type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
