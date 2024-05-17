import React from "react";

import { useNavigate } from "react-router-dom";

import SignUpPresenter from "./SignupPresenter";

const SignupContainer = () => {

    const navigate = useNavigate();

    const myMenuClick = () => {
        navigate("/user/mymenu")
    };

    const homeClick = () => {
        navigate("/");
    };

    return (
        <SignUpPresenter 
            title="회원가입"
            myMenuClick={myMenuClick}
            homeClick={homeClick}
        />
    );
};

export default SignupContainer;
