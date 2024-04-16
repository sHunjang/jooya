import React from "react";

import './AgreeBox.css';

export const AgreeBox = () => {
    return (
        <div className="agree-box">
            <span>주야주야</span>
            <span className="agree-link">
                <a href="/terms">이용약관</a>
            </span>
            <span></span>
            <span className="agree-link">
                <a href="/policy">개인정보처리방침</a>
            </span>
            <span>예</span>
            <span>동의합니다</span>
            <input className="agree-check" type="checkbox" />
        </div>
    )
}