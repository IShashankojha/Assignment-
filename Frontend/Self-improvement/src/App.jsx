import React from 'react';
import './index.css'; // global styles
import Navbar from './components/navbar'; // ensure file is named navbar.jsx
import Home from './pages/Home';
import Login from './pages/login';
import Register from './pages/register';
import BehaviorDetails from './pages/behavedetail';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const Test = () => <div>Test route works!</div>;

const App = () => (
  <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/behavior/:id" element={<BehaviorDetails />} />
      <Route path="/test" element={<Test />} />
    </Routes>
  </Router>
);

export default App;
