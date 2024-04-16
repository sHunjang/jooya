import React from "react";

import MainContainer from "./MainContainer";
import { BannerBox } from "../Common/Banner/BannerBox";
import { TopNavHome } from "../Common/TopNav/TopNavHome";
import { SlickList } from "./components/SlickList/SlickList";
import { Categories } from "./components/Categories/Categories";
import { AntTabs } from "./components/AntTabs/AntTabs";
import { CounselorList } from "./components/CounselorList/CounselorList";
import { Footer } from "../Common/Footer/Footer";
import { BottomNav } from "../Common/BottomNav/BottomNav";

import './Main.css';


const MainPresenter = ({
    onClickImg,
    
}) => {
    return (
        <div className="layout-container">
            <BannerBox />
            <TopNavHome />
            <div className="body">
                <div className="body-wrap">
                    <div className="main-container">
                        <div className="notice">로그인을 하셔야 상담 서비스를 이용하실 수 있습니다.</div>
                        <div className="slick-list-container">
                            <SlickList onClickImg={onClickImg}/>
                        </div>
                        <Categories />
                        <div className="counselor-lists">
                            <AntTabs />
                            <CounselorList>
                                
                            </CounselorList>
                        </div>
                    </div>
                </div>
            </div>
            <div className="body-footer">
                <Footer />
            </div>
            <div className="footer">
                <BottomNav />
            </div>
        </div>
    )
}

export default MainPresenter;