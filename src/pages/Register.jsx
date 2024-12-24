import React, { useContext, useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import google from "../assets/img/google.webp"
import { Link } from 'react-router-dom';
import { Bounce } from 'react-awesome-reveal';
import { SiSimplelogin } from "react-icons/si";
import { AuthContext } from '../provider/AuthProvider';

const Register = () => {

    const [show, setShow] = useState(false)
        const [error , setError] =useState("")

        const {user , createUser,updateUser,setUser,setUserPhoto} = useContext(AuthContext)

        console.log(user)


        // register

        const handleSubmit = e =>{

            e.preventDefault();

            const form = e.target;

            const name = form.name.value;

            const email = form.email.value;

            const photo = form.photo.value;

            const password = form.password.value;

            createUser(email,password)
            .then((userCredential) => {
                updateUser({
                    displayName: name, photoURL: photo
                  })
                  .then(() => {
                    setUserPhoto(userCredential.user?.photoURL)
                  }).catch((error) => {
                    console.log(error)
                  });
    
                  
                  setUser(userCredential.user)
                  
                 
               
              })
              .catch((error) => {
                
                const errorMessage = error.message;
                 setError(errorMessage)
              });
    



        }






    return (
        <div className='mb-[5rem]'>
        {/* tittle */}
       
       <div className='flex items-center gap-4 justify-center mb-[2rem] mt-[5rem]'>

           <h2 className='play text-[2.5rem] font-bold text-gray-600'>Sign Up</h2>
           <Bounce triggerOnce={false} duration={1600} delay={0}> <SiSimplelogin className='text-[3.1rem] text-[#C4A484]'></SiSimplelogin>
                         </Bounce>
           

       </div>


     <div className='w-[85%] md:w-[50%] lg:w-[40%] mx-auto '>
     <div className='bg-base-200 rounded-lg p-8 my-6 '>
               <form onSubmit={handleSubmit}>
               <label className="label font-semibold">
                       <span className="label-text">Name</span>
                   </label>
                   <input type="text" name='name' placeholder="name" className="input w-full input-bordered " required />
                   <label className="label font-semibold">
                       <span className="label-text">Email</span>
                   </label>
                   <input type="email" name='email' placeholder="email" className="input w-full input-bordered " required />
                   <label className="label font-semibold">
                       <span className="label-text">Photo URL</span>
                   </label>
                   <input type="text" name='photo' placeholder="photo url" className="input w-full input-bordered " required />
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
                  
                   <div className='flex justify-center'>
                       <input className=' w-full py-3 font-semibold text-[1.1rem] btn-all text-white mt-5' type="submit" value="Sign Up" />
                   </div>
               </form>

               <p className='mt-3'>Already have an account? <Link className='text-[1rem] font-semibold text-[#C4A484] underline' to={'/login'}>Sign In</Link></p>
           </div>

          
     </div>
   </div>
    );
};

export default Register;