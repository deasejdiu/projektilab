const Validation = (values: { name: string, email: string, password: string }): { name: string, email: string, password: string } => {
    let errors: { name: string, email: string, password: string } = { name: '', email: '', password: '' };
    const emailPattern: RegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordPattern: RegExp = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/;

    if (values.name.trim() === '') {
        errors.name = 'Name could not be empty';
    }

    if (values.email.trim() === '') {
        errors.email = 'Email could not be empty';
    } else if (!emailPattern.test(values.email)) {
        errors.email = 'Invalid email format';
    }

    if (values.password.trim() === '') {
        errors.password = 'Password could not be empty';
    } else if (!passwordPattern.test(values.password)) {
        errors.password = 'Password must contain at least 8 characters including one uppercase letter, one lowercase letter, and one number';
    }

    return errors;
};

export default Validation;