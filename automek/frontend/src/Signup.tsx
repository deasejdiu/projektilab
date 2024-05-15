import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Validation from './SignupValidation';
import axios from 'axios';

interface FormValues {
  name: string;
  email: string;
  password: string;
}

function Signup() {
  const [values, setValues] = useState<FormValues>({ name: '', email: '', password: '' });
  const [errors, setErrors] = useState<FormValues>({ name: '', email: '', password: '' });

  const navigate = useNavigate();

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValues(prev => ({ ...prev, [event.target.name]: event.target.value }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    
    // Update the errors state first
    setErrors(Validation(values));
  
    // Validate the errors after updating the state
    if (Object.values(Validation(values)).every(error => error === '')) {
      axios.post('http://localhost:5000/signup', values)
        .then(res => {
          navigate('/Login');
          console.log(`vlerat hyrese: ${values}`)
        }).catch(err => {
          console.log(err);
        });
    }
  };
  
  

  return (
    <div className='d-flex justify-content-center align-items-center vh-100 bg-primary'>
      <div className='bg-white w-25 p-3 rounded'>
        <h2>Sign up</h2>
        <form action='' onSubmit={handleSubmit}>
          <div className='mb-3'>
            <label htmlFor='name'><strong>Name</strong></label>
            <input
              type='text'
              name='name'
              placeholder='Enter name'
              className='form-control'
              onChange={handleInput}
            />

            {errors.name && <span className='text-danger'> {errors.name}</span>}
          </div>

          <div className='mb-3'>
            <label htmlFor='email'><strong>Email</strong></label>
            <input
              type='email'
              name='email'
              placeholder='Enter email'
              className='form-control'
              onChange={handleInput}
            />

            {errors.email && <span className='text-danger'> {errors.email}</span>}
          </div>

          <div className='mb-3'>
            <label htmlFor='password'><strong>Password</strong></label>
            <input
              type='password'
              name='password'
              placeholder='Enter password'
              className='form-control'
              onChange={handleInput}
            />

            {errors.password && <span className='text-danger'> {errors.password}</span>}
          </div>

          <button type='submit' className='btn btn-success w-100'>Sign up</button>

          <p>Agree terms and services</p>

          <Link to='/' className='btn btn-default border w-100 bg-light text-decoration-none'>Log in</Link>
        </form>
      </div>
    </div>
  );
}

export default Signup;
