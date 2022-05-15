import React, { Component } from 'react';

import SubProduct from './subProduct';



class MainProduct extends Component {
    state = {  } 
    render() { 
        return (
            <div>
                <SubProduct productName='Laptop'/>
                <SubProduct productName='Mobile'/>
                <SubProduct productName='Tablet'/>
                <SubProduct productName='XBox'/>
            </div>
        );
    }
}
 
export default MainProduct;