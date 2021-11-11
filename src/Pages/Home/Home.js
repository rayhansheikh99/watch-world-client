import React, { useEffect, useState } from 'react';
import AllReview from '../AllReview/AllReview';
import Slider from '../Header/Slider/Slider';
import Products from '../Products.js/Products';
import './home.css';

const Home = () => {

    const [products, setProducts]=useState([])
    // data fetch 
    useEffect(()=>{
        fetch('https://obscure-garden-07693.herokuapp.com/products')
        .then(res=>res.json())
        .then(data=> setProducts(data.slice(0,6)))

    },[])

    return (
        <div>
            <Slider/>
            <div className='mt-5 card-design1'>
            <div><h2>Our Products</h2></div>
            <div className="row row-cols-1 row-cols-md-3 g-4 pb-3 mt-3">
            
            {
              products.map(product=> <Products key={product._id} product={product}/>)
            }
        </div>
        </div>
            <AllReview/>
        </div>

    
    );
};

export default Home;