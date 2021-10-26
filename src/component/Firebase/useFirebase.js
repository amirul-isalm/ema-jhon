import { useEffect, useState } from "react";
import FirebaseIntIalize from "./Firebase.inti";
import {
  getAuth,
  signOut,
  onAuthStateChanged,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useHistory, useLocation } from "react-router";

const useFirebase = () => {
  FirebaseIntIalize();
  const [user, setUser] = useState({});
  const [error, setError] = useState("");
  const [isLoading,setIsLoading]=useState(true)
  const googleprovider = new GoogleAuthProvider();
  const auth = getAuth();

  const handelGooglesignIn = () => {
    setIsLoading(true)
    return signInWithPopup(auth, googleprovider);
  };
  const logOut = () => {
    signOut(auth).then(() => {
      setUser({});
    });
  };

  const RegistresionByemailPassword = (email, password,name) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        setIsLoading(true)
        setUser(result.user);
        updateUserData(name)
       
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => {
      
    })
    
  };
  const updateUserData = (name) => {
    updateProfile(auth.currentUser, { displayName:  name ,}).then(() => {});
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        setIsLoading(false);
      }
    });
  }, []);

  const logIn = (email,password) => {
   return signInWithEmailAndPassword(auth, email, password)
    
    
}

  return {
    handelGooglesignIn,
    logOut,
    user,
    error,
    RegistresionByemailPassword,
    setError,
    updateUserData,
    logIn,
    isLoading
  };
};
export default useFirebase;
