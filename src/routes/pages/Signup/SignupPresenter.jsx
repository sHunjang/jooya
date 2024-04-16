import React from "react";

import SignupContainer from "./SignupContainer";
import './Signup.css';

import { TopNav } from "../Common/TopNav/TopNav";
import { BannerBox } from "../Common/Banner/BannerBox";
import { SignupInput } from "./components/SignupInput/SignupInput";
import { AgreeBox } from "./components/Agreebox/AgreeBox";
import { BottomNav } from "../Common/BottomNav/BottomNav";
import { Footer } from "../Common/Footer/Footer";

const SignUpPresenter = () => {
    return (
        <div className="layout-container">
            <TopNav />
            <BannerBox />
            <div className="body">
                <div className="body-wrap">
                    <div className="signup-container">
                        <div className="signup-wrap">
                            <div className="signup-notice">
                                <span>아이디와 비밀번호를 입력해 회원이 되시면 <br />
                                    다양한 서비스를 이용할 수 있습니다.</span>
                            </div>
                            <SignupInput />
                        </div>
                        <AgreeBox />
                        <div className="signup-wrap">
                            <button disabled className="signup-btn">
                                <span style={{ color: 'white', fontSize: '0.8rem', fontWeight: '400' }}>회원가입</span>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="body-footer">
                    <Footer />
                </div>
            </div>
            <div className="footer">
                <BottomNav />
            </div>
        </div>

    )
}

export default SignUpPresenter;