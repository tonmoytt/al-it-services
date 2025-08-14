import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import auth from '../Firebase.init';
import { GoogleAuthProvider } from 'firebase/auth/web-extension';


export const Authmainprovider = createContext(null)
const google = new GoogleAuthProvider()
const Authincation = ({ children }) => {

    const [user, setUser] = useState(null);

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth,email, password)
    }

    const signInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const googleAuth = () => {
        signInWithPopup(auth, google)
    }

    const SingOutLog = () => {
        return signOut(auth)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            console.log('current user', currentUser);
            setUser(currentUser);
        });
        return unsubscribe()
    }, [])




    const authInfo = {
        user,
        createUser,
        signInUser,
        SingOutLog,
        googleAuth
    }
    return (
        <div>
            <Authmainprovider.Provider value={authInfo}>
                {children}
            </Authmainprovider.Provider>
        </div>
    );
};

export default Authincation;