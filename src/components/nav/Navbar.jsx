import React, { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from "../../assets/img/wes-logo.png"
import './Nav.css'
import { RxCross2 } from 'react-icons/rx';
import { IoMenuSharp } from 'react-icons/io5';
import { AuthContext } from '../../provider/AuthProvider';
import UserLoding from '../UserLoding';


const Navbar = () => {


    const { user, loader, signOutUser, userPhoto, open, setOpen } = useContext(AuthContext)
    console.log(user)

    const links = <>

        <NavLink className="text-black hover:text-[#C4A484] font-semibold text-[0.9rem]" to={'/'}>Home</NavLink>
        <NavLink className="text-black hover:text-[#C4A484] font-semibold text-[0.9rem]" to={'rooms'}>Rooms</NavLink>
       {user &&  <NavLink className="text-black hover:text-[#C4A484] font-semibold text-[0.9rem]" to={'bookings'}>My Bookings</NavLink>}

    </>


    return (
        <div className='sticky top-0 z-10 shadow-xl bg-[#f5ebe251] backdrop-blur-md'>
            <div className="navbar p-0 w-[85%] mx-auto flex justify-between">
                <div >
                    <div className={`bg-[#f1ebebf2] backdrop-blur-lg p-4 lg:hidden absolute   duration-[600ms]  pt-4 pl-7 w-48 top-[7rem] h-screen ${open ? "  left-0" : "left-[-13rem]"}`}>

                        <ul className='text-[1.2rem]  md:text-[0.9rem] flex flex-col items-center gap-6  '>
                           <div>
                           <NavLink className="text-black hover:text-[#C4A484] font-semibold text-[1.2rem]  md:text-[0.9rem]" to={'/'}>Home</NavLink>
                           </div>
                            <div>
                            <NavLink className="text-black hover:text-[#C4A484] font-semibold text-[1.2rem]  md:text-[0.9rem]" to={'rooms'}>Rooms</NavLink>
                            </div>
                           {user && <div>
                           <NavLink className="text-black hover:text-[#C4A484] font-semibold text-[1.2rem]  md:text-[0.9rem]" to={'bookings'}>My Bookings</NavLink>
                           </div>}

                        </ul>


                    </div>
                    <div className={`text-[1.2rem] lg:hidden mr-3`} onClick={() => { setOpen(!open) }}>
                        {
                            open ? <RxCross2 className='text-[1.8rem] font-bold'></RxCross2> : <IoMenuSharp className='text-[1.8rem]  font-semibold' ></IoMenuSharp>
                        }

                    </div>
                    <img className='w-[9rem] md:w-[10rem] h-[7rem] ' src={logo} alt="" />
                </div>

                <div className=" hidden lg:flex">
                    <ul className="menu menu-horizontal flex gap-10 items-center ">
                        {links}
                    </ul>
                </div>

                <UserLoding></UserLoding>



            </div>
        </div>
    );
};

export default Navbar;