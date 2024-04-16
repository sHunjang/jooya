import React from "react";

import { default as CounselorImg } from '../../../../../img/profile2.png'

import './CounselorList.css'

export const CounselorList = ({
    counselorName,

}) => {
    return (
        <div className="list2-container">
            <div className="list2-wrap">
                <div className="list2">
                    <div className="list2-top">
                        <div className="list2-img">
                            <img src={CounselorImg} />
                            <div className="list2-counselor-tag">
                                <span className="tag">#신타로</span>
                                <span className="tag">#재회적중</span>
                                <span className="tag">#영적감각</span>
                            </div>
                        </div>
                        <div className="list2-info">
                            <div className="list2-counselor">
                                <div className="list2-counselor-info">
                                    <span className="nickname">{counselorName}</span>
                                    <span className="category">
                                        전화
                                        신점
                                    </span>
                                </div>
                                <span className="status-on2">● 대기중</span>
                            </div>
                            <div className="list2-counselor-content">
                                <span className="content">운명을 밝혀주는 신비한 통찰</span>
                            </div>
                            <div className="list2-counselor-price">
                                <span className="price">
                                    500
                                    원
                                </span>
                                <span className="unit">( 10초 )</span>
                            </div>
                            <div className="list2-function">
                                <span className="subscribe">구독</span>
                                <span className="like">좋아요</span>
                                <span className="luckymoney">복머니</span>
                            </div>
                        </div>
                    </div>
                    <div className="list2-bottom"></div>
                </div>
            </div>
        </div>
    )
}