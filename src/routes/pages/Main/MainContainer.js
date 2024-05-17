import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import MainPresenter from "./MainPresenter";

const MainContainer = () => {

    const navigate = useNavigate();

    const onClickImg = () => {
        console.log("click");
    };

    const bannerClick = () => {
        navigate("/signup");
    };

    const myMenuClick = () => {
        navigate("/user/mymenu");
    };


    return <MainPresenter
                onClickImg={onClickImg}

                bannerClick={bannerClick}

                myMenuClick={myMenuClick}

            />;
};

export default MainContainer;