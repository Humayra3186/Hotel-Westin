import React, { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { Link } from 'react-router-dom';

const UserLoding = () => {
     const { user, loader, signOutUser, userPhoto } = useContext(AuthContext)
    if (loader) {
        return (
            <div className='flex justify-center'> <span className="loading text-black loading-dots loading-lg"></span></div>
        )
    }
    return (
        <div>
             {
                    user ? <div className='flex gap-5' >

                        <img referrerPolicy='no-referrer' className='w-[3.4rem] h-[3.4rem] rounded-full border p-1' src={userPhoto} alt="" />

                        <button onClick={() => { signOutUser() }} className='btn-all px-4 py-2  font-semibold h-[2.9rem]'>
                            Sign Out
                        </button>

                    </div> : <div className='flex gap-3 md:gap-5' >

                        <Link to={"login"} className='btn-all px-6 py-2 font-semibold '>Sign In</Link>
                        <Link to={"register"} className='btn-all px-4 py-2  font-semibold'>Sign Up</Link>
                    </div>
                }

        </div>
    );
};

export default UserLoding;