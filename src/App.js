import './App.css';
import { Routes, Route,  useNavigate } from 'react-router-dom';
import ProfilePage from './pages/ProfilePage';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import { useEffect, useState } from 'react';
import Login from './pages/Login';
import RequiresAuth from './pages/Auth';

function App() {

  return (
    <Routes>
      {/* {!user && <Route path='/' element={<Auth auth={() => setUser(true)} />} />}

      {user && (
        <>
          <Route path='/profile' element={<ProfilePage handleLogout={handleLogout} />} />
          <Route path='/dashboard' element={<Dashboard />} />
        </>
      )}

      <Route path='*' element={<Navigate to={user ? '/profile' : '/'}/>} /> */}
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login/>} />
      <Route path='/register' element={<Register />}/>
      <Route path='/dashboard' element={<RequiresAuth><Dashboard /></RequiresAuth>} />
      <Route path='/profile' element={<RequiresAuth><ProfilePage /></RequiresAuth>} />

    </Routes>

    // <Login />
  );
}

export default App;
