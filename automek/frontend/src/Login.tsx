import React, { useState, ChangeEvent, FormEvent } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Validation, { ErrorType } from './LoginValidation';
import axios from 'axios';

interface FormValues {
  email: string;
  password: string;
}

function Login(): JSX.Element {
  const [values, setValues] = useState<FormValues>({ email: '', password: '' });
  const [errors, setErrors] = useState<ErrorType>({ email: '', password: '' });

  const navigate = useNavigate();

  const handleInput = (event: ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = event.target;
    setValues(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>): Promise<void> => {
    event.preventDefault();
    const formErrors = Validation(values);
    setErrors(formErrors);
    if (formErrors.email === '' && formErrors.password === '') {
      try {
        const res = await axios.post('http://localhost:5000/login', values);
        if (res.data === 'Success') {
          navigate('/');
        } else {
          alert('No record existed');
        }
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <div className='d-flex justify-content-center align-items-center vh-100 bg-primary'>
      <div className='bg-white p-5 rounded' style={{ width: '400px', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)' }}>
        <form onSubmit={handleSubmit}>
          <div className='mb-4'>
            <label htmlFor='email'><strong>Email</strong></label>
            <input
              type='email'
              name='email'
              placeholder='Enter email'
              className='form-control'
              style={{ padding: '12px', width: '100%', borderRadius: '50px', fontSize: '16px' }}
              onChange={handleInput}
            />
            {errors.email && <span className='text-danger'> {errors.email}</span>}
          </div>

          <div className='mb-4'>
            <label htmlFor='password'><strong>Password</strong></label>
            <input
              type='password'
              name='password'
              placeholder='Enter password'
              className='form-control'
              style={{ padding: '12px', width: '100%', borderRadius: '50px', fontSize: '16px' }}
              onChange={handleInput}
            />
            {errors.password && <span className='text-danger'> {errors.password}</span>}
          </div>

          <button type='submit' className='btn btn-lg btn-success w-100' style={{ marginBottom: '20px', fontSize: '18px' }}>Log in</button>

          <p>Agree terms and services</p>

          <Link to='/signup' className='btn btn-default border w-100 bg-light text-decoration-none'>Create account</Link>
        </form>
      </div>
    </div>
  );
}

export default Login;