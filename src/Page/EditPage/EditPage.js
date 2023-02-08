import React from 'react';
import { Button, MenuItem, TextField } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { useForm } from 'react-hook-form';
import { json } from 'react-router-dom';
const EditPage = ({ handleClose, s,refetch }) => {

    const classs = [{ value: 'V', label: 'V', }, { value: 'VI', label: 'VI', }, { value: 'VII', label: 'VII', }, { value: 'VIII', label: 'VIII', }, { value: 'IX', label: 'IX', }, { value: 'X', label: 'X', },];
    const division = [{ value: 'Science', label: 'Science', }, { value: 'Commerce', label: 'Commerce', }, { value: 'Arts', label: 'Arts', },

    ];
    const { register, reset, handleSubmit } = useForm();
    const handleSummition = data2 => {
        const data = { ...data2, id: s._id }
        console.log(data);
        console.log(s)
        fetch('https://resolute-ai-software-server.vercel.app/editStudentDetails', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)

        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            handleClose()
            refetch()
        })


    }
    return (
        <div>
            <div className='add-student-container'>
                <div className='add-student-header'>
                    <h5 style={{
                        fontSize: '25px'
                    }}> Edit Student Details</h5>
                    <h4>2 Feb 2023</h4>

                </div>
                <form onSubmit={handleSubmit(handleSummition)}>
                    <div className='input-container'>
                        <div className='first-input-container input-disable-cursor'>
                            <TextField defaultValue={s.first_name}  {...register("first_name")} id="outlined-basic" label="First Name" variant="outlined" />
                            <TextField defaultValue={s.middle_name} {...register("middle_name")} id="outlined-basic" label="Middle Name" variant="outlined" />
                            <TextField defaultValue={s.last_name} {...register("last_name")} id="outlined-basic" label="Last Name" variant="outlined" />



                            <TextField defaultValue={s.Class} {...register("Class")} id="outlined-select-currency" select label="Select Class"  >
                                {classs.map((option) => (
                                    <MenuItem key={option.value} value={option.value}>
                                        {option.label}
                                    </MenuItem>
                                ))}
                            </TextField>
                            <TextField defaultValue={s.Division} {...register("Division")} id="outlined-select-currency" select label="Select Division" >
                                {division.map((option) => (
                                    <MenuItem key={option.value} value={option.value}>
                                        {option.label}
                                    </MenuItem>
                                ))}
                            </TextField>



                            <TextField defaultValue={s.Roll} {...register("Roll")} id="outlined-basic" label="Enter Roll Number in Digits" variant="outlined" />
                        </div>

                        <div className='second-input-container'>
                            <div className='address-input-container'>
                                <TextField defaultValue={s.address1} {...register("address1")} id="outlined-basic" label="Address Line 1" variant="outlined" />
                                <TextField defaultValue={s.address2} {...register("address2")} id="outlined-basic" label="Address Line 2" variant="outlined" />
                            </div>
                            <div style={{ marginTop: '15px' }} className='first-input-container'>
                                <TextField defaultValue={s.Landmark}  {...register("Landmark")} id="outlined-basic" label="Landmark" variant="outlined" />
                                <TextField defaultValue={s.City} {...register("City")} id="outlined-basic" label="City" variant="outlined" />
                                <TextField defaultValue={s.Pincode} {...register("Pincode")} id="outlined-basic" label="Pincode" variant="outlined" />



                                <Button type='submit' variant='outlined' color='error' sx={{ height: '50px' }} startIcon={<AddIcon />} > Click for Edit</Button>
                            </div>
                        </div>
                    </div>
                </form>

            </div>
        </div>
    );
};

export default EditPage;