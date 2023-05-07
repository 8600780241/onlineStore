

import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { useContext } from 'react';
import { CartContext } from './Context';
export default function Main({ i }) {
    const { cart, addCartData } = useContext(CartContext)
    return (
        <>
            <div className='main-container' >
                <div className='main'>
                    <div className='gamename'>
                        <img src={i?.Image} alt="game" width="350px" height="350px" />
                    </div>
                    <div className='gamename'>
                        <h1 >{i.Title}</h1>
                        <div>
                            <Link to="/cart">
                                <button style={{ backgroundColor: "red", color: "black", height: "30px", width: "90px" }} onClick={() => { addCartData(i) }}><b style={{ backgroundColor: "red" }}>Add to cart</b></button>
                            </Link>
                            <p>Rs<b>{i.price}</b> INR</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div>
                        <h4 style={{ color: "#ff4d4d" }}>{i.Description}</h4>
                    </div>
                    <div>
                        <h4 style={{ color: '#660066' }}>{i.Reviews}</h4>
                    </div>
                </div>
            </div>
        </>
    )
}