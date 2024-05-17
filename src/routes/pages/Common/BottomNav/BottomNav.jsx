import React from "react";

import { default as Dog } from '../../../../img/dog.png'

import './BottomNav.css';

export const BottomNav = ({

    myMenuClick,
    homeClick,

}) => {
    return (
        <div className="bottom-nav-container">
            <div className="bottom-nav-wrap">
                    <div className="nav-category">
                        <img src={Dog} />
                        <span>메뉴</span>
                    </div>

                    <div className="nav-category" onClick={homeClick}>
                        <img src={Dog} />
                        <span>홈</span>
                    </div>

                    <div className="nav-category">
                        <img src={Dog} />
                        <span>즐겨찾기</span>
                    </div>
                
                    <div className="nav-category" onClick={myMenuClick}>
                        <img src={Dog} />
                        <span>마이메뉴</span>
                    </div>
                
                    <div className="nav-category">
                        <img src={Dog} />
                        <span>충전하기</span>
                    </div>
                
            </div>
        </div>
    )
}