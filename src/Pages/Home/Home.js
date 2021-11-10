// import React, { useEffect, useState } from 'react';
import Slider from '../Header/Slider/Slider';
import './home.css';

const Home = () => {

    // const [services, setServices]=useState([])
    // // data fetch 
    // useEffect(()=>{
    //     fetch('https://shocking-werewolf-98267.herokuapp.com/services')
    //     .then(res=>res.json())
    //     .then(data=> setServices(data.slice(0,6)))

    // },[])

    return (
        <div>
            <Slider/>
    
        </div>

    
    );
};

export default Home;