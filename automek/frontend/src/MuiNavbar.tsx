import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Typography, Stack, Button, Menu, MenuItem } from '@mui/material';
import { Link } from 'react-router-dom';
import TaxiAlertIcon from '@mui/icons-material/TaxiAlert';

const MuiNavbar = () => {
    const [anchorElementi, setAnchorElementi] = useState<null | HTMLElement>(null);
    const hapur = Boolean(anchorElementi);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorElementi(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorElementi(null);
    };

    return (
        <AppBar position='static' sx={{ backgroundColor: 'green' }}>
            <Toolbar sx={{ margin: 0, padding: 0 }}>
                <IconButton
                    size='large'
                    edge='start'
                    color='inherit'
                    aria-label='logo'
                >
                    <TaxiAlertIcon />
                </IconButton>
                <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
                    Automjekësi e Besueshme
                </Typography>
                <Stack direction='row' spacing={2}>
                    <Button color='inherit'>Home</Button>
                    <Button color='inherit' href = "/Login">Login</Button>
                    <Button color='inherit' href ="/Pjeset">PjesëT e makinave</Button>
                    <Button color='inherit' href = "/Vajrat">Vajrat</Button>
                    <Button color='inherit' href="/Order">Order</Button>
                    
                    
                    
                </Stack>
                <Menu
                    id='ORDER-menu'
                    anchorEl={anchorElementi}
                    open={hapur}
                    MenuListProps={{
                        "aria-labelledby": 'ORDER-button'
                    }}
                    onClose={handleClose}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'right'
                    }}
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right'
                    }}
                >
                    <MenuItem onClick={handleClose}>ONLINE</MenuItem>
                </Menu>
            </Toolbar>
        </AppBar>
    );
};

export default MuiNavbar;