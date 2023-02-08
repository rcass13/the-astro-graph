import React, { useState, useEffect } from 'react';

import CustomInput from '../../components/CustomInput';

const LoginCard = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState();

    useEffect(() => {
        const isValidEmail = /^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/.test(email);
        if (isValidEmail) {
            setEmailError(null);
        } else {
            setEmailError('Invalid email')
        }
      }, [email])
  
    const handleSubmit = (event) => {
      event.preventDefault();
  
      const loginData = {
        email: email,
        password: password,
      };
  
      fetch('http://localhost:3000/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(loginData)
      })
        .then(res => {
          if (!res.ok) {
            throw Error(res.statusText);
          }
          return res.json();
        })
        .then(data => {
          console.log('Login successful:', data);
        })
        .catch(error => {
          console.error('Login error:', error);
        });
    };
  
    return (
      <form onSubmit={handleSubmit}>
         <CustomInput
            type="email"
            label="Email"
            name="email"
            value={email}
            onChange={setEmail}
            error={emailError}
        />
         <CustomInput
            type="password"
            label="Password"
            name="password"
            value={password}
            onChange={setPassword}
        />
        {/* <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div> */}
        <button type="submit">Login</button>
      </form>
    );
  };

export default LoginCard;
