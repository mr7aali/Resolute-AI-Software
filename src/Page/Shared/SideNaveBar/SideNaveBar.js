import React from 'react';
import { Link } from 'react-router-dom';
import './SideNabeBar.css'
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import { Button, Typography } from '@mui/material';

const SideNaveBar = () => {
    return (
        <div className='side-navbar-container'>

            <Link to="/"> 
            <div fullWidth className='list-item'>
             <Typography variant='h5' startIcon={<PeopleOutlineIcon />} className='list-text'>  Add Student</Typography>
            </div>
            </Link>
            <Link to="/ManageStudents">
            <div className='list-item'>
                <h5 className='list-text'> Manage Students</h5>
            </div>
            </Link>
            <Link to="/">
            <div className='list-item'>
                <h5 className='list-text'>Logout</h5>
            </div>
            </Link>
           
        </div>
    );
};

export default SideNaveBar;