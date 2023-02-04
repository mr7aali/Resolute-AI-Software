import React, { useState } from 'react';
import './CustomizedTables.css';
import VisibilityIcon from '@mui/icons-material/Visibility';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import DeleteIcon from '@mui/icons-material/Delete';
import { useQuery } from '@tanstack/react-query';
import { Modal } from '@mui/material';
import { Box } from '@mui/system';

import ViewStudent from '../ViewStudent/ViewStudent';
const CustomizedTables = () => {

    const [open, setOpen] = React.useState(false);
    const [modalData,setmodalData]= useState(null);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);


    const { data: student = [], refetch } = useQuery({
        queryKey: ['student'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/studentData');
            const data = await res.json();
            return data;
        }
    })
    const handleDelete = (data) => {


        console.log(data?._id)

        fetch(`http://localhost:5000/deletestudent?id=${data?._id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {

                console.log(data);
                refetch();
            })
    }
   

    return (

        <>
            <div className='CustomizedTables-container'>

                <div className='table-header'>
                    <div className='table-header-col'>
                        <h5>Name</h5>
                    </div>
                    <div className='table-header-col'>
                        <h5>Class</h5>
                    </div>
                    <div className='table-header-col'>
                        <h5>Roll No.</h5>
                    </div>
                    <div className='table-header-col'>
                        <h5>View/Edit/Delete</h5>
                    </div>

                </div>



                {
                    student?.map((s, i) =>
                        <>
                            <div key={s?._id} className={(i % 2 === 0) ? "table-row1" : "table-row2"} >

                                <div className={(i % 2 === 0) ? "table-row1-col" : "table-row2-col"}>
                                    <h5>
                                        <span>{s.first_name} </span>
                                        <span> {s.middle_name} </span>
                                        <span> {s.last_name} </span>

                                    </h5>
                                </div>

                                <div className={(i % 2 === 0) ? "table-row1-col" : "table-row2-col"}>
                                    <h5>{s.Class}</h5>
                                </div>
                                <div className={(i % 2 === 0) ? "table-row1-col" : "table-row2-col"}>
                                    <h5>{s.Roll}</h5>
                                </div>
                                <div className={(i % 2 === 0) ? "table-row1-col" : "table-row2-col"}>
                                    <h5>
                                        <span  onClick={
                                           ()=>{
                                            setmodalData(s);
                                            handleOpen();

                                
                                           }
                                        } style={{ margin: '5px', cursor: 'pointer' }}> <VisibilityIcon /> </span>
                                        <span style={{ margin: '5px', cursor: 'pointer' }}><BorderColorIcon /></span>
                                        <span onClick={() => handleDelete(s)} style={{ margin: '5px', cursor: 'pointer' }}> <DeleteIcon /></span>
                                    </h5>
                                </div>

                            </div>


                            {/* <div >

                                <Modal
                                    open={open}
                                    onClose={handleClose}
                                    aria-labelledby="modal-modal-title"
                                    aria-describedby="modal-modal-description"
                                    sx={{
                                        border: '1px solid red',
                                        display: 'grid',
                                        placeItems: 'center'
                                    }}

                                >
                                    <Box className='modal-container'>
                                        <ViewStudent handleClose={handleClose} />
                                    </Box>
                                </Modal>
                            </div> */}

                        </>

                    )
                }







            </div>

            <div >

                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                    sx={{
                        border: '1px solid red',
                        display: 'grid',
                        placeItems: 'center'
                    }}

                >
                    <Box className='modal-container'>
                        <ViewStudent 
                        s={modalData} 
                        setmodalData={setmodalData}
                        handleClose={handleClose}
                         />
                    </Box>
                </Modal>
            </div>

        </>
    );
};

export default CustomizedTables;

























// import * as React from 'react';
// import { styled } from '@mui/material/styles';
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell, { tableCellClasses } from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';
// import Paper from '@mui/material/Paper';

// const StyledTableCell = styled(TableCell)(({ theme }) => ({
//   [`&.${tableCellClasses.head}`]: {
//     backgroundColor: theme.palette.common.black,
//     color: theme.palette.common.white,
//   },
//   [`&.${tableCellClasses.body}`]: {
//     fontSize: 14,
//   },
// }));

// const StyledTableRow = styled(TableRow)(({ theme }) => ({
//   '&:nth-of-type(odd)': {
//     backgroundColor: theme.palette.action.hover,
//   },
//   // hide last border
//   '&:last-child td, &:last-child th': {
//     border: 0,
//   },
// }));

// function createData(name, calories, fat, carbs, protein) {
//   return { name, calories, fat, carbs, protein };
// }

// const rows = [
//   createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
//   createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
//   createData('Eclair', 262, 16.0, 24, 6.0),
//   createData('Cupcake', 305, 3.7, 67, 4.3),
//   createData('Gingerbread', 356, 16.0, 49, 3.9),
// ];

// export default function CustomizedTables() {
//   return (
//     <TableContainer component={Paper}>
//       <Table sx={{border:'1px solid red' }} aria-label="customized table">


//         <TableHead>
//           <TableRow>
//             <StyledTableCell>Name</StyledTableCell>
//             <StyledTableCell >Class</StyledTableCell>
//             <StyledTableCell >Roll No.</StyledTableCell>
//             <StyledTableCell >View/Edit/Delete</StyledTableCell>
//             {/* <StyledTableCell align="right">Protein&nbsp;(g)</StyledTableCell> */}
//           </TableRow>
//         </TableHead>




//         <TableBody>
//           {rows.map((row) => (
//             <StyledTableRow key={row.name}>

//               <StyledTableCell component="th" scope="row">
//                 {row.name}
//               </StyledTableCell>

//               <StyledTableCell sx={{ height:'4px' }} >{row.calories}</StyledTableCell>
//               <StyledTableCell >{row.fat}</StyledTableCell>
//               <StyledTableCell >{row.carbs}</StyledTableCell>
//               {/* <StyledTableCell align="right">{row.protein}</StyledTableCell> */}
//             </StyledTableRow>
//           ))}
//         </TableBody>
//       </Table>
//     </TableContainer>
//   );
// }
