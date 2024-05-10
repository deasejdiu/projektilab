// AddCarsForm.js
import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { TextField, Button, Typography, Box } from '@mui/material';
import './styles.css'; // Import the CSS file

function AddCarsForm({ onSubmit }) {
  return (
    <div className="form-container">
      <Typography variant="h5" gutterBottom>
        Add Car
      </Typography>
      <Formik
        initialValues={{
          modelName: '',
          // Add more initial values as needed
        }}
        validationSchema={Yup.object({
          modelName: Yup.string().required('Model name is required'),
          // Add more validation as needed
        })}
        onSubmit={onSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            <Field
              as={TextField}
              name="modelName"
              label="Model Name"
              variant="outlined"
              fullWidth
              className="form-input"
            />
            {/* Add more form fields as needed */}

            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              disabled={isSubmitting}
              className="form-button"
            >
              Submit
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default AddCarsForm;


