import { Typography } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import React from 'react';
import './Header.css'
const Header = () => {
    return (
        <div className='header-container'>

            <div className='logo-container'>
                LOGO
            </div>
            <div className='user-email-container'>
                    <p style={{
                        display:'flex',
                        alignItems:'center',
                        justifyContent:'center',
                        
                }}> <span style={{marginRight:'5px'}}><PersonIcon/></span> username@gmail.com</p>
            </div>


        </div>
    );
};

export default Header;