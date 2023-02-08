import { Button, MenuItem, TextField } from '@mui/material';
import React from 'react';
import AddIcon from '@mui/icons-material/Add';
import { useForm } from 'react-hook-form';
import './ViewStudent.css'
const ViewStudent = ({handleClose,s}) => {
    const classs = [{ value: 'V', label: 'V', }, { value: 'VI', label: 'VI', }, { value: 'VII', label: 'VII', }, { value: 'VIII', label: 'VIII', }, { value: 'IX', label: 'IX', }, { value: 'X', label: 'X', },];
    const division = [{ value: 'Science', label: 'Science', }, { value: 'Commerce', label: 'Commerce', }, { value: 'Arts', label: 'Arts', },

    ];
    const { register,reset, handleSubmit } = useForm();
    const handleSummition = data => {
        console.log(data);
        const final_data = { ...data, Email: "admin@gmail.com" }
        fetch('http://localhost:5000/post', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(final_data)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                reset();
            })


    }
  console.log(s)
    return (
        <div  className='add-student-container'>
            <div className='add-student-header'>
                <h5 style={{ 
                    fontSize:'25px'
                 }}> Student Details</h5>
                <h4>2 Feb 2023</h4>

            </div>
            <form onSubmit={handleSubmit(handleSummition)}>
                <div className='input-container'>
                    <div  className='first-input-container input-disable-cursor'>
                        <TextField defaultValue={s.first_name} disabled {...register("first_name")} id="outlined-basic" label="First Name" variant="outlined" />
                        <TextField disabled defaultValue={s.middle_name} {...register("middle_name")} id="outlined-basic" label="Middle Name" variant="outlined" />
                        <TextField disabled defaultValue={s.last_name} {...register("last_name")} id="outlined-basic" label="Last Name" variant="outlined" />



                        <TextField disabled defaultValue={s.Class} {...register("Class")} id="outlined-select-currency" select label="Select Class"  >
                            {classs.map((option) => (
                                <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                </MenuItem>
                            ))}
                        </TextField>
                        <TextField disabled defaultValue={s.Division} {...register("Division")} id="outlined-select-currency" select label="Select Division" >
                            {division.map((option) => (
                                <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                </MenuItem>
                            ))}
                        </TextField>

                        {/* <TextField disabled defaultValue={{s.Roll}} id="outlined-basic" label="Select Division" variant="outlined" /> */}
                        <TextField disabled defaultValue={s.Roll} {...register("Roll")} id="outlined-basic" label="Enter Roll Number in Digits" variant="outlined" />
                    </div>

                    <div className='second-input-container'>
                        <div className='address-input-container'>
                            <TextField disabled defaultValue={s.address1} {...register("address1")} id="outlined-basic" label="Address Line 1" variant="outlined" />
                            <TextField disabled defaultValue={s.address2} {...register("address2")} id="outlined-basic" label="Address Line 2" variant="outlined" />
                        </div>
                        <div style={{ marginTop: '15px' }} className='first-input-container'>
                            <TextField  disabled defaultValue={s.Landmark}  {...register("Landmark")} id="outlined-basic" label="Landmark" variant="outlined" />
                            <TextField disabled defaultValue={s.City} {...register("City")} id="outlined-basic" label="City" variant="outlined" />
                            <TextField disabled defaultValue={s.Pincode} {...register("Pincode")} id="outlined-basic" label="Pincode" variant="outlined" />
                            <Button onClick={handleClose} variant='outlined' color='error' sx={{height:'50px'}}  startIcon={<AddIcon />} >Close</Button>
                        </div>
                    </div>
                </div>
            </form>

        </div>
    );
};

export default ViewStudent;