import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../sheared/Header';
import Footer from '../sheared/Footer';

const MainLayout = () => {
    return (
        <div className='max-w-7xl mx-auto'>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
            
        </div>
    );
};

export default MainLayout;