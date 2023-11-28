import React, { useState } from 'react';
import { Navbar } from '../Screen/Navbar';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Visibility from '@mui/icons-material/Visibility';
import InputAdornment from '@mui/material/InputAdornment';
import HomeIcon from '@mui/icons-material/Home';



const LoginForm = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [number, setnumber] = useState('');
  const [password, setPassword] = useState('');

  const [values, setValues] = useState({
    password: '',
    showPassword: false,
  });





  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setnumber('');
    setPassword('');
  };

  const handlenumberChange = (event) => {
    setnumber(event.target.value);
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handlePasswordChange = (event) => {
    setValues({ ...values, password: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    
  };

  return (
    <div >
      {isLoggedIn ? (
        <div>
          <Navbar />
          {/* Display user profile information */}
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <div className="login-container">
          <div className="container">
            <form className="login-form" onSubmit={handleSubmit}>
              <h2><HomeIcon />  MatKatus</h2>
                           
              <h2>Sign in Admin</h2>
              <div className="form-group">
                <input
                  type="tel" 
                  id="phone"
                  value={number}
                  placeholder="Mobile number"
                  onChange={handlenumberChange}
                  style={{width:"290px",height:"40px"}}
                />
              </div>
              <Input
                type={values.showPassword ? 'text' : 'password'}
                style={{width:"300px",height:"50px",border: "2px solid gray"}}
                onChange={handlePasswordChange}
                value={values.password}
                placeholder="password"
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton onClick={handleClickShowPassword} edge="end">
                      {values.showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                }
              />
          
             <br/> <br/> <br/> <br/>
              <button type="submit">Login</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default LoginForm;
