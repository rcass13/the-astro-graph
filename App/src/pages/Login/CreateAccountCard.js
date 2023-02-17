import React, { useState, useEffect } from 'react';
import CustomInput from '../../components/CustomInput';
import { Card, Form, Button } from 'react-bootstrap';
// import 'bootswatch/dist/slate/bootstrap.min.css'; // Added this :boom
import '../../styles/bootstrap.min.css';
import '../../styles/login.css';

const CreateAccountCard = ({setAuth}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState();
  const [password, setPassword] = useState('');
  const [birthday, setBirthday] = useState('');
  const [accounts, setAccounts] = useState([]);

  useEffect(() => {
    const isValidEmail = /^[A-Za-z0-9_!#$%&'*+/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/.test(email);
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
      birthday: birthday
    };

    fetch('http://localhost:3001/api/auth/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      withCredentials: true,
      body: JSON.stringify(formData)
      
    })
      .then(res => {
        if (!res.ok) {
          throw Error(res.statusText);
        }
        return res.json();
      })
      .then(data => {
        
        setAccounts([...accounts, {name: data.name, email: data.email, password: data.password, birthday: data.birthday}]);
        setAuth(data)
        console.log('Success:', data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
     
  };

  return (
    <Card className="card border-secondary mb-3 d-flex" style={{width: '40 rem' }}>
      <Card.Header className="card-header text-white" as="h5">Create Account</Card.Header>
      <Card.Body className="justify-content-center align-items-center">
        <Form onSubmit={handleSubmit}>
          <CustomInput className="form-control"
              type="text"
              label="Name"
              name="name"
              value={name}
              onChange={setName}
          />
          <CustomInput className="form-control"
              type="email"
              label="Email"
              name="email"
              value={email}
              onChange={setEmail}
              error={emailError}
          />
           <CustomInput className="form-control"
              type="password"
              label="Password"
              name="password"
              value={password}
              onChange={setPassword}
          />
           <CustomInput className="form-control"
              type="date"
              label="Birthday"
              name="birthday"
              value={birthday}
              onChange={setBirthday}
          />
          <Button className="btn btn-secondary" type="submit">Create Account</Button>
        </Form>
      </Card.Body>
    </Card>

  )
  }

export default CreateAccountCard;
