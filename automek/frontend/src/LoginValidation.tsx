export interface ErrorType {
    email: string;
    password: string;
  }
  
  function Validation(values: { email: string; password: string }): ErrorType {
    let error: ErrorType = { email: '', password: '' };
    const emailPattern: RegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordPattern: RegExp = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/;
  
    if (values.email === '') {
      error.email = 'Email could not be empty';
    } else if (!emailPattern.test(values.email)) {
      error.email = 'Email format is invalid';
    }
  
    if (values.password === '') {
      error.password = 'Password could not be empty';
    } else if (!passwordPattern.test(values.password)) {
      error.password = 'Password format is invalid';
    }
  
    return error;
  }
  
  export default Validation;