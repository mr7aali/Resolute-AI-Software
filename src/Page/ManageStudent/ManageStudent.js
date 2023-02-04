import React from 'react';
import CustomizedTables from '../CustomizedTables/CustomizedTables';
import './ManageStudent.css'
import './ManageStudent.css'
const ManageStudent = () => {
    return (
        <div className='manageStudent-container'>
            <div className='add-student-header'>
                <h5>Manage Student</h5>
                <h4>2 Feb 2023</h4>

            </div>

            <div style={{
                background: "#FFFCFB",
                boxShadow: "0px 0px 3px rgba(0, 0, 0, 0.2)",
                borderRadius: "5px",

            }}>
                <div>
                    <CustomizedTables />
                </div>
            </div>
        </div>
    );
};

export default ManageStudent;