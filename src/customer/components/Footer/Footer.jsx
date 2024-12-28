import React from 'react';
import {  Typography } from '@mui/material';
import { Grid} from '@mui/material';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <>
        <Grid
            className="mt-10 text-center text-white bg-black"
            container
            sx={{ bgcolor: "black", color: "white", py: 3 }}
        >
            <Grid item xs={12} sm={6} md={3}>
                <Typography variant="h6" className="pb-5">Company</Typography>
                <Typography variant="h6" className="pb-5" gutterBottom>About</Typography>
                <Typography variant="h6" className="pb-5" gutterBottom>Blog</Typography>
                <Typography variant="h6" className="pb-5" gutterBottom>Press</Typography>
                <Typography variant="h6" className="pb-5" gutterBottom>Partner</Typography>
                
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
                <Typography variant="h6" className="pb-5">Solutions</Typography>
                <Typography variant="h6" className="pb-5" gutterBottom>Marketing</Typography>
                <Typography variant="h6" className="pb-5" gutterBottom>Analytics</Typography>
                <Typography variant="h6" className="pb-5" gutterBottom>Commerce</Typography>
                <Typography variant="h6" className="pb-5" gutterBottom>Insights</Typography>
                <Typography variant="h6" className="pb-5" gutterBottom>Support</Typography>
                
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
                <Typography variant="h6" className="pb-5">Documentation</Typography>
                <Typography variant="body1" className="pb-5" gutterBottom>Guids</Typography>
                <Typography variant="body1" className="pb-5" gutterBottom>Api Status</Typography>
                
                
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
                <Typography variant="h6" className="pb-5">Legal </Typography>
                <Typography variant="body1" className="pb-5" gutterBottom>Claim</Typography>
                <Typography variant="body1" className="pb-5" gutterBottom>Privacy </Typography>
                <Typography variant="body1" className="pb-5" gutterBottom>Terms</Typography>
                
                
            </Grid>
        </Grid>
        <Grid className='pt-20 text-white bg-black' item xs={12}>  
            <Typography varient="body2" coomponent="p" align="center">&cop; 2024 My Comapany. All rights reserved </Typography>
            <Typography varient="body2" coomponent="p" align="center">Made with love by Me.</Typography> 
            <Typography varient="body2" coomponent="p" align="center">Icon Made by {' '}
            <Link to="https://www.flaticon.com/authors/freepik" color="inherit" underline="always">Freepik </Link>
             from
            <Link to="https://www.flaticon.com/" color="inherit" underline="always"> www.flaticon.com</Link>
            </Typography>
        </Grid>
        </>
    );
};

export default Footer;
