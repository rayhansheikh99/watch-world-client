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
import AllProduct from './Pages/AllProduct/AllProduct';
import Shipping from './Pages/Shipping/Shipping';
import MyOrders from './Pages/MyOrders/MyOrders';
import Review from './Pages/Review/Review';
import Payment from './Pages/MyOrders/Payment/Payment';
import PrivateRoute from './Pages/Header/Login/PrivateRoute/PrivateRoute';
import Dashboard from './Pages/Dashboard/Dashboard';
import AddProduct from './Pages/AddProduct/AddProduct';
import MakeAdmin from './Pages/MakeAdmin/MakeAdmin';
import ManageOrders from './Pages/ManageOrders/ManageOrders';
import ManageProducts from './Pages/ManageProducts/ManageProducts';


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
         <Route path='/products'>
            <AllProduct/>
         </Route>
         <Route path='/myorders'>
            <MyOrders/>
         </Route>
         <Route path='/review'>
            <Review/>
         </Route>
         <Route path='/payment'>
            <Payment/>
         </Route>
         <Route path='/dashboard'>
            <Dashboard/>
         </Route>
         <Route path='/addproduct'>
            <AddProduct/>
         </Route>
         <Route path='/makeadmin'>
            <MakeAdmin/>
         </Route>
         <Route path='/manageorders'>
            <ManageOrders/>
         </Route>
         <Route path='/manageproducts'>
            <ManageProducts/>
         </Route>
         <Route path='/login'>
            <Login/>
         </Route>
         <Route path='/signup'>
            <SignUp/>
         </Route>
         <PrivateRoute path='/shipping/:Id'>
            <Shipping/>
         </PrivateRoute>
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
