import { getAuth, updateProfile, signInWithPopup, GoogleAuthProvider, signInWithEmailAndPassword, createUserWithEmailAndPassword, onAuthStateChanged, signOut} from "firebase/auth";
import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import initializeAuthentication from "../Pages/Header/Firebase/firebase.init";

initializeAuthentication();
// hooks here all 
const useFirebase = ()=>{
    const history = useHistory();
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const [user,setUser]=useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [authError, setAuthError] = useState('');
    const [admin, setAdmin] = useState(false);


    // google sign in 
    const provider = new GoogleAuthProvider()
    const auth = getAuth();
 
    // const loginWithGoogle = () => {
    //     setIsLoading(true);
    //     // saveUser(user.email, user.displayName, 'PUT');
    //    return signInWithPopup(auth, provider);
     
    // }

    const signInWithGoogle = (location, history) => {
        setIsLoading(true);
        signInWithPopup(auth, provider)
            .then((result) => {
                const user = result.user;
                saveUser(user.email, user.displayName, 'PUT');
                setAuthError('');
                const destination = location?.state?.from || '/';
                history.replace(destination);
            }).catch((error) => {
                setAuthError(error.message);
            }).finally(() => setIsLoading(false));
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
            saveUser(email, name, 'POST');

            console.log(user)
            history.push('/')
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
          .then(result =>{
            history.push('/')
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

    useEffect(() => {
        fetch(`https://obscure-garden-07693.herokuapp.com/users/${user.email}`)
            .then(res => res.json())
            .then(data => setAdmin(data.admin))
    }, [user.email])

    // log out 

    const logOut = () => {
        setIsLoading(true);
        signOut(auth)
        .then(() => { });
    }

    const saveUser = (email, displayName, method) => {
        const user = { email, displayName };
        fetch('https://obscure-garden-07693.herokuapp.com/users', {
            method: method,
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then()
    }

    return{
        user,
        isLoading,
        logOut,
        handleEmailChange,
        handlePasswordChange,
        handleRegistration,
        error,
        handleSignIn,
        handleNameChange,
        signInWithEmailAndPassword,
        saveUser,
        signInWithGoogle,
        admin


        
    }
} 

export default useFirebase;