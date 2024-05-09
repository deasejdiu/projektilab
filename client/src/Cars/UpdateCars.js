import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { TextField, Button, Typography, Box, Grid } from '@mui/material';

function UpdateCarForm({ onUpdate }) {
  return (
    <div className="update-car-form">
      <Formik
        initialValues={{
          carId: '',
          modeli: '',
          karburanti: '',
          vitiIProdhimit: '',
          transmetuesi: '',
          kilometrazhi: '',
          description: '',
          image: ''
        }}
        validationSchema={Yup.object({
          carId: Yup.string().required('Car ID is required'),
          modeli: Yup.string(),
          karburanti: Yup.string(),
          vitiIProdhimit: Yup.number(),
          transmetuesi: Yup.string(),
          kilometrazhi: Yup.number(),
          description: Yup.string(),
          image: Yup.string().url('Invalid image URL')
        })}
        onSubmit={(values, { resetForm }) => {
          onUpdate(values);
          resetForm();
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <Field
                  as={TextField}
                  label="Car ID"
                  name="carId"
                  variant="outlined"
                  fullWidth
                  size="small"
                  required
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Field
                  as={TextField}
                  label="Model"
                  name="modeli"
                  variant="outlined"
                  fullWidth
                  size="small"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Field
                  as={TextField}
                  label="Fuel Type"
                  name="karburanti"
                  variant="outlined"
                  fullWidth
                  size="small"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Field
                  as={TextField}
                  label="Production Year"
                  name="vitiIProdhimit"
                  variant="outlined"
                  fullWidth
                  size="small"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Field
                  as={TextField}
                  label="Transmission"
                  name="transmetuesi"
                  variant="outlined"
                  fullWidth
                  size="small"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Field
                  as={TextField}
                  label="Mileage"
                  name="kilometrazhi"
                  type="number"
                  variant="outlined"
                  fullWidth
                  size="small"
                />
              </Grid>
              <Grid item xs={12}>
                <Field
                  as={TextField}
                  label="Description"
                  name="description"
                  multiline
                  rows={4}
                  variant="outlined"
                  fullWidth
                  size="small"
                />
              </Grid>
              <Grid item xs={12}>
                <Field
                  as={TextField}
                  label="Image URL"
                  name="image"
                  variant="outlined"
                  fullWidth
                  size="small"
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              disabled={isSubmitting}
              fullWidth
            >
              Update Car
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default UpdateCarForm;
