import './styles.css';

import React, { useState, useEffect } from 'react';
import { AppBar, Tabs, Tab, Typography, Box, Container, Grid } from '@mui/material';
import CarList from './CarList'; // Assuming CarList component is implemented
import AddCarForm from './AddCarForm'; // Assuming AddCarForm component is implemented
import DeleteCarForm from './DeleteCarForm'; // Assuming DeleteCarForm component is implemented
import UpdateCarForm from './UpdateCarForm'; // Assuming UpdateCarForm component is implemented

function App() {
  const [activeTab, setActiveTab] = useState('carList');
  const [cars, setCars] = useState([]);

  useEffect(() => {
    if (activeTab === 'carList') {
      fetchCarList();
    }
  }, [activeTab]);

  const fetchCarList = () => {
    fetch('http://localhost:8080/cars')
      .then(response => response.json())
      .then(data => setCars(data))
      .catch(error => console.error('Error fetching cars:', error));
  };

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  return (
    <div>
      <AppBar position="static">
        <Tabs value={activeTab} onChange={handleTabChange}>
          <Tab label="Car List" value="carList" />
          <Tab label="Add Car" value="addCar" />
          <Tab label="Delete Car" value="deleteCar" />
          <Tab label="Update Car" value="updateCar" />
        </Tabs>
      </AppBar>
      <Container>
        <Box mt={3}>
          {activeTab === 'carList' && (
            <div>
              <Typography variant="h4">Car Rental App</Typography>
              <Grid container spacing={3}>
                {cars.map(car => (
                  <Grid item key={car.id} xs={12} sm={6} md={4} lg={3}>
                    <CarList car={car} />
                  </Grid>
                ))}
              </Grid>
            </div>
          )}
          {activeTab === 'addCar' && <AddCarForm />}
          {activeTab === 'deleteCar' && <DeleteCarForm />}
          {activeTab === 'updateCar' && <UpdateCarForm />}
        </Box>
      </Container>
    </div>
  );
}

export default App;
