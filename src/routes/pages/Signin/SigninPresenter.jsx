import React from "react";

import './Signin.css';

import SigninContainer from "./SigninContainer";
import { TopNavHome } from "../Common/TopNav/TopNavHome";
import { BannerBox } from "../Common/Banner/BannerBox";
import { SigninInput } from "../Common/SinginInput/SigninInput";
import { Input } from "../Common/Input/Input";
import { TopNav } from "../Common/TopNav/TopNav";
import { BottomNav } from "../Common/BottomNav/BottomNav";


const SigninPresenter = () => {
    return (
        <div className="signin-container">
            <TopNav />
            <BannerBox />
            <div className="signin-box">
                <TopNavHome />
                <SigninInput />
            </div>
            <BottomNav />
        </div>
    )
}

export default SigninPresenter;