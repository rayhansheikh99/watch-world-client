import React, { useEffect, useState } from 'react';
import Products from '../Products.js/Products';
import './allproduct.css'

const AllProduct = () => {
    const [products, setProducts]=useState([])
    // data fetch 
    useEffect(()=>{
        fetch('https://obscure-garden-07693.herokuapp.com/products')
        .then(res=>res.json())
        .then(data=> setProducts(data))

    },[])

    return (
        <div className='product-page'>
           <div className='mt-5 card-design1'>
            <div><h4>OUR PRODUCTS</h4></div>
            <div className="row row-cols-1 row-cols-md-3 g-4 pb-3 mt-3">
            
            {
              products.map(product=> <Products key={product._id} product={product}/>)
            }
        </div>
        </div>
            
        </div>
    );
};

export default AllProduct;