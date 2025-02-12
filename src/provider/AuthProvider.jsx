import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../firebase.config';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import axios from 'axios';

export const AuthContext = createContext(null)

const AuthProvider = ({children}) => {

    const [user , setUser]= useState('')
    const [loader , setLoader] = useState(true)
    const [userPhoto , setUserPhoto] = useState('')
    const [open, setOpen] = useState(false)

    // create user

    const createUser=(email, password)=>{
        setLoader(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    //update user

  
    const updateUser= (updateData)=>{
        setLoader(true)
      
        return(
            updateProfile(auth.currentUser, updateData)
        )
    }


    // sign in

    const signInUser = (email,password)=>{
        setLoader(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

   // google login
  
   

   //log out

   const signOutUser =()=>{
    setLoader(true)

    return signOut(auth)
   }


   //observer

   useEffect(()=>{

    const unSubscribe = onAuthStateChanged(auth,(user) =>{
        setLoader(false)
        setUser(user)
        setUserPhoto(user?.photoURL)
        if(user?.email){
          
          
             axios.post(`${import.meta.env.VITE_API_URL}/jwt` , {email : user?.email} ,{withCredentials : true})

            .then(data =>{
                console.log(data.data)
            })

            
        } 


    })

    return ()=>{
        unSubscribe()
    }

   },[])
    

    const userInfo = {open, setOpen,user,setUser,loader,setLoader ,userPhoto,setUserPhoto, createUser,updateUser, signInUser , signOutUser}
    return (
        <AuthContext.Provider value={userInfo}>

            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;