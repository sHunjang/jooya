import React from "react";

import { default as CounselorImg } from '../../../../../img/profile2.png'

import './CounselorList.css'

const dummy = [
    {
        name: '꽃비',
        tag: '#신타로',
        category: '신점',
        status: '대기중',
        content: '운명을 밝혀주는 신비한 통찰',
        price: 500,
    },
    {
        name: '월하',
        tag: '#재회적중',
        category: '사주',
        status: '대기중',
        content: '건강+행운, 최고의 삶으로 안내',
        price: 400,
    },
    {
        name: '설연',
        tag: '#영적감각',
        category: '타로',
        status: '대기중',
        content: '당신의 결정을 밝혀내는, 심오한 통찰의제공자.',
        price: 400,
    },
]

export const CounselorList = ({

    counselorName,

}) => {
    return (
        <div className="list2-container">
            <div className="list2-wrap">
                {
                    dummy.map(item => (
                        <div className="list2">
                            <div className="list2-top">
                                <div className="list2-img">
                                    <img src={CounselorImg} />
                                    <div className="list2-counselor-tag">
                                        <span className="tag">{item.tag}</span>
                                    </div>
                                </div>
                                <div className="list2-info">
                                    <div className="list2-counselor">
                                        <div className="list2-counselor-info">
                                            <span className="nickname">{counselorName}</span>
                                            <span className="category">
                                                전화{item.category}
                                            </span>
                                        </div>
                                        <span className="status-on2">● {item.status}</span>
                                    </div>
                                    <div className="list2-counselor-content">
                                        <span className="content">{item.content}</span>
                                    </div>
                                    <div className="list2-counselor-price">
                                        <span className="price">
                                            {item.price}
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
                    ))
                }
            </div>
        </div>
    )
}