import React, { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { Navigate } from 'react-router-dom';

const Privet = ({children}) => {
    const {user,loader} = useContext(AuthContext)
   
      

        if(loader){
            return (
                <div className='min-h-screen flex justify-center items-center'><span className="loading loading-spinner loading-lg"></span></div>
            )
        }
           if(!user ){
            return(
                <Navigate to={'/login'}></Navigate>
                
            )
           }
           return (
           children
           )
            ;
         
    
};

export default Privet;