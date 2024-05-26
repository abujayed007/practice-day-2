/* eslint-disable react/prop-types */
import {  createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";

export const AuthContext = createContext(null)
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading]=useState(true)
   
    const createUser = (email, password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const logIn = (email, password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email, password)
    }

    const googleLogin =(provider)=>{
        setLoading(true)
        return signInWithPopup(auth, provider)
    }
    
    const logOut = ()=>{
        // setLoading(true)
        return signOut(auth).then(()=>setUser(null))
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (currentUser) =>{
            if(currentUser){
                setUser(currentUser)
                setLoading(false)
            console.log(currentUser);
            }else{
                setLoading(false)
            }
           
        })
        return unsubscribe
    },[])
    const userInfo = {
        user,
        logIn,
        createUser,
        loading,
        googleLogin,
        logOut
    }
    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;