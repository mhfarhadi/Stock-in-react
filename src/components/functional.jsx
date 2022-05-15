import { useState } from 'react';
import './product.css'



const Functional = () => {
    const [count,setCount] = useState(0);
    const [productName, setProductName] = useState('laptop')
    return (
        <>
            <span >We have {format()} {productName} inStock. </span>
            <button className='btn-green' onClick={increment}>+</button>
            <button className='btn-yellow' onClick={decrement}>-</button>
            <button className='btn-red' onClick={deletex}>Delete</button>
        </>
    );


    function increment() {
        setCount (count + 1)
    }


    function decrement() {
        setCount (count - 1)
    }


    function deletex () {
        setCount (0)
    }



    function format () {
        if (count ===0 ) {
            
            return 'no'
            
        } else {
            return count 
        }
    }
}
 
export default Functional;