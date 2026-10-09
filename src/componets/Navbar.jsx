import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar(props) {

    return (
        <>
            <div className="navbar">

                <div className="logo">
                    ZARA
                </div>

                <div className="icons">
                    <ul className="list">
                        <li><Link to="/">HOME</Link></li>
                        <li><Link to="/product">PRODUCTS</Link></li>
                        <li><Link to="/about">ABOUT US</Link></li>
                        <li><Link to="/contact">CONTACT US</Link></li>
                    </ul>
                </div>

                <div className="search-bar">
                    <input
                        type="text"
                        placeholder="Search here"
                        value={props.search}
                        onChange={(e)=>{
                            props.setsearch(e.target.value)
                        }}
                    />
                </div>

            </div>
        </>
    )
}