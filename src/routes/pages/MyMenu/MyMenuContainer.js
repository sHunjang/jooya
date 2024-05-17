import React from "react";
import { useNavigate } from "react-router-dom";

import MyMenuPresenter from "./MyMenuPresenter";

const MyMenuContainer = () => {

    const navigate = useNavigate();

    const homeClick = () => {
        navigate("/");
    };

    return (
        <MyMenuPresenter 
            homeClick={homeClick}
        />
    )
}

export default MyMenuContainer;