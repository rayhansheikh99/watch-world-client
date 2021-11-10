import { getAuth, updateProfile, signInWithPopup, GoogleAuthProvider, signInWithEmailAndPassword, createUserWithEmailAndPassword, onAuthStateChanged, signOut} from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Pages/Header/Firebase/firebase.init";

initializeAuthentication();
// hooks here all 
const useFirebase = ()=>{
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const [user,setUser]=useState({});
    const [isLoading, setIsLoading] = useState(true);


    // google sign in 
    const provider = new GoogleAuthProvider()
    const auth = getAuth();
 
    
   

    const loginWithGoogle = () => {
        setIsLoading(true);
       return signInWithPopup(auth, provider);
              
            

    }

    // email password sign in 


    const handleNameChange = e =>{
        setName(e.target.value);
    }
    const handleEmailChange = e =>{
        setEmail(e.target.value);
    }
    const handlePasswordChange = e =>{
        setPassword(e.target.value);
    }
  
    const handleRegistration = e => {
        e.preventDefault();
        if(password.length<6){
            setError('must be 6 character')
            return;
        }
        
        createUserWithEmailAndPassword(auth,email,password)
        .then(result=>{
            const user = result.user;
            console.log(user)
            setError('')
            window.location.reload()
            setUserName();
        })
        .catch((error) => setError(error.message));
    }

    const setUserName = () => {
        updateProfile(auth.currentUser,{displayName: name})
        .then(result =>{})
    }

    const handleSignIn = (e) =>{
        setIsLoading(true);
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
        .then((result) => {
            const user = result.user;
            console.log(user)
          })
          .catch((error) => {
            setError(error.code);
            setError(error.message);
          });

    }

    useEffect(()=>{
        const unsubscribed = onAuthStateChanged(auth, user => {
            if(user) {
                setUser(user);
            }
            else{
                setUser({})
            }
            setIsLoading(false);
        });
        return ()=> unsubscribed;
    },[])

    // log out 

    const logOut = () => {
        setIsLoading(true);
        signOut(auth)
        .then(() => { });
    }

    return{
        user,
        loginWithGoogle,
        isLoading,
        logOut,
        handleEmailChange,
        handlePasswordChange,
        handleRegistration,
        error,
        handleSignIn,
        handleNameChange


        
    }
} 

export default useFirebase;