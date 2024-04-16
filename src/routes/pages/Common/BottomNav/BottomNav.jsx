import React from "react";
import { default as Dog } from '../../../../img/dog.png'
import './BottomNav.css';

export const BottomNav = () => {
    return (
        <div className="bottom-nav-container">
            <div className="bottom-nav-wrap">
                <a className="bottom-nav-tap 0" href="/">
                    <div className="nav-category">
                        <img src={Dog} />
                        <span>메뉴</span>
                    </div>
                </a>
                <a className="bottom-nav-tap 1" href="/">
                    <div className="nav-category">
                        <img src={Dog} />
                        <span>홈</span>
                    </div>
                </a>
                <a className="bottom-nav-tap 2" href="/user/favorite">
                    <div className="nav-category">
                        <img src={Dog} />
                        <span>즐겨찾기</span>
                    </div>
                </a>
                <a className="bottom-nav-tap 3" href="/user/mymenu">
                    <div className="nav-category">
                        <img src={Dog} />
                        <span>마이메뉴</span>
                    </div>
                </a>
                <a className="bottom-nav-tap 4" href="/user/charge/coin">
                    <div className="nav-category">
                        <img src={Dog} />
                        <span>충전하기</span>
                    </div>
                </a>
            </div>
        </div>
    )
}