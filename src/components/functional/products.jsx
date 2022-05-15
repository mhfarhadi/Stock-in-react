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
            {products.map((item,id) => (
                <Product onDelete={handleDelete} id={item.id} key={id} productName={item.productName} count={item.count}>
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
}

export default Products;