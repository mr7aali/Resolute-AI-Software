import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Page/Shared/Header/Header';
import SideNaveBar from '../Page/Shared/SideNaveBar/SideNaveBar';
import './Main.css'
const Main = () => {
    return (
        <div>
            <Header />

            <div className='sidenaver-outlet-container'>
                <SideNaveBar />
                <Outlet />

            </div>
        </div>
    );
};

export default Main;