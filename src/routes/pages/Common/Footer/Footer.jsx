import React from "react";

import { default as MainImg } from '../../../../img/jooyajooya.png'

import './Footer.css';

export const Footer = () => {
    return (
        <div className="footer-container">
            <div className="footer-wrap">
                <div className="footer-img">
                    <img src={MainImg} />
                    <span className="footer-btn">
                        <span>사업자 정보</span>
                    </span>
                </div>
            </div>
        </div>
    )
}