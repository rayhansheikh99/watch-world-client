import './App.css';
import Home from './Pages/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Footer from './Pages/Footer/Footer';
import Menu from './Pages/Header/Menu/Menu';
import Error from './Pages/Error/Error';
import Login from './Pages/Header/Login/Login';
import SignUp from './Pages/Header/SignUp/SignUp';
import AuthProvider from './Contexts/AuthProvider';
import About from './Pages/About/About';
import Contact from './Pages/Contact/Contact';
// import PrivateRoute from './Pages/Header/Login/PrivateRoute/PrivateRoute';


function App() {
  return (
    <div className="App">
     <AuthProvider>
     <Router>
     <Menu/>
       <Switch>
         <Route exact path='/'>
            <Home/>
         </Route>
         <Route path='/home'>
            <Home/>
         </Route>
         <Route path='/login'>
            <Login/>
         </Route>
         <Route path='/signup'>
            <SignUp/>
         </Route>
         <Route path='/about'>
            <About/>
         </Route>
         <Route path='/contact'>
            <Contact/>
         </Route>
         <Route path='*'>
            <Error/>
         </Route>
       </Switch>
       <Footer/>
     </Router>
     </AuthProvider>
    </div>
  );
}

export default App;
