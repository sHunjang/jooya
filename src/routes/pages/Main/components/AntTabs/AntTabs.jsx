import React from "react";
import './AntTabs.css';


export const AntTabs = () => {
    return (
        <div className="ant-container">
            <div className="ant-nav">
                <div className="ant-nav-tabs">전체</div>
                <div className="ant-nav-tabs">상담중</div>
                <div className="ant-nav-tabs">대기중</div>
                <div className="ant-nav-tabs">부재중</div>
            </div>
            <div className="ant-content-container">
                {/* 상담사 리스트 */}
            </div>
        </div>
    )
}