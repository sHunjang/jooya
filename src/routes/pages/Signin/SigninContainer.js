import React from "react";

import { useNavigate } from "react-router-dom";

import SigninPresenter from "./SigninPresenter";

const SigninContainer = () => {
    const navigate = useNavigate();

    const myMenuClick = () => {
        navigate("/user/mymenu");
    };

    const homeClick = () => {
        navigate("/");
    };

    return <SigninPresenter 
                title="로그인"
                myMenuClick={myMenuClick}
                homeClick={homeClick}
            />;
};

export default SigninContainer;