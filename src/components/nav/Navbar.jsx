import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from "../../assets/img/wes-logo.png"
import './Nav.css'
import { RxCross2 } from 'react-icons/rx';
import { IoMenuSharp } from 'react-icons/io5';

const Navbar = () => {
    const [open, setOpen] = useState(false)

    const links = <>

        <NavLink className="text-black font-semibold text-[0.9rem]" to={'/'}>Home</NavLink>
        <NavLink className="text-black font-semibold text-[0.9rem]" to={'rooms'}>Rooms</NavLink>
        <NavLink className="text-black font-semibold text-[0.9rem]" to={'bookings'}>My Bookings</NavLink>

    </>
    return (
        <div className='sticky top-0 z-10 shadow-xl bg-[#f5ebe251] backdrop-blur-sm'>
            <div className="navbar p-0 w-[85%] mx-auto flex justify-between">
                <div >
                    <div className={`bg-[#040303a8] p-4 lg:hidden absolute   duration-[600ms]  pt-4 pl-7 w-48 top-[6rem] h-screen ${open ? "  left-0" : "left-[-13rem]"}`}>

                        <ul className=' text-slate-200 text-[0.8rem] lg:text-base gap-6 lg:gap-12 '>
                           {links}

                        </ul>


                    </div>
                    <div className={`text-[1.2rem] lg:hidden`} onClick={() => { setOpen(!open) }}>
                        {
                            open ? <RxCross2 className='text-[1.5rem] text-white font-semibold'></RxCross2> : <IoMenuSharp className='text-[1.5rem] text-white font-semibold' ></IoMenuSharp>
                        }

                    </div>
                    <img className='w-[10rem] h-[7rem] ' src={logo} alt="" />
                </div>

                <div className=" hidden lg:flex">
                    <ul className="menu menu-horizontal flex gap-10 items-center ">
                        {links}
                    </ul>
                </div>
                <div className='flex gap-5' >
                    <Link className='btn-all px-6 py-2 font-semibold '>Sign In</Link>
                    <Link className='btn-all px-4 py-2  font-semibold'>Sign Up</Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;