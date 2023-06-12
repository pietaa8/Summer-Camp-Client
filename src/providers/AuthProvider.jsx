import { useEffect, useState } from "react";
import { createContext } from "react";
import {getAuth, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, updateProfile, GoogleAuthProvider, signInWithPopup} from "firebase/auth";
import { app } from "../firebase/firebase.config";
import axios from "axios";


export const AuthContext=createContext(null);

const auth=getAuth(app)

const AuthProvider = ({children}) => {

    const [user,setUser]=useState(null);
    const [loading,setLoading]=useState(true);

     const googleProvider=new GoogleAuthProvider();

    const createUser=(email,password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password);
    }
     const signIn=(email,password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password);
     }

     const googleSignIn=()=>{
        setLoading(true);
        return signInWithPopup(auth,googleProvider);
     }
     const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }
      
    const updateUserProfile=(name,photo)=>{
       return updateProfile(auth.currentUser,{
            displayName: name,photoURL: photo
        });
    }

    useEffect(()=>{
        const unsubscribe= onAuthStateChanged(auth,currentUser=>{
             setUser(currentUser);
             console.log('current user', currentUser)

            if(currentUser){
                 //get and set token
             axios.post('https://assignment-twelve-server-eight.vercel.app/jwt',{
                email: currentUser.email
             })
             .then(data=>{
               // console.log(data.data.token);
                localStorage.setItem('access-token', data.data.token)
                setLoading(false);
             })
            }
            else{
                localStorage.removeItem('access-token')
            }
         });
         return()=>{
             return unsubscribe();
         }
     },[])

    const authInfo={
        user,
        loading,
        createUser,
        signIn,
        logOut,
        updateUserProfile,
        googleSignIn

    }
    return (
        <AuthContext.Provider value={authInfo}>
        {children}
        </AuthContext.Provider>
            

    );
};

export default AuthProvider;