import React from 'react';
import MuiNavbar from './MuiNavbar'; // Assuming both files are in the same directory
import { colors } from '@mui/material';

const HomePage = () => {
    return (
        <div style={{ backgroundImage: `url('https://i.pinimg.com/564x/07/91/e5/0791e508b8cbc44fd10ffb0ea3b539a1.jpg')`, backgroundSize: 'cover', minHeight: '100vh' }}>
            {/* <MuiNavbar /> */}
           
            <div style={{ padding: '150px' }}>
                <h1>Welcome!</h1>
                <p>explore our tools and trust them!.</p>
            </div>
        </div>
    );
};

export default HomePage;