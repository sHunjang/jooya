import React from "react";

import './Signin.css';

import SigninContainer from "./SigninContainer";
import { TopNavHome } from "../Common/TopNav/TopNavHome";
import { BannerBox } from "../Common/Banner/BannerBox";
import { SigninInput } from "../Common/SinginInput/SigninInput";
import { Input } from "../Common/Input/Input";
import { TopNav } from "../Common/TopNav/TopNav";
import { BottomNav } from "../Common/BottomNav/BottomNav";
import { Footer } from "../Common/Footer/Footer";


const SigninPresenter = () => {
    return (
        <div className="layout-container">
            <TopNav />
            <BannerBox />
            <div className="body">
                <div className="body-warp">
                    <div className="signin-container">
                        <div className="signin-box">
                            <TopNavHome />
                            <SigninInput />
                        </div>
                    </div>
                </div>
            </div>
            <div className="body-footer">
                <Footer />
            </div>
            <BottomNav />
        </div>
    )
}

export default SigninPresenter;