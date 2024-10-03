import React from "react";
import { Link } from "react-router-dom";
import { useState,useEffect } from "react";

const ProductListing=()=>{

    const [products,setProducts]=useState([])

    useEffect(()=>{
      fetch("https://dummyjson.com/products").then(res=>res.json()).then((res)=>{
      setProducts(res.products);
      })
    },[])
return(
    <div>
        <h2>Product Listing</h2>
        <div className="product-grid">
            {
                products.map((product)=>{
                   return (
                    <div className="product-card" key={product.id}>
                        <Link to={`/products/${product.id}`}>
                        <img src={product.thumbnail} alt=""></img>
                        <h3>{product.title}</h3>
                        <h3>${product.price}</h3>
                        </Link>
                    </div>
                   ) 
                })
            }
            </div>
    </div>
)
}

export default ProductListing;