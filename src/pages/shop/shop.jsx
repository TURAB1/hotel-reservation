import React from 'react'
import { PRODUCTS } from "../../products";
import { Product } from "./product";
import "./shop.css"

export const Shop = () => {
    return (
      <div className="shop">
        <div className="shopTitle">
          <h1>Stayrack take home products</h1>
        </div>
  
        <div className="products">
          {PRODUCTS.map((product) => (
            // create a prop
            <Product data={product} />
          ))}
        </div>
        
      </div>
    );
  };