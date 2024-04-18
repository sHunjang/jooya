import React from "react";

import './TopNav.css';

export const TopNav = ({
    title,
}) => {
    return (
        <div className="top-nav-container" style={{ padding: '0.5rem' }}>
            <div className="top-nav-wrap">
                <div className="top-nav-item" style={{fontSize:'15px'}}>메뉴버튼</div>
                <div className="top-nav-item">{title}</div>
                <div className="top-nav-button" style={{ width: '20px', height: '20px' }}>
                    <a href="/">
                        <img src={process.env.PUBLIC_URL + './home.png'} style={{width:'20px'}} />
                    </a>
                </div>
            </div>
        </div>
    )
}