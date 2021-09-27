import React from 'react';
import {Link} from 'react-router-dom'
function Navbar(){
    return (
        <>
        <div style={{display:'flex',justifyContent:'space-around'}}>
            <Link to='/'>Home</Link>
            <Link to='/about'>About</Link>
            <Link to="/books">Books</Link>
        </div>
        </>    )
}
export {Navbar};