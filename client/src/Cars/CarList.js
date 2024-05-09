import React from 'react';
import { Card, CardContent, CardMedia, Typography, Grid } from '@mui/material';

function CarCard({ car }) {
  return (
    <Grid item xs={12} sm={6} md={4} lg={3}>
      <Card>
        <CardMedia
          component="img"
          height="200"
          image={`/images/${'car1.jpg'}`} 
          alt={'Golf 7'} 
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {car.model}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            Price per day: $70
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
}

export default CarCard;

