import React from "react";

import './MymenuUser.css';
import { useNavigate } from 'react-router-dom';

export const MymenuUser = () => {

    const navigate = useNavigate();

    return (
        <div className="mymenu-user">
            <div className="user-need-signin">
                <span>로그인이 필요합니다</span>
                <button className="user-signin-btn" onClick={() => {navigate('/Signin')}}>
                    <span style={{color:'white'}}>로그인</span>
                </button>
            </div>
        </div>
    )
}