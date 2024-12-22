import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from "../../assets/img/wes-logo.png"
import './Nav.css'

const Navbar = () => {

    const links  = <>

    <NavLink className="text-black font-semibold text-[0.9rem]" to={'/'}>Home</NavLink>
    <NavLink className="text-black font-semibold text-[0.9rem]" to={'rooms'}>Rooms</NavLink>
    <NavLink className="text-black font-semibold text-[0.9rem]" to={'bookings'}>My Bookings</NavLink>
    
    </>
    return (
        <div className='sticky top-0 z-10'>
            <div className="navbar p-0 w-11/12 mx-auto flex justify-between">
                <div >
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>

                           {/* dropdown */}
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {links}
                        </ul>
                    </div>
                    <img className='w-[11rem] h-[7rem] ' src={logo} alt="" />
                </div>

                <div className=" hidden lg:flex">
                    <ul className="menu menu-horizontal flex gap-10 items-center ">
                       {links}
                    </ul>
                </div>
                <div className='flex gap-5' >
                   <Link className='btn-all '>Sign In</Link>
                   <Link className='btn-all '>Sign Up</Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;