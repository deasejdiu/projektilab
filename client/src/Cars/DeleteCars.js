import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { TextField, Button, Typography, Box, styled } from '@mui/material';

// Styled components for custom styling
const SmallTextField = styled(TextField)({
  '& .MuiOutlinedInput-root': {
    padding: '8px', // Adjusted padding for smaller size
  },
});

const DeleteButton = styled(Button)({
  marginTop: '16px', // Adjusted margin for button
  backgroundColor: '#f44336', // Changed button color to red
  '&:hover': {
    backgroundColor: '#d32f2f', // Darker red on hover
  },
});

function DeleteCarForm({ onDelete }) {
  return (
    <div className="delete-car-form">
      <Formik
        initialValues={{
          carId: ''
        }}
        validationSchema={Yup.object({
          carId: Yup.string().required('Car ID is required')
        })}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          onDelete(values.carId);
          resetForm();
          setSubmitting(false);
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <Box mb={2}>
              <Typography variant="subtitle1">Enter Car ID:</Typography>
              <Field
                as={SmallTextField} // Use the smaller text field
                type="text"
                id="carId"
                name="carId"
                variant="outlined"
                fullWidth
                required
              />
            </Box>
            <DeleteButton
              type="submit"
              variant="contained"
              disabled={isSubmitting}
            >
              Delete Car
            </DeleteButton>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default DeleteCarForm;
