import React from "react";

import './SigninInput.css';

export const SigninInput = () => {
    return (

        <div className="signin-input">
            <div className="IdPw-input-box">
                <input type="text" placeholder="아이디(이메일)를 입력해주세요" />
                <span style={{ fontSize: '0.7rem', fontWeight: 'bold', color: '#b52609' }}>이메일 형식을 확인하세요.</span>
            </div>
            <div className="IdPw-input-box">
                <input type="password" placeholder="비밀번호를 입력해주세요" />
            </div>
            <button className="login-btn"><span className="login-text">로그인</span></button>
            <div className="signin-function">
                <a className="function" href="/signin">아이디 찾기</a>
                <a className="function" href="/signin">비밀번호 찾기</a>
                <a className="function" href="/signup">회원가입</a>
            </div>
        </div>
    )
}