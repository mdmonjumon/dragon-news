import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebase.config";


export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true) 


    const signUpInWithEmail = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const signInWithEmail = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password);
    }

    const handleSignOut = () =>{
        signOut(auth)
    }


    const updateUserProfile = (updatedData) =>{
        return updateProfile(auth.currentUser, updatedData);
    }


    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser=>{
            setUser(currentUser);
            setLoading(false);
        })

        return ()=> unsubscribe();
    },[])





    const authInfo = {
        user,
        setUser,
        signUpInWithEmail,
        signInWithEmail,
        handleSignOut,
        loading,
        updateUserProfile

    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;