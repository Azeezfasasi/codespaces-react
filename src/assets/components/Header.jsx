import React from 'react';
// import sensebg from '../images/sensebg.png';
import '../css/Header.css';


function Header() {
    return (
        <>
        <div className="header-wrapper">
            <div className="logo-section">
                <div className="logo-image">
                    {/* <img src={sensebg} alt="logo" /> */}
                </div>
                <div className="logo-name">
                    <h2>App Directory</h2>
                </div>
            </div>
            <div className="account-section">
                <div className="account-name">
                    <h3>Azeez Fasasi</h3>
                </div>
                <div className="account-bar">|</div>
                <button href="#" className="account-session">
                    <h3>Logout <i className='fa-solid fa-right-from-bracket'></i></h3>
                </button>
            </div>
        </div>
        </>
    )
}

export default Header;