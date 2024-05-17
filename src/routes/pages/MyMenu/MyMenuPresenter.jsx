import React from "react";

import MyMenuContainer from "./MyMenuContainer";

import './MyMenu.css';

import { TopNav } from "../Common/TopNav/TopNav";
import { BannerBox } from "../Common/Banner/BannerBox";
import { Footer } from "../Common/Footer/Footer";
import { BottomNav } from "../Common/BottomNav/BottomNav";
import { SigninInput } from "../Common/SinginInput/SigninInput";
import { MymenuUser } from "./components/mymenu-user/MymenuUser";

const MyMenuPresenter = ({

    homeClick,

}) => {
    return (
        <div className="layout-container">
            <TopNav />
            <BannerBox />
            <div className="body">
                <div className="body-wrap">
                    <div className="mymenu-container">
                        <div className="mymenu-wrap">
                            <MymenuUser />
                        </div>
                    </div>
                </div>
            </div>
            <div className="body-footer">
                <Footer />
            </div>
            <div className="footer">
                <BottomNav 
                    homeClick={homeClick}
                />
            </div>
        </div>
    )
}

export default MyMenuPresenter;