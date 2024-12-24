import React, { useContext } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/nav/Navbar'
import Footer from '../components/Footer';
import { AuthContext } from '../provider/AuthProvider';

const MainPage = () => {

    const{ setOpen} = useContext(AuthContext)
    const handleMenu =()=>{
        setOpen(false)
    }
    return (
       <>
       <div  className='relative'>
       <Navbar></Navbar>
       <div onClick={handleMenu}>
       <Outlet></Outlet>
       </div>
      
       <Footer></Footer>
       </div>
      
       </>
    );
};

export default MainPage;