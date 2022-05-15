import { useState } from "react";
import React from "react";
import Product from "./product";

function Products()  {
    const [products ,setProducts] = useState ([
        {id:1 , count : 34 , productName : 'Laptop'},
        {id:2 , count : 64 , productName : 'Mobile'},
        {id:3 , count : 17 , productName : 'Tablet'},
        {id:4 , count : 49 , productName : 'Accessory'}
    ])
    return (
        <>
            <span>Functional version.</span>
            <button onClick={handleReset} className='btn-red'>Reset All</button>
            {products.map((item,id) => (
                <Product 
                    onDelete={handleDelete} 
                    onIncrement={handleIncrement} 
                    onDecrement={handleDecrement} 
                    onReset={handleReset} 
                    id={item.id} 
                    key={id} 
                    productName={item.productName} 
                    count={item.count}>
                    <p>
                        here is some memo.
                    </p>
                </Product> 
            ))}
        </>
    );

    function handleDelete (productId){
        const newProducts = products.filter(p => p.id !== productId);
        setProducts(newProducts)
    }

    function handleIncrement(productId) {
        const newProducts = [...products];
        const index = newProducts.findIndex(p=> p.id === productId);
        newProducts[index].count += 1 ;
        setProducts(newProducts)
    }

    function handleDecrement(productId) {
        const newProducts = [...products];
        const index = newProducts.findIndex(p=> p.id === productId);
        newProducts[index].count -= 1 ;
        setProducts(newProducts)
    }

    function handleReset() {
        const newProducts = products.map(p => {
            p.count = 0;
            return p
        });
        setProducts(newProducts)
    }
}

export default Products;