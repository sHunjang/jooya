import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import MainPresenter from "./MainPresenter";

const MainContainer = (
) => {
    const onClickImg = () => {
        console.log("click");
    };


    return <MainPresenter onClickImg={onClickImg} />;
};

export default MainContainer;
