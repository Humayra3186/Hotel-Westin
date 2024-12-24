import React, { useContext, useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import google from "../assets/img/google.webp"
import { Link } from 'react-router-dom';
import { PiSignInBold } from "react-icons/pi";
import { Bounce } from 'react-awesome-reveal';
import { AuthContext } from '../provider/AuthProvider';
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from '../firebase.config';

const Login = () => {
    const provider = new GoogleAuthProvider();
    const [show, setShow] = useState(false)
    const [error, setError] = useState("")
    const { signInUser,  setUserPhoto, setUser, loader } = useContext(AuthContext)


    const handleSubmit = e => {

        e.preventDefault()

        const form = e.target
        const email = form.email.value;
        const password = form.password.value;
        signInUser(email, password)
            .then((userCredential) => {

                const user = userCredential.user;
                setUser(user)
                setUserPhoto(user.photoURL)

            })
            .catch((error) => {

                const errorMessage = error.message;
                setError(errorMessage)
            });



    }


    
       

    //google login

     const handleGoogle = ()=>{
      

        signInWithPopup(auth, provider)
        .then(result =>{
            setUser(result.user)
            setUserPhoto(result.user.photoURL)
        })
        .catch((error) => {
           
            const errorMessage = error.message;
            setError(errorMessage)
          })
     }


    return (
        <div>
            {/* tittle */}

            <div className='flex items-center gap-4 justify-center mb-[2rem] mt-[5rem]'>

                <h2 className='play text-[2.5rem] font-bold text-gray-600'>Sign In</h2>
                <Bounce triggerOnce={false} duration={1600} delay={0}> <PiSignInBold className='text-[3.1rem] text-[#C4A484]'></PiSignInBold>
                </Bounce>


            </div>


            <div className='w-[85%] md:w-[50%] lg:w-[40%] mx-auto '>
                <div className='bg-base-200 rounded-lg p-8 my-6 '>
                    <form onSubmit={handleSubmit}>
                        <label className="label font-semibold">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name='email' placeholder="email" className="input w-full input-bordered " required />
                        <label className="label font-semibold">
                            <span className="label-text">Password</span>
                        </label>
                        <div className='relative'>
                            <input name='password' type={show ? "text" : "password"} placeholder="password" className='input input-bordered w-full' required />
                            <div onClick={() => { setShow(!show) }} className='pr-2 absolute right-4 top-4 cursor-pointer'>
                                {
                                    show ? <FaEye></FaEye> : <FaEyeSlash></FaEyeSlash>
                                }
                            </div>
                        </div>

                        {/* error message */}
                        <div className='text-[0.8rem] text-red-600'>
                            {error}
                        </div>
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                        <div className='flex justify-center'>
                            <input className=' w-full py-3 font-semibold text-[1.1rem] btn-all text-white mt-5' type="submit" value="Sign In" />
                        </div>
                    </form>

                    <p className='mt-3'>Didn't have any account? <Link className='text-[1rem] font-semibold text-[#C4A484] underline' to={'/register'}>Sign Up</Link></p>
                </div>

                <div className="divider">OR</div>

                {/* google */}

                <button onClick={handleGoogle} className='flex justify-center items-center gap-1 bg-base-200  rounded-lg p-2 border w-full mb-[5rem]'>
                    <img className='w-[3rem]' src={google} alt="" />
                    <p>Login with Google</p>
                </button>
            </div>
        </div>
    );
};

export default Login;