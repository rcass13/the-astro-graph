import React, { useState, useEffect } from 'react';

import CustomInput from '../../components/CustomInput';


const CreateAccountCard = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState();
  const [password, setPassword] = useState('');
  const [birthdate, setBirthdate] = useState('');
  const [accounts, setAccounts] = useState([]);

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
  
    const formData = {
      name: name,
      email: email,
      password: password,
      birthdate: birthdate
    };

    fetch('http://localhost:3000/api/create-account', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
      
    })
      .then(res => {
        if (!res.ok) {
          throw Error(res.statusText);
        }
        return res.json();
      })
      .then(data => {
        
        setAccounts([...accounts, {name: data.name, email: data.email, password: data.password, birthday: data.birthdate}]);
  console.log('Success:', data);
        console.log('Success:', data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
     
  };

  return (
    <form onSubmit={handleSubmit}>
        <CustomInput
            type="text"
            label="Name"
            name="name"
            value={name}
            onChange={setName}
        />
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
         <CustomInput
            type="date"
            label="Birthdate"
            name="birthdate"
            value={birthdate}
            onChange={setBirthdate}
        />
      
      <button type="submit">Create Account</button>
    </form>
  )
  }

export default CreateAccountCard;
