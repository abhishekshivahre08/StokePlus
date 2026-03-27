import React from 'react'
import Brokerage from './Brokerage';
import Hero from './hero';
import  OpenAccount from "../../Componets/OpenAccount";

function PricingPage() {
    return ( 
        <>
        <Hero/>
        < OpenAccount/>
        <Brokerage/>
        </>
     );
}

export default PricingPage;