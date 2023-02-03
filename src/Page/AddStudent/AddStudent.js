import { Button, MenuItem, TextField } from '@mui/material';
import React from 'react';
import './AddStudent.css'
import AddIcon from '@mui/icons-material/Add';
const AddStudent = () => {
    const currencies = [
        {
            value: 'USD',
            label: '$',
        },
        {
            value: 'EUR',
            label: '€',
        },
        {
            value: 'BTC',
            label: '฿',
        },
        {
            value: 'JPY',
            label: '¥',
        },
    ];

    return (
        <div className='add-student-container'>
            <div className='add-student-header'>
                <h5>Add Student</h5>
                <h4>2 Feb 2023</h4>

            </div>
            <div className='input-container'>
                <div className='first-input-container'>
                    <TextField id="outlined-basic" label="First Name" variant="outlined" />
                    <TextField id="outlined-basic" label="Middle Name" variant="outlined" />
                    <TextField id="outlined-basic" label="Last Name" variant="outlined" />



                    <TextField id="outlined-select-currency" select label="Select Class"  >
                        {currencies.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </TextField>

                    <TextField id="outlined-basic" label="Select Division" variant="outlined" />
                    <TextField id="outlined-basic" label="Enter Roll Number in Digits" variant="outlined" />
                </div>

                <div className='second-input-container'>
                    <div className='address-input-container'>
                        <TextField id="outlined-basic" label="Address Line 1" variant="outlined" />
                        <TextField id="outlined-basic" label="Address Line 2" variant="outlined" />
                    </div>
                    <div style={{ marginTop: '15px' }} className='first-input-container'>
                        <TextField id="outlined-basic" label="Landmark" variant="outlined" />
                        <TextField id="outlined-basic" label="City" variant="outlined" />
                        <TextField id="outlined-basic" label="Pincode" variant="outlined" />
                        <Button startIcon={<AddIcon/>} className='from-button'>Add Student</Button>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default AddStudent;