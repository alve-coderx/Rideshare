import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { sendEmailVerification, sendPasswordResetEmail, createUserWithEmailAndPassword, FacebookAuthProvider, signOut, onAuthStateChanged, getAuth, signInWithPopup, GoogleAuthProvider, signInWithEmailAndPassword, getIdToken } from 'firebase/auth';
import initializeAuth from '../Firebase/firebase.init';
import { useEffect } from 'react';

initializeAuth();

const useSupplier = () => {
  const [text, setText] = useState(null);
  const navigate = useNavigate();
  const [user, setUser] = useState({});
  const [error, setError] = useState('')
  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();
  const fbProvider = new FacebookAuthProvider();
  // google auth
  const signInWithGoogle = () => {
    signInWithPopup(auth, googleProvider)
      .then((res) => {
        navigate('/startsite/search')
        const { displayName, photoUrl, email } = res.user;
        const loggerInUser = {
          name: displayName,
          email: email,
          photo: photoUrl
        }
        setUser(loggerInUser)
      })
      .catch(error => {
        setError(error.message);
      })
  }
  // facebook auth
  const signInWithFb = () => {
    signInWithPopup(auth, fbProvider)
      .then((res) => {
        navigate('/startsite/search')
      })
      .catch(error => {
        setError(error.message);
      })
  }

  // register auth 
  const registerUser = (email, password, firstname, lastname, companyname) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        navigate('/startsite/search')
        const { photoUrl, email } = userCredential.user;
        const loggerInUser = {
          name: firstname + '' + lastname,
          email: email,
          photo: photoUrl,
          companyname: companyname
        };
        setUser(loggerInUser);
        emailVerification();
      })
      .catch(error => {
        setError(error.message);
      })
  };

  // verify email
  const emailVerification = () => {
    sendEmailVerification(auth.currentUser)
      .then((res) => {
        console.log(res);
      })
  }

  // login auth
  const loginUser = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        navigate('/startsite/search')
      })
      .catch(error => {
        setError(error.message);
      })
  };

  // forget password
  const handleForgetPass = (email) => {
    sendPasswordResetEmail(auth, email)
  };
  // send msg
  const handleMessage = (msg) => {
    console.log(msg);
    setText(msg);
    navigate('/user/1/inbox');
  }
  // signout
  const logout = () => {
    signOut(auth).then(() => {
      navigate('/login')
    })
      .catch(error => {
        setError(error.message);
      })
  }
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, user => {
      if (user) {
        getIdToken(user)
          .then((idToken) => localStorage.setItem('idToken', idToken))
        setUser(user);
      } else {
        setUser({})
      }
    })
    return () => unsubscribe;
  }, [])
  return {
    text,
    handleMessage,
    signInWithGoogle,
    user,
    error,
    logout,
    signInWithFb,
    registerUser,
    loginUser,
    handleForgetPass
  }
}

export default useSupplier;