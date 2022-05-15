import { useState } from 'react';
import '../product.css';
import React from 'react';



const Product = ({productName, count , children , onDelete, onIncrement , onDecrement , id }) => {
    
    
    return (
        <div className='subDiv'>
            <span >We have {format()} {productName} inStock. </span>
            <button className='btn-green' onClick={increment}>+</button>
            <button className='btn-yellow' onClick={decrement}>-</button>
            <button className='btn-red' onClick={deletex}>Delete</button>
            {children}
        </div>
    );


    function increment() {
        onIncrement (id)
    }


    function decrement() {
        onDecrement (id)
    }


    function deletex () {
        onDelete (id)
    }

    



    function format () {
        if (count ===0 ) {
            
            return 'no'
            
        } else {
            return count 
        }
    }
}
 
export default Product;